import fs from 'fs/promises';
import Block from './block.js';

class Blockchain {
  constructor() {
    this.chain = [];
    this.loadBlockchain();
  }

  async loadBlockchain() {
    try {
      const data = await fs.readFile('./data/blockchain.json', 'utf-8');
      this.chain = JSON.parse(data);
    } catch (err) {
      this.chain = []; // Om filen inte finns, skapa en tom kedja
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

  addBlock(data) {
    const newBlock = new Block(data);
    this.chain.push(newBlock);
    this.saveBlockchain(); // Spara blockchain till filen
    return newBlock;
  }
}

export default Blockchain;