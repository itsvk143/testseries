import json
import random
from bson import ObjectId

def make_q(q, correct, distractors, exp, subtopic, difficulty="Medium", cog="Application", idx=0):
    assert len(distractors) >= 3, f"Need at least 3 distractors for: {q}"
    target_idx = idx % 4
    opts = []
    d_ptr = 0
    for i in range(4):
        if i == target_idx:
            opts.append(correct.strip())
        else:
            opts.append(distractors[d_ptr].strip())
            d_ptr += 1
    
    return {
        "_id": str(ObjectId()),
        "question": q.strip(),
        "options": opts,
        "correctAnswer": target_idx,
        "correctOption": target_idx,
        "explanation": exp.strip(),
        "subject": "Chemistry",
        "chapter": "Organic Name Reactions",
        "topic": "Organic Name Reactions",
        "subTopic": subtopic,
        "subtopic": subtopic,
        "difficulty": difficulty,
        "questionType": "MCQ (Multiple Choice Question)",
        "type": "MCQ",
        "cognitiveLevel": cog,
        "targetExams": ["JEE Main", "NEET", "BITSAT"],
        "exam": "JEE Main / NEET / BITSAT",
        "source": "JEE Main PYQ 2015-2024 & NCERT Exemplar",
        "marks": 4,
        "negativeMarks": 1,
        "status": "Active"
    }

print("make_q defined successfully")
