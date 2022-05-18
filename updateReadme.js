const fs = require('fs')
const axios = require('axios')
const { render } = require('mustache')
const template = require('./template')
const formatter = require('./formatter')
const { addTokenDayData } = require('./helper')

const API = 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-token'

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
            totalTransactions
            prices {
              priceInBUSD
              totalVolumeInBUSD
            }
            updatedTimestamp
          }
          positionTokenDayDatas(first: 8, orderBy: "createdBlockNumber", orderDirection: "desc") {
            id
            priceInBUSD
            dailyVolumeInBUSD
          }
        }
      `
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const positionToken = res.data.data?.positionToken
    const positionTokenDayDatas = res.data.data?.positionTokenDayDatas
    const dayDatas = formatter.formatTokenDayDatas(positionTokenDayDatas)
    
    let data = {
      price: formatter.formatPrice(positionToken?.prices.priceInBUSD),
      marketCap: formatter.formatPrice(positionToken?.prices.priceInBUSD * (positionToken?.totalMinted - positionToken?.totalBurned)),
      max_supply: formatter.formatNumber(positionToken?.maxSupply),
      total_supply: formatter.formatNumber(positionToken?.totalMinted),
      circulating_supply: formatter.formatNumber(positionToken?.totalMinted - positionToken?.totalBurned),
      total_burn: formatter.formatNumber(positionToken?.totalBurned),
      total_holders: Number(positionToken?.totalHolders).toLocaleString(),
      total_transactions: Number(positionToken?.totalTransactions).toLocaleString(),
      volume_24h: formatter.formatVolume(positionToken?.prices.totalVolumeInBUSD),
      updated_at: formatter.formatTimestamp(positionToken?.updatedTimestamp),
    }
    data = addTokenDayData(data, dayDatas)
    
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
