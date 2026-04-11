
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
    const now = new Date();
    const currentYear = now.getFullYear();
    const wednesdays = [];

    // Find all Wednesdays in current and next year for consistent scheduling
    for (let year = 2026; year <= 2027; year++) {
        for (let month = 0; month < 12; month++) {
            let date = new Date(year, month, 1);
            while (date.getDay() !== 3) { // 3 is Wednesday
                date.setDate(date.getDate() + 1);
            }
            while (date.getMonth() === month) {
                wednesdays.push(new Date(date));
                date.setDate(date.getDate() + 7);
            }
        }
    }

    return wednesdays.map((wedDate, i) => {
        let liveStart = new Date(wedDate);
        liveStart.setHours(0, 0, 0, 0);
        let liveEnd = new Date(liveStart);
        liveEnd.setHours(liveEnd.getHours() + 48); // 48-hour window

        let status = 'Upcoming';
        if (now >= liveStart && now <= liveEnd) status = 'Active';
        else if (now > liveEnd) status = 'Ended';

        const monthName = liveStart.toLocaleString('en-US', { month: 'short' });
        const day = liveStart.getDate();
        const year = liveStart.getFullYear();
        
        const grade = i % 2 === 0 ? '11' : '12';
        const title = `${category.replace('-', ' ').toUpperCase()} Cumulative Test - ${monthName} ${day}, ${year} (Class ${grade}) (${status})`;

        return {
            id: `${category}-CT-${year}-${monthName}-${day}`,
            title: title,
            type: 'LIVE',
            subject: 'Mixed',
            classGrade: grade,
            year: year,
            category: category,
            duration: 180,
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            description: `Scheduled Cumulative Test for Class ${grade} available for 48 hours starting on Wednesday, ${monthName} ${day}.`,
            liveStart: liveStart.toISOString(),
            liveEnd: liveEnd.toISOString(),
        };
    });
};

export const generateSundayTests = (category, startYear, endYear, subjectChaptersMap) => {
    const tests = [];
    const now = new Date();

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 0; month < 12; month++) {
            let date = new Date(year, month, 1);
            while (date.getDay() !== 0) {
                date.setDate(date.getDate() + 1);
            }
            while (date.getMonth() === month) {
                tests.push(new Date(date));
                date.setDate(date.getDate() + 7);
            }
        }
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
        const year = liveStart.getFullYear();
        
        let syllabusDescription = "Sunday Part Test covering: ";
        const syllabusObj = {};
        Object.entries(subjectChaptersMap).forEach(([subject, chapters]) => {
            const chunkSize = Math.ceil(chapters.length / (tests.length / 4)) || 1;
            const start = (i * chunkSize) % chapters.length;
            const end = start + chunkSize;
            const currentChapters = chapters.slice(start, end);

            if (currentChapters.length > 0) {
                syllabusObj[subject] = currentChapters;
                syllabusDescription += `\n${subject}: ${currentChapters.join(', ')}.`;
            }
        });

        const grade = i % 2 === 0 ? '11' : '12';
        return {
            id: `${category}-SUNDAY-${year}-${monthName}-${day}`,
            title: `${category.toUpperCase()} Sunday Part Test - ${monthName} ${day}, ${year} (Class ${grade}) (${status})`,
            type: 'LIVE',
            subject: 'Mixed',
            classGrade: grade,
            year: year,
            category: category,
            duration: 180,
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            description: `Weekly Part Test available for 48 hours. \n${syllabusDescription}`,
            liveStart: liveStart.toISOString(),
            liveEnd: liveEnd.toISOString(),
            syllabus: syllabusObj
        };
    });
};
