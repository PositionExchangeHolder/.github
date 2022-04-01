const moment = require('moment')

const formatTimestamp = (timestamp) => {
  return moment.unix(Number(timestamp)).format('lll')
}

const formatNumber = (number) => {
  return (Number(number) / 1e18).toLocaleString()
}

const formatPrice = (price) => {
  return Number(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

const formatVolume = (volume) => {
  return (Number(volume) / 1e18).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

const abbrNum = (number, decPlaces) => {
  decPlaces = Math.pow(10, decPlaces)
  const abbrev = ['K', 'M', 'B', 'T']

  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3)
    if (size <= number) {
      number = Math.round(number * decPlaces / size) / decPlaces
      if (number === 1000 && i < abbrev.length - 1) {
        number = 1
        i++
      }
      number += abbrev[i]
      break
    }
  }

  return number
}

const formatTokenDayDatas = (dayDatas) => {
  return (
    dayDatas.map(dayData => ({
      day: moment.unix(Number(dayData.id) * 86400).format('DD/MM'),
      rawPrice: dayData.priceInBUSD,
      rawVolume: dayData.dailyVolumeInBUSD,
      price: formatPrice(dayData.priceInBUSD),
      volume: abbrNum(Number(dayData.dailyVolumeInBUSD.split('.')[0]) / 1e18, 2)
    }))
  )
}

module.exports = {
  formatTimestamp,
  formatNumber,
  formatPrice,
  formatVolume,
  formatTokenDayDatas
}
