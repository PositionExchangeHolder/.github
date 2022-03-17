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


module.exports = {
  formatTimestamp,
  formatNumber,
  formatPrice,
  formatVolume
}
