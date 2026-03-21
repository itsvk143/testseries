
export const generateTests = (category, countOrChapters, type, subjectName = null, classGrade = 'All Test') => {
    const isChapter = type === 'CHAPTER';
    const count = isChapter ? countOrChapters.length : countOrChapters;
    const chapters = isChapter ? countOrChapters : [];

    return Array.from({ length: count }, (_, i) => {
        let title = '';
        let description = '';
        const chapterName = isChapter ? chapters[i] : null;

        if (type === 'MOCK') {
            title = `${category.toUpperCase()} Mock Test ${i + 1} (${classGrade})`;
            description = `Comprehensive Mock Test for ${category.toUpperCase()} preparation. Covers ${classGrade === 'All Test' ? 'full' : 'Class ' + classGrade} syllabus.`;
        } else if (type === 'PYQ') {
            title = `${category.toUpperCase()} Paper ${2025 - i}`;
            description = `Previous Year Question Paper from ${2025 - i}.`;
        } else if (type === 'SUBJECT') {
            title = `${subjectName} Test ${i + 1} (${classGrade})`;
            description = `Focused test on ${subjectName} for ${category.toUpperCase()}.`;
        } else if (type === 'CHAPTER') {
            title = `${chapterName}`;
            description = `Chapter-wise practice test on ${chapterName} (${subjectName}).`;
        } else if (type === 'PART') {
            title = `${category.toUpperCase()} Part Test ${i + 1}`;
            description = `Part Syllabus Test covering specific chapters from all subjects.`;
        }

        return {
            id: `${category}-${type}-${subjectName ? subjectName + '-' : ''}${isChapter ? chapterName.replace(/\s+/g, '-') : i + 1}${classGrade !== 'All Test' ? '-' + classGrade : ''}`,
            title: title,
            type: type,
            subject: subjectName,
            classGrade: classGrade,
            year: type === 'PYQ' ? 2025 - i : new Date().getFullYear(),
            category: category,
            duration: 180, // minutes - All exams set to 180 min
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
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

        return {
            id: `${category}-PART-${i + 1}`,
            title: `${category.toUpperCase()} Part Test ${i + 1}`,
            type: 'PART',
            subject: 'Mixed', // or null
            year: new Date().getFullYear(),
            category: category,
            duration: 180,
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            description: syllabusDescription,
            syllabus: syllabusObj // structured syllabus for potential UI use
        };
    });
};

export const generateLiveTests = (category, count) => {
    const days = [9, 18, 27];
    const testsPerYear = 36; // 3 tests per month * 12 months
    const now = new Date();
    const currentYear = now.getFullYear();

    return Array.from({ length: testsPerYear }, (_, i) => {
        const testDay = days[i % 3] || 1;
        const monthIndex = Math.floor(i / 3); // 0 (Jan) to 11 (Dec)
        
        let liveStart = new Date(currentYear, monthIndex, testDay, 0, 0, 0);
        let liveEnd = new Date(liveStart);
        liveEnd.setHours(liveEnd.getHours() + 48); // 48-hour window

        let status = 'Upcoming';
        if (now >= liveStart && now <= liveEnd) status = 'Active';
        else if (now > liveEnd) status = 'Ended';

        const monthName = liveStart.toLocaleString('en-US', { month: 'short' });
        const title = `${category.replace('-', ' ').toUpperCase()} Live Test - ${monthName} ${testDay} (${status})`;

        return {
            id: `${category}-LIVE-${i + 1}`,
            title: title,
            type: 'LIVE',
            subject: 'Mixed',
            year: currentYear,
            category: category,
            duration: 180,
            totalMarks: category === 'neet' ? 720 : 300,
            questionsCount: category === 'neet' ? 180 : (category === 'jee-mains' ? 75 : 90),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
            description: `Scheduled Live Test available for 48 hours starting on ${monthName} ${testDay}.`,
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

        return {
            id: `${category}-SUNDAY-${year}-${monthName}-${day}`,
            title: `${category.toUpperCase()} Sunday Part Test - ${monthName} ${day}, ${year} (${status})`,
            type: 'LIVE',
            subject: 'Mixed',
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
