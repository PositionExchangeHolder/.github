const template = `
  ### Position Token (POSI)
  - Price: {{price}}
  - Max Supply: {{max_supply}}
  - Total Supply: {{total_supply}}
  - Circulating Supply: {{circulating_supply}}
  - Total Burn: {{total_burn}}
  - Holders: {{total_holders}}
  - Volume (24h): {{volume_24h}}

  > updated_at: {{updated_at}}
`

module.exports = template
