const master = require('./chapterMasterService.cjs');

export const NEET_BOTANY_17 = master.NEET_BOTANY_17;
export const NEET_ZOOLOGY_15 = master.NEET_ZOOLOGY_15;
export const NEET_EXCLUDED_5 = master.NEET_EXCLUDED_5;
export const getCanonicalChapter = master.getCanonicalChapter;
export const getNeetChapters = master.getNeetChapters;
export const getActiveNeetChapters = master.getActiveNeetChapters;
export const getExcludedNeetChapters = master.getExcludedNeetChapters;
export const isChapterExcluded = master.isChapterExcluded;
export const getSubtopicsForChapter = master.getSubtopicsForChapter;

export default master;

