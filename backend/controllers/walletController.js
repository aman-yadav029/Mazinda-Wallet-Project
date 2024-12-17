const prisma = require('@prisma/client').PrismaClient;

const getWalletBalance = async (req, res) => {
  const wallet = await prisma.wallet.findUnique({ where: { userId: parseInt(req.params.userId) } });
  res.json({ balance: wallet.balance });
};

const updateWalletBalance = async (req, res) => {
  const { walletId } = req.params;
  const { type, amount } = req.body;

  const wallet = await prisma.wallet.findUnique({ where: { id: parseInt(walletId) } });
  const updatedBalance = type === 'credit' ? wallet.balance + amount : wallet.balance - amount;

  await prisma.wallet.update({
    where: { id: parseInt(walletId) },
    data: { balance: updatedBalance }
  });
  
  res.send('Wallet balance updated');
};

module.exports = { getWalletBalance, updateWalletBalance };