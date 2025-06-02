import express from 'express';
import { getAllBlocks, getBlockById, createBlock } from '../controllers/blockController.js';

const router = express.Router();

router.get('/', getAllBlocks);
router.get('/:id', getBlockById);
router.post('/', createBlock);

export default router;