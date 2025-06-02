import Blockchain from '../models/blockchain.js';

const blockchain = new Blockchain();

// Lista alla block
export const getAllBlocks = (req, res) => {
  res.status(200).json(blockchain.getAllBlocks());
};

// Hämta ett specifikt block
export const getBlockById = (req, res) => {
  const block = blockchain.getBlockById(req.params.id);
  if (block) {
    res.status(200).json(block);
  } else {
    res.status(404).json({ message: 'Block not found' });
  }
};

// Skapa ett nytt block
export const createBlock = (req, res) => {
  const blockData = req.body;
  try {
    const newBlock = blockchain.addBlock(blockData);
    res.status(201).json(newBlock);
  } catch (error) {
    res.status(400).json({ message: 'Invalid block data' });
  }
};