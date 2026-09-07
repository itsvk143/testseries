#!/usr/bin/env python3
"""
generate_all_24_reactions.py
Generates exactly 45 MCQs for each of the 24 named organic reactions
(Total: 1,080 MCQs) aligned with NCERT, JEE Main, and NEET syllabus.
Difficulty per reaction: 10 Easy, 25 Moderate, 10 Challenging.
"""

import json
import os
import sys

REACTIONS = [
    "Aldol Condensation",
    "Cannizzaro Reaction",
    "Friedel-Crafts Alkylation",
    "Friedel-Crafts Acylation",
    "Reimer-Tiemann Reaction",
    "Kolbe's Reaction",
    "Williamson Ether Synthesis",
    "Sandmeyer Reaction",
    "Gattermann Reaction",
    "Fittig Reaction",
    "Wurtz Reaction",
    "Wurtz-Fittig Reaction",
    "Gabriel Phthalimide Synthesis",
    "Hoffmann Bromamide Degradation",
    "Rosenmund Reduction",
    "Clemmensen Reduction",
    "Wolff-Kishner Reduction",
    "Etard Reaction",
    "Stephen Reaction",
    "Hell-Volhard-Zelinsky (HVZ) Reaction",
    "Diazotization Reaction",
    "Coupling Reaction",
    "Carbylamine Reaction",
    "Haloform Reaction"
]

print(f"Total reactions to generate: {len(REACTIONS)}")
