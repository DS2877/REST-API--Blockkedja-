class Block {
  constructor(data) {
    this.id = Date.now();
    this.data = data;
    this.timestamp = new Date().toISOString();
    this.hash = '';
    this.nonce = 0;
    this.mineBlock();
  }

  calculateHash() {
    return `${this.id}${this.timestamp}${JSON.stringify(this.data)}${this.nonce}`;
  }

  mineBlock(difficulty = 4) {
    while (!this.calculateHash().startsWith('0'.repeat(difficulty))) {
      this.nonce++;
    }
    this.hash = this.calculateHash();
  }
}

export default Block;