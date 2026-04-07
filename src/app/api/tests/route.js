import { promises as fs } from 'fs';
import path from 'path';

// Path to custom tests JSON
const dataFilePath = path.join(process.cwd(), 'src/data/tests', 'custom_tests.json');

// ── In-memory cache (Fix #5) ──────────────────────────────────────────────────
// Avoids reading the file from disk on every test page load.
// Cache is invalidated on every write (SAVE / DELETE).
let _cache = null;
let _cacheAt = 0;
const CACHE_TTL_MS = 60_000; // 60 seconds

async function getCustomTests() {
    const now = Date.now();
    if (_cache && (now - _cacheAt) < CACHE_TTL_MS) {
        return _cache; // serve from memory
    }
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        _cache = JSON.parse(data);
        _cacheAt = now;
        return _cache;
    } catch {
        return {};
    }
}

async function saveCustomTests(data) {
    try {
        const dir = path.dirname(dataFilePath);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
        // Invalidate cache after write
        _cache = data;
        _cacheAt = Date.now();
    } catch (error) {
        console.error('Error saving custom tests:', error);
        throw error;
    }
}

export async function GET() {
    try {
        const customTests = await getCustomTests();
        return Response.json(customTests);
    } catch {
        return Response.json({ error: 'Failed to load custom tests' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { test, action } = body;

        if (!test || !test.id) {
            return Response.json({ error: 'Test data with an ID is required' }, { status: 400 });
        }

        const customTests = await getCustomTests();

        if (action === 'SAVE') {
            customTests[test.id] = {
                ...customTests[test.id],
                ...test,
                isCustom: true
            };
        } else if (action === 'DELETE') {
            delete customTests[test.id];
        } else {
            return Response.json({ error: 'Invalid action' }, { status: 400 });
        }

        await saveCustomTests(customTests);
        return Response.json({ success: true, test: customTests[test.id] || null });
    } catch (error) {
        console.error('API Error in /api/tests:', error);
        return Response.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
