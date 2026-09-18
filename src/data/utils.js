
export const generateTests = (category, countOrChapters, type, subjectName = null, classGrade = 'All Test', chapterName = null) => {
    const isNamedType = type === 'CHAPTER' || type === 'SUBTOPIC';
    const isArray = Array.isArray(countOrChapters);
    const count = (isNamedType && isArray) ? countOrChapters.length : countOrChapters;
    const items = (isNamedType && isArray) ? countOrChapters : [];

    return Array.from({ length: count }, (_, i) => {
        let title = '';
        let description = '';
        const itemName = (isNamedType && isArray) ? items[i] : null;

        if (type === 'MOCK') {
            title = `${category.toUpperCase()} Full Test ${i + 1} (${classGrade})`;
            description = `Comprehensive Full Test for ${category.toUpperCase()} preparation. Covers ${classGrade === 'All Test' ? 'full' : 'Class ' + classGrade} syllabus.`;
        } else if (type === 'PYQ') {
            title = `${category.toUpperCase()} Paper ${2025 - i}`;
            description = `PYQ from ${2025 - i}.`;
        } else if (type === 'SUBJECT') {
            title = `${subjectName} Test ${i + 1} (${classGrade})`;
            description = `Focused test on ${subjectName} for ${category.toUpperCase()}.`;
        } else if (type === 'CHAPTER' || type === 'SUBTOPIC') {
            title = itemName || `${subjectName} ${type === 'CHAPTER' ? 'Chapter' : 'Subtopic'} Test ${i + 1}`;
            description = `${type === 'CHAPTER' ? 'Chapter-wise' : 'Subtopic focus'} test on ${itemName || subjectName} (${subjectName}).`;
        } else if (type === 'PART') {
            title = `${category.toUpperCase()} Part Test ${i + 1}`;
            description = `Part Syllabus Test covering specific chapters from all subjects.`;
        }

        return {
            id: `${category}-${type}-${subjectName ? subjectName + '-' : ''}${itemName ? itemName.replace(/\s+/g, '-') : i + 1}${classGrade !== 'All Test' ? '-' + classGrade : ''}`,
            title: title,
            type: type,
            subject: subjectName,
            chapter: chapterName || (type === 'CHAPTER' ? itemName : null),
            classGrade: classGrade,
            year: type === 'PYQ' ? 2025 - i : new Date().getFullYear(),
            category: category,
            duration: (type === 'SUBJECT' || type === 'CHAPTER' || type === 'SUBTOPIC') ? 60 : 180,
            totalMarks: (type === 'SUBJECT' || type === 'CHAPTER' || type === 'SUBTOPIC') 
                ? (category === 'neet' ? 180 : 100)
                : (category === 'neet' ? 720 : 300),
            questionsCount: (type === 'SUBJECT' || type === 'CHAPTER' || type === 'SUBTOPIC')
                ? (category === 'neet' ? 45 : 25)
                : (category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90)),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            description: description,
        };
    });
};

export const generateSubjectTests = (category, subjectName, classGrade, testConfigs) => {
    return testConfigs.map((cfg, i) => {
        const testNum = i + 1;
        const id = `${category}-SUBJECT-${subjectName}-${testNum}${classGrade !== 'All Test' ? '-' + classGrade : ''}`;
        const chapters = cfg.chapters || [];
        const title = cfg.title;
        const description = cfg.description || `Chapters: ${chapters.join(', ')}. Focused test on ${subjectName} for ${category.toUpperCase()}.`;

        return {
            id,
            title,
            type: 'SUBJECT',
            subject: subjectName,
            chapter: chapters[0] || null,
            chapters: chapters,
            classGrade,
            year: new Date().getFullYear(),
            category,
            duration: 60,
            totalMarks: category === 'neet' ? 180 : 100,
            questionsCount: category === 'neet' ? 45 : 25,
            difficulty: ['Easy', 'Medium', 'Hard'][i % 3],
            description,
            syllabus: {
                [subjectName]: chapters
            }
        };
    });
};

export const generatePartTests = (category, count, subjectChaptersMap) => {
    return Array.from({ length: count }, (_, i) => {
        let syllabusDescription = "Part Syllabus Test covering: ";

        // Calculate the chunk of chapters for this test index
        const syllabusObj = {};

        Object.entries(subjectChaptersMap).forEach(([subject, chapters]) => {
            const chunkSize = Math.ceil(chapters.length / count);
            const start = i * chunkSize;
            const end = start + chunkSize;
            const currentChapters = chapters.slice(start, end);

            if (currentChapters.length > 0) {
                syllabusObj[subject] = currentChapters;
                syllabusDescription += `\n${subject}: ${currentChapters.join(', ')}.`;
            }
        });

        const grade = i % 2 === 0 ? '11' : '12';
        return {
            id: `${category}-PART-${i + 1}`,
            title: `${category.toUpperCase()} Part Test ${i + 1} (Class ${grade})`,
            type: 'PART',
            subject: 'Mixed',
            classGrade: grade,
            year: new Date().getFullYear(),
            category: category,
            duration: 180,
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            description: syllabusDescription,
            syllabus: syllabusObj
        };
    });
};

export const generateLiveTests = (category, count) => {
    // Live tests are now standardized to 52 Sunday tests exclusively
    return [];
};

export const generateSundayTests = (category, ...args) => {
    const now = new Date();
    // The academic session starts in June (month index 5).
    // If current month is Jan-May (0-4), the active session started in June of the prior year.
    const defaultSessionYear = now.getMonth() < 5 ? now.getFullYear() - 1 : now.getFullYear();
    let year = null;
    let subjectChaptersMap = {};

    for (const arg of args) {
        if (typeof arg === 'number') {
            year = arg;
        } else if (typeof arg === 'object' && arg !== null) {
            subjectChaptersMap = arg;
        }
    }
    // Automatically use the active session year if no explicit year is provided
    if (!year) {
        year = defaultSessionYear;
    }

    const tests = [];

    // Automatically locate the 1st Sunday of JUNE
    let date = new Date(year, 5, 1);
    while (date.getDay() !== 0) {
        date.setDate(date.getDate() + 1);
    }

    // Exactly 52 weekly Sunday tests starting from the 1st Sunday of June
    while (tests.length < 52) {
        tests.push(new Date(date));
        date.setDate(date.getDate() + 7);
    }

    return tests.map((sundayDate, i) => {
        const liveStart = new Date(sundayDate);
        liveStart.setHours(0, 0, 0, 0);

        const liveEnd = new Date(liveStart);
        liveEnd.setHours(liveEnd.getHours() + 48);

        let status = 'Upcoming';
        if (now >= liveStart && now <= liveEnd) status = 'Active';
        else if (now > liveEnd) status = 'Ended';

        const monthName = liveStart.toLocaleString('en-US', { month: 'short' });
        const day = liveStart.getDate();
        const testYear = liveStart.getFullYear();
        
        let syllabusDescription = `Sunday Part Test ${i + 1} covering: `;
        const syllabusObj = {};
        if (subjectChaptersMap && Object.keys(subjectChaptersMap).length > 0) {
            Object.entries(subjectChaptersMap).forEach(([subject, chapters]) => {
                if (!chapters || chapters.length === 0) return;
                const chunkSize = Math.max(1, Math.ceil(chapters.length / 13));
                const start = (i * chunkSize) % chapters.length;
                let currentChapters = [];
                for (let k = 0; k < chunkSize; k++) {
                    currentChapters.push(chapters[(start + k) % chapters.length]);
                }
                currentChapters = [...new Set(currentChapters)];

                if (currentChapters.length > 0) {
                    syllabusObj[subject] = currentChapters;
                    syllabusDescription += `\n${subject}: ${currentChapters.join(', ')}.`;
                }
            });
        }

        const grade = i % 2 === 0 ? '11' : '12';
        return {
            id: `${category}-SUNDAY-${testYear}-${monthName}-${day}`,
            title: `${category.toUpperCase()} Sunday Part Test - ${monthName} ${day}, ${testYear} (Class ${grade}) (${status})`,
            type: 'LIVE',
            subject: 'Mixed',
            classGrade: grade,
            year: testYear,
            category: category,
            duration: 180,
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
            difficulty: ['Easy', 'Medium', 'Hard'][i % 3],
            description: `Weekly Part Test available for 48 hours. \n${syllabusDescription}`,
            liveStart: liveStart.toISOString(),
            liveEnd: liveEnd.toISOString(),
            syllabus: syllabusObj
        };
    });
};
