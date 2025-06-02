import Blockchain from '../models/blockchain.js';
import Block from '../models/block.js';

describe('Proof of Work', () => {
  let blockchain;

  beforeAll(() => {
    blockchain = new Blockchain();
  });

  test('block should have valid proof of work', () => {
    const block = new Block({ data: 'Test block' });
    const difficulty = 4;
    expect(block.hash.startsWith('0'.repeat(difficulty))).toBe(true);
  });
});