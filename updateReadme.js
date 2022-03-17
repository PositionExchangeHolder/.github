const fs = require('fs')
const axios = require('axios')
const { render } = require('mustache')
const template = require('./template')
const formatter = require('./formatter')

const API = 'https://api.thegraph.com/subgraphs/name/positionexchanger/ttoken'

const updateReadme = async () => {
  try {
    const res = await axios.post(API, {
      query: `
        {
          positionToken(id: "1") {
            maxSupply
            totalMinted
            totalBurned
            totalHolders
            prices {
              priceInBUSD
              totalVolumeInBUSD
            }
            updatedTimestamp
          }
        }
      `
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const positionToken = res.data.data?.positionToken
    const data = {
      price: formatter.formatPrice(positionToken?.prices.priceInBUSD),
      max_supply: formatter.formatNumber(positionToken?.maxSupply),
      total_supply: formatter.formatNumber(positionToken?.totalMinted),
      circulating_supply: formatter.formatNumber(positionToken?.totalMinted),
      total_burn: formatter.formatNumber(positionToken?.totalBurned),
      total_holders: Number(positionToken?.totalHolders).toLocaleString(),
      volume_24h: formatter.formatVolume(positionToken?.prices.totalVolumeInBUSD),
      updated_at: formatter.formatTimestamp(positionToken?.updatedTimestamp)
    }
    const output = render(template, data)

    fs.readFile('./profile/README.md', 'utf-8', (err) => {
      if (err) {
        throw err
      }

      fs.writeFile('./profile/README.md', output, 'utf-8', (err) => {
        if (err) {
          throw err
        }
      })
      console.log(`README was updated at: ${formatter.formatTimestamp(Date.now())}`)
    })
  } catch (err) {
    throw err
  }
}

updateReadme()
