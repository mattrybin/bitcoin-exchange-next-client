const fetch = require('node-fetch')

export default async function fetchBitcoinPrice() {
  const response = await fetch(`https://blockchain.info/ticker`)
  const data = await response.json()
  return data.USD.last
}
