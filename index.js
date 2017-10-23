class BlockChain {
  constructor(index, preHash, timestamp, data, hash) {
    this.index = index
    this.preHash = preHash.toString()
    this.timestamp = timestamp
    this.data = data
    this.hash = hash.toString()
  }
}

bc = new BlockChain(1,'wtf',30,'fuck','fuckyou')

const cryptoJS = require('crypto-js')

var calHash = (bc) => {
  return crypto.SHA256(bc.index, bc.preHash,bc.timestamp,bc.data).toString()
}


console.log(bc)