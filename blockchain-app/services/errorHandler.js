import logError from './logger.js';

const errorHandler = async (err, req, res, next) => {
  console.error(err.stack);  // Logga felet i konsolen
  await logError(err.stack);  // Logga felet till error.log
  res.status(500).json({ message: 'Something went wrong' });  // Returnera en felmeddelande
};

export default errorHandler;