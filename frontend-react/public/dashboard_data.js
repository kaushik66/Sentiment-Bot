const DASHBOARD_DATA = {
  "last_updated": "2026-03-17 09:46:13",
  "signals": [
    {
      "Ticker": "A",
      "Price": 111.83,
      "LSTM_Confidence": 0.53,
      "News_Sentiment": 0.0,
      "News_Impact": 0.0,
      "Headline": "No significant news",
      "URL": "#",
      "All_News": [],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AAPL",
      "Price": 252.82,
      "LSTM_Confidence": 0.68,
      "News_Sentiment": 0.7,
      "News_Impact": 0.75,
      "Headline": "M&A News: Apple (AAPL) Expands Creator Studio with MotionVFX Acquisition - TipRanks",
      "URL": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNUjc1Wms2N3dMUjNNN0d3RFYwNk0wOGUxRzF4SWZ3ZzhaR2NXSzZrN0stRG0zX3AtMExoZUVtWDJtWk5vUlZNaDZ2QkZpMHNhalI5cVdpY0tlY21KNDExVkxfWTk4Yl9jMV8xTGNvd1A1d3FIb1R4Mml3TGk1MnRFZDdPc25JWGs4Tkp4WlFR?oc=5",
      "All_News": [
        {
          "Headline": "Apple (AAPL) Launches AirPods Max 2 with Enhanced Features - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNYmd1bGJDcjBDZW5qTmtsVWNKR3NFRlZqeUExQUdMZkwtblJwX0xFckpMUXlvR0VYUTl6SkU1Q2FqWnpmbXd5TTZObVJ4dEJTYTU3Q0JGUGJJYmx2aC1ZdEMtRGxFVFhkVzQxcU5zX2hQaDRpSmZ4M1ZUVXptS0V1OG9VS1BobXh0UXFNM1JqT1ZPbndTZlhkU19ROA?oc=5",
          "Category": "Product Launch / Innovation",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:16"
        },
        {
          "Headline": "Apple unveils AirPods Max 2 (AAPL:NASDAQ) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1zWUFGZUdVN2Z3bEVuRDhPX3pPZ0cxcnJnZTEyNjJvY19tUVZEQUVqSVBpMUdTUWpWN1IxdHVqUTJHdlhGYWtvbHBiY2ctMlpDOTFSa2lkYzhhcU50RF85VC1wRm5tS1U3VnhycjhlX3hCUGc?oc=5",
          "Category": "Product Launch / Innovation",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:16"
        },
        {
          "Headline": "M&A News: Apple (AAPL) Expands Creator Studio with MotionVFX Acquisition - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNUjc1Wms2N3dMUjNNN0d3RFYwNk0wOGUxRzF4SWZ3ZzhaR2NXSzZrN0stRG0zX3AtMExoZUVtWDJtWk5vUlZNaDZ2QkZpMHNhalI5cVdpY0tlY21KNDExVkxfWTk4Yl9jMV8xTGNvd1A1d3FIb1R4Mml3TGk1MnRFZDdPc25JWGs4Tkp4WlFR?oc=5",
          "Category": "Merger & Acquisition (M&A)",
          "Sentiment": 0.7,
          "Impact": 0.75,
          "Date": "2026-03-17 09:43:16"
        },
        {
          "Headline": "Apple (AAPL) Unveils Second-Generation AirPods Max - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMisgJBVV95cUxQN2lvRmZkZ3lwTzNDLXN1Y3NLaDZuMGtLTFp6WC1yZUFBcmQ5WldZZktEQUZ5SEpmOE9oUFotcGQ2NW84UkVWSjh0QTVfc2Fib3dpUU80QXpHZTBEWGhTZFpWYTR3TFlfaGZCM2lzejNSUWVIWFVUMmUwVVl3UUlwVXA2cGR2Z0JxMl9kcXJZN2l5YS1sUjRxcEY4RF9hcFJtTGZfcFh4RGtmaTVMZVBXbi04Yl91Q05qdWRDRzdacXI3amFBR3d6MWRMdjIxV0E4aXNTTDVxd0pfWmpUY2p3eE9IQ2otNTd2VTFvYldxdFpCei1HOEViMDlRMTVkeGhMd1Vsdjd6Sm5rWjNOa2pBZ01XSEl6MllVZ1hsTDh0cF9qMzUzcWhsZnFvbVlMMkY2ZXc?oc=5",
          "Category": "Product Launch / Innovation",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:16"
        },
        {
          "Headline": "Apple (AAPL) Unveils AirPods Max 2 with Enhanced Features - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQMkF5TXBpZTFlYUlsYUdqZUlSbm9PNUN0d21yZEVDQ1cyWXdQUWRCRktfbUN5VnhtSXlSNHdtdnFDbjdqckxBNzc2T2R2czJkb1Jad0JlSDFRVGw3MENSNTZiQVlZaHRnZUt4SEtLNW9DVzBPbXpsRldGSzdoVGllRHZMX1ZObEFsXzBnYXZEYmtKYUlsWmNUTlNR?oc=5",
          "Category": "Product Launch / Innovation",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:16"
        },
        {
          "Headline": "Apple Inc. $AAPL is Capitolis Liquid Global Markets LLC's 6th Largest Position - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQc3JidzZCTDZfRU4zTjNPVzhLOFhGU1I5TkNnNHpVd1prdmFORHJFQ0dIV1ktclZjU25Ya3JITmc0TFZvZDNELXdCaVphTFQwWGE0OU43UXVsQXdYUG5PVmhCZWYzeDAzR2JlMVUzb21MOUhDdHZsQzI3VHBUZXFaeVVWbm5RZld2cjFOOTVUQnoxZVpySDAxUkx0aXRvbndOanNTeUhWY3dNZlVJbnFLWWhUY0k0NlFLam56WDVTU1djN3Q5dFRYSmhjc2NIZWVYbUE?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:49"
        },
        {
          "Headline": "Clough Capital Partners L P Cuts Position in Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQRE5OZXc4WHNMVnRuRDRTdmZQTzhZa0RQZnR3MHRybTdNcU5zY3pUZHZaZ3g5aE5HWDJxODYxZFNNdTFVNUtwN3pwS3RISDNidV9oUFpYSEdQdDJmQ3p5b0RGVkF0cDZ3eFNpYXhEbEEyQjA2b1hrRmhTelAzeGMxTDlFdm1lSWlnWTZCcndKd0VuSXdTVVU5eGpNYWUzRXdmUElqQVF3WWpxM2I2OXpKM2pHMGViRkE4N3YwdQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-16 09:52:49"
        },
        {
          "Headline": "Apple Inc. $AAPL Shares Sold by Elevation Point Wealth Partners LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQZGlRWGVKU3UtYUlOVGx0ckhqM2hWQ2UwOEN0R3BXcFVtVjJhSm1oNHhtVVJuS2JWVjVZcnUwcXZlWFhyUHRHUk5NQVdzWXRrRTg1X1RubzN0c1RHem11OHpWYUl5X3NlTlNZeGtYUl8ycFhjWnBNRm91TTdLZFhpZllfU0JNZDd5ZzgxREJmbmtiWDk2QmN5b0VrVHhqdU15NzZvRU94UnhmQTlxYmpaZVpRaS1KSDNFLTZhRl81Tkt3X0NH?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.3,
          "Impact": 0.3,
          "Date": "2026-03-16 09:52:49"
        },
        {
          "Headline": "Apple (AAPL) Postpones Its Smart Home Display Release - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNNXZLcm5rb1NPOGdzcldaZjBxcDF1ak9Rb1EyZmxrcXIzZGlNZHMxTFdnbWF2cnp0VnpSalZWMEV0S1BFM1lUcldWVjFkd3FxeTVuQ2hHZ0I5a2N3akpfbjYzaU1WMXBabXRSMkVrUm1lajhsb2dGZm4wZ01pRmNDNmlENllGSUFtbUY5Rm40alMtb2VjTmF5blNnUdIBowFBVV95cUxQbWY4MlhYTzhvSUZBU3VTc0Yzblcwbm9salZQZWpCaC1BU0pVRVE0OEl0cUZmRmJMWjVMQVFUa0FMcmJIT3QwcFRhZm1iWFhWTGpUZ1hFUll4LVh6bnRRTFRLb2F6RlR3NGtmMGtiaV9vRXVYbnRrVHhYOUZ6ZHl2dlN3XzkxeFR0UmlWbFFpU3c4bmowMXQ3UFp5U3RFT1NDRXlV?oc=5",
          "Category": "Product Delay",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:00"
        },
        {
          "Headline": "Apple Inc. $AAPL Stake Reduced by BNP Paribas - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPUFVKS1Z1aURPVFFGXzJWT1Y3OUhVZndBRklVSmhIT3k4SUxjMEdDUndFVW02UDUwZEQwQlBJaFAwWjdXZEFaTWluc2hjQTBXRmd2SWdPSkdNakhJY0dqTkdHLVFkQVl4THR1bDdQeUphNmRmQ3VOSHZCdGtQWnJPUm9kWF9RalRRSVM3RlVycWh3cERfczhySDFpQjZGdFFjMVBqLTQ2QQ?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-15 09:23:00"
        },
        {
          "Headline": "Aristotle Atlantic Partners LLC Has $248.68 Million Holdings in Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPVS0tZGQwTldjMmtvSWRTRXBsNTBXUXI0dVFETFJPdmF2ZHFGaWM0aFpaeU5LNGMxMzFZUFV0b2VBTmdGbHY3dnFISXhocmJ4MGoxaXFWRGJHTkF0RGJfR0VBUDUtVWhlTkpVSnlaY3BfelJhZWgzcmgxMDJPZzVGLXVFU21hNTlZNk9pZWV6ZUM3ak1VVEF4Uzd2cVJzWjZjUHBVNVd3c0JhVUVXTVhjaF9CSlFad283Q3JabS1tak9ybTFMbERyT0dDUmJreTZMZGFR?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-15 09:23:00"
        },
        {
          "Headline": "1248 Management LLC Decreases Stake in Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQM19PUUpaQWR5UEl4RkRyZGRKY2xybGlsb0llLXdzcjFlVHdqTE9ZLVlfMS1uYmxQNFZCR2hUUm5sdC1GYm5wSk5fWTVPTHBQMDJQRmhpaUk0QTJCa3JlMDg0Nl84dXdTVlAteHh6b0pWOEQzRjNOemo2eHFYU2VTZWtOaTdDdnhGVFRxVUNLQjBYblVlU1htVm1icVBNaWFxYm9EMHJqMTB4NmhxVVRMWG9YV0U?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.2,
          "Impact": 0.3,
          "Date": "2026-03-15 09:23:00"
        },
        {
          "Headline": "Apple Inc. $AAPL is Ausdal Financial Partners Inc.'s Largest Position - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNTnRfZ2tpeWk4UW0xb3Q5NU90MGxEdVB6ODA1bkFGdFEyeXZ2bHVaUGNkZlRqRkxaanNXb2UzaVRoN2FUU0I2ZXFzN29DR2FTN1BRbjBmbUFKbzhrUDFFWGs1QVhxbXJaZFg2My03cW5TVElJMi1LbndEVkw4cUhfcVhRVVUwTFNfWlJyaHpSTzhGSm5lcEhJdmVwVklrTzBSdnU3VkFuR3VuRGtJNGtMS1NfenJVc1hDRkR5dTZtZ2xJVHBF?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:00"
        },
        {
          "Headline": "Apple (AAPL) Lowers China App Store Fees amid Regulatory Pressure - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPLWIyQktIWDZhaEJ0Nmg2YWFoRXJQeHZYQll0T014bzVjR2ZpNXlxWUF3XzRIeV9tUG4tWFdxaHg3UEp2Nm1WQ0JfWkc0eElMUERhaEJxLW1NSHZRak44dGxvT2ZoWklzV1BSaEYtRVBPajJUUTZaMHQta1o1eE85X01qV0JaTWR6RGNkYzJQdjhzTk9hZE1hZ2JJWQ?oc=5",
          "Category": "Regulatory / Business Operations",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:02"
        },
        {
          "Headline": "Apple (AAPL) Stock Cuts China App Store Fees to 25% After Regulatory Talks - CoinCentral",
          "URL": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMFY1MHFHMzhwdUxHVV9ZTG16YmdhdXdaaDFkTTZmSG5uOHFXQ2IxR09LRFFHT2pzNTVBNUhqR2VyT2UyY3p6MnhkYnJjZkp0VkNkNVF6NkZtLWU5ZFlwZFFRcXFVbGxHcFNpU0NveVJuN3ZHSmNlUEFOMF9BanBmaFFNS3FxcWVPLWZhQUpadFdmZnRPX2QxVnNWb0k?oc=5",
          "Category": "Regulatory / Business Operations",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:02"
        },
        {
          "Headline": "Apple (AAPL) Stock: China App Store Commission Drops to 25% Following Regulatory Discussions - MoneyCheck",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQUU5pTEpSVEpndzBkVjhlLWxxazBEcTgwSXFSVkhhT0lYenUtMGVqMWFJUGpKdDFPaTU2XzV5UEdSLVN0Zi13WVpxY01fNVpKVHpBTVNVNXZVMjdNbUtqaUMxT05aX1pXTGJMRTdpZ0JKT3FzMHhqb09iMElseXZkbjItYkxkZWVvVFJINFJJYW0wbDNWZTczNGJoX0w2TFR3T2J5cFFmUUVtT085ZklTSG9B?oc=5",
          "Category": "Regulatory / Business Operations",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:02"
        },
        {
          "Headline": "United Super Pty Ltd in its capacity as Trustee for the Construction & Building Unions Superannuation Fund Sells 36,223 Shares of Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiqgJBVV95cUxNWm5JbVRMZWpmZGhYYWhpcHduQlFiRDgzenVHRi1KekVEcDhqdUlVdnhxbHpjbXhLOW1ZRnpXU25kYmtyd2dpcklJV1ByVXBuWHM4dEJQejVfcl8zTlczQjcxVXdkME1tdVpiNkVVVHN2eTJsN3ZhaG90LTBvNGF3Z1pqREpRNXFpLS00SFdiN1lUZmZpWlRnSllhbkpWa0k3VDFKcUVSc20tNXhaN25VZDZ1WndEMVBWUnh4UVRNSjNKT19tUS13M3VEOXBHYnh0ZzVURDgtQ2o0UzdCYkJEdmVhX0Q0T203U0lxZDZyQWhoLXNhSWotczd1SVdEc1RxeGo3MTVjZnQzV1VIYTNmUmM0ZTd3YlR5dFpUbkVpa2pCUzYweHpXVFNn?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:02"
        },
        {
          "Headline": "Apple (AAPL) Stock Cuts China App Store Fees to 25% After Regulatory Talks - MEXC",
          "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5PcXVkMllSalpaWmRNWXBEdU1ueTB0NVhjNEZxS290UFo5Rm1yemVmUmJtS3l4M0Z1XzZKcFFSQXNpU3JtY3Jr?oc=5",
          "Category": "Regulatory / Business Operations",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:02"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ABNB",
      "Price": 128.32,
      "LSTM_Confidence": 0.52,
      "News_Sentiment": -0.7,
      "News_Impact": 0.8,
      "Headline": "Airbnb (ABNB) Is Down 5.2% After $2.5 Billion Investment\u2011Grade Bond Deal to Refinance Debt - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOa1B6VVptalYtN251Wk4xaGZKNGRrdFE2djhWTnFKdHlsNlI3MS1oRnoza1FVTmQ3N0E2NnpKeHdYZFd2Y2hGYTYwdUhoZnlMNjFqc1Z6QmE1VkU1MjNDdjZ5WGZZZXl5SFlDVDBxbVBIdk5FUUYxNUpFbUtLTERSMnl6Tno3aUNncmxYSThrZVQ5bzBzM29OcFhTT1hoODZIQ1lVQk9VaGtOelZlWTBEY1ktOEJMNjFFalNySTM5M2Z1eVZvVWljWnRxbnZ4SjjSAdQBQVVfeXFMTVM3LW9CR05oclFPb0lEWWFhbWRrSFdBSVZUdzJqV1RfMWpXSy0xTWJ4NXhSVjhvWFFfZGc4SV9rM004QVFkSExfMFd5VDhoaUs0RXM5OE1GTVhkeTJ6WkplY2xibkdibjlJWmtDdkg5bnpVdS1lZ1NYd3NUdzRHcEVzMndMallNVmtUYzh5bF9JOEJtSjJjdlNBbGppM0JFTnR3cHQ3NEhQUGJNeXlqUlFnQUdha0FuT0NnYWF4X2l2WG1SNm5NbHBEVlhKaXA2Q0ZNU3E?oc=5",
      "All_News": [
        {
          "Headline": "(ABNB) Risk Channels and Responsive Allocation - Stock Traders Daily",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPYm16RGZmWklrZmFZdlNsQzVxYURmVXlfUURYbFBSLTB3TmFpM2tLQ3I1LWF2czlLQUNsUklRVk1LcWNVYWxPMEhwUTZDMU8tWE13RGtjWm9XMHJDNkZHa19CODlWV0pTS1VTX0U2ZTA2NGZ6dDJ3OWpGb0M0SlBtZ0hMUE9XVUVVa2RIWUV3WnRsZUNpeTZ0bDJrd3AxSmVfN3BoazJYME5XTmd3Z2lSZktULTFaWEpTWVJZZG1aaGttSEk?oc=5",
          "Category": "Risk Analysis",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:26"
        },
        {
          "Headline": "Chevy Chase Trust Holdings LLC Trims Stock Position in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOYU94bEZqZG9oVHlhOGlzYjRMQ0lsYjBqa0xLN1UxUlEzcm5heGktaDY4WFpfcThTTjFYaHNOYjVNMTY0XzVFUVNqRmhzZTBaV29RU1A1ZGFOWEtEM3BUOHNZVHhnMkpvUkd5ZWJoRDE2Z3hNNmlDajZYSWJMTjJRM3RYN01PX2FjWjNTdWV1WWpSdktmWGVtRHZ0SUg1MWhKU0Z4ODRRdlZlNnVPdFZURnJ5cHBDYk5zNll4UC1JWHVieVp5Rkk3ZVAzZw?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.5,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:26"
        },
        {
          "Headline": "Airbnb (ABNB) Is Down 5.2% After $2.5 Billion Investment\u2011Grade Bond Deal to Refinance Debt - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOa1B6VVptalYtN251Wk4xaGZKNGRrdFE2djhWTnFKdHlsNlI3MS1oRnoza1FVTmQ3N0E2NnpKeHdYZFd2Y2hGYTYwdUhoZnlMNjFqc1Z6QmE1VkU1MjNDdjZ5WGZZZXl5SFlDVDBxbVBIdk5FUUYxNUpFbUtLTERSMnl6Tno3aUNncmxYSThrZVQ5bzBzM29OcFhTT1hoODZIQ1lVQk9VaGtOelZlWTBEY1ktOEJMNjFFalNySTM5M2Z1eVZvVWljWnRxbnZ4SjjSAdQBQVVfeXFMTVM3LW9CR05oclFPb0lEWWFhbWRrSFdBSVZUdzJqV1RfMWpXSy0xTWJ4NXhSVjhvWFFfZGc4SV9rM004QVFkSExfMFd5VDhoaUs0RXM5OE1GTVhkeTJ6WkplY2xibkdibjlJWmtDdkg5bnpVdS1lZ1NYd3NUdzRHcEVzMndMallNVmtUYzh5bF9JOEJtSjJjdlNBbGppM0JFTnR3cHQ3NEhQUGJNeXlqUlFnQUdha0FuT0NnYWF4X2l2WG1SNm5NbHBEVlhKaXA2Q0ZNU3E?oc=5",
          "Category": "Debt / Corporate Finance",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-16 09:53:04"
        },
        {
          "Headline": "California Public Employees Retirement System Has $132.66 Million Stake in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPMzZ5YUdpZHFSMHo2Rk5vTVVaeTBCZ19WVzU2MVRFVGI4ZTRiOHhRVU5qeWY4TzQzaEY0aVlVdjJCX005b05Sak02Qk84WUlBbXRzOGNaajc4R0d3YnphMkJ2SG4zTnlKOXU2MHRRNFJwZFloZ2d3MUxTMkNYcGtEbXRlU0RWWEhmaVItdHVZRHZzd2d4TFJReGZIWV8xN1IwM3RkeWpFT1FNb1hma3RfSXNoX1diQ2Q2eWpPTGR2MkJuSi1EU3N5WHktOXE2dlZtQmpnUTVmYU9DN1UzZmxzVTJFWQ?oc=5",
          "Category": "Fund Activity / Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-16 09:53:04"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Position Raised by Capital Impact Advisors LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOX0RKRjcxUG1vSDVTWmd0Mjcwb2UybFh5T2JQZDdDTGxWYTJmVXZwVVNubG1JUV9VOEhldDNCTjBubTVtVm5Sc3psYlgzTHZrRTNGckh2Y0tGSU9WT0kyOHdaZDk2bzRKQTVSVmJ1Ny1xY2NrV2o2VUFGRWJscXIwVGMxOGpHSDE4clYyN0lmTkg3ck9tNXhzSWtEOFR2eWEzdmlvbjhWVUxKTjZmX01yY3VXZm03QjdZNURUX2gwb20?oc=5",
          "Category": "Fund Activity / Institutional Buying",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-16 09:53:04"
        },
        {
          "Headline": "EFG Asset Management Americas Corp. Has $2.86 Million Stock Position in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOWXJqanF0LUlWTDVNa28zNnFiaDFlYXhQX0JHLTZqbG5TRVBYOHV4cG1SQk1yUXVwTkNOank1M1d1aFpqbkhTNkhtMGNoY1IwLTNzdWhyZjZkcmVDZ3IxNTdYQnJDNEJ1aXZ3Zk44VjhsdVk2NzdzMVNuaXFucXFtdVZKOUFXS1NLd0lBbmtEM3lkRkY5eVEwOVBLOFRwRUFJNHR6c0JqZ2dvQzMzMlF2enJzRzFCOGE5RWRJb0ptaDFSYjM4RlBub3pxUFdJNHk5US0wVENkbjgxQ1dTekE?oc=5",
          "Category": "Fund Activity / Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-16 09:53:04"
        },
        {
          "Headline": "Brevan Howard Capital Management LP Has $6.51 Million Stock Holdings in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxQRUw2WS15SFFiQWtaUnk4Vzh2aWxTaFhLTmt0VjYtM1FtaVZMRmhzLW1OZFBTLWl2RWNLbEZPNGtUTTIwQUdzYzFkRG1BOUdBX3ZaVER3RDBIakpLcmdsUGNxR2ZtSVI3bVR6OTZrX1Z6TDRlVVBWNGE5dUVpSDF5eUZQb19WZHRrX0ZIRUVRZnlGZHdOUHBnUDJQZWJrZ2UzZS0xMFpoY01vUmtJTzR5VnFkb3hBdUg3R1UtNlhkaDBNR1VmcTFhNUlLYl85UW1OcGhYbmcyWTlkdnFCbzlN?oc=5",
          "Category": "Fund Activity / Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-16 09:53:04"
        },
        {
          "Headline": "Aquatic Capital Management LLC Grows Position in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPcDFUY191NWZEV1dLTWlCUjgtWGp4dHhhX044YlZlM2RWRVZ4a3dnOWFRc29Va25fMWo5UDU0OGtGbDltSVVjMDhvYkZ3MzA1VmhzU0FQakY0T2d3QWNpQ0hfRGl1UkxXME05TFZWcnhsSkd6RnZyUHBUYkJxUEp1YkQ1b1ppUnBuTjc0UmhJNXFEUFpVZGR4eXR3TGRuQm1NWGI0ZUI3ZWFWcmFBWVpmSUZKZ3lLblJ5WExzUG1pTTJHSG8?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "Temasek Holdings Private Ltd Decreases Stock Holdings in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOVHpJTG1hbEY4R3ZwNnVpRkpTSlNNNnRkM2x5TTRsc1drVUZ0ZllSbTlsQ3pZN1drLXN4eW9RNDNnOHlpLU1CbWtwd1hxeUdibmlqSEdjSFVvZjI5cVh0UjZJbXY5UHNrelVVclgzeVdVa2NyZ3N5Mnh3REN2dWE2ejdNTmtKd2FLdkYwWG1wTzljWFpTeVhrenRZNEdOc1RBMWNTdUs0OTNGMl9lZzZTT09vT0xmT3REeFVqUW13WE9oX2pmRXRlMnJPR3h5dw?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Shares Acquired by Bamco Inc. NY - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQRHpzazQtYVJNUzNvZTNQcnBqc2pPQS00SndTNGRSZ2hyb2FJOWRLTGZXU1ExR0JTTTRrZHlobTVfdHFlX21YYWM5MTR4RVBlNnlYY3ZxS0ItMWhWT1EyVGNvYlRUWXB4YXJ0ZDdwMFRnbF9sa2g5M19obU1FaW9IZi1Kc2pYTXUxWGJEZ1JWakRYSWRHYW5IN3R5eGVrdTBuNnl6ZWRfY2tuSWZp?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "Two Creeks Capital Management LP Has $59.92 Million Stake in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOS1pwSDNsYWJ6Q3gyTFh4cUw0Q0NyQkpNc1VQR0htdThPMDNyZXdqWF82b3hvd3QtTHpyVXd6M2t1VWxvWW11eWl2NjVlSkFfTlFtLTBvMlBFa3RWVmlJdy1GYWtiYURGRWFpM2NoNEdHdm54aXV2Q0Z5TUhVcXg4d1BNUWRqbTZLM3VEYlZteHZZTk91T1RKZ0Q3VDNCaW9Fc1BaSWVKT0pROFF6RU1VYWFsRUx2LWtQMmFreC1jbGd2dDU3NmFjQ003bFB5OUkt?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "Union Square Park Capital Management LLC Invests $1.34 Million in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQbTBYc0hUb0g5S1ZaaHA5VjF4bnFzLTFwRzN4aWIzUjZPeHNSU1JVZ2pOV1hWU2ZlamNYZE9RSERwaWRUOUhWYVQzMGQxRTJOX3Z4VGFOZVluejJNTmhtT1lfQVppTnF5NGY0SEMzWjA2LXc5Y1BCcUxVbDJMVWhJZEFnUzVraHJ0amc0RktCOTdxVHlBMWcxV1NIUWhOdkxuSGw0TXVNaHB2Y0h2eHIzWDJGYlZvTkpmMlFuWTkyMGNFbjJSLWtUYWJYQUxKNVFxQ3p3MzlDYw?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Shares Acquired by Quinn Opportunity Partners LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNU3Nzb2RXVkFuc2J6TUNEZU1ZT1VxWGpCX2pKMnBVQlBUNUhvOGgyNTBLa0FmQ1VES1k5eVdCQnhUU09hblRNSk1kdFg4M0lrcVZLSnpjY09hNjZaLUdFWUxkclVGVkxWYXdYdjkxODBLa3dkSS1manJxX3ozOS0wcTJHcVNBSXpHQmtiLWt6TnlxQkpzbU80NmdJQ0ctY24wT1g0aERzVFREQzJhT29uZDVReER6dDF3TTdNU21BR3ZUM1Vl?oc=5",
          "Category": "Institutional Holding",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-14 09:22:07"
        },
        {
          "Headline": "Blecharczyk reports multiple ABNB share sales (NASDAQ: ABNB) - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPX0tDYVFNMGpGbzA2b2tHaFZ5Qk9OU3M1ZndFd3Q4RC1KaFZfSm8xaDVyZ3BfZXh0M1BqT004bi11TWlwLUdoTTdOYzR4dnhNM0hnZFp2bkdkWlFaeDhBY0lmemJBY3AwTThMNEtCSENhbHpKN2hsajQxQi1wM3Flek5ZeTFkQUFncFpuU2tFMDg?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:07"
        },
        {
          "Headline": "Independent Franchise Partners LLP Takes Position in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPVFdRY3kyczFETTNUMFJvTmExZzJZRFBIa3puZTJfcjBoUUNCZTl1V0x3bUdlZVhXdnVwekJINjVjRmxuMTkxVXNpMXVQTmVSVjlOamZaazhpa01UeVhSZHp6bXZHa0toaGNHeXA4ZkI2el92c1kwT3ZJZjBrcV9IZUVfVUJTcUU3bmZuNW9jd0pKY1JHb3k4aFRqWi1kYy1LZlZrQUcwZVR6M2V3bFVKcEQ2MXdtMFFfaFY4NzF1TlM0OGxHNDhPcg?oc=5",
          "Category": "Institutional Holding",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-14 09:22:07"
        },
        {
          "Headline": "Airbnb, Inc. (ABNB) Registers a Bigger Fall Than the Market: Important Facts to Note - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQY0hTeDBBY3VFWnhiUk5KdGZIVUhDLVR2N3FzWkpFd1RLbXp1TDRFMmwxTlMwNXRJd2I4TS1HclFkdlNqZDdTMjlRNDh5ZUdnMkw0d1UxYUVWWGRGNU1Yd3BuSTF6UWk2US1VSzNfMzlwZS1pREM0Z3hwa2tkLWxRQ2VFWGc?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:07"
        },
        {
          "Headline": "Airbnb, Inc. (ABNB) Experiences a Sharper Decline Compared to the Market: Key Points to Consider - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFAzM2FBUXJweGJTb0VwcS1ObXk4Vkozb0dpYmUwVWNsVUxPZ3BVMFNVVlVHSUg0a29YdHY4RmJ5c2dIaEtlS3hZUVBXd3lXQ0R0ZTBMTTRjTWpRenVWRDh2OGRFVdIBY0FVX3lxTFAzM2FBUXJweGJTb0VwcS1ObXk4Vkozb0dpYmUwVWNsVUxPZ3BVMFNVVlVHSUg0a29YdHY4RmJ5c2dIaEtlS3hZUVBXd3lXQ0R0ZTBMTTRjTWpRenVWRDh2OGRFVQ?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:07"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ABT",
      "Price": 109.95,
      "LSTM_Confidence": 0.74,
      "News_Sentiment": 0.8,
      "News_Impact": 0.6,
      "Headline": "Abbott (ABT) Exceeds Market Returns: Some Facts to Consider - Yahoo Finance",
      "URL": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQWTBLSy1MeEFzTnBFRGtLcnNaay15c0VmZ01iWGI5a1NmeGx1RDRwRFhhUi10YVo5T2VkR1hGUGZBUUd4S1dMM2F2TkVkdHdwWWM4WUtfOHM3WUJRSV9HQ1ZDNlB0UU52cnNOMFI4bE1HQ25oWmN2enRBTGNkOWtIb0NLaEc4dw?oc=5",
      "All_News": [
        {
          "Headline": "Fred Alger Management LLC Has $20.29 Million Position in Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQUl96QndQVGc1YTQ1Umtsd2V0TUczdFhGamw1eERuZzgxclRvOGpVU3lCOTI4YkNMVFlrTnl3U3p1VFVFVzJGcHNpaVR5QTZZZFRWNlJ1RHl6dTVENU1scktTQnZUWkNiMWlyRWFHb0dGOU1kLTIzRS1pWl9BVGMwbUZKeUt6aUI4TW1PMjVmSjFwLXJRVGVqWXpVaXJwWTkwcGkyQzdaTDFJMVpyLVZSUlpVWFBraXNGYXFubDBpZDZZY0xaaktKOW9NRFU1X2NwQVpLdjd3?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Abbott (ABT) Exceeds Market Returns: Some Facts to Consider - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQWTBLSy1MeEFzTnBFRGtLcnNaay15c0VmZ01iWGI5a1NmeGx1RDRwRFhhUi10YVo5T2VkR1hGUGZBUUd4S1dMM2F2TkVkdHdwWWM4WUtfOHM3WUJRSV9HQ1ZDNlB0UU52cnNOMFI4bE1HQ25oWmN2enRBTGNkOWtIb0NLaEc4dw?oc=5",
          "Category": "Stock Performance/Market Comparison",
          "Sentiment": 0.8,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Hilltop Holdings Inc. Acquires 83,190 Shares of Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPeko0UkVrRmZTWUZoVmtreEQ2ZlBsbFlGSFdNTVFTeTRKQzVNWUNLZmpPQVdnWjJpNi1YT1JLV2NrMzdXZE1HWDkydl9jNVF4QUlRTnl3bDNkdmhQQ3lIaG5JSkhpYWJoN2NxczRWSjIxTnpaUWZQczNZMnBQMHRSM0lrVUhLaXk4QXBEdThiN3RRRUhRSFFyazhUQl81VEZBdXl2Yllwb09DdGczMUR6c2lZTUtoUlhPWDhKdnI1WUYybUZaaVNKZFBR?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "GEHC vs. ABT: Which Stock Is the Better Value Option? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBfdWRxYVp2eGtoOWNNMWVPOWdFZDNVU0NlSFdJcDhzdHJEMmtubElFbE0wNVNsR3ZFa0MyRlZ4VlhXQllhVjdrRVc3NTdSWk5BUkV4cFlkVExWMklNSWNyVzZxektHdnliSDBXZkM5MTVhdncxVl9Ha2NR?oc=5",
          "Category": "Stock Analysis/Comparison",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Abbott (ABT) Outperforms the Market: Key Points to Note - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9fb2wtbHVzTlQyakc3WlR1cG1vTnVpT21iSVdPOGV0dGl5T1NONXhhUHRIdVpjLTVtZS1MSVJOcEZ4UFM5d3dwVjhiM3FKdmI2VGJkM0pLd2N5eFhrUm1qc0h3a9IBY0FVX3lxTE9fb2wtbHVzTlQyakc3WlR1cG1vTnVpT21iSVdPOGV0dGl5T1NONXhhUHRIdVpjLTVtZS1MSVJOcEZ4UFM5d3dwVjhiM3FKdmI2VGJkM0pLd2N5eFhrUm1qc0h3aw?oc=5",
          "Category": "Stock Performance/Market Comparison",
          "Sentiment": 0.8,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Abbott Laboratories - Appealing Levels (NYSE:ABT) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQMDNCZTIyaGVLUVJwRHVPT0tyT05ZdzljQkJOSi1VV09HTEJCcnBTUEtWM3Q0Nk42ZUFXaWhxOEdIVWR6QlBXNkk1LWM5MEtFVlV0Q2JUdWxXLXI4WlROSlZhbTg2b0lCME5SR1FWWEZfRU55eVB1RnBXVzBaQXV3ZDB4UzJhU2ZUWXpKbUZ6Z3hKSWtDallzVThXcTRSckJKQnhPS1lIRlZ3bVVoNUV0RQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:52"
        },
        {
          "Headline": "Abbott Laboratories $ABT Shares Bought by Bank of Nova Scotia - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNUUtZYmtvakV0STN6LVJ0SHlFMVFxRC01aVBMMVoyTGZkTzRHQ2d5bERhbnhDZVBJNllyY3k5a2Zrc0NSTnBLUGxoZ1RXVng3YlAxYVJyZTlaTlVmRlg5TTdPNzU2VXFvZngycEhzMjQ5Y09DYjJlVzQzOEVtQWp5aUZrMEczUjVJWlo5MFlrT3Nob0piSWNTajJ6MXlneGV2YXN4amptek82dXdDTW01SlNtelN6YmhLMGN3N053?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:52"
        },
        {
          "Headline": "Abbott Laboratories $ABT Stake Increased by Banco Bilbao Vizcaya Argentaria S.A. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOZ1J2QUxQd0NpYU1sUm4xVDRuQy1OSDZwY1BGb2xSM3JXc2JOdFFJdG5LNlVjZ3JnUkp2cnhwa0p1cjI4TzBZajNaZ0k1OERlLWYwS1JKQkoyUk1IMnVTZkkxZGlKVUpCc3FhaEFlMHk5d294S2NjNERseHFJMmxGSGVubUMtZU40eGFsTWlpalptTXM3WW1UOWozZ1BNc0dLclo1OGRobjZPbURWS01CRUhUQzRVMkY0bzkweUFRNnRSU1haT2h2M2RGN1VTWUh2ejJBTg?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:52"
        },
        {
          "Headline": "Cinctive Capital Management LP Raises Position in Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNRlhVbFlSV2NLYVJuS1J5SW02b1AzZ1FxWlFXbDlETDN3ZkZPQjdLUXhmM05BT2lmajV4azRWU0h1TGdrUVc4UFN2RUdmdWR3cDBsUmhIaGFud0RKTHhwRDhCN0JpTzNjYm96bmVvZ2pHVE90R2M1Zy1zcHVXeTdaNkw4YW9jcDM0SVBsYU1CdWtzSU1UdGZfb0FST2RTQjJqZVB0Q2ZjV24wNGx0TDRkLWQyaWhLbVVFNU9DT29QaWpkZGx2NVplaWo1X1RZdjg?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:52"
        },
        {
          "Headline": "CSM Advisors LLC Sells 65,130 Shares of Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQMDNKaW05azlUekhqdVZBZXJJS2VtM2NaZFNLVzYteFNkaXJHTVZDeHN6c3hjeW96TTBodE9jalAzVTFtamFvNnIwSTNwcGpUaDBVUkd6OE9XaVZTYnB1YmQ1Q2x1TmFGZkJNbjFOOHZxYlVPdm5mOG9zM1JVZHdJbzFjNUhfZkEtUy1sa21BNl9Rclg4Z3FIYlEzallPSHZyTElGa044LUtKaDdTLTU2ZGVrdU5yQ1VsUjEyc2t6SDA?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:52"
        },
        {
          "Headline": "Abbott (NYSE: ABT) outlines 2026 votes, board pay and long-term sustainability goals - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPdFNrTWNKNnNSZVdhSXV0bHo1SlhjQUtZMEZmVXhNOTJFbV9TRWQtM2R0ZkR3dDd0R2duSjRVRmhLSmdVQjJYcFByOFRZaWhYYjktVHdPWGVOajQyXzZ6akszWWFSTzVpbXVnNVFGQy1NVzNqUE9OUExEeWVLRzIySDFxbHZnVkw3blR0SzhwODBTZ1BYb19tS3pJaDBzMWZjYTRXNHAxZTg5OEN3V2pUQ20xd0loZw?oc=5",
          "Category": "Corporate Governance/ESG/Strategic Planning",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:04"
        },
        {
          "Headline": "UBS Maintains Buy on Abbott Laboratories (ABT) March 13, 2026 - Meyka",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQN0RIZXllN1RianJXZlFrWEhLQThFRUVtd3lGWjQ1TVN1dkcxNGpEOHhoQ19EUFdVR1NJTTVaaUZQS3VEaGpmdEJzb3BxaUhpckRha3ljeXZnXzNYNGFUTWFZT2txSXIzVmZCNF9KdnVKbGVIZWtKSk5LVXRoT0NRY1ktRVc3MEt1Nzl4b2ZCcVQ?oc=5",
          "Category": "Analyst Rating/Research",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:04"
        },
        {
          "Headline": "UBS Maintains Abbott Laboratories(ABT.US) With Buy Rating, Maintains Target Price $158 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQWTZGNUFJaFFZX1FXbHo1WEc4NTAyMXRPZFdVLXlyeHdmZnBudFJqQTMyS1lQV1E0V1lLMGJNQkh3NzAzOU00UkJuRnZYa1dnTWswNDlIcTBDQlJyVHdYQWlOcWJ2Z2hlM0d4cTNNWko5MVhkcWt3a0hGdjJnUURvVDNuQloxeHNtWFlRWDBSWlBldWtGRXpBUlAwLWlGMjcwRTRKV05MTWUwUk1yMnhjM2hkNA?oc=5",
          "Category": "Analyst Rating/Research",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-14 09:22:04"
        }
      ],
      "Signal": "BULLISH_BREAKOUT"
    },
    {
      "Ticker": "ADBE",
      "Price": 251.86,
      "LSTM_Confidence": 0.72,
      "News_Sentiment": -0.8,
      "News_Impact": 0.9,
      "Headline": "Adobe (ADBE) Stock Drops After CEO Exit Overshadows Q1 Earnings Beat - MEXC",
      "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5WeUlKZ0ZPZHpfUGYyRzJqUlBZV0ZfMW5hTVZadGJYODh6SEpGckJFU3ROSTc1aTdmY1U5bko5aUVLWTZRVmln?oc=5",
      "All_News": [
        {
          "Headline": "Adobe (ADBE) Stock Drops After CEO Exit Overshadows Q1 Earnings Beat - MEXC",
          "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5WeUlKZ0ZPZHpfUGYyRzJqUlBZV0ZfMW5hTVZadGJYODh6SEpGckJFU3ROSTc1aTdmY1U5bko5aUVLWTZRVmln?oc=5",
          "Category": "Management Change",
          "Sentiment": -0.8,
          "Impact": 0.9,
          "Date": "2026-03-17 09:43:10"
        },
        {
          "Headline": "Adobe Will Soon Get a New CEO. Should You Buy ADBE Stock First? - Barchart.com",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQa2FLU0VJb19zUGdhN3NuT1pCM24tNWhoaDVCVV8yNWRlN0t1SmFuMDdmeV9ySnZnejFJOHVuZUQ5RlU0bHpuNmVfQkJqQVdrTEtTU1RoMVBERjhXVjRDX1JEeWxyZ0l5eXRUOHFjMkRsZF9GTmFlQ2RIc09XSEVwbzVNdjdpTUFrTGlqTW5peHB4ajAwUlplVGFwLU1kaVBYNmpFQzh6OA?oc=5",
          "Category": "Market Analysis",
          "Sentiment": -0.2,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:10"
        },
        {
          "Headline": "Adobe (ADBE) Stock Plunges 5% as CEO Narayen Announces Departure Despite Strong Q1 Results - MoneyCheck",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPaEl0QVlieExxc01zWVhGSkw0N0dtakNObkoyRjkwbWhXUTA0TVVQZGd5MWNEZEZzYjBGTXlraXNCUmx6RjhTLU5pb2NlcjdwSHB5ZWlHMU5UV3hzbjRMdDBuMzJWVWxIS3dKS2VxRENhTHd6V09fOTNrUU4zMUFRZDA1d1cwLUc4ampPbTBOcDdjU0NsTTh3ZktMMXlKUThsVkwtVDByR3MwTzhTWlpiTQ?oc=5",
          "Category": "Management Change",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-17 09:43:10"
        },
        {
          "Headline": "Adobe (ADBE) Downgraded to Hold Despite Strong Earnings - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPOHBQVkxGQ1QxaXhGamRNQzU0cllRV0tYci1vU3lJb1dQeGMzSVdGYnI4TEVuQjEwbjBvR2JKUXBoaHFObENsMWZndUNveWxlVUxDd0V3Z2VVdjhqR2pTd0l3WlMtVTV4ZHNhSHZabDdoU3hGcTcwNm0xYzVfbUx4OW80OGhrRG41Qi1QeWdyTWtMSWpRdGcw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:10"
        },
        {
          "Headline": "Adobe Inc. (NASDAQ: ADBE) Q1 2026 earnings call transcript - MSN",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNNEcxTEhVNFZZbW1EOXZSdzBCM0o5NkRxbWt6TmdpLW04QlJ3Q0tSMGg5SU9XT245di0yNjVNMkZWLWVELW5Wd054UWNBR01GM255OEV5VjV6aW5td3RqeTBYZXdzdUJaTkJoTXpmRDdySHZsSVAxeW83bVFHMk1NTEVUaHczOUVjYUt4TUkwYzM2Mnc0N0ZYd283OEhpZ2pRQTVoX2FXaUhmUnQ3?oc=5",
          "Category": "Earnings Report",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-17 09:43:10"
        },
        {
          "Headline": "$ADBE Record Cash Flow. AI ARR Tripled. Down 64% From Its High. - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5PMTdBMzF6a2hid2tKdE1IV2Vhamt5X18teXY1N0sza2szV0NOSkc3aHRYU0h2Z0JmLTZJTDF2MUxlakFHSTVfM3ZsekFqZm9CVThPNlUzQzZIZUM3T2sxVWp1RdIBY0FVX3lxTE5PMTdBMzF6a2hid2tKdE1IV2Vhamt5X18teXY1N0sza2szV0NOSkc3aHRYU0h2Z0JmLTZJTDF2MUxlakFHSTVfM3ZsekFqZm9CVThPNlUzQzZIZUM3T2sxVWp1RQ?oc=5",
          "Category": "Financial Performance",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:48"
        },
        {
          "Headline": "Adobe Inc. $ADBE Position Reduced by Brevan Howard Capital Management LP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPVnFvN1U4aW1OUmZ5clQ5NkllMWlFU0VtZUJHZTBLT2t6SlpRRmNQaG4wUkhJdnc2SDFNcmZGMUhEeWtzdC1neGNkQkpvUmhmUXEwbVlHREhsTUhzU1V3b0xlRGNyZGJXTlpJWUY0U01KQkNIZnRaZ1J5TWRVQVF3bVlESjBRdVBTWjAzX1VRTFlBVUpoOHFmLUdRRm1XV0pDVGFxNXotX3FxVGVFYjFyWEZCX1lfeHpIMzRaVFZIaDBseHdPXzMyeGZZQQ?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-16 09:52:48"
        },
        {
          "Headline": "ADBE Shares Plunge As CEO Shantanu Narayen Announces Departure Shortly After Q1 Results - Stocktwits",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOVWFRYU8yZ3pGYUpXYlBva2ZnVWFXQ0dXMlZXcHBxR0hjUVg0MEFqOFdSOHBKNUZkZ1c2VzJJT3Y5NU5DdzQ2Vk1tRW5DV0NWeDlyMnB0OHRsOVBwLUN1QU53NV9yNW1MSFNFSFM0QWxPMDVNSDhrQ1U4Mmo3R0ttdVZCYVZqSm1YWDIxUFNhLUMxY2U1bjhBeDhJUEh2S3hQdjd1Ympfc2tsNDdCZ3pfT1I4SGRYLTlQNXZoeXVLUElwTUFpdW9kbjhqOThRV2tYczhHQ3ZhWDhsQlhydnEwTVFDb0pkdw?oc=5",
          "Category": "Leadership Change",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-16 09:52:48"
        },
        {
          "Headline": "Aquatic Capital Management LLC Sells 76,584 Shares of Adobe Inc. $ADBE - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQQXkzeEQ5TFA1UV82dFZpcTdsdFhRY2VZeTF4N2d2bkM0NmpsVFpIR3pDa1VVdUp1aTQzT3ZjT2dlN1VxTkRySS1QNG1XeUdYSGFkcUJwR0hIUmF1a3ZtdC1WUlJrV2todGlKVHI0bHpVQlVsTG9JRk13Mm5fVWR4Z0hweXpDQzczVjI2YmNQMGdJQktrcUNEWm8tdzYyLTNVUlVRZmNwbndoU2FlYW9vMUFIYzh1ZHFjTWw0UTdlQVlNWnk0QWZB?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-16 09:52:48"
        },
        {
          "Headline": "Why Did Adobe Stock Drop Despite Earnings Beat? ADBE Q1 2026 Analysis and Key Concerns - Intellectia AI",
          "URL": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNaEVwU3cyMlNLRl9WblY5ZWJjd1pDY0F0QTJXT2FZc0dhY29uNFp4eEUwUkJzVWIweTBYOExPaHMwanhVYk9icTBWUjRSdmZMbVhWRnpsZ3JjUjhXRlU1M0Z0Ni1tQUMtWnBDU0dFYzdfejNHbk4yLVY2QWkwLVE2dUgzaWxlZUdMb1FtZklLNA?oc=5",
          "Category": "Earnings Analysis",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-16 09:52:48"
        },
        {
          "Headline": "A Quick Look at Today's Ratings for Adobe(ADBE.US), With a Forecast Between $220 to $420 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOc3lnOFFMN28yTUVFUHBVWWwzTmFjUXZxYmU4ZmlsYlZlSFZxQ3Y5VU1uQTM0RDhNdzZpNUw4ZU1oa1poRzJ0U241a1ZjYWcyMGpkWTVramJwNTJyMzFRVEpaejBQVjRXY3NobjlmZzBYSmZLOTl4ZVI2eWFaenNjY2VHRWRKTHhWTmhTRXFhZXBtUUk?oc=5",
          "Category": "Analyst Ratings",
          "Sentiment": 0.1,
          "Impact": 0.5,
          "Date": "2026-03-15 09:22:55"
        },
        {
          "Headline": "Adobe Inc. $ADBE Shares Acquired by Ameriprise Financial Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNM3pyRW9OVXlXRUpWRVNXa1RVSjBxMDMwMG9Ga29KangzM3p5RDhSTXFwZVBhWTBmQjdUTG1JZ1FLNkZ3amFGOUZ6UE1tMEpOUjBTWkxSc1RDSGhPRkxlNzJUc3ZXTFJOY0VLVThoMVE5ODQwaHFoQUtYNmI4YkhaY1FmT1dTTFYwZVhEbEVMaEJCaEJLZ2RKMlBPTXFnZnhXdS15WjF3cl9oc25hMnkwNWxtNk5hRjk5MDBr?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:55"
        },
        {
          "Headline": "Adobe (ADBE) Shares Drop Despite Strong Q1 Earnings - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOZndHc0UyenkwZjY3X25HRlFVMzhlTllMRXJJQWcycTlDNUNYamc1Y2dFMlpUWmd2eXNuVk9XMEdxYkh4Y0JsQ3hMS1prNDZDbzljTnFwOWlQYWVaczY0bktVQ193djVDXzhWMHlWSzh1dlV1UXdxZVlvZTVkcVgxYWY2SVJiSVRTWkgydkx3NGFQQQ?oc=5",
          "Category": "Earnings Report",
          "Sentiment": -0.6,
          "Impact": 0.9,
          "Date": "2026-03-15 09:22:55"
        },
        {
          "Headline": "Adobe Inc. $ADBE Shares Sold by Aristotle Capital Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPelZYV2JQc0o2TnlEOGNvdHRWV1A4RkNkM0ZKaWdibXh6Nlg4OWNuMmQ4NFhzTm9IX2d3RzhjUjZxaVdoQ1VNei00NlpRTW9zNDI5SF9jOFljeDdWYlhRRzRyd25aOENyUGRJQzBDc05mM2wyX2hUcTk2X2FxckhQRTZVdC04QlVLZDRldF9kSFduV25Fa2ZLVUlraHI3Zy1kM0ZlNVFVLXlQc3g3NUlNWk5Zbm9Vc1FKSllQVElIMUI?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:55"
        },
        {
          "Headline": "Ossiam Increases Stake in Adobe Inc. $ADBE - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOV2xqZEsxWjdDRmhReTJjNkllbVhOOXg1MDZLTkU5a0p5b29KQ013UzVfamwtUC0yaURGeWlnY1pfcnVkR2tGZjZQbjUtWjJ6STBLTlBwT2RoUENwbXE4TGpHUUg0VFl2SkVScXhjM2xZMGJLTk4zdFE1cEEzR2djOFduZVRBakk3VXNiLXlqMldmVU9ETm4xZUluelVxWW91Y05n?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:55"
        },
        {
          "Headline": "Adobe Inc (NASDAQ:ADBE) Top Management Changes - FXDailyReport.Com",
          "URL": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1tYzBsNkFvTU5TN1NRWWtnM2pZSTlVVzJWQ3QzR2p6WUtZeGF2VmEwME9DbEN6NXhLa29xMEdremkyVVNSUXo0Y2JsdS1seEltdlRnbjViaU13a2txakxqa0hLWUFSdXdobmZ4aEV3RmtEMU4wWllseTZR?oc=5",
          "Category": "Management/Corporate Governance",
          "Sentiment": -0.2,
          "Impact": 0.8,
          "Date": "2026-03-14 09:22:03"
        },
        {
          "Headline": "Adobe Q1 2026 Earnings Update (ADBE) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBjTVdqd3B4X1dNY3lXeFJJV2V6eWxZSmpQRjFaTGQtTG5wUzhzRTlwNUZPRTViSnRXM09IWHJJUFltQkxqZ0Z0bWNieVZVaHJXTzA5bkhVamxmUko2ZTA0d043QkdMTlFiT1BfNEFtSWNra05KWmZCcE1n?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-14 09:21:55"
        },
        {
          "Headline": "Adobe (ADBE) Stock Plunges 7% as CEO Narayen Announces Departure Despite Strong Earnings - MEXC",
          "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTFBGV19rTnc2WFVObjdCUWpXOVIyWFpoYlpGOWlyUHR0VmdJT29Selo5R3g0WGZocU5rT1FBRUY4cDk3cER3SDJr?oc=5",
          "Category": "Leadership Change",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:55"
        },
        {
          "Headline": "U.S. Stock Movement | Adobe (ADBE.US) Shares Drop Nearly 7% at Open Amid Lackluster Q2 Guidance and CEO Transition Announcement - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQRWNiS09sWDNxTlJFaU1OcGVhb0FVeGJMdkRoOHhScGZJSnFzdVVON1lDVVk3SjhYZkhINjRWaDQwRTVVVVZQamo3ZzFzNnk5VGxIM29lM2ZuNWZNUXlLSnJQbmdKcFBYNzVwNHFFYTlSaHFhOGRaQkVyTjRZM1FXazk4WDdfSm1KTDU3dEppaTVvN0UtbE0wQVVETQ?oc=5",
          "Category": "Earnings Guidance",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:55"
        },
        {
          "Headline": "Adobe Q1 FY2026 Results: Earnings Beats, CEO Steps Down | ADBE - INDmoney",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNZlJaWjFpQ01mOVkxTl9fOU1FQk5NX21fZXJidzRXRmlDWFZhNUNjdlpQdm9RNTd6VmZpZnB5ZlltUllHS0ZBSWlEWmtZQXhoc0I2VzlVajFXSER6TV9yZk5iTEIwRTRUbmVXQl9PZmdRQkRPOE1Pb3JvSWpjV1FSV001R3dGU0Rnbi1KNHE2eXVZMVZ4S1dHU1IzMm1UaXJuZHRkWGxvTExoVTdBUWx0Q1dn?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.7,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:55"
        }
      ],
      "Signal": "BEARISH_DUMP"
    },
    {
      "Ticker": "AEP",
      "Price": 134.15,
      "LSTM_Confidence": 0.57,
      "News_Sentiment": 0.7,
      "News_Impact": 0.7,
      "Headline": "AEP Gains 0.40% on Institutional Surge and Analyst Upgrades, Ranks 181st in $580M Volume - Bitget",
      "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBmTzBwRTdsck1za0FsckZ2QTVaQWRSR3pwRDRBNy12YUR2ZWNyMGMyaUJRTm5kelJVTXdIWW80SFNJYUtZRFpBbVVOTnFCb214SHdsWnJfVHllMThiQ2dOX2pZVdIBY0FVX3lxTFBmTzBwRTdsck1za0FsckZ2QTVaQWRSR3pwRDRBNy12YUR2ZWNyMGMyaUJRTm5kelJVTXdIWW80SFNJYUtZRFpBbVVOTnFCb214SHdsWnJfVHllMThiQ2dOX2pZVQ?oc=5",
      "All_News": [
        {
          "Headline": "JPMorgan Raises Price Target on American Electric (AEP) - Yahoo Finance UK",
          "URL": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPQmFKZF9URF95cW9RZUctNDJiWUZvZzY0RU4wNmRzV0NyNFo5TkhhYUtHZmRlQW11UmVPY2NtNDVMX0ZkWkRqSzVVTGFXeTlfSmRXSFdBUUx1ME50YWVndkNaSGNEa0Zwb1RIWm41cWIyczJjNkdfRnpoZ25oTFpnRmQtMVlfNDctVF9pNTNVUQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:18"
        },
        {
          "Headline": "AEP Gains 0.40% on Institutional Surge and Analyst Upgrades, Ranks 181st in $580M Volume - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBmTzBwRTdsck1za0FsckZ2QTVaQWRSR3pwRDRBNy12YUR2ZWNyMGMyaUJRTm5kelJVTXdIWW80SFNJYUtZRFpBbVVOTnFCb214SHdsWnJfVHllMThiQ2dOX2pZVdIBY0FVX3lxTFBmTzBwRTdsck1za0FsckZ2QTVaQWRSR3pwRDRBNy12YUR2ZWNyMGMyaUJRTm5kelJVTXdIWW80SFNJYUtZRFpBbVVOTnFCb214SHdsWnJfVHllMThiQ2dOX2pZVQ?oc=5",
          "Category": "Price Movement / Analyst Rating / Institutional Interest",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:18"
        },
        {
          "Headline": "Bank of Nova Scotia Acquires 141,418 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOQmVjdWxNYXg5YlRMTi1mQVUzTmZtRjRHbTluZE9qUjVOX0FoSFVGczVSenUyV2luUVVhRXdDOUQ3U2NXcTBLOFN3LUVjYmtndFg5ZVZPU0lMX21oNG9NOWhDWExBMkQ4cXlBRFUyOGFyVEc3Z2hJRER3QjZ4SmU1WHhoMWwxcHpITUR3VUxKeUU4WDZacVhYUHR1LVJwMExHS29KQlNob3VZYkp6TFVjem9JMW16QWJNSko5bXlZWlpvM1B6eTlwaDJGSUVpTENYOWxmTXFKTENISmVXT0sw?oc=5",
          "Category": "Institutional Ownership / Trading",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:18"
        },
        {
          "Headline": "Elevation Point Wealth Partners LLC Raises Stake in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxOOHhBWjBkbUNsZUc0ZkViMmdGTnpGdHl6c3lPWktEM09GWWRjX2NrTVJJMnVhOGcteFZnOHU2ZFlnNVo2M2RtMG9pd1UzcU1UZDFNR3NEU3FXeHVLcmNkSFhQM1hPWVBqazhQZHRFWS13bTlDak9ybjJBRE1zLWhreVAzUVRpM2w1alpETUlEWWt5TWd0WWNOLTM3SnVUS2haeE9MSVd4UXZCUFF4WUhqTWpTY3NYN1U4OURIZnpNaUkwek9DRGJLUlRJRFMzSnNKX2tpRkVkbkZFS3Q4R1NNQ05UcTNXTUk?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:51"
        },
        {
          "Headline": "California Public Employees Retirement System Trims Stake in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxPMmpLQnNTU2pGNUQ3NUxDR2lPNWRMclNjSXZ6LW8tZ1l1S0JlbVZXN2U0WnE4Y0wxbGVhdDZraVZGSGxzT1RULXVPSm1qOEVwMHFNUmlod3cxa2ltWU1hMHNRMzdmR2ZkTDExMXFZLXM5MnE0d0RfTFRRZ0cwSm1nc2NtcEEyY2FqQy1OQWhINXRiZVR4bWpULUhudU1fLUNlUmt0VnUycEd6U19LaHZveG5fdk9fQmpVeWRVOE9jYWc1MkdHTXhkVTdsNWVGdkNLT1RiMkxfX1c3aENVVzZKZ2JFVjd3SHp3Z19vMjljeC0zMjQ?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:51"
        },
        {
          "Headline": "How Investors Are Reacting To American Electric Power (AEP) Leadership Shift And $750 Million Texas Debt Raise - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQOGZuWHIxbkYyMHZIR2pTdjBlTjFqbGtUOUlvNHcwVkhhMHRIVUtzWnA0cU5EVTBKVDc2aHVFalNEUm8tdlM1TW8yY3FMUG9LZUlJelJlbl9JQTRJSEdyb2phdWkzZkZXM2NISndQdUt5QVZiVHNaeW1fZWloVWZPLTBnVWpldXZVQ3ltUFBTVDBES3Z4STlFdkFJUERpZUxJZlp5bU5pX0lPUG5qSXhlTDlWU05iUlh3ZGZNcDlVX09LdU5LVG8xWE0zR1Z2OExJNERhM2tGNmJ4QdIB3wFBVV95cUxPTEczUVpNVEZlckdyVnNpREswM3lDV2Z2MmNrVEhGVDhnZWR4Vk1BQ2NSLXJvdU9oX0tZM2x5cldHaFJKX3Fzdk5PRW9aYXdaa1NLd3JFS0VYNHhNbnN2S0dBeDdYQTE1TUxiblQzTl9ESHZWUndtMm15YVQ3NS1GMkhtMG5kMG1CakVVMGtnZ0QwSmNmbkhSQS1RcFgwUTZzd2Y1eFRWUDV2ZmxVbDFpRHozS29FMm5DQjRzbDVleU9yWk1YbDlMbTlvZWhwUE1VbkZWRVVXcUFfaWI3cnI4?oc=5",
          "Category": "Corporate Governance",
          "Sentiment": -0.1,
          "Impact": 0.7,
          "Date": "2026-03-16 09:52:51"
        },
        {
          "Headline": "Brevan Howard Capital Management LP Acquires 28,987 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxPN3Z2SnNzNGdzQnR3bmpCcWljOXk2X3hzdVNvdi1YNEdkWFE5R1hPWHdBb2pyM3NZS2xwNV9obE1Jb1Eyc2ZKSVNTeUNSU25EZXM4enB1WV9PUVoxVy1SbzI2NmkzUXlvcHp0QnNRcUV3YUVQTTJNV2Q2alE3TnY1bGYyX0FwRXJIajBYd283aWNOcnJTc2phU0l1UE5BYVpqRzNpY0xTYzNEcEZWN1JlWU5hT0N3YnZxbldDbVh3ZUtpMkVmTG14VndsYkQ0RlZBMlh6NTZ1WVA3MEtuaml1MUEtemJwSFNOdlJ4TURlTVlUNGs?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:51"
        },
        {
          "Headline": "Wellington Management Group LLP Sells 1,073,672 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNbk0xd0tNQWdqdE04WXdocWFVWFRIZk9XcWtsdDF6dmJ5RnMta2tvNGFMWkNUbDE5MnFYOGE4OXo3VG9yVXpkdXVjMVczSV9zWVBaT1d4ei1DeDZQbF9ENGFaWWNydktfOWt4ZGxJeExCMENPc0lxQUlkb2VtUEdxNWEya3BhMHMyM1hSTUJvMDlpaWxzVWdwUE5VanRLeks0VmlNRmo4TWNwSWZhbGh5SHR0bElMYk5HVnVabzdjWTZFTWZJeWlUOW9PQW9XeEdiZDhRV3RuS19BVWc2WXR0enpJal9uWXpqYUhtZA?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:53"
        },
        {
          "Headline": "Alliancebernstein L.P. Grows Position in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPZVdIS0luR0Z1amh5Y24wRzRPdG5XejN5b21zcUxLdWR6QkJoY2k3MjlxVkFDeXpwU3ByaWNGN18tQUdRUmEtNVJ4ejNKVm1HRnFXa1FFaWROVFBiaExZRkhpcFlDVnl0Z0xTS1BmXy1wZGozLU54Q1hqWEtWUGZ0eDZ1bnZmQnhaYWNYMW9jRUZIb2h4b1hyNlpyYW9RNDNvckxpaUNyaU0ycWtxb0pTYVZHT294b01QeWdoR2VoZ0VaOU9UNW11MVpHTV9uQWZYX25HNGRn?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:53"
        },
        {
          "Headline": "American Electric Power (NASDAQ:AEP) Price Target Raised to $139.00 - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOTjNvU1Rfd29GcXVCM0FCRjl2VTNQZktZX21qRTNyNk9Yay1LTE44ZXpQRDBsNkd6ZlFRTC1xRHV1NG8tZDh5bXBRdXdxaW5hMVVJSnprU080ZlN3TmotYWVWVVc0eUJudVVTTEkzWVVlYzFldWtJMVM3NU14SHZiWFFHcnluYkp3SjlNNUxpQkJBVXRJNDN1d1BlOGljZ2paT205blpQdzc0eTV1?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-15 09:22:53"
        },
        {
          "Headline": "American Electric Power Company, Inc. $AEP Shares Bought by iSAM Funds UK Ltd - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQdmRlWXV0Q1RFR2xnU3JTTGFQM0pNSHZlbG5fVGs5a19Eek9HTUVGYWFSMVNIUE9tenFvMnJPR3EwdzBCZS1zek90NVlfeFRpNENXMnYwamJadnRiVFg1cC1QcHJBSndyLWdLOXRnRTNyd19jNGR6ZWlla1k5aFk0dnFYRlVKSGJULVQwRWxnakc1SHdUcWNhN19PQmxqeVhBc3dWckpXMWlYVVVLci1iZktZRnhsUFZIM0xOOEZ5bm5ZSlVDb0JOXzVOOElZUUhV?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:53"
        },
        {
          "Headline": "American Electric Power Company, Inc. $AEP Stock Holdings Lessened by Dodge & Cox - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNSjlyUHYyWWVOYlJrdUV1SXR2bngtWkExWTlNekZBU2cxdnh1Q3VnTk13QmExWXZqNTF2ZkF0TVlfam9PTlJfbVh6MDhJVlc3Q21EbGplS2pKRGUxNXBXVWRoNGZsWWdRUVQxY3NIQldMWjF5bVNGc09iVU9pVFJOeFM0OWVqbDA2NnNscGdHaUd2VUJuS0ZCOWRFMTVjckpSWTc2VmRZb2FTTDh4amZtMEZRYjFNZ29XVThUN0lOTHppX1lmQlRQNndjUjhrMDFNLWhn?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:03"
        },
        {
          "Headline": "Mackenzie Financial Corp Purchases 15,870 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPUGNlYnJGcGxPUTN4TjRseUdvQmU4cGRvd0dlZ2V1Y2UxTklZdEZnX29qVWhjczRPQVNPeVo3ay1oYmYyQTVlRkt0ZldMOUJrOXVRbTBwbXpNYU5FbjdNMVZ2TzljVU9CMzUzU1lYMm9zLXJBTnBrQnp0RGF3dXVtVHN1a3pUZVBRYnlCQURxTDFlWC1yZnMwX2ZpSGNkUlg4SGdER3Q0NjhoTERwUE5wTm1NQW9MX3FLcFRad0pHd2kwbUhSdlZ5WmJPVWJZRXFTVnltbjlqWDE1eGFjNWo4d0NpZHozQQ?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:03"
        },
        {
          "Headline": "Martingale Asset Management L P Cuts Stock Position in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxNQ0RVemVXYU5FejM5dUtORTc3WDI2dDBCZmdhOEtjeWVVcDR0TmVnT2M2anMxVUxaRzQxLTM4Zzhycmg4LWVTT1dwcUhYQTBmaHkxYmJnSThjX21qR3ZKT1VHWXd4TElXMWV3U1JlWUlpaEM3U3lXZEVjTkdsVWNULUpuRDZMLThmQTRpcjdicWdXZWpyemtBbTBxV0lnQ1hGVmlsOWFKMGF2VnlMdUs4TUsxeVVTS1hOZnlsb3NoeEtGRjFuaG9EbExGZHF1clBKdkJUSUNYRmlqaUZpbzRaZ1NaaWNwUlFLYk1V?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:03"
        },
        {
          "Headline": "AEP Shares Climb 1.05% with 240th Trading Rank as Institutional Jitters and Earnings Fuel Optimism - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE96LWtpZ2V2S2E3Zzg2SXhpR2FoNW9wZmtPc3dUUEM0Nl96X29PLTV4Q3p5LTY2aTU2d0J4TnZiUXk5TnlydF9fMjNNX3NiWVM5SnFscEN0ZEhJVGFDTHdVSlRVMNIBY0FVX3lxTE96LWtpZ2V2S2E3Zzg2SXhpR2FoNW9wZmtPc3dUUEM0Nl96X29PLTV4Q3p5LTY2aTU2d0J4TnZiUXk5TnlydF9fMjNNX3NiWVM5SnFscEN0ZEhJVGFDTHdVSlRVMA?oc=5",
          "Category": "Market Movement / Earnings",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:03"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AFL",
      "Price": 109.11,
      "LSTM_Confidence": 0.62,
      "News_Sentiment": -0.9,
      "News_Impact": 0.9,
      "Headline": "Aflac pres. Koide sells $1.7m in AFL stock - Investing.com",
      "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQcmUzRkg4UDRTVTZxWDJtV1ByeXJTQzNCZ0JfcUQ1Uk5aWS1PTEJpdlZvbnAwdm1YcW9scHpSMWV5N042dnRvTzhRUXV6NWNZQVEwdC1QYjNLUl9rQkxpTVF1dW95aUdGM3pFYU1YMzFtR2Y3MjFKd0lITXJTalVBcjBYcHo3MXc2TndMeVZ4U1diRjdGdnlORWZvU2Z1WGJoVGRYQ0Z2WVp4T3VjSWxoVHZn?oc=5",
      "All_News": [
        {
          "Headline": "Delta Global Management LP Takes $2.58 Million Position in Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOYXZFbnEtZ3ZZSlF2bm1DeUpqZEJrekpBcWtnVjUycWw3c1U1elNKakx2NWszNWNWeC02cGZGNzZEMm5Xd1BlalRkNG5hX0xwRDZQeXh2Ul80M0VlWUhKVjkxSUtHNkFydEZGa2VVajhWcFVYcVNMSkVNWWFxeWdWZ1NDVndhQTUxbXFmUXR6VTBMdHZpTzl2WEhOOGFSUEI2UTBkUnhJSzFIUF9IZ29kMGs1Z3lLNnU2alRBa1R2eXZ2VE5JNmdvTTQ0c3hGaGFzMUItQjlGaw?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:23"
        },
        {
          "Headline": "Aflac Incorporated $AFL Shares Bought by Gotham Asset Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQQVhOc200WXZKNEJkR04tbEp0WmZfR2E5eWVOYjVCcUNFRDQ5OGtfZVhuQWhKWVhQemJ0VnZFV3FkQm1wS2M1TE1tMmE5dkJxS3JLMWR6dkZHdC1NUkpGVnUzRmRHN1Ryb0NVRVRsS0lsQThaLVlMZ01UR2NWb1ZzWnBSZ2dCbGFCQUk0LW53eHF3Y3hhYUd0eWNZV3VrbG8tZ0dKelZHaGhMZEJ0SnlVaWdDU01ROHNDbmFiVnM3Mlo4WHpUeEZJ?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:23"
        },
        {
          "Headline": "Is It Too Late To Consider Aflac (AFL) After Recent Share Price Pullback? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQMXBrdFB6MGhmeWdKeHlQTzlmT0NYX3k0OTZMajZvNVpsVkkwOU1VU1RBemc2dWhGRkJ6MTNvYzlOdE40dHZaQWxnX25IM19IU052UmFVLU1iTDZoZ2lRUGZMS3Y0c0pQOWhBQkhZSVpmM09GbEVmbzBadmtVNmF4TQ?oc=5",
          "Category": "Market Analysis",
          "Sentiment": -0.1,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:23"
        },
        {
          "Headline": "Japan Post affiliate trims Aflac (AFL) stake with share sale - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOYlhoOElIUkFjZlR2U0szVHNidlkxSUo5ajF4b2NhODUwdzVTa3VjbTk5NEp6MVZ5WnNleGJnM0YyQ05ndVZXNTZYU25NS3ZSc2pyLUd6N2NFR0FoVmdnNzJwU1dfV3dzeFpaUXpvbnBQQXFwRFNBeWZvOFBWWDZQVFg4UHR5ZDZXSjMyWkZiY2hWcFNkV1FNOGZDV0JlOFp2b1JEdg?oc=5",
          "Category": "Institutional Sales",
          "Sentiment": -0.4,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:23"
        },
        {
          "Headline": "California Public Employees Retirement System Decreases Stock Position in Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNWTB0NWFDRHpCcjBvZjhyRDN3V2REdVpVMEUtZkhqNlhpLVdlVXdGVGo0V3MtMV9CbVBHTkZoV21TTWNhVlUtcHFaeXo2dlJLb1oxTGIzLWU4QmtLUTZkUkxHQTRsQmktRjdQQ1MtTVB3UVFzQnVNbjFPci1JSzRSR3BtYlZBY2N1MFAzOFZHd09xNW5Rcm9jMU5HMWlzZi1aTkt1NnJpNnVUekJ2ZldzWTF2eUREWDR2SkNCMzYyVUlMUENUUGVZVFpXcWdxblg5R1Z6cks3c08xX0Fya1VpanByUm9DUjlYVE41ZGFB?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:45"
        },
        {
          "Headline": "Aflac Incorporated $AFL Shares Sold by Brevan Howard Capital Management LP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPQzJ2dDlVU2tydDVUS0IydE4wUENRUmVVMFpNLWU4N1BYZmc0LVpiUGFzaTVndjVMb20xNlhfME1hYml6TTdMS05QZE1IeFh1cHhjMl9ja0VXR3BYakNXQjRMdmJlcUJQLW11RUFZTDhWbFBNYW4wTG1nc1NnZGlRS2l6VkNLZDdEbUtVTFBCVXZkNXhwSmxVREFGRWFmTGxwekZBdVllRU5TOUJWbktpbDlHVFZibGdaX3p4TV8tOGFrUlhKejFNcU1taFJqOXc?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-16 09:52:45"
        },
        {
          "Headline": "Clark Capital Management Group Inc. Sells 157,386 Shares of Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNbGZkWFdlWVQ3ZkcweVlodU52dm5rSi1zRXBQRkVubFFSWVFETnQxVmdBcmo3WjlxRXRVU3lPZXRNbGx3NmNIdXlUQlowTFI5NGFvai1fVV8zTjBlTUNINzdmbDdFdldSUHFGLTlINlRjTTVzTlFIYWVwSXZPTF9kQkxfU202U3JUZXhpc1JQWkluLUJZeXFxTGcxNG1iVnhqaU13N01DTzJ1T0ZHQWZZUmFrV253SmQ2Y0JKOGNLd0NGdVlZUy1NVklCQTdtWXF2MTdTeHZNUnk?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-16 09:52:45"
        },
        {
          "Headline": "Prudential PLC Buys 68,156 Shares of Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQSFJ6Y0RLT19FMjhoM1pRMmp4Tk1JWldaMUtzeWljUGdLeTl2azlyWHA5eGxVQkVzOVdGUnJTMzFWcXRROTBDd3RycDZaMFYzeXVPTHZVdjd6MWRRc1NWZE9OVnhydkl0SFZSMXI4RHJ0dFU4Yl9JNldYZldvdkxLUWZLYURHcmNmV2lYQ1dOSjA5dGp3bTF5M2ZRMldvT0hOc0pLbmxJSzhGR2RncThhb3lhVEMwbmZISW8w?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:50"
        },
        {
          "Headline": "Aflac pres. Koide sells $1.7m in AFL stock - Investing.com",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQcmUzRkg4UDRTVTZxWDJtV1ByeXJTQzNCZ0JfcUQ1Uk5aWS1PTEJpdlZvbnAwdm1YcW9scHpSMWV5N042dnRvTzhRUXV6NWNZQVEwdC1QYjNLUl9rQkxpTVF1dW95aUdGM3pFYU1YMzFtR2Y3MjFKd0lITXJTalVBcjBYcHo3MXc2TndMeVZ4U1diRjdGdnlORWZvU2Z1WGJoVGRYQ0Z2WVp4T3VjSWxoVHZn?oc=5",
          "Category": "Financial",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:50"
        },
        {
          "Headline": "A Look At Aflac\u2019s (AFL) Valuation After Recent Share Price Softness - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPNlJXa0tjZmhNMUdEZHBsQzIyWnFuX2dlUWxTUHp4SU12ZEltdGZiU2FLRDZ6aUN6ai1YZFZwclpwTDFaN0NXQXpDMFdKS0VSU2pZVWdsOHg1eVF1LTY3dGt6RHlJNHJiTDQyRy1pNHZrbk01c1ZyU0VWOU5xWl9kcFYxeHhmdGRVakRKVmpkTHdPUzF4R3JKLTc3NTdqWVZQSTFKSnpfRDNwcXNxSWNWWDA3TjM1VC0xWmU3d0paTdIBxAFBVV95cUxNT3lSQmNjMVJXaElRYW92WTNFbmlxN1ZfbTZ1aTNrRG1Qak1VM1NmTVJHVHdid05CbElSOE9Ia2dnYWxfZUNkWDg0UHE1N2lmTFdIbU5SUmxIbzl6TTZmNHhFWHhCTEJ1Y1h2SHFKbm9YYlB4X0ttYmE2QlZqY2NKWE02Z21lb2s2Y1lFdVJNQ0J0dTRIYTA4UDRqNWNxVF8tQXI5Y2RpckttY1JlUmE4b1p6ZzA5OVRQTFhiRWctWEZsLUx5?oc=5",
          "Category": "Financial",
          "Sentiment": -0.3,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:50"
        },
        {
          "Headline": "Schroder Investment Management Group Reduces Holdings in Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQWm5TMEp1OEpXdDBZRGFvVWVjZ3UyVXhlMW9xMUJKck5OWlBsYWdqN2VhVnNhQTEtcDFJbl9IeTRySE83YzFkRi1pZGNGZjRRVU9LdXpaMXdHeXRxQW9FbVF5bFFoZHFsZ3laS3lhenFVbnA0bERGTzdvYU9SUEkzRC1SQndLV0lsZjJiTGtsZzUxRU5saERzWTJIbTVDemFSdlhMQV83T1VJLVFrZDA4ZTRKenJMb2lFQkhPTFlZVHVRZy1ram52b1lXS1hCN2JUdGlFZDdnMA?oc=5",
          "Category": "Financial",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-14 09:21:50"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AIG",
      "Price": 76.54,
      "LSTM_Confidence": 0.68,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "McGill and AIG collaborate to transform subscription market with AI-driven underwriting - Reinsurance News",
      "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZS1WT3oyazE2bEZBNHRheXdqM0ZfZlFDQ3NDWnRWZGtlbmZhZDdKRnR4ZTRtZTkxNEVseUMtaU85M0FTMEc4SmVkM1NQMWlNTmlRSTdjWTNScjlpR3VjXzVEWEMzMFRvRGNFMThpVDd3UWdGNTVNM3A5VW0tWTdqYkZDUldkX0lOaVFPS1JqTWFvRzZOS2xfVHBHNG5TWEpoc0dyVGx0aXZTVkVNR2JqNXAtVGNZQjhS?oc=5",
      "All_News": [
        {
          "Headline": "AIG, McGill Announce Collaboration to Potentially Transform Subscription Market - Insurance Journal",
          "URL": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBlYnJscmQxU21Rb3BPempHTHB0Z0xoVEI2SGg0d2pTaTRHTURVUktqYUJFTTNrYzlNcGFMXzBFa2VnS3dvLVl4b3BvbzlQeFo5S0lONE4tUWRiRjRoNWtXQmNKbUZoVVNlR0xlV0JHRmNlR0NSRTRj?oc=5",
          "Category": "Strategic Partnership",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-17 09:43:24"
        },
        {
          "Headline": "McGill and Partners and AIG Launch Long-Term Strategic Collaboration in a Major Development for the Subscription Market - Business Wire",
          "URL": "https://news.google.com/rss/articles/CBMihwJBVV95cUxPaEtHWDMzTngybndHaUIzRFFQdlNubnphLWQ5SFcxdkFiV2J3RDhURmF5Rk43VXpFeEk2WlpTZHlWUlN1UkZNam0xQWJ5MmtrUFk4ejlyWUFtWXM5VmJqN1NqbTNZQUlubHRWMElPWUdkejRlMFg0QTZySzN0Z3FkeU1CWFk3bGZpT0hnRHhCaHNJaXhDX2J2NUNJempYVDNvRWcyWDV0cmRXZDd1QnQyUjgwbV9Ma2c2QXZVbmlCeVRVdTFFbm5NdVJwWkp1TFhLenA2czVRaVhSM3ZKcGg0aEVpeWVUM2JsQUltSV9CeG12LTFpRFM3ZjBSbFg2c3NXS3hxVmpjNA?oc=5",
          "Category": "Strategic Partnership",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-17 09:43:24"
        },
        {
          "Headline": "McGill and Partners announce deal with AIG on subscription market capacity - Insurance Times",
          "URL": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPMUE1TFN0dUpXNloyMXp0b05zckI3UXJ4MnZxRDNNYmE0Zkt2NkItZGZNM2pQUzdOeWZiWVZzS0FxaF9hVUttQkd2aWJNX2xMV3ZxeVZpeDdZS0xjXzVUWXZjS1BsY29OR0tFbTdMV0lGZW94eFk1YUNjZjVLakhBTDVwU3NEWnBkSVZWN050LWlZYVdhN1dlbk9YVUpNbmxFOV85MHpNWEJfQjJRNkQ1SUhWQ3liUzIwWWJhSzRTSnVILTlSQ0JF?oc=5",
          "Category": "Strategic Partnership",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:24"
        },
        {
          "Headline": "McGill and AIG collaborate to transform subscription market with AI-driven underwriting - Reinsurance News",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOZS1WT3oyazE2bEZBNHRheXdqM0ZfZlFDQ3NDWnRWZGtlbmZhZDdKRnR4ZTRtZTkxNEVseUMtaU85M0FTMEc4SmVkM1NQMWlNTmlRSTdjWTNScjlpR3VjXzVEWEMzMFRvRGNFMThpVDd3UWdGNTVNM3A5VW0tWTdqYkZDUldkX0lOaVFPS1JqTWFvRzZOS2xfVHBHNG5TWEpoc0dyVGx0aXZTVkVNR2JqNXAtVGNZQjhS?oc=5",
          "Category": "Strategic Partnership / Technology",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-17 09:43:24"
        },
        {
          "Headline": "Why American International Group (AIG) is a Top Dividend Stock for Your Portfolio - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPaVU0bkIzd3oyU1dQczlmR1Q4SlRJN3pKa0lzNklpMzJ1V2pwc1VlY3FTcjdNbk1CNWIxeWxqeUFJSk81bmU2Q0pOOWRkNU5aOXZ4QnZQYU1ldHQyWExMb3ZqaVplb0ljWmExa05RcWJWb1gtbldsTklJcE1PdVRaTy1URzlMZ05YdGc?oc=5",
          "Category": "Investment Recommendation",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:24"
        },
        {
          "Headline": "Ameriprise Financial Inc. Increases Stock Holdings in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPUmFBajlmSUtMcERLX20tRGV0MVNOTXFrLTBSbW5jT2hxeTZVb255VDhKYzhmRXlZUTFmUDBUekNnS09rY3hrYnpDSjhjMFY3N1JwUS13Z2I0UzBjSlpXQUFiRkNBZHJkLUxVVGdFakFESjJXbG85bWZmTjkwSUwyREFYNEplYUhpaXZ1ODNrR05nTkdHMjlhdGk0Zmdua0lSUHR1WDBldmZLMWNqQWFZZWV3VFBqbmU4QkdCWWpjVG5nM3NrSTU0OVZvMkpOUnRnYVJOaFpvN0NRUkFKTmVZQ0gzNVQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:49"
        },
        {
          "Headline": "100,333 Shares in American International Group, Inc. $AIG Acquired by Aquatic Capital Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxQSlBMRWtDWi1hdEtvVEFCYUxCNlRsX3dLQkxOZUdCRkdRMjZDRm00UGlPSFMtalVvQ3hIN2w2Ynp4aHBpLUhJcjNCdVpfbGdiUTJDNGZtcXVRZVFYN3hfMFRHQzRCZS1NTEMwYWRFVzhwa01UQ1REbXhXQnlOZUVpQ2JKaGtqWWg2MGJNeXVGclRiYnJkVHhsR09iT1FnV3NQZ2E0bklZTU1uRVNydDdjb2luY21zdmotM29VNDhhX3UzakFQampDVEVvc0x4cmNXdUhYUk5LaHFmUTRyUW5SSElfTGVuWU1MQktqREJn?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:49"
        },
        {
          "Headline": "Wellington Management Group LLP Acquires 1,899,203 Shares of American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxOWE1YclYzLUluTktWcXZFdzFxZHdZXzVDM3VjWFpHZGVUbEw2ZldQNjVSWGdmMk5zZEhwNXNfWl90VzB2RjlIM0ozRXFtUWZ1RFZfbUxqVkJZM01GTmczWTBvSXdTQjlFYTZidHZ2RGYtNGtmZTNMVm1HSGNIaEltSEJDOWRpZ2haaWtIVXEzakVHV1VacFQ1RzZRVXRuTnhnNGpYYUwyRGtwNEJLb0tHUUNKZmVJR1pJTlpDOGRMOGpna3pRUlEwTEEzaXJVN2FVeE5VQXF4VmJ4cmRma0VxQ1JZZ0NyZGF4ajB0eA?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-15 09:22:58"
        },
        {
          "Headline": "Aristotle Capital Management LLC Cuts Stock Holdings in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxPTlB3UVVEaTQzZktzNjRuMDlueWdvS3RrbXpZaTAzSjgwT1dyWTRxUkl5ZDRaS1YwOVdPMjN6NnJOcjR0eVp3TGFpTVlXWDVuOG5PN01fSHV0R1Q2NGxlS3hhcHM3cWNmbWdNYjhEc1RSVW96eHJxSTdnUnNwU0JOajVvZUM2V1ppbkpyOThMekxyTjd4bjZpWWtNeXVCOFBBWXlTS2dYRjE0SlFneFVYSURNZlc1NEY5aFRERDE3T3FJMHNBUVhuVnhqb3BDbVN5b2RPbTZhbjdwei1NdU9hZm5xZlVRY2FE?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:58"
        },
        {
          "Headline": "American International Group, Inc. $AIG Shares Acquired by Mackenzie Financial Corp - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOOUl2VnVZTTVYSl9rMm11UEhzMTZZVzJxMlpPLV9oam80SEd6Z2pLWDJ0VlluSnJwNF9TS3ZVX2lUT2EtbGlYaWxZaDd4R29oclNkMi1UMzJTTzFGLXVOZmplLU4yRE1aNnJZLTFmRm5mTkpsVTBCWmpwemEwSTBOR29ERE9rdVV4SllCSzd6QUZGZXkzN01hZC1uc3VScXFpVmJ2MHZjODBZQk9YdE5Yem44dkNBSVhQdFdUTGRMX0w1MlJOeWRGTzdoeEZjVjZ0RDliSlRaU24?oc=5",
          "Category": "General",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:47"
        },
        {
          "Headline": "Farmer Insurance Schemes Market is Going to Boom | Major Giants HDFC Ergo, Tata AIG, IFFCO Tokio - openPR.com",
          "URL": "https://news.google.com/rss/articles/CBMingFBVV95cUxNU21PZDVIUWpBWDF6cDJKUzNvajUzQjI2Mmwzb3Q4aVZGNGFiQVZ3UTF6TG9zVi1OUjlVNmhBaFVxandKN2tnZHZSYkxGRG55dFY5SVlZd2pyX3RWOXp4R2gyM21XNFdWVWVtbUlMZ2dkb21yd0FIVnNNSzhLbVM1dTNQcWNZMVVNWTNtWXN1Uk05dm40WHl2UVU2V3RXQQ?oc=5",
          "Category": "Industry News",
          "Sentiment": 0.8,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:47"
        },
        {
          "Headline": "Schroder Investment Management Group Trims Position in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxQNG5rNTF1elNPNlM1UUpvamg2eWhINUxDWWRiMWFINWRjeWFlbmJacTBDX2xhNVpHTDFPZDlDQnlMMWU5X21HRDdiX1Atb1hibXIxVXFZeGt1eTZBNEItaTJvX1hnSzhzcUxhTzJWdld6dGlpb09EOUtkLWlGZ2VZTHI4SVFKak5VMnFmYndVUHBaZ055LWdRZ0FRMWhuMnFfWDJUYUJnRVhWZDNLaWFSM2ZzODh5ZjJ4aTUtTzhmMFRhU19PZnRQYW00ZU41c2dRRDFHNHdPOUJTRmhvWkVwejRuMVlFckk?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:47"
        },
        {
          "Headline": "Invesco Ltd. Sells 248,418 Shares of American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOUlNlWTJYR0g4bTRFVjR0WHpHQVE1eXUzbXBQRHdocDhuQkdjOFZmQ1lsdVlNM0VnNlJQSEFZSGVxeXBGVGFHTVdvcnVpaVNaT0JheHBHb3I4UnZFU0s5QVhjRUZKODVOdU9IdzIzWE5MYUZIMmMyOWZGcmUtdVo1RzY2cDVjMmJDb1ZlQkhaM1JoMHlCSmV0ekNoR1o1ZHY1LTdBc2p4bUl4Y2Rlb2tJNzBDS3NCZ2ZsLXR3cWJGR0hQX0dNR1R5eUNwX2g?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:47"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AKAM",
      "Price": 105.44,
      "LSTM_Confidence": 0.55,
      "News_Sentiment": 0.8,
      "News_Impact": 0.7,
      "Headline": "Akamai Technologies (AKAM) Price Target Raised to $120 by Raymon - GuruFocus",
      "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNZUVBVFlRUk1vN1VGTUdoR1lwVExSekd2c2s3VkQ5aUMzV3BKWEtsaWpUcHZ5QU53UzkxWE1Jd0R4STdvaF82NmtIcXdtY0FBSGF1djRlVHRnSjhEYXBKNktyblE1RkpYc2NOcWRmelhvZnVkYnVVLUVsWHYyZmhicUx3YXpwRXQ5V1lVRkozcmlJSnFOU19lVG5zc280eEotcEc1RkpmT3pMZzg?oc=5",
      "All_News": [
        {
          "Headline": "Delta Global Management LP Buys Shares of 32,573 Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOY0FiNS0wSlJjS3RiVXNjZl9ycVEtYldNNkdfUUxEODFWWVFaMU5EdG9JY1g5bTNvYk9MWExnSldEM0RrVEJpalVPN3lyTUx2TFRqZk5vTjhtWVRSbTBTMWhVUU1jU1dxeG5hR2lxQW5QalR1Wmh2MzNtNEdTNnd2NDR3VzBpZGN5SjRlaGp0X1lrYWlGVUI4ZTdOdzd6R1hHTE5GeGJUeVBkZUpaNVdobGVKV0NrenowWW80NEg4aWlJWDBJYlphOHR0TW9YN0tkZk5B?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:20"
        },
        {
          "Headline": "Invenomic Capital Management LP Acquires 71,173 Shares of Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxQbmJGUkZiWl9aNGJlQzlPaGpmeDFRY2ppUEJ5M3J1NXh3MWtHNS1nM05ZLXlTTDJnUGZJR2dYVUIzNUpmdnZaVzlEYkhsRDVEbnZ3LUg3d0UzVGxTVmo1eUFKaW9wWjQ5TVV3eDEta2lYQVBLaGJEVWpsSE1MVG1TTVpoSHFpSWZwbkl1ajIycjFHN19wckZycGp4VTdGMF85Q1VvdmVnUjV2TTN5YnVQNWhNblNqSFFaSzFXeVFKUGhUT0c5RktuT3l2aDBaV3RUa3E0dHZFWVlMRDVvZy1v?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:20"
        },
        {
          "Headline": "Kettle Hill Capital Management LLC Takes Position in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPSHJUTFpZRWFpRTJpSVF0VGpJNERqakJiSkVnbk5FSkVERkMxellNNlpyVmRPQWN3QWNpMXNzMDBCcDBmVjJ5Vk1xemhXaENlcEFEd3FlRldRaldGU1lYWkI2ZDdmRWN0Qk1RTTA1X21wai03cjVUSnU2dEFQcF9FYjg4RHdJcWxscHlMdTR0eVhaaUFwT0tXWXZaRzJMNmJuRk9RUjVNaE12R1FFVXltWDBFOGo4T0tHNjI3dEJYcUhkeHYyXzlPT0ZlaWRQNGV5RVR2bGRqR0h2UQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:20"
        },
        {
          "Headline": "Akamai (AKAM) EVP Paul C. Joseph sells 5,000 shares in planned trade - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNd2tQN0FMQ3ZwSERRZ3VRMDJqWU9CaFdtMVJOdkNrejhPU3hpdWhvSWlXR3NKeHlQX3NpdVVDS2pNVVNub0pJbkJDcE93cW96cmFERDNkOWs2dC1QTF9iQTB6MGlnSkFWeERtMkJnUEVoakpsenpPTzlCcHVhdWYxU00wT242QjNRdmZpWVBENlVhcXRmaHkyTERHY0U2c2NwalJsdElJX1dUNWd3ckNpM2pKT2pYQkV1?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:20"
        },
        {
          "Headline": "Content Delivery Stocks Q4 Teardown: Akamai Technologies (NASDAQ:AKAM) Vs The Rest - Yahoo! Finance Canada",
          "URL": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOc01YbHU1X1VwQkloQkZZNU1IWkprSEs4eXprZkUxS1RTZW40OGEyVDdKd2R5QUhVbVZpMXd6TUYzSWtNM243WHlHUXY0M3ZEN0g4cDc1RTE0M3I1UGstS1BYZGJWT2YzVnFJUEtiTzY4WXAtSTIzVFl1dExrNFRVcHpRVElIcjQ3TWtOdg?oc=5",
          "Category": "Company Specific Analysis",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-17 09:43:20"
        },
        {
          "Headline": "Interval Partners LP Raises Stock Position in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPRHFEUmZacmp6RFg5aUNGRjhZSGJrWGhLS0NvakEtcHppR1BXUlBWUVlzLTRNOUJCazg2S0tzOElmRXZqQWx0VU52eEZKSlNfV2tSRHRUem5yNFktMXpIUG9VUDBCWFE0ZExWZzlrR3UyOFdhb1RMWTNUa2NpVnFwVzZsXzE4ckVtdTl0dEJ0M29FX3JMN3VadllBaUNKclowckJXYUlSckRlalpIWjZFekRXcVRNNThvbXdqV0dBRTJtajR4eEpTMHhpNS1pNjRE?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:47"
        },
        {
          "Headline": "Is It Time To Reassess Akamai Technologies (AKAM) After Its Strong Share Price Run? - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNREFESXg1dndhMHhYSHNlNWJMUUc0WnVNRFQ0dDZOOGVxdEVoYVhqSVFFWHJ4UGwxdzNKTGtkakFYeEFvRjFhQlQ3VkJESnVQQmFCVmwwN2N2UXc3UVN3QUtubGI2bEYzZWpIM1A0LU12RmRvQldMMmtneUxyZl9VRnNKcF92MHFvSDZtaUtKWHZITV9CTG8zR1dEVWxWMmxSTEx2bVpCanA1X0RweVo5Vnh2cG14cG04ZGhVQWN3YUZQUks5Z01CSUwydDY4dGZBRnJEUNIB2gFBVV95cUxOWEkxSS1jQjctcTdyZVZyS2dtMVZmVk1mLTlHdGNEMEVWcnAxOVp1WHpVeHcwYTVFYTNyaUl5bGwzbzlIUTdPWU8zR1VCWnFCRjlDeEVJdTFPNlBTRUJTOHVOQXdlOHAxcnpwbnVGZms4NVVxNFoxaHpUdjRFY0NKc295eml3cjhLMUNIcnZNc29pWk0wMU1fc3RlVkR2NHB0bDd2dFRLcDJTcDJna1laS2Y2TmxBcjVvd1huOXFZelNMZXZiLTJoUkpuZmZldXlLaTU5c3lKXzVIdw?oc=5",
          "Category": "Analysis",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:48"
        },
        {
          "Headline": "Legal & General Group Plc Lowers Position in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPVzRpMFBWSDRwWGRWZ08wSWo0Si1CYW1fSm94bXJ3UzJmQWRyX3ptU3R3aTB5OFNHcHdSMFduOHo0Y0xUT3A3Z1B3ZVowdUZfMVhQMmhKSjU5MDZlZ2J2Vkp4V3hDeVBpOEU1VTNvR0RFallPZDgtSjBQNDJoeHZlSFNvNDEtSW9FTVRRRTUwUWR3bE1RT1QzQzlEc1FWOG9SMHltbVJhcmZjNUlFc05XNDZ5LWtLLUR2d1dsZ1ozbFByZXZPUUlkbFk3cWI?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:48"
        },
        {
          "Headline": "Akamai Technologies (AKAM) Price Target Raised to $120 by Raymon - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNZUVBVFlRUk1vN1VGTUdoR1lwVExSekd2c2s3VkQ5aUMzV3BKWEtsaWpUcHZ5QU53UzkxWE1Jd0R4STdvaF82NmtIcXdtY0FBSGF1djRlVHRnSjhEYXBKNktyblE1RkpYc2NOcWRmelhvZnVkYnVVLUVsWHYyZmhicUx3YXpwRXQ5V1lVRkozcmlJSnFOU19lVG5zc280eEotcEc1RkpmT3pMZzg?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:48"
        },
        {
          "Headline": "Perbak Capital Partners LLP Purchases 12,085 Shares of Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOY0pWOEJqQVBZLWYxYlZCS2luRTF3c1BuRXFha3hQajRRWTBjcnZ2bmE5eDNrX0FGS3FMLW02ZDVPeDN5bjQ0NVFkYUtNX3FPUTdKak1BN1I4SjIteElEaERNRWVPeHRIalhVT29hMXB1dFlPZTZNMGNqX1d1WG9oWHdoU1E4SXFlX3pBaUIxYVZBa2Y2emtiWk5GaFBtZ3JnLXVKVGctOUJzQ0JoOFhURnFla2NxUnMxQzJ5OEJLMVR2SkdIYnVLeXlpUzFQcjlPOGZzSU43akpYYWM?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:48"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ALB",
      "Price": 162.44,
      "LSTM_Confidence": 0.58,
      "News_Sentiment": -0.2,
      "News_Impact": 0.8,
      "Headline": "Albemarle (ALB) Valuation Check After Q4 Sales Growth Net Loss And Ketjen Divestiture Plans - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQMVhQNE1XczEtc1IyOXVaU002NUFFMTl1azhKeGV5WVNjVjJNR255T1BFTGlBSWpYcU45NzcyOEp6em9CVXNlT0huMml0djhyekdTQlhQazBLRHc2eHNLMzBwckF0LWMzUC11WTV2XzdUakdlZFZTMVZqeE12cDdGdGRuSFNUV0xQalhIeDBFLXdGODEwSm1rTGhKeThtM0l2WU42VlgwQzJXZVh1eGthVVEwbFA4QVZ1SC1lak5ZX2ViZmd00gHKAUFVX3lxTE1FUTBEMG9VZ2NLamtVTUJTOUVybTd1eXYwNGhwLWtRVkpiaV8zWTVscUxkcHdCcjBsc292WFNUcHFTSkVlZ2d0T3VHYmlmM2JZNXhsc2dIenUxWEFGRUVNYnBFNWM3VkgxRm9tZG9MaHVhVnBieGxqdU5iZngxYlA4TkY0Y0dXZ0RqRWlXUnJFRnphbFdjS2k0WHBVVGxDVzRNckVJV0wwOTRQLTRnRzF6WV9tRlpKaVlMX2JBdlRfQVdxWEVQMWNMR3c?oc=5",
      "All_News": [
        {
          "Headline": "Albemarle (ALB) Files for Mixed Shelf Offering Amid Market Uncer - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNcVhwR3dHWHp3YzRfR1VkOGNYQXMzZnhvMHVtUGVScnpWaWVId2pabFV5Um9hTXN0Z3ZzM3NGVGExX19QaEExVmRGdXU0ZTNqZmJoUHgtblAyenpLQUVTXzM2aFRCSllUQzIwcld1alE5Z2VQMUh5YjVIZ2RqNDRVd3Q1NEVDNTV6NTJtYkJ3ZDlYU3lhZWlnYlZLYV9iWS1VMTJhLTFpUjBINkk?oc=5",
          "Category": "Corporate Action",
          "Sentiment": -0.3,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:05"
        },
        {
          "Headline": "Albemarle (NYSE: ALB) registers shelf to offer equity, debt and warrants - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNbHltM2JDbi1jazdxNm93LXJocWZEeE9GdXhIQ0Y5aFpvSl9tN3Z0MzFYSlRiSnVSazFJWS1GVklnMTZVSDNMeEtjYzRuN2Z0bVp3UUhQbmhlcDNPYy1ScHhaWXctcDE5WWo2SnNval9mcUxYOVlMNEk1VldYcVJacnpYMm9hMkJxekhMT2o3ZkxJSkZkY0t0UQ?oc=5",
          "Category": "Corporate Action",
          "Sentiment": -0.2,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:05"
        },
        {
          "Headline": "Albemarle (ALB) Valuation Check After Q4 Sales Growth Net Loss And Ketjen Divestiture Plans - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQMVhQNE1XczEtc1IyOXVaU002NUFFMTl1azhKeGV5WVNjVjJNR255T1BFTGlBSWpYcU45NzcyOEp6em9CVXNlT0huMml0djhyekdTQlhQazBLRHc2eHNLMzBwckF0LWMzUC11WTV2XzdUakdlZFZTMVZqeE12cDdGdGRuSFNUV0xQalhIeDBFLXdGODEwSm1rTGhKeThtM0l2WU42VlgwQzJXZVh1eGthVVEwbFA4QVZ1SC1lak5ZX2ViZmd00gHKAUFVX3lxTE1FUTBEMG9VZ2NLamtVTUJTOUVybTd1eXYwNGhwLWtRVkpiaV8zWTVscUxkcHdCcjBsc292WFNUcHFTSkVlZ2d0T3VHYmlmM2JZNXhsc2dIenUxWEFGRUVNYnBFNWM3VkgxRm9tZG9MaHVhVnBieGxqdU5iZngxYlA4TkY0Y0dXZ0RqRWlXUnJFRnphbFdjS2k0WHBVVGxDVzRNckVJV0wwOTRQLTRnRzF6WV9tRlpKaVlMX2JBdlRfQVdxWEVQMWNMR3c?oc=5",
          "Category": "Earnings / Financials / Corporate Action",
          "Sentiment": -0.2,
          "Impact": 0.8,
          "Date": "2026-03-16 09:53:07"
        },
        {
          "Headline": "Is Albemarle (ALB) Pricing Reflect Long Term Lithium Prospects After 114% One Year Rally - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNLWtRWUFBRXZ4YXNQb0lZVjVvOHVpLW4wQ2tGN1pUcTJubDVkMlphRUUyWFNsY3ZEUTBLd1pYSmwtelNVZkhqY0kwMHZ3UlF2c2NFWklQYUttS2JzMmZaUzRLTmpfcFlVNHVIRWhYMXBlb01MZl9xWXpZcVZzT0xjeTNickFILWM?oc=5",
          "Category": "Company Analysis",
          "Sentiment": 0.2,
          "Impact": 0.5,
          "Date": "2026-03-15 09:22:54"
        },
        {
          "Headline": "Aquatic Capital Management LLC Increases Stake in Albemarle Corporation $ALB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSzFXRkU3RjVhWlRlVTFLVFd0T2RBaWZjN2hmSmZZdG9pVEtXUWpCWHJWTnlqX0JpRzZNQU1DNGY3bXU3cGo4NlNJY2hRTlRHU3hRWjdSYUtDMXBmdjgybWpiRnVfNVB1bnFMczR3a2ZxTTVFTXd3NjRQNjFzRGxrRFJ3MVZjMFU5SlV2OUhHYTg0YklBOWxpTVczRG81WXZSSDZGMllxUXBHSWZPM3kyMTdYc0M0QXp0Z2tDVktrRDdFeDByd0hDOTQyY0JOeDBoY3c?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:54"
        },
        {
          "Headline": "Albemarle Corporation $ALB Shares Sold by Algert Global LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOZ2Q0TjFqZW96Yms5TzhRajhTTC1sY0FCdFFlSm84NEt0aGFucmJOYVRiNzE1SlhSM19DQVFMaDNfOFo0Y1JzSHpkTV9VVjNibHYtWDBZSWpib3RZVjhNQkpkM0NSOUQzN0ZTdnFnbV90TG9QQjNOeUhQUGowNmVYNEo1WDdhdE4zcjZiVkV0YWhoSHJsam9sRk5mV1ZxcE9fTUpHR1FVWF82QXlMWW12ZDNfdThJU18yY2xR?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:54"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ALGN",
      "Price": 169.45,
      "LSTM_Confidence": 0.7,
      "News_Sentiment": 0.8,
      "News_Impact": 0.8,
      "Headline": "Assessing Align Technology (ALGN) Valuation After Earnings Surprise And Institutional Buying - Yahoo Finance",
      "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOYnk2REhwV09rdEd6Rko1dU94Qm9RdTlGQm1IS3RJQWd3NU5EczRVelMxWVN0Q2JodWZpMDQ1RVB0X0x0dTMyeE8yX1BVeE1lcXpiclVuVkF4QXMxdWZMd2pUQ0YtTk9sM2dhUDVITXpXbk1VV21KZnNkbGkzdHp3X09ENG9YS2ZneV9CT3R1Ukc?oc=5",
      "All_News": [
        {
          "Headline": "Align Technology, Inc. (ALGN) Stock Price, News, Quote & History - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5yOEQ0WE1qaWZpV3NIaXVZSUhyLTZDT0hXN24zZTk3cnFPNWFIZmNMN195MDVkOEd2QXZYeDFWdjhtc1NTRUhiWGhsWGdZZw?oc=5",
          "Category": "General Information / Data Portal",
          "Sentiment": 0.0,
          "Impact": 0.0,
          "Date": "2026-03-17 09:43:17"
        },
        {
          "Headline": "Assessing Align Technology (ALGN) Valuation After Earnings Surprise And Institutional Buying - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOYnk2REhwV09rdEd6Rko1dU94Qm9RdTlGQm1IS3RJQWd3NU5EczRVelMxWVN0Q2JodWZpMDQ1RVB0X0x0dTMyeE8yX1BVeE1lcXpiclVuVkF4QXMxdWZMd2pUQ0YtTk9sM2dhUDVITXpXbk1VV21KZnNkbGkzdHp3X09ENG9YS2ZneV9CT3R1Ukc?oc=5",
          "Category": "Earnings/Fund Activity/Market Analysis",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-15 09:23:09"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AMAT",
      "Price": 346.18,
      "LSTM_Confidence": 0.58,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "Applied Materials (AMAT) Is Up 5.2% After Dividend Hike And New AI Memory R&D Alliances - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOLUJiUzlpUjZWQi1UREtjS2dSVWxWNGZtczZaREIxQ3hUYXgxLTdBcVhRR2F5LWtPWmczbVhLdFdWYkw4Y0U3Ym5ITVdLbnFnSkVFLXdwOVduV3d1UlhRR3ZiR3g0RUhLbVdGcFF3TFZfbHFWOE5HV3FzdXktVFhzMkt4ZkN1YlJlVEl4THNhUVRBaXpnSTBReW5CbDgwT3JtTnFHLVFpOFRWYWRIaGljTUROeU00aTJ4emxQSm5oUm5pM3Y3NDRQcUx4bzlPT1ZpT0poclZ4a0hMN1l6MXfSAd4BQVVfeXFMTi1CYlM5aVI2VkItVERLY0tnUlVsVjRmbXM2WkRCMUN4VGF4MS03QXFYUUdheS1rT1pnM21YS3RXVmJMOGNFN2JuSE1XS25xZ0pFRS13cDlXbld3dVJYUUd2Ykd4NEVIS21XRnBRd0xWX2xxVjhOR1dxc3V5LVRYczJLeGZDdWJSZVRJeExzYVFUQWl6Z0kwUXluQmw4ME9ybU5xRy1RaThUVmFkSGhpY01ETnlNNGkyeHpsUEpuaFJuaTN2NzQ0UHFMeG85T09WaU9KaHJWeGtITDdZejF3?oc=5",
      "All_News": [
        {
          "Headline": "Applied Materials, Inc. $AMAT Stock Position Lessened by EdgePoint Investment Group Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOemhYQ2V1Sm5qUnlTUV80eEtYbk02QlFkaGNmRVVxUnJmYWVEb1poV0FrZkc0UFlSdnpQTGFabFNlY3lYOE1adlU5YW52X0ZNX1BiNktCbkpjSVRUc0xrWWdrUW45cG55dEhtLTJnR0V6Zlk2VWVWbmVpY3hOTHlCOHdkR3hNcVN4Rm0xb21Ld1pqTDl5Y0NLajBrNkVmb0ExRmhqcVRaUWUxalYyWVVXNEZndmhLOVpBcUtSWGgxQ2xOSUdIcmF2YkN1ZmpONkwxaU1wWDVxSE50LVJTcUE?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "Applied Materials, Inc. $AMAT Holdings Trimmed by Chevy Chase Trust Holdings LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQRTRPTXJEWVZ3bnJtaHhZMExtVG45N04wQ1pGc3k5d0N0SEN4T1doWG9RNzIxeVpOYVc4VTZxcE9FZDhFSzJBVmprYWIzcXEwQVlqWElKSEhIY3diV3pvcExVNjJDR3AyOVhpUnRZd294SlVsUVV3YVItdWtlcUxZaHBHbUR4R2M4YWVWdm9vZjlNVWs0ZzJOS1paTWxURU1GSEpVbFlEanRXSTY1dGFoUjZVZXZDUldGUzZqdXlPSWhrOVVBQnJrYXNfUEp1ZndBYXV6dw?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "3,349,048 Shares in Applied Materials, Inc. $AMAT Bought by Coatue Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQbUtXdW55Nmd2V0NONl9DNXZ1dlVSaHFJOGlJWmVON0tuVUdGZzg1bGJ3UnQ1VC01b0N2UF9vNGhZbXhNTzB0OW9FbGo3US1RNUFua1ZDQmZGVXdZWVlzTG81czBzRFVrZ29JakdTa2lXc2VTSFJFN0hDY0lueFdleEJOVG8wV3hfZzczZXROeXRJXzc3dVFSdXdmQngtZVU4bW9CNUE0dUg4LVFJM1ctSFUxZzdKaW01cUViQ3Etc3V6T1g4a2JJZ3doUFVOVTF3d0I4?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "California Public Employees Retirement System Decreases Position in Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQUWthM29FdUpIV3NNTm1nZHkzUGtUZEYzdS1kOGtkMkNqODJOQU1hYlQwcGg3RG5pZno1RHBJOGR1bTBmNmUzQ3ZlZml5NndRWlBuSm4xUW83TGZha3ZXTW50NG15bVlVT0ZrRWZFTHZGeXl3RjRrc1hCdGluV3BuQlhLeG1USE81ZUNqVkhiY1NWSUlVQUZQQnpoWnlxSU5qSVE0QXhaMTJRQTFJQmZTb2JOb2M3Um95UTZ4bVN4ODRZRVF5N1BGcHRXaHExenlfRm83VFJtS3d6WWRIVjllN1Y5SDJadzdkYmNJ?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.5,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "Applied Materials (AMAT) Is Up 5.2% After Dividend Hike And New AI Memory R&D Alliances - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOLUJiUzlpUjZWQi1UREtjS2dSVWxWNGZtczZaREIxQ3hUYXgxLTdBcVhRR2F5LWtPWmczbVhLdFdWYkw4Y0U3Ym5ITVdLbnFnSkVFLXdwOVduV3d1UlhRR3ZiR3g0RUhLbVdGcFF3TFZfbHFWOE5HV3FzdXktVFhzMkt4ZkN1YlJlVEl4THNhUVRBaXpnSTBReW5CbDgwT3JtTnFHLVFpOFRWYWRIaGljTUROeU00aTJ4emxQSm5oUm5pM3Y3NDRQcUx4bzlPT1ZpT0poclZ4a0hMN1l6MXfSAd4BQVVfeXFMTi1CYlM5aVI2VkItVERLY0tnUlVsVjRmbXM2WkRCMUN4VGF4MS03QXFYUUdheS1rT1pnM21YS3RXVmJMOGNFN2JuSE1XS25xZ0pFRS13cDlXbld3dVJYUUd2Ykd4NEVIS21XRnBRd0xWX2xxVjhOR1dxc3V5LVRYczJLeGZDdWJSZVRJeExzYVFUQWl6Z0kwUXluQmw4ME9ybU5xRy1RaThUVmFkSGhpY01ETnlNNGkyeHpsUEpuaFJuaTN2NzQ0UHFMeG85T09WaU9KaHJWeGtITDdZejF3?oc=5",
          "Category": "Company News",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "Applied Materials, Inc. $AMAT Shares Purchased by Abrams Bison Investments LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOQXpGWVVrRWlldDhZbmxma2YyT2ZlMVVDZjdfTmxjd3o5U2gzLWtXNTA3MS1kY3ZRMkdua3hiVExfQmZLNkJLZWl0VTYtZm1hWGlVbndaQ1ZpMkY4WU1iX3FjQ0VwckM5SGNXUU5WTzh4RThfXzVsUnl6azNfTHRqRGg3TWZqeXFDdVB0QzJlYVZxSG1IZXJ5UGQ3ZXpGR085MUVsb0YteWNSb3E3bjVNQTFwZVZrUmRMMkRsLVBQZVAwQXhRbFA0dDNKU0Q0WjNyanc?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.35,
          "Impact": 0.2,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "5,145 Shares in Applied Materials, Inc. $AMAT Acquired by Mangrove Partners IM LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPY21zakVEQkJ5R3JVOGdJN3dOTk5iVE1Dd0hoYjFtRXFyNnlNQkd3b2V6RkZ2SXMzbG15TkVHel9rN1JLV3I0emNMQkJVYXZsVXFXYTJSX0ZWNjZ1Wmt0a0x0TnZRYmE4c1o4aDNhaDRQWVRRS2ZfcmpWeU9GRTN1dU1LV3Z3N25OMXVtcEQxdnJKVk94X0RVSDNlY3pZMDJia2xxVWdrcGV1b05aaFBEUnQzZEpLWDZjM045ZnVwcy0zTzVlOFFmMzlST0MzVXNLQUJMSTNR?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.05,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "Alight Capital Management LP Buys Shares of 50,000 Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOdHFFN0liMGdXY2k2ekRCUkRLVGMtdzRjTzAtYWstSmx0SC02dGpoYTNub28ydGo1NmlDdG1CMzJHOHc0OTBrc1N1RVRrWFVtak5WN1gxY1l3VC15Q2VON0hnV2VYWlVmc3B4NFNHNW9UcmFYMDNqdlY4M3dQelJwYWl3Vm4tU2VMcENLQlFpcGtRTEZ6VHgxTXR2V2ZUODVqeTFVb290dTUzRV90MndiX0twb3Bkc1ZVYUpjSmpBaEZTTWZSUDNHVmNKV3VFa1Nra3V3?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.15,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "Aristotle Atlantic Partners LLC Acquires 10,408 Shares of Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPMEFiZFBMS0ZiZDFON0RNMmlEZTBBampULWpkOGFOZnNOWkZWZFVpZ0oya2dBWEJuSVVEVkxhNWVkZ083eVZqaWdkZmNLdUJaZFZFdFgwSHlMWGZOaTFldGxTS1FhN3dBenFtb2hIeG9IUGdCVmJBdk02QU1fWXp6V0wyb2JYbl9qZ1dJaFdBaWlHbXN6VWJzdWYwMHRuZ3FzYTdBMElPZklHa2M4TVpuZm85M0xYSkJFbkIwaXppUkpjbU1WZGVVZHRfY291dnpsQmluOERXWmNKZVV3?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.1,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "Ameriprise Financial Inc. Buys 3,583,751 Shares of Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQV09yTkszSnRNRE5oRU55UC1sb3I5cThwTlBzam5lZU5SNm9SWUM2YlRkRmRZb2NpdGUzOVhfQXI5QlZHZlFCcjlyWUlnZ0kweTJpNXFrQVdWbmwzQ21xM3YzRVNDZkdTWHJwUzRNeDFmUlhLQVJVZmY0NktZZXhHajVrMkFkT0s5RnN6RGhrQ0FGWmZTZTlNZDRvM1pvX0lfRkU5OGVqeEVNUnp0T29pcmJRdW5oNm5pc2JLeEpValE5QXg2ZnVVUV9IZHl3aXgw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "Dnca Finance Invests $4.20 Million in Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOUEVTZWpWc2NMZFhJLTRJYTJRS2haYlNtN2NyT09YeTB6TlBET1huYUxjX0ZuYVdSdEpDUXZMRUR3VnVQaFgtWHh1QkQ3WlVQZHh2UC1MbW4xSjJ1cGFVNWpWcU45UkxDSHdMQk1jRVVka1dvdWFiNWNBLVhqS081UEFiZlUzd25NZFpDQ2VuNDFGd1dqT0xMc09hUUpWVlpXS1ozUV9uYzlzUVZKZVB0LWtaMzE0ZVlEbkVZM25vOTg?oc=5",
          "Category": "General",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-14 09:21:45"
        },
        {
          "Headline": "FORA Capital LLC Buys Shares of 9,218 Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQRmwyRlV3T0ZvQjcycUtVM09vNzYybVI1VXF1ajNwYXdFbDJtc3R5MzE4ZHRjRlpENW1CUDZYOTNWYzNkbFNDaFU5bUN1cDZhUlpGSnIzX3hQQzF4WkxIMDlubEJJVWtlYzdXdDZCRzhqTi1RdEVVUWxpaTR5a3VKTDRMTmRGYW9tOTJSQW5XTWZiZzhrVkNwLTZtR2ZTWVo2cTJralFMandhREZKd3ZpRnUyckk3ZC1jQmw1bGplNmJfUQ?oc=5",
          "Category": "General",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:45"
        },
        {
          "Headline": "Applied Materials (NASDAQ:AMAT) Trading 1.3% Higher After Dividend Announcement - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQZGJ0OFlJWndndlFPSXdXampWZnVHT282MkcwXzlHTXBJQVRPV19nLThwSmMyQWpjcnVPR0tLZVlsbjdhUUtVRGJTYVp0MWVVaGc1SU0yemtsV1NiMEJrZWVkN3pmazBTNUl1b1hlTUdmQV84V2dZRVV3RTRYWkhHOFlZNnVscllXbnluMnBxeExQUGpOeU9Fa2s5UFBtakRIZHBMZllxYzZsVFBtaWdRa2M2Z3JsUXJ5V3NjU3JwWHotRGY1NU5B?oc=5",
          "Category": "General",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:45"
        },
        {
          "Headline": "Applied Materials, Lam Research may be interested in acquiring BE Semiconductor: report (AMAT:NASDAQ) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQU1pUNjM3bzNqMmJGUFU2NTQ3UHJYWHM5SENyT3kxTVBLWGpXdmlBRG1WdHQ0bW1ZOWxHaUVEVGtjalJkWGJwOE5HNzBiV3JMSmhUX3RrM0VGSkJYbXJqYnJ5aERDZnk2R2JmWmhHVVZrMXo4OTVMYkhWLVJRMHhBQlFwRkVwaXl2NlBfUXlSX0gwdGVKQjRoeWZJQzg5Z3Vvc0FaMGJ1b3AzUmJweGVmQ0tEVkpFWVhMMHJMNTJMM3Y?oc=5",
          "Category": "General",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:45"
        },
        {
          "Headline": "Applied Materials, Inc. (NASDAQ:AMAT) Declares Dividend Increase - $0.53 Per Share - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPYkxaZ29fN01xUVFmYW8tWGdpdjVLSDFpV1MzcFhWd1lmaW9rRnJITVVCS1Y5QUwyZFZEVkRVTFN0M1owS2xtLXhZSXlNWnlCZUktNEVaZXcxaWdDNEFxOUxNMXN3YUt0N3paRXl2dzA4al84WG5RZTFybTVoNmgxalpabzJZM2M2TkpPLWlMZzFBMGNOMXR5NjBIQXFqTGxBQmR3Wm83Rm51NXA1SG9MRWxUczlLdEpaNkcxaHZRVU9TZ1l5S1E?oc=5",
          "Category": "General",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:45"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AMCR",
      "Price": 40.6,
      "LSTM_Confidence": 0.68,
      "News_Sentiment": 0.4,
      "News_Impact": 0.6,
      "Headline": "Cannell & Spears LLC Acquires 784,821 Shares of Amcor PLC $AMCR - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQckpIVS12Wm9XNmk0S256UXVTUG01TFJEWmxTdC1NMTlOUThDM2hwWTd3cXAwRWNjTlJuMTR0aEVrTkxvYkpkNU5Gc1BjajZjaTU0bGVxMEx0d0R4MlJPQV9KeU43dkZWSmhFVWc2aVpkLWtwUFZQdUl6UVNYLUo2VW1jQ01aQzM4LXZiYWd2dGpjY2g4cHc1LXN0UmFMTWFqa2xldTFuQ1JTZXFKWmM1NFUyVV9UX1BtVTViNg?oc=5",
      "All_News": [
        {
          "Headline": "Cannell & Spears LLC Acquires 784,821 Shares of Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQckpIVS12Wm9XNmk0S256UXVTUG01TFJEWmxTdC1NMTlOUThDM2hwWTd3cXAwRWNjTlJuMTR0aEVrTkxvYkpkNU5Gc1BjajZjaTU0bGVxMEx0d0R4MlJPQV9KeU43dkZWSmhFVWc2aVpkLWtwUFZQdUl6UVNYLUo2VW1jQ01aQzM4LXZiYWd2dGpjY2g4cHc1LXN0UmFMTWFqa2xldTFuQ1JTZXFKWmM1NFUyVV9UX1BtVTViNg?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:58"
        },
        {
          "Headline": "Amcor PLC $AMCR Shares Sold by CNA Financial Corp - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPcXBEY1BGdkdiMGNEaTlJNXNBX3JHUHBwVHdpTEFiTS1obFVnUXJBRnlWbnJ0ckZkMGd6bkJ5V3MzLVRaWUhIVFR1X3ZQUHNUOUgta1B6ZGljNnY4ell2U1J6Rjl2WlZROUFHUG43VzRVTGpIbnkwUUZsaGZFdy1ZbUdDY2RnLWhNbkVKVDV4ZEZZc3ZXTWViU0tCeUU5ME9icllhV0h5eW9rNVpubWc?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:58"
        },
        {
          "Headline": "EFG Asset Management Americas Corp. Acquires Shares of 33,260 Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOZm1obU9tZ0RqR2d3cERTSnNMSHJqVThlQUJsUzV1U0NnaFlVeHRzN19Zc0JJakUzeFNZOVFVbnFxV00yQ0daek9kMTZGTmhhM2JnNnFLVm95aUNjRXQ5WlJ4VURCQ0g1NDVGNVpBNlN3TTJ4UnpuQmRKTUNyUU93cWxRc1hPZE9xYUdiQ3BaRk0wNXVsMHlBRS1pRUFMemNBN0NHS1U2eEd4NjhVNmlyS3NwSmVJcUFZaEhfaEs5T29QMG5uVFRGTXpTcGFhQUxf?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:58"
        },
        {
          "Headline": "PCJ Investment Counsel Ltd. Has $6.45 Million Stock Position in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQek1yNG5lVkNOSVFacm5GTFdqeThmeEhzOThQbWItanJIdTBVS2paaUpiTFFJaFJpeFdwb1hOUUZmTXhVYmRiczRBaU1RMlhVVVN6RkdTRjNhTGFxckhmLUQzZWEydUYtVHRKNTJEWjNDcm1zREl2T01Sa2ttWlZEaVY3S3R3VEtOOVpGNmdVR0NkNEFTYmNieGlJZzdfeVhPTWtOWVJjaXhzZVdnUXdnZURXcGg5NkZOVjV0dldQWkhFMm45WEtOTlFrVkdjNGI2dWc?oc=5",
          "Category": "Institutional Ownership/Trading Activity",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:05"
        },
        {
          "Headline": "CreativeOne Wealth LLC Buys 32,807 Shares of Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOSklmbzU1bTlfVlIxRTBGblpkU1JjVV9RM1Fqa0dwZ3E5TzU5eE1yaXhNMnR4R1BNWTFBSU82UjlDRkpOSWFpVlBNOGJyQmdaLWFfckhQbDAtaFQxNFRla1ZNeVZWOEpnX1VWOXY4VHhiNXNvc3MzV2dGdFhvRkk4TzMtSERDQlQ1LThCNzV6RnUtNnY2Q0piWVZTMzdCc2ZyVWF1WEZhWURTMnJGai1YanRaTi1FeWU1aGtF?oc=5",
          "Category": "Institutional Ownership/Trading Activity",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-14 09:22:05"
        },
        {
          "Headline": "Diversify Advisory Services LLC Grows Position in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNN1ItVUc3MzkwOVc2VjUtSmtGV01EVEJBWDNESUNjbDQzVTc4QmRnYmlQaGIyU0ZqNmI2RmNfM2FXMWJFV0JGQ3Nyam9lQ1p0QUhvT2I4cUNxdGJUUU9lcVU3RFdlR2JoaDJlM1FXRG1yUF9ORGZka3VRUVR4RnJGQ2VXUVVtR3BOMGd3Z1M0c3llX2doWTNra0JtTGZSVm5SMVRUTDBoNWhfN0YxQXhxTWxuS2E1SDFjTW9TWFAtSThfcGc?oc=5",
          "Category": "Institutional Ownership/Trading Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:05"
        },
        {
          "Headline": "SageView Advisory Group LLC Buys New Shares in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQV0NsUkZHcUt1d1FDdEZnYXZudHpBUERDVGxlSkVSNEt2d1V4X0ItaFF4eVhZWGFmRlg0OHI3R2RvelpYYldwVmNlUFIwRVR4ZlpVTVZyUDk0OGFnQm5yejRzcVNzelBhbXBqQzdfMVZwMURNdmR4eFhha1VVWUZSa204MFFZRkZRSVR5ZVVnaUZESTh1T2RGeGZJX0lFTEhhNjFjclFWb2ltdHlvOTd2ODNyWTBEclYxazJJNURRTQ?oc=5",
          "Category": "Institutional Ownership/Trading Activity",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-14 09:22:05"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AMD",
      "Price": 196.58,
      "LSTM_Confidence": 0.58,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "AMD Shares Climb to 11th Place in Trading Volume After $5.97 Billion Spike, Driven by Strategic Helios AI Collaboration with Celestica - Bitget",
      "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBJekJPWWRZM0pHcXRDbWdBOHZLdVRjU01NWGRIYk1ZOV9TdWpJVmN6VnBmU0JJQS0zX2NKamZMMElNX2l6dm9uWktIWFFNSFFyQy1yNmRnWGlULTg3cHRuX0FsRdIBY0FVX3lxTFBJekJPWWRZM0pHcXRDbWdBOHZLdVRjU01NWGRIYk1ZOV9TdWpJVmN6VnBmU0JJQS0zX2NKamZMMElNX2l6dm9uWktIWFFNSFFyQy1yNmRnWGlULTg3cHRuX0FsRQ?oc=5",
      "All_News": [
        {
          "Headline": "AMD Shares Climb to 11th Place in Trading Volume After $5.97 Billion Spike, Driven by Strategic Helios AI Collaboration with Celestica - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBJekJPWWRZM0pHcXRDbWdBOHZLdVRjU01NWGRIYk1ZOV9TdWpJVmN6VnBmU0JJQS0zX2NKamZMMElNX2l6dm9uWktIWFFNSFFyQy1yNmRnWGlULTg3cHRuX0FsRdIBY0FVX3lxTFBJekJPWWRZM0pHcXRDbWdBOHZLdVRjU01NWGRIYk1ZOV9TdWpJVmN6VnBmU0JJQS0zX2NKamZMMElNX2l6dm9uWktIWFFNSFFyQy1yNmRnWGlULTg3cHRuX0FsRQ?oc=5",
          "Category": "Stock Movement/Market Reaction",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-17 09:43:28"
        },
        {
          "Headline": "AMD Stock Heads for $200 on Regulatory Relief and Samsung Foundry Talks - FXLeaders",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQRkNaQlpvTmNFbnlSSHd5T3BvUHRxeTBQNk9sUmVheE9yZWFRVkN3OWNxRlp5eUt3MVpmd3ZlM2UxT3N3WF9Qb1hQTEFIOFZVVjE2ZnFyYi16VWdkb1c2bGRoRlZNdDFDWlpzR1BDeDB6a29ERDI0RUpISHhwM1FITkYtUURjeTgza3Zzbm9XaHNEdWttWWdIR3NDTzNfckhSOGV3cHRBcjhSUUpjYW1iTnd0RQ?oc=5",
          "Category": "Price Target/Outlook",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-17 09:43:28"
        },
        {
          "Headline": "Advanced Micro Devices (AMD) Ties Up With Adeia in a Multi-Year IP License Agreement - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQWG5BMC1YcTJ0ZFZzOUVzUzJISy1JY3U2X3dGWmxDVVYxNzAtV1kyVjlRU0xrdG1UR1J1MjlnUWRnX3VEQWpBYlVIU3NVcUkwZ0V0aUprc1B3TW9HZjlydlhscG52OUpmVHA0QkxCVzE5NFQ5cTZXUGo3U2ZiNHB3X2dCSQ?oc=5",
          "Category": "Partnership/Agreement",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:28"
        },
        {
          "Headline": "AMD, Celestica team up to bring Helios rack-scale AI platform to market - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOTmpUSnpHMGVXNVRnaWRaU2VRaTBZT0JGazRXY2xYTGVFenRKblZkRXUwdkhrdmxyRWFwUW5BMVljS0J5V196cDZvb1JTR2FDRktpSFN0dms5QkI3bEJ2eGx5LS1Eb2FYdlBGeFJUajY4RXM2djRMdW9UcUJzYVBRWlBjYXVwWXJkdjRBQjFhV1N2Rl9HMzlxaThxeTRQLVVMcVV1MWxnSE9TQ1hM?oc=5",
          "Category": "Partnership/Product Launch",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-17 09:43:28"
        },
        {
          "Headline": "Advanced Micro Devices Inc (AMD) Shares Up 3.3% on Mar 16 - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQY1NOTEx4Wm0tc0lMNzFRSnh0ZDRaMy1iYk1xSVFXTkNhTllibDFsWVJmUVdfbUlkLVBjekJ0Z3VKcUhvbzVzNy1kSHV0Y3BlcWE1RV9FeUNObWpYNlRTNHB5U0JFd0xvNF9qOEFzY0hES2ZEdDNEbHdkNHJEZ2VoaVYzcm5BcjZheGFJazRfWHFTUU5VeDBtcTYyTHV1NzA4Tk84OUZCVQ?oc=5",
          "Category": "Stock Movement",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:28"
        },
        {
          "Headline": "US Export Reversal Clears Path For AMD AI Data Center Growth - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOckh2T09DVlZ5dUY2UlpmZlN0M2Q5YW1fdjNKQTFyTjlDeUpoQ1dnbzhGUl8tMUJKVUxmTEw1dklsZmhmd0R3cEF4Q2todXJGck9oWDA0UU9PSWsyT19xRU9XUVdfWE1Fd2JNeEh0YVhHQWdiS0d4RVF3d00xemQ5aEJR?oc=5",
          "Category": "Regulatory / Company Growth",
          "Sentiment": 0.7,
          "Impact": 0.8,
          "Date": "2026-03-16 09:53:06"
        },
        {
          "Headline": "AMD Export Reprieve Reopens Global AI Growth And Partnership Options - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPaS1RV0s3Q2VfeUlLOXNYd1hYLVk2M2kyTFZ2OUxZZVN5TzNsN2toNEtVbFFrT3BXdGVDeWx2cVpwc2VQVm5zQVNYNzJreS1sWEV2Y20tcHlTUHBJNEJXa3BwcU5MLWowWTZKLVpJV0RTNEY1VWx4UVp5NE9ZU3ROYTNBZGhvb1ZjckxfblN6ajZLUE1KX1pEa2pNcHYyVUdES1hfX3dDZE9jY0RQV2Ytd0F3ZmRFa1V6ckxDMW5jSWw1TDAxVFJldVdLdExUV0FFYm5YRzU0RW15LXNudUhB0gHkAUFVX3lxTE9MY1BOMTNZeHNHWk9RR2ZVVHJYMG12ZFpCb3V5UWU0Qkl0RFJTTlhWT0FvaGVPWGxpR0loTlRjRlJTMXpMX3NvaEszc21RV1ltWHBKZk1xdkRLZHBxOTNPc2JuS3RlRXJUNm1sdFNPUGVZU0VsOGxhaWNpR2Q1SGVkNjg4MGdTd2t4WV9mVFRjY2ZoeTVJTkZHVGRyWVc3M1dlWkMxTEx5WXdXc0plbmtwTEhocTVlMVpJZU1zT2pub1BDYnVRd044M2xSREo0d2lMRVJ6eEN5aVA5dkhiYmZSc1hoMg?oc=5",
          "Category": "Regulatory / Growth Prospects",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-16 09:53:06"
        },
        {
          "Headline": "Are Analysts Getting Doubtful on AMD Stock? Goldman and D.A. Davidson Forecast a Slower Path - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPUmRaSXhmY2RLc05uUFdHTlJld0ZrZHFJMXdvWnhoSy1oemdVaDNxdXJERnBUR1g0ek1pLTh5TmV1bFNoaWVxamx2TlJlTWsyMWVZbVpKTXhlQzZWM3dNV3g4S0poTElnYU1JUkRRRWFtQ2c3eGJxeWNiNVgwUGI0WnFqakxPalZJcW5VN3A1THlBOEw1N19DUThqVWo4VjdWV2JkSUcwLUdCNzdGbTlhS3gxN3JkNEhzVzFxdg?oc=5",
          "Category": "Analyst Rating / Forecast",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-16 09:53:06"
        },
        {
          "Headline": "Is AMD a Buy After Meta Deal? - AOL.com",
          "URL": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5GaFo1Wm4wS0FxaGItSkEwcG1NMDc5NnpwNU9YRkVwdUpCUXdJQWxlZVphM0p2MmF5eWFldGJnQVEyMFlZaThnVzRnaTRCMFlvYS1WRHlfdzkxYmN5YldoaXRmSWlJdTJ3RVB0U1Bn?oc=5",
          "Category": "Partnership / Analyst Question",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-16 09:53:06"
        },
        {
          "Headline": "AMD stock soars after company says its data center revenue will jump 60% over the next 3 to 5 years - AOL.com",
          "URL": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5IOGlKdTgtZjRMLTZJWmMyakN3U29jOHBFRmZWS3hKdTZCVWhGTU5WRVloVlJBSnRVRndBeXJJcGtQWk14X003dnoxZDJFV0Z3NUJVWG5fYUlncGlOTjEyRmdMdWlRQnhCYUVuS0tMZXVyYmtEeVlkWVJQOA?oc=5",
          "Category": "Financial Forecast / Company Outlook",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-16 09:53:06"
        },
        {
          "Headline": "Adeia signs multi-year semiconductor IP licensing deal with AMD; shares rise - MSN",
          "URL": "https://news.google.com/rss/articles/CBMiggNBVV95cUxQTzdWSkVXUUFuRXMtV1dYWWtabjE4TDJUbUw0ZzBkRm5maDRjREhxS0M1RHVmVWZxRy1LaHl2UEtCbVJVaURweU1WalhObnh3bUpWRXNOMWtCMkVrV29reEI4TXBhQkFUOGFxSlJBdEpCX3R4aGN3aGtUejFKSnpMY0c1MTlwaHdZSnNtcjR6Vk1CM3BQeWFULW15cjFfTVZfb0tLS21sOEtuMjJSNGVfWnJCOS11Q0tJYXEtOUl6TWFiSHFLZkMwRnVtZWVoOWpOWWhCZE94bmdDdV9IN0trS0FjdlBka2dWZ1BZcUF5aGw0Z05ZRFNINDRnZXZjYXpzTk8wZlJDZ3hMNDN6RzFxNEpPRzNabEJ1WEh0Rmxha2xTVkIzdDFtQnBycEVrQ2pFZVQ3bEk4cGJfVm1NaGVGbHFJVkhZdW1CNWduTlBIVXJwT3RVaXVfcGRxMHNPUUFTZjVQdzRyM2JweHE2YzZJQy1GX0pBcnFxSWh4MUk3VHpTZw?oc=5",
          "Category": "Business Deal/Licensing",
          "Sentiment": 0.8,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:07"
        },
        {
          "Headline": "AMD Gains Ground in Data Center Market - Intellectia AI",
          "URL": "https://news.google.com/rss/articles/CBMifEFVX3lxTE9Wd1ZKcDhxMlBwc0lwMkRiNDlpYnVDSzBHcDRheWZER09FeTB3Q2NjOWNqOHlKdWFtVUpaRTBTdFFyek9PNjJtc05vdmRHaHk2czhXVnBmaDZLenlCUjVHX3VrcmFGVmdvNWEwVnVZNXA4TUFsR2dCRm5raUE?oc=5",
          "Category": "Market Share/Product Performance",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-15 09:23:07"
        },
        {
          "Headline": "Atreides Management LP Trims Stake in Advanced Micro Devices, Inc. $AMD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPTURqUzV6OHA3bXN3WTNvZ3lDVXJrZEQ2NnZtMEJjTDB2d1BDZDhYZ21yX3kwcGJjTXRoRkxmRHYtTndYSTBMVDNJTmFkNXRRUGJDejhWcWhCaTBwbHlKOFpKVF9nMHR4SWlXWi1obW1ickhPMlBtcGROd3JDRy1ZWGdCZWYtd1gyQ1FOU1laeHVNd2lvX0dXZEVFQjB5Q3ZrSEJYQ2FoaTdkUFNxeGw4YnRYQmdLdG0zMzhRLUVhdkIxeWJ0eG9SVw?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:07"
        },
        {
          "Headline": "NorthRock Partners LLC Boosts Stock Position in Advanced Micro Devices, Inc. $AMD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQQXBIVWFKQlpLQVVXblVfMkdjRW9JMzFGaW4tRi01Y2VKLXc1UnVKNWVmLTNoOERpODFVdVc4WFdVakZqT09aakRPZG4zOXdTYUZoWVlFdmVWbzlGUWVtWk5ycU14eXlsUGhtZEo4RGRJRG0yRkxISVJSTlZqQzJseEg5V3doQjhDdzgyb0ZLcnltMmVBSHdDMUV5aW85ZnlKeEItZjVCSlFYMDBrNFJzSjBrYW9ib05pVWFWS1o3Y3RJTVY0SDJ4VjZTRWJ2LTJfYzFJblhB?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:07"
        },
        {
          "Headline": "Aquatic Capital Management LLC Purchases New Shares in Advanced Micro Devices, Inc. $AMD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxQeFFXUmM1SldwNmhjd25DQW5oQ0lvQ1czdksyTExyNEpINWhmYnhnNHJIMzhXY21RMV9Kbkc4UXBOMmo2WEIzSzBGQkNnVE5MclNSRVVyQi1BQ01RWW5zQTRiYmxZdXdWTThZY0xYbEVKX0FlSHdnckw0am8xNGJ4X1ZyMXlIeDhaYy0wS210QUZ6NkFtc08tZTYyblFrZHAxR3RsY1B6YTFzUThXbzFBR01mazJpcWpxNHc2TFB6aHZTRm9TXzU3QjdvVHBSLWtLNnUxT3puam9Na0xXdzlB?oc=5",
          "Category": "Fund Activity/Institutional Investment",
          "Sentiment": 0.4,
          "Impact": 0.3,
          "Date": "2026-03-15 09:23:07"
        },
        {
          "Headline": "Advanced Micro Devices, Inc. (AMD) Focused on Growth through Strategic Partnerships - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOWVNIQXdtVjNnY3JBcUVweDliQUxYdDdXT2poWFhDUVhkQ1ZvRm55TTJzZzVLV0lEQVpneVNvZXNwSzVEUFV0RDg5NmItZk50WG4yYnpYcDNBWFVmUGlrTURseHRMSWNXdUtGWHVPQktUQ0lwX244THRZblFnbGdXZldB?oc=5",
          "Category": "Company News",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:49"
        },
        {
          "Headline": "-0.98% for AMD stock \u2014 Downward momentum signals limited recovery prospects - Traders Union",
          "URL": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNUWJNVWg5aWkxaUJBaGtJVGN3NG5mcFV5Q2pIZEoxcm5MRUtfc05rT0dZT3pnYmtKMlBWNjZmQzRVdU1QMFZxYV9YZnNEOHhWdlFDYVJWakVBQVhaWXNxa25qWVhIbDJJU211YVFCbUhLbk9Eei1TU1dHQnkzQ0dzcEZVWHFXdUdaRURFeHBBdEpQb0FxWFFKdkFR?oc=5",
          "Category": "Financial",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:49"
        },
        {
          "Headline": "AMD to backstop $300M Crusoe loan with its own chips: report - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi2AJBVV95cUxNTGhheFZ6NFhKeEtqSGNwbGVEUkdoNmlSanE1NWRQTktHOVBEdE1ndllEakhKVXVmVGtEd0d5UDlGOF9DVWVJNU00eDAtYXNqWGZxLTBBVWwwNlhWWFFoT00yQ0NLb1FfOWhnd1JRaG9jZjMyemMyTWNoOWFwVUQ1UU1LdGlRTVIzUVc2bUM5NkM2al9TWU95TllXU3E4b09YTmprT0hPREVLSWFhLUdrZWpfbk1BSG1GR0g3aDdkTS1BYkUtNDcwOTlJcEdEYjdVWjZJQzdOcWFma3c3QkIyZEV0eDAyekZweTg4THhuWDFiZ2ZLX2MtZlJiUFlUdEhWZDIyMHZwdG1vaEZqZWluVFptUWpKcnEyUzRhaW1ILTdyNTJXQlUyREJ6WGJFS0xfVkxqbHdHUVhtcmF0RUhtOURibmFGbkpPOF90dmpDd1hKQVRieGVOQg?oc=5",
          "Category": "Partnership",
          "Sentiment": -0.3,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:49"
        },
        {
          "Headline": "AMD Shares Drop 2.2% on Strong Earnings, 13th-Most-Traded Stock of the Day - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0wX3dIR3dzSW9LNzN2NUVOWDR4U3pZQUZQdnlqQzBZcUQzVDlRVnlZbFRMeWhUS3BPc2UtR3F5SVBDZXd4dkhpWEJmQW42Q3JmLW5pMm50RzZLRy1aSW11YlFmNNIBY0FVX3lxTE0wX3dIR3dzSW9LNzN2NUVOWDR4U3pZQUZQdnlqQzBZcUQzVDlRVnlZbFRMeWhUS3BPc2UtR3F5SVBDZXd4dkhpWEJmQW42Q3JmLW5pMm50RzZLRy1aSW11YlFmNA?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-14 09:21:49"
        },
        {
          "Headline": "What Advanced Micro Devices (AMD)'s New Role in Open Optical AI Standards Means For Shareholders - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQSUx0NkRrT210cTRwLUVXV3Q4bXlfcmNYZi00VE40VXM5aDY0VkF6WXZtZUNGMC00LWZUMUllNE5OT3F6TWpUS1JGNXBIQmQtY2h1UGVBNEozM1J3U3NsVlQ0SFBwQTREZzRhTFhabGsxY0lqdDRuaEdVVzBlaUFUZVFRX2tSQnRzNk5NUlNxRE82T0lFRzdSM2JvSUhkMXZqdzhTZXZvUEY5XzRvbnRXMXVSYzk4NTg1U1ZEMjVTNDFyZU5KWkllTFF0UnRmZjIyVjY1cW9pYm5tbWZQaTJ1NmVOdnPSAeQBQVVfeXFMUElMdDZEa09tdHE0cC1FV1d0OG15X3JjWGYtNFRONFVzOWg2NFZBell2bWVDRjAtNC1mVDFJZTROTk9xek1qVEtSRjVwSEJkLWNodVBlQTRKMzNSd1NzbFZUNEhQcEE0RGc0YUxYWmxrMWNJanQ0bmhHVVcwZWlBVGVRUV9rUkJ0czZOTVJTcURPNk9JRUc3UjNib0lIZDF2anc4U2V2b1BGOV80b250VzF1UmM5ODU4NVNWRDI1UzQxcmVOSlpJZUxRdFJ0ZmYyMlY2NXFvaWJubW1mUGkydTZlTnZz?oc=5",
          "Category": "Financial",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:49"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AME",
      "Price": 214.51,
      "LSTM_Confidence": 0.72,
      "News_Sentiment": 0.7,
      "News_Impact": 0.7,
      "Headline": "AMETEK (NYSE:AME) Price Target Raised to $235.00 - Defense World",
      "URL": "https://news.google.com/rss/articles/CBMikwFBVV95cUxONTk5Q1pNMl8xM19nekl4SjE1SzVCZ1RSRDFGckF3LVZsOUwyS0FRQ1Z6ZDE0YUJqbTlTR1JreHVMemNNUDRrZ1A0cHpwaE1iMHVsVDFXNjUxcmV4N0IwdmlFQjlpemxOSkltOXU3NnFBclEyZjh6cnRJQjVrOWJfTzRQNGl0WG5ZcmFMa2xuNVI4d3M?oc=5",
      "All_News": [
        {
          "Headline": "Aquatic Capital Management LLC Sells 52,126 Shares of AMETEK, Inc. $AME - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPMGszbW5RNThkUHdORW1vemlIWndOeFZ4c1hHMHNteWpPZ3poVWxTNWM0TExpWHQ2QV85b3RLX1F3OHRTQmI5dWpOWXhXbVhPUFJaR1k5bnRzb05GT2RPNzJSc2k3UTBQX2dha3NwN3pMMzhfMHpncHdHZFNVaWl2MGxxSE5lV0labU1XMmt2dTAycDNnS3ZCMzh2aEV3Y21zQVg5SmpHRUNYT21QOFFlajB3?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:21"
        },
        {
          "Headline": "Bank of Nova Scotia Buys 31,443 Shares of AMETEK, Inc. $AME - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPNUhnUFZFQ1Y3aVU3TTE4dFdLNmNycTNfMzNkd2swWmQ3R01qRzBiSm9lQW52QmI1elFrNTAxcHlyOUp3RUhXY0paYzJ2ejYzLXJiMnlVMkRLWElmVWc1Smh5VW5UOVQ0TENfZzIwQ2RrbHQyYVp5ZWZCYS14WUh5Mm1wbmVHQW5xcDFxSDBJZ09LbHBsTkgtTnhJUzQ4SzlQT1E?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:21"
        },
        {
          "Headline": "Jain Global LLC Makes New $16.98 Million Investment in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQSUNyTzdIWGhpQnBHbS15RXEtdkZYTVR6T09hZ1ZuaHZETGs0TlMzNTVWWjRyMnlyNm9zVG83ajUzR3dtX3FZUTlfa25yMm9tNFo4RlFfcjJYWE1FS2h6VXloR1VValdkc1J4eE5BTEhMaS1oMUplMDBnTmRPRHp6RC0wZ25VN1J5UjI0bFhJdnc4QXhBNEp0aVRtLS1IVlprTkxEUmE0WlBldXhVOUtFWEpOcjBRUkF0Y3B6VVpYUnJjT1FpX0J3?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:21"
        },
        {
          "Headline": "Distillate Capital Partners LLC Invests $15.76 Million in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxONXpfbDd5VE9BVFEzTkd6d1VidWtHcFgycmV6SVZpeUg3bWIzZWZOYzJZdkxhNVNaSWFVc2R2T2h1bGdtWktzbUZGWHd1ejRMWVlIRmhidV94MkZkUDlJY0w1MWJkOTVNZUowQTJyYUpIZVdpU05HM1dYMEdlX1BCTVNjVTRocDBqd0p6TzZieTZxT1NDak8talNxbjRkYkVNdUl3aUNDNGRaX0RveGZoTm5TTEVnSm95T3lxY1lneWxNcEtKVmFUQ0ZfWQ?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-16 09:52:55"
        },
        {
          "Headline": "EdgePoint Investment Group Inc. Buys 4,844 Shares of AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQZEZTLTcyWlBPWmZwWU1qZG80MFotNzZaXzJNT2E4b0ppa0dRNXBlVjVka2VJMDkzVFYtdWIyRjdwdnd4NTlGUGJycGpuMnlUYzBXS1lHLXY3dE4ySjhYY1hTOXA1OWc5UW9pbFFqN1ZRRDdqN2JhMkUydk9tUkNyYzNHMTZUQUxUSm1IS3B3ajc4Wmc2Tl8tZV94NEcyYmFJX2JYQUNqeFdXU1BSSW1rem9zLVpXYkZMSHB0c3RfZjNmc0s5?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-16 09:52:55"
        },
        {
          "Headline": "AMETEK (NYSE:AME) Price Target Raised to $235.00 - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMikwFBVV95cUxONTk5Q1pNMl8xM19nekl4SjE1SzVCZ1RSRDFGckF3LVZsOUwyS0FRQ1Z6ZDE0YUJqbTlTR1JreHVMemNNUDRrZ1A0cHpwaE1iMHVsVDFXNjUxcmV4N0IwdmlFQjlpemxOSkltOXU3NnFBclEyZjh6cnRJQjVrOWJfTzRQNGl0WG5ZcmFMa2xuNVI4d3M?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-15 09:22:49"
        },
        {
          "Headline": "Aristotle Atlantic Partners LLC Cuts Stake in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPZnFZU2dDS1lxR1ltMVRNSFNIV3JiZEZXQ2lJNVdrYmVBZ2V2ZGlxVENObHhrTzgxdEVvTG94RmJSWWE4VFZJZ1A3RkFoQURDQnVqM08tZ3ZBSHRNME5VRjFobktvaVVULTY0ME1OMXpyaWFGaEVVOWxqVl9icEZFMW1xTXRIdVJHVENWZm41X2J2LWFNMGVQYW4wajhhQm8tWThFZVc2TE96aGZyWkNyLTJ0MkY0YVJpdkhCZzdn?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.5,
          "Date": "2026-03-15 09:22:49"
        },
        {
          "Headline": "Interval Partners LP Makes New $50 Million Investment in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPQ0xob1RZWTQwZXdkSS1vZnZuRGljSWpTZ2tDNklYb1l1bi02Yk5sWUNMcXl4OWJUMU82dlRzeWJQNGl2VVhJTENNbU9TZ3dId254Yld4eHAxbjFDc29iQTlrbExJWXpLUzlwTWVBOUU0MTNFSWtTUVhCRlFJVHZwa3RZbEJMVXFZWF9RVThLWWE2dFJ0V1lyQmlneWtLN3BHUFZ5OURXRWFrbEJuVXdYMm5IeXNkR05SUGNyYmJZQXVmTWdPZEtCWVVXMA?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:57"
        },
        {
          "Headline": "Morgan Stanley Maintains AMETEK(AME.US) With Hold Rating, Maintains Target Price $235 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPeEM4ZUVCNHNocUc5ZmQtbE1Iei11MlZPOU4tNGtQVmFKRXhsNElrWTJkUGYyUlpVSlpVN3dURWZrcU1NQ1IxNFZFcHdtclg5ckdkNDlwQUwwR0lDTnZUSE8yX21hTkhuV2lpT09HU2lUOXljYWlXNS0zNzdUTG00YWVfU0NDeWtubnliMV95T0QtR1BDbmp0Ql9WMFh1ZkNPV1RsNUE5T3pyX01WVFBLaUFn?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-14 09:21:57"
        },
        {
          "Headline": "AMETEK, Inc. $AME Shares Bought by Russell Investments Group Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQbm9pdnFrMExteWF5MzE1cWpzSkFNSG10RVEwcG1yd3FaUlkyb09Dc1pkNTNjRXU5NzY2U0NkSTRxWm9KQUFFS0hHSDZxXzVKeWRFTmNzemJLOV9MNHpDem9nZ2dxRDFmQUJTODVvdWFGWThmeUdwR2V2Nnp3bGhMTFBNSXotRlN5b3BEZlB3MTFyU2dYdUNJNnc0OVhtVTdGdms5OGliT2E5ZVdRSGVjeVl6T3NUV1ZfLXBPLVd1dw?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:57"
        },
        {
          "Headline": "Glenmede Investment Management LP Has $71.10 Million Stock Position in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxOalVWQkl6T1VuTWk4Z29CTVhXX2tRMWhTdW9wRmtDYVVaa1JNamxTbE0xSnRZX1g3M0Q4TFI5YkpoM1BzMXI0TGhWSS1DMGdMWTkyWTlOX29weUU3Q1R6TmMyd09TSEtlX0Nna05qRWcxZVhnMW1CYk8xbXdZNV80enJlR1FXdVY4eVdCdFBISUNna2FXcld0bmgxaHVQOWY2ckJrQjc5YlBNdUxyM3NubWNjMXBhZTdYNlUwZ1U0QWZnQkJ3M0t5ZlpDdUdqQVhtM2d4SmxpRy04cEFz?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:57"
        }
      ],
      "Signal": "BULLISH_BREAKOUT"
    },
    {
      "Ticker": "AMT",
      "Price": 184.71,
      "LSTM_Confidence": 0.58,
      "News_Sentiment": 0.6,
      "News_Impact": 0.7,
      "Headline": "Assessing American Tower (AMT) Valuation After Dividend Increase And CoreSite Expansion Progress - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPazFtR2x5ZFZQUG1fUjFNMFdXU00ta0ZiWFYtS2NmbW9DM2VCTEc5SHEtWjZWR2sxeTNqQ2pYQnhIaC1JcVhoclpja2VoZzdWVXpUTHFjdHRVNUJ4cnlIWGFaeVdnNXZFc2xhaGEtblJKOHJPemY3MXdiTXlxSzJITG4xNE5UTWl5aUNOZjlhSHo0S1hBM2NCRWlzcHFydVR4RndsT2ZiYXk4eEFRRjVicXF5V3ZnQTIzTVpXVGExOTBuMkxMcmIzZTZmS3FlZ9IB0wFBVV95cUxORlZsSzhPTy0xa0tTMWoyZ1dTZVBrbkZJOGR1aXNpZUYtSDA1OFA5TWhCMVA2OWQwY1V0eXBQQkoyNllxVzFrWmlQbk51UEZLYW55Y1c5V1NGZlU3Zlp2T0Nia1kyb09Tc2czQ2E2bTVYTXNJWGM4a2V1alJhS1ZFM0pfbGp4M1RxVDhxUVpxMzBUU1RTbnhNOWQ4WmJFbFptQjZuQUV1WG1nRXhQaGZRaVdEMTJXdjByN3dlc3psODBrdW9mVS04NVZiS0s1X05fd1Qw?oc=5",
      "All_News": [
        {
          "Headline": "(AMT) as a Liquidity Pulse for Institutional Tactics - Stock Traders Daily",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPN0NpRTFjT3FYSG42ZFlCTVdTXzdFRk5aUlVjcFEtMDN4X0FHaDBtRVhzdllnRnBNY2o1aFloT05mZVVWbWxaTWpLQldwTDUzb2d0UVRPbjZkUGJ2eHZGYVRJVUVJZDVPMldHZjdCOWVNeEdaSWxoWkVRUHFJTnNwVVZ5LWxxYXEzMnZUVVQ3SVVqa0pFN0lxS1d5cEp5V0g1ZlFKTjJXaUZuRTc2OXNQR3VlR3lWRUF5RFFmS2MtdkdkamRYMlc4ZWJB?oc=5",
          "Category": "Technical Analysis",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:25"
        },
        {
          "Headline": "The Bear Case: How AMT Behaves During Market Shocks - Trefis",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQbGJna215RHJ6c29wSUpCX3NHS3Bua3VudG5HRHZIRmd5YkpyMGZiV19zTVc0aG5tV19yM21LUXpfcGhtMkw1TFhkOUhHOVM4ZE56NUdOV0ZNVTIzSXZMeXNNNUNjeWhteGFFTm5tXzUwbUp5Sm5yOW1ZaWZOLWJmLWpMVWNqTGcyX3F5NzZ4SUROVS1iZndHUTRKaC1xNEhrb3lsYV9sSjRKUU9NWGlwVWpBQQ?oc=5",
          "Category": "Market Analysis",
          "Sentiment": -0.2,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:25"
        },
        {
          "Headline": "Focus Partners Wealth Boosts Stock Position in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQRU50NXBHc3VoQmNnYm50TDdOQTVHeS1YeE5iSnJkNm44cHNxMXlISDZ6WTlzOVIzVkVZMk0wM3lVTS1SS0pPaEdHRWkwNUVxSkVKVDFlMElxZ0gyUVF4QmsyUVVBWjYyOU5Ib0R3MTlXWGcxblVsZ0V5alBrT1hWMDI1QXk5TUkzVEtCbXNkOHFZbzRzQjlJVVF1eDlDZHhRT3REVVZoaWZ0NzljWXlwNG5acm56XzI1YjN1U01jT3dlenNfMWJvV0k1eUVZVkhJY2piZg?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:25"
        },
        {
          "Headline": "Jain Global LLC Lowers Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPT3g0Qm5WaDBSTVJuVTlCUUEwYVZNTVFUWjU5VzRtTHFQRnc5WUIyNlRON044bXdqeEtoa2JucmFQSmVIcWRuMnJZbEtrRGdVbTgtM09SRldOc0FscFFOajBpZWZ1UGVJd2VwMVZqTTB3VzNsNE9IbXhPR2hueGs2MHZzZi1JOHAzbnpBLTQyMkdZaXZaaUlTUWxtTVFlTmpZckRVdkR4YmkwWlpxTmpDd1VLQ3pUaU5pYlNEOEZDQVZHMHJn?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:25"
        },
        {
          "Headline": "California Public Employees Retirement System Sells 78,266 Shares of American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxNSjA5dkNXbWUxUlVxVC1RQ0wyTlZxcEJZZTI0TWNnOU5tUU1sQzdlTHlOSXRVeTdrR0dnT0lreGVKNHdlc21mWXZEUWJlaVB2SWdINy05VkxiRWIyUE4tNmIzRzZpemttbUVHN3RETGg4S1BoV1ZmazJxeHFiUXVwUDZZVnplZkNqTW1FZnIwWGYzdk01bWE0bUtPbTM3eTB1UF92SVpTSjcyMHpjZWhaNHRveXd0Uzc3MFZLMDdhMTVsLVdmOXFya01vdjNRU0FPdEhfVGlVOWl6T2Z1YUxKWk9ac2U2blJQVTdpWHlsUVA?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:56"
        },
        {
          "Headline": "AMT SEC Filings - American Tower Corp 10-K, 10-Q, 8-K Forms - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBaaVFoWFVWUnVHRGdVcmRaLTJoeFYyR0xRWm9hb19Cak41MVFHRXhtT19MVDBTM2NoZC0wT3dPWGF6VVhxOUdtVHVaNklfTXpzc21WVnBCMmNLSTl3RjJfU1FaRGo?oc=5",
          "Category": "SEC Filing",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-16 09:52:56"
        },
        {
          "Headline": "Assessing American Tower (AMT) Valuation After Dividend Increase And CoreSite Expansion Progress - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPazFtR2x5ZFZQUG1fUjFNMFdXU00ta0ZiWFYtS2NmbW9DM2VCTEc5SHEtWjZWR2sxeTNqQ2pYQnhIaC1JcVhoclpja2VoZzdWVXpUTHFjdHRVNUJ4cnlIWGFaeVdnNXZFc2xhaGEtblJKOHJPemY3MXdiTXlxSzJITG4xNE5UTWl5aUNOZjlhSHo0S1hBM2NCRWlzcHFydVR4RndsT2ZiYXk4eEFRRjVicXF5V3ZnQTIzTVpXVGExOTBuMkxMcmIzZTZmS3FlZ9IB0wFBVV95cUxORlZsSzhPTy0xa0tTMWoyZ1dTZVBrbkZJOGR1aXNpZUYtSDA1OFA5TWhCMVA2OWQwY1V0eXBQQkoyNllxVzFrWmlQbk51UEZLYW55Y1c5V1NGZlU3Zlp2T0Nia1kyb09Tc2czQ2E2bTVYTXNJWGM4a2V1alJhS1ZFM0pfbGp4M1RxVDhxUVpxMzBUU1RTbnhNOWQ4WmJFbFptQjZuQUV1WG1nRXhQaGZRaVdEMTJXdjByN3dlc3psODBrdW9mVS04NVZiS0s1X05fd1Qw?oc=5",
          "Category": "Business Development / Dividend",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-16 09:52:56"
        },
        {
          "Headline": "Is Dividend Hike And CoreSite Focus Altering The Investment Case For American Tower (AMT)? - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPc3VYNmxzZFNmcXpOWW9md0pGMEVqUmNRZ090S1V2LWFyR21sVmZmcW1RU3FYNVowOHh5NlNQd2taSW9kVllXN1NYdmF5V0JtZzFGeF85ejJCUUFBUDFuRFF4Sk5GeXdVbWUwYUxUZUJxSGNuMXhWVk9wckZGSVlXNFdfTG1KX1kzc2RhOUdORTNkenpxMTFqdTV3c1hiQlhOTXBwN3MzdnhEYkl0N0FLRDBmV2VfbkcxLXRQUVpMRkZoNlhiZmhlSkJtamdidUdubGfSAdIBQVVfeXFMT3N1WDZsc2RTZnF6TllvZndKRjBFalJjUWdPdEtVdi1hckdtbFZmZnFtUVNxWDVaMDh4eTZTUHdrWklvZFZZVzdTWHZheVdCbWcxRnhfOXoyQlFBQVAxbkRReEpORnl3VW1lMGFMVGVCcUhjbjF4VlZPcHJGRklZVzRXX0xtSl9ZM3NkYTlHTkUzZHp6cTExanU1d3NYYkJYTk1wcDdzM3Z4RGJJdDdBS0QwZldlX25HMS10UFFaTEZGaDZYYmZoZUpCbWpnYnVHbmxn?oc=5",
          "Category": "Company Strategy/Dividend",
          "Sentiment": 0.4,
          "Impact": 0.3,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "M&T Bank Corp Cuts Position in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPWUs5eEo3V1ZockRCN19SUjhkam14UHhZUm43a0FlNzNxakdBWk5lUXpvbXlaTUdQdnBKTmo3RjFMSlVBZ0hFUnhmVFBNRnJ6bFNmWG9yNjB5ZktwS0d0Zk5qcld2VXRqd0tvcVpYNmEyT3h5YXc2U2JBX0h0cnQ4THdSaWItUUh4WEhHSWcxSWJneWNvU19kZjY1SGxWSGRxVnlqRXF4SV9Dc0dOYzc4V0JDeGJPNG9iaVp4T0Z3?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.3,
          "Impact": 0.2,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "How Low Can AMT Really Go In A Market Crash? - Trefis",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNcU5tMlE5MVMzdG5rbVRpLUxoTlozeVVjMTdCY3RyUWZhMmhzV3JLODFKV19HNVg3Q0xTN3dhb0tBWmdLalJJdWNEeHh5bFpRUnNJdzhPTXRiZUJiSm5wTVI1NldlcXV5cnpDNk52OEhHZzFEckUwTkc4TEpCcndXVjN6SzA5MHo5eHIyamU4dmZtVGpfU2xfSkpLSk1HRkFvS2lEZ050UQ?oc=5",
          "Category": "Market Analysis/Risk Assessment",
          "Sentiment": -0.6,
          "Impact": 0.4,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "Prudential PLC Acquires 14,183 Shares of American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPLVBQMXNSYkl5TENMNm5MQVBkbzVmWkllV080Wi1ReG95OUNUZkV3a2lMdEh3Qmx5UExRcTJmc3lKUmVTY3ZNQXdqOUdRbFdKXzhEeEUtSndNRDY1bk1tb2p1bGFOekwtSGtHWVd1UVg2bkVOYXR3UHZRRjlpZEI3dk1pdnczcFFqMnBQSzNEYmhVeW5pcTNxWGxDS2VWQVJMZlozc1Eyd3E1b2Rjc1NxaDVaal9LeFI0WnJpNTdRUTZ0X2JYR3ZERkh2aw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.1,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "American Tower Corporation $AMT Shares Sold by Ameriprise Financial Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPV1BKTlRjN1p4LXY4cUFrUjcza2I5TkhTVmxOVEF3UUVHOGlYZTg4Z2x1U3hSUzBITE14cERpWGRJUG5nOFhaUkFZNFVrN012VG9qNzhZbVkwMlJDMWt6U2Q2UHMzSFdxZ1N0bUZoLXh1bjlyTWo5a2twbDZ3VHVyUlVvY2kwakpITUxnbjJRY1hfRGJGVWdzWTh6eFZCS1NQVWEyeU9PckpkYURrdVF6RjA5MC1tMUl1ZEtsWmhpRHB6MDRYUUV4ZW5VSQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.3,
          "Impact": 0.2,
          "Date": "2026-03-15 09:23:04"
        },
        {
          "Headline": "Entropy Technologies LP Acquires New Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPYzdubXBHeVJFWV9nUDZBNWpzd3dBRHd5QVBCNFcxRE5JcTI1MmlmQUZ5VXNkdk9iQ2s1TVNZU0tYdU41bnNHbzUzTUtValVSN3hIaXpBMkRZUHRyVHpEQ1cyMm15WHZ2bzlLNHJPdzZteUdGTGF6djk3bDVlUHJkOEVwRjNBTHlpcmxrWkFHZ3pheE8yRFhLS3llZVYzYjl6amx6TGQxXzl2MlY5QmFiTGF2X0RvSjFJdURhb0l3XzZ5YnRLT1o5a0o1Qm5OeWpMblJ1dTJiMA?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:00"
        },
        {
          "Headline": "American Tower Corporation $AMT Shares Bought by Invesco Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNd2kyb0xEeVRkczdTekE1Tk9HakZQN3o5djhZaU5BdnoyUVFYS1o5bGY4eE5uSjJTUVRIYlJBVDhsMVFFOTNiTDVjSzMyemZ5LUJBR01GV2dOcG1OMmdwQVJoRTE2bUdvN3V4VjVBRndibWZ1eXJKa2NqTEZ2dU1PdUM2dVB4TjVvOW1QOVJ2SVc4YXhBLUEyb1VVbWtacGRnQy1fdm10Y2NRMFNoQUE4QkFvcjVtVERZSzF3aA?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:00"
        },
        {
          "Headline": "American Tower Corporation $AMT Shares Purchased by Quadrature Capital Ltd - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOVEpMaDFtTHBURl94SkhGVGdMZVEwc1RTMHBoYUlraUFSbnpHbkg5d1VPeS1zNnQ4MEMwWEpwRTZFeUxXTV9KRkg0Y3Q2TENxZjh2MnNoYXhnajZOY2Zrd01xTFBWRkMzQW40cFB3SHdZUUwyY2VZdW11aTNKaUI2SlJ3dXZ1X2R0dXBsVTRZdlhMX250WDRqSVdlSFM3OWE1VHZLSVBVdk8za29aNU1WcG42NXdpUVZ4VzZaMkN6ZW1qUmFBaHF2NG95ZHVoRGs?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:00"
        },
        {
          "Headline": "Sei Investments Co. Has $154.11 Million Stock Position in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPRTJYWDIyOWxIdmk4czViU3RzakJVcVB6eUFNTVl4cktzRmpBV0FYczdNV1kwYThRbUhOTzFvNWItUzZPbFpXNldsX0kybDR5bk9kcTJtSjVQTnFnNDZKM3BoXzlqX21WTGd4akU2WFllTzVTamhuQWRNTWNzaURlclBDOFlQcnJORm84NXN5YzRsdFBGb0NCeGI1ZlNnclAzSDFzZ3NMQlNSSVRkV290dzVTTDhKLWVhNHQ4NUU1eDFQYjBaWXZCZkxweDJvUUZjdWtBTVc5TTJyS3ZUUlBn?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:00"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AOS",
      "Price": 66.4,
      "LSTM_Confidence": 0.72,
      "News_Sentiment": 0.5,
      "News_Impact": 0.6,
      "Headline": "Schroder Investment Management Group Increases Stock Position in A. O. Smith Corporation $AOS - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxQMXNoMm1ERDNIaWtLZFI4eEM5RXhKZXhmeEYwX1l1ajE0T3FDVFl0cF9fV0dWYWQ2WjJwWUVNNEEwM0w4WU1LdnFuclQ1bFZVN0JoOEpST081bEJrYmRXNmZIQXc0YTlob0FKbFVoblkzVjVDYXE3ZHNfenY4bzd0bE5FaFFoeXpsVDVrT1VfUi12M2UtcDJfb0VWVkFqMFQ3STcwUjNBUTY1bURpR0JZM1ZqSlVSZV9hSnZoLXJ2NHVzTDZXWFBOd0gzdmhvbU9tbE5sR0xwVkJUbHEtb2ZzZXA1RHBMUQ?oc=5",
      "All_News": [
        {
          "Headline": "Stifel Reiterates Buy Rating on AO Smith (AOS) - StreetInsider",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNdlFYeDZsQzVwUW1LWkJYTGRqSjFjYlozNkVINkdYUTVQRGhPMGtXV1dwcnh3SUVfdjBRQUR4TTU5ZDBUZ2tNXzh5eEwtWEk4cV9BeXFUVG1NVHpkaElKeWRsTVNQUHpCSnhObmIxSXFvR2lKbjBCeEgzS1lyODAxeVI2aVJkeXZyQ3pVelVQXy1PeHI1T3ZOQmJKcmotendOM1pkODFYYkg1ZUVjNE56bg?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:09"
        },
        {
          "Headline": "A. O. Smith Corporation $AOS Shares Bought by Earnest Partners LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQZnJNdzZxV0Y3dEhBcnFGSVlGLVNzX2VFd2FlUm9qc1c0OEc3a3dzV1ZYODlyS2lETVpxVUo2TzBoeGVJZ2pualRmbzVGeTZWU0hMZlFDdnFvLWJ4TXJMTkdRZU5pUkF5NmE2dng5UVR0UkhDTkFkY0lYTDVqNFNQX1hFYkdfTnpFeUxSZEJoZjVwcHJJbGpiZFhRbS02d1JjeXp0RXJTOU1aMWJweldVSTVGRWVta2RUTFk0SEU5V3dadw?oc=5",
          "Category": "Institutional Ownership / Investment",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-16 09:53:08"
        },
        {
          "Headline": "iSAM Funds UK Ltd Has $2.44 Million Position in A. O. Smith Corporation $AOS - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOTnNUOHJ1eXIzRzlJSEMxczYwa2l0c1pXYTN5Qm5DbzhUdWp4ZzVFTnB5QjZWTW1NdzRfTHpCNFMwQ2Q0WE1HSm85YXZGOVVQc2paTDNONzRrQzZZaFRNVnZ2Znhrejl1OUszMkRSYjR2c3lycEY1Tms4blItemtIRFdGTDNNcGU2eE5fbTFXN2ZPeS1mMl9oWUQ4bGRKRjZ3MDZEWUw4dzBwSFpLWjl5b3EzMXRvMDZNUm04SlB1eVlLcVJ5ZFFQVFVyTGE?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-15 09:22:52"
        },
        {
          "Headline": "Schroder Investment Management Group Increases Stock Position in A. O. Smith Corporation $AOS - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxQMXNoMm1ERDNIaWtLZFI4eEM5RXhKZXhmeEYwX1l1ajE0T3FDVFl0cF9fV0dWYWQ2WjJwWUVNNEEwM0w4WU1LdnFuclQ1bFZVN0JoOEpST081bEJrYmRXNmZIQXc0YTlob0FKbFVoblkzVjVDYXE3ZHNfenY4bzd0bE5FaFFoeXpsVDVrT1VfUi12M2UtcDJfb0VWVkFqMFQ3STcwUjNBUTY1bURpR0JZM1ZqSlVSZV9hSnZoLXJ2NHVzTDZXWFBOd0gzdmhvbU9tbE5sR0xwVkJUbHEtb2ZzZXA1RHBMUQ?oc=5",
          "Category": "Institutional Holding",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-14 09:22:07"
        }
      ],
      "Signal": "VOLATILITY_WATCH"
    },
    {
      "Ticker": "APA",
      "Price": 34.54,
      "LSTM_Confidence": 0.43,
      "News_Sentiment": -0.2,
      "News_Impact": 0.8,
      "Headline": "BofA Securities Maintains Apache(APA.US) With Sell Rating, Raises Target Price to $27 - \u5bcc\u9014\u725b\u725b",
      "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNem80bnd3cF91SzgzQXQySEh1OXVseGFiMkpsZTBsd2RKYWtLaGpqVUZQZW1DNHZ4dUJ4alZWYzIxOGNyTlppeURpQ2JPZFE3a0l5MUxqb2pqSkRFbFU4QmdmTHFQelFsS3owc3dnR0hRekd1RWxzb1NMZG5wa0t5V3IwY2dfaWRoWEhyTFFLU214R2RtMHg1WVRFR3JLWDhobDExNHJsVDMyQlRXSkxB?oc=5",
      "All_News": [
        {
          "Headline": "BofA Securities Maintains Apache(APA.US) With Sell Rating, Raises Target Price to $27 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNem80bnd3cF91SzgzQXQySEh1OXVseGFiMkpsZTBsd2RKYWtLaGpqVUZQZW1DNHZ4dUJ4alZWYzIxOGNyTlppeURpQ2JPZFE3a0l5MUxqb2pqSkRFbFU4QmdmTHFQelFsS3owc3dnR0hRekd1RWxzb1NMZG5wa0t5V3IwY2dfaWRoWEhyTFFLU214R2RtMHg1WVRFR3JLWDhobDExNHJsVDMyQlRXSkxB?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.2,
          "Impact": 0.8,
          "Date": "2026-03-17 09:43:27"
        },
        {
          "Headline": "APA Corp. price target raised to $27 from $23 at BofA - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOdGFRSE1kQU9HRGI3OGkzZ19tQXJSVFhBLWwxQTZqNlNMYUdFRDhWVnBiLVNoS0FpQkJUc1JKQVp4bGM0VWppWlB3VWZkTXhwZTV4SnJVZUNvSVhTUmVuNWtPNUxnYXVUcTloTkdQMmdHSmplWGJYdFhhQTBqdWI2N040T1JkeTRGaHIwaExQV3lWNU9lM3lrejZHeXRweV9nNFE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.8,
          "Date": "2026-03-17 09:43:27"
        },
        {
          "Headline": "Barclays Raises Price Target for APA Despite Underweight Rating - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNa2htZ0p1MWNvZkFrWUp2TDZBOTBFeUhtZXQ4VWR3LVBnaTZjSmxwQTdPc19hZ2t6YW40c3BhRXplUTdJWV9ENnN6cEVOd2JJWjZFemxodndkSzJld3ozWWMxcDAtZ3p4Z1dISzQ2MkxxT1YyNVVCRGJlUVVoQlFkdFhhOG94cVZiQmNkeGlTRkxoNkFERTNLVXJuOExKMUNOTDVCa05hSGtXV25vTjFZRHVVd3ExRUFa?oc=5",
          "Category": "Analyst Report",
          "Sentiment": 0.3,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:27"
        },
        {
          "Headline": "Assessing APA (APA) Valuation After Analyst Upgrades And Early Cost-Cutting Progress - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPdF80VUFMcl9YMGJvUENSNzRaU05Wck14UTJPMmhlRTJEb1lZR1JvNzhoamxITnIwWjQ5QWpwS3NGXzlqWEZ6T3MzREZlN0lLRDlYRVlYalNZY0FPWkdRVDkzeGZtTkFWSGNZaEFUTG9yNjZfd2R0MEFGM0ZYNU5mR0psN0ZQaHk1ampzYTc2Z2lBdXFnNzZvcWszTlhHcVBfTmpqNUc5dFdidWhhdy1zbHZlNEswODVORGJF0gHAAUFVX3lxTFA5MUJYUVA2bzFvdHZYektUdjJ5NC1NeGhxaHJjR0RtS21pQjhhYlRiQkhEX003T3ZPOVBVMjVWMUdXVmlZSDB6OUEtVmNSVDJDUDMwQk5lQ1I1d2dobEtGaVlPX0FvQWdOS1lUT2syVzJRUUNyVWJxZmI5bEJCVzZwZ0E1QVR2ejZORkQyLTZNVmhkN09PR0RJdnNyLUY1U285Rlc4QXh3MTR3WlZrU0ZiOGN5blQwaG5YV1NsbFdWVw?oc=5",
          "Category": "Analyst Report",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-17 09:43:27"
        },
        {
          "Headline": "Gotham Asset Management LLC Acquires 522,673 Shares of APA Corporation $APA - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQTlNFTHZmN0FuMFRzNThYWHl2b3N2b2gtWDllZDBJRnBVZmlKQjJVQVFES2N3b0FNX2pRZXpMZXMyR1RBaU54czZyQ1NLZ0ZaTUNwS0FMN0JNTUVIcUFyVFBlZ0RqRG1weFJfWWhOajlhYU91WVhUV2t1ak5uaW9ERjVWamJxOFhrZXZyWmkyZVVFTkFLOFROYUJ5RWtCcXhRZEVQZlZ5S0dWNkMxVUFIVmNHZllRM2I4Z040ZVNERjJudmVWemJ6dUc4c1JoT2M?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:27"
        },
        {
          "Headline": "Understanding the Setup: (APA) and Scalable Risk - Stock Traders Daily",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNWnh6QkN3OUszN1FLMDNhZ0p4Y1NmNWdsNkk1aW1LV1owMFRhSVRQX2hIdHNZcmc3ai1SZGpIN3o5REtuaWxxUkxUS19uNEtYU0hJcUNoemdSSWhvYW0wbXBDV2h1MUtSX0hLVHMtZ3dldXZvWjd3UjhPX2licVNSTTlYY0J3UnN2bTJPZVg4SmljajJYREVGNDNlUmFOLW9lWDE1VVo3XzFWSG12bVVkdkU3am1HN3BTbUJxb0wyVHlPZURiNlE?oc=5",
          "Category": "Technical Analysis",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-16 09:52:46"
        },
        {
          "Headline": "APA (NASDAQ:APA) Price Target Raised to $37.00 - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPLUZfc1Vicl9YR2tTaEd3Ymc1MFlGbXo5VlRlSkVqdVV4ZldCU1VPdENZajZXYVFzMjJncGRhMkFZMUVjbjNuMV9QV2JRZ2lJeUd6Y3ZXZ2hQekV1US1FYXpITXB5WEFNZWEtMFRBR0R2emVSMW1kVWVoWE94VWxERUQzV3A4OUNXenFOYmhpWTI?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-15 09:22:47"
        },
        {
          "Headline": "Barclays Forecasts Strong Price Appreciation for APA (NASDAQ:APA) Stock - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPcUNWSjluTkx6MzhzNG5ZQlJhTFdYa0VjNHV3eEk5NjE5cGkzZ2phZS1TeUZ6eU9QSnpObm4wWGZkQXZCb0dDbGl3VTFIeEc1aFFJeWtUUXZNSkE0U2tPVFpmMUZHaXNoS1NBMGhWNHdJSUNvdVFnaTV6TGNYeU9KRzRoQl9rZEl4RzRFMDdzdHpmeUs1QmYyd1dGNzI4bEktMWZndTIyRFQzYl9HVS1LbEpHMA?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-15 09:22:47"
        },
        {
          "Headline": "Zacks Research Has Negative Estimate for APA Q1 Earnings - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPelpIQWd3Q0VjQjBrZzNRWU96X0dXVXROZktKZWZYMWdyUlBRUTFzOEZXY0pPS0xFVzlSeVl0cl94LW1OdUVVTmkwR3Fld2EySC1qYU9aSnUtMkRiZkxRWmRFbTZOQjhWbEkyNW5VNkhyRHo3WkVNTEgtVEpjS0VGR3ZEVDlLZ3hGa3hrODZFbW85cXVMWmlaTWVSdmFMYkFhQzBxMXhkak9OOVVNT0NF?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-14 09:21:59"
        },
        {
          "Headline": "APA (APA) Rises As Market Takes a Dip: Key Facts - Yahoo Finance Singapore",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQWm1XdjFWaTZYOVp5VFpvcGlZZ05ySkhwVDBJTFduQ2Z0ODc1VzZoR29MNlZMaG0wU3pCangyN0RjdzZIcmpGdjdVWkZqbHdSUjRGSzVGVXlFeWUyODNkdnNJbWc3NFdWdGRXaERCUkhXdDljLTRWS0tDT0FBd0tsNw?oc=5",
          "Category": "Market Movement",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:59"
        },
        {
          "Headline": "Barclays Adjusts APA Price Target to $28 From $24, Maintains Underweight Rating - marketscreener.com",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQdnpKR3Z4WVY3WV9hbm90YlliMUtIbEFCQzRMV3JBSzBiUFZZQThsX3VhTUpBaTVidlpVVlZ3OWtvQTZCN29kS0I0RmNOWmpPc0Fpb0I4RnVueU5GREh5ajU2UFRBTWV6SlZmejcySzR0ZFg0OXRpUXpKUmM5WTRQUTVYcWtoUS05c2E0QlZzYjQwVEcxc0VtRXlUWUxNbzg1WGlyeUhGXzhFWDFTN3JYbVpILTQwMXd6YjFuNmk0cXlGWl9QVEltaw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.2,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:59"
        },
        {
          "Headline": "APA Corp. price target raised to $28 from $24 at Barclays - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxORmdfSTczUTZ0Y2JocEdmTHNWOEJpbnRrNEF6cUd2VUIxTkRkOURzZVhQZXlkT2pPUWlWQnV5N2tkV3lwWjY4YWI1YWo1cXNJWHNRcm5Rcjk4T2FjZ0J1ZG5Ia25zaEhOUHV1eFRPSEJuUVBMM3luTDZKd3lVZ19DcTZ2U0JackwtTGRRbHp5ZmUyNjFaUU5TOHU2cllTWDFJSlNZSHNWTQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-14 09:21:59"
        },
        {
          "Headline": "Barclays Boosts APA (NASDAQ:APA) Price Target to $28.00 - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOREFwcW8xY1RLYXJ2MjhpSlFJOGk0TDJoNmdHYWtHc2lkQ1pWMkEtaWVaUHF5cVpVOWhHRlNlRnZ3Y3ZPWVpjQVJRMU04NEIybDFWY2dvR3lqczdjb2FPQXZFdGU4S2lHX3laQ0JiMVJtRVlBVVU0UzJfVEtpeV93bWJUaldlSnBQWG9ZRFlhNkdYck10TDVVQXdGLTFKZ1QtdjltVTYxZw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:59"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "APD",
      "Price": 289.16,
      "LSTM_Confidence": 0.53,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "A Look At Air Products And Chemicals (APD) Valuation After Wells Fargo\u2019s Overweight Upgrade And Hydrogen Contract Wins - Yahoo Finance",
      "URL": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNUU96a1d2bEZDa3U3NmQzTE92eU4tUlkySExEYWhwejNNd0FZUG9sTXVSTFFFU1E3ZTZYVm5EOGdybk52S0ZZdGJ2VU1ZdEhjaWNYM1lVQUFzMUkzeU5YZWdvLUpRVnh0V2Y2ZnFQR2M4QjREdlkySlhxTWRIRTNMMmowcw?oc=5",
      "All_News": [
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Shares Sold by Fayez Sarofim & Co - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQNmJLREp0bktCemFfclBZYWVFZlBXczBpUVFneVNfNU9IV2F6RWhEZzF3cjQ4dkd5Q2hLS2xTSVhsZTVVY2tKRTVHNy1TQmZjZXk4LV9iX1RNdWstYmJUNV95d3F4aGstbU80UjBkVWx1NUZLbG9SSE9HM3BRb3RzTGJPbGR4X2lLMWJ5X1dTMm8xbWhES085WXFTZVZURlhKTVhXUW1TT0RoSXU5QXZWbk5kVWNIOV85TXZqemNvN3hfaWRTOHc?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:13"
        },
        {
          "Headline": "Delta Global Management LP Invests $1.87 Million in Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPbkdnWVR0ZFlIY0hCcEFKVndESjBNczhnakNRYTNXTlBsdTZ3SEZvVm1IOE1lRWdVSU42QnY1OHhhNjlHSDVneDhIa1pTYy1oaU1tUkJZMjFqREZaS0wwV2c4UW01YVBoSlExTTB0aEduUjJiZExKOU5CaDZhV2JraG9xaHo4UEM3MlpjY2FrMFNjallYTjdvYmxHOVd5bjdBUkJnM0REVlkzWHBtUnRLWUwxSFFWY3M0ZVg4eHJrVEZRTUNEMzRoU2o5Ty1CY2wyN3Q1S3I0d2pmOF9nSWc?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:13"
        },
        {
          "Headline": "California Public Employees Retirement System Boosts Stake in Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNaWpjSlNoekU2Z2ZsRDVvOU5KY1hOWlhNWEIwSDJfaElMYWVIbU5uN2JnM1dGdTdzUm02b1VEbnE2dHNVMW5mN3lNZkUzS1c2LW1WaHV6a0ZYMGJHUzJjYk1CMk1JNFMzZmduaDVZeHAtVjJhcGR2RXc1dTc3TjJHVjdMT0t4OTc5aFVsa0pWX1FaRlFzOUlNMW9UZzRNWnQ3d0hpd2N5MTZOUUFSTEtsc0JCNFh1OUJlTzRKNDZ0dnp1TWtvLTkweXAyb01GTnpNNmo4Q01OMHdCQTA1RWZvMDVhUG8tTmxBU2xvOWln?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:13"
        },
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Shares Sold by Bank of America Corp DE - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPYXk0LWw5TmcwRnZ0Nlh5WjZlZ0s3SXhEenRXRTZyYnlOQ2IzX3VKdnRvRnRUeDczZEt6VVJ0cUxJYVJ5dGhmNTNpX0RYcURIV0hXV1NDeHlqSVBIRWZDZHhMLUJUdXNjY1pkMHllVlF3aUtiSVIxSjNLVjIzaXo0Mk9BeVluWktSdjlzTTl0dVYxMll6LUV2c0toWkRrS3F5OThzUFlDVG9uVGdqTms1aU44WWZVcVlPRzhtb2N2RWtBakVXam9YYUI0RTg5dUE?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:57"
        },
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Shares Sold by Chevy Chase Trust Holdings LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPWEVrb3AtZVpCOFRjZVhIdURrMHM4cUx4djh3RllUbDZrRXpXcmhzYzRONmt6a29XWDVwMWNJM2pYSnN0TzFQNlZ0Qm5vQXRPeDlQMThzNUV3T2UtS0czWTdlT3F5TmZlalpIWFotcm1PWVJGRkptMXEyM2ZWUlRDWGhEOTVNS21pMzFWbGVLc3VQSzFnR1BHcTAtNFFSRzJ5TE9Zb2ZVTGo5YkpQQVgzWEhJUS1GLUJaVlBfR1dhTTNKT2g1akFWclBzbnptb0M1RFdUeUJnV28?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:57"
        },
        {
          "Headline": "Cannell & Spears LLC Has $23.83 Million Holdings in Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOMG9SR1l6TXpBNjZDX2JlbWFtU1hocU15TENTR1BiX2VmZzZ6cENNWUI1ZUpyNGJNbm1TLU44U0ItLUtNZDV1NlpGOEF0MG9wdC1PYWJRdkY3T3JyajdtWG0tM0IwdEFyOHREZVJsYjNQNU5KTC1GcWhoQTNHdFZLN3ZYN1Z4dFUxUTQyRDVvRkRBMlhkVzZSYzlVR3RQRE9yb0J1V1A0VlRLYVdXRjMwclNhbnRvUFFING1JMmw0NlB1U3RZR20wZlREY0dfcmo5dlJ6UVlQajJUZTQ?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-16 09:52:57"
        },
        {
          "Headline": "Aristotle Capital Management LLC Sells 57,674 Shares of Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQR2d5TlRRV0dUMEYxeEU3eUFQLUdIQzA2Y1JGb2habktVVFdMbXFtRmUwVUEyWVdacGhpQXRIbFpVdkdTNlBjWmhRaDMxVFNVSGdCSldVUnAwUlNNZmp6dnk1aVg5QlFiY1A0V1JIaWlqaGVkUDZVRHBpVERWOWJkQ3FwUkh6U1pyRmhYd3ZwdWVKeGNtUDBEUzlmbUs3ZVhfMnliUWg0WGZRSDJrSkVNZzI0QWVCdVdUZTBYeWJYNFVsX3o1dWx0WnI0T05qbV9VYmdWTTZnLWo2Zi15V3JmbWk3Tzg?oc=5",
          "Category": "Fund Activity/Institutional Investment",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-15 09:23:08"
        },
        {
          "Headline": "Assessing Air Products and Chemicals (APD) Valuation After Recent Share Price Momentum - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxONnRpUlR3NXI4ckVkNFN4ZGkzRnViWUd1UEI1V2pGV0R5VmQydzBOS0pSQzNCQzFCSW1GdGwtVWhCSUpYLUJfaGs5MmJUUDdJRGZaRkFEVFVuMnhKR285UGpjck51Vy1taVMxV0FLc3JWNUw5N3VKQjRYZjN6WmFEOU9EVWctS3R6eDU3ckpic1Z5TkZCejhxOGVhQ3NRZXhReTlFSTF4QWRqYzVsR0lwQnZnTG5Ndi1XT0JKTTRTRlVFdk1RdV9IakV2V3NNMXVzeC1UN28xQmZwMUVJZGlWc2E5d9IB4wFBVV95cUxONnRpUlR3NXI4ckVkNFN4ZGkzRnViWUd1UEI1V2pGV0R5VmQydzBOS0pSQzNCQzFCSW1GdGwtVWhCSUpYLUJfaGs5MmJUUDdJRGZaRkFEVFVuMnhKR285UGpjck51Vy1taVMxV0FLc3JWNUw5N3VKQjRYZjN6WmFEOU9EVWctS3R6eDU3ckpic1Z5TkZCejhxOGVhQ3NRZXhReTlFSTF4QWRqYzVsR0lwQnZnTG5Ndi1XT0JKTTRTRlVFdk1RdV9IakV2V3NNMXVzeC1UN28xQmZwMUVJZGlWc2E5dw?oc=5",
          "Category": "Market Analysis/Valuation",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-15 09:23:08"
        },
        {
          "Headline": "44 Wealth Management LLC Sells 6,182 Shares of Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNmQ4XzVNbF9WNE1xdzk0NzBKUjk3VUFBeGlCbWI5dkYzYWZma3dwVVdBUmFfakxvU2FpS2FWZGExVnBOSDdWd1BKWkZHVWc2LUpxMkZuc28wTUY1dDlCUEZMdi05VXBUNXlDc2pJZTRXVWRrS2ltLTByNWtPUkhveHBmX2wyZGdkY1NxLWkxZ1AzODFVNXJWNHlLREhaT2tLQlNhaF9YUmNBM3FOZHpWZXZCeUx5cXBwY1Joa3FULThhZE5YYkE5Rl9BZ01vc1VyRWNsNm80Zzg?oc=5",
          "Category": "Fund Activity/Institutional Investment",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-15 09:23:08"
        },
        {
          "Headline": "A Look At Air Products And Chemicals (APD) Valuation After Wells Fargo\u2019s Overweight Upgrade And Hydrogen Contract Wins - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNUU96a1d2bEZDa3U3NmQzTE92eU4tUlkySExEYWhwejNNd0FZUG9sTXVSTFFFU1E3ZTZYVm5EOGdybk52S0ZZdGJ2VU1ZdEhjaWNYM1lVQUFzMUkzeU5YZWdvLUpRVnh0V2Y2ZnFQR2M4QjREdlkySlhxTWRIRTNMMmowcw?oc=5",
          "Category": "Analyst Rating/Contract Wins",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-15 09:23:08"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "APO",
      "Price": 103.45,
      "LSTM_Confidence": 0.75,
      "News_Sentiment": -0.2,
      "News_Impact": 0.8,
      "Headline": "Apollo Global: AUM Surge, SaaSpocalypse Fears, And The Manufactured Private Credit Crisis (NYSE:APO) - Seeking Alpha",
      "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOOGVHTUItSDZzd2dKVDlzbkRKT3kxZVBmRzdaT0pkNUVVUFBEM1NnalF6dUdtS0txdU1PSkdRYW83MlQySzI5bUNNM3BEU2VVQ19PR2U1X1lTUHFrbWxmcTdzWmR0WkxYdDNpbHUzemlnY3RFejUwYUI3MnZ4dmw5X01SWHEwTWl2T29nSEV5T2R1TnlvRlFSR0Vzc3NrRDh0WjU2dHJYb3d1N2gzVndmTjREWDZPeV96cG1mYW9HMHRWbDR0R2c?oc=5",
      "All_News": [
        {
          "Headline": "Apollo Global Management Inc. $APO Stake Raised by Gotham Asset Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNVnd2RURUTUZhb3NCcDNQbzVPQXA0andJWEZRMTAxSmlaNmhuS3NsUUc4c2dKX1U4bUlXSU5rS2lZYWh2N3N6TklXNndBcEY0UU5JQm5mUEF1cG5PVnRZUmR3SGh1LWFHbkVXT0EzcnNNdHg2UnhVRE5UN1ZXX3pKRWdadExLenh2OGh0R0dMeWJJVlF4SmFlYkhMVXhoLVVjQmVGLThhSmxvZVhnai1uT2JZTmgtNmFoQ19BNGExSWdfN0pUcTI3YmlKbS1RNllvYjVz?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:14"
        },
        {
          "Headline": "Investors Buy High Volume of Apollo Global Management Put Options (NYSE:APO) - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOMjFGbXowcWxjOUZMWW9GX3JVakwzQkZMRm53Sl9PYjlvZ1hYeFd3Z2NidlIyVC1vSUNFbzgtX1BXM0pVMGEwYVpxNXVzbERIdHd3M0Job3hhYlZaS1h6Z0hTc0ZXbUtvQVEwekVSNTVOdGRwSVVXNXJpN1ZZTXQ5R2xZbmdjUndNQjRPdllVWHRkWi1uZll1bnlkWFhvTW5CMWNwckZGY1VHZ2ZQOWRmLUpVOWUwTktYaExxdVUyQXdza3ZqM2c?oc=5",
          "Category": "Options Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:14"
        },
        {
          "Headline": "Apollo Global: AUM Surge, SaaSpocalypse Fears, And The Manufactured Private Credit Crisis (NYSE:APO) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOOGVHTUItSDZzd2dKVDlzbkRKT3kxZVBmRzdaT0pkNUVVUFBEM1NnalF6dUdtS0txdU1PSkdRYW83MlQySzI5bUNNM3BEU2VVQ19PR2U1X1lTUHFrbWxmcTdzWmR0WkxYdDNpbHUzemlnY3RFejUwYUI3MnZ4dmw5X01SWHEwTWl2T29nSEV5T2R1TnlvRlFSR0Vzc3NrRDh0WjU2dHJYb3d1N2gzVndmTjREWDZPeV96cG1mYW9HMHRWbDR0R2c?oc=5",
          "Category": "Financial Analysis",
          "Sentiment": -0.2,
          "Impact": 0.8,
          "Date": "2026-03-17 09:43:14"
        },
        {
          "Headline": "California Public Employees Retirement System Increases Stake in Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPR1huQW5XR05ZSDZ6dWpJZUhYUkxhSVdJYkJndFJ5U2EzbEJGUEpVem4tNC1VQmVjTTBsTTJuTHVtaGRNNk40dG91VFVDNml1UEIwR0w4Qk5SNXcxcGlLc19Zc013ZHRGMGR2OWc1Qzg1N3dKYThRVVdjMWJSdHFCWmxKd1E0SFNhcmJLR0tWNWUtVzRSVVFRSjhRY1hsaFA3NjgtNjdCamRSbUNfNl9ma0xFQmh3dTVKcUF3WkFybVZIZ2hWbVNMYUZpTURGYi1SdGFVNlZuU0RyUWRnT25SUUpqbjlLQnBuZEJ6ZTg2aw?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-17 09:43:14"
        },
        {
          "Headline": "BlueCrest Capital Management Ltd Has $1.53 Million Stake in Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPYXFVNk0xaUJHRTliaVZLOGhtbGI3WHZZX0gzYWZyWDNpeGE3Y1prVlNpZEZ5cjBPMmYtRS1zUTQ5SGQ1aW05Nm52cFZXWWJEV0FUQkk3WmlDa1dqb2dzLXNpNlNiZ1JFTjk3R2YzVUZPUElOVHhRU1paSlZqM3l1OGtNU3E5MmJuQ2lZZnk5SERLZmhCc1ZucmN6NW5vczlWNUtCUl9xZ2hUczFUY2VwdUM3VmJzdnJiSlcwWmZvanRCei1lR2M2T1hjSnAzUnVJSjhublZGVFlfMzRQeWUzNmpvRVZhdw?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "Apollo Global Management Inc. $APO Shares Sold by ArrowMark Colorado Holdings LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQYVM2MUhrczB4VHhKdVB6cUptQklXbVYzNm9WbjNrMVVxc1JCMzNpeVFDeG0yNEx6aDBDQzJ1dnhfWkJxLVdYclZkTEh6cVBrNGk0T0haSGhTQVZyeUJ6ZWNIU19OSkFYcVlXeG9DUURzR3lrMWUyYmJEWEVOanVRYlUxajBEYXhza0l6QjNUbjZEbEhTcG0zWGw5UEM1WldzSUUwbXdvSUE4S2xsbDJXVlhxM2dKbTAyYlZPQXRockFTblF1N19pQVlnbXBwQmVVdjcxZkRlUQ?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-16 09:52:53"
        },
        {
          "Headline": "Aquatic Capital Management LLC Purchases 13,482 Shares of Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPZ1hTbm5YOVdXaXNza3pfeEp1NTA1ejBRTjU3MWJRNVY1eWdxUS0wMkItX2RybU93c0NQMHgyOHdiZlpDU3o1aExNQVVPYWVaeWdRdXBtWWdkYlBubjVrTGhBNGFGb3FUVU9FT2wtZU5PSTZlYzVIZHNJT2g1QjBCOTJvWGx4ZGpOTENCMzE1VEZVQnBhc3JfdEhBRlpLV1BkRm95TGpJZzl3OXRJRlVlRFVvRTFMSW4tR2FrX2F5X1dZZXBURWZXRENYVGR1ZFJzR2xOLVI0UVhCVWJ1VmltUjdFbzY?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-15 09:23:02"
        },
        {
          "Headline": "OCO Capital Partners L.P. Has $56.64 Million Position in Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPS1RZYzJvR0htNUc0X2h5M0dOZ2t0b0lreDRvM0pJX2JLT2ZmNmRvVFo3TkgxUGhSdDg2Vzljc2doTHN3c01Hc1k1eFVWZnVDNC1qNS1EYTBPTmlVREszYk5hNEpHZ2J4UzlmREl4LWliTnVmZXYzd2xBYmRBU1Y0SG1KdEpYTHBVYWVFWC1BOWhHRFpLMnNheGdEX1Q5VnRvU1NTSVVhTkxTbnRDLTQzS3FPNTNibkk4U2NsTXpEeWQxd0I3Y0tBNElXdDM5d3lGUFl0M0NBT2Q3X2xpTm80?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-15 09:23:02"
        },
        {
          "Headline": "76,938 Shares in Apollo Global Management Inc. $APO Bought by Temasek Holdings Private Ltd - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNRzljRXB4enh0aW9RUklJXzVneW1qdElUajJpY09qeFBHT2JkRkhiU1R6OER0dXppWlZPRFlsVmpheTl1OXlrUVI3dXkwSUNOVndDWjVUdFlZOS1pV3NOZWFlQVFpNnhQLW9iWnRvMUQteFNyV1ZKTUZmQUhxTEF3OGdLV0NXSW9OaUs4d0dRQ1g0UTNzdjRlM1RITUFoajlTdjZ0elZHQm1DZzBueGxPMk56MDZuSUJfMFBsZGhMX1NUelEzV3FZbE8ybUhpbGUzMUdfLWhMTXJRdXNxS0JCNzFR?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:02"
        },
        {
          "Headline": "iSAM Funds UK Ltd Increases Position in Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNWFF4UzFyeUVIa3ExV3pYWldQT01LQXd5dDAxa3hXc0hlMGtvNU1XT2FPNzNXRUlfUXprcjZYdHgxVVUwRmY3clhtaHJmSWlUdEFkS0c5SE01aGYtMFhaWWxHc3lUZjFoZ1YzcG1iMS1yS1d1aWtJQTVsM0hSbFg3a2hyQ2tNRm9sTlVYa1BkQ0NIc1BUUTFxdnpuaktzbXNZS3FlWGo3MkVpNEstWGR2by1adHNsenB0NlBUOEttd001ejRkM2toTVZTYzNHUQ?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-15 09:23:02"
        },
        {
          "Headline": "Beck Mack & Oliver LLC Sells 46,310 Shares of Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPczg0em9sUzQyajEtemM4dTZnS2wzdzY3TjIwQ08xWDduVDVZVFluZUJLTmJjOENpNDg5cmRDOEkxVUhhU1hQbkUyaldONG5KSUx6akRIZEFGaHIySHY2UzBxdmtZWjd6cnBtLUR2NnFJcTRTSjNSNzJldmhqd2plWm4zYVA0enp2U1RYVEFvT0hOYzJSbnI4XzROTndfTlNlV2hqYWpYX0hxSWJsdmtCejRrUGY1VWVVeW5EOEZRS0xTODVjWnFNTm5IeVA0Z0QtWFE?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-15 09:23:02"
        },
        {
          "Headline": "Barclays Cuts Apollo Global Management (APO) Price Target to $131 - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPRHpZQUN1aXpvNGRpZ0xSVmJvdTZsMkVyc0pPVFFXUC0wc05EeHVOSVJNT1hURHhGUlpmcEF1UTlfTi1GLTQ2ek80LXJHd2E2WEgyMUVmdmo4N3EzSWhlbG9QNFJRa0xKNXZORTFpbWVWdGZDVS1Ob0NzVlJZLXNHNHRmLUpCTW9JS05VUDJXbmxOcFo0UHVONE4ybjZ0TFFNeThNU0hzRGJZdE40cGRTcXZB0gGyAUFVX3lxTE9EellBQ3Vpem80ZGlnTFJWYm91NmwyRXJzSk9UUVdQLTBzTkR4dU5JUk1PWFREeEZSWmZwQXVROV9OLUYtNDZ6TzQtckd3YTZYSDIxRWZ2ajg3cTNJaGVsb1A0UlFrTEo1dk5FMWltZVZ0ZkNVLU5vQ3NWUlktc0c0dGYtSkJNb0lLTlVQMldubE5wWjRQdU40TjJuNnRMUU15OE1TSHNEYll0TjRwZFNxdkE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:58"
        }
      ],
      "Signal": "VOLATILITY_WATCH"
    },
    {
      "Ticker": "APP",
      "Price": 453.3,
      "LSTM_Confidence": 0.47,
      "News_Sentiment": -0.8,
      "News_Impact": 0.8,
      "Headline": "$APP stock fell 9% this week. Here's what we see in our data. - Quiver Quantitative",
      "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNTzJTT2xKX1RYUkFveDJGdl9zS0o4MU5vU0R3ZFFHa3JrZFY1UUN2QXJDRzRLbjZLZWhBeDlWYzVFdDJZck5TbmRTRjN5MVhvWXFsb3lCV3N4UG93QWNiWnNWRjlHVjVzdlJKM1VaTDZQVDRSVFlCcVRndDFzTmFyTTlXbjk5QnFJTWNscEVOckZnZ0xzX1d5YkZEMTd2UWozdEE?oc=5",
      "All_News": [
        {
          "Headline": "Elevation Point Wealth Partners LLC Sells 10,163 Shares of AppLovin Corporation $APP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOMmt6dG0wUjZVd2ZpNWVIejh5VVpYWHRMSlpLMkhseHdreUFnbjk2bmpPZjFsRUFJSFduTmJSS0dDMkhVSy1QRWxOOFkyajdQZEVwZTRFQnAzQjNUMWVZaUdaaXc2Rk9LbHA5OTd3MWZfdEFnS3FrSXM0cDNDWFFtYnJmcXREMUxHVGZqSFdPT2RUVldWSklhUFhjeTh2RUk0SVYxRGc1alVneEQ5OFBXZHdPem5nNjVmcjhnek1rT2pMNHkzVS11b1lsSUNPQ3U1YUgtdnJYdGhUSEU?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:06"
        },
        {
          "Headline": "Ameriprise Financial Inc. Has $260.12 Million Holdings in AppLovin Corporation $APP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPMUNMczJra2Vpek1oYVNsNUQyNEpuZ2pvN2hSYlFDUWFzNEEyNnBKdlFmMnNEN0U3VV9WVG1PNnJvbmJNc1ZTWjlIQU8xWnlWdEtlZHN5dkdHekJOOTFWVDhhZ01feXZfMkMzTDlna21qc3pWZ0hrbDQzeXQwU3V2S0lsSTB2MTBkeWd2LTBDdmlxbWtodzhaNXFIS1Z2WThlS2VFR0h5UE5kdHd6VlhwbGx2Y0tXM3VPcWlTQWpDV3lzRGliWHpWQUxuSExEajFiNEtqOHJzdw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:06"
        },
        {
          "Headline": "AppLovin Corporation $APP Shares Acquired by Holocene Advisors LP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNbXJ0WGtTSXd2UDB5WnVIWFlDZmRDSlVXbGhEaUpVcXRHd3pTZDU3TDRlMTRNOG9uTUxFdlhpcXg0UUhfOEotb09KeDA4LWRiTGZxeldzNDdGaDByZng3Zm1Vb01kQXFLZHp3TlFBblNmOVdhT2MxWjlsOEVsa0djaWN2NW92VGNReFNjSnQ5R0d0UmYtUGh6dGs5U0tGY2lDRmN2WWxnQVk4Nzl0WktBMUlxZWw1RjZvQV9pOUVPdTJSTWs?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:06"
        },
        {
          "Headline": "Better Value & Growth: APP Leads Shopify Stock - Trefis",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxONGIwRWJtUEpMakNvM2M0M1lRb1J5QndPbHpCMXZScmYtcm43MHJzRU5tWjI3YmI1NXZiNWJsZmZ4R0dwUHMwSlRfOGRheHdvY2k4OEhWTTA2WFJuU1dpTmh5dUVnZE1Xcmx6SVd3Vm1IcGVlekJmQlI5dmpkeWI4UDVFbHVraEk4dkdaTUZIV3VpZ1NndTVSSW0xNUlfQ1JpMURkcDVZVjhEbDg?oc=5",
          "Category": "Analyst Opinion",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:06"
        },
        {
          "Headline": "Is AppLovin Corporation (APP) A Good Stock To Buy Now? - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMimwFBVV95cUxONVBvc3ZTSzlXNTAzbjV6NDVPTEZhVEZZXzVDR2RsZDhCcnhVWlZuSHg3aFJBUk1PNjZEUXZhcF8xaC15bGVKb2N6dVZkZWtDSUE5REhRM2VsYXdhRmFQUTJ4dVlZUEpBVUZybV8zRWJGdUtLcXZ5M2F0QnpOVFFoNHJGeDU1d2VlamdCVlB2RFhGcDBzX1l2TnY0a9IBowFBVV95cUxQV3pLSVhXc1JtZjlEWFN1Z3lCOUkxNzVvR1g3TWNWZjNKUko5RDZqaGg1LWl0dWVpZU03NFZkV0JlZUNFZkNLVndUM0xCbWZ4Y3BwQ0RGZ0NqUWJTcHA3QXdNY1A4azRFN250RHlMOFBjYVV3akY3enJyNXNqeExoT3dKVFhIYUx6bjYtdTQ4eWg1dWFDbm42dE11a29oNVkxMWlj?oc=5",
          "Category": "Market Analysis / Opinion",
          "Sentiment": 0.0,
          "Impact": 0.1,
          "Date": "2026-03-16 09:53:05"
        },
        {
          "Headline": "Is AppLovin Corporation (APP) A Good Stock To Buy Now? - Yahoo Finance Singapore",
          "URL": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPSGJPYU0yOUo5MWMyLXpDai1QZW5fMEQ5SVVjbUR4QzV1TFpHZ0RnZFNJXzI4WXFjU2gzelh2N0R1bFpmUUk5NWk2aXpBZzFjd1A0OG1uMUpFT1B4YVV3TlJZUmZReVo0WE50Vzg4UzBEbFBtYlFjQmxjZDZRNnpyX3dvZkpRcWotaHE4Tw?oc=5",
          "Category": "Market Analysis / Opinion",
          "Sentiment": 0.0,
          "Impact": 0.1,
          "Date": "2026-03-16 09:53:05"
        },
        {
          "Headline": "Delta Global Management LP Sells 21,275 Shares of AppLovin Corporation $APP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNQzNZakZrVGZIdEtHZmxLbTREQlAyUVdTUU5YMThISmxqVkpVVHhvLWUtU09OZjdMX2p5R3JTM042eG9RelJYVktReWUteEVfekFSSzB0RkQxZi1PdjZMOTdGM1h6QUl5V1FPRi1mTDNrNE1Ha21WMkZubktYbllyTlUzbXVRUV80UTEyYkUyVEVvbXJla2YxZE91VEZ2b3JyQkhQQWFSSVZ0ZG90OEEybVdYUms2SlktNmFjeUdpMXprTUJQTHNKVFZ4eU5ZZm8?oc=5",
          "Category": "Fund Activity / Institutional Selling",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-16 09:53:05"
        },
        {
          "Headline": "William Blair remains a buy on AppLovin (APP), here\u2019s why - MSN",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxObzVOU0hsX1BDc3FReW04R3NxY3dKUzBqZmo4SndGRGVuaDkxVXM2cVNOQzJJcVhwMV9Ta0pUWkcyWW9Pa1UyWDd1Wm9DeFdkYXNBS0F5bVY4UTJsS3kzM08zaVdXbkpFT290MTlRc2RabGh4TmhfVmYzc29ZRnVocnZtU2I1OG9FSC0xbnRKWVVyRnlKUTBXSmlWREZ0TFVmdEYtaFB6M1pNUXhrRlE3Uk1jclg3UmQ3T1Ffa2NySnA4ZXVETlJnbkNXaF9nSUU?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "William Blair Remains a Buy on AppLovin (APP), Here\u2019s Why - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNSnFGYnlzNTd2RlhON2kwWlNVWGo0MDFIRjA0bF9FRDR6VU5kUHllc0JKY1p1Ui0yeW9Gb0hYV21KMVlZNFd0N1Jpdk9hSDdUZHExOHY0N3pIVHpLRDh4S01UUnFuUGlFVzcwUjJJeE9JYVVISW1HNFBfOGdGSG5aMVAxM05HQkE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "William Blair Remains a Buy on AppLovin (APP), Here\u2019s Why - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMingFBVV95cUxNR0xrWm1pdVdfNDJvbXVrdUluV09lQlJBdlZSbGpTSXVYc0R2bnFZb01mRDdCRmdtSkhoUW1EM1gydzhZeGk3MkRGcnZDMmNXQTFHUUV6UGw2Z2k0bWRlS25pcExRRURLQVlPemNPX0FoNElIWWxTaDZQYVozQ05Rb3IwaVlHLVZkVjJvdi1RamhCaUJ2Ny1iYWkxQXJWd9IBpgFBVV95cUxPUkg5bUw4M3FkS09LYy1GdkxtaVc3YS0yOXMxa0xZcV9zdFlubVAzYUNKYkpqbHJwQUNUMS1SR0VwcFFpRFVhTkQySnVRdlFpOEYyM2lXUDFuWGtwOUFzQnZKdGFmQXZWblNKdldyUnp3RGNRYnRBb0pxcW1WbkZQZmhxa1JFam0zUjBNNzJsOHNacUJHb1QwU0dTNGpQMnBuQS01QnJ3?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "$APP stock fell 9% this week. Here's what we see in our data. - Quiver Quantitative",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNTzJTT2xKX1RYUkFveDJGdl9zS0o4MU5vU0R3ZFFHa3JrZFY1UUN2QXJDRzRLbjZLZWhBeDlWYzVFdDJZck5TbmRTRjN5MVhvWXFsb3lCV3N4UG93QWNiWnNWRjlHVjVzdlJKM1VaTDZQVDRSVFlCcVRndDFzTmFyTTlXbjk5QnFJTWNscEVOckZnZ0xzX1d5YkZEMTd2UWozdEE?oc=5",
          "Category": "Stock Performance",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-15 09:22:59"
        },
        {
          "Headline": "Assessing AppLovin (APP) Valuation After Recent Share Price Pullback And Strong Long Term Returns - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPRVZIbXhPbWY1amhYOVJMemxEVlBsdUlua1NONGFsNDhQM1JyLVh2MDlqWDVlUHM0ZHVEOHRnZzhfOEx5a2NfZ0REeEVheFp2cnJYYXdOSmlDdFdYdHpnZzZMTHpSSjVBMUlpVjRlbkd2eXNINFl1anBYaFdkQ2otdjlKNW91SnNfalhHOWlR?oc=5",
          "Category": "General",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-14 09:21:46"
        },
        {
          "Headline": "Insider Sell: Dmitriy Dorosh Sells Shares of AppLovin Corp (APP) - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMixAJBVV95cUxPUmk3VGl0TVQ2NDZDbFozd1NVUkNGV0pRZERkM1pCOU9Rc0FRQVdBay1aLV9uc3MwTEtSQXFRSmZBeFRUc1dlNDRnQmVlUWFNNTB2VDNCRnZIZ2tfdDBNV3o5UHdSRUttSUpMbDZaRE5jWGtjWjN3SmNnaFRyd3VvdzlHNGRsYTdydDM3SmNUbmRmQjBBQnZody0zSUpEcWYtMFVXUmhPRC02Sk1vcGFaLW9FZ21lckZnNkZXelpkdjM0Vno5cnpUTkR1V3hHYnQtbkpHem1kcG54Ym9wSXVrQy1iTmpJcGZXdWdfSXpDR0l3ZVRWSFd3blR1aDM2YWZRdkxBY1RQYmFwTTFVMG5peDFxdngzaVhJcjhaZ0VqTHRzWXhGQ0lLcUVVcDUzaHZtbGZ5NldSaXZYUGpMWk50dEFRQXk?oc=5",
          "Category": "General",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:46"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "APTV",
      "Price": 71.57,
      "LSTM_Confidence": 0.68,
      "News_Sentiment": 0.8,
      "News_Impact": 0.9,
      "Headline": "Versigent Spin-Off And Debt Tender Could Be A Game Changer For Aptiv (APTV) - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPRFdRbkItemZxLUkwUWJscjctRHlEM2t6WS1iNnhvQXc1Y045c19YcVFKckNyR1k5Sm13TnRVZE13SGFyVGtqVkdwWmpYRVIyaW5BQUdGV3ZXVlZnVXZhaERUTEZWbWxWSFJ0dGQ0X2x2U1VYeGNraGNDa25VQTFWaEYxQXZhSjlsNFBSQU1UcDl2dkhwTzFYN01JdFVMd3VRU3o1bzNQdDFPTHFUUy14Nml2ZG1ubFRPRlBad1dFWUZ3V03SAcgBQVVfeXFMTUc0VnM3Rlk0U3RCQ3hSc1BhbDB0OEdLbHQ5Qkxnbm9ZMjEya21NWWppNTBjUGpHNmNJbHlFeV9aakdkYlBBWHQxdzdBZHpGY3VxanVCODE3OXJDd3dWay0tWi1IUWotLV9NM29HempsSW1lR3ZJeV81RXRPY2VIVFpFTmtEMWR5eVNST0NCY1FIMnE1WW9DMlNKMG9GVDE5WGZhSU11VFJ4eW15ek9lZHdiSElHWDF5UlZMeHVDX1dQT3EzU1hzSm0?oc=5",
      "All_News": [
        {
          "Headline": "Ameriprise Financial Inc. Invests $297.92 Million in Aptiv PLC $APTV - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPblJDUGxEMURlRTQwbGlseFlmR0lUVUNBY2JjNFdNWWtZT0tlLWtsY1djWDZoUHA1bGRqNjVfWUlZYVlpbkt5WnQybzZPc0R3UmRMUk1rbURQVG5nUkFidnM4alNjdmNKSVV4Tm5EVVk2SXRpeUdVbVVZbjN3M01DeHlDbkpZTDRUYl9ydDhqZE83Mkd5Um13bjFMdEhHNFJKYzVYQ2ZzSW5oVS10SnN6ZE5vMUdlblY3eU1DMWw0bm5HOU0?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:11"
        },
        {
          "Headline": "Aptiv (NYSE: APTV) sets 2026 vote on directors, pay and Versigent spin-off - Stock Titan",
          "URL": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQWHZlLVZ6WHBPa1FPZEtLYjJyU19XZ2VjZXJiclBWVnFrOFFiVVpLTkZfMjFpbkdiWHJOVTVzaEVHblFtN1ZqZm5SdzBTWW5PcXdlc2tXNWtlQVI4MV9Qb3BuV2ZZaFlmLWZzYlpkdTBlTEp2U3BkWENIZ3Y4TVpwdUdCaDRUcnJwVmFnaXY3YVR4T2FCbHJFUUk5RE9JbXk2YkRXZE5nR0FNdw?oc=5",
          "Category": "Corporate Action",
          "Sentiment": 0.1,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:11"
        },
        {
          "Headline": "Aptiv PLC (APTV) Laps the Stock Market: Here's Why - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBLS1IyZ1JfX3hNU09KMWgxbWF5RnZWdlE1cnJVYmpiZkR6WjB5d0pfR0lxd1d0VlVwSXg3cXQ1dlh2YVJIYVQzb2kyak1UOTc0LUlwQm01RTdlYlpGa2NoUmZ2RlRmQmpFYWNVX1FnazRBUU91b2RVVGR4TQ?oc=5",
          "Category": "Market Performance",
          "Sentiment": 0.8,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:11"
        },
        {
          "Headline": "CSM Advisors LLC Invests $19.34 Million in Aptiv PLC $APTV - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNRzR0X3FlMTVnMldSajhjRW5vR3VxNU1VR044RENiemF0WmtSTFpsTE5HdEY4Rm1DbVBHTTJXTW1WMWFkYllIMEZYbDNxZEFuemVaOVZXRElJcjZtbXFPSzF3U0NWVzN0OHpXazRzMjJzdkRobWNJT2w3RnhRWFVLUlJhbkF5WXNnMjBDbl9oS1VTcUJDN0RmQWxSb0EzVXBHdjRhZ1N4c2piRlpJRG1lWGhpaHNmOE0?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:59"
        },
        {
          "Headline": "Aptiv PLC $APTV Shares Sold by Alliancebernstein L.P. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOQUl4bTNMcDEyQjRkbjJqdFd5ckJuYmRZdjZuLTJFcmRwVFVEX3A0TGRSNEF2U25CQ29jUnBMUVRncS0wLW5vUzJBUy1EN0VVZmFqeVlZOWZ0ZXhLR3hTTTZiUEctcU1ZVnJZemFZbWo2U2FmdVJncWttdl9SdDJCUG9ESWpBcGhkUHRGcndCalVnYjc0dHRvWVQzSlJBQXJSOFAxNjBiYm5uRS0xUlU5VA?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:52:59"
        },
        {
          "Headline": "Aptiv Plc (NYSE: APTV) \u2013 Spin-Off Timeline Confirmed; Initiating Stand-Alone Fair Value Estimates - Smartkarma",
          "URL": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxOd0cyandYaEZ2Z3h0MEEtX2pHUG5vc1F0TzhUbklhU1J3XzI5XzZ4VUVrTS1EaGQ3dDhENF9xUFBrOWxGSzFBMU11enl0OE94TERGWXR2OG96eUJFVm1ZaVNGNFNSQlBMNUN2c25ydVBiMC1kblB2dHRMeGJ3ZmRlVHFMRlBIWHlxLVgzTzZLS3RKaWQ4WGcyOU9hdE5yUzVzdWx3QWtPNWw0Y1labGtjN19GdHNLNHZYcFhXSTByQkJVT09Za25jN09RdjNXMFRSRnBLRXMtODBwMFA5cWROb1NEZm1fZ2R1LTRPUHlDdw?oc=5",
          "Category": "Corporate Action",
          "Sentiment": 0.2,
          "Impact": 0.8,
          "Date": "2026-03-16 09:52:59"
        },
        {
          "Headline": "Aptiv (APTV) Valuation Check As Versigent Spin Off And Debt Moves Reshape The Story - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOZkkyQV9ZYTZ0VUxuTWYxNXBGcVhYOGRVSXMteXpTTFY5QUVDRE9hWm8yYmJ6NzRaUWlXWkEySkJJaFdTM3BNdzRrLWdIekhVYkcxYzE5elJKM1N3Q1ZGMW1QWXNFSndDNEppMkhvdTBkb2QwV1paM040QnluQTRMSkxJdkRWZFd1MTB1ODk3amtETXBrQTJYTzdtdWZBclhrMGsxM1IzZXJTNVRpZjZxQkkzZzNmTjFOd2l5eTluVHlaVTDSAcgBQVVfeXFMTVJkRlBMRzVqYlVzSGY4blZ1UFpRWldXUGt1QThUVHkxV21VcW5BSmR5ZnpISkVwRzN5UFVGOFlhSlc0M2t0Z3VLZjJ4YkQwTmFVbVFMc2sxRDZEZFZUdmRaQ3FaZVg3eVN3Vl92bFlXaFVKZjE0SUp0Yk5icF9GMVZGR0hYMEJ5RmdSZ2RHaVpiUmpsa2JUcEhqTWtyMVI2U3p3d2p1U2o2bFpsbUtSWFVNWHVwUXJhYmNIUDhvM3dyZC15V3ZJQm4?oc=5",
          "Category": "Company News",
          "Sentiment": 0.1,
          "Impact": 0.7,
          "Date": "2026-03-16 09:52:59"
        },
        {
          "Headline": "Versigent Spin-Off And Debt Tender Could Be A Game Changer For Aptiv (APTV) - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPRFdRbkItemZxLUkwUWJscjctRHlEM2t6WS1iNnhvQXc1Y045c19YcVFKckNyR1k5Sm13TnRVZE13SGFyVGtqVkdwWmpYRVIyaW5BQUdGV3ZXVlZnVXZhaERUTEZWbWxWSFJ0dGQ0X2x2U1VYeGNraGNDa25VQTFWaEYxQXZhSjlsNFBSQU1UcDl2dkhwTzFYN01JdFVMd3VRU3o1bzNQdDFPTHFUUy14Nml2ZG1ubFRPRlBad1dFWUZ3V03SAcgBQVVfeXFMTUc0VnM3Rlk0U3RCQ3hSc1BhbDB0OEdLbHQ5Qkxnbm9ZMjEya21NWWppNTBjUGpHNmNJbHlFeV9aakdkYlBBWHQxdzdBZHpGY3VxanVCODE3OXJDd3dWay0tWi1IUWotLV9NM29HempsSW1lR3ZJeV81RXRPY2VIVFpFTmtEMWR5eVNST0NCY1FIMnE1WW9DMlNKMG9GVDE5WGZhSU11VFJ4eW15ek9lZHdiSElHWDF5UlZMeHVDX1dQT3EzU1hzSm0?oc=5",
          "Category": "Corporate Action",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-15 09:23:05"
        },
        {
          "Headline": "Thematics Asset Management Boosts Stake in Aptiv PLC $APTV - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPam5BbHpGSkJWd2VNb05UcVV5NnZ3Mm1nN2c0S3BzbUlvTXhHc2kwV3V0Sm0xclp1NXpzbVEwaFlPa0dHVHV1OEt3QlVCUGE5OVNxY3c1UzVfcEZkSzJIVU03blNVWHJkZF9SMy16ZlNZQnJxQzdRODdrT2JjOW5RWlpWOUFUc2ZPOUZiUV9pTDhQYTVRVlo5M0ZUYXVPOEpVQnU2dHpWaEFRSmZBNnZDSFZiVURiVDgySXc?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:05"
        },
        {
          "Headline": "Aptiv PLC $APTV Shares Sold by Atlantic Investment Management Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNUHh0UW5GSms3QWhtTHhJalhiNnB6aVk0bHRLQWR2bzFFVFRWNFBqbUZTbUJvWVBtQWJrY25OVm5PcHRjTDF6VmtvSEZKYjVwR0Vad21hWnBZQmk4M0djd3VHV1BsYnZNeHNCcmlTdjBpZWotbUlmQkV4ckQyMDBGXzJHWXFoSGZMQlAwdUx1cHAydHBSMFZDTmc3TzFGQ0FiMjJuSFV3YkFaWmZRX3RmNEgtSHJTR3N3OEdJN3RkaFk0cGs?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:23:05"
        },
        {
          "Headline": "Aptiv PLC $APTV Shares Sold by HITE Hedge Asset Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQblFlMk9iSi1hWTBraVBiUUt6c3hHamFsT3pJSEZvUHFYVC12SVdZaHdnN1V1S05ITVY1V2ZvUTRyRklqS19kTmJ2RlJ1V182b2hVX1pGbHFPLTZkbURzcWY5dDlSRUhEVkhSVlVzdnhTQVY5amQ5OE1BMFZzemlTR3ZucE1GSS1yNlJRY25aM0ZuUXVlZkU3OW9ockY2WDVTanhmQl82Q1FiNUdwdDFfZkNLSkZFWTB4OVRZVFNaTQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:52"
        },
        {
          "Headline": "Wells Fargo cuts Aptiv (APTV) price target after $1.35B notes tender offer - MSN",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPZ1JJbTNBRkhCeWZVS192U3JpNTA5MV9aajB3R200WF84TS0ydS1nY1R2Ykd6YmJtZ0dHTGs3ajlvMTltNDBCSEN3cHVyaHVOVnYxYjV4ZGZ6NjhHTWYzakhram44cTVsUEtIVFBCYWlodmVEV0I0cW11WVpnZVRkZlYwMnNYU3JHemRGMTloZl84QThNV1J5UHJvYnpWSEFoUTF2Z0hIVzRBeFh2WHhqckt5V1RGS0d5RDZHeDhjaFdRbnRQZFRwVUNrdWhHNzA?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:52"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AWK",
      "Price": 139.12,
      "LSTM_Confidence": 0.44,
      "News_Sentiment": -0.7,
      "News_Impact": 0.7,
      "Headline": "Aristotle Capital Management LLC Sells 286,638 Shares of American Water Works Company, Inc. $AWK - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQbWN6aDdGNHNNWmdmczhIbFhzQVFmcExZUTh5NEVCMVcxUkZUNFNsaEJUa3kxV2RQaFlpcXdyak9TejZTUGJjQnpTcmtteGt0YmxJV2FTZHlDeEJRMlFwWVB2OWlEeE01TUJsT256RnBJVTZuTGtXdHBhLUtTcW05Q1h2NFkzVmxOZW1DUVlVYlMxS1c4OWwwYWpOakVlRFpiRm0wOFhiRUtFTG1wQzEtV1ZBR3E3dW9SVzRCbi1QaGgzR3pseUhfWGhDVExyRlNqWEJpMmNHV1JCbGNMUEgtaTlQSWxLMEhn?oc=5",
      "All_News": [
        {
          "Headline": "American Water Works Company, Inc. $AWK Position Boosted by KKM Financial LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNaGpsd1lKYzhQa3M3dW51NzNkMnpwX0FNUTYzdzlLS2F5SXpUWW8xYkJHdXpLNHdDOHlnYU5ad3Y4Y1ExM0xEbWwtM3NOcE9wNl8wWUxialdwRTVRekhwVXhhbnNYc0UycTVZOVgtc052bnJkWUxSOFJfbDNTSkVQMVFEU0dRWTBCNC1zLVozYTZ3b1o1aTNmbndKNHVPVXVDYWtpNU9aQWwzR2llQ001WjhFc2hZb0FUbUdMdExlUEVCUDRUaktoZGpvNlQ4UlBS?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:07"
        },
        {
          "Headline": "American Water Works Company, Inc. $AWK Shares Acquired by Ameriprise Financial Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQaXlSQ1J2QXVsWVVNQzJEY0NROWt5NXg1dnh5VkRpX2VJa3hEQzRpSTh2SVJ5czN6QnRzWUMtR3ZIUDcyNFVuOUE4Ny12ZzU5S3daanA2Tk5KNkV1anpnbGhxcTBiRC1WZExHUldqNk1wM2dYZVlJRS0xeXFfNllpeTJCSVBDUXJsdlYzQm9OYzhuS2hqMGpQcWxOcUxrVGwtVDh0U0lLOEhybHpWclJjelJrRlFaNm1KaTU4YmdzVjdlMkhGVVRGNnNqNjhQUERfRVVzSU5QaTc?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:07"
        },
        {
          "Headline": "Fortress Investment Group LLC Purchases New Position in American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxOd2syNnZwVmcyR2tlSWdSVlBQczdXc2hSQ192RWNrVzJ4N2hiNUJVUzF3T19YNnk0bU5xSTBtMV9TT3lRNHJCa1hxMFRxX2V3SFZKb29BbEowVngyaUhHR1lwM1F2WjBGQ1VkdFA3N0hJajAzVUFSTk5NUXFDUFdUNVhMOXVRRXA2YzBJTVBRTVVvbGpNZnZEaEtDMW9UeXotNFFSZndsXzVZWS0yeVpwQzIwNXhLS1pxTGlGZXVsUzVLRXdzS1BKTk9nYUszRmZDX2w4cHlBMXlVMDFvVVVfUDRzQkk2WVp2?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:07"
        },
        {
          "Headline": "California Public Employees Retirement System Has $90.72 Million Stock Holdings in American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiigJBVV95cUxQWWhYWXhVak5iUTBfeFVySWppR2xuQzJRcXZ1S0JXMTBYdWtqV3d6Q3lnNjRZRTV0QU1jQVNjTGI5XzNLR2diOU5GaXNOZk1OWmxBVUZCRVI5ZXhMazFPUU5jeUJKeC1xa1hXb2xPYUFnS0ZGSTY3bWZfOUlmWFpQck1FQzhjV21MUmJRbDBTRjN2TmRCWlBlS1Y3SWIyakJfeHJkQnRhYnJJSDRGTXdHbDlFZUluZWJFVnpZUjNZbnZVVEtZT0VNMG50bEtyeEYtbWdvbElUODNzcmdSTV9BckliVnNBck8wZHQxWjlOMV91cUJDY1lWUldfdFBzdDREN1lqdFQxWWdvdw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:07"
        },
        {
          "Headline": "13,997 Shares in American Water Works Company, Inc. $AWK Acquired by iSAM Funds UK Ltd - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQVXFidG5VcUo2cFczZVFXaktDQWhSaS14a0RKSDdMdjBrNmxGMXdaYUJJck0zQTdXZGdZYUZvcE04Mk16cFZXUXBZdWoxclZNY1d1c1I5Qm0tTE1EcmUzUFhIOEJ3MWg5bWk1c18zTzc1VVA1SzVVZ09NSjdpTHFwYW1VMTBQeURVNXpJU292Z0FDNmtndXZsYlRBMGNERnhkdVZGVXllSUNWTUJ5TE5JNmM2SmJVSS1OTTc5cWVKdVZxMVRWWHNCd2NVWFpiRkF3U0VzY2dZZE5NMlk?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:56"
        },
        {
          "Headline": "Aquatic Capital Management LLC Buys 63,693 Shares of American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQQlozTlhsZnZ0a09fNzZhUW13RnpZTmxiVDV2OUt1ZkhVeDFfQ2lycl9BT3U3elRPUlNEZ3o3aHp2SHJodUoyVU5ab0llS2gtSGNJZ281S1ljTEE4cHBJdDdPbjEyb09VcVE3eEZESTVzSnJJbVpYNy1yeXJiUnRtUWVvcjVrcVRhNElYdXEzOFRJRGdHZFNhSDU1NEhNekg5SVhCY1JxWEFISHZzaHU4S0hPbkdPTHZuRVhJeWhIU1VDSFYxdkZJeU53UXN3dXB0MWphVVdXUTBiVFpySEhoYWI3UQ?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:56"
        },
        {
          "Headline": "American Water Works Company, Inc. $AWK Shares Sold by Aristotle Atlantic Partners LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQb1MtQ3IwM05MTFRPVTRVT3ZFaVBjT2FQTVFLQzNEb2RPeGdfcVFoZm1ERUQySFNrUVRKUl9YSXFMd1R0Wmo1RUpvNnZJUVo2SzVreGRpVW9UMDIyVlo4cXQwVTM2ZTAzVnhRVlU3SWpoUlpkUHVTZl9WVnlfNnJyYWdLcjNVcEdfRFNnbFRDVzFOSzJCNmpzOFdtWHh0QmFzdmh0VUxFWUJNdnRRTnhRNmY2SlBlY3JYZnFrRHAtUkZHMVRNQ2tBN24yZ0t4c0lGektOV1B5MDNMZkhT?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:56"
        },
        {
          "Headline": "Aristotle Capital Management LLC Sells 286,638 Shares of American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQbWN6aDdGNHNNWmdmczhIbFhzQVFmcExZUTh5NEVCMVcxUkZUNFNsaEJUa3kxV2RQaFlpcXdyak9TejZTUGJjQnpTcmtteGt0YmxJV2FTZHlDeEJRMlFwWVB2OWlEeE01TUJsT256RnBJVTZuTGtXdHBhLUtTcW05Q1h2NFkzVmxOZW1DUVlVYlMxS1c4OWwwYWpOakVlRFpiRm0wOFhiRUtFTG1wQzEtV1ZBR3E3dW9SVzRCbi1QaGgzR3pseUhfWGhDVExyRlNqWEJpMmNHV1JCbGNMUEgtaTlQSWxLMEhn?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-15 09:22:56"
        },
        {
          "Headline": "16,433 Shares in American Water Works Company, Inc. $AWK Purchased by Magnetar Financial LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQWnJIbnBuOER6T28wZjl0anlrOHZTVTMwNGVnWnM3X0VDRHhzbjJndFdOR1VVb1ZVUENVRC1yRXEtdkgyNXNtYjhxTEo5LUhoRlhQbDlpLXgxZGpNcVRFU0RmcklVZTFzaTFoUXpsZVlTSm5sUWNvLWxqWmc2dVV4aEpmVVA3bi00U0pMOWxxcGVZM3JpUk54ZDdHR3Nza0h6Wk96anZwUjhVQWJkblRKOE1xb0lsemI5RG1JaERHc0E4V09UX1Z6SGpoWTdfOVRhdHgzS2dPWEwtWUFpeERmYnFkZw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.2,
          "Date": "2026-03-14 09:21:52"
        },
        {
          "Headline": "100,000 Shares in American Water Works Company, Inc. $AWK Acquired by Ghisallo Capital Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQVXJscm40WVVqSGJJdmx1RnN2YzEzY3lfN0xGZ3JaOGpnUktEOWF6elR0bE1abVk4d1Awb09EUVZjQ1lVMDE0UWRsN2laY25lZ09mLWNoc2FLYjk2RDVaV29EekJubHFKSVBvVFdkZWpjT2xiWHozQ3RhSjViQ0RIekxtTlZVRTdoYWhaclMycDJaZ2xlNWRPdmhUU0liUjRNU0JqSFh0dEFmY2FNaWJIY0F1MHhmOGFUYUMtdkN5X0hTODJGdTFQSDBzYVh3SGVIRENRTzdtcDItYzIyVHJ1aHMxUjBnWXc0NGhSMEpWSQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:52"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "LNT",
      "Price": 73.03,
      "LSTM_Confidence": 0.5,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "Alliant Energy (NASDAQ:LNT) Hits New 12-Month High - Here's What Happened - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQbkVZRGYwQUJ5Wk41eTIydm1Ec09xb2tVRlNkVEE4YjhGekxsZnhycEZVRE5MWm5lcmFWN0hLd2lMNDRlWGtMRl9zV0xLVEp4VWpKNVE2ZlJoY1B4QmZqSTBKcnVvRGdMMkVqNmhRTndhOGh6c3NGU2F6ZnhWZ1ljMGZJT09vQUxjbnZSVUZDSzEtSHhBc0NVNWl1R0hEM05ZNXRPS3FLVnlWTXVzNnVhd1RRejRjQ2phWXJfMjJB?oc=5",
      "All_News": [
        {
          "Headline": "Delta Global Management LP Acquires New Shares in Alliant Energy Corporation $LNT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOVFFJRmxwQTl6RXh4bEJUUnFqVFhfaDc2bUFKOGVpRUV5ZFNWVWdWUXhQSFRsSzNPc0VRZXdjLVFkdEw4cE1ub2J6Nlc5UG12Y1BmbFBBQVdQYVhTR3lrTDhjclh0RnV4S0RucjFtQkVmWkV6MTE3RlFBRlQ2R1N0bWdJMXQwODNsUy1XcE9UQ3hrYmYtMkphSk5kenRld3BYWFhOM1JWOXZCUDRPd21xajd3VUpTQWtBcDUxekJleHFVeGVIaDA3M1o1ZnRyNV9mS3hEUlJpbDM?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Understanding the Setup: (LNT) and Scalable Risk - Stock Traders Daily",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNVHMzMFp5ZTRLMThaVHhyNGh6d2lzR2NhdDNDSFpKNUNXOXk1VFhyV0FSZ0V5TDZRb29KajNudmh4N1hLMzVnQm5WRjVTWERNU1FFa1hqTmZnLUV3R25EdFBIcU14d3RMWldOYVVxTEVDcVlOZGR3YUpoUDZMQ3V4eloxaHNTb25SZm9MWm5Dc25Hbms2d0RFUHFTM3VRR2FXVWtuU09Nakl0ai1IRGxiS203TlFUZHJhWUN6dTI3Mk5SQVlV?oc=5",
          "Category": "Stock Analysis",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "LNT: Mizuho Maintains Neutral Rating and Raises Price Target | L - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMi1gJBVV95cUxNeTctdV8zYzlRam5xeUd3bmNFYy1SLWYwQnB3U1UyNHdqREdFaHFPZjQxSnFURE5ramx5SHY2QzZWVGp4TExNU0pCdnZLd05WTkllQUR1a1lMTGRrRlVqSlJ6R1Q2V28xR3N2aEExRUFacjRtbFFmWEx3WmFwQmptN216SHlhUEJwQmFRMklNdzIxaHBDUjNiU0NzVm5fSFhVZFhUZ2xMX1BvbzFHWGZfekhNQmN0dzBrN0RMVTZmNkVVMU84c3l5a2lTZ0MtaWZMNjdNN3NZU0g1NXlRQXBwQnNhMHI5UHVHQkxXUXBERVliY0ZhX2tYdWtzdG9qdWxOd2xIeThldUI3eGl6REpJTHQxb1Zld1VMUnNQT0huY091Z1VRWGVPNlJCU3RHbkxxa0FJYmNLNGpZOWV2SE1SeWduMlBoek1CN0NtTkJJdjJDNzJVLVE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.3,
          "Impact": 0.5,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Mizuho Securities Maintains Alliant Energy(LNT.US) With Hold Rating, Raises Target Price to $74 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNZkM5LXhvSkpDZkFfOU9WTkRCMGdUYkFpQUJuVGlKbDdyX1BSdHZUV1I1REQwdFg2RkRtX182NlVQdEgxQnJ1MGkwSnFsVFJ3dmRZRlowdmFuYUZoaUpzTXVPeFJfWUJsQ0dtalY0ajZoTll2NUZnU2oxei1VaTNUU3R2V3FSR0R3WkktaFFVQkp3d3pOUnJ4ZmlTZzJVMzV6bTgyNVdibXlJMm1pSVJKUGVhZw?oc=5",
          "Category": "Analyst Rating / Price Target",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Alliant Energy (NASDAQ:LNT) Price Target Raised to $74.00 at Mizuho - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPUGQxM1V6MmRnZ25FcWNDZHdmVHd0R2lNcGp0Z3EzNl94UkxvSkhfRFNJelA1OWlUdE1LZ0o0TlhweWtDWWtYU0tFUV9oSE5RaDNzVU1DWEpwc0I4VXhFakl0YWtJREtQdnJPeTlBWHFDUXNnRU90Q0kteWhRdk14M3B3VlBCYm9MSmlLZFFSRGY0SnA2azdyOC03a3E2eU52MGM2b0hLRHdSMUVi?oc=5",
          "Category": "Analyst Rating / Price Target",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:15"
        },
        {
          "Headline": "Alliant Energy Corporation $LNT Shares Bought by Aventail Capital Group LP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNMWhNNkpxa2ZQbFhPNFZUaXRKZGpMOWZQcUlCSVhrT1hDMkhzSi1yRU1HOFZidV9Sc3B0SFJSVjhjWWROQ0Ffb2ZfY3M2RU9MamRhWGc3VVotSDZZSDlsdnJwTVhiVFRrVkw3eURNZzlrTldDc3NUald3NUNvalRxb3lfZmxoU0F6Q05ILThRQmtVWi1sWVg1T0RoOVlzV2JGZ3pqYUs0TEYwWFZlX2FGSFVUQXI1SXpyLUFadzc1NENjMkxUWDZhWTlfNGpOTUk?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-15 09:22:51"
        },
        {
          "Headline": "Alliant Energy (NASDAQ:LNT) Hits New 12-Month High - Here's What Happened - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQbkVZRGYwQUJ5Wk41eTIydm1Ec09xb2tVRlNkVEE4YjhGekxsZnhycEZVRE5MWm5lcmFWN0hLd2lMNDRlWGtMRl9zV0xLVEp4VWpKNVE2ZlJoY1B4QmZqSTBKcnVvRGdMMkVqNmhRTndhOGh6c3NGU2F6ZnhWZ1ljMGZJT09vQUxjbnZSVUZDSzEtSHhBc0NVNWl1R0hEM05ZNXRPS3FLVnlWTXVzNnVhd1RRejRjQ2phWXJfMjJB?oc=5",
          "Category": "Market Performance",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:22:01"
        },
        {
          "Headline": "Swiss National Bank Sells 37,000 Shares of Alliant Energy Corporation $LNT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPTEhQWnNsSnlfOUM3UVlvYlRGZThvZnFMRXZ1ZFFocVl0WUlCUWJ4Y1AzWUtrdkZMa0VOVXlDOGVJazlBTTNGMWZPQ3p6ajVnWHI3WmJvM01xT2lGcWNsSWNUc0pHd01lUkpVcm5JOUFmUmpNV19HcjZfaG9rV1NNNzRIaGI5QXhobDNEVmpXR2RkRWhHNGxQYy1hX0JiTzUwUnZHb3BGR3B4U1J5b1ZVN0hYcFhjNlpNdXhvSVRON00xWHlzM0F0VmQyRF8yQQ?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:01"
        },
        {
          "Headline": "Assessing Alliant Energy (LNT) Valuation After Earnings Beat And New $400 Million Credit Facility - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOcFF1MGFRa21kVWNFZF94QkM0V3EtVXFSQ0tRWmUycWlJZmdYLS1ZMlZsUXotRXNPWUJGRjRteE5mSHFybEJxMnliS3BITlk1a254ZGlGMmdzSFBNZGcyUDVDcVVPS1NBMWVwMnVpZjhKZFJEZnJuUm8ycURJZXV6N3N5T0tHT21YYmctc1BNOWRxdkZQc29veV9YLW1SSzJjYW1yMGEyRmZKME1KMGRUbDg5ZzVfRndQQW9jT0xSQ3NrQkpqQnZ6STlVQl9HZ9IB0wFBVV95cUxPOHI1clo2ZjJ3TlJMR2c2eWFybVFfamlwWW9YcEY3bjktZ1A1QXh0ZGNzY1RDc0M4SWZEelZMZTRJSEJ3UlZHWmg3V1R3SkVuY2FQZnV6d2NqTlI2X3Y1Sy1oeFZSTkdSTFV6ZllDY0hLaGs3UTNqR1FwZURMMUxOTDAxR1FyU0VkSDdJV3dkX3dFejc2QW1OWFBiVGJQTGIyakdwTGkxcW5HOGRNRjYxTGRmdGNoM2p3S2VYeVJSV1ZIRTFGNDlJMEx1OUVGTXRlUUdz?oc=5",
          "Category": "Earnings / Company News",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:22:01"
        },
        {
          "Headline": "HITE Hedge Asset Management LLC Has $27.61 Million Stake in Alliant Energy Corporation $LNT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxORjg3djBNalJIN2Y0MGFHSk1IX2xWb041czdrbDlhWGswbEF2TWkxcDg0RkVMVHh0Mlh1LU0wc1RnYm5GbFVQZVYxT0cxY1RabmJyTERVaXAzXzRJcUtoU05feHk1VFBLbEpYNG9WR0RGU3ZueGI2RTFIaThkTzlnQTFfTmtxMFYyY05EaDFkZkQwcXRxTktQUUZDOXBiWjQ4dGdDVnBTeDRpTXVaSWpsNVE1dzdfUjY3cmFUWTgyazU3ODRiZXFVd2NFd0tNMkgwRmVXNVExNzlmR09oYWc3bnA2OA?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:01"
        },
        {
          "Headline": "Legal & General Group Plc Has $155.47 Million Position in Alliant Energy Corporation $LNT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOWl9va3RfNnhha2laRmRhVnpzQkVvQVc0MUFiRVdLSndfZnZmYmVpZmw5VDFQZDhOWW9KYmdkTUlXQmZBRkY4Wld5NWFiaFVvanp1MzFnb1h2enZ1R1N1c1BRcFZ0RFNOS2xOc3RZM1JPN1JuVXE4eWFRcWZGSi1yV2ltMF92Rjk1bFRmWEZidFk3RWZGUFl0Yk43MzdxOUlxNW44UklJREk3TlJJMzR5dEdzcVBCUFZNcTN1c2lGMDdiS2ZVcW85Wk5TZU9naE5MMkZvYml6OWhtZVN3NkE?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:01"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "MMM",
      "Price": 149.95,
      "LSTM_Confidence": 0.71,
      "News_Sentiment": -0.6,
      "News_Impact": 0.9,
      "Headline": "A Look At 3M (MMM) Valuation After Mixed Earnings, 2026 Outlook And Ongoing Legal Uncertainty - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPOGhVaVlUZ3RhRVNONDhMMXlYM3k2WFhZSU85QmZialdzRllBT1c1dTlHenY0cDV0YzlJc2tWZTl1bWU4czdvZ1dzY3Z1Szk5aER5cXpZbmVqQzNMblhNZGkzeWtaM2hyNDdHU1pxdHY4Nk9na2p1Qm1hSGJoTkktMHh0eHBpcVBtTGRLdkJrM0ZNbUdMV24ydTZGWWxOWERjWEtSUWxfYmRILWZuT2tsU3E5RWNhY00yNFhjTDMtMGo4SVNvWkHSAcYBQVVfeXFMTzhoVWlZVGd0YUVTTjQ4TDF5WDN5NlhYWUlPOUJmYmpXc0ZZQU9XNXU5R3p2NHA1dGM5SXNrVmU5dW1lOHM3b2dXc2N2dUs5OWhEeXF6WW5lakMzTG5YTWRpM3lrWjNocjQ3R1NacXR2ODZPZ2tqdUJtYUhiaE5JLTB4dHhwaXFQbUxkS3ZCazNGTW1HTFduMnU2RllsTlhEY1hLUlFsX2JkSC1mbk9rbFNxOUVjYWNNMjRYY0wzLTBqOElTb1pB?oc=5",
      "All_News": [
        {
          "Headline": "3M Company (NYSE:MMM) Short Interest Update - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNVEFsdHo1dFBKWUgtazZoOXZLUldKMDlFck1jN2twZV9uOHZFNDRHTXphbXQyVHhaUVVSMnFXcHNZSnFuSEk1aUFTM0lXRlpudXh4TlMxNTZKV2xYS1k1Q0N5Mi0xeG14RUlKckVxRnpUVzhabDVsYS10RlhudE1uZ2NqZE9KT3R6U2xEaWVFN0FSUDhaSnJTOXlB?oc=5",
          "Category": "Market Data",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:08"
        },
        {
          "Headline": "Avoiding Lag: Real-Time Signals in (MMM) Movement - Stock Traders Daily",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPTXJwSDNYbWVzTWI3SV94TVRwR3kwYzhBdnh6enBpYlFTUDA3WnBEd2x2YU90SGlZQm5QMU9JT0RQdFlhS01fdUpuZm5fbHhoeVVoZlE3U3hWZ2lmNVo2QTFFQVNZdGlmcFJGOTFyN29iamR1SG5EWTgtblRWcUFiSG9BT05USVh5WWtWUFMydjlXdy1CalFNZHdGenFObXlMTW5ZS1drQV8ybGZEN3JoMnBra2RjUGRtVVJrWkgwVzJHSFFHZVE?oc=5",
          "Category": "Market Commentary",
          "Sentiment": 0.0,
          "Impact": 0.1,
          "Date": "2026-03-16 09:52:54"
        },
        {
          "Headline": "UBS Maintains Buy on 3M Company (MMM) March 2026 - Meyka",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPMDh2VWM5cEJOaHhNWTBzQzBuY3hlY0xQWDVZUUdPQ2ttb3gxMlY4bWpyV3dMZDhScDJSRTdCSU0wWHQ5ZDFFMmFDMUxoRUZfY2JWLUhRNjBYMGZ6dHYwNTlJSmJtNDJ0RkJ1ekd2aEVxWDJSM25aQnR0WEpTUmpNTA?oc=5",
          "Category": "Analyst Rating/Research",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:06"
        },
        {
          "Headline": "A Look At 3M (MMM) Valuation After Mixed Earnings, 2026 Outlook And Ongoing Legal Uncertainty - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPOGhVaVlUZ3RhRVNONDhMMXlYM3k2WFhZSU85QmZialdzRllBT1c1dTlHenY0cDV0YzlJc2tWZTl1bWU4czdvZ1dzY3Z1Szk5aER5cXpZbmVqQzNMblhNZGkzeWtaM2hyNDdHU1pxdHY4Nk9na2p1Qm1hSGJoTkktMHh0eHBpcVBtTGRLdkJrM0ZNbUdMV24ydTZGWWxOWERjWEtSUWxfYmRILWZuT2tsU3E5RWNhY00yNFhjTDMtMGo4SVNvWkHSAcYBQVVfeXFMTzhoVWlZVGd0YUVTTjQ4TDF5WDN5NlhYWUlPOUJmYmpXc0ZZQU9XNXU5R3p2NHA1dGM5SXNrVmU5dW1lOHM3b2dXc2N2dUs5OWhEeXF6WW5lakMzTG5YTWRpM3lrWjNocjQ3R1NacXR2ODZPZ2tqdUJtYUhiaE5JLTB4dHhwaXFQbUxkS3ZCazNGTW1HTFduMnU2RllsTlhEY1hLUlFsX2JkSC1mbk9rbFNxOUVjYWNNMjRYY0wzLTBqOElTb1pB?oc=5",
          "Category": "Earnings/Legal/Valuation",
          "Sentiment": -0.6,
          "Impact": 0.9,
          "Date": "2026-03-14 09:22:06"
        }
      ],
      "Signal": "BEARISH_DUMP"
    },
    {
      "Ticker": "MO",
      "Price": 67.53,
      "LSTM_Confidence": 0.6,
      "News_Sentiment": 0.6,
      "News_Impact": 0.7,
      "Headline": "Ameriprise Financial Inc. Acquires 3,172,753 Shares of Altria Group, Inc. $MO - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPdnBseF94Y2o5a2xmYm9fZ21FQzk5VldRQVBmRlpISzgzNFA4RTByOGdzVGVCZU5zckoxYXljdlVOS0RqeU5xZGJYZDJkUG9zamEyNWI2d2RzQ2JqaHRoNjUzYmg1V2NhV3hJZVFKQ2lLa1VubFY2RzNfUWNqdVlxZjBGZTBVVVY0MDlDbkhoZnVaVnJGS0xQYTVINHB1QnpWM29RTDNsMlZKRUdOX0Q5X1RKWDBMMGlkRVhwTDZWWFUydVM2Ujh6WmNoOVI?oc=5",
      "All_News": [
        {
          "Headline": "Alliancebernstein L.P. Acquires 131,127 Shares of Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPdDF5all5LWM3T3ZYZ1Jfcnh2T1RKSXF3c1d4U0wyOXhRQUY5REs0LXd6dEVwcUl4Q1k1WDFaYzcwYnkyZzZucHFnZkpzRm5YVW1maVlQWG5rZm9EYkt6Mi0yY054QW5HLXFZQmp6aGFXSXZKUVBfLUJfTnhkNXk0VFFPeG1JemNJblJ2cWpoNEtQNGlhYS05UmFzblNBRDVOYTdqUThCU0ROZk04TVcxWklvZF9zNmhDZzIwdW9VbHJsWUZTZHc?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:19"
        },
        {
          "Headline": "Altria Group, Inc. $MO Stake Cut by Chevy Chase Trust Holdings LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQbmpHVUlyVTZEQVdzdWpWWjc1dTB2YzM5RkpfX01CaWRUb1VLbGlYblZzWlVIZGVBWlRiYkd2Y2FMR2k3aE9FZGVDdGRFZHAzdnluUFViTHprNll5bGluMEhPTUFTT0ZWSTNTRkItZ1JtTzR6S29td0xibE1nMll3aDE0Q19ET0lmM1JNaV83Yjl4MFBseWQ0dDdvWlRHRXJxNzhYNnJ6Z0I1dFNWQnYxRGp6YU90aWpWUVFyUGhfQkRiZw?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:53:01"
        },
        {
          "Headline": "Bank of Nova Scotia Purchases 215,155 Shares of Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNLXl4dlUySm5fdDhNT1d6ZnBTMjBUQXJ5bEZTVkJxSTBoNE5BM1QxUW9ieFZVU295ZElmZGxjTW1PWGRpY0dIU2kwVVZUZ3ZpTjBtM1R4REdMeHY3LWhrcmtxdE5zMnJzcWF0U2NlSV9oQkMtVkJPRVY1eUVKWk9SZ3BZd095SDNfSjJ0aWtwekliQXVzdXhFWVMwNDBObjA5ektwMlM1UlN0emh3emVLejJkN2NDMzYxdVJrNWRISmlFMUJXRkE?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:53:01"
        },
        {
          "Headline": "Ameriprise Financial Inc. Acquires 3,172,753 Shares of Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPdnBseF94Y2o5a2xmYm9fZ21FQzk5VldRQVBmRlpISzgzNFA4RTByOGdzVGVCZU5zckoxYXljdlVOS0RqeU5xZGJYZDJkUG9zamEyNWI2d2RzQ2JqaHRoNjUzYmg1V2NhV3hJZVFKQ2lLa1VubFY2RzNfUWNqdVlxZjBGZTBVVVY0MDlDbkhoZnVaVnJGS0xQYTVINHB1QnpWM29RTDNsMlZKRUdOX0Q5X1RKWDBMMGlkRVhwTDZWWFUydVM2Ujh6WmNoOVI?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-15 09:22:49"
        },
        {
          "Headline": "Capital Wealth Planning LLC Purchases New Holdings in Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOeW82WjNHOFFaVHhZU19kT2ZtU0F4dHN6RXZULWVqdFlDLW9IXzgtVklOdkpmd0pJSnhiQ3Q3Y2NQSUVjWEtwYU9xaDFkWmhpVWlBRm9MTkVDMnlTWHExdVAxbFktclBnVGRYSVBReVlfVHRQVnBRT2RtdHI0STV1bjIyWFNFTDg1cHFKeDZlZVVuOUhnYUJMZ3RIRWVuaFFTRjZJNnZZZUhaVVkwUTNhVFF3ZFo1dXVvZWxnWXVFcUlqcU1sZVVNQzJYZlVlWlU?oc=5",
          "Category": "General",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:44"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "T",
      "Price": 27.73,
      "LSTM_Confidence": 0.56,
      "News_Sentiment": 0.7,
      "News_Impact": 0.9,
      "Headline": "Key facts: AT&T to Buy EchoStar Spectrum for $23B; CEO Contacted Trump - TradingView",
      "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPa2ZSam5SX3dfU0VPZkpuRHVKSzNhdFlpc3FHcndPREJLN1FUVTVxZXV4WHJnYnY0SXpXTHc4eGlUdHNZQ3UwYmZ2R3B1SEtnVDlzWFl1VjZyOTNhVU1iQk1fdWw2UnZzTFhKN21Xaml5T19mX0thQ1h5TEk0cVJGM1ozejVXbmR2aUpBdTdla190VU5BdmV6OFFuY3RZZEY1U0hTc2d3VnFGR1FYVkRFaUROVnBYNllpQjBTMmxPVjMtSGlzS2FEUw?oc=5",
      "All_News": [
        {
          "Headline": "NCAA March Madness Live, tri-presented by NCAA Corporate Champions AT&T, Capital One and Coca-Cola, returns with new premium viewing experiences for the 2026 NCAA Division I men\u2019s basketball championship - NCAA.com",
          "URL": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOOTQzMXlOSE9vMDVKNEtwOEJFSVByNWZncUdkNlQ0a2phTGkzRzhxRkttQlFKSFlvdFpGaUdBTzhBbjVUYVNfOHYyMklSRTNIWE42Q0ZjVndnZlk5YUVySm95Y0RsV2tkcS0wQWdSenlfLUVxN0dvcmpFV0FWT0hWb0JFV1JpWWZCSnY1Y0VuMkJiaDVFUnRHWlBBVlE3d091SEFZckpsTXMzb3Y0RGszVWwxeWpqY09kSml0cDloZ3pZR1VEam9DWklPb0VKTWs0REU5cFVMd1g4Z9IB2gFBVV95cUxOOTQzMXlOSE9vMDVKNEtwOEJFSVByNWZncUdkNlQ0a2phTGkzRzhxRkttQlFKSFlvdFpGaUdBTzhBbjVUYVNfOHYyMklSRTNIWE42Q0ZjVndnZlk5YUVySm95Y0RsV2tkcS0wQWdSenlfLUVxN0dvcmpFV0FWT0hWb0JFV1JpWWZCSnY1Y0VuMkJiaDVFUnRHWlBBVlE3d091SEFZckpsTXMzb3Y0RGszVWwxeWpqY09kSml0cDloZ3pZR1VEam9DWklPb0VKTWs0REU5cFVMd1g4Zw?oc=5",
          "Category": "Sponsorship/Partnership",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-17 09:43:12"
        },
        {
          "Headline": "AT&T Inc. $T is Lighthouse Investment Partners LLC's 9th Largest Position - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOWVZrQkZJNXZqLUx4dmtCSHJMTDN0ZWU0YlpETGlsYlo1d280MHN0RUN2d194dFNHUE83NXFNUWxVdkNUcklYeFFCd3FCSC1aWFp4UFpUa0lHMFhYNm5nQ2NndzdGaWNiRDNxVEk1TU1LWXE4RF84MFRQMVFDMHRnRU5MRVBEYzl6NHNTVlJNUWswMk5tQjBEbExDYnYtOHU3YkVHd1R1aFkyMEJpSVYtaHloQVJKQUthMVVIU2hvcmpqYkF0S2hZUEtR?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-17 09:43:12"
        },
        {
          "Headline": "Tell AT&T: Do not extend your contract with ICE! - front.moveon.org",
          "URL": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5VcW1oZ1NneWo5eG9CUHZiOFZHNFJwVThRbTc3R09teHd3Sm5JMU1hMUZfVG94SkZaNWs1QVFsdlA5TVZVRVFEaVJyTUVOVW4zQ2xWSA?oc=5",
          "Category": "Public Relations/Controversy",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-17 09:43:12"
        },
        {
          "Headline": "Delivering Real Confidence for Small Businesses - AT&T",
          "URL": "https://news.google.com/rss/articles/CBMifkFVX3lxTE5kTE0zQm4xNVYtVkpSYUFJV2FjQTlPdUpyOGJSMm90M2J1bmRkZThCaDY1RkRrSUZOaUw0b1MxWk5URFFmTHZaSm4zaUhLMS1DS1k3M0Z2VDFKd296dHN3WDZjTTRzMG1odjcyUnZmMmtMVVFlZHF3UzllcnFHdw?oc=5",
          "Category": "Marketing",
          "Sentiment": 0.3,
          "Impact": 0.2,
          "Date": "2026-03-17 09:43:12"
        },
        {
          "Headline": "AT&T Plano HQ first look, development team found in new filing - The Business Journals",
          "URL": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPUEN1dkNUR055cW4yNnlpRnVyU2FXNlVxd3Z3bDFfbkpPNGE3S1JSeV9lQlp4dVpFaGxZQkhuUlZSSnJSdEUtWklNSkVjUTdWX0diclZSZEhxTVBqY0oxa216c0IzTERmMkhRMjJTU0s1THJuOXl1NkNqNXNhaGdtWWpYQXZROVhQTW4xakwweF85TFNXMkxhNi1xdk9JMkJqNkVuclNZRVU?oc=5",
          "Category": "Corporate Development",
          "Sentiment": 0.1,
          "Impact": 0.1,
          "Date": "2026-03-17 09:43:12"
        },
        {
          "Headline": "AT&T SVP Talks Connectivity 150 Years Since the First Call - qz.com",
          "URL": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQcEExM2tvUTJTU1pmZXVweXVROU1leF93aEJRcnhUcDc4eTZlcEZGeWtDUHZfTUZOdnJidnBSS21QTjF1bzB3UHJwV1c0M3ZMclliOGZJTEtSNzZTbGxTdFBtUlM5OWVOSTk0eHc1V0RycVpsVlFtd3QyekU1dnFzcVdmSUdVZU9hMm9YNmxyWVVGTVNFbUtNRQ?oc=5",
          "Category": "Corporate News",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-16 09:53:00"
        },
        {
          "Headline": "AT&T customers may get up to $7,500 in $177m data breach settlement: Eligibility and how to claim your amount - MSN",
          "URL": "https://news.google.com/rss/articles/CBMirANBVV95cUxQRl9PbEUtU2d0ZWdEQWZKUjdpcS1BeDJjeFd1bUItak9rQW1vbmtHdHlZdVlMWGF3clV1VW9qdmxfMGFzbmVGQlBPU1hfUGdOcEdRSmtXREFaajdDWlNaWS12c01rWkg2T2ZTOUhwUmU1M2hZSGNDbV9uRFFUekVkdUVIQlJUODdHOXJzckp6ZkMzT0l6c2ppTUZVd0JjVlBqSXUyc2lubjVCLUpUcGo1dEtpRXY1OWpqNlBacjFpZHdkU0tLdzF3RV9tZnNQaVdZcllOSjdjT2NCVXRLcWtld1dMS2dXQzFMMFBVQzZUWWZWTG9CVnNVYWswUC1rTGxUV2ZDYkdMSHFYTW5UYldDcmFaTGhGYl91Vm5ieW91d1dQNVl3NWZyMWh4S0pqZ2ZyeTNPdkRNQXE2Zkphc2wxbWt6OE5VcG50QXpWVGt1bGdWZ2hKWUtNVHM1dHJiWjg5VHJjUDNKSmZIQjBuOWpMU1dJdm5pb1F0ZkJfQ3dMMFA5UnZyZGlHeTdaa3dCVnlLVWs1eXdtWlVNREpQNG9mYWgwQmxlbVZSbUVERw?oc=5",
          "Category": "Legal/Regulatory",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-16 09:53:00"
        },
        {
          "Headline": "AT&T Revamps Its Unlimited Plans With Simpler Names and More Data - AOL.com",
          "URL": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOYk5Xcmdzd0FRc2tiLVJ4ZXhJUnhMUjJRMzlBNC1GQVJkYVVHZFBTYTN2b25UamVhNkk5T0tQWVJ4d1dnRlBSSTdpczh2WGtQbExHMjhYZE1xX2NxQU1fbzdPSE9yVi1EbnZPS2lWazZJcUg1X1M4SjNoTTB3a1Z3QTYtZw?oc=5",
          "Category": "Product/Service",
          "Sentiment": 0.5,
          "Impact": 0.7,
          "Date": "2026-03-16 09:53:00"
        },
        {
          "Headline": "Brevan Howard Capital Management LP Sells 376,858 Shares of AT&T Inc. $T - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPVW42ZDRUcHZJakd3QkdOX29YQlFWVGtCWExiMzVqMWsydUJ4dnJ5MzRVekhMR0x5Rk55SUFwYVFIRjM3TlZtYU9pQW0tN3JYRmdPNW84SkhIQjZudmR0eGZTODB6QVBDcDdBQXdnQ3ktVUVuXzA4UTB5blpOaXRwQThLN2RkV2VTbkNMdlFkRHJjUEJaR3JSNGpFSmpxc0lBYWVBY1M4Qm5OdGRUaE8zbGwtSUhibGZaaG1XQ3FaZ2EwUkhJREszMw?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.4,
          "Impact": 0.6,
          "Date": "2026-03-16 09:53:00"
        },
        {
          "Headline": "AT&T CEO reportedly met Trump this week amid $23B EchoStar deal antitrust review - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNaXVqUFYxUTg0dmJUUENfblQ2UVgxMjJDLVdJR2lSMU5ycEphemZwWm1UR1BBVUJSUW83d2Z6TXJTV0xCeFh4UGhpbEZmSTRlRFozUi04b3JaS1p1T3VNcjF0emNIN2dnTnpUMGFNMElsaFBJenFuOFAzemdvRDVVcVhXa3pOQXI2SDE3RTJheWF4MXhERmVKVmtmRDNPeFNDakozeFNGcGFudDZiX2tyLWpLSFZwQWhGMnRJc1RmbUVMSHBZUW54Q1NLWkxCbGI0eVFXMUhGcDNiSGx4cTQ3RlRUdEVIZ1Y1b2VEQ0p6NktJdw?oc=5",
          "Category": "Legal/Regulatory",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-16 09:53:00"
        },
        {
          "Headline": "Get out if not on\u2026: AT&T CEO John Stankey's message to employees seven months after company ended work from home - MSN",
          "URL": "https://news.google.com/rss/articles/CBMisgNBVV95cUxNUlRTVkpnLTJqMTJ4VHhjTTA4OXUxckZoUWR4X0pGaHpmNEt3aFFMQm0tN0FoWGdRMmUtS3pRSHgwS1Q0Y05DclJYOHFyTkVqdlJFZm5MOUVPU2dNbUlsVFN0OFFsb1pNaFdJMEVQSVVKV1F6Q1lXV2RhVlRLY28tM2oxNXF6RG5WV0dNOTdQQ016Rk5Ga3JCOVlHNWptLVE1cVFUdnRaUjNrb1JGQ2d2RG44Q3Z4eV9LYzlJZzdOQWQzSFJLbFFWaXR5S3o2SzdBZ0tHVHpEWW9zT1IxeDFQVmZab0xNcjVvZGVaVUFQcW9jUUw4d2VISWlCcDNpWHp2SVJrVUl4QW4tb3FHV252Um9rcnFlaVpQeTJMaTBDSVRLRWh4WDItek95TGx5dGZhbFhwdjUwa0ZpMGhlMUhqQkwwLTlZTFF5V2VubV8wMkxZeGFpbG9YSUJlMFlYQTA3eGN6cG9zQlJRV3hhaVlYQXJxbUNmcDFDeldrVzNMQmkwaldnN1EzYmZsdTUteURTaXJDampNVGpmck1KWWgxcm5ObURxeTBKSmFiYTZCVHZzZw?oc=5",
          "Category": "Corporate Policy",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-15 09:23:06"
        },
        {
          "Headline": "Key facts: AT&T to Buy EchoStar Spectrum for $23B; CEO Contacted Trump - TradingView",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPa2ZSam5SX3dfU0VPZkpuRHVKSzNhdFlpc3FHcndPREJLN1FUVTVxZXV4WHJnYnY0SXpXTHc4eGlUdHNZQ3UwYmZ2R3B1SEtnVDlzWFl1VjZyOTNhVU1iQk1fdWw2UnZzTFhKN21Xaml5T19mX0thQ1h5TEk0cVJGM1ozejVXbmR2aUpBdTdla190VU5BdmV6OFFuY3RZZEY1U0hTc2d3VnFGR1FYVkRFaUROVnBYNllpQjBTMmxPVjMtSGlzS2FEUw?oc=5",
          "Category": "M&A",
          "Sentiment": 0.7,
          "Impact": 0.9,
          "Date": "2026-03-15 09:23:06"
        },
        {
          "Headline": "A Look At AT&T (T) Valuation After US$250b Connectivity Plan And New Wireless Offerings - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNYV9hN1lGdDlDYVdvdnFFOEpyRVBtTEpUX25zTjZKM2dnX25udlJFWDZCVGJUR1l2ZXBCR0FZU3I3UTMwdFlYaGlFOTh4eFZrZXdjMG9rS3FvQ0x4TExNTWNyQzFCOGpFbEFKcjY3NkxaUmhjZExjblBJMW9GbVAwVkIyZXBnYTJrbGg2aWxsb1FId1FiV0RNZDcxd3gySHEzSTlJallnS3Y5enhPcmlfSnRIN2tZZGpfTUhsV9IBvAFBVV95cUxNYV9hN1lGdDlDYVdvdnFFOEpyRVBtTEpUX25zTjZKM2dnX25udlJFWDZCVGJUR1l2ZXBCR0FZU3I3UTMwdFlYaGlFOTh4eFZrZXdjMG9rS3FvQ0x4TExNTWNyQzFCOGpFbEFKcjY3NkxaUmhjZExjblBJMW9GbVAwVkIyZXBnYTJrbGg2aWxsb1FId1FiV0RNZDcxd3gySHEzSTlJallnS3Y5enhPcmlfSnRIN2tZZGpfTUhsVw?oc=5",
          "Category": "Company Analysis",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-15 09:23:06"
        },
        {
          "Headline": "AT&T unveils $250B plan to expand US fiber and wireless access - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi1gJBVV95cUxNMnpraGFvR2xrblQydkJwQkdWWDJYU2U2ZHZoVlp2RXZuc1NzUFZiRkw3WHdiZGhBUHAtY01JTTh6bzU1N3BWMW9RT2c5WXMwZTd4TTdDYm1IdmFuZWZqUF9MdG1mWkptNE92bFpKXzVvcnlicjM1UlYwd2RLT3lBQ09jWlR2N1NnZ1Z5MUNpZEpxZ1Rseml6SF82RTY4WnJmeWpBOFM1OTFrT2xvbG1aQmtsZXZZdFRocTl0LUVmQ0g4WXh4TGU4ZmVpNnpHVC1tSUdtRnVWbjRLa2JaUE8yZ2l5c3JpN3RrcUp2MWN6NG9mS0U5TmhlYjdvd21CclA3QnBjX3hNUTZJdF9CakVqLWJtSF9fcFg0QjlUZW84SFhJNXNiN1ZqOEpYMl9WUWp1aVkyWnV6ZU03WV9QWThsb2hRYUtiY2NWbE9JZzl2TGFfcnlBQmc?oc=5",
          "Category": "Strategic Announcement",
          "Sentiment": 0.7,
          "Impact": 0.9,
          "Date": "2026-03-15 09:23:06"
        },
        {
          "Headline": "AT&T CEO tells employees to work from office 5 days a week \u2013 or find a new job - MSN",
          "URL": "https://news.google.com/rss/articles/CBMinANBVV95cUxNOEJTV295TkowOC0wWHJLNk95SkxVd3BteEhyb2s5V0dtazFUVTh0UzdDZ2lkc2FRZmVjdndOV1NwOXBfM0NPa0ZveTMyMEF1aGdwb3VCVk5pa0kxTjM4RGViVVhVdkx5cnFSVFdvQ2VacnNGUmVUWkhLRUlzRHBUYkl0SW5vSkNuTWJvRmNtbnlKQlowSjBaaWdBQWoweUhqb204emF2QjFMN2dKdEJjVjM3Z010V2pDUDFKZC1vSXVIWk9MM05FcDVyakl0YWpiN1ZtYkZSM2RSYXItdVdLNkNiSHV5VUZnSEFXZ2hsN0NBZF9tc3VHRlA3V0g1TFFrTHd0NEtWcjN6bFZSTWN1R3llMG0xMDVVWFJuU1dhalNaQWE5dUFwQzFtUFJMaVB3bW9kVG1lM1BkQ3RLOFphQmhjV1dMVGR3X1FuaFNWOU9tZy14TUN4ZHJJS2pmczBqSmQzOV85ZXFNdU52b2Z1ZnMwOTJ6Z3JzREIzZVdxM3dPc1ZLWEEyZkdsNTBMb3lmQS05YUFFRW1Yb0dy?oc=5",
          "Category": "Corporate Policy",
          "Sentiment": -0.9,
          "Impact": 0.8,
          "Date": "2026-03-15 09:23:06"
        },
        {
          "Headline": "AT&T Launches New Wireless Plans Giving Customers More Value - AT&T",
          "URL": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBDR1VyUkUtM0RhdjE1ZjcwRGJ4LVZVay0zRWEwdUloV3lZQVZWaUNPejd4cWNZcUNFQTh2WTRKTy1lemtoU2N6NFhPaGFUbjVoV0ZiSDFjNkZvZFJnaU9UVVRMUl90Qjg?oc=5",
          "Category": "Product Launch",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:51"
        },
        {
          "Headline": "AT&T Completes CAD-Denominated Long-Term Debt Offering - The Globe and Mail",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOWmNlLThkelEzbVd2a3IzcTdoell2YldzS1Nwc0tmeUhqUWpVTi1VUl9iU0o4N0N4R09wVE1jUXViSGViZUE3X3d4cnhUM3lCY0FBWmc3ZlhmczVLU3lSS1hiZGhicmFWaDd4M25ySmJ5X0QtQm5tMmVjUjI0OGthUS1ZQWpRcWozT21nZW5oSkNKbnVuel9kY2Zqby1Pak1sUU9xc3ZtZmI2aVhaNmU3SVBfeE9NS1A0NDhCRmw2ZHZVMXhJV2tLRHc2ZVpTLW8?oc=5",
          "Category": "Financial",
          "Sentiment": 0.2,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:51"
        },
        {
          "Headline": "Exclusive / AT&T CEO pitches Trump amid $23 billion antitrust review - Semafor",
          "URL": "https://news.google.com/rss/articles/CBMingFBVV95cUxQZ3UxYjZQOVJGS0ZXTkdDYWNNQTlSUTFwUTFwZ1l4cFF3YWpwOWVsQTUwcmpqeGNUb3BCdkg2LTh3Y3JHUExEOS1CVU5BTTkwMFlXUmxPT2RTTUxqRm9fNnB3YzhiOE0yb0JyMVhyV2V6ZUh3NzFHOXZEWm1DbzdvRVdaUm13MTJjd0V0LVdTa1UxV0hxa3diOW1aNGk3Zw?oc=5",
          "Category": "Financial",
          "Sentiment": -0.5,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:51"
        },
        {
          "Headline": "AT&T CEO reportedly met Trump this week amid $23B EchoStar deal antitrust review - MSN",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOODUtNkRBMjZXa1V2RE4xWGdqQmxiS240QzdqLTRBaUd1eEZkSTBKYS1oTlpxaUQzdEZsbnA3VU1ncDRpcEVVMEdGaWZvTlNEemxVWFN1WjBhdi1ac0lxQ1prMGc3eUxtd1BDVTJmV1Z6cDdPVVNWckJ0MHlEeDhja05oMGpQNjFRX244QzN6cEt1WXZ5WGhjWTU1Z0d0WjJVTnVDc05pXzEwUTdFSUViZ1I1c2tUSU5NbkNnY3RNa1V0TDJVWTJWZDdaeDdWWUU?oc=5",
          "Category": "Financial",
          "Sentiment": -0.5,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:51"
        },
        {
          "Headline": "AT&T CEO Reportedly Met Trump This Week Amid $23B Echostar Deal Antitrust Review - Mena FN",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQbzdtZHBzS1B6dFlxcnpVWmNSUjNpQzMweExPQzZ1NU1mVG8yaTE3ZU5XNDNqdFVjWjhmNkpwNGJVU0lpV2xkOW51eXhUOGY0NkpTRWRwY2FKdGJnZmVCNFJoZGJCWkx2Y2dXam5qTGRqM01TZGxvQVNaX0tPSXdKSm5uODdtekpSMG1fdENkdGd4b1RWLXJsT0hhaHJ4aDBkdnhaOUVCUjB1eXZh?oc=5",
          "Category": "Regulatory/Legal",
          "Sentiment": -0.2,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:51"
        }
      ],
      "Signal": "WAIT"
    }
  ]
};