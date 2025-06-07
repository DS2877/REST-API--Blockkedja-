import fs from 'fs/promises';
import Block from './block.js';

class Blockchain {
  constructor() {
    this.chain = [];
    this.difficulty = 3;
  }

  async init() {
    await this.loadBlockchain();
  }

  async loadBlockchain() {
    try {
      const data = await fs.readFile('./data/blockchain.json', 'utf-8');
      this.chain = JSON.parse(data);
    } catch (err) {
      this.chain = []; // skapa en tom kedja
    }
  }

  async saveBlockchain() {
    await fs.writeFile('./data/blockchain.json', JSON.stringify(this.chain, null, 2));
  }

  getAllBlocks() {
    return this.chain;
  }

  getBlockById(id) {
    return this.chain.find(block => block.id === id);
  }

  async addBlock(data) {
    const previousBlock = this.chain[this.chain.length - 1];
    const previousHash = previousBlock ? previousBlock.hash : '0';

    const newBlock = new Block(data, previousHash);
    newBlock.mineBlock(this.difficulty);

    this.chain.push(newBlock);
    await this.saveBlockchain();
    return newBlock;
  }
}

export default Blockchain;