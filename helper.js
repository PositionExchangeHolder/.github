function getUpOrDownPrice(currentPrice, previousPrice) {
  const up = '🚀'
  const down = '🔻'
  return Number(currentPrice) > Number(previousPrice) ? up : down
}

const addTokenDayData = (rawData, dayDatas) => {
  return {
    ...rawData,
    day_1: dayDatas[6].day,
    price_1: dayDatas[6].price,
    volume_1: dayDatas[6].volume,
    isGrowth_p_1: getUpOrDownPrice(dayDatas[6].rawPrice, dayDatas[7].rawPrice),
    isGrowth_v_1: getUpOrDownPrice(dayDatas[6].rawVolume, dayDatas[7].rawVolume),
    
    day_2: dayDatas[5].day,
    price_2: dayDatas[5].price,
    volume_2: dayDatas[5].volume,
    isGrowth_p_2: getUpOrDownPrice(dayDatas[5].rawPrice, dayDatas[6].rawPrice),
    isGrowth_v_2: getUpOrDownPrice(dayDatas[5].rawVolume, dayDatas[6].rawVolume),
    
    day_3: dayDatas[4].day,
    price_3: dayDatas[4].price,
    volume_3: dayDatas[4].volume,
    isGrowth_p_3: getUpOrDownPrice(dayDatas[4].rawPrice, dayDatas[5].rawPrice),
    isGrowth_v_3: getUpOrDownPrice(dayDatas[4].rawVolume, dayDatas[5].rawVolume),
    
    day_4: dayDatas[3].day,
    price_4: dayDatas[3].price,
    volume_4: dayDatas[3].volume,
    isGrowth_p_4: getUpOrDownPrice(dayDatas[3].rawPrice, dayDatas[4].rawPrice),
    isGrowth_v_4: getUpOrDownPrice(dayDatas[3].rawVolume, dayDatas[4].rawVolume),
    
    day_5: dayDatas[2].day,
    price_5: dayDatas[2].price,
    volume_5: dayDatas[2].volume,
    isGrowth_p_5: getUpOrDownPrice(dayDatas[2].rawPrice, dayDatas[3].rawPrice),
    isGrowth_v_5: getUpOrDownPrice(dayDatas[2].rawVolume, dayDatas[3].rawVolume),
    
    day_6: dayDatas[1].day,
    price_6: dayDatas[1].price,
    volume_6: dayDatas[1].volume,
    isGrowth_p_6: getUpOrDownPrice(dayDatas[1].rawPrice, dayDatas[2].rawPrice),
    isGrowth_v_6: getUpOrDownPrice(dayDatas[1].rawVolume, dayDatas[2].rawVolume),
    
    day_7: dayDatas[0].day,
    price_7: dayDatas[0].price,
    volume_7: dayDatas[0].volume,
    isGrowth_p_7: getUpOrDownPrice(dayDatas[0].rawPrice, dayDatas[1].rawPrice),
    isGrowth_v_7: getUpOrDownPrice(dayDatas[0].rawVolume, dayDatas[1].rawVolume),
  }
}

module.exports = {
  addTokenDayData
}