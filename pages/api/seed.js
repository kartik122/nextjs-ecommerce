import User from '@/models/User';
import data from '@/utils/data';
import db from '@/utils/db';
import Product from '@/models/Product';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfuly' });
};

export default handler;