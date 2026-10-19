import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export const binomialQuestions = [
  {
    assertion: "In the expansion of $(x + a)^n$, the $(r+1)^{\\text{th}}$ term from the beginning is equal to the $(n - r + 1)^{\\text{th}}$ term from the end.",
    reason: "The binomial coefficients of terms equidistant from the beginning and the end are equal, that is, $\\binom{n}{r} = \\binom{n}{n-r}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The $k^{\\text{th}}$ term from the end in an expansion with $(n+1)$ total terms corresponds to the $(n + 1 - k + 1)^{\\text{th}} = (n - k + 2)^{\\text{th}}$ term from the beginning. For $k = r + 1$, $(n - (r+1) + 2) = n - r + 1$. Because $\\binom{n}{r} = \\binom{n}{n-r}$, the coefficient from the beginning matches the coefficient from the end. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "General Term & Properties"
  },
  {
    assertion: "In the expansion of $\\left(x^2 - \\frac{1}{x}\\right)^{15}$, the term independent of $x$ is the $11^{\\text{th}}$ term.",
    reason: "The general term is $T_{r+1} = \\binom{15}{r} (x^2)^{15-r} (-x^{-1})^r = (-1)^r \\binom{15}{r} x^{30 - 3r}$, which gives an exponent of zero when $30 - 3r = 0 \\implies r = 10$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The general term is $T_{r+1} = \\binom{15}{r}(x^2)^{15-r}(-x^{-1})^r = (-1)^r \\binom{15}{r} x^{30 - 3r}$. For the term independent of $x$, setting the power of $x$ to 0 yields $30 - 3r = 0 \\implies r = 10$. Since the term is $T_{r+1}$, this is $T_{10+1} = T_{11}$, the $11^{\\text{th}}$ term. Both Assertion and Reason are true, and Reason is the correct calculation and explanation.",
    difficulty: "Moderate",
    subTopic: "Independent Term"
  },
  {
    assertion: "If $n$ is an even positive integer, the expansion of $(1 + x)^n$ has exactly one middle term, which has the greatest binomial coefficient.",
    reason: "When $n$ is even, the single middle term is the $\\left(\\frac{n}{2} + 1\\right)^{\\text{th}}$ term, and its coefficient $\\binom{n}{n/2}$ is greater than any other coefficient $\\binom{n}{r}$ for $r \\neq \\frac{n}{2}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "For even $n$, the total number of terms is $(n+1)$, which is odd. Hence there is a unique middle term at position $(n/2 + 1)$, corresponding to $r = n/2$. The binomial coefficient function $\\binom{n}{r}$ strictly increases for $0 \\le r < n/2$ and strictly decreases for $n/2 < r \\le n$, reaching its strict global maximum at $r = n/2$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Moderate",
    subTopic: "Middle Term & Greatest Coefficient"
  },
  {
    assertion: "If $n$ is an odd positive integer, the expansion of $(1 + x)^n$ possesses two middle terms with equal binomial coefficients.",
    reason: "For odd $n$, the two middle terms are the $\\left(\\frac{n+1}{2}\\right)^{\\text{th}}$ and $\\left(\\frac{n+3}{2}\\right)^{\\text{th}}$ terms, with coefficients $\\binom{n}{\\frac{n-1}{2}}$ and $\\binom{n}{\\frac{n+1}{2}}$, which are equal by symmetry.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "When $n$ is odd, the number of terms is $n+1$ (an even integer), resulting in two central positions: $\\frac{n+1}{2}$ and $\\frac{n+3}{2}$. The corresponding $r$ values are $\\frac{n-1}{2}$ and $\\frac{n+1}{2}$. By the identity $\\binom{n}{r} = \\binom{n}{n-r}$, $\\binom{n}{(n-1)/2} = \\binom{n}{(n+1)/2}$. Both Assertion and Reason are true, and Reason is the exact explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Middle Term & Greatest Coefficient"
  },
  {
    assertion: "In any expansion of $(a + b)^n$, the numerically greatest term is always identical to the term with the greatest binomial coefficient.",
    reason: "The magnitude of a term $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$ depends not only on the binomial coefficient $\\binom{n}{r}$ but also on the relative magnitudes of $a$ and $b$.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The Assertion is false: the numerically greatest term depends heavily on the values of $a$ and $b$; for example, in $(1 + 10x)^{10}$ at $x = 1$, the last terms are overwhelmingly larger than the middle term. The Reason is completely true: $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$ involves both the combinatorial coefficient and the powers of $a$ and $b$. Hence, Assertion is false, but Reason is true.",
    difficulty: "Difficult",
    subTopic: "Numerically Greatest Term"
  },
  {
    assertion: "The sum of all binomial coefficients in the expansion of $(1 + x)^n$ is $2^n$, that is, $\\sum_{r=0}^n \\binom{n}{r} = 2^n$.",
    reason: "Substituting $x = 1$ in the binomial expansion identity $(1 + x)^n = \\sum_{r=0}^n \\binom{n}{r} x^r$ immediately yields $(1 + 1)^n = 2^n = \\sum_{r=0}^n \\binom{n}{r}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Since the binomial theorem holds identically for all real $x$, setting $x = 1$ in $(1 + x)^n = \\binom{n}{0} + \\binom{n}{1} x + \\dots + \\binom{n}{n} x^n$ gives $2^n = C_0 + C_1 + \\dots + C_n$. Both Assertion and Reason are true, and Reason provides the rigorous proof and explanation.",
    difficulty: "Easy",
    subTopic: "Binomial Coefficients Identities"
  },
  {
    assertion: "The sum of the coefficients of even-indexed terms equals the sum of the coefficients of odd-indexed terms in $(1 + x)^n$, and each sum is equal to $2^{n-1}$.",
    reason: "Substituting $x = -1$ into $(1 + x)^n$ yields $0 = C_0 - C_1 + C_2 - C_3 + \\dots + (-1)^n C_n$, so $C_0 + C_2 + C_4 + \\dots = C_1 + C_3 + C_5 + \\dots = \\frac{1}{2}(2^n) = 2^{n-1}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Setting $x = -1$ gives $(1 - 1)^n = 0 = (C_0 + C_2 + \\dots) - (C_1 + C_3 + \\dots)$. Since the sum of all coefficients is $2^n$, each group equals $\\frac{2^n}{2} = 2^{n-1}$. Both Assertion and Reason are true, and Reason is the exact derivation and explanation.",
    difficulty: "Easy",
    subTopic: "Binomial Coefficients Identities"
  },
  {
    assertion: "The value of the sum $\\sum_{r=1}^n r \\binom{n}{r}$ is equal to $n \\cdot 2^{n-1}$.",
    reason: "Using the combinatorial identity $r \\binom{n}{r} = n \\binom{n-1}{r-1}$, the sum transforms to $n \\sum_{r=1}^n \\binom{n-1}{r-1} = n (2^{n-1})$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "We have $r \\binom{n}{r} = r \\frac{n}{r} \\binom{n-1}{r-1} = n \\binom{n-1}{r-1}$. Summing from $r = 1$ to $n$ gives $n \\sum_{k=0}^{n-1} \\binom{n-1}{k} = n \\cdot 2^{n-1}$. (Alternatively, differentiating $(1+x)^n$ and evaluating at $x = 1$). Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Binomial Coefficients Identities"
  },
  {
    assertion: "The value of the sum $\\sum_{r=0}^n \\frac{\\binom{n}{r}}{r+1}$ is equal to $\\frac{2^{n+1} - 1}{n+1}$.",
    reason: "Integrating the polynomial identity $(1 + x)^n = \\sum_{r=0}^n \\binom{n}{r} x^r$ from $x = 0$ to $x = 1$ gives $\\left[\\frac{(1+x)^{n+1}}{n+1}\\right]_0^1 = \\frac{2^{n+1} - 1}{n+1} = \\sum_{r=0}^n \\frac{\\binom{n}{r}}{r+1}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Integrating both sides of $(1+x)^n = \\sum_{r=0}^n \\binom{n}{r}x^r$ from $0$ to $1$ gives $\\int_0^1 (1+x)^n dx = \\left[ \\frac{(1+x)^{n+1}}{n+1} \\right]_0^1 = \\frac{2^{n+1}-1}{n+1}$, which equals $\\sum_{r=0}^n \\binom{n}{r} \\left[\\frac{x^{r+1}}{r+1}\\right]_0^1 = \\sum_{r=0}^n \\frac{\\binom{n}{r}}{r+1}$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Calculus in Binomial Theorem"
  },
  {
    assertion: "The sum of the squares of the binomial coefficients $\\sum_{r=0}^n \\binom{n}{r}^2$ equals $\\binom{2n}{n}$.",
    reason: "The coefficient of $x^n$ in the identity $(1 + x)^n (x + 1)^n = (1 + x)^{2n}$ is given by $\\sum_{r=0}^n \\binom{n}{r} \\binom{n}{n-r} = \\sum_{r=0}^n \\binom{n}{r}^2$, which must match $\\binom{2n}{n}$ from the RHS.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Writing $(1+x)^n = C_0 + C_1 x + \\dots + C_n x^n$ and $(x+1)^n = C_0 x^n + C_1 x^{n-1} + \\dots + C_n$, the product is $(1+x)^{2n}$. The coefficient of $x^n$ on the LHS is $C_0^2 + C_1^2 + \\dots + C_n^2$, and on the RHS is $\\binom{2n}{n}$. By comparing coefficients, the identity holds. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Difficult",
    subTopic: "Vandermonde & Products"
  },
  {
    assertion: "For all positive integers $m, n$ and $r \\le m + n$, the identity $\\sum_{k=0}^r \\binom{m}{k} \\binom{n}{r-k} = \\binom{m+n}{r}$ is valid.",
    reason: "The identity follows by equating the coefficients of $x^r$ on both sides of the identity $(1 + x)^m (1 + x)^n = (1 + x)^{m+n}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "This is Vandermonde's convolution identity. In the polynomial expansion $(1+x)^m (1+x)^n = (1+x)^{m+n}$, the coefficient of $x^r$ on the LHS is obtained by convolving the coefficient of $x^k$ from the first factor with $x^{r-k}$ from the second factor, giving $\\sum_{k=0}^r \\binom{m}{k}\\binom{n}{r-k}$, while the RHS coefficient of $x^r$ is $\\binom{m+n}{r}$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Vandermonde & Products"
  },
  {
    assertion: "For any positive integer $n$, $3^{2n+2} - 8n - 9$ is divisible by 64.",
    reason: "Writing $3^{2n+2} = 9^{n+1} = (1 + 8)^{n+1}$ and expanding using the binomial theorem gives $(1 + 8)^{n+1} = 1 + 8(n+1) + \\binom{n+1}{2} 8^2 + \\dots$, so $(1 + 8)^{n+1} - 8n - 9 = 64 \\left[\\binom{n+1}{2} + \\binom{n+1}{3} 8 + \\dots\\right]$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "$3^{2n+2} = (3^2)^{n+1} = 9^{n+1} = (1 + 8)^{n+1} = 1 + (n+1)8 + \\binom{n+1}{2} 8^2 + \\binom{n+1}{3} 8^3 + \\dots$ Subtracting $(8n + 9)$ eliminates the constant and linear terms: $(1 + 8n + 8) - (8n + 9) = 0$. The remaining terms all contain $8^2 = 64$ as a factor. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Divisibility & Remainders"
  },
  {
    assertion: "The remainder when $2^{2026}$ is divided by 7 is equal to 2.",
    reason: "Writing $2^{2026} = 2^{3 \\times 675 + 1} = 2 \\times (8)^{675} = 2 \\times (1 + 7)^{675}$, binomial expansion shows every term except the first is a multiple of 7, leaving $2 \\times 1 = 2$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "$2^{2026} = 2 \\cdot (2^3)^{675} = 2 \\cdot 8^{675} = 2(7 + 1)^{675} = 2 [7k + 1] = 14k + 2$. Dividing by 7 gives a remainder of 2. Both Assertion and Reason are true, and Reason is the exact calculation and explanation.",
    difficulty: "Moderate",
    subTopic: "Divisibility & Remainders"
  },
  {
    assertion: "If $(5 + 2\\sqrt{6})^n = I + f$, where $I$ is an integer and $0 < f < 1$, then $(I + f)(1 - f) = 1$.",
    reason: "Defining $f' = (5 - 2\\sqrt{6})^n$, we have $0 < f' < 1$ and $(I + f) + f' = (5 + 2\\sqrt{6})^n + (5 - 2\\sqrt{6})^n$, which is an even integer, implying $f + f' = 1$ and $(I + f)f' = (5^2 - (2\\sqrt{6})^2)^n = 1^n = 1$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Since $5 - 2\\sqrt{6} = \\frac{1}{5 + 2\\sqrt{6}} \\approx 5 - 4.899 = 0.101$, $0 < f' = (5 - 2\\sqrt{6})^n < 1$. In the sum $(5 + 2\\sqrt{6})^n + (5 - 2\\sqrt{6})^n$, all terms with $\\sqrt{6}$ cancel, yielding an integer $2k$. Thus $I + f + f' = 2k$, which forces $f + f' = 1 \\implies f' = 1 - f$. Then $(I + f)(1 - f) = (5 + 2\\sqrt{6})^n (5 - 2\\sqrt{6})^n = (25 - 24)^n = 1$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Fractional Part & Integral Part"
  },
  {
    assertion: "The expansion $(1 - x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \\dots + (r+1)x^r + \\dots$ is valid for all real numbers $x \\neq 1$.",
    reason: "The binomial series expansion $(1 + x)^n$ for any negative integer or fractional index $n$ converges if and only if $|x| < 1$.",
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The Assertion is false: the binomial expansion for a non-natural exponent requires $|x| < 1$ for convergence; it is completely invalid and divergent for $|x| \\ge 1$ (e.g. for $x = 2$, the series diverges). The Reason is true: the binomial series $(1+x)^n$ for $n \\notin \\mathbb{N}$ has a radius of convergence $R = 1$ and is valid only when $|x| < 1$. Hence, Assertion is false, but Reason is true.",
    difficulty: "Difficult",
    subTopic: "Binomial Theorem for Any Index"
  },
  {
    assertion: "The total number of distinct terms in the expansion of $(x_1 + x_2 + x_3 + \\dots + x_k)^n$ is $\\binom{n + k - 1}{k - 1}$.",
    reason: "Each distinct term is of the form $C \\cdot x_1^{r_1} x_2^{r_2} \\dots x_k^{r_k}$, where $r_1 + r_2 + \\dots + r_k = n$ with $r_i \\ge 0$, and the number of non-negative integer solutions to this equation is $\\binom{n + k - 1}{k - 1}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "By the multinomial theorem, every distinct monomial corresponds to a partition of the degree $n$ into $k$ non-negative integers $r_1, \\dots, r_k$ such that $\\sum_{i=1}^k r_i = n$. By stars and bars combinatorics, the number of such integer partitions is $\\binom{n + k - 1}{k - 1}$. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
    difficulty: "Moderate",
    subTopic: "Multinomial Theorem"
  },
  {
    assertion: "In the expansion of $(1 + x + x^2)^{10}$, the sum of all coefficients is $3^{10} = 59049$.",
    reason: "The sum of the coefficients of any polynomial expansion $P(x)$ is obtained simply by evaluating $P(1)$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Let $(1 + x + x^2)^{10} = a_0 + a_1 x + a_2 x^2 + \\dots + a_{20} x^{20}$. To find the sum of coefficients $\\sum_{i=0}^{20} a_i$, substitute $x = 1$: $(1 + 1 + 1^2)^{10} = 3^{10} = 59049$. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Easy",
    subTopic: "Multinomial Theorem"
  },
  {
    assertion: "The coefficient of $x^4$ in the expansion of $\\left(1 + x + x^2 + x^3\\right)^n$ is $\\binom{n}{4} + \\binom{n}{2} + 2\\binom{n}{3}$.",
    reason: "We can factor $1 + x + x^2 + x^3$ as $(1 + x)(1 + x^2)$, so the expansion becomes $(1 + x)^n (1 + x^2)^n$, and the coefficient of $x^4$ is $\\sum_{2k + m = 4} \\binom{n}{k}\\binom{n}{m}$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Factoring yields $(1+x)^n (1+x^2)^n$. To get $x^4$, we take: (i) $k=0$ from $(1+x^2)^n$ and $m=4$ from $(1+x)^n \\implies \\binom{n}{0}\\binom{n}{4} = \\binom{n}{4}$; (ii) $k=1$ and $m=2 \\implies \\binom{n}{1}\\binom{n}{2} = n\\binom{n}{2}$; (iii) $k=2$ and $m=0 \\implies \\binom{n}{2}\\binom{n}{0} = \\binom{n}{2}$. Using $n\\binom{n}{2} = 3\\binom{n}{3} + \\binom{n}{2}$ gives the equivalent form. Both Assertion and Reason are true, and Reason correctly explains Assertion.",
    difficulty: "Difficult",
    subTopic: "Multinomial Theorem"
  },
  {
    assertion: "The value of the double sum $\\sum_{0 \\le i < j \\le n} \\binom{n}{i} \\binom{n}{j}$ is equal to $\\frac{1}{2} \\left(2^{2n} - \\binom{2n}{n}\\right)$.",
    reason: "Expanding $\\left(\\sum_{i=0}^n \\binom{n}{i}\\right)^2 = \\sum_{i=0}^n \\binom{n}{i}^2 + 2 \\sum_{0 \\le i < j \\le n} \\binom{n}{i} \\binom{n}{j}$, and substituting $\\sum \\binom{n}{i} = 2^n$ and $\\sum \\binom{n}{i}^2 = \\binom{2n}{n}$, gives the result.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Let $S = \\sum_{i=0}^n \\binom{n}{i} = 2^n$. Then $S^2 = (2^n)^2 = 2^{2n}$. On the other hand, $S^2 = \\left(\\sum_{i=0}^n \\binom{n}{i}\\right) \\left(\\sum_{j=0}^n \\binom{n}{j}\\right) = \\sum_{i=0}^n \\binom{n}{i}^2 + 2 \\sum_{0 \\le i < j \\le n} \\binom{n}{i} \\binom{n}{j}$. Since $\\sum_{i=0}^n \\binom{n}{i}^2 = \\binom{2n}{n}$, we have $2 \\sum_{i < j} = 2^{2n} - \\binom{2n}{n} \\implies \\sum_{i < j} = \\frac{1}{2}\\left(2^{2n} - \\binom{2n}{n}\\right)$. Both Assertion and Reason are true, and Reason is the exact algebraic derivation and explanation.",
    difficulty: "Difficult",
    subTopic: "Double Summations"
  },
  {
    assertion: "In the expansion of $(1 + x)^n$, if the coefficients of three consecutive terms are in arithmetic progression, then $n + 2$ must be a perfect square.",
    reason: "If $\\binom{n}{r-1}, \\binom{n}{r}, \\binom{n}{r+1}$ form an AP, the condition $2 \\binom{n}{r} = \\binom{n}{r-1} + \\binom{n}{r+1}$ leads to the quadratic equation $(n - 2r)^2 = n + 2$.",
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Dividing $2 \\binom{n}{r} = \\binom{n}{r-1} + \\binom{n}{r+1}$ by $\\binom{n}{r}$ gives $2 = \\frac{r}{n-r+1} + \\frac{n-r}{r+1}$. Simplifying leads directly to $(n - 2r)^2 = n + 2$. Since $(n - 2r)$ is an integer, $(n - 2r)^2$ is a perfect square, which requires $n + 2$ to be a perfect square (e.g. $n = 7, 14, 23, 34$). Both Assertion and Reason are true, and Reason is the exact mathematical proof and explanation.",
    difficulty: "Difficult",
    subTopic: "Coefficients in Progression"
  }
];

export async function insertBinomialQuestions() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const qBank = db.collection('questionBank');

  console.log('Inserting 20 Binomial Theorem AR questions...');
  const insertedIds = [];

  for (let i = 0; i < binomialQuestions.length; i++) {
    const q = binomialQuestions[i];
    const doc = {
      type: "ASSERTION_REASON",
      questionType: "Assertion–Reasoning",
      subject: "Mathematics",
      chapter: "Binomial Theorem",
      topic: "Binomial Theorem",
      subTopic: q.subTopic,
      difficulty: q.difficulty,
      class: "Class 11",
      exam: "JEE Main",
      targetExams: ["JEE Main"],
      marks: 4,
      negativeMarks: 1,
      idealTimeSeconds: 90,
      assertion: q.assertion,
      reason: q.reason,
      question: `Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n(c) (A) is true but (R) is false.\n(d) (A) is false but (R) is true.\n\nAssertion (A): ${q.assertion}\nReason (R): ${q.reason}`,
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      correctAnswer: q.correctAnswer,
      correctOption: q.correctOption,
      explanation: q.explanation,
      source: "Newly Authored 2026 - Master AR Engine",
      provenance: "Newly Authored 2026",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const res = await qBank.insertOne(doc);
    insertedIds.push(res.insertedId);
  }

  console.log(`Successfully inserted ${insertedIds.length} Binomial Theorem AR questions.`);
  await client.close();
  return insertedIds;
}

if (process.argv[1]?.endsWith('author_binomial_theorem_ar.mjs')) {
  insertBinomialQuestions().catch(console.error);
}
