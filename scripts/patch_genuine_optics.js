require('dotenv').config({ path: '.env.local' });
const { MongoClient, ObjectId } = require('mongodb');

async function fix() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('testseries');
  const collection = db.collection('questionBank');

  // 1. 6a98e4fd910bb37b0e5580ec
  await collection.updateOne(
    { _id: new ObjectId('6a98e4fd910bb37b0e5580ec') },
    {
      $set: {
        explanation: "When the experiment is performed in a medium with refractive index $\\mu$, the wavelength of light in that medium becomes $\\lambda' = \\frac{\\lambda}{\\mu}$. Since fringe width is given by $\\beta = \\frac{\\lambda D}{d}$, the new fringe width will be $\\beta' = \\frac{\\lambda' D}{d} = \\frac{\\lambda D}{\\mu d} = \\frac{\\beta}{\\mu}$. Hence, the fringe width decreases by a factor of $\\mu$.",
        updatedAt: new Date().toISOString()
      }
    }
  );

  // 2. 6a98e50a910bb37b0e5580f5
  await collection.updateOne(
    { _id: new ObjectId('6a98e50a910bb37b0e5580f5') },
    {
      $set: {
        correctAnswer: 0,
        explanation: "For a concave lens, a virtual image is erect, so magnification is $m = +\\frac{1}{2}$. Using the lens formula in terms of magnification: $m = \\frac{f}{f + u} \\implies \\frac{1}{2} = \\frac{-30}{-30 + u} \\implies -30 + u = -60 \\implies u = -30\\text{ cm}$. Thus, the object distance is $30\\text{ cm}$.",
        updatedAt: new Date().toISOString()
      }
    }
  );

  // 3. 6a98e514910bb37b0e5580fc
  await collection.updateOne(
    { _id: new ObjectId('6a98e514910bb37b0e5580fc') },
    {
      $set: {
        explanation: "From the single-slit diffraction condition $a \\sin\\theta = \\lambda$, we have $\\sin\\theta = \\frac{\\lambda}{a}$. When the slit width is doubled to $2a$, the new diffraction angle $\\theta'$ satisfies $\\sin\\theta' = \\frac{\\lambda}{2a} = \\frac{1}{2}\\sin\\theta$. For small angles, $\\theta' \\approx \\frac{\\theta}{2}$. Thus, the angle to the first minimum is halved.",
        updatedAt: new Date().toISOString()
      }
    }
  );

  // 4. 6a98fa73b89acd4c6047d1cd
  await collection.updateOne(
    { _id: new ObjectId('6a98fa73b89acd4c6047d1cd') },
    {
      $set: {
        correctAnswer: 1,
        explanation: "The equivalent power of two lenses separated by distance $d$ is $P_{eq} = P_1 + P_2 - d P_1 P_2$. Here, $P_1 = +5\\text{ D}$, $P_2 = -3\\text{ D}$, and $d = 0.2\\text{ m}$. Thus, $P_{eq} = 5 + (-3) - (0.2)(5)(-3) = 2 - (-3) = 5\\text{ D}$. The equivalent focal length is $F = \\frac{1}{P_{eq}} = \\frac{1}{5}\\text{ m} = 0.2\\text{ m} = 20\\text{ cm}$.",
        updatedAt: new Date().toISOString()
      }
    }
  );

  console.log('Fixed 4 genuine questions successfully.');
  await client.close();
}

fix().catch(err => {
  console.error("Error patching genuine optics:", err);
  process.exit(1);
});
