import fs from 'fs/promises';

const logError = async (message) => {
  const logMessage = `[${new Date().toISOString()}] ERROR: ${message}\n`;
  await fs.appendFile('./data/error.log', logMessage);
};

export default logError;