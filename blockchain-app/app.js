import express from 'express';
import blockRoutes from './routes/blockRoutes.js';
import errorHandler from './services/errorHandler.js';

const app = express();

// Middleware
app.use(express.json());

// routes
app.use('/blocks', blockRoutes); 

// Central felhantering
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
