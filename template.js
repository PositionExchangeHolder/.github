const template = `
  ### Position Token (POSI)
  - Price: {{price}}
  - Max Supply: {{max_supply}}
  - Total Supply: {{total_supply}}
  - Circulating Supply: {{circulating_supply}}
  - Total Burn: {{total_burn}}
  - Holders: {{total_holders}}
  - Transactions: {{total_transactions}}
  - Volume: {{volume_24h}}

  **7D Price & Volume**
  | | {{day_1}} | {{day_2}} | {{day_3}} | {{day_4}} | {{day_5}} | {{day_6}} | {{day_7}} |
  |---|---|---|---|---|---|---|---|
  | Price | {{price_1}} {{isGrowth_p_1}} | {{price_2}} {{isGrowth_p_2}} | {{price_3}} {{isGrowth_p_3}} | {{price_4}} {{isGrowth_p_4}} | {{price_5}} {{isGrowth_p_5}} | {{price_6}} {{isGrowth_p_6}} | {{price_7}} {{isGrowth_p_7}} |
  | Volume | {{volume_1}} {{isGrowth_v_1}} | {{volume_2}} {{isGrowth_v_2}} | {{volume_3}} {{isGrowth_v_3}} | {{volume_4}} {{isGrowth_v_4}} | {{volume_5}} {{isGrowth_v_5}} | {{volume_6}} {{isGrowth_v_6}} | {{volume_7}} {{isGrowth_v_7}} |

  > updated_at: {{updated_at}}
`

module.exports = template
