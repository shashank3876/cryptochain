
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');
class Block {
  constructor({ timestamp, lastHash, hash, data,nonce,difficulty }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce=nonce;
    this.difficulty=difficulty;
  }
  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp=Date.now();
    const lasthash=lastBlock.hash;
    const{difficulty}=lastBlock;
    let nonce=0;

    return new this({
      timestamp,
      lasthash,
      hash,
      nonce,
      difficulty,
      data,
      hash:cryptoHash(timestamp,lasthash,data,nonce,difficulty)
    });
  }
}

module.exports = Block;
