import express from 'express';
import blockRoutes from './routes/blockRoutes.js';
import errorHandler from './services/errorHandler.js';

const app = express();

app.use(express.json());

// Anslut routes
app.use('/api/blocks', blockRoutes);

// Central felhantering
app.use(errorHandler);  // Denna middleware fångar alla fel

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});