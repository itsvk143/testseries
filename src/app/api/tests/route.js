import { promises as fs } from 'fs';
import path from 'path';

// Path to custom tests JSON
const dataFilePath = path.join(process.cwd(), 'src/data/tests', 'custom_tests.json');

async function getCustomTests() {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Return empty object if file doesn't exist or is invalid
        return {};
    }
}

async function saveCustomTests(data) {
    try {
        // Ensure directory exists
        const dir = path.dirname(dataFilePath);
        await fs.mkdir(dir, { recursive: true });
        
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error saving custom tests:', error);
        throw error;
    }
}

export async function GET(request) {
    try {
        const customTests = await getCustomTests();
        return Response.json(customTests);
    } catch (error) {
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
            // Add or Overwrite the custom test data for this ID
            customTests[test.id] = {
                ...customTests[test.id], // preserve existing overrides if any
                ...test, // apply new overrides (title, description, dates, etc)
                isCustom: true // explicitly flag that it's been edited/created by admin
            };
        } else if (action === 'DELETE') {
            // Remove the custom override
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
