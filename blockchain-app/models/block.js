import crypto from 'crypto';

class Block {
  constructor(data, previousHash = '') {
    this.id = Date.now();
    this.data = data;
    this.timestamp = new Date().toISOString();
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = '';
  }

  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(
        this.id +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
      )
      .digest('hex');
  }

  mineBlock(difficulty = 3) {
    const target = '0'.repeat(difficulty);
    console.log(`🔨 Börjar minera block med svårighet: ${difficulty}...`);
    const start = Date.now();

    while (true) {
      this.hash = this.calculateHash();
      if (this.hash.startsWith(target)) {
        break;
      }
      this.nonce++;
    }

    const end = Date.now();
    console.log(`✅ Block minerat! Hash: ${this.hash}`);
    console.log(`⏱️ Det tog ${(end - start) / 1000}s att mina.`);
  }
}

export default Block;