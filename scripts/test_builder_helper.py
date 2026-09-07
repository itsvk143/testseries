import json
import os

def create_reaction_questions(reaction_name, data):
    """
    Builds exactly 45 questions for a given reaction:
    - 10 Easy
    - 25 Moderate
    - 10 Challenging
    """
    questions = []
    
    # 10 Easy
    for i, item in enumerate(data['easy']):
        questions.append({
            "id": len(questions) + 1,
            "reaction": reaction_name,
            "difficulty": "Easy",
            "question": item['q'],
            "options": [
                {"id": "a", "text": item['opts'][0]},
                {"id": "b", "text": item['opts'][1]},
                {"id": "c", "text": item['opts'][2]},
                {"id": "d", "text": item['opts'][3]}
            ],
            "correctOption": item['ans'],
            "explanation": item['exp']
        })
        
    # 25 Moderate
    for i, item in enumerate(data['moderate']):
        questions.append({
            "id": len(questions) + 1,
            "reaction": reaction_name,
            "difficulty": "Moderate",
            "question": item['q'],
            "options": [
                {"id": "a", "text": item['opts'][0]},
                {"id": "b", "text": item['opts'][1]},
                {"id": "c", "text": item['opts'][2]},
                {"id": "d", "text": item['opts'][3]}
            ],
            "correctOption": item['ans'],
            "explanation": item['exp']
        })
        
    # 10 Challenging
    for i, item in enumerate(data['challenging']):
        questions.append({
            "id": len(questions) + 1,
            "reaction": reaction_name,
            "difficulty": "Challenging",
            "question": item['q'],
            "options": [
                {"id": "a", "text": item['opts'][0]},
                {"id": "b", "text": item['opts'][1]},
                {"id": "c", "text": item['opts'][2]},
                {"id": "d", "text": item['opts'][3]}
            ],
            "correctOption": item['ans'],
            "explanation": item['exp']
        })
        
    assert len(questions) == 45, f"Expected 45 questions, got {len(questions)} for {reaction_name}"
    return questions

print("Helper defined.")
