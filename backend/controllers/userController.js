const prisma = require('@prisma/client').PrismaClient;

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.findUnique({ where: { id: parseInt(userId) } });
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const updateUserStatus = async (req, res) => {
  const userId = req.params.id;
  const { isActive } = req.body;
  await prisma.user.update({
    where: { id: parseInt(userId) },
    data: { isActive }
  });
  res.send('User status updated');
};

module.exports = { getUserById, updateUserStatus };