const DASHBOARD_DATA = {
  "last_updated": "2026-03-14 09:24:54",
  "signals": [
    {
      "Ticker": "A",
      "Price": 111.51,
      "LSTM_Confidence": 0.59,
      "News_Sentiment": 0.0,
      "News_Impact": 0.0,
      "Headline": "No significant news",
      "URL": "#",
      "All_News": [],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AAPL",
      "Price": 250.12,
      "LSTM_Confidence": 0.73,
      "News_Sentiment": 0.8,
      "News_Impact": 0.9,
      "Headline": "Apple (AAPL.US) enters the affordable PC market! MacBook Neo may sell 5 million units this year; Google and Microsoft expected to be impacted - Bitget",
      "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1XXzY1RFVXV1ZGdnRhblYyS1AwQ3l4Ukg1LVFLODNDQ2dqVVlXbTYwa09vQmpsdDZnNkJYamQ4S0FxMkdnVXJKLUhRR1gyZWR3bE1mUl9CX0RPaWV5aE5OaU1kRdIBY0FVX3lxTE1XXzY1RFVXV1ZGdnRhblYyS1AwQ3l4Ukg1LVFLODNDQ2dqVVlXbTYwa09vQmpsdDZnNkJYamQ4S0FxMkdnVXJKLUhRR1gyZWR3bE1mUl9CX0RPaWV5aE5OaU1kRQ?oc=5",
      "All_News": [
        {
          "Headline": "United Super Pty Ltd in its capacity as Trustee for the Construction & Building Unions Superannuation Fund Sells 36,223 Shares of Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiqgJBVV95cUxNWm5JbVRMZWpmZGhYYWhpcHduQlFiRDgzenVHRi1KekVEcDhqdUlVdnhxbHpjbXhLOW1ZRnpXU25kYmtyd2dpcklJV1ByVXBuWHM4dEJQejVfcl8zTlczQjcxVXdkME1tdVpiNkVVVHN2eTJsN3ZhaG90LTBvNGF3Z1pqREpRNXFpLS00SFdiN1lUZmZpWlRnSllhbkpWa0k3VDFKcUVSc20tNXhaN25VZDZ1WndEMVBWUnh4UVRNSjNKT19tUS13M3VEOXBHYnh0ZzVURDgtQ2o0UzdCYkJEdmVhX0Q0T203U0lxZDZyQWhoLXNhSWotczd1SVdEc1RxeGo3MTVjZnQzV1VIYTNmUmM0ZTd3YlR5dFpUbkVpa2pCUzYweHpXVFNn?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:02"
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
          "Headline": "Apple (AAPL) Stock Cuts China App Store Fees to 25% After Regulatory Talks - MEXC",
          "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5PcXVkMllSalpaWmRNWXBEdU1ueTB0NVhjNEZxS290UFo5Rm1yemVmUmJtS3l4M0Z1XzZKcFFSQXNpU3JtY3Jr?oc=5",
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
          "Headline": "Apple (AAPL) Stock Cuts China App Store Fees to 25% After Regulatory Talks - CoinCentral",
          "URL": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMFY1MHFHMzhwdUxHVV9ZTG16YmdhdXdaaDFkTTZmSG5uOHFXQ2IxR09LRFFHT2pzNTVBNUhqR2VyT2UyY3p6MnhkYnJjZkp0VkNkNVF6NkZtLWU5ZFlwZFFRcXFVbGxHcFNpU0NveVJuN3ZHSmNlUEFOMF9BanBmaFFNS3FxcWVPLWZhQUpadFdmZnRPX2QxVnNWb0k?oc=5",
          "Category": "Regulatory / Business Operations",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:02"
        },
        {
          "Headline": "Ramirez Asset Management Inc. Sells 3,737 Shares of Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOV2VhU3l1bERtbldaTlJpZXl2MXBiUy1WWXpHMHVyY3BhVWR4YnloeG01WHhzN3FEdEVPVTlGUldiQTVVTEM4OEJIVEtqSWRkZWhaUEtXTXBSX2NmcVp5X29WRmhlaTJ5WllFTHRPWTZEN3VmVTFLQnRkcW1jaVR3QllJN3pUNDBWVmhzZzlhMXI1MzRRamRmYU5zUWJvRWdmX1lnb1NKZ0J1enFEQWNHQno5UWx0WlBKUV9BVXRfSnpoX3c?oc=5",
          "Category": "Trading Activity",
          "Sentiment": -0.3,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:26"
        },
        {
          "Headline": "Apple Inc. (AAPL) Analysts Update Coverage - The Globe and Mail",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPVEpqN3k3RTJ0RWRYSTlZMjlEbEJNaHhjWW56UzQ3Umc2MWlwTnJoRUtkZkQxd2JNZkVLYlBpQnQxbi1aRldob01scnlXTmpTNGt6WC15V3p3S0F0TEp3NUo3RW12VW84RlZzS2NFcHdLOVVHZmowTm9aX05CUk55TUstMGlsY0x2RTcyN25MRmZhZUdvdW1jMG8wT0RjVVFUN0Q3dkpWdmx3b0d5STdwTnh1OWJBU29nNUJjWkt2MXM?oc=5",
          "Category": "Analyst Coverage",
          "Sentiment": 0.0,
          "Impact": 0.1,
          "Date": "2026-03-13 09:28:26"
        },
        {
          "Headline": "Hibernia Wealth Partners LLC Reduces Position in Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxORWdmWGFjZjc2LXdDcndJUWVOWXYxUk1mSmZLVHgwMDZ4V093NkVjcG94UklaclRISVhxQ1Y4b1NsV29Ka2diZlZ4Z2pnNGcxQzNZeXY2R19ndG5tckUyaXA2bmNMeXpQZW45WWNFQlRKY1E2NkdFbjRXZEVWTnYtX3lSUHhZbVdwZDBIcnBHSE1Hdlc4OUliWEl5M2hFamFILW5SREtZeWhXY0QyNGphSUhfSjJ0SlNYanlUVVB0c1Z1Zw?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-13 09:28:26"
        },
        {
          "Headline": "Apple (AAPL) Launches Budget $599 Macbook in New Device Lineup - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMipgFBVV95cUxORHlkMVN5N3pNdTMxWXRDU1NJOElHd2VMOW91QkkyMUJWOEJrTmR4V2JLNkhxRDNsaThkejJPb3l0aWJrVlluZUxXVTN0ajFMR28tTERnMkJkdVY1QUYtdTJaM0hwbmtDQ2M1Q2RuSW9sbnZNZEtmYnNLdDQ3QmpaT3FoQ0x0OHhHRUdKR2FKdUt5QmZxRHgyaDd0QllxZXB5dlVCVmVB0gGuAUFVX3lxTE5vWktmV2RoSjVWSVFpa0tHc2JfVVh4MmJGS1gtbFdqSFJiLTRYYjd6d0h4d0JDbEROSUluS2pGQWg1NmhkcnNtZDFPaHR2N3NieDdRb1Q2dHZqUnlBemxLRWNyVzB6MWZQVDR1UVVyd25mTnNQQkJOSUFocE5zaXQ5MUFxVU45YmRWN29YbmQzeGFfZVdPNVhHRVVhZmVvV3Jzb2dhNHdjOTlwelo5Zw?oc=5",
          "Category": "Product Launch",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:26"
        },
        {
          "Headline": "Cedar Wealth Management LLC Buys 2,347 Shares of Apple Inc. $AAPL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNUE1uMkQyNmFUMmIxX3Z2U1d6ZzgtS1hOdUFyU05PN205RHUzOUVmWm5NR1BLYlVFLTNOeEk2X3lSRGZadXN5MTRmaFZVOVFSZnhjOGJkVXVUSC1sSF9qVnZEUjIzRlRjS0tHbzVTR0E0aFk3MnRaT2ItbEVZdks3Vkp4ZFgzSkVQZHpLS2JMdUFscjBzSUpNWllodkNKejRqTHFVTmVVRm9yRW5oaVJXaUJtaGwzVkhsNmw3WnJfZDk?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.4,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:26"
        },
        {
          "Headline": "Apple Inc. $AAPL Stake Raised by K.J. Harrison & Partners Inc - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNNklhTTdiOEl3TWRESlhaR1VXOFNFeEt5NWRFQkFmVmlDYzNrWXdvcENwWVNIWnBCWmE5cG9JUl84RUxSak02cmdGeWEzYnU4OW5NZUp3N1BiQmtRSkNrNXAxWVN0aEFRWjJ6MFZ2ZHVYVERoWWVfWC1mSlQ4ZHUwd2xNNWFyUXRFM2ttTkdieHFueGdnYVhpMUQ2MTZ5RmE5aEtHdHRTdzRJeUVtc1dDYmhEM0kwTTQ?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "Artisan Partners Limited Partnership Sells 58,274 Shares of Apple Inc. $AAPL - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQTk81LU9RQ1lRWGhIMUFPNzBuQnZQek1MTUdXLWxUeGFYX1ZuUDRPS2JXUU1DT0hYc2dOcV9rNVlfY09KY3puam1GNWRWSVJaUHdoaVB2NWRfMXdtQ01ZRXptSzhvenFBYzg1eDR0Qm0wSldXdkFoODFaM1lRb0R5Q05yRmZuVFZOdEZXMDA2RlNScXhQY2Q3MVpfa3UxLVkxWm9sbk5VQ2x5Y2JydGkwMlo1TkxQa3o2UVE?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.4,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "UBS Maintains a Hold Rating on Apple (AAPL) As Shipmments Drop in China - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQOGF0U01fTW1qQ2ktcS0xVnFGOE1JbnIzZV9PTWl5RlhFTWV1WlFXRkVYSURoMmJiMEh4TFdpXzVCRnlkcUFSdUdOT0ZKOEF1cktTM09QUmtFcjRnUUtNdUhGbnVsempDYmRZbW1zdmt1eWtpS2VyVEJOOFBteVB1c1pkbw?oc=5",
          "Category": "Analyst Rating / Business Update",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "Apple (AAPL.US) enters the affordable PC market! MacBook Neo may sell 5 million units this year; Google and Microsoft expected to be impacted - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1XXzY1RFVXV1ZGdnRhblYyS1AwQ3l4Ukg1LVFLODNDQ2dqVVlXbTYwa09vQmpsdDZnNkJYamQ4S0FxMkdnVXJKLUhRR1gyZWR3bE1mUl9CX0RPaWV5aE5OaU1kRdIBY0FVX3lxTE1XXzY1RFVXV1ZGdnRhblYyS1AwQ3l4Ukg1LVFLODNDQ2dqVVlXbTYwa09vQmpsdDZnNkJYamQ4S0FxMkdnVXJKLUhRR1gyZWR3bE1mUl9CX0RPaWV5aE5OaU1kRQ?oc=5",
          "Category": "Product Launch",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "Apple Inc. $AAPL Shares Purchased by Mar Vista Investment Partners LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQR1gzb1VkSjF5OU9XTnNubG9yLV92RUl5NGkza3ozTi1mNV9YR21HdmdaSlJ2NUdCNG92SmhYV0YtSW1VMXk5S2laX2w1RDEycXdKQ01yMkVvd2JLY2xsaWdrQkd0YWE2dFpvRGxvc2FxZ2NYS2dpbVpHRHl6RGkyN21VaXRxbnRuVFg4MDRIdTltUW9TRkhGWXpwUkk1MmViSFh6TzhTTnp4N0dxZkhCRHJDLW8yTWw2eDRZN2JHc29Nd2JuWURIRw?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "Analysts Offer Insights on Technology Companies: Adobe (ADBE) and Apple (AAPL) - The Globe and Mail",
          "URL": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxQNGdFU28xd29welZXZG5LN2pVVGlNVjIxeDVrODdUZlJ0TmNxS2IzMXRfeE51dS1iRy04b2xBZU1jUVRqYjI4Q1ZPYl8tMEhiVS1jTjRGNXYtcEdIUjZzQVowUjlQMFNuSVQxMmhRX0FFZjFUYjVjVXFyUmFya1BWMk05RXJybHFYTDRFRU50VzdOWHpUaklmdzBUeUE0TU9ULUVPQ2RUTHNveHZ6OGhjR0NIWEYxUWZKWU9RSE5jSldReDlkYlJrVDQyOGZPQ2Q0eGpuTFRfQlgyNXNVVEZLV2ZWRW9PMlhjY1VoU1NB?oc=5",
          "Category": "Analyst Coverage",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-11 09:31:56"
        },
        {
          "Headline": "Apple (AAPL) Stock Eyes 17% Gains on India Manufacturing Push and Budget MacBook Launch - parameter.io",
          "URL": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQRW1sblVVcEhBaGFraXpwdnhQa3JTSko5THgybnlQNGdPZHoxVnZLU2o5a0hNZTlFa19zalE0bHc5VkFXSlBLMldiOFQtNV9rUUNFV0g0UmtKc0NGLTVwajFXMmt3SE9mZ3pJZUlOQWp3X2YwUE1XT2lobUk2OGRBQTA0T0RpYzBLUUJGeVF3bFc1RnFfS2pRdkt4LW5hRDhnd01seHNpY1RCZw?oc=5",
          "Category": "Strategy/Product Launch",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-11 09:31:37"
        },
        {
          "Headline": "Apple Inc. $AAPL Shares Sold by RKL Wealth Management LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOaTRnREtUbmNrdUVsbEs5ckZUNExIRmNIaG1KOTNWa3hVQ1piMm1la2FEN1Q0R05Ja1VzdkppUDhUZEZaUTBaZHhxTzVVTFQ1Q2JQd3BKWVpnT0UyOFJzQWZKTVFCVkdMb3FKVTEycjBFQjlNOGN6djN4UjlteFhjM0FsXzBrRFBpYkg3LVM2T1E0aVhvMXZPdDdLRTVCcXV5ZHhNUzJxYXRRdEtwVDRMSXAxekxUeEk?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:37"
        },
        {
          "Headline": "Apple Inc. $AAPL Stock Position Reduced by Clarion Wealth Managment Partners LLC - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQajZLRjJXYnFxdGVjbXgtM0x3d3JaODJsODlZQ2t6Y2ZuR1p2SG1DQkk5OWdGVzJuZHo3a3pISDVwTGdsa0VrVzF6bkNkaXZvMmNFeWEyTkFyRmNTb2IzRm9zWFltUThTQUdWdlE5bGhveGxfZ1JQTXU3MTh4amJHNWZxTHUxTWRzaEtYQk1McDdESEVGR3JpaHRGSDR5QU1iTlp4X1c3UEI5c2ZCSzJocVh5WjNNVWMwTHRodnA3Qms?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:37"
        },
        {
          "Headline": "Apple Inc. $AAPL is Interchange Capital Partners LLC's 3rd Largest Position - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNZE1RTU16MFNieTdBVFBBY09hWVRLTks1WHZSbGQyOHpzWXZENUR2R3VxbnZnbWprZ1ZudWJva3IzZllRalNjR2ozZzRub19menpWdG1HNTZ6Z0lONEZXTldOODA5MHYxWkQzaDZoREVOWVNlYlczaWZhQmt1MmE0R21NbnBPM1ZyUXJQTEg1RHhtRzAxN1BOMEEyXzhzY05pMlZGdklNRlh5NlJtR0ZmZlU5QTh6eFJaMGJwNVNIdU0xcFEwWGF6ejFUajh3dw?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:37"
        },
        {
          "Headline": "Apple (AAPL) Stock; Gains Slightly as Smart Display Launch Delayed by Siri Upgrade - MEXC",
          "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTFBBYnh0cVl0cHZRRUFlcTJsRVUwMGFfYTdhTDdnU2VSMDBTNk5JdzBJa3QwdnVhMkRKVTk4WHlwT0pxampZUjM4?oc=5",
          "Category": "Product News",
          "Sentiment": -0.2,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:37"
        },
        {
          "Headline": "Granite Investment Partners LLC Has $48.55 Million Stake in Apple Inc. $AAPL - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQcDAwczBOLTBwaXUwb0NZMjFRcS05OWg5aC0wcG1CUXdOdUc2ZDk0ZV9HOE9rUGVPbFh6SFJBUjVxbkFTMUpNdXhabUx4dDFySmFDX3ZzbkE1ZWRkSVl6MWljamVPOS1wWEpoYnRpek5FblAtejRoNzVjbHlibGQ1TE15VHNiSl9xd1Z1VExkMWVZdHhQRGFhNV91eTgwWXNDQWVxMGFmS0VDcE5pcDNSa1JYOWJ0Q2RRQWc?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Here\u2019s How YCG\u2019s Strategy of Buying Cyclically Unprofitable Stock, Apple (AAPL), Has Paid Off - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOUG53bFdLaGFMeWdMWHR2M3FPenRSRnl5OVZvekRuSnZ5QmN6QzJRaVozZThZbU5fMHlZSEVPVVRxRFVjUlNlTmoyT2ZCRzY5ckRJYmx1LVFHWkU5UVVrVmU1WWN3MWY1c3l3YlFDMkEwdldoQ0xlZjFuS2JsVmprNHl2LWxUMmRBR3RicFpzTTdaTDA?oc=5",
          "Category": "Company Performance Analysis",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Personal CFO Solutions LLC Has $27.10 Million Stake in Apple Inc. $AAPL - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPNHg2ZTJ4b1FPUUw0Z1dIX2oxQXotMTM0ZVVWNG5qdk8xM0lVX2RPUk8yZ0dqR2tOdmlmc081TEtIZENMZ0RLdnNNUnAwZGxkYTdES0VSSlBRek9UczJXQWhDMEVRdHBZYmhXektlRnRUT282NU1qY002ZlZjOXhvOExLVW9WZy13M1NxN1piRHFRcWlHN3hEeTAwdEZINDhTTThtaVhMWDVIb3pEZjNXV0g0dw?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Dearborn Partners LLC Has $117.78 Million Stake in Apple Inc. $AAPL - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOdnowY3gyOU56cFVMVHNiUndDaTRlcVllZjRBSVJZbmtsWVJhdnhLOUhDbGFwR214djNHUU5vNEtLLVVNWlNoME1lanpHelpZdzVoSEM0dUtfVkVueXhSbFUwUWdwckYwZ0ppT29wUW50UEcyUUo5NEd1alZXaGJtcThBY1N2Ry0xbmVFRThpVWxlVXFBWjgxM0FCejV4Zm1JYkhNVGtEcl9LNC0xcHc?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Apple Inc. $AAPL is Ameritas Investment Partners Inc.'s 3rd Largest Position - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNNlNidG1fOExKelJrV3BFY1pzazJIVzZzM3VmLTZ1cUl0YWxDV2JLNTRFc21tczM4QjVHakk3ZmcxSmFPbGRySUtGTWFxZUQxR1VNOU5pQmFoMGgydVUydTVMaWZhZk1XaU5ibk1MblpJQzI0Nm1NX21zLUk2MG5JTk5QX2l4amR0OFVLSjE4Yk11bGdWZ3IwaXhScm85MEExR3NVSVBtb2xmSXdLdVhPT1FCUEpmYllKR2s1eUZEek04OGhOLWJJcElxTmhNZw?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "SA analyst upgrades/downgrades: ADBE, AAPL, SOFI, LOW - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNVUZRdDRhc25xX01RdjdBckRWVlJDYVJuOXJXYWRfVjZ1Q1U4X1hRTkM2c0txOFhjdEJadEtFRjJhaTViN2ktclpOd0hPdWVFbnk1Z2NOeHRJcmd0VnhqXzc2ZzBHWC1JVm5YcnJqMm5Lc0gtQ3hUU29PZG9HZG1RMEU2NVVtR3hvVnEwa0cySkg?oc=5",
          "Category": "Analyst Activity Summary",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:33"
        }
      ],
      "Signal": "BULLISH_BREAKOUT"
    },
    {
      "Ticker": "ABNB",
      "Price": 126.3,
      "LSTM_Confidence": 0.56,
      "News_Sentiment": -0.7,
      "News_Impact": 0.8,
      "Headline": "Airbnb (ABNB) Stock Falls 4% Following Unexpected $2.5 Billion Bond Offering - parameter.io",
      "URL": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPVy1FblhsMUY2V3M4V2M5MHE3ZkFQN1IyYVRCa0RrX3RJVU1ZZUlGVjNhLUZpc3JnWmVkSThfZDdISnhHMGttc2h4Mll1bEFBeEZuRW56S1ZjWTRoM01aVlUydGZvamJOV0tVLW9kR1ZnaEszX2FCZkV1bVNsdGdmZnNCT1lyWVpwa3ZaUWlPU2FiWFJFNVdxWlRn?oc=5",
      "All_News": [
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
          "Headline": "Airbnb, Inc. (ABNB) Experiences a Sharper Decline Compared to the Market: Key Points to Consider - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFAzM2FBUXJweGJTb0VwcS1ObXk4Vkozb0dpYmUwVWNsVUxPZ3BVMFNVVlVHSUg0a29YdHY4RmJ5c2dIaEtlS3hZUVBXd3lXQ0R0ZTBMTTRjTWpRenVWRDh2OGRFVdIBY0FVX3lxTFAzM2FBUXJweGJTb0VwcS1ObXk4Vkozb0dpYmUwVWNsVUxPZ3BVMFNVVlVHSUg0a29YdHY4RmJ5c2dIaEtlS3hZUVBXd3lXQ0R0ZTBMTTRjTWpRenVWRDh2OGRFVQ?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:07"
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
          "Headline": "Airbnb, Inc. (ABNB) Registers a Bigger Fall Than the Market: Important Facts to Note - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQY0hTeDBBY3VFWnhiUk5KdGZIVUhDLVR2N3FzWkpFd1RLbXp1TDRFMmwxTlMwNXRJd2I4TS1HclFkdlNqZDdTMjlRNDh5ZUdnMkw0d1UxYUVWWGRGNU1Yd3BuSTF6UWk2US1VSzNfMzlwZS1pREM0Z3hwa2tkLWxRQ2VFWGc?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:22:07"
        },
        {
          "Headline": "Airbnb (NASDAQ:ABNB) Combines Strong Fundamentals with Bullish Technical Setup - ChartMill",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPOEhUV042S2tmTFlIckdCal9meGhMaUx4eDNNYUVTb0Z6QU16RDhCYzFZQmJ0SzJRbURIRDNaZFRGWngwdXlwVHpPMk5YS2hRaGNZMmMwN24yWkJQeEtoelpib3dBbjg3QndheE5aeXZKR0p3R29JU3J1U2VFUDFVMEVsMk1mUm5ic2lHNnlGenNJSUF3WGpZeE5uakh2TTBiWWYydF9iMDI2bTJoM3FsaFREYTEyX0h0b1RFQ2RzVGx4RG9tSmc?oc=5",
          "Category": "Technical Analysis & Fundamentals",
          "Sentiment": 0.8,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:29"
        },
        {
          "Headline": "Connor Clark & Lunn Investment Management Ltd. Lowers Stake in Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOWWwyQXFQUm1qZTZXUEJ1VXl6N2FZVDFVSzFKYTdVc0ZBRmltTmxzSHJsN1FmQmVvLWRQYWUwZktWejEtS0F5ekw2eXBDOTZRdWF6SUxENnJabzdOOFpPRFVYUXdwRnJsMWVZR1c0RWRQSjYtdUZSUExIVlRtWlF1OXNCbUI5a3BtX0Y3RkpMczRKbEVvVzlOMDhEM19MaVR0bllRSGZOVjVRUlJnR1dLcm9JUHliQ3NidlBvYjJqZldWWDdqZW1HeFNMYWdVUTFXOXc?oc=5",
          "Category": "Institutional Investment Activity",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:29"
        },
        {
          "Headline": "Airbnb (ABNB) Stock Falls 4% Following Unexpected $2.5 Billion Bond Offering - parameter.io",
          "URL": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPVy1FblhsMUY2V3M4V2M5MHE3ZkFQN1IyYVRCa0RrX3RJVU1ZZUlGVjNhLUZpc3JnWmVkSThfZDdISnhHMGttc2h4Mll1bEFBeEZuRW56S1ZjWTRoM01aVlUydGZvamJOV0tVLW9kR1ZnaEszX2FCZkV1bVNsdGdmZnNCT1lyWVpwa3ZaUWlPU2FiWFJFNVdxWlRn?oc=5",
          "Category": "Stock Movement & Debt Offering",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:29"
        },
        {
          "Headline": "Airbnb (ABNB) Stock Falls 4% Following Unexpected $2.5B Bond Offering Launch - MoneyCheck",
          "URL": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQlIxeVRtazdGZTJNVmktOUJ3MnR3SzFfQjVFLXBiR3RoMUJKOEl4X0tEUnYtVU1QTUdLSm1ySE1mbXAwbjRGYWtMWEJUN3dHSHlFcklYZXdVb1RrbkZNS3ZaQk16ai16T3NZUlJHOEFwdGF2ODZaTjBPT0REYTBXYTl3bXktTjc0T0F3dTNrc3NNcU9BcVBNYkJxdnA?oc=5",
          "Category": "Stock Movement & Debt Offering",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:29"
        },
        {
          "Headline": "Airbnb (ABNB) Stock Falls 4% Following Unexpected $2.5B Bond Offering Launch - Blockonomi",
          "URL": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbWJ6ekJicGt6WDMxWk1QQUZfckpZRnZXZlhacmIyUWZfVmVxcXI5QlFxM0F6UllPbGxzUi0xb1NFUWhhbnh6Q0NmNWZEdG5NY19GTXJrWG9hNVFuY3ZCY2FScVlsV2FwQTBxS2o4Z0U2WkxyN0ZZMjZ0VXhsX0lpTWJlUUlDMzV1NTVLSW4yRXpqR3NCWGFoY1k5UmY?oc=5",
          "Category": "Stock Movement & Debt Offering",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:29"
        },
        {
          "Headline": "Is It Time To Reassess Airbnb (ABNB) After Five Year Share Price Slide? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOeG9wd3UzNmRnejZicE9fVWFITExVUDRBOEVlNkxicGtqM1JEWUxmVjJhTWt4YWJQV1hyX21Kc08xMXBQamlEeWY1XzdJb25jWUVCUEd5d2pQeGFaQmlpbW5ZWWlHMl9Eam9uc1U5QWFod3g3emsyRWRDa2cxLUhHTmZn?oc=5",
          "Category": "Valuation / Performance Analysis",
          "Sentiment": -0.3,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "Insider Selling: Airbnb (NASDAQ:ABNB) Director Sells 58,000 Shares of Stock - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPUW1jUXJQOVA1c3hyQTJWY0JDV21ockpQdk1YS1FMdG9kbmU1MF9zUFh2SnV5NlRyTEtnamM3SU9IZ2R0UUlOVnlnU1h4YmNkbVlranI4WXZpTzZYanVZVkoxQzg1R1dVbUhnVllPRUxYNU5ReGVqT0hjbERXY3JfQmNNc0xNVmpxNE9zRVJUMERhRUVFbTN4MEc2TVBjazdfV1FIWm1pVWxsejRUdjZmWVc0OThNNmxJV0RjNU5MclNRQQ?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Shares Sold by Richard Bernstein Advisors LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPTUJPY1hfeHJWTXBCNXdtbWoyWTlPWkVfZkl6WmxGTHp2VHN5Rk9FQ3lUaU9rZ2RnMjBGZlNfb3JSQkN1N0ItWUhnZUxETVJZdHJ1eThFZWMzTXZ6QWRQX0J4MW9tek1nS1p2a0JjcTZjTWFGM19HWjhaMFdTNjEwYUdtcGRfVExjLVVPa21DWVl5M3lNb2lfR0hpSHo4NFVjam1rdWY1MXBVdXV0eXJMNGdJMGxsU3k0VE9RSjVQTQ?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "Schroder Investment Management Group Sells 35,309 Shares of Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOVXk5OFhfN0R5eEFDMUNQb3NyckhyM2QwS0RqRVVYNUpoTDE5WVVkN0xUaE85OGNCVjRpSnhDeFNnZ0dsaDZtSDBjdXlWcHg1NXRGeGdKVlE5RzZqQnlmUWQ4R2ZvT183aHhQT2lNOHBaeXVyaTV6NDVVVUxZUk56Snh6LU9iUkJNVlB5WjJaZVpXdGhoc0lNWDlHbTNZd2N2YlBVUVNxQWNiQXlFeWthX0J3cHNtV1lCT0pWQy1DT0xlNXdRemFnTFlsZHlOUXJR?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "Van ECK Associates Corp Acquires 1,373,375 Shares of Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQTDYzSDhEeEI1M2pjU3FSeGUwYWZBNkhmY0RSeTR3MnA2aFZ4QUNRNHBJNHF3ZFlFSTBtY0pNaUwxQnNTb2lHT09XWG1VZXkxYnRkTXBNc0xkZ21QTjVLTmpDMmhtcl9MQ19hb2tzSXF4ZkVQcVpwU2U1N2pfYWZCVHJ6UHlLRk5DODVTVzBfdlpEU0puNHIwSmNjaF9tYTZudlctb1hJNmpVa2hmcW1neElLbkVST2k2ZlVIYmJvUWt6WVI5V0E?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "Swiss National Bank Sells 74,800 Shares of Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQakxGMERxMTc4UEpUQjBzQWpWNTRoM3c0VkpoNkM3UVVzMFBkRWpXMGlvcGJFa042Y3l5T09IMldQSngzcXh5ZjR0cmNXUDFkNnN6S1BsM1U4UllDQXNhd1RBMGFVWnZ4UWJ2S1BGY3o2MzB6T1ZRbWV3b3M2WkI2TWNMXzc5SVZ5bFRsaVpiMk1Ga24zUU1XWHM5eWkySVdySnFKcmxrWFdGU1JzVFB3OG5jeVdJM2wzbkE?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:41"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Shares Sold by Blair William & Co. IL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOelJBaW1JTGhaR3Zqd1FoUVQ4OFFyclI4OXJoZE9vSFlaZlBNLVltQ1FNVTlpQS1MbHNzMENuOWhBaTQ4VXd3eDItMjFIbFFkXzZ3ZzQwMDd0MzhVcnVJeEJWcWROTWZZcnNLVkp4SHhUMjAxck01MmlrQ0xVMU9TSnpaOUNSdUhpWEwxVzI0eUpoaEZCd2l1SmdOX3FlTFF2YVljZS1lcWk5emhKbnRlcA?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.2,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:31"
        },
        {
          "Headline": "Meiji Yasuda Asset Management Co Ltd. Purchases 10,739 Shares of Airbnb, Inc. $ABNB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPZ20tTGhYZGFpaTlxN3dVcXBOa3V3aHY3Ui1lTkhCVEZkdzRUU3l1RmVvSHgtel91ZzhybVE4SkZUZV94R0ZYYWdEZzdCNmhXY2VIbm1KSnFlRENIMmRIdnBsVW1FMXJOTTFWS2VMOXhYXzByWEpCX2ZTUUZrOUk0TFVhekdnT2x4VlIteVYtTFQzQUF0RzJmYU1GdnNLb240TU10ZUVPN1RIYmV1Y01fMFNNWnllc1VnVTYxUFhscTVsUHFEQ0hpZFYtVmo1QXE1QkdldTZB?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:31"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Shares Sold by LGT Group Foundation - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQbWN1bm8xX3lGeXJvMFVab2YtelhIX1RRZGQtTldoRjh1NUVhWFJPSlpZVHV3QnN2ZENJV1JybUdTZVBYbGx6Q0I5dFFKZ1dtemtlNnVYa2ttVU02enpkM3NsalE1dk1WUXJoN21QdmxReEszYTFfT1ppZ2lUT29EcHMwbWdfOUhwNGFueEkzZHFKSUEzYTN1aEZHS04tQnFKQkdmazZMLXpfWGp2TnN3eU93?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.2,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:31"
        },
        {
          "Headline": "Insider Sell: Elinor Mertz Sells Shares of Airbnb Inc (ABNB) - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT2RxeVZRQVRoTWNOSDdjNUQ3b0RtNS1MZXNWX2NtVDBwY2Jwb3VQNmFqb1d6c08wTEZGUUdoOUxrQ0ZRQXBnbmJtZndSSGs3QWU4cWNWVUt2OXdiQjB5VGFxcUZ6aUdxWTVlWnFWWnpCV0lyNjM1SllPODJQMTVJLVk1NDRWR0V4NWJtRFBzWm5tc05GVk5kNWwxSG8?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:31"
        },
        {
          "Headline": "Airbnb, Inc. $ABNB Shares Acquired by Korea Investment CORP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOMEVMa0oxN2ZfdGt5NF9ndVNFZHZRbUZWOXlJbG9jeUdxU1lKemVaNTRYNEdxQ2FGc3NfX3FVamhwYXJzRmk0Nld6bGNOcjNId0t6VWIxdGZ6TllMaVd6cHJGcEZtQ2J5OTFXdmZrVTVBZUpOOFh5VEFQY2l4TWJVN3M0d2NVSThteVdmX1pVRWpWZ0tSMGNRVGo0TnR2LWpFbkZTYVQ2Q3BwZ0lMeVNBOTVVc2haODZF?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:31"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ABT",
      "Price": 108.03,
      "LSTM_Confidence": 0.83,
      "News_Sentiment": 0.0,
      "News_Impact": 0.7,
      "Headline": "Q4 Earnings Highs And Lows: Abbott Laboratories (NYSE:ABT) Vs The Rest Of The Medical Devices & Supplies - Diversified Stocks - StockStory",
      "URL": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxPMkZNT2VfaGZZZGlVOUhpQU1fNzVMUm5neXl2cjJYYTZZSU1kdnRuYXdPNE01Y0k2NFRjdlYtemV6N19IWkVhblVuYTRxTkVhVjVDNVNMbUdUUFVKb25sZXEyY2t1ZHF3RkRkODFIY01fWmNJamNNb18zejhwRWpaZ3htU1pZZng3N3JVMUdiR19rV241azlIbTFQY2dZOXMtNWo0UEtYaWtlS0lRNTY1dkJnVjNXSkFMQzU4Qnp6THVhVTJheVdzQlhYODNBdno0VHlWQm9ucUNDWFkxbmQ5NF92cU1fYUlKaHlJVmdCTEtldDE0YmJ4bFF4cjQ2WXhOR3B3MG1lOUc?oc=5",
      "All_News": [
        {
          "Headline": "UBS Maintains Abbott Laboratories(ABT.US) With Buy Rating, Maintains Target Price $158 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQWTZGNUFJaFFZX1FXbHo1WEc4NTAyMXRPZFdVLXlyeHdmZnBudFJqQTMyS1lQV1E0V1lLMGJNQkh3NzAzOU00UkJuRnZYa1dnTWswNDlIcTBDQlJyVHdYQWlOcWJ2Z2hlM0d4cTNNWko5MVhkcWt3a0hGdjJnUURvVDNuQloxeHNtWFlRWDBSWlBldWtGRXpBUlAwLWlGMjcwRTRKV05MTWUwUk1yMnhjM2hkNA?oc=5",
          "Category": "Analyst Rating/Research",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-14 09:22:04"
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
          "Headline": "Q4 Earnings Highs And Lows: Abbott Laboratories (NYSE:ABT) Vs The Rest Of The Medical Devices & Supplies - Diversified Stocks - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPeVpVN2I3X3lJNXd3TXJmRWV4X0RvRDdYR3l5a1k1SjMxUlhsWHdrUUNuZ1JIaUg4czdhZlA2VDVIallROFFuNmZXcnNzS1d3Vm0wS0tLMmlFVWdkUThsRDZYdTdZV3k3WkRjaUZSMUQ3dkRKYm5ZOVBjMVVBdTRjYQ?oc=5",
          "Category": "Earnings Report",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Abbott Laboratories $ABT Holdings Trimmed by Elevatus Welath Management - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQWFpMMWwwd3gybFpPTFVIeldsVmRaZnJTdDI5M3FnSjB1Q0Q2SWZLWXBHb3pZZTMwN1dSc0ZvVE5mWDBWS2luX0lKcWlaU1kyWTB4VGQ3dV9hV2xKSFdRTDBhdUtyOG5BeTk2Nlg1UGR3dFhEb1lXQU9IUHV6dGM1TjMwMkJndEF5UDNXWmRKckg5bVdTZG5XaXhDWlpMSWJhYmQyLUo1NHVqN0V1SHRROUNudmQ1bG1JeHdkOHlYR1VWU0k5UzRlMFlrOA?oc=5",
          "Category": "Trading Activity",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Abbott\u2019s Freedom To Work Plan And What It May Mean For NYSE ABT - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOc01MSDJXblRlNl9HZjl1dUsxczBaY2FwWWJnUlV3bkloclpYZlN3S2d1bHJ1Q29DWjI2Y3lVbmRiZURSNElCeVpORVR5UkdqZTlGQlhsaUwyNWhXSHJ3dU11a25XUUs4WG5ENXoxODJkcEpnUjZiNHIzVXFkc3l6THdHcm9EOFJQS3lONjF2V3FTalphazNQdERnQ2VtTEktbHhieWx1WDZLT2RCclh2MGZDUUdWcnF0OW53X0d5S09ib2NKeDNZZzlMc3o4eWFXNFBJNkZGQUnSAdgBQVVfeXFMTnNNTEgyV25UZTZfR2Y5dXVLMXMwWmNhcFliZ1JVd25JaHJaWGZTd0tndWxydUNvQ1oyNmN5VW5kYmVEUjRJQnlaTkVUeVJHamU5RkJYbGlMMjVoV0hyd3VNdWtuV1FLOFhuRDV6MTgyZHBKZ1I2YjRyM1VxZHN5ekx3R3JvRDhSUEt5TjYxdldxU2paYWszUHREZ0NlbUxJLWx4YnlsdVg2S09kQnJYdjBmQ1FHVnJxdDlud19HeUtPYm9jSngzWWc5THN6OHlhVzRQSTZGRkFJ?oc=5",
          "Category": "Company News",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Q4 Financial Results: Comparing Abbott Laboratories (NYSE:ABT) With Other Diversified Medical Devices & Supplies Stocks - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE4xQXNPeDJEcXJtWEJfd0tEM3Y2TFlfcXJQN3R6c2Zxd090eWZWUW02MVF3Y3ZzT0diVnc2eFA1RVRTVTJIV2lJT0dkelZ3Z1R0N1dSODMxdWJ4VW5mWWg1d2daUdIBY0FVX3lxTE4xQXNPeDJEcXJtWEJfd0tEM3Y2TFlfcXJQN3R6c2Zxd090eWZWUW02MVF3Y3ZzT0diVnc2eFA1RVRTVTJIV2lJT0dkelZ3Z1R0N1dSODMxdWJ4VW5mWWg1d2daUQ?oc=5",
          "Category": "Financial Results Comparison",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Citi Maintains Abbott Laboratories(ABT.US) With Buy Rating, Maintains Target Price $136 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPcU5CQVZuNmExV1RuS0F0V1RtajI2RGpiYW9DOXpqZ1dhb2JiMzNiaDlDMXVPZHl2dUJDRmthUk5sU2F1RlZEdERmTUIycENUbzN4LUtOUUJZTmFQWTNxTm85cVlpWXlScXJfRVA4d2FkcUx1RXUyZDFUa3A0VE5KazhHNzNMT1ZjekdMUmZQUTBWLTE3UFVOMnBQQjVsZ3Y3eEVRbkFxNnk3YktPMW1tdzdTbVU?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Mackenzie Financial Corp Buys 29,440 Shares of Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOSWwtOG5oVklVdDlyVkoxRXJrSHdZZGJibzNQWXEtR3ZOcjVjUG4xeUZLV0U3Mlg1Ql9wQU1LektZRjJMU29DT3E3bHZFS1R2Zjh1TWNZTUgxdFJyRlpYTEV4VDZYREU1WHQ0TTY4NjF0UUJpTjdubjRiUXdha0FOamozSlh4eGNHV3ZxT3E2bUhfR0txSXZVUk44endTbFEwZEpjbTZVZHptVEVpN2NMUl9OYzdmMDVCVFlXV3B5YWo5ZjdqS3p6dXhR?oc=5",
          "Category": "Institutional Buying",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:13"
        },
        {
          "Headline": "Van ECK Associates Corp Has $50.42 Million Stock Holdings in Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxONDd3RFNpZ3I2ZWwwNl82OEJuUnpBcVlsWTdjUmtXWWhoUUJ2NzZhWXVfdkxDUWkydEpwcVVEcVpxZXBDNFZKTE1Ub2hWVWxDYmpSemlQWXM1TGVjSk9qN3VqVTdPYXNsN2ZrWnU0MlQ2bFc4SEU0SEZGSThjR0FUTWVudm8wZnFmRnhGY2cyNjdjVV9RaVFDakdTaTNvak1adldSbHdTZXFHalU0a1RYc01QZll3TmZfTjJKdmZDWHgzRjQ5Vld3UFdUSDhDS1NNQmlHTFlyN1FiMFU?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-12 09:32:13"
        },
        {
          "Headline": "Rep. Gilbert Ray Cisneros, Jr. Sells Off Shares of Abbott Laboratories (NYSE:ABT) - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPcEUzOW1VS1o4c0ZnV2tLa1g0VzRFVTlWN0NsTWFySEQ4QVdHV0hDZ3VEZW9OVmNYVzZXaThWYjhVU2VGbl9IRFUxaG1DMkJnbVhTNXZZUEtFSkR5azZCckg1SFhrZndoODhJYThTeVlNazN5WEVjb2lGc1JxZzlsdkRmcFFzY3o0Y04zdGh1YnowSV9uRjVmUGIyTGY4MUU0RTluWVdadjVyeXJQaW94a1NZYTNlNlk0S0FCLWxEMHc2YzM2a0lIRQ?oc=5",
          "Category": "Insider Selling",
          "Sentiment": -0.4,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:13"
        },
        {
          "Headline": "Q4 Earnings Highs And Lows: Abbott Laboratories (NYSE:ABT) Vs The Rest Of The Medical Devices & Supplies - Diversified Stocks - StockStory",
          "URL": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxPMkZNT2VfaGZZZGlVOUhpQU1fNzVMUm5neXl2cjJYYTZZSU1kdnRuYXdPNE01Y0k2NFRjdlYtemV6N19IWkVhblVuYTRxTkVhVjVDNVNMbUdUUFVKb25sZXEyY2t1ZHF3RkRkODFIY01fWmNJamNNb18zejhwRWpaZ3htU1pZZng3N3JVMUdiR19rV241azlIbTFQY2dZOXMtNWo0UEtYaWtlS0lRNTY1dkJnVjNXSkFMQzU4Qnp6THVhVTJheVdzQlhYODNBdno0VHlWQm9ucUNDWFkxbmQ5NF92cU1fYUlKaHlJVmdCTEtldDE0YmJ4bFF4cjQ2WXhOR3B3MG1lOUc?oc=5",
          "Category": "Earnings Report Analysis",
          "Sentiment": 0.0,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:13"
        },
        {
          "Headline": "Abbott Laboratories $ABT Shares Bought by Franklin Resources Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNSFZPSncwZTF1RE9nRHpZZFBveDgyUU5ITFZicTlWZTNBY3VIYXhZYVNQeFJoMmU1aWJDalpROVJBOTlkS1ZWd3hMNnhZYVFJSnBNekNoaDBTSWs5aGdDaElualU2UGZRUF9xcnllZmw4bUpQaTNKVEtrNDdHQzA4Y2x0cXhXVmJMTkFzWG8wVG9RZUlXRmItdjBiS1J4djdBVVpWSnQ4bzIwTGhubXRTNWNMd051TkZNb3JMZElVN2I2UQ?oc=5",
          "Category": "Institutional Buying",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:13"
        },
        {
          "Headline": "Capital Research Global Investors Lowers Position in Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQeFE5aXlZOWpYcm5aNnhPZHZySGxZTWJUbFBST2JFbEgtTXBNMUxfS1ZlbTExOTUtQUpNNTNNTXZnUkNOTUNpdk9zeUUwbXg1bzJDdGl4bVJubFRYU1AtSXZMdHBoNlVwVE14SkhnZkFha0NJekotaEVRSnVFMVpjOGYyZUtHdVRNQUN1eVQzXzFuUXRvZlJrdmtyRWZzVkx1YVhBbVhCcmw5b21qcUFtSG14QWNHbl9LVmpobDJpUk1USG52RURBck9yZUVJU0NXWVk4?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:36"
        },
        {
          "Headline": "Capital International Investors Acquires 1,478,076 Shares of Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNU0ZqVHRlSk5sVms0NWlGd2lrRGx6VVBVN0xWZ2NwZ3laaVBhM1Z2c1VXNzZmTDlEQ1VGeF9WM3ZySkFHSVpKWGtNOFpuQlRhSUR6eDBOc0VFQzJwSWdKdGlJMVI3T3A5Ml82am13Rm9uVGFmblhtYWpRZ2o3ODdXTU9EX2FOMnRSeUlEQTZDMHY4RnNkcXlBRFh5TmJwS1NtX29TdHU5RGtlN1c4T1pFUUZYaHZRdnQ5bS1oaVlsVGt0VUdGX3lGQ2xKNXlMZDNQWHhHbG16ZHFBdVU?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-11 09:31:36"
        },
        {
          "Headline": "Capital World Investors Grows Holdings in Abbott Laboratories $ABT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNcHJ5SjZzdmRJV3oydTZ3T0lNSGFxeTc2UUdKOHY3M283YUxGanl0azdveExwVVJkeTlfUklpa3JrSXY3Sk1LREZnNW9xMExpdXBTUFRlcmRHQ3JpZk9XYm9ub3BEdG1YU3NfaXk4c2ZOZFVRVWFlUU0wZU5zeDhfZ2lUTTFkZV9vSWNxeVZLMF9XbHE3a3NGZ0JHLVRYYmJDT2NRd3A0c0ZYMC1XVy0yRmI4Yk9CM0piOEUtWEZ1dGR5S3Ru?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:36"
        },
        {
          "Headline": "Is Abbott Laboratories (ABT) Pricing Reflect Its Mixed Share Performance And Growth Prospects? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPN1g1OG1KcXg1d3NaVVc3aER1YlJYeDEyYUlfNGkxalhfREVnREhmbFBLUG03TGtXT3VFNlRUZ0dyRjJxT3hvTHBRSVhNZDI3R1pEQjJ0alh6ZHF6ZHVjcTNCZVdUN1ZteDlTeTVfRHJVdXY1M293b2stX3UwNkNQQkdRbzNaUjV4Q0ZLakRn?oc=5",
          "Category": "Analyst Report",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:36"
        },
        {
          "Headline": "Abbott Laboratories $ABT Shares Sold by Richard Bernstein Advisors LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQRDIyQXVnOWJzUFF4SFFrb0xNODBndVBxbnVvQUlrcGFHdWZhRW9mdHVLdkdzLXAtX050VG5XLU00NmlyTW9rYjk0UzNYOTdMVjFGQnV5ejc3VW1ITEZsV0JwTjZJenNaVHFmc2pENHBDb3pETUdFYmUzWVJVUEl6XzlWVW9JV1hEeTVqc3pWMUJyNjhIVjlzOHlGVmplcXJmdm1vSG1aWE1TRWxqOTVfeUd2anBHQ09Lb1M5X09oNEZLelUtN0FCQllB?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:36"
        },
        {
          "Headline": "Abbott Laboratories Offers Long-Term Upside Despite Recent Stumbles (NYSE:ABT) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOQnlva3BHTXhBMDJXcVZtM1l2UzVBR00tQ3p1ajNjS056ZHpCdWhSRUZ2WHFBaVQtLVVnT1JLZEIzSmRvWjNrX085cWU0dG4xVXQxVThzeThaQ3paRjVYSmQ3WDBoZWowTm0zYUhCWUZIS21qOFc0clNSRnRNZGdXU2EyblBvM0tOdkVpajBfTFZUdllKVnU5M3pVaTdZOGJ1ZGtwaEE2Q0hwS1E0?oc=5",
          "Category": "Investment Analysis",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:44"
        },
        {
          "Headline": "Abbott (ABT) Rises Higher Than Market: Key Facts - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE92ay1vSW8zbEhkZUx0aVVaengtblJkazg0MUdWWEM3N0QyVC1KS1p1R04tLXJZTDRlQmZhcjZtY2w0eGs2eXI2WWdGN2ZiaG5rd3BESk81ZlJ3cEtMZV8zQWlQSdIBY0FVX3lxTE92ay1vSW8zbEhkZUx0aVVaengtblJkazg0MUdWWEM3N0QyVC1KS1p1R04tLXJZTDRlQmZhcjZtY2w0eGs2eXI2WWdGN2ZiaG5rd3BESk81ZlJ3cEtMZV8zQWlQSQ?oc=5",
          "Category": "Market Movement",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:44"
        }
      ],
      "Signal": "VOLATILITY_WATCH"
    },
    {
      "Ticker": "ADBE",
      "Price": 249.32,
      "LSTM_Confidence": 0.78,
      "News_Sentiment": -0.9,
      "News_Impact": 1.0,
      "Headline": "ADBE shares plunge as CEO Shantanu Narayen announces departure shortly after strong Q1 results - MSN",
      "URL": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxNV21mUUMzbTd1RkZ6N1JqUE1kSnNyXzNRVUlZOTFqRDNkQnZpNktiZXJiR1h4cHVSLVRycGRHSEViMUVjUVljczBLbFd4VXVxSG5GSldrRk9qUmJ0a3BNV1JDSmlSUzhPOGFsOXEyTE56OXFBOWVhTjhRREg2REtjMzQ5ZVJWSTlTVlIzOTJ3OC0yVHNyb09LMHFvRDg4NzczLVlseWRzZGx1bEtoZWdCV2pkb1ZWWFB2MjdIM1lvUmlPdzJnbGVBRldqbzM5OFRBcHkwZEE3NF96QVNZbHJ2a0Y0aUYwNUVyZjNraTBiUkkwdHE1Z0Q5SVprQUd1UQ?oc=5",
      "All_News": [
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
          "Headline": "Adobe Inc. (ADBE) Releases Q1 2026 Earnings: Revenue and EPS Miss, Strong Cash Flow - Quiver Quantitative",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOTklWZlVNMGtlbm1RYjZQMnRUbmV0YXpfM29yWjdFNmM4Y1pIUXZpT3FXV3l5cDZWNUdoUUhjLWVJQzVJV1VlRHdiYnl2TUFzLTFIZ2QwakVEZmZEM01zRDdNRnl0MEFuQjRWQkk1Ym5VNjB5dlBKSUk4eG5DQ3VCNlo3U2tvRjhmU2JlRG5mc3pIalhkaDBoeF9XRlh4dFc3S0p1ZE5WaWlQUnQtbE50WF9qQjRoNF9hUU5GMTNtaExIQQ?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.4,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:14"
        },
        {
          "Headline": "Adobe (NASDAQ:ADBE) Releases FY 2026 Earnings Guidance - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQakJIY1F6UzFSUVBMSjZkc1NMSXFCdDVBUEtEejU1OG1GMVJ5ZDRrclAxZUJ2ZVllWE93OWl6WUtTOUZpM3gzekQzX1AyazJJcFRaYXdZNnloM3pPVTBOdXZDQU9PbGZoZjQ1Y3lOWGdWYUpTT3BLRFJLb09nem9JNElQN3d3V3BSTUFCekw3bldFWENtU0ZnUUw1LWVCbkpuR1g5NExjUXA?oc=5",
          "Category": "Earnings Guidance",
          "Sentiment": 0.0,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:14"
        },
        {
          "Headline": "Adobe CEO Shantanu Narayen Resigns: Implications for ADBE Shares - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE02eUEzbWhudG1ORDd4UnBoVHBaZzRSVGJvLWtrS2xpZU9YWUlIcFVieEZuM2hwV3QzNDZYMldHdmpONDE4X1l2WFdLTG5Hd1FQTjVpazA2bzRCb09VLWfSAWNBVV95cUxQdTVDYW40cnFudjNmczNtNXRVX0h3SkhqV0NWYnBrRGN5MDBZdkNnM3VVSFdZUFhNai1Uel81YVRZTy1nLTB0UmJaRVdGVXVDeExlcUdRQVBqM19DalZFd2hKSEk?oc=5",
          "Category": "Leadership Change",
          "Sentiment": -0.7,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:14"
        },
        {
          "Headline": "ADBE shares plunge as CEO Shantanu Narayen announces departure shortly after strong Q1 results - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxNV21mUUMzbTd1RkZ6N1JqUE1kSnNyXzNRVUlZOTFqRDNkQnZpNktiZXJiR1h4cHVSLVRycGRHSEViMUVjUVljczBLbFd4VXVxSG5GSldrRk9qUmJ0a3BNV1JDSmlSUzhPOGFsOXEyTE56OXFBOWVhTjhRREg2REtjMzQ5ZVJWSTlTVlIzOTJ3OC0yVHNyb09LMHFvRDg4NzczLVlseWRzZGx1bEtoZWdCV2pkb1ZWWFB2MjdIM1lvUmlPdzJnbGVBRldqbzM5OFRBcHkwZEE3NF96QVNZbHJ2a0Y0aUYwNUVyZjNraTBiUkkwdHE1Z0Q5SVprQUd1UQ?oc=5",
          "Category": "Leadership Change",
          "Sentiment": -0.9,
          "Impact": 1.0,
          "Date": "2026-03-13 09:28:14"
        },
        {
          "Headline": "Adobe Inc (ADBE) Q1 2026 Earnings Call Highlights: Strong Revenue Growth and AI Expansion Amid ... By GuruFocus - Investing.com Canada",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOR0RaWUtrNUl6al9vVHkwZ0lpNml6cmxXczRMVERtdC00U3dHcnJkcmo0X1dOU3A0YWtlRnJ6ZmhTSkc1RzA2RHlMa0ZfeEVCTHluZTdNN1NTeHFhdEZ3RjBtcWtBNFVYLUdaX3NXdDFGUEpwNFkzUTZmMUFBQjNSN2ktQS0welR2Mi1HdzhYVVl0NUt6UndISlNuQ1RLc2lkTkFLcW1wdEZiOHJYcVBxanEwWGVoejkyZ1BZTnBjc2gxX0kyTzV4NmFyVWhkckdRT1RtVlc5bzZmclU?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:14"
        },
        {
          "Headline": "Adobe (ADBE) Earnings in Focus Amid Price Target Cut - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNUWlCV1ptWlA4UW9KOURVbnZLMVJlSm5HeTRDRjRnMzlSdk9qMmdscjZYcmtrUGFodzNTLWNPZ3AxbUh4c0ROWHZsVDZFX3EwZnUwUUJmeVp0NzZ1RjJwMWhQSFBfTGdTejJmRWkzNDRxeXA2eFY3YUZHRjBYTkFodVpkelVrc0I4M20tNW9OZDkwaDQ?oc=5",
          "Category": "Earnings / Analyst Rating",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-12 09:32:11"
        },
        {
          "Headline": "Adobe (ADBE) Set to Report Q1 Earnings Amid AI Expansion - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQMzJjWE8tS1BTcnVfbmxaeDVWd1BGX3VNallNQmFYdUNPa3hZS2xETXphUzg2bG1MUUxLbEM4eUJrRWp2cmhNWmpuc3FGMUsyMThpZGNXWjhfcTZwRW9TNnFzVV8ta2hVZWItZjVzZlF2QTNLZHBndTA1R29YM1FpeU9uMkpneXpBU1JONG4zdXhKUVB6NERySg?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.2,
          "Impact": 0.9,
          "Date": "2026-03-12 09:32:11"
        },
        {
          "Headline": "Polymarket Odds: Will ADBE, RBRK, DG Beat Earnings Tomorrow? - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOMnJyLTEyUmQwX240YlF6UUFmaXgwODlYdGlDWVBLTWNyV2lWVjNiZ3l1S0dEeTV5SUdmRXU0cWRYd085czlfUi1yaV9VNHNUcUc2RGtBcXd2NTRObVVLdTdvOTdoVm1yWUhqMnF0LW1MOHlfaXA4QzJ5ZTY5ZzBqZFhKUGF3OHpEYVhRX3l5QQ?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.0,
          "Impact": 0.8,
          "Date": "2026-03-12 09:32:11"
        },
        {
          "Headline": "Atika Capital Management LLC Acquires 16,400 Shares of Adobe Inc. $ADBE - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOTzJ3Z19lTlpRZmNmc0xUX2h5azJWdy1lSUJxdzdJdERfX21DcUk0Wmc3NE5DVnRIQ3ZZVVRKd084ZV9ETDF5NWtYcWlJX044WGdzMlFDNEpfX3FqSnhOMDJTSXdEUzhnRklzc014VUVmRXF2YXY2bmgxTS1nVnRjLTFYaXlBeTBZTnU3c1l2ZkFoZWp0TFFvcHJRZGMwalR1cGZ6RFpxWUlYMGZQaVFEZ1A3LUhEYWkzY29Dc0VoWmQwSEozS09jMw?oc=5",
          "Category": "Ownership Change",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:11"
        },
        {
          "Headline": "Adobe (ADBE) Earnings Awaited Amid Stock Pressure and AI Focus - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQNDhNNjdUZTZhM0VzeGNHN0d4XzdYY3NNZHYzdVhLWjhKaEFiSTJsdDdHOTdtX0tXZ1BtX0Z4OGJnYWJfVG5LUG5hZll5N1c2WTV3MlhDa3ZmcGtPZmFZc1psQ2lXbjJfc0h5bkduSk90VmhIT0xaZjhhVGZyUXdScURQd1B6NEc2OFNwRXBXYmV0cmItWldYdkhEeTJ3WTVn?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.1,
          "Impact": 0.9,
          "Date": "2026-03-12 09:32:11"
        },
        {
          "Headline": "Adobe (ADBE) Stock; Falls Amid Beta Launch of Photoshop AI Editing Tools - CoinCentral",
          "URL": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5EU25PVURTWi10Y3lwS3RXNzFiRUZDMGhqRGJ5VWl5X0hKMF8wT1lhU0NyTmdJNG1Jbm12elAwYk9oTTlCaXMwbkhvRTlGc1RrY1RYNERCUDRnajR2aVdpSW15aW9xQkdHdzVmZTd3VFQ3eDFGWFNSZnhRb3M?oc=5",
          "Category": "Product/Market Reaction",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:56"
        },
        {
          "Headline": "Adobe (ADBE) To Report Earnings Tomorrow: Here Is What To Expect - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNSE1xZDJraFdsUFhHbTB0MmIzbWdWTTlKV0J1c1RLS0RYX0JYdmtwNDM0aVlTRDVHZnRlTnRhdElUSGNvOWQ3RktYNGZTS1ZNOEx2YWZxd0d1RF9IQTRkRkVzUFZfcUlSZXZpNDhsUXJSNUxPVm5pbzVtUV8ycHdRMHNUeWRkVWJq?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.0,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:56"
        },
        {
          "Headline": "Adobe (ADBE) to report earnings tomorrow: Here is what to expect - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOY0tuRVZqUU92QTNGTlZsVl9lbnc2bEE1SFZkbUlxTnQyZFdQc2YtVkJpbUMzOWt0NXpxMGZNOE4zQWc5ejVwS29sRlRjdGNrb092eUcxNldzVC1DdlNibkIxaTFhT0lqV3pQZk5hTWxPajV1VXlTWjUwMUxqdFlBQUFKS1dwRHJFWkppN2ZUXzBnekpNeFlWSUQ2OEVwNkQyXzlxZ3RkZUNPZEVzM1BnNDdFU01FNGpCYzBtWjZEclBSc1RrTF9nTWFhalhkR24wdHVzY2Npclc?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.0,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:56"
        },
        {
          "Headline": "Cowen Maintains Hold on Adobe Inc (ADBE), PT Cut to $325 March 2026 - Meyka",
          "URL": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPRjF0ei16R05pSGMydGJ5Q3U3ZUtPc0daMWRoWTZxTjJXRFdGUkdqSzBtYnlYYzJjQ1pjWXBMSGFhUUw5TWg4aXJtVTZiWjhTaVhTb3QzM3VSOVFiSjlOTVdXRDd1UE5feWN4VmRYRkVCMTd2R0FIS2MycXRKTWFSeS1EQXJjSVdEa1hWQ3BfRDJpV3cwd19B?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.3,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:56"
        },
        {
          "Headline": "Adobe (ADBE) To Report Earnings Tomorrow: Here Is What To Expect - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE4tWldJcU5US3JUb3hfWE12RDExaWVwWmFreVhDbVZWNkZ2OXp6aGh2R1Z6WHU1a09KUnFXRXhWRlVaRjRFQmRQYW4yUlBMQ1Z3bldzcmpYM0N6MjBoNUxGUE5kSdIBY0FVX3lxTE4tWldJcU5US3JUb3hfWE12RDExaWVwWmFreVhDbVZWNkZ2OXp6aGh2R1Z6WHU1a09KUnFXRXhWRlVaRjRFQmRQYW4yUlBMQ1Z3bldzcmpYM0N6MjBoNUxGUE5kSQ?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.0,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:56"
        },
        {
          "Headline": "SA analyst upgrades/downgrades: ADBE, AAPL, SOFI, LOW - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNVUZRdDRhc25xX01RdjdBckRWVlJDYVJuOXJXYWRfVjZ1Q1U4X1hRTkM2c0txOFhjdEJadEtFRjJhaTViN2ktclpOd0hPdWVFbnk1Z2NOeHRJcmd0VnhqXzc2ZzBHWC1JVm5YcnJqMm5Lc0gtQ3hUU29PZG9HZG1RMEU2NVVtR3hvVnEwa0cySkg?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Adobe Inc. (NASDAQ:ADBE) Given Consensus Recommendation of \"Hold\" by Brokerages - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOUGtrbmdzVW1VMndRZGZtTWNtbVZKUDJQN0JtOTc3VW92U05mbVBjbXB5eUZfVDhZMTdKanBSM29zQkUzb3A3ZDlkdzd0TDFDQ0VQcDg2QldIck4zbXdtanZUZ0pxRFliN1lSdGg0N1BWRmpvdTVZaWVRUFhXaDE4MlpFdlZ2cmNDVlp1d2hnLWhJc1BrNklkNVEyMG0xMzJDZmtHWUZOWVprRk9TSFFUeUpYRHBEamdiNFBrS2ItNmRFTzF0NUE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:33"
        },
        {
          "Headline": "RBC Capital Initiates Adobe(ADBE.US) With Buy Rating, Announces Target Price $430 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxObVdvdlNhQ3E2UTRLb3p1OG52aElGVTU3aE9GTm50OFdKUVFMTUJ1ZW9XcE9hWkdyMWtKTDlEX2ZmcDdCRnQ1MTVPdDUtQU5QRFV0RFRLcHAxVnZoajdQSmxMd3JTeV84bnFxSXZkMmZGMXRuUzNjbGdqNXJ3V1hBZko3ZU9tZFQzV3BXSGlha1BZSHh0QzN1WTQteXNQVTdQQ0JxbS13UXFVX2lj?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:33"
        },
        {
          "Headline": "Adobe (ADBE) Q1 Earnings Preview: What You Should Know Beyond the Headline Estimates - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQZlR3U0hEa0IwNHViUkduQnZNbV9HTWVMYjMxVHhPRURMMEJwckRFcUtxSXkwcUJSekkwSkZWNklpY2lhdUxvRGF5WDdPcU1NNl9DSVpQV0ZQckZSQ1k4WUd1V3BGWkhpM0hyN3hvbElNdzBqeXhFWWI1ZnpLQ1JNdFdB?oc=5",
          "Category": "Earnings Preview",
          "Sentiment": 0.0,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:33"
        },
        {
          "Headline": "Adobe Is About to Report Q1 Earnings. Options Traders Expect a Major Move in ADBE Stock - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPUzlZSS10d3pUel9jMUpsd2E5dXU0c0Q4YlFZMmJzNFJCZWxTN01ZNlBHajZUblBYZjlsUUdka0RIMWNJOUNRejVKbXVtVVJiUk5aZzkzTXd3bVM5MnE0QWg3VUM1U1FWLS1ZODQ5NW9YQm5wb2JfaVAwcU9WYUhJaXRGNHp5QURwb2R3SkdPSmx1MzU2Q0VMN2F2YjNEN1JCeE45UTJPYXI3M1JaaGxfNGo2TmxiZUE?oc=5",
          "Category": "Earnings Report / Market Expectation",
          "Sentiment": 0.0,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:33"
        },
        {
          "Headline": "Adobe (ADBE) Q1 Earnings Outlook: Key Insights Beyond the Main Estimates - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBiSjhid2dJMElBN3JnUGkyN0J5akhTdUw0VG56NldNdkk0VlFvQ2dUOXplZ3lVNVRBLS1vNDdLaDR3M2pSNGphOW9KZngwYzczelNkYWJPaTluR2J1bnVOd256UdIBY0FVX3lxTFBiSjhid2dJMElBN3JnUGkyN0J5akhTdUw0VG56NldNdkk0VlFvQ2dUOXplZ3lVNVRBLS1vNDdLaDR3M2pSNGphOW9KZngwYzczelNkYWJPaTluR2J1bnVOd256UQ?oc=5",
          "Category": "Earnings Outlook",
          "Sentiment": 0.0,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:33"
        }
      ],
      "Signal": "BEARISH_DUMP"
    },
    {
      "Ticker": "AEP",
      "Price": 133.61,
      "LSTM_Confidence": 0.55,
      "News_Sentiment": 0.8,
      "News_Impact": 0.9,
      "Headline": "AEP's Slight 0.01% Slide Overshadowed by $590M Volume Ranking 245th as Institutional Buys and Earnings Beat Fuel Analyst Optimism - Bitget",
      "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5nZEZxUkhZUGtSNUgyZFJiMUI3cG9RYy1CNFhjeDVtdmdyN2dqd2FZaXJyNHpPRXlhdmt5OUlsTWZqLUlwSWUyOTBqeEFDaDBnVXRmSzA5cUFLSURvVnR6M19TMNIBY0FVX3lxTE5nZEZxUkhZUGtSNUgyZFJiMUI3cG9RYy1CNFhjeDVtdmdyN2dqd2FZaXJyNHpPRXlhdmt5OUlsTWZqLUlwSWUyOTBqeEFDaDBnVXRmSzA5cUFLSURvVnR6M19TMA?oc=5",
      "All_News": [
        {
          "Headline": "Mackenzie Financial Corp Purchases 15,870 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPUGNlYnJGcGxPUTN4TjRseUdvQmU4cGRvd0dlZ2V1Y2UxTklZdEZnX29qVWhjczRPQVNPeVo3ay1oYmYyQTVlRkt0ZldMOUJrOXVRbTBwbXpNYU5FbjdNMVZ2TzljVU9CMzUzU1lYMm9zLXJBTnBrQnp0RGF3dXVtVHN1a3pUZVBRYnlCQURxTDFlWC1yZnMwX2ZpSGNkUlg4SGdER3Q0NjhoTERwUE5wTm1NQW9MX3FLcFRad0pHd2kwbUhSdlZ5WmJPVWJZRXFTVnltbjlqWDE1eGFjNWo4d0NpZHozQQ?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.3,
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
          "Headline": "Martingale Asset Management L P Cuts Stock Position in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxNQ0RVemVXYU5FejM5dUtORTc3WDI2dDBCZmdhOEtjeWVVcDR0TmVnT2M2anMxVUxaRzQxLTM4Zzhycmg4LWVTT1dwcUhYQTBmaHkxYmJnSThjX21qR3ZKT1VHWXd4TElXMWV3U1JlWUlpaEM3U3lXZEVjTkdsVWNULUpuRDZMLThmQTRpcjdicWdXZWpyemtBbTBxV0lnQ1hGVmlsOWFKMGF2VnlMdUs4TUsxeVVTS1hOZnlsb3NoeEtGRjFuaG9EbExGZHF1clBKdkJUSUNYRmlqaUZpbzRaZ1NaaWNwUlFLYk1V?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": -0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:03"
        },
        {
          "Headline": "Van ECK Associates Corp Buys 19,050 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQS0twNVRpaGZ5MG5IeFg0VGRkOEM2WHhjbUhhNi1vam9VMWMwTWlrSzhiMjd0OE1lN0VTZW5xSkxGRUZoODNNWk9pX05wS2hsS2pINF9OR05aeEdVR1MwSmRxQzN0LUI5Vno1OWdNRzZEd1Jna1RFQWh3LUdFdW9NZ0VRczR2NkhmUGpUY0txZlFLRzBZbXB6c1U3cnhnV3dyWUI4Unhpbmdobm9scU55OEhwcVFqNFBrbWxHY0FNV01ZWkJmWkt1QUZINHc3STNJb2RHU0hhOHEwS29oNVE?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:19"
        },
        {
          "Headline": "American Electric Power (NASDAQ:AEP) Given New $139.00 Price Target at JPMorgan Chase & Co. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNYUR3TmRDRXBlSG5ycWhwRzBlUlA4MVBNUnV4d0FBT2Q2YXRmejcyTGdTeHptRmdyeHhvRDRXb2hLckVSS2N5RmUwUE9fbWJRbEdhSEYwTVRqdDBzRWZ4TjZaNnIwRlpZZ0s5M01pdUthRk1WckdqMF9kM0tlVGt3dnNmZXJtNGZkV1lQQVh1Zi1MOTdHakk4aWVUZE11R3ZldFdjR1hKRU5yN25GTVRZcEZmcUs4Qm0waEdIWG5nRTU2U0F4RmVHVGxKb3puOGJfZkgw?oc=5",
          "Category": "Analyst Report",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:19"
        },
        {
          "Headline": "American Electric Power Company, Inc. $AEP Shares Sold by Employees Retirement System of Texas - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxNVG9RTHJRdkg1RjhkXzRKMXphRVJtUjlBU3VOcllLUGNrd2Fhc1otSDY1ZXdGTWNvTEZuTGdURnpCN3ZCT1p6QS1ZQk9CczVnZklKSGRZc0FpRWR0ZGRZak5NVThNYjh2ZU5QVDNETlBNUmpZTjVtaF9vbWtGdktfdnRMT1ZXZVREdGpVSmd4VVZqUm1kLWVoMlRERTVYQzdlclg4SGF1S29GSVIxQU8xMVNTaTVkT052QVpVVnFXUFJxaFdVekpQc1BvbC11TlQxYzNvRDdaem5KM3pLZGVuazdTVDBFME0?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:19"
        },
        {
          "Headline": "J.P. Morgan Maintains American Electric Power(AEP.US) With Hold Rating, Raises Target Price to $139 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOM2d6RDZiZzVGVDBRNEVzdHRhZG5rX3ViM2lvUVVPQ285LWwtNDBMenYyc0JNWjh6dEZJQXhqNVM3bnVoakZXMTlMSEFQZm01YjkyUng5aUNDRG15WWZsMFRFQmVSZ2lsU0ktZGVETlUwNWR3aWtYSXZjUWx5cHhMWW9jd3BsNy1zeEcyRHcwNjFTUll3NVh2VkZFd3g0LTMyU1pQX2RielBMU3M?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.3,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:19"
        },
        {
          "Headline": "American Electric Power Company, Inc. $AEP Shares Bought by Capital Research Global Investors - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOdHc4VEVFQUE0dmNadWwwNWxTLXBZQVJvYWo2R1RwaEx5VzByNmxPXzd1eldYcS1iQm5LY2szdGprN3hpa01SQjRHTkdRenRBR1o2MkExNGhsZ0JRQS02SWFTM3lib2RlZ2VuUXViLW1Bd2NLM0xBd0ExTkdXdk1jRjFTcDd2Y1BFWllvRFU3eWJPcHpNRUtaZlVpYWlCRkdOMFVHeFNjdXI4b21nWFVZcldDUWVEOUxaQzhQV3R1M2JkQW9qeTJHRUxjQzlZaVpvRTVKNndGMWc0RXR6eC04ZzVJMW1yUQ?oc=5",
          "Category": "Institutional Buying",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:14"
        },
        {
          "Headline": "Jefferies Financial Group Inc. Acquires Shares of 23,554 American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQcTJqNVVhZWN6ZkJVQXBpSTVVbGl4VUNLTXBwZmZwZEhiYVhSZVlrUDg1RS1nM2JFRzR2WWRFV21oTmd0V1lKTnFIRmFld3VROXlUYkxXeVhhTnVoRkN4bDg2V2tRbXp1Y2FuWHE4MVpNaWJzWlE3d0o5NFk2MXQ3ZzZpMnY4WlQyQ0p6bGVyUjdWNzI2MHptUUM1eXV2WXdxckl1X0xmazhxa3M4T0NmQjNYZXhpZk84QTdPZUFvMDFKbmxVOUxhTFZpVF9FOUdNckRuYzdkYml5cS1vc3ZCTThqRjczdk01b1ZJ?oc=5",
          "Category": "Institutional Buying",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:14"
        },
        {
          "Headline": "American Electric Power Company, Inc. $AEP Shares Bought by Legal & General Group Plc - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPYm51UXJyYmFsNk1VdlY0Yng3bDdIcHA5N2Q1amR4RVpyS053cTB5TGdDU2hIU3VUQTJYd0ZVTl9ab1V6dG56ZG5sbENSQWxZV0lIY0lSNnRXNjNsandjeDV4SnI0Mk1XejFSSlBtZWRkZksyem1pUnYtcmpJTTRVOGlNeklMTW14NjNheC1PVkZnd0o1aXZMc2ZtRG1EUklvQVpPa0pBcEFUbGo4VW45dlNjTGdwSl9TMElZTnZvbG96UE5xX3I1ZV9BeHVhM0wtSEJzSWVUR3A?oc=5",
          "Category": "Institutional Buying",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:14"
        },
        {
          "Headline": "Swiss National Bank Decreases Stake in American Electric Power Company, Inc. $AEP - National Today",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNMkdFZXlQS2xGRkFxMzNQS0NoRTVBS3FzWTNxc1lFRGFXZVcxUlNxWXZhem81ZXRJZUNWNEVSSExEaEVlSjNfTHd3eDZTbXhveEN0bnNBeF95X0VkQTZGUVlXLWZsWVl6SkJFYjhCTHd6aTVNeWNTMU5wcnVNaVBzNGFnYU96RTAxbG9vTldjQkJ0SVJxdnNza1JadnB6elRCd2RqbnZHZk9yMHlHR2xKem4xamRSQWIzNjZ0eWZOZVdHZkIydTI2ejJxb3ZBSFJoYWc?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:53"
        },
        {
          "Headline": "Swiss National Bank Decreases Stake in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOUlZybDNNQk9fOHhJUkpGdUtTamN6cXNTMUNYd0djaDhWbVdiTjgtaHFNMTZYeUVRV3VubU1TNS1ZWUJ2RUN2cWFLa3VjWmk0cVdLaV9NSlowRlpMRm1NS1p4VzRyZzl3NTN2cGliYlVKT1R2UVpORjBaS2FIWTVTNi0zSzNJbExfWmtZREJGelFJUTk1elRaMktrTmRVemFEX3E3WXdnaWdOcWNHSWRsTmlFS2hpNWMzWEo2SjlYdHlvRXlpRGtkRWZtTVJBNl9YdnFQM3l3?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:53"
        },
        {
          "Headline": "American Electric Power (AEP) Gets Price Target Hikes from Evercore ISI and Argus - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOZjdmb0I2cDVUM1BUTjJPWUxaakRwa1dhY0FPdkoxanhvRllMT0FERW5Lcy01TUZaNGpPVUdfaUZZVDZfdXhHaXZSMUlZOEVsNFNQTk9tVjBLWlF5MDhTMFJrQ1Q1SU9sZFVOVGw0Zm1aNGZVbDUtNVhDdVQ1dDBWYk96LU4?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-11 09:31:53"
        },
        {
          "Headline": "American Electric Power Company, Inc. $AEP Shares Purchased by Russell Investments Group Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOQzdUZGVlNkZQZm5TM1ZzTko3MW9pOGZFZ3lRQ2hIWEV6U2NrdGZKX3NtQ2M2MFhLaFB3QmVvbHhVczl1eFhDSFRnLTlMWk1fRVUtUHc3SDVnRjFZclBZU0FTRk1yVnBUTFdEeWJrRWVjd3pzbkh0RWhyWE1LNkpGcXNLWERjTGdRNGFXMGU0UVRYMlNMdDB0TG9pUF8tLVVDaGx3bnZnVmJaYng2Zjd4Q3RDX180TElJNnBWNHBnbzRna0JwT2N0dVNYX2k1XzBCdTNmektkNFd4emlQdDNwenJ6ZEs?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:53"
        },
        {
          "Headline": "Bank of Montreal Can Sells 26,058 Shares of American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNYTNnX3RMY2xwRmtScWxOSW5zcWoxSDR0bXNSc2MxZ3picmprUG1IS3NKN25OeVE3SG5QLWJzSGhRTWVydEtMRmhCOXhzQUJVWHpMY25FR0tNbS1fenl2Rk1YbE1zUW1PSjRuVE8zR01MSEt3Y2pNZmNFRVBGUzNfelRhY1NkUDd0MG1GeDVkVmQ1TGtDTEhJaDlVOGM2Y0JGUFlncGFQUENOWm9faFdvd1BiNVdsY21HWjZnWG5uUFB5ZWY1cWtKWTVHdEdiQ21WSklTMWRvZ25MaUE?oc=5",
          "Category": "Ownership Change",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:53"
        },
        {
          "Headline": "Natixis Advisors LLC Boosts Stock Position in American Electric Power Company, Inc. $AEP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOd3pwZEpFS2ZaOV95Smd4WUVNWVBRYV9vNG5oaXI0OXJuRWJaQThEX0tRbU5aOXdmVHh0bVhHejVnZkY3TF96eUZJTk9qbDJJbDBLME9UWDRBc3pFczZiN01uUDIyMk0zamRxLThRWlR1Y2g1eTR3V3hYRU40b0RySEdnTmMyU1BXYnNtRWdhaHRaaTBWRXBKV01MMnhuMVpJY0Z2cENLZ3ZnYnpSWHUxRnBPNW56ek9LcTdVYTVXbHVTY0piZjluNVEwQzduYzZBQlhqVDA3MUoxOGc3X0R3?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:34"
        },
        {
          "Headline": "American Electric Power (NASDAQ:AEP) Shares Unloaded Rep. David Taylor - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNMENNTHhnQl9NWHowN0piSW5BVVNQVDd0NWk4bFdKdWdJSXQtUUJpbEpsdDJERzRNOGs0RW5QblpLOWppY2x0ZnhPdTVCeWZaU2dtZU1CQWFvaGJGNXE2Uk9BeGx5anh5TGhZUXRXZlc5OVB5bDh4M3pQc2M1cUFKMGwxQTVNQlhXVHp0NzNRRGtQZmFDb1NOU2psQ3FWeXU1Yk9xLUpOV1dOLXpKaVE1c1J4enFvUko5bmF3aQ?oc=5",
          "Category": "Political Stock Disclosure",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:34"
        },
        {
          "Headline": "AEP's Slight 0.01% Slide Overshadowed by $590M Volume Ranking 245th as Institutional Buys and Earnings Beat Fuel Analyst Optimism - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5nZEZxUkhZUGtSNUgyZFJiMUI3cG9RYy1CNFhjeDVtdmdyN2dqd2FZaXJyNHpPRXlhdmt5OUlsTWZqLUlwSWUyOTBqeEFDaDBnVXRmSzA5cUFLSURvVnR6M19TMNIBY0FVX3lxTE5nZEZxUkhZUGtSNUgyZFJiMUI3cG9RYy1CNFhjeDVtdmdyN2dqd2FZaXJyNHpPRXlhdmt5OUlsTWZqLUlwSWUyOTBqeEFDaDBnVXRmSzA5cUFLSURvVnR6M19TMA?oc=5",
          "Category": "Earnings Report & Institutional Activity",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-10 09:32:34"
        },
        {
          "Headline": "American Electric Power (NASDAQ:AEP) Given New $135.00 Price Target at UBS Group - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQOGxQUUl6ZjI4aGxERWV2emJtQmJHU3pMTDNTMXJkYnNnSzhNUWRwbGVPZkRuTjZqTW1iTzZQSWxlQ194RlBheFpjdU9WN0QxQ2lXZ3I1UmlvaUU3TWt2RWYzMFBDNDNVTVhLSEt2TnBXQm5IcDhGNjhiY04yQld5YlVtbTdvdE1CUXdHalVsUVNzT3g2TGpxY0xicHVsYVREcGRSdlpoa05ER3NZd0swRTJzOUlHencwazhNbHZSYmNORkIteGhRSQ?oc=5",
          "Category": "Analyst Price Target",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:34"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AFL",
      "Price": 108.71,
      "LSTM_Confidence": 0.69,
      "News_Sentiment": -0.9,
      "News_Impact": 0.9,
      "Headline": "Aflac pres. Koide sells $1.7m in AFL stock - Investing.com",
      "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQcmUzRkg4UDRTVTZxWDJtV1ByeXJTQzNCZ0JfcUQ1Uk5aWS1PTEJpdlZvbnAwdm1YcW9scHpSMWV5N042dnRvTzhRUXV6NWNZQVEwdC1QYjNLUl9rQkxpTVF1dW95aUdGM3pFYU1YMzFtR2Y3MjFKd0lITXJTalVBcjBYcHo3MXc2TndMeVZ4U1diRjdGdnlORWZvU2Z1WGJoVGRYQ0Z2WVp4T3VjSWxoVHZn?oc=5",
      "All_News": [
        {
          "Headline": "Aflac pres. Koide sells $1.7m in AFL stock - Investing.com",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQcmUzRkg4UDRTVTZxWDJtV1ByeXJTQzNCZ0JfcUQ1Uk5aWS1PTEJpdlZvbnAwdm1YcW9scHpSMWV5N042dnRvTzhRUXV6NWNZQVEwdC1QYjNLUl9rQkxpTVF1dW95aUdGM3pFYU1YMzFtR2Y3MjFKd0lITXJTalVBcjBYcHo3MXc2TndMeVZ4U1diRjdGdnlORWZvU2Z1WGJoVGRYQ0Z2WVp4T3VjSWxoVHZn?oc=5",
          "Category": "Financial",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:50"
        },
        {
          "Headline": "Schroder Investment Management Group Reduces Holdings in Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQWm5TMEp1OEpXdDBZRGFvVWVjZ3UyVXhlMW9xMUJKck5OWlBsYWdqN2VhVnNhQTEtcDFJbl9IeTRySE83YzFkRi1pZGNGZjRRVU9LdXpaMXdHeXRxQW9FbVF5bFFoZHFsZ3laS3lhenFVbnA0bERGTzdvYU9SUEkzRC1SQndLV0lsZjJiTGtsZzUxRU5saERzWTJIbTVDemFSdlhMQV83T1VJLVFrZDA4ZTRKenJMb2lFQkhPTFlZVHVRZy1ram52b1lXS1hCN2JUdGlFZDdnMA?oc=5",
          "Category": "Financial",
          "Sentiment": -0.8,
          "Impact": 0.8,
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
          "Headline": "Aflac Insurance (NYSE:AFL) Operations Draw Attention Following Share Activity S&P 500 - Kalkine Media",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNbjRVcVE4QlRhbDZWd1p5VEZreTM1NTlBOEtXVVpmYjBTWXI1aEZxZFN5d3ZYQ1lUWVNzcW1HejUzdlFJNndWQ2UyTXpnX0E3OTlSZHNVNVRIVGxqTUJoNWxCOW9tdU5YX1RUclBfelBmX0JNS3F0WTBiZG10bThGVFY4RkhqYm9kWjBrelVnYV82MnNDSFlUeHloZnVadll2YmJMckVmZFQ3RlB6cEtuYWlveWx6OVV2M1Z2aEstVElwU2dI?oc=5",
          "Category": "General News",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-13 09:28:32"
        },
        {
          "Headline": "Aflac (NYSE:AFL) Major Shareholder Post Holdings Co. Ltd. Japan Sells 19,000 Shares - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQWlJCNlAzT1BzRklmZFNPbzBabUFEZlZBQnJxUkxnRjZNQzQzQXJOaVpyN3BIc245NGVIVDhXclR0WWE0TmxXQ0xyNTdUNXRLNXJqWW5DV1BPRWloVnpTb1V3eEQzUVU5bzFmZnBZVnNQblpndmlDWlM5YU1nVk8temZCaGotVk56VGZEb19UbTR3U3owSURvSEZCNjBXZWMwTFRlMk9yT3ZwdlNKMTk1TEcxZmRVRnd6VzZGamNmbWp4Qkt6WExjZG9jdw?oc=5",
          "Category": "Share Activity",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:32"
        },
        {
          "Headline": "Japan Post Holdings sells Aflac (AFL) shares worth $2.1 million - Investing.com Nigeria",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPOE11am1YYXFFbkx5Q0djWTBHa2ZKN0JaeUtWanBfTFBNbGN1SFh2LTFla01ySWI0eVN5X2ZZYWh5OG94RzN3TmEtd0FuSjdZSnFFcXBIbmJrQVF6c2hJb0JlUXBDcUk3blA2Q1ZRZG8yWmZ4c2h5eF9oNUJGb2dnTWtXUWFTYXdzU0pLX0xNYU9CVG5CbEF3RWd4cTBxWEFTVWxOQjkzeTNEejZFaE5MekZYMDFqUG0taGhhVGpkLWU?oc=5",
          "Category": "Share Activity",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:32"
        },
        {
          "Headline": "Japan Post Holdings sells $1.9 million in Aflac (AFL) shares - Investing.com",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPb1JzNzRfUVBYdW4wSi0zTHpfdklJamk1NEx3NkRMNGVQdFZ4T1F4Z05wejAzTXRXdS1YVWpiMVBKQ3lZVkp5TlFVc3hiRmVMS3c0X0pwOHdpamR1TGZnRk52RnJ4dHNJS05jRXpfam1rUUkxeFMtczl1S3JIVlp2QW5xRFZES0tJX1NWQnBQdUxCQi1UM19VZm1OYVV6dVV2U3lPYXRKSlgtZjJBWnUxR1R1emxQZTV2NVNWZmtnVmcweVJvVEtJaQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:09"
        },
        {
          "Headline": "Aflac Incorporated $AFL Shares Bought by Legal & General Group Plc - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPYS03OGl4ZUlLbVBrUHJYMTNualJkM19HY2JacnJNS0NNN0NUTm1zZVp5NGVfd1FOQzhpN3lhc1NheUNRQk1ER0xRY0xyLWhmVDJtYjItc1pRNGMyUW95Q01sSXZkaGVzS0pRRzVNSF9qZ3BkamlFQm5JLXVQRC1EcTV1RG0zN2RaWWZ5cHJhVTlEMmx2WmsxR0lhRW5RdmdHTmx6LVJyQkdub2hCWlZUTWtGNWpham4ycGZnR2V3VExidw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:09"
        },
        {
          "Headline": "Natixis Advisors LLC Has $27.69 Million Holdings in Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQN240a0VsV1RJYy1sX19tZlZLOGpwZWRhNXBIcGJIRFJjWEJ6WGEzeVFLUjFMc3Ywd01xQnhkTldJUjl6OHVQQ2R4SjRxNXE1MWYwRnZqSEZGcG1nZE94bFVlc05jZ1RZQVFyUTZHT0Z1RTJGR3llT3V4THYwRTI4NlRqRmdoSHJ2ZWswNmZ2dTFPV2RMemM5OER6azNWZlE2aWtuYVNHN0NqSmNqRkRFeWdaRW00YmJsS2ZxYWJILTJYd3ZJalVHTW9HNjNnZw?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-12 09:32:09"
        },
        {
          "Headline": "Japan Post Holdings sells $1.9 million in Aflac (AFL) shares By Investing.com - Investing.com Canada",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNejlMMi1YcDJ5R0VseWJUNWhYX0JDME52bWRSRWw5aHFPWUM5cDcxem9zOXRSRUJsZGgzeFVRcnl4eGduUUpValdmR19XU1Izck1FVHhCWEVWT0t4MEw0U1hubjFLREQ0VlhYUGVFRkJmTG9aRlFtMXgyTl9qUlN1cUlNcjZ0MDVZVW1jVkd0SHNGRHV2UzBOem9YdFdJQUdmX0JkZ1dhdGZHMU9EeHlWelFHd2tJT2tyTWpRM0VFcHJlMkk0eldTYTRFdUo?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:09"
        },
        {
          "Headline": "Japan Post Holdings sells Aflac (AFL) shares worth $2.1 million - Investing.com",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNWGluTG5KSkhKRmhHZkhBTnlvTXdnLVJyajJoTnBJVXhPc1Zab0s5QTVTTEg0enBYNndGSFBvUm1ZeTdQdWxBYjd4eXVGUmQxcVJuREJaWVIzRHQxamRWZnpuZTFmMEVKdW16aWsybnhlM0g2NVpaRUtLOGZBbmZ5dTVCaGF5RU9BcVZyVnlkVG5EczJOSFNLSnlfTlhFOTZaSmJRSzFpR0hleW1oSDRBWk9ObWlwSDFEZlh5ZWh6azlOWWwyNHNQTWJJTC0?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:44"
        },
        {
          "Headline": "Insider Sale: 10% owner at $AFL Sells 3,126 Shares - Quiver Quantitative",
          "URL": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQMzdxeHlBdVg4UUNDRnFvckxaUEJScklpYjZUdUlTNWVUdjBuZTc5N1Q4U3RGSVRHWmozLS12Zmc5ZGlPcUZPSTVISVdsaXJ6V09iUVhJem0wMGdyeFFyT2IxdFEtdkZjM3gwcFNqNUtER19jSEFhb3pnZWFiMmFvd0J6WFJ3YzR4WjNDWnREcFdJUWRfRmc?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.7,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:44"
        },
        {
          "Headline": "Aflac Incorporated $AFL Shares Bought by WINTON GROUP Ltd - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNRXhaOHZzZlVSNHVlNmFpREdIREhzVi02bk10RXU1RzItdUdUc2FPUFA5bS01S0dpa2lrRGJoOEEybFlpVEw1dXB0cHVkMDYyeFoycG1EckFkenhJY3MtRkJTVUJRMnJpU0tNN2JNSGo5M2tWR2JMTnMwRmNjVlBLTHZuN1d2dE9NRmxPSVVKcDFJLUVIWWM4QWcwV3UzdGJDOEZ0VnpTZmZnV2hyRGN4YmstekY4S3Jj?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:44"
        },
        {
          "Headline": "Aflac (NYSE:AFL) Major Shareholder Post Holdings Co. Ltd. Japan Sells 19,100 Shares - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNMnBILTNyVkE2MTEteURUczRjVVZacW14Rk5ITGlXWTVHc1I4UjZwVnAzekwxTGx2WXgyNDZvREVGRDhEQnNmRGJDbV9IZDV3TjVqaU9vZ3YxTHZESmhFMGZFZWF5dWhsbkhpLWtkalFyR3Vfb2dRV21WbzRNcV9TWjFzUmlNaV9kc0lnVlJ0OGVCMXhOQUpSYjlpZnlNSmEyZW5VWUtpamRzV3hCN1F0THNSc01RM1ZTMi1RLXRKSDdhQkFwZVNoSEtJMA?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:44"
        },
        {
          "Headline": "Aflac Incorporated $AFL Shares Sold by Swiss National Bank - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOd3ZSRjNwaVRhY0cyNlNubzM5NTBldkxqOWJnQWRKN2lfVGQtZ3pOY09ydWd4Vk9KRXozRmw2R0VOeWc0bzYxQ0JZTnpvWmVqNktvYW1KSGF4QzAycUFXc3RRQmJvZWltempvZmszVEV1NThqSlZielQwTGd5QnZ4ZWtGMzZuUlVYUHpyMWpyUHFIUEhMaGF1X2F5R0JjT1RUSi01UjA2ZFdCOU4tRDBuRVFxeTJ2N1NVT2c?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:44"
        },
        {
          "Headline": "Aflac (NYSE:AFL) Major Shareholder Post Holdings Co. Ltd. Japan Sells 19,300 Shares - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQTDNmUUN5YjRKeERjWUIwank5bjQ0Skt4MjVlWXF2NlFKVjlOWVY0aTVHRUpGVldoUE00V0xTMGdIMnVwMnNIb1FQWE94MmlwYnRDS1k3NU1WS3ZwNEJTMksxUXlqZ3BRY0VVU2loTkxFQkxfM3ZPQ1drUzJsN1BKcjhDZVlBRlFxSDA0TE1lZ1hoQkNfV0FpeGVJWHRIa0lIZkV4S045bHZXRl9JZy1Mb1otM0tjdGVRSWxjQ0l4N0s1WHB3MXBHNUNZOA?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:43"
        },
        {
          "Headline": "Aflac Incorporated $AFL Shares Sold by Korea Investment CORP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNNHBwNWFCeFZBdEhfckpuYm1GSmgxZWxuUExURHY0UnVIOEFnMDlBclJ1RXVlVnByZ0phV2Q0R0NtUmdZTjJiNFBBS2tYZFRCT0NxNUU3SDhDYTRVS0ItU1BUZlZ5RjZDOXlqWHU0aHlLcmZsQm0yUk1xYUkta3k5bDFuM3JBckFPUy1PUTZCSjlCOW95Nl9lMGtpbjBPem4yWUU5cG1sUFRMSVB3WmNsbnlkX0N3RkJKbXEySg?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:43"
        },
        {
          "Headline": "American Century Companies Inc. Cuts Stock Position in Aflac Incorporated $AFL - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxObEFUZEpZU2ZVUDY3cHA3M3Q0dUxHa1p5YkJpYWVwWExmYkJkQktSZFgzS3QtQlBlOFVGYTJOUk8wYkxDa1lrdWtySU1LbGN6VHUxMjZkZFQ0bjhULXhiNGdzNDBKSDV0R2RtXzdsRHVGajJFblJwdDd4eVJZLW0wOC1TUWY4STluU0FndUFqUnQ1QkxaWVpsc2ZlaVNCYlpOZ19RN1E2c2ZiRUxwTTM2Z1dYbTB0XzZ5a0lDNktZM0hYRUl0TlN6LTBZZzVWVDRuTmNr?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:43"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AIG",
      "Price": 76.74,
      "LSTM_Confidence": 0.75,
      "News_Sentiment": -0.6,
      "News_Impact": 0.8,
      "Headline": "American International Group, Inc. $AIG Shares Sold by Swiss National Bank - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPQW42OFBDaTV3WTZGMno4dGlWVGRXdDNaWVlrZGE1RjZ0TXZvMVhucnVheU9vcFVKU1J1UUdPS1IyS1I0Mm1Pd1NYNmhNOWU5R2I4Z0ZCLXljaHNUU0RyS1IxeHMxSElldHE2SDJMeDZkbFJRekZ1WGZSU1RPVXNCUlp5NUU4U2hxeklXczZ0MTZHOGVVcGxab19Jc0ZaSkRacHZtV0ttMjhsTnpjT2V6LTFhXzgyT1ZObWI5Q1ZzeTZFaVppWnU5MmczOGo?oc=5",
      "All_News": [
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
        },
        {
          "Headline": "American International Group, Inc. (NYSE:AIG) Receives Consensus Recommendation of \"Hold\" from Analysts - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPd3VrM0pMQUhNYzNpOTFYVFBsZDE4c2RpREMzRkNkbnFaOVVVYmtEZzRYdU5ZTE9WUW5pUEFucTU1QjJFNDI5UnVaMWdWR2txbWxYeXBIRjRfZndPRExCVFVKRzlQekp0Yk1mZFo4cjlzdXJob2VYZVgtNEhmVmhreW03TGVjdW9DZlN6aUNBMHVnSGJCcmlMYTRIOWE3T2t1LW5XMlBIYVMyYlhPR2x6c0tkRUFfdFF0VU1qM3lfR3pQOG5IYURGVno3VDhER0JxeE1MT0hLdnJONFBYcnd2MWV2VFQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:24"
        },
        {
          "Headline": "American International Group, Inc. (AIG) Price Target Raised to $90 at Goldman Sachs - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNQmFHRW5hUC1KaHNydnEwazFxRUhMSFUwblMtUFFaWEMzc0pkWVpYVFoyZS1sbm9oeDBpc2RZT2piSlRPMXRsVG5PcDFrR3NSOC1YUkpCbmhENzJ5RkJ3TW1UaXFSTjIzLWY0czYwWUhoUVhraTF1Vmg5dWNfeWRBQ3A0RkJiVmttem9oU1NiOVhlQkpYSmNaVXZjdDdhZDhYc0dGT0g1dnNXQnJXWHM1X3cwUG1nMHpkX2dGeV84b0pDcXQycGlHX9IByAFBVV95cUxNQmFHRW5hUC1KaHNydnEwazFxRUhMSFUwblMtUFFaWEMzc0pkWVpYVFoyZS1sbm9oeDBpc2RZT2piSlRPMXRsVG5PcDFrR3NSOC1YUkpCbmhENzJ5RkJ3TW1UaXFSTjIzLWY0czYwWUhoUVhraTF1Vmg5dWNfeWRBQ3A0RkJiVmttem9oU1NiOVhlQkpYSmNaVXZjdDdhZDhYc0dGT0g1dnNXQnJXWHM1X3cwUG1nMHpkX2dGeV84b0pDcXQycGlHXw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:24"
        },
        {
          "Headline": "American International Group, Inc. (AIG) Price Target Raised to $90 at Goldman Sachs - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQSnJJQl8yVU1mSkk3QVlSeDFTZUVJOTR2dEdDN0VtdVdVOG9lMm1xYVpIaTVGSE94RTJWcXZJTjdrX0hwMC03Qm9pTVRmWTRaUDBKR1NNaElfMHM0aW9lNUJiTDNZQkR0czBsaFM2NU5pSWlHNkJYZ3cyVnhqZ0ZzRnpVckt1U3NTV0E?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:24"
        },
        {
          "Headline": "American International Group, Inc. $AIG Shares Sold by Swiss National Bank - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPQW42OFBDaTV3WTZGMno4dGlWVGRXdDNaWVlrZGE1RjZ0TXZvMVhucnVheU9vcFVKU1J1UUdPS1IyS1I0Mm1Pd1NYNmhNOWU5R2I4Z0ZCLXljaHNUU0RyS1IxeHMxSElldHE2SDJMeDZkbFJRekZ1WGZSU1RPVXNCUlp5NUU4U2hxeklXczZ0MTZHOGVVcGxab19Jc0ZaSkRacHZtV0ttMjhsTnpjT2V6LTFhXzgyT1ZObWI5Q1ZzeTZFaVppWnU5MmczOGo?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.6,
          "Impact": 0.8,
          "Date": "2026-03-12 09:32:17"
        },
        {
          "Headline": "Hospital Revenue Co. Not Covered In $8M Loss Suit, AIG Says - Law360",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQLXJYSXJObmdDZHpvZXRrOW80aTA3cmxpaEVpMGhPYU00aDRLSmQ3d21XM2NTR25uMVN0YVo5OS1lTG5JWFByTjZDVUtBTjhQTEpyX3llNlplUnQzbDJYdnRsOFVuSWJCWHFOLWIyUFo3V3VDT3lPcUlqaG55MHhFQVNPc2ZES2xXNkkweFdsYnNXUzU3MDZ2QWxvcTFreFFmVUUwLU5CRTF6QVdrLUc3b2xnYV9waFpmanZqcEd5VTctemJwcWlKWHN1ZVnSAXBBVV95cUxOeGs3bFdIVGNJY3E2cnFVamRNV2JSc0JmdjlJWkJvQjVVYUlLOVR0RV90YlZKTnhMdVhFakd6QWI2QkVnTVdCMHZ4dDdHb2hiNm9nWjZ1b1pLeldpcGxWckVRZUs2QWJQMmJBd1FWZXJq?oc=5",
          "Category": "Legal / Insurance Claim",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:17"
        },
        {
          "Headline": "WINTON GROUP Ltd Reduces Position in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOTldETHNWM3M3VV9WY09rZDZ0WmdhYVc1VTVSRHFQT3lxZElPTlc4c1A0cVJPa2VXSlJRS2didWw1SDEzYU1yTEctVXIybnM5Z2ZDTUxNVDdzc0FSNVViYV9ic1NHUTlqZkJMUXNDQzNNZjY5X1ktWXNwemxGeFJwWHFFbkN4MlVta0RPdmdoNDZHUGRMZXRRRkwxV2JjOUlxVTR5enNuTllXZ19NMEljLVNZNFFWWFQxcjVOY0pxNnJCckFNSDlOdE02QWE2bmc?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.4,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:17"
        },
        {
          "Headline": "Franklin Resources Inc. Sells 1,128,186 Shares of American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPSXViQTAyclAtMkoxS3NHcmcxU041dFBqdEJhektrQ0xIZkhLSTdsRHJSa0djb1o0ZjBWakJIUFJBTkc0eTdMRmU5T1gwSFZMY1RBQmJzZVphMk55ekhKNXFaZkJVYTdZaEdxM1QwZmE1eUM5bGdfVzU3dDRnTm16TmtFRWFfU0ZRdldZMU1CM2dNOUNrUllZcEhyTktjSVZNZnFUVGlpOFpZNmJ5MzNGLVZraXhzcXkyNkE4UThyLUtGaGhrQ2xmYlZYZ011UGp4WE5GLUlCYnN1YjFu?oc=5",
          "Category": "Institutional Investment / Share Sale",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:17"
        },
        {
          "Headline": "First Trust Advisors LP Boosts Position in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPRHlxMGpfUUNsTWo5enBOX3ZKX19ZYVg3V3g4blFBSWJiaXpkeGtZLVlNMmZOaGRrTVRLTVB1Vi1lN1FhY0hyZExZVm9RVldjZm42c2dwTDYxU2J3SjZyZnhHNmROTEI2dXF0M1RIWVVPdmVrUFpJaUdCVk9naDZPUkxINUdnUVhuTmdSUjRlNW5YN2ZpaVlTQ0FxQUZRN3d2Y01aLXJnako4eGFKaTVCdU5ndHpMMlBldS1STmtJN0F1WkthZHhxUl93SW5qZGJtbEtJTkVSRQ?oc=5",
          "Category": "Institutional Investment / Share Acquisition",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:17"
        },
        {
          "Headline": "Richard Bernstein Advisors LLC Sells 31,282 Shares of American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOa0RQM253cEdPcTdWN2VIeHRPUm1YZkRCSl9ESUIwaENnTzdRZEZkektRRmtmU1hVX0tkVW5jYXdNYmlEMG5vUjVYUDBxQXNFbERzZXF6SGZITjVPWWhVVjItalN3cFpWYzU1TjUtZkVZTHcxNm45OWFjRm5EdGR3Y0VLM1VxX0puV181NXdvZzJVZWNnejlseEdXMEpzSURCNUs3RHhXT1RTWkp1RUJEVVZGS0UtVWE0eHNZQVZMbldpVThjUm5LTFhPR0xmOWNsNFo1TWNhMzd3S3JLLUNrWVBjZW8?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:41"
        },
        {
          "Headline": "Capital Research Global Investors Boosts Stake in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOVWV0VW9jRlpjVjRWZkJHdHNzLWY0NEczR2FZa29TbE1VQzlITHhuYWMxT3lsaGlXdnlvTlBNaHN1SUl4NTJpcTE4SVFicjFfQ0pCanc4aDVmUEVVWkNMZmxiLXBremlqdVlpTzlqQzRVRmJZNG9fZU5lSFltWjZwME54N243ckhQckUxa0JEbk8yYlZxT1lEZ0pzS2gwdEhpdFBxYVRidkw4cUxsdkRVdVdyVW9fa3ZQSG1BQVNhUzJCU3FYZ0taV3hSbEw5ckd5ZDFkcDdULTJQN2V6NHJYSg?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:41"
        },
        {
          "Headline": "Vinva Investment Management Ltd Reduces Stock Holdings in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxOVXpBM1drMDQ1MjliaW9ZdFJNN3cyVjVybzlXZjZZbWluUVJULW1pMkJ3RnNZdXBPX2VFOGhLdnJMQ2NnamxHUUhDQURGNU1wbmtXd2NHZ0h4V1JISlF0YjBGQ0F2OXY4VmFfaHpsdzhsVDkyM0ctek50enpUUTBsWnl3R2FtQ19LSC04X2JOcURMQi1mS1g0cHcwZ3JQMmFlZ0dVM0NINnZMMlBnaTY4N2twQ2Y2YXdTRDh6UHRUUDRzdEhobXBhZjY0clJEZXlBaXBSOGZvZFZVbXMybXNmVmNTNmtGTFl1Mjhv?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:41"
        },
        {
          "Headline": "Barrow Hanley Mewhinney & Strauss LLC Lowers Stake in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNdnlTMjJ4YjlvQTdnYmdkNTYtRzRybmdNa0tvLU5zZTd0NnZzekM0NTVacWFhVGdBeTJEMno3LU1WMGl1RnRtVHVrOHpsNEwyUU9aV1hHU05WR3ptc1dRajVHWURwLVdWelY3UFdTdWMxMXVubW8wT0IwZFUwbGxEcXU3NDJTbWllb05mLWt3Z042bVlpekxfemx2aHdIcHA3YXIzNmNHZjAxQmc5bVpwZGZsbWVjTk5ockdOdDBQYWJRQVZGR0QxQUtsRVdqdWlJQmVsY2xnWTdxSG9DczNQVVBhbw?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:41"
        },
        {
          "Headline": "Russell Investments Group Ltd. Lowers Stake in American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRXNxdEtwVjQzMUtXT3RSWmVnaDZ5alRBZ0xVQ2xvd1lWMGE1UW5KTHM4MUpDUmRCTHUtU2VZRFdwLVpKWUVNUHFhZENvZGtrZFFad0lSYnlsUFhSbk5FeVB5LWh1dXFZdnViTTNjM3AwOXIxWmpQaHQ0cGNvZDE0bzVGZjNFWUpTU2FFdmRYY05iY2o1c1ZCdi1WSDdLajE3ZG5CeDF6MzNFbGZLXzJJbHZNMjZTUmNZT1BmRS03OERpMnNmUDZmNXF5VS1JYUtyc2ZVbDR3Z3ZGbTQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.4,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:41"
        },
        {
          "Headline": "Natixis Advisors LLC Sells 123,511 Shares of American International Group, Inc. $AIG - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNR2VCZG8wTzhRZmNaUDB4a2h3elBfSDQ0RjhTZjdHRDBiVUYzYWFVLUVBUFFDU1FYZ19HVHROc1U2bGF1aHRTV0FBd1ZWTWt4eGpBQ2xjMHNVSGpVM1N2UDlnYnBCc3lDYTBsSm4yZkc0a3p0OEVHQ0p0cmF1ckRIeVhvX212THpTcXdNMlA0dnJxcVVVcndTaFJBVkY5STl4U190SW9Oc1ZaNFN6TjRLTlkzT1VTLVJ3dFdYUHIxTmEyTzEtWnFaRENIQlctZHRFY2NEd3p0UUw?oc=5",
          "Category": "Institutional Activity",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:35"
        },
        {
          "Headline": "American International Group, Inc. $AIG Shares Bought by Korea Investment CORP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNQU15UTY4ZzFJVHhRMXFJNTJ0c3JMRXZheDdpZEVjUHZJekxFUFZfX1RRd0puYlZFdFZZMFZIcDdzTGx6aENudHQzZl9kby1OUjlucmtCVHVKQzNsNEstckNMejN4MndYM0RCYlNnVTdxSlRFMUVEMWdpN2FESWtOd3ZZYmlBSFJjLVJoeW5UZmljNnRXd2p2bUlwblQyc1N2cGotX1YyUkw2dkdiUldKdFlYa1l6ZmVPY3RGNlV1X09BM0NJRTlGNU9XRmhWTTdaWnc?oc=5",
          "Category": "Investment/Ownership",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:35"
        }
      ],
      "Signal": "BEARISH_DUMP"
    },
    {
      "Ticker": "AKAM",
      "Price": 107.67,
      "LSTM_Confidence": 0.6,
      "News_Sentiment": 0.8,
      "News_Impact": 0.7,
      "Headline": "Akamai Technologies (AKAM) Price Target Raised to $120 by Raymon - GuruFocus",
      "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNZUVBVFlRUk1vN1VGTUdoR1lwVExSekd2c2s3VkQ5aUMzV3BKWEtsaWpUcHZ5QU53UzkxWE1Jd0R4STdvaF82NmtIcXdtY0FBSGF1djRlVHRnSjhEYXBKNktyblE1RkpYc2NOcWRmelhvZnVkYnVVLUVsWHYyZmhicUx3YXpwRXQ5V1lVRkozcmlJSnFOU19lVG5zc280eEotcEc1RkpmT3pMZzg?oc=5",
      "All_News": [
        {
          "Headline": "Legal & General Group Plc Lowers Position in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPVzRpMFBWSDRwWGRWZ08wSWo0Si1CYW1fSm94bXJ3UzJmQWRyX3ptU3R3aTB5OFNHcHdSMFduOHo0Y0xUT3A3Z1B3ZVowdUZfMVhQMmhKSjU5MDZlZ2J2Vkp4V3hDeVBpOEU1VTNvR0RFallPZDgtSjBQNDJoeHZlSFNvNDEtSW9FTVRRRTUwUWR3bE1RT1QzQzlEc1FWOG9SMHltbVJhcmZjNUlFc05XNDZ5LWtLLUR2d1dsZ1ozbFByZXZPUUlkbFk3cWI?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:48"
        },
        {
          "Headline": "Perbak Capital Partners LLP Purchases 12,085 Shares of Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOY0pWOEJqQVBZLWYxYlZCS2luRTF3c1BuRXFha3hQajRRWTBjcnZ2bmE5eDNrX0FGS3FMLW02ZDVPeDN5bjQ0NVFkYUtNX3FPUTdKak1BN1I4SjIteElEaERNRWVPeHRIalhVT29hMXB1dFlPZTZNMGNqX1d1WG9oWHdoU1E4SXFlX3pBaUIxYVZBa2Y2emtiWk5GaFBtZ3JnLXVKVGctOUJzQ0JoOFhURnFla2NxUnMxQzJ5OEJLMVR2SkdIYnVLeXlpUzFQcjlPOGZzSU43akpYYWM?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:48"
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
          "Headline": "Akamai Technologies (AKAM) Price Target Raised to $120 by Raymon - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNZUVBVFlRUk1vN1VGTUdoR1lwVExSekd2c2s3VkQ5aUMzV3BKWEtsaWpUcHZ5QU53UzkxWE1Jd0R4STdvaF82NmtIcXdtY0FBSGF1djRlVHRnSjhEYXBKNktyblE1RkpYc2NOcWRmelhvZnVkYnVVLUVsWHYyZmhicUx3YXpwRXQ5V1lVRkozcmlJSnFOU19lVG5zc280eEotcEc1RkpmT3pMZzg?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:48"
        },
        {
          "Headline": "Connor Clark & Lunn Investment Management Ltd. Has $38.86 Million Stock Position in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxONjVoZjZveE84aFJ0STBLNml4RzBnX1NGVXZhNmE4NWFHLWVOeEZSdWZweGJSZFZSZ1VRRzlDUHlFQjJVcXZsNm5jRHNKdjJvNmQ0UjFCUmFfYXByZXRNak9LZEpBd003SWd5QjJvdHNzek04ZkFKc0o0V2pkQVluekozSTJFOWxGU3pxRHVMUHhiX2s0SGVmWVRwbHRpOXk4eW1uaHVac09jSHhzVXVDZWNKN2Nxd25WX2s1VnhaakU3MWRYRGwtQmx1ZmdXeF8tV1JCWmRxQUs3Ty1vNFd2TktSY3NNRDFfNURWNC1HYVM1dGM0VU9KUThjNlM?oc=5",
          "Category": "Institutional Investment Activity",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:30"
        },
        {
          "Headline": "Natixis Advisors LLC Boosts Stake in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPV1VKMzNJNXBhSmR1QlhQY0xGdEY0RmY0SU4tazB0SnUtQjZORnloYTdFV1JGY09Xalc1LTRvc1gzVGZVeDJDdEtvMzRUY1luSGhwNVQzM0RNLXFqSjl5WThLWmUzTkRYTDVnQmVJOGlrMzNKLURndWJmckUzMDhrc0U3aDhEa3o4ay1FVGJ3c2I5UnNhOUh4dm1WMGctWThWLW9PN2ZXcEV4azA0TERmMEU1c1kyaEp5M3p0N29RcExuZDRM?oc=5",
          "Category": "Institutional Investment Activity",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:30"
        },
        {
          "Headline": "Akamai Technologies, Inc. $AKAM Shares Sold by Mackenzie Financial Corp - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNaDdkN2lwRUlIWHBfa2xTZUwtZ0FXbTl2LTRELVR4OEZCN2d3Q2RWektxZjUwcmp2YTBuZ0ZQbDhadlNOOWo4Z1ZTb0NxeHZ1U0VvU1Q3VGM0RFZUV0IzdmZCWUJQX0FRNlB3UnpfR1lWVklFMkRITUpiNkJoYnN0RGc3MnFia2xWaGVMbzRPVGduRkFFb1NGdUFDZGRqQXBmWmlJTEZqd2pNdlRVLWRaaG5ZRy1UbUlkblpTeGxVNmNvVFVUR3J1UQ?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:00"
        },
        {
          "Headline": "Akamai Technologies (NASDAQ:AKAM) EVP Anthony Williams Sells 15,000 Shares - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOMExaTWFKa1pUaWRWMWlzd1FENjBXalI0MDhHZlFwRk14YjMwNXhXNDUwcXVJc0lpZWFlLWZ1RlM1RVhBZ1NwajNDWlpXNExVMWtITXo5UXE5UlRLbnRwQTlCMzA0THdaM3Fnd25MY29pMVBKSEZ1RVNxaWtIbU9ZQnplSE9GS1k3N3BiSGZkUlpiTkc3TS04MW9ObWJhMDZPOE5tWlpzMVVqOTRMRDA0ZUhoR0hLRzM2NGFPZnZqUjR3Zw?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:00"
        },
        {
          "Headline": "Inceptionr LLC Purchases New Stake in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPRWpONFE2dUU3SkVEQS1iamZWNHNPYTBTcEl6cFBwUTJyR1JVLXZCdU1aMWp4ajdqT25TTl9jbXlpVll3ZXdwc3J1VE80RExRTkszOEZadE1FeUNqZHlyaFNJZWJWTmFVUGNjYmtpQzZXdFR2RlQzMFdTaXo5aUhLdTBXVFN2Smlsc3A3bTczSWhEUGZ1LWoyRGZIVzdCX284OVY1Sm9PS1ZFQ3lHbWVpdjNqbjlmbzJoQVk2SGtzUnJNRWd5dUE?oc=5",
          "Category": "Institutional Activity/Holdings",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:57"
        },
        {
          "Headline": "Akamai Technologies (NASDAQ:AKAM) EVP Mani Sundaram Sells 1,722 Shares - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNenlkQURBdW5odDB3a3lIWVlSSTJ3dU5ndlN2eXJCOFJGR25taWxMeTdYd1JNSWpoZ1F5ZUQ0eU5lZ0VnU19vMGt3Uk8yY0lpOHMyeEtiTUljU0cxTW0xY1gyTzFITWFhYzd0Tzh1T2NkRVhIcDBodkFZV1JkTGtNMTh0Q3dzeWVfY1JqdjVZeEN5RUxwYUx6X1pfbXVzOFhSOVJsRHhERWNnZ3lqUjNXWjg1T2h5SExXc3NTTA?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Dimensional Fund Advisors LP Grows Stock Holdings in Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPaDIyTHEtdVI0Tm9fUXdEUnpzNW1yRzZXa08zVmJUelBNcWNZcHRDU3FReTAyV3VPMVlYQVJtbDdRb2xXblNGcU1iMVNtZHdtYkIwb3prcjV6SFdLeGFObUI4WXo2UENrVDJoX0dpYXFnNzQxU3hxZ3hveUJ5aXN0elRsZ1M5X1VBSVFNVVlEOEJwYmZxc3RYTzU4bXh3NHJmSEYtdm9HdG54NW1oXzVSOW9udXRYRkNTdnJuUGNYdzVzVEdqcUtNM1BkWE9MSzVTbVFKMEFEM2tBdw?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Grantham Mayo Van Otterloo & Co. LLC Buys 74,791 Shares of Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxORW15MnExWXpXN2Z3MmQwa2ZwNWJMR0loTERfZWZZTlhHeGJmWjQzRjNIOU5NamdjRHpiUTlfSUhXZk5MckZHODNUREdyeEdOQ1ZFOE1oc2RCN1lnQkRCNEVFektoeEdvNzhBZndYSWdNLVFiNkxFVnlITU42aW1lei1tMWVXa2ZYMVBabk90elRJdk9oNzVlRG9SRTE5MVJ2b3ZIbUhfYmhzUDhWTHJ5Wkttdi1SbEU0OGZ0WFV4YnBRTUtxZHdVS0FOU0hjdDZicmJjZHVKNmxnVE1U?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:41"
        },
        {
          "Headline": "Intech Investment Management LLC Sells 54,544 Shares of Akamai Technologies, Inc. $AKAM - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxORGlWTV9rOEtyYk5zdDJWYnROSHY5d1gwUFp0YjczczZlVGZHVlVoa29IZlA0TmdmX3V0NVRrcmtnSGlHdmRtOHNtMS1nTm1iVDR3M3V6R0hOM2xHajV3Z0dSUTh6eWNwQ3VZc2FtTE94elRYSmpreEdXb1VjdTBEeUtBSFY3SHBzUWFiSHNoWjFQUW5wWTNJWFNBTlhtd2xMaEJrTm5rWkFKNDJoRFhXeEJxaGhnUHNwZ09GdVo0ZlpjVHI2TC1jZHdTRFh5SHNHZVc5dnAzbEtCZ19z?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:41"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ALB",
      "Price": 158.22,
      "LSTM_Confidence": 0.65,
      "News_Sentiment": 0.7,
      "News_Impact": 0.8,
      "Headline": "Did Albemarle\u2019s (ALB) Debt Tender, Dividend and Cash Flow Beat Just Shift Its Investment Narrative? - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQb25vNnBNWWpKOWk5LVVkeDctdmpqaWlReVNVZVhjVGZ0bW1EcFhCWm0zZVVUTy1jR1VHRnBiM1JrLWZ3MHgxLThWNmU0NTVHUVNhbVF6VXJMY3phVGZkb3c3VVFpc1JxLThHTURyU1doaHNCTkdVeGFNYTI1bThYenpLMVlzQWpZYkRja1poV3dUVEZJYy1hcF9HMnoxSTRmcDJ0SUJFczBrWW1wSnBIZW1nblFWTUtNdWw1V0JFY3hsZjNuRUxGR1R30gHKAUFVX3lxTFBvbm82cE1Zako5aTktVWR4Ny12amppaVF5U1VlWGNUZnRtbURwWEJabTNlVVRPLWNHVUdGcGIzUmstZncweDEtOFY2ZTQ1NUdRU2FtUXpVckxjemFUZmRvdzdVUWlzUnEtOEdNRHJTV2hoc0JOR1V4YU1hMjVtOFh6eksxWXNBalliRGNrWmhXd1RURkljLWFwX0cyejFJNGZwMnRJQkVzMGtZbXBKcEhlbWduUVZNS011bDVXQkVjeGxmM25FTEZHVHc?oc=5",
      "All_News": [
        {
          "Headline": "Albemarle (ALB) Declines More Than Market: Some Information for Investors - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPdm5UeE0tQ0tIbEpOVlp0eFZ2cUpfaGtybElBTThQa0RSbTV3Z2pQeHVrYXplc21RUmd4ZzFOY1ctYmFiT2xmeHVmV2JuQmpTMU1UZHFFRjMtenVRSkxKV1VUaHBSQUNZMnU1OFlVcUJlYy1iY2VWT1IzdXNXU3RTRzdrdUNsaVE?oc=5",
          "Category": "Stock Performance",
          "Sentiment": -0.5,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:11"
        },
        {
          "Headline": "Albemarle (NYSE:ALB) CEO J Kent Masters Sells 11,783 Shares - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQZEFuYnJQTlJCbFFHZ3d2ajJRSFhyUU5XQ2JGaDY4Y2x1R29uV2ZHeDZWRWdKSWlVbU1IUnhpekhGTjhKVUktOTZlbVI4dUNzUm9BZUNORUJEd1htd1J2TkI2WTMwVkFMNmdrQW1xM0JOclZqOE1MQjJ5ZGQ1SXpab0Y2REEtTXdGWU9nU3ZZenFaYWM1UElrZEZCeUd0dTE0ZVBxNUVZWGdFZDNQbnc?oc=5",
          "Category": "Insider Trading",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:11"
        },
        {
          "Headline": "Did Albemarle\u2019s (ALB) Debt Tender, Dividend and Cash Flow Beat Just Shift Its Investment Narrative? - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQb25vNnBNWWpKOWk5LVVkeDctdmpqaWlReVNVZVhjVGZ0bW1EcFhCWm0zZVVUTy1jR1VHRnBiM1JrLWZ3MHgxLThWNmU0NTVHUVNhbVF6VXJMY3phVGZkb3c3VVFpc1JxLThHTURyU1doaHNCTkdVeGFNYTI1bThYenpLMVlzQWpZYkRja1poV3dUVEZJYy1hcF9HMnoxSTRmcDJ0SUJFczBrWW1wSnBIZW1nblFWTUtNdWw1V0JFY3hsZjNuRUxGR1R30gHKAUFVX3lxTFBvbm82cE1Zako5aTktVWR4Ny12amppaVF5U1VlWGNUZnRtbURwWEJabTNlVVRPLWNHVUdGcGIzUmstZncweDEtOFY2ZTQ1NUdRU2FtUXpVckxjemFUZmRvdzdVUWlzUnEtOEdNRHJTV2hoc0JOR1V4YU1hMjVtOFh6eksxWXNBalliRGNrWmhXd1RURkljLWFwX0cyejFJNGZwMnRJQkVzMGtZbXBKcEhlbWduUVZNS011bDVXQkVjeGxmM25FTEZHVHc?oc=5",
          "Category": "Financial Performance",
          "Sentiment": 0.7,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:11"
        },
        {
          "Headline": "Assessing Albemarle (ALB) Valuation After A Strong 1 Year Share Price Rebound - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQQ3l0TEZ3OXZDR1kweUd4T1JPN1dsS01MY1FybGs1S3dEVHEzaUs5ZVlqOERlTjlPcXdhcTBSUGI3ZFJVbVZDTnJsYmU4TzZ6S2Fld2lISFY0OGZCR0MyaHRBWDRIMUZyS0NYck9ZU1FUNFh0SHFkNlVMTWZDREJJNUpCU0hxMmJPWGQ0UmZVcw?oc=5",
          "Category": "Valuation",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:11"
        },
        {
          "Headline": "Dimensional Fund Advisors LP Has $119.71 Million Position in Albemarle Corporation $ALB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOZ0psYW1uOU9qSzJfcE5DTXFUYVJkTllBM0dleDI5bExvQlFFWnV6cUVOTGlibEJxeks0YlhMdE8yUnZpeXVCWGVTZDlBa0RlVGtUUUZ0dHBtcUoyeFJzb0RKVlItU25qaXRCUG9uRUpKRmEtOVlvSUJ2UVRpNUdGejRXcXFVSUExZWhYQUdBWXJxWkk5WHlqR0Z6ZWk3LTBVUG9FeXpqbXJGeU45ckhvZllMdmZoYnpzY3dfZjhiNlI3RUJmZEwzN3lETklINVg2TUNoMndoc01WeVlVRXc?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:03"
        },
        {
          "Headline": "Has Albemarle (ALB) Run Too Far After 134% One-Year Share Price Surge? - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNVVkxY1NvcG9iZHFMYUxKNDA1a0xEOUJyRW9Uci12NVFvSzB1bkQwUmF2cFpuTWpCc2FENkZGRUUyZWtvbzNaRTVod1NqSVU1RjNlWGxoMW5IRG9qVzVUNExzNE81dDNNb1ctN0ljNUVBVE51a2tZNHQ1Sl9BZTNlRThqX1VuZHJCXzVWZkdWWWZOMFBKX0FmM3Rsd2RLNTJ2eENKUHM5d1l2SFRUUGc2UmhoVjFieHJid3ZSZVJhQk5UTHB2SDVuZUdB0gHKAUFVX3lxTE1VWTFjU29wb2JkcUxhTEo0MDVrTEQ5QnJFb1RyLXY1UW9LMHVuRDBSYXZwWm5NakJzYUQ2RkZFRTJla29vM1pFNWh3U2pJVTVGM2VYbGgxbkhEb2pXNVQ0THM0TzV0M01vVy03SWM1RUFUTnVra1k0dDVKX0FlM2VFOGpfVW5kckJfNVZmR1ZZZk4wUEpfQWYzdGx3ZEs1MnZ4Q0pQczl3WXZIVFRQZzZSaGhWMWJ4cmJ3dlJlUmFCTlRMcHZINW5lR0E?oc=5",
          "Category": "Stock Performance",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:03"
        },
        {
          "Headline": "Albemarle (ALB) Declares Quarterly Dividend of $0.405 per Share - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQUHIwVGlVR2lIbkFRRGdmWGxzU3JBZTV3R0xtQTRVN19LVmE3RTdUZGczb254TXpKX0Z1V09pejBGWG1NM1hmbUFwQmxxbmc3TnM2dkN3WG82aUlMTTNxR0dXZ1lXUU14UWVxUDhWX09sZjZCRGxjbHhWMHJDWjJEWllMcE1RZENTNEpIT2tUTHJqdl9wdDJFUjBYUW5wUEtPVFFpdGZwX3VMc01aOUd30gGvAUFVX3lxTFBQcjBUaVVHaUhuQVFEZ2ZYbHNTckFlNXdHTG1BNFU3X0tWYTdFN1RkZzNvbnhNekpfRnVXT2l6MEZYbU0zWGZtQXBCbHFuZzdOczZ2Q3dYbzZpSUxNM3FHR1dnWVdRTXhRZXFQOFZfT2xmNkJEbGNseFYwckNaMkRaWUxwTVFkQ1M0SkhPa1RMcmp2X3B0MkVSMFhRbnBQS09UUWl0ZnBfdUxzTVo5R3c?oc=5",
          "Category": "Dividend",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:03"
        },
        {
          "Headline": "Albemarle (ALB) Declares Quarterly Dividend of $0.405 per Share - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNN0JCdUo5emtwbkwwZTJibF8wZU5MaE5MYmowRXcxY3pTSi0wOHMyOWRPVVB0SFA2WHNHeWZUQUJKZ2tUcDdmdF9zX2VvdlF0SE9PeHRxcFlOZ0tzXzQyZzhrTi0xZ3BLQ2RUM1dPeW9XZFB4akJEV2t0Z0FXVk5SWHlFbDBlejBkRTlNUzltZ1M?oc=5",
          "Category": "Dividend",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:03"
        },
        {
          "Headline": "Albemarle (ALB) declares quarterly dividend of $0.405 per share - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPWVBUTUxJZURxUFh2OXM0Q05Wa1BKN0VjYjh6aXBCYWp2OHg1UnJGdzA3UnNSQW8xSFVEb2Ftd3F1TGJsUGRmZkNHVXdpRkNGYmM4ejFHOUZJOHNlOEFUWmQ4MzBaY2NVRlAzWlRpTWJSWW44TmhKRVRPT2FfN2N3VHJaRWZMSGxqOElsVkJZakNBS083TXozTkdFLS1zMGFtN01VeXdVOFFZRURLb2hJaHd0TUVfV2pJOVBWVFB0NVdqeVFKWDRaV2dZSWhqZXpQR2VWaQ?oc=5",
          "Category": "Dividend",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:03"
        },
        {
          "Headline": "Albemarle (ALB) Q4 Sales Rise 16% to $1.4B on Strong Volume Growth - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPUDRwMGNQQkw4SFZmWGVremJVa3IySEU1ejVxR192X0l3VElXdC1DRHkzXzlxd3JJenI1NC04ZUtsSnlDTmtuSHFDT09pejlVM2xQVjhYcjBLa19mSTF6amFNUWN4bFZJTEMwVE5Ed1VDaHJYbTM1RlZtblJWM0hxZFlfOExrSjVudmpUWlVuQUg0TkxzSnZHVFM2NlVEY00xbHFTOWdKZjYxd9IBsgFBVV95cUxNcGR5OURTYkxQRGZCQUlZbXRxakpvRzZjdHdsZ3loSlVRMHd2bWRsYnlCV3l3bkRVaHZwbWwyWnJPakpGbnN5V3lDVUpvUkhoSVVDN2huampqOU16cnZTRjRkUjF2VVZiaDZXNENHaG9NS3E1bi1XeGgtTzhjVjRNbFZtalpldjhzU3BlaWtyM1hmcEhxV3owMFN5Z21ZX0pPUVY0VEtpMnROcFRjeFFEMzJ3?oc=5",
          "Category": "Earnings Report",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:57"
        },
        {
          "Headline": "Truist says lithium demand could drive Albemarle Corporation (ALB) growth - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPYXVHRy1mRDNmNVpRZVRIUjRWdTFZZUFCOTVlb0hKdDd1NlgzYjhsMWtxZXRDTWpreWZVSVV3VEwybGd4SVJETjFvNVdwU2dLZlJqa21kc0JITTl5NnZEWTJhZmU3ZHFhWW4zbHBUWUtUTnVMN0xiRUprMDA2NWN6Z1U5MFo2aEhaT2NPcG9IY09CaW1pY2xTMzRsRU5BclVxTUlXdDdoTE4xNG15NFJOQndIN05HYS1ubnc3bExxcHRBWTdBbkI5UGVzbjg5NV9mM2t2MlM0OTBoN0VCQ19wRFlFMA?oc=5",
          "Category": "Analyst Rating/Outlook",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:57"
        },
        {
          "Headline": "Albemarle Corporation (ALB) Is a Trending Stock: Facts to Know Before Betting on It - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPbDNwYmZlWkVBRl9RX3NKeHByVXAxSmwxbDFqb1NfUXJxOENfa2w2c3hoN0hoMWFJVzFSX3RHa0R2b0pnYURJWHdzYWpzZnJsOXVjdVBoSGlPbE8xY1lwSTVMZ1VpRFBPcU5NV1lHSEdJYk9oUTRiS1hHam0zSzA2Q2l0anhUeEZ0MW1LQVR3aw?oc=5",
          "Category": "General News/Market Trend",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:57"
        },
        {
          "Headline": "Fieldview Capital Management LLC Has $1.77 Million Stock Position in Albemarle Corporation $ALB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxNbmVGVnpPRzlYM3lEYWVxd1JqMVdvdld5TERzYjUyWHFHaDdpWVJ2eW9paUN2OXc5ZGlQWjRRUGZmTV9YQmZndG0zbTBvMFc5WkFQUjIwWFcyVnVCeGpLTnFsZHR0ckpKTnAyNnFIaFh4ZXEwZ2llU3ZGclVobk12c3ZqZ0NPY3NyMlhmS09OeEtYMVF5OC1vV2RiM3lVV2JNY2FPZ1NDcDVYQVdDUVhPWjlIVlNha0tlNmMzRXJIQ2toMVlNUGVnZUVXNnNqQ0c3NmEyeExhUVUtM0lzVEJaNzFPWlZOZ21F?oc=5",
          "Category": "Institutional Activity/Holdings",
          "Sentiment": 0.1,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:57"
        },
        {
          "Headline": "Truist Says Lithium Demand Could Drive Albemarle Corporation (ALB) Growth - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE80TTJNMkJKSWhrQWdEM1BuS2dEQ3Ywck03Nm5ZaDJELWVuV2s1cS1NRWpVVFB1bEJzYUtuY1BTeHdOUzczWXRCQWhDcG9VdUw3NTJxTDlmNXhTNF9HQXRiLWJEa9IBY0FVX3lxTE80TTJNMkJKSWhrQWdEM1BuS2dEQ3Ywck03Nm5ZaDJELWVuV2s1cS1NRWpVVFB1bEJzYUtuY1BTeHdOUzczWXRCQWhDcG9VdUw3NTJxTDlmNXhTNF9HQXRiLWJEaw?oc=5",
          "Category": "Analyst Rating/Outlook",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:57"
        },
        {
          "Headline": "Meiji Yasuda Asset Management Co Ltd. Decreases Stock Position in Albemarle Corporation $ALB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNQkdRV2sxeG5ZY2djeHpPNExPajB5N2dZTDREbFN4bFBveTI4WnJOOFlqMDh1QU1aTWVmeVhzaURVQWd2LWJPM09NbE4yTkhnWUg1WFE5QmdkUXFjeWRLRFpiSG1mMGhWTWNWVFhmSTFjTGJxSzkxcWJHYy1wNE1JV0toNkVWeUZJaTg1Um9NUTB3ZjRaS1lFOTl4S28zZDBfYWh0S25XM2hWMEI2a1dYeTRKWmpmYVZCZW1SbTZXTVk5UzN5NFg0N2JJZVV2eUxEaVBuR0h3SWdUdlRjOHVBTl82amJSQQ?oc=5",
          "Category": "Institutional Selling",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:30"
        },
        {
          "Headline": "Albemarle: The Drawdown Could Continue Despite Improving Lithium Supply-Demand (NYSE:ALB) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOMUxVcHFrOXJ4aElSY0xlMDc4RDFQQnlTQUl3d1dLNjFWb05jNDJaWG5YQ0FtNk5EQ0JpOXZsaG5JR0lfcmVGTHFIZkcwWUprNG9YM1hCbmtMY3BmOU1mM0RNTGxGMDRNbjN1dzY2VW8xVXZvRzB6UGo2RFJwWDRQNHFnb24tdmh0R0tFWDh6b2FzNmJTSUE0VDlPc2ZwdUw5X1l6TTF5SENaeWJlenFDY1A0Ml9LNW0tZ1E?oc=5",
          "Category": "Investment Thesis",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:30"
        },
        {
          "Headline": "BW Gestao de Investimentos Ltda. Purchases New Shares in Albemarle Corporation $ALB - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQQ0dxZzNzV1d3LWM3ZG1MdHczOTgxYnJ2YmtGUDN3WG4zal9oWEt6RkV0djQwTkUtU0YyR2M2WXFKNG5vbDhxV2NTazA1U2JRTnZxaWZrN1JPX011blVSVkVKNEJnMWNSZHRBSVNHUXg4aEl0dTM1WWpyaUNTYkJncHhJUlpSLTNYWXlyZnNFYUUtcV85alVjczQxcEJnSnBlam1mcTI0Y0tSR1lGY3gybEdPbVh3TGpjV1psc2h0R3RLdEpXbVZkZ3hXaG91aU02dFVWQzFsWHFZZw?oc=5",
          "Category": "Institutional Buying",
          "Sentiment": 0.3,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:30"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "ALGN",
      "Price": 164.23,
      "LSTM_Confidence": 0.78,
      "News_Sentiment": 0.6,
      "News_Impact": 0.5,
      "Headline": "Align Technology, Inc. $ALGN Shares Bought by Grantham Mayo Van Otterloo & Co. LLC - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOcGloeXpKNk90QzlrbmpqV2ljOGNUVHIzSGQ1UmJCQ25JUWN2RkF0UVotbDZlalBFejBJMmhrRWMwZjRCTVQ1SjRwOEY1QWhheVVQeEFFY2pCU2N6TjM5a3BtVXE3dFZVRzZCUVVweEU5dldzUkRXVy1VUWFMWTlDOVViMWh5ZWVIX3hFOTBWdW9xc082OGJEZHM1aWFkQ3ZOT0puTHVhZjduU1RTYWxvR044YzhobUJEa1pWbHRhYWEzTVdSTUMwNFFzOTQyZ2hmZ3Zz?oc=5",
      "All_News": [
        {
          "Headline": "Is Align Technology (ALGN) Pricing Look Attractive After Recent Share Price Pullback - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNUhxd3lDMkY0bExPOW1zZU1VeDFRVWJMWFBLR21ibGp6cjdYVWtSNkdwNTJBZXg0dWE2M3kyMmFhY1hHcGpiNVdMR3ZGXzVSMWxQNGFyVG40VjY4cTltUktORnFhTTJPSFFCdmtsT0NPQi1PSEdNZWpZSEpyVFl5ZG1TTndMaTY3WG9ZY3FGRjB5WXlSQ3BKNG1ESlowa2huX2dKdUh2SnhCNm5FODJfeC1JMWJqUkpETS1sTzhnaEpKZjJlYXVONV9QVXoxdzBWdktmWEZINzbSAdgBQVVfeXFMUDVIcXd5QzJGNGxMTzltc2VNVXgxUVViTFhQS0dtYmxqenI3WFVrUjZHcDUyQWV4NHVhNjN5MjJhYWNYR3BqYjVXTEd2Rl81UjFsUDRhclRuNFY2OHE5bVJLTkZxYU0yT0hRQnZrbE9DT0ItT0hHTWVqWUhKclRZeWRtU053TGk2N1hvWWNxRkYweVl5UkNwSjRtREpaMGtobl9nSnVIdkp4QjZuRTgyX3gtSTFialJKRE0tbE84Z2hKSmYyZWF1TjVfUFV6MXcwVnZLZlhGSDc2?oc=5",
          "Category": "Price Movement",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-13 09:28:33"
        },
        {
          "Headline": "Align Technology, Inc. $ALGN Shares Bought by Grantham Mayo Van Otterloo & Co. LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOcGloeXpKNk90QzlrbmpqV2ljOGNUVHIzSGQ1UmJCQ25JUWN2RkF0UVotbDZlalBFejBJMmhrRWMwZjRCTVQ1SjRwOEY1QWhheVVQeEFFY2pCU2N6TjM5a3BtVXE3dFZVRzZCUVVweEU5dldzUkRXVy1VUWFMWTlDOVViMWh5ZWVIX3hFOTBWdW9xc082OGJEZHM1aWFkQ3ZOT0puTHVhZjduU1RTYWxvR044YzhobUJEa1pWbHRhYWEzTVdSTUMwNFFzOTQyZ2hmZ3Zz?oc=5",
          "Category": "Institutional Investment / Share Acquisition",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:19"
        },
        {
          "Headline": "Are healthcare shares trailing behind Align Technology (ALGN) in performance this year? - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE8zTGowU1pUSWNkZVlpMDdicnJNZV9SdlZ2ZnpjUDZHVEJpYktmenlDYk04TDZsOWNRT2JlU25sanhudnVURnBwTUJucmRlcXAxdWR3YkQ3c3VGVW1obHdPZExKMNIBY0FVX3lxTE8zTGowU1pUSWNkZVlpMDdicnJNZV9SdlZ2ZnpjUDZHVEJpYktmenlDYk04TDZsOWNRT2JlU25sanhudnVURnBwTUJucmRlcXAxdWR3YkQ3c3VGVW1obHdPZExKMA?oc=5",
          "Category": "Market Comparison / Performance Analysis",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:19"
        },
        {
          "Headline": "Align Technology, Inc. $ALGN Shares Acquired by Capital International Inc. CA - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOalV0UFZ0YmZnNDkwbmZzTzBPeFhtWmxwb1FoVU5Oem9tZXN3TDhaSlJuZ2djNmVRbUV6Y09jZHJNd09FRUVlNTRISVUzTlNOOUlqT201TGFlWUwxbDFmQXFDR2RSZjc4WTlJTjBIT05MMjh3c3NIRERXaTIxWWNNdmdQZTg1MlRrLUtiNzk2WXN3cTRZVWdMRGpMcEluQlNDZGItMTJUX25wY2hJSE9FeW9IcFdOdG5KY1lXQVAtYVIyaGN3ajJ3ejlXZzVqeWs?oc=5",
          "Category": "Institutional Investment / Share Acquisition",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:19"
        },
        {
          "Headline": "Capital World Investors Buys 19,952 Shares of Align Technology, Inc. $ALGN - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOU0dNV0JGTkFaaTB6R1Z6cnllaVAtU1ZBbDlwZ1pGS3Z6TFFuWFR6VVFnSTVWcmdSSGJURDc3dGlkLW1RMjBjMEppT25zZzU2X282bDY4SGM1WTZBaXJ1SF9GWXpZWXdFUnJvS3NsU2p0eXBDdXdzREg2RUhhZ25EdlJob1h1Z1djdFpRWkgxOXdIQ0dLd2h5ODl4R1RFTjNmaFRadGFwU0NPMGJ0SFN2SUw4MkpyOF9aV2NLZGtJaDZXZVlSVmhJdkl3dw?oc=5",
          "Category": "Institutional Investment / Share Acquisition",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:19"
        },
        {
          "Headline": "Barclays PLC Sells 14,875 Shares of Align Technology, Inc. $ALGN - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSy1ZdUpLNDZMMjVWeEV1eFRxY2FGZ0ZQdmx3NWtHWW9KWGF3Um5MV2d4R0k2Mjd4TExHV0hPQXh3dG9QYXA2Mi0za1dkM2toUmNQLTFrUmRqNmFhdDdQQzh6T0hIQ0t0aUhLcXFVQVlheldHSk93LVZ2WmRyc05qUXk3Y0dNR2ZhMVBaV0lqYkFiTkVXdGFwZEJDSUo0X2hXM0xES1ozSTc2M2NlZlctWkRUU3NwM1drb0NVTEdR?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:48"
        },
        {
          "Headline": "Capital International Ltd. CA Increases Stock Holdings in Align Technology, Inc. $ALGN - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQUWRYZHNJQ2N3OHoxZVc4bVpaT09OdUg2dTQ4RlZZRm9RX1FLMWczUk4zaUtxRWdhUU1QOGk5WkhtT25qN3lBdEtKOWZPekNfSUVzMno5NkgzWERCd2hPbGR4Z0UwbUN3NGtfOUhlWDgtc015bmxZSUhWM29SQnA0YjdDQVdSNERsdERQa1AzaDB0aGt5ckZEM3ZhSEd6ZkJFZ1g0bG05MHVld3p2ekV3cUFZNUhQOU5sZlU2TEhZYmR0Y0lmTlVmc3pkdlhBZzdpRmQ0R0VjdXUycjg?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:48"
        },
        {
          "Headline": "Fieldview Capital Management LLC Purchases Shares of 7,936 Align Technology, Inc. $ALGN - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNNGl0bzdTOVJTVXpVbHdBVEZ5dm9iVTZDa1NyVjcyaE5hMFJfR0Z2a1NrMDZhLXVhcWpvTEdQbjNYYXNhYnpDbWdndFpDSW5vdElMcW05WWMxanhscjQ5TS1US05fNDM2V2tVdVZMSG5nTFhZVXhJTks3QjFWX3YxTTdXTkh5VHptcDlBa21iRWhhVXlvc0FNMjh0X3puYklEZEhrN2QycldTVndHc09pV0ROdkZyQUd5NEF1VHV4TWxoTVBGbml2X3JUWDJ4OEk2YlNtTWV1SVA2cVdQ?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:48"
        }
      ],
      "Signal": "VOLATILITY_WATCH"
    },
    {
      "Ticker": "AMAT",
      "Price": 341.53,
      "LSTM_Confidence": 0.63,
      "News_Sentiment": -0.8,
      "News_Impact": 0.9,
      "Headline": "Applied Materials (NASDAQ:AMAT) Shares Down 3.9% - Here's Why - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQa3NKTHh1bE82ZE5aYWU2MnBiTUVmQWNfZzg3akdPRDQxRnpkUVBnWGRsQ3pySWR4Slk2bTlUY3g0NjZSMkwxN0FrWFNSYWNxOUN5eHFBMVNFaFM2QlMtd1FXeWd0MmRjUlN2aDJfR2Ytak4zeW5XS2NLZWRqZzh2dWZDNzdsNHZ3ZHpJM2t4cXdZdjBicG9yeHhIcl84X3prekd3ZkxBZTBoRWc?oc=5",
      "All_News": [
        {
          "Headline": "Applied Materials (NASDAQ:AMAT) Trading 1.3% Higher After Dividend Announcement - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQZGJ0OFlJWndndlFPSXdXampWZnVHT282MkcwXzlHTXBJQVRPV19nLThwSmMyQWpjcnVPR0tLZVlsbjdhUUtVRGJTYVp0MWVVaGc1SU0yemtsV1NiMEJrZWVkN3pmazBTNUl1b1hlTUdmQV84V2dZRVV3RTRYWkhHOFlZNnVscllXbnluMnBxeExQUGpOeU9Fa2s5UFBtakRIZHBMZllxYzZsVFBtaWdRa2M2Z3JsUXJ5V3NjU3JwWHotRGY1NU5B?oc=5",
          "Category": "General",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:45"
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
        },
        {
          "Headline": "Applied Materials (NASDAQ:AMAT) Shares Down 3.9% - Here's Why - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQa3NKTHh1bE82ZE5aYWU2MnBiTUVmQWNfZzg3akdPRDQxRnpkUVBnWGRsQ3pySWR4Slk2bTlUY3g0NjZSMkwxN0FrWFNSYWNxOUN5eHFBMVNFaFM2QlMtd1FXeWd0MmRjUlN2aDJfR2Ytak4zeW5XS2NLZWRqZzh2dWZDNzdsNHZ3ZHpJM2t4cXdZdjBicG9yeHhIcl84X3prekd3ZkxBZTBoRWc?oc=5",
          "Category": "Stock Performance",
          "Sentiment": -0.8,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Is It Too Late To Consider Applied Materials (AMAT) After A 127% One Year Rally? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQc1FCa3ZzSE9oUktzb0hrZGxkMEZmam9WQTdvNjJKRzdRSEIxN21nZFNTWFF1aFp1M2hJUFh4bWJEc0RhaHBhT04wODJwVmlhNGF2Y3R6UnpxRzU0aGpJMDlhOVRWRGwycWM4UlNvaC1WSGhMakZ2dEdJVUlVWXhlRDFUQTdBUDI3?oc=5",
          "Category": "Analyst Report",
          "Sentiment": -0.2,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Franklin Resources Inc. Sells 199,881 Shares of Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQWFdfekxxU2dzd3Qzei1ZaXZWeFhudy02Zy1UZzRsWE1ObWlfeWd3YWowWGp1VkRNTDYtdHQyMXo2NnZwZkVVRFB3X2FDSU5xcFYwbld3RlQ2VDcyNFdLbnhjTkY2cWExZmZFMklVVXpYSDNnSkxQNHdRaWs2ZjZwM2xPTEdDNDJUenBMUGRLblJGcWtjdFo5cmZWTHN4RXBWQ1djTExCb1N5ZWtkeDRHOV9jTmp5WjhLa3Z1LTBabm83cnpHdjBlMUFmZHlhdw?oc=5",
          "Category": "Trading Activity",
          "Sentiment": -0.4,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Elevatus Welath Management Grows Position in Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNQ2ZHS3FpRjByaFBjQTIxRGtibHBWbVNmUjJCWDVQTFNSem50ZnRaTERWdHVVYmM0T1VhRDk0ci13dlFOVFNvVkJxMW1sQkxMa3ozRFMwOTJnYUZIakc4aFB5YzY2U3B3NGp4MENwU25hU296MG1EdmIyTmgzbV9ucHE1Qnc0cWhVRE5UclZXQ2YtZGVLSExWeXpISHFmU3ByT2tlRUdwRnpuY0VGYWMyVFlfbVZHRUVkV2kyZWp5S0hPNWtpU2dfYTlDNXk?oc=5",
          "Category": "Trading Activity",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "SevenBridge Financial Group LLC Acquires 4,978 Shares of Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOY09SbEVBY2pjenJaSjlXZFdQOGVVLXJ0dmZBZGdHTVlHeTJPVS16dTVvMEliUk53Y1J0NzdIcFdmd3g1QTB1eEhRUDVNOXNDMEhnSHlsdmpYZmxnWVBGeW5ydllWa1pHZkFzT1M5LU9aWUtGdVM5Sml6NmpyTXRPeUJTaHlZMi1Uam8xd0pMQWpOSUZodWNoeG5FV3N6aV9LMGdnSzE1NDA5ZGtSZjFmRElXbDcwQ3liUWsxQ0cyNmNDV2tYMkhlLWNGRnN0Vnp4UjlDcXpjanFLdW8?oc=5",
          "Category": "Trading Activity",
          "Sentiment": 0.3,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:28"
        },
        {
          "Headline": "Silvant Capital Management LLC Has $4.89 Million Position in Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOY3pBZkxScXNUeDNiQ0lISEVMaTRfOUtZck5Wak5NU2szUHJOenRfSWFHODlCaTdGbmQ4aXlsSWxURy14eXliaGxud1czZkhuYm11VVFUR1NNY1J1MVVYdUdDMElLdXVEcjFKemNYT0xHeVRNczZDYjg0Nk12Z3VXZEZnNXhjaFp2T3F1ajBLRVZxbE1JRl8tWFBNWjBzQlFDTEFYR0tLR2gwZFJIbWJVR2tuNElGeEJKck9YVUx3ejdhX1lWSXZfNkNvM3NNT3pWOVlwbnRYdGVzYVdUeG9V?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:06"
        },
        {
          "Headline": "Applied Materials (NASDAQ:AMAT) Trading Up 1.5% - What's Next? - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNOU5ObjNjQ0ZBeElabVA4czBMeDRDWGNSLVNCN2ZRWm9tUEdMbUM0ZGxPWWp0R1VMaXIyY2pZSjIyUUhMWXI0bTJRMlJmTjZ3ajlpQVMxdG5hY3VmQlh0dXJFdElpN0dLallORlFFR3RrTVE2Q2F5WTlKYndsa254OHJrZnk0Zlc2NFJlcWFEU2lrT0hGT19pclJvUUZHRlpURmc0aFRxbGpXMjQ?oc=5",
          "Category": "Stock Performance",
          "Sentiment": 0.4,
          "Impact": 0.3,
          "Date": "2026-03-12 09:32:06"
        },
        {
          "Headline": "Applied Materials and Micron Are Partnering on Memory. Is AMAT or MU Stock a Better Buy Here? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNQUtWZlVaUkdSM2V4aENxUmRqZC1lSjNoTTFXNWFKU29BbUh2SV92RnRVYUpUV0hlT0thQks3RkVua1h5NXJER0tpLW9NUWVKcGZESDNhV2pheVJIMURZbWN2ZEFMN3k1Qjg1UXVPZDdEQ3ZWYS1BNGtNcWxZMXBxaFBnZ19EY2R3S1A0dkRHSnpVdw?oc=5",
          "Category": "Partnership",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:06"
        },
        {
          "Headline": "Applied Materials (AMAT) Stock Climbs Following Micron AI Memory Collaboration Announcement - MoneyCheck",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQNzBwNE55QUlaOWFhbUl0VjJ4Z2FESUV3VS1xaENpM1I5YWNhSFhyXzFDcDl1bVQxR29mal9YS1Y5aXNwR0RZa3FLdGo0d2VkRTZndTdkNDNwTXlCWXp0S081R2g4RWVNSXZ0VXlKdzhpb1hENFB0b3FBVF9FbEZualQ1ZXVMamFpak1lcHlWRWpvZUdUSXBEUmY0dEhrcVVsMTVnV1RNVnQ2azMtSjlLbURkYw?oc=5",
          "Category": "Product/Partnership",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-11 09:31:55"
        },
        {
          "Headline": "FourThought Financial Partners LLC Has $9.03 Million Stock Position in Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxPTHNNbGt4WGVNUG4wdVFRTVdyem1nMFJFUVU4aElzOXlad19ialprZlRXNDhpQy04TW5KRllTaEVmc0dQMWZVcV9JN3Y3VDhYX2x1ODVQTmg3clBCUVlLeUpfel9RYlJmQy1NOGFuMlVyVmlEaHRSeGZZZ2hXYmwzVW1Ea3B1SU1DeHhBNzZMVS1mMm96Rl82NWpsTFBYdFRadUhLNlFTdzk2dEpFU0dma2s3eG9IZnlKS1JaZVY3MVAyWWlEajB4Q2R2cElWSXRSVEFPUE5XbDZuSUlBdEg4aUp6TzVpeTFtaE5FXw?oc=5",
          "Category": "Ownership",
          "Sentiment": 0.1,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:55"
        },
        {
          "Headline": "Applied Materials (AMAT) Stock Rises on Micron Partnership for AI Memory - MEXC",
          "URL": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE0ybjVqeUJtZVFUZGIxMUlPTjUyS1IwenJMZG9iNmJ2bzdDVTRoUTV5T3dZTWQ3ZDR3YVFxc1NvOE9ReGVrYUtz?oc=5",
          "Category": "Partnership",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:55"
        },
        {
          "Headline": "AMAT: AI-driven demand and supply chain resilience fuel rapid growth and margin expansion - TradingView",
          "URL": "https://news.google.com/rss/articles/CBMihgJBVV95cUxPVXRFWXZ5ZkhBMDQyQkhrWEQyWjFHR1BBanpUeDJJbjRFdXd6V0NibGhWR3RqLWVFU055X3ZQS3o5U1dyWDR3UWROX0h6QmU5Z2dQN3d6UGFuQ05ocVJLUWdlV3JsTEFKRFRrVFBnUlpJVHZITnFFYVhLNjRHdnpDQm1uNnNFNmpQUU1vc0s5eVFud0paME1rV3FsYmZ0dFN6RlMwX09mSUV6S25ZOWw1bGZ3NTBJNTRrQmNZd3Z3SWVqRXZWbHhMM3dtUHNKSENXOHhrS1lkbndwU1JLQXpHaWxzUzh0RWlVSnFLS2VRT1lqQnhYcS1qOUJOZ2FlSFFlT2ZuTGpB?oc=5",
          "Category": "Business Outlook",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:55"
        },
        {
          "Headline": "Capital International Investors Sells 3,480 Shares of Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxObmNZY1otU1NJTkNQT0w5MWtuSjZJY0lXUzVxbXdSY014SElwQVMxQkpkQ3pEUnRzZUhqamlTam5kbnp0MWcyNTNGczZXbnZyWDl0WXk3aXhWYktrUEJSLWVXSmd5V1d2NEVINk9RaF9qMXQxcEo4NUNKZm1HVHk0Y1I1MS1vd2dRVG1DLXduTnRUN3dIMHdOdlFaQmJxM0tQclFTcFFyQkRaQlI1QUtrLXluQldBSVR2eVo1eVFwS3IwNGllNjRSdU42RFZLMHFwVms2Y3BFNA?oc=5",
          "Category": "Ownership",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:55"
        },
        {
          "Headline": "Applied Materials, Inc. $AMAT Shares Sold by Swiss National Bank - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPLVQwLUIwS2NDQXNYeEFIdE82aUlZQjEzZG15NUFLUzVfVUJNWDB2bVdvV1V0cmtQUi1yRWZ1UmVhTlpNWjkzdmdQYzlydkJNb1RKUlVHNVN3bkZMS1lRSGdfNkZwdk12dFRCUUFzdFVqMi1rVnBWNko3MHdJTEpPVUY4LTNOYllhbURBdVQ0eklRVjRMYlpSRWJnWTV3UzRZcDlZbm1aaDhXR1MzT0NyZVgxcjF5b0FVVDZoNktsaw?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:42"
        },
        {
          "Headline": "Inceptionr LLC Acquires New Position in Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPcnNsd2xCdVhCS1BhcEJPMzZUd2ZTUnJ1TlJRalBvZTYxT3FzSk96c09FaUlrOFZWZ09zUkMyTnB3dXBsbXE0WDh6LVROZnREVEhZZVQzZ2xjdE1hOTFRb3htcXZyUlNTRm9fYzdOQ1Uzemg0ZUVKZmg5WEZIRnVueURORm5yWW5zSkNrdFQxNVZETllTaU5NUjdBa29qSDFiMjRLTHV1WVUzZDBDcEFoZkdrTWNYSWdQa1pfWEJMQVpBNldmZFE?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:42"
        },
        {
          "Headline": "Applied Materials, Inc. $AMAT Shares Bought by Russell Investments Group Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPOVltd193VV84dGItaDdNaDdjYXpTYi1NMnJNVW0zbW13Qi1NVGVwaUI0YlJ5bVdKWDY5SHVLTDM5TnJjb3VDTXM5UFJsWE9MZzdLNXE1dWo0STJnSWVkLWUyUzNNbV9FeTllOGtEdWVPWVRMc211V0JJcXlGZUJJTHJLQ0NVb1Vqem40cm1mbFdRWTVISDFSZEJDb0dvbzBMQzV5Z0daSl83NWdYNExZSVlhaDItODNrZmZWeGJUVi1YWUZGWjlsT1dwYm9ibVE?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:42"
        },
        {
          "Headline": "Applied Materials (NASDAQ:AMAT) Shares Up 4.4% - Time to Buy? - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPaHp4VExLajRISG9WZG1QNmc2aFlMR2pLMUxpaC13OEV2bEhFVVZ4clBNTFJWN2wwWTl0d184UkFzaDVDN0otVGVrRzNibzRPU3BvMlk3dHVyUk14UnNBZHlWakUxSzZXWS1NVDVPbWlwUzcxUTh2VjZzRlZ0Y0ZQY1Uxa3ZEM1J4U1p5N1VpVzIyU21ZVThlNTVjM2hraU9Wazd6azR0WkZnRGc?oc=5",
          "Category": "Stock Performance",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:42"
        },
        {
          "Headline": "WINTON GROUP Ltd Buys 10,590 Shares of Applied Materials, Inc. $AMAT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPdGpUVHNTTl85R0ZsSThYbm9WWks3bXJCa0hyT1JCTDlvRHByT3dBOXJSQ3c4S09NVDJaZ0Q1MnRYR3B1bEZXU28wS0ExZlJmU2dhRWV5d3BmQThPcGxtdmtRU3ZDN3R4VDVkQ3ItV09ubUVubVB6b1pjaFRXVGNocXlpRjRybnc5aHFYeXJxck9jUUFzVlJMdk45dEhpanJMQlkwdjFhb1ltYjN2ZVk5TnRlcHlJbUJKQUFVbmRmVTJ6ZlE?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:42"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AMCR",
      "Price": 40.57,
      "LSTM_Confidence": 0.73,
      "News_Sentiment": 0.8,
      "News_Impact": 0.8,
      "Headline": "Capital World Investors Makes New $37.23 Million Investment in Amcor PLC $AMCR - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSms5NF9KNDkyRjJsQUZ1NFhaVnl0S0ZHQ2FBXzRRUjl2UHhuS3NCbFJLaGtQdi1tV2psVlFwWnVYV3BVQ1JzRVk4bFkwaW4wTXc2dW1nSllBZERhT3BMUmlIMkdYeEhOQWctcXZzUUtySHh2X1hGdTlBMzRUYVVHQmlIQzJIWnQwbjI1UkNpeVB6TnhhSFd6cVBzQnBQYWRMQUdicVFKc2kzLWZpVHdwaXJWYTZUTV80bVNSMGxjaEx5UlhXR3FyeVdZdWNxTTR0YlE?oc=5",
      "All_News": [
        {
          "Headline": "CreativeOne Wealth LLC Buys 32,807 Shares of Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOSklmbzU1bTlfVlIxRTBGblpkU1JjVV9RM1Fqa0dwZ3E5TzU5eE1yaXhNMnR4R1BNWTFBSU82UjlDRkpOSWFpVlBNOGJyQmdaLWFfckhQbDAtaFQxNFRla1ZNeVZWOEpnX1VWOXY4VHhiNXNvc3MzV2dGdFhvRkk4TzMtSERDQlQ1LThCNzV6RnUtNnY2Q0piWVZTMzdCc2ZyVWF1WEZhWURTMnJGai1YanRaTi1FeWU1aGtF?oc=5",
          "Category": "Institutional Ownership/Trading Activity",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-14 09:22:05"
        },
        {
          "Headline": "SageView Advisory Group LLC Buys New Shares in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQV0NsUkZHcUt1d1FDdEZnYXZudHpBUERDVGxlSkVSNEt2d1V4X0ItaFF4eVhZWGFmRlg0OHI3R2RvelpYYldwVmNlUFIwRVR4ZlpVTVZyUDk0OGFnQm5yejRzcVNzelBhbXBqQzdfMVZwMURNdmR4eFhha1VVWUZSa204MFFZRkZRSVR5ZVVnaUZESTh1T2RGeGZJX0lFTEhhNjFjclFWb2ltdHlvOTd2ODNyWTBEclYxazJJNURRTQ?oc=5",
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
          "Headline": "PCJ Investment Counsel Ltd. Has $6.45 Million Stock Position in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQek1yNG5lVkNOSVFacm5GTFdqeThmeEhzOThQbWItanJIdTBVS2paaUpiTFFJaFJpeFdwb1hOUUZmTXhVYmRiczRBaU1RMlhVVVN6RkdTRjNhTGFxckhmLUQzZWEydUYtVHRKNTJEWjNDcm1zREl2T01Sa2ttWlZEaVY3S3R3VEtOOVpGNmdVR0NkNEFTYmNieGlJZzdfeVhPTWtOWVJjaXhzZVdnUXdnZURXcGg5NkZOVjV0dldQWkhFMm45WEtOTlFrVkdjNGI2dWc?oc=5",
          "Category": "Institutional Ownership/Trading Activity",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:22:05"
        },
        {
          "Headline": "Kingsview Wealth Management LLC Reduces Holdings in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQSTlPblFQX0t2WXluY21LeS1VWlhFeUdOdUFLZGVPTjVOYVJ1SkpFcWdQTlZ0dTdBYTh3TWJWZWJhcnptTTVWSGI1QmU4QTdZdkJhLWNCUFZ0OUl1RmQ4cjdyZTNGOTVVSlRJM3dKdXFSYjFlOF9BWlhYRVd5QS1WOTdDUDhVMHBfa3FLUHhrMmZkVndwYXFwdlpGc0NHbzcxcHhRM05zdUxhTkw0dWlISVU2U0hhN2JVNHRIQ0Q3anFVaHFLS3c?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:17"
        },
        {
          "Headline": "Capital World Investors Makes New $37.23 Million Investment in Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSms5NF9KNDkyRjJsQUZ1NFhaVnl0S0ZHQ2FBXzRRUjl2UHhuS3NCbFJLaGtQdi1tV2psVlFwWnVYV3BVQ1JzRVk4bFkwaW4wTXc2dW1nSllBZERhT3BMUmlIMkdYeEhOQWctcXZzUUtySHh2X1hGdTlBMzRUYVVHQmlIQzJIWnQwbjI1UkNpeVB6TnhhSFd6cVBzQnBQYWRMQUdicVFKc2kzLWZpVHdwaXJWYTZUTV80bVNSMGxjaEx5UlhXR3FyeVdZdWNxTTR0YlE?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:17"
        },
        {
          "Headline": "Korea Investment CORP Sells 1,105,400 Shares of Amcor PLC $AMCR - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNOXl0MWdJdWt1cFQ2ZWRaUVVUaVYyaEk0dV81UEktbzFCaURNXzk1bThmMnJBSmVueXh3Wi1JWXB0dlNXX2tHdzIxb0Nta2F5NlFFaGFLajdhc1J0Njk5WEhWV09KbjRRNlAzeW1KTW54N0NVeDZiSHVna0ppTm9ydXF3TmEzMWc4YVB1cjVoSF83aE1LZk9oa1M0NklPS3VZbW1zYXJ4QWpuaEowbG5NVGNnNDJvZlp4MXhlczZn?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:17"
        },
        {
          "Headline": "Amcor PLC $AMCR Stake Boosted by First Trust Advisors LP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOSnRSWHZwTkRpV2JXbVRIcFVZa256S3dPNkpEZkp6c2FrY09ZNjU5U1dmekwxRzI4LVBEUHd4OWV0V1p0aklzT2RTSWhfSjVnNmxmcVlLc3RtMW1uTnJpWEVWRXJoMnh4UlJONEg1VjJyc1dGeF9QVjBSTFVlOG8xWmJ5ZGdTdEMtMk5fdDU1OXBfUzl3ZmdFbVB0bE9vVC1tOTh3SmVFZVNwd1hNSzNqdE5VYWR0bFU?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:17"
        },
        {
          "Headline": "Assessing Amcor (AMCR) Valuation After Debt Refinancing And Recent Share Price Weakness - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNRGluYnYtOURfbTNwWVNWeGZ3NlBZckFXbWJxRHRpY040X1Vta1NyMG0tQXBLUUdFaU5WcDRVS0xwRUd6UFg4UGEteG55NWZBM3YxRWxYc2ctbWVUQTI2UnByWjJfRHY0aXJtRWlQNUdIdDF5TExDbEc4UHBKa0dEbUtnTVA4cERiRnM3WE1ITnBlM2VLcFVRWERnZ2VVcmF0ZjA0QjJDSXp3N1lmd1c3dXlpWDg2SEFIa3ZTU3pENWvSAcYBQVVfeXFMTkFZZ19jdzkyZVlpZkxJdGo4cmt4SlhjRFNEZ1RkWVhBZXN5dXlGY0Z6MlFRUEd1MUowdVNjNjZWTDUzOHVWbUd5dV9JZmp2LVRIWG9GNnpxUDhNTDIwb2xtZmswTGJ0WnVzczRLdjlPdjBpalhxeFIzZXVHTVhyM0c5SnRJUVI2cUR4dU5la3RKaG1mWDUwcjRwV0Zsbld4YVNNRnZseG9PTC1wRU43MU5odkg4ejNPMVdkb3p0QV82dFJITEJB?oc=5",
          "Category": "Company Specific / Analyst Report",
          "Sentiment": -0.2,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:14"
        }
      ],
      "Signal": "BULLISH_BREAKOUT"
    },
    {
      "Ticker": "AMD",
      "Price": 193.39,
      "LSTM_Confidence": 0.59,
      "News_Sentiment": -0.9,
      "News_Impact": 0.9,
      "Headline": "-0.98% for AMD stock \u2014 Downward momentum signals limited recovery prospects - Traders Union",
      "URL": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNUWJNVWg5aWkxaUJBaGtJVGN3NG5mcFV5Q2pIZEoxcm5MRUtfc05rT0dZT3pnYmtKMlBWNjZmQzRVdU1QMFZxYV9YZnNEOHhWdlFDYVJWakVBQVhaWXNxa25qWVhIbDJJU211YVFCbUhLbk9Eei1TU1dHQnkzQ0dzcEZVWHFXdUdaRURFeHBBdEpQb0FxWFFKdkFR?oc=5",
      "All_News": [
        {
          "Headline": "AMD Shares Drop 2.2% on Strong Earnings, 13th-Most-Traded Stock of the Day - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0wX3dIR3dzSW9LNzN2NUVOWDR4U3pZQUZQdnlqQzBZcUQzVDlRVnlZbFRMeWhUS3BPc2UtR3F5SVBDZXd4dkhpWEJmQW42Q3JmLW5pMm50RzZLRy1aSW11YlFmNNIBY0FVX3lxTE0wX3dIR3dzSW9LNzN2NUVOWDR4U3pZQUZQdnlqQzBZcUQzVDlRVnlZbFRMeWhUS3BPc2UtR3F5SVBDZXd4dkhpWEJmQW42Q3JmLW5pMm50RzZLRy1aSW11YlFmNA?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-14 09:21:49"
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
          "Headline": "AMD to backstop $300M Crusoe loan with its own chips: report - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi2AJBVV95cUxNTGhheFZ6NFhKeEtqSGNwbGVEUkdoNmlSanE1NWRQTktHOVBEdE1ndllEakhKVXVmVGtEd0d5UDlGOF9DVWVJNU00eDAtYXNqWGZxLTBBVWwwNlhWWFFoT00yQ0NLb1FfOWhnd1JRaG9jZjMyemMyTWNoOWFwVUQ1UU1LdGlRTVIzUVc2bUM5NkM2al9TWU95TllXU3E4b09YTmprT0hPREVLSWFhLUdrZWpfbk1BSG1GR0g3aDdkTS1BYkUtNDcwOTlJcEdEYjdVWjZJQzdOcWFma3c3QkIyZEV0eDAyekZweTg4THhuWDFiZ2ZLX2MtZlJiUFlUdEhWZDIyMHZwdG1vaEZqZWluVFptUWpKcnEyUzRhaW1ILTdyNTJXQlUyREJ6WGJFS0xfVkxqbHdHUVhtcmF0RUhtOURibmFGbkpPOF90dmpDd1hKQVRieGVOQg?oc=5",
          "Category": "Partnership",
          "Sentiment": -0.3,
          "Impact": 0.6,
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
          "Headline": "What Advanced Micro Devices (AMD)'s New Role in Open Optical AI Standards Means For Shareholders - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQSUx0NkRrT210cTRwLUVXV3Q4bXlfcmNYZi00VE40VXM5aDY0VkF6WXZtZUNGMC00LWZUMUllNE5OT3F6TWpUS1JGNXBIQmQtY2h1UGVBNEozM1J3U3NsVlQ0SFBwQTREZzRhTFhabGsxY0lqdDRuaEdVVzBlaUFUZVFRX2tSQnRzNk5NUlNxRE82T0lFRzdSM2JvSUhkMXZqdzhTZXZvUEY5XzRvbnRXMXVSYzk4NTg1U1ZEMjVTNDFyZU5KWkllTFF0UnRmZjIyVjY1cW9pYm5tbWZQaTJ1NmVOdnPSAeQBQVVfeXFMUElMdDZEa09tdHE0cC1FV1d0OG15X3JjWGYtNFRONFVzOWg2NFZBell2bWVDRjAtNC1mVDFJZTROTk9xek1qVEtSRjVwSEJkLWNodVBlQTRKMzNSd1NzbFZUNEhQcEE0RGc0YUxYWmxrMWNJanQ0bmhHVVcwZWlBVGVRUV9rUkJ0czZOTVJTcURPNk9JRUc3UjNib0lIZDF2anc4U2V2b1BGOV80b250VzF1UmM5ODU4NVNWRDI1UzQxcmVOSlpJZUxRdFJ0ZmYyMlY2NXFvaWJubW1mUGkydTZlTnZz?oc=5",
          "Category": "Financial",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:49"
        },
        {
          "Headline": "Advanced Micro Devices, Inc. $AMD Shares Sold by Capital World Investors - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOZnVaSVR3MnhQUFdQWTAtd25xWlUzTGt5ZzBUR2FvVUFYR2lyWUtQaC1HQ2RySVY0WllnM2ZzTTUtM25CSDdBejFscEhYUWpUNUlrZFJDV0M5Y3dRV05hRVBNZUl0Z2NhVDVGQjg3anVuVUwyeHNvLWZUNXlHYzcteHJ5ckRMSGxoRENidXNOXzNvdV9XVm16eVI1Y0NGcVZTcC02d0FxYldzT25PZVRaM29mSkNrb09tdnQ0SVRwTl92UWh5WlpZeVhR?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:22"
        },
        {
          "Headline": "AMD, American Farmland Trust initiative will support farm resilience in Ky, 5 other states - Lane Report",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxObFN3YzlqY2dwUzBHck13WDRrRVVrcVplamV5TlBFWUdNako1WXF4aVI1dEZCNU9GWUNGSnlGbGtZal9NeFU1elU0YXlNQV9QRzRXaUUtNGRpUkRCZlJLOW5WT2x1blp4MjltUTBSMS04WnNjVjZRUTc2clM2dzVCaGQ4TjNzUFBGVURydXFvcE9hOUlUVVZNcFo5d3NFX3lzenNLZlJWNVp1SF9Gb2VISjJuQVhmeVVTMUNkRlJ4WVU1YzZQbzV5UEJ1Yw?oc=5",
          "Category": "Corporate Social Responsibility",
          "Sentiment": 0.2,
          "Impact": 0.1,
          "Date": "2026-03-13 09:28:22"
        },
        {
          "Headline": "AMD Stock Fall Ahead of CEO's South Korea Talks - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOVzAyQ09kWV9vRGxSbnNzZkNLRWZhNUNCY09ocWlzcF9BMXRCT0VxeERVNHhvWVk3b21CRkVKMEFhUzVUekhfaVQwalAyeUxuVjdfT2xmeVl0dUd0LWxOOXBDb0t2S1pUdUJKQmZaQ3RSZmlLa2pfXzdqUkNGZko5VFktQ0NGUEh4WkhXQkJn?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.8,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:22"
        },
        {
          "Headline": "AMD Stock Drops Below $200 Before CEO Lisa Su Samsung Visit, Amid Geo Tensions, - FXLeaders",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQb3hzdU9GanhpQ3c2RUFpOGpac3JDN2lkQkQ5NV82aUM2dGZCS3BsYS1RSmczZTh5eUlMQ3pIV2xPX0puQlN1bzVSTTZaVVhmZ0ZZREtpNjJYR3VuMTVGZFhuSmxBUURjOTlKOW41eld6ZzRsV1hqenRqaGhOblhIMnRhckVSYVdIU1NvT2JlT1ppYTJWaWpDc0JseFI1TFFFYkNoa0hXcTN0TE9XVE93bXJWbDdpdTNrRTU0?oc=5",
          "Category": "Stock Movement",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:22"
        },
        {
          "Headline": "AMD Stock Fall Ahead of CEO's South Korea Talks - TradingView",
          "URL": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOYkl1R2w5aWhDLXdYTTdFejRkWnQxcGpYSkdlUFQxMndXMnBiMG5jaFpYWmRJX3RuTTlydzdvTkN0WjhkY2pSUHRYTFZ2bDVjWVNWYWdpajJBRXdzMUxvMEQtd1JLY1U5TjRXVFVNNzQxcndvWEdlbllPalQwekF0MmI2NkgwWEtTb2hZSWlHazB4TXFEbC14OXlGZVVLTGJxXzZJQVUzMU5uS0U?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.8,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:22"
        },
        {
          "Headline": "Advanced Micro Devices (AMD) Enters a Multi-Year Partnership With Adeia - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNbW0xZDZ3bFNlWFlOZmthb3F4MWZheVRrd3lSOWFVQVpnNzgyM043cVlmZlZobWdtQVh3aUdyeXB0WFBsV0ZMcUIzWmNRLUlBQ1VwRmx4TExPTEdUdEtuSnpEX1A4MjFsNVB4MzVyVklWS0k1R1JocDUtTU1GY1Zxd2dOQnF6UQ?oc=5",
          "Category": "Partnership",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-12 09:31:59"
        },
        {
          "Headline": "Nvidia dominates gaming GPU market with 95 percent share as sales of AMD Radeon graphics plummet to a historical low of 5 percent - MSN",
          "URL": "https://news.google.com/rss/articles/CBMikAJBVV95cUxPQjlTM2VMZFl1ejMxRkdfdW1aY29CMEVSekdyQ2dDTTU1ejNXdFVKaHFnb0VBdmRVQ0pvZFBGSmNwbGlLVVBVeHNtZ29NUDNKUFJFNmxxbV92VXJzajV4TmN5TG1BdEpRUUZ0bEZfY2hIX2FfY1RhSVdGeURibWtnYUNvMGl0eUNzOEk5N2V0RzA4d2ltV216anQ4ZDFnU1V4WTZtZ2NuQlJhVmFRMVE3U1Z3bkxTbkFnMG4wd1g5REJNWWJnM3A5ZkgxRTREaHA5Zm1aclVHcG02S3JYVERkUUdOa1F0aTFYSWFqMnJ2RkNheHAwQnAwb3F3UHJKSmk1U2VSSXJTV2hxQWJuMlpUYQ?oc=5",
          "Category": "Market Share/Sales Report",
          "Sentiment": -0.9,
          "Impact": 0.9,
          "Date": "2026-03-12 09:31:59"
        },
        {
          "Headline": "AMD CEO to meet Samsung chairman on AI memory supply: report - Tech in Asia",
          "URL": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQQzJIZ01Ncll5cnlMT0pqWEloYURmdTRvLU1yQ01VNUtTaVg3WUN0N09xSmlQQktCXzNRMElLU2wwZVdGa3dGWG1mNk5PU2RHMlh2YjRrZnkwdUtBa2dXekFjaFBpdjIwNF9pS3NIWUhJUVVJc0J5YVhoRkpEbzBLbU5sRTVkOXJBdnNidGtoVGttZjR3ZEE?oc=5",
          "Category": "Supply Chain/Strategic Action",
          "Sentiment": 0.4,
          "Impact": 0.7,
          "Date": "2026-03-12 09:31:59"
        },
        {
          "Headline": "AMD\u2019s Lisa Su Flies to South Korea Next Week to Secure Memory in a Market Where NVIDIA\u2019s CEO Calls Scarcity \u201cFantastic\u201d - Wccftech",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQMS1MTU9pMGRiVVE5S19rR1BLM2tEaXlaSHJTdldIdVVSYXVWSUtNUE5UOFpScXFOZ2xIb2h4LUFCeF9iYVZ1NTBMTW9hcmY0ZC1yUzVRMUpYZEFITk00WlhUcDJrR0d4RHdsa0xPVTFLYnYtM0V4Qi1BYWh2WkxkV9IBhgFBVV95cUxPOWxyNm5IaW96SDNpNFd6T2txUzR4dm5XQW5SXzVfMlYyZlRzR0R5TlhsTmtUTHd2amx0Q1cxWEpydWZsQ1ZRNmlyMS1LWkgxak1VTzBfbHNrVlpwM0FjSmp4c1dSWGM1N19pNUlyWDBUUHdDRUV6SlF1RkxfbGtuQVpObjZ2dw?oc=5",
          "Category": "Supply Chain/Strategic Action",
          "Sentiment": 0.4,
          "Impact": 0.7,
          "Date": "2026-03-12 09:31:59"
        },
        {
          "Headline": "A Look At Advanced Micro Devices (AMD) Valuation After Patent Deal And New Ryzen AI Chip Launch - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxOaFpZUDRpNlF6eHNrWVhFNTk3NU84b2NvbVd3dVVabUNUZWhBRmRIQkdIcTNJWWR2c0VlWWk0WnQxcmIwLWhiLWNUTXI2bVlKdVh5T0ZoT2M4WVZlc3ZjRlRRQ3puVUJaclRYUFVLQWptSDlHaHRWTmR5NWc0UjlXX1lkUFZEa0pOb3dhUVc3YnA3SlU0TFpfcFJHWUVOS1hGLWRQRDhPeGhXclMyMW8xc2JGdENJYWl1eUViUW9WYXZONnFnYkZXLVJ4UElSaEFkMjFRT1UwTXNZdHAydDFBMUxOZ9IB4wFBVV95cUxOaFpZUDRpNlF6eHNrWVhFNTk3NU84b2NvbVd3dVVabUNUZWhBRmRIQkdIcTNJWWR2c0VlWWk0WnQxcmIwLWhiLWNUTXI2bVlKdVh5T0ZoT2M4WVZlc3ZjRlRRQ3puVUJaclRYUFVLQWptSDlHaHRWTmR5NWc0UjlXX1lkUFZEa0pOb3dhUVc3YnA3SlU0TFpfcFJHWUVOS1hGLWRQRDhPeGhXclMyMW8xc2JGdENJYWl1eUViUW9WYXZONnFnYkZXLVJ4UElSaEFkMjFRT1UwTXNZdHAydDFBMUxOZw?oc=5",
          "Category": "Product Launch/Intellectual Property/Valuation Analysis",
          "Sentiment": 0.3,
          "Impact": 0.6,
          "Date": "2026-03-12 09:31:59"
        },
        {
          "Headline": "AMD stock price forecast: Rebounds near $202 as recovery momentum strengthens - Traders Union",
          "URL": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQN2tVdWxfYTZvZlg5dTVKNXRfaXA5RjNXekRHbDItOVFCWHZTQy1JMDdCTXNfYUY5Q0NudkVNc3N3RWZnblJTV0F3UWRqNGt0YUpvZllVcXBsc1JHT3RWbjV3S2pJbThqRTRhTG9ubDc4cWtRa21ia0FDNGFiQkdja3pvbC1feDRrbU9j?oc=5",
          "Category": "Financial/Stock Performance",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "As Adeia Strikes a Deal with AMD, Should You Buy the Lesser-Known Chip Stock Now? - Barchart.com",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPZWZ3ZHk0QjZibk96ZzBKeWtVTm5XRkNwaFoxNElZRmFOWlVvUlZNcGhaTXN0cmRWUkNEMllvVk9EY2RwNWROeGJkQVVQc1pWTV9uUEpSX2NpU256MjVZV240V3BNYjgwTzFMMnRsV3dURmpzWWpEcDVkdENLOHlMcjVTUW5hWC1XcWhXSzRNdGhyTnA1UGpXYnRJalNwc05GNUhNbE5qdjhnd05LaHc0MnI5UG53N284aDNkQVNrVQ?oc=5",
          "Category": "Partnerships",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "AMD Expands Ecosystem Partnerships and Product Lineup Amid Market Recovery - Intellectia AI",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNWWoxQk1BQjhpM1pHbmtqUFRvdkRnUlhxeXQzendZcVV5TTU0aHZQR1l6V2xDNUpPU0hyMXU3Tm1oeWJJZ19vTWh1NWZpMnVCYzdERG5TVUxhSk94RXRXSk4tdEZJckllQmo1NGNqU2pkbF95RTFFQXNXczMtel9FdlVHWTgtbUM4ZzBrT3Z5Z2poUHEtWmVyTHdGZF94WU5Vbnh5M2ZiaThseHFT?oc=5",
          "Category": "Product/Service/Partnerships",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "NVDA, INTC and AMD Forecast \u2013 Chips Quiet in Early Trading - FXEmpire",
          "URL": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNa3NEQWZtY2ZrVzNndElhWU1KNTlHMEZrYlVUYUZPYTRpRVZTLUVOcDBLUXliTUNYeWxfLTNhWGV4emVBTnlkV3BuYUNObGpkVkJ3aXdxaE4tYzNUdHhJbW5YWkRwc0Y2b0JleGFsLXFaTzRoVzBBTVo0UThpeFRza1RXSTB0WFFuVHVSVmw2Tndsc2ZEaHcyYWRRb1FLZEJEcmVDUVZwcFl3UQ?oc=5",
          "Category": "Market Observation",
          "Sentiment": 0.0,
          "Impact": 0.1,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "AMD's Multi-Billion-Dollar AI Deal: Why GPU Revenue Could Drive Steady Gains - The Motley Fool",
          "URL": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQZ1JvYl9zQmhsalh0QVVJeVVvSDFIcnZtSklDYTJIV0VieTRHSUtwalBfa1p2bURfdU9xeGlOTHFZWS1KT3kyaHBDLWlNZ3hvUmJfR3hnbjV2WEJRS3Z6bFp2NFZHUGxXUWNDQTVEWU94clF4eDRYb3JmWl91Z2NRRTJXb1ZodVgzcDIxZ3lhSEJHOUlkOWxz?oc=5",
          "Category": "Strategic Deal/Financial",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "AMD Stock Jumps 5.33% with $7.63B in Trading Volume, Ranking 11th in Market Activity Following Settlement of Adeia Patent Conflict - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9JVlp1SUZiVTh4YzVfQmVNOHVWQkhqaWNvSkVmZ0dDTWRTY3l2THp0cWtGVXA4d29XcWM2OVhSSS0zZG5rVE5zVzJFSlVGeW44ZUEzQ2xoV0xLQ3NITmU4Z2lXb9IBY0FVX3lxTE9JVlp1SUZiVTh4YzVfQmVNOHVWQkhqaWNvSkVmZ0dDTWRTY3l2THp0cWtGVXA4d29XcWM2OVhSSS0zZG5rVE5zVzJFSlVGeW44ZUEzQ2xoV0xLQ3NITmU4Z2lXbw?oc=5",
          "Category": "Market Activity/Legal",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-10 09:32:37"
        },
        {
          "Headline": "Adeia Stock (+12%): AMD Licensing Deal and Litigation Settlement Drives Rally - Trefis",
          "URL": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNNXVNYlVFbm9zcUNHSDhEYzZRcXNoeE01eDlaQW80dnl2YnI0RUJ5TmZsYl9aOWxTaF9GNld4clYtdlBFdUF5Sm04LWp4dzZweGVoVGtzR3ZrWlpHbEN4Wlc2V09JZFFFdXAtcHBoNU1qbkxkTUVvSGlnZ1Y4dGlkUVMwUnA1Vk9hUU9zUDh5bzNXcVFnX1F5VTZRR2dNdVJ1cW4wVmU3ZEpqZjhHbFRCS1Q5Nm9aMVd2TFBhVGVNbGRncHl3dnZIZGpSMzhmNzJPQ0Q3LTF2VnJmQQ?oc=5",
          "Category": "Legal/Business Deal",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:37"
        },
        {
          "Headline": "AMD AI Partnerships And Valuation Gap Put Growth Story In Focus - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOMkxxblNFRWFpR2xOLUZBTTV3cUs5ZW5IRzZMOVVFUkxyTmpTUGZteVhzQUprMTlUQVdZTlVpZWl1VGhnOXNPT2ZMaE1mSlEyQjRIc2pTVlRENjBsNFFQd29kNTlvLWowZFE5UWh2YWVVOTc0NjFBYllMdzFmcFpBY01DRm5LZw?oc=5",
          "Category": "Strategy/Valuation",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:37"
        },
        {
          "Headline": "AMD Shares Gain After Edge AI Processor Launch and IP Agreement - News and Statistics - IndexBox",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNeVk2ZDJlUnNhRmlleGQ3NTVWUV9KSWdMcGtQNGZJZWpqZVR6Mlg3blhHRVNpQmh2X25RMFJYcTdpSDh5S0RQWWlTb3loeXhoUHgzQ0hBRkhxclVPMmtuY3R6WXBMeVphSzlnZ1h1SFN1aGpPRUxiamZGdGMwTTMwcURtbHlhbU1lYzVzcHNyUWQ?oc=5",
          "Category": "Product/Technology/Legal",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:37"
        },
        {
          "Headline": "AMD Stock Rises 5.32% on Edge AI Expansion and Legal Settlement - Eudaimonia and Co",
          "URL": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNN2kyQXUteVZIbUJLOGdjZXlZV2ZzWDFRQmMtQ3VnanVRRzUtN01aVk5KZ1BkaUtMU0RMYkJPS285U0FUSlFjZ1V5UmJWcjlyb2ZVLVNmMF92dlZJSHVyZjBGTmFTb1oyeGtnLXNEZlhHRWtfYkstenBSaVd2ZGZzc0RYZks?oc=5",
          "Category": "Market Activity/Technology/Legal",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-10 09:32:37"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AME",
      "Price": 214.49,
      "LSTM_Confidence": 0.71,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "How AMETEK\u2019s Earnings Beat, Guidance Hike, and Bigger Dividend Will Impact AMETEK (AME) Investors - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNdXdyNzJ0a2NGWWJwNktBTkFIRnl6MEw0S3RIREZwTXc3WjRiTXd2SjUxcnZJSzdVU0FBYkt0emRpb0RVa2xPQndydGRTaTJxZlIwaEh2U2syNmxOVDU0NFVpTjdqMUlEMUpjWk14T0E2dTVWR3luR0RXdkdMWnNhRUxSRHpKbFFmdTFWRXNrMzZTQWlYSUphbHV0MzVuLWJyYW53b215a2liOTVoRF80aU5xWmNTUU1PNFI2UHd1QU1yajFZVHpSWjZ30gHKAUFVX3lxTE11d3I3MnRrY0ZZYnA2S0FOQUhGeXowTDRLdEhERnBNdzdaNGJNd3ZKNTFydklLN1VTQUFiS3R6ZGlvRFVrbE9Cd3J0ZFNpMnFmUjBoSHZTazI2bE5UNTQ0VWlON2oxSUQxSmNaTXhPQTZ1NVZHeW5HRFd2R0xac2FFTFJEekpsUWZ1MVZFc2szNlNBaVhJSmFsdXQzNW4tYnJhbndvbXlraWI5NWhEXzRpTnFaY1NRTU80UjZQd3VBTXJqMVlUelJaNnc?oc=5",
      "All_News": [
        {
          "Headline": "Morgan Stanley Maintains AMETEK(AME.US) With Hold Rating, Maintains Target Price $235 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPeEM4ZUVCNHNocUc5ZmQtbE1Iei11MlZPOU4tNGtQVmFKRXhsNElrWTJkUGYyUlpVSlpVN3dURWZrcU1NQ1IxNFZFcHdtclg5ckdkNDlwQUwwR0lDTnZUSE8yX21hTkhuV2lpT09HU2lUOXljYWlXNS0zNzdUTG00YWVfU0NDeWtubnliMV95T0QtR1BDbmp0Ql9WMFh1ZkNPV1RsNUE5T3pyX01WVFBLaUFn?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-14 09:21:57"
        },
        {
          "Headline": "Glenmede Investment Management LP Has $71.10 Million Stock Position in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxOalVWQkl6T1VuTWk4Z29CTVhXX2tRMWhTdW9wRmtDYVVaa1JNamxTbE0xSnRZX1g3M0Q4TFI5YkpoM1BzMXI0TGhWSS1DMGdMWTkyWTlOX29weUU3Q1R6TmMyd09TSEtlX0Nna05qRWcxZVhnMW1CYk8xbXdZNV80enJlR1FXdVY4eVdCdFBISUNna2FXcld0bmgxaHVQOWY2ckJrQjc5YlBNdUxyM3NubWNjMXBhZTdYNlUwZ1U0QWZnQkJ3M0t5ZlpDdUdqQVhtM2d4SmxpRy04cEFz?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:57"
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
          "Headline": "AMETEK, Inc. $AME Shares Bought by Russell Investments Group Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQbm9pdnFrMExteWF5MzE1cWpzSkFNSG10RVEwcG1yd3FaUlkyb09Dc1pkNTNjRXU5NzY2U0NkSTRxWm9KQUFFS0hHSDZxXzVKeWRFTmNzemJLOV9MNHpDem9nZ2dxRDFmQUJTODVvdWFGWThmeUdwR2V2Nnp3bGhMTFBNSXotRlN5b3BEZlB3MTFyU2dYdUNJNnc0OVhtVTdGdms5OGliT2E5ZVdRSGVjeVl6T3NUV1ZfLXBPLVd1dw?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-14 09:21:57"
        },
        {
          "Headline": "How AMETEK\u2019s Earnings Beat, Guidance Hike, and Bigger Dividend Will Impact AMETEK (AME) Investors - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNdXdyNzJ0a2NGWWJwNktBTkFIRnl6MEw0S3RIREZwTXc3WjRiTXd2SjUxcnZJSzdVU0FBYkt0emRpb0RVa2xPQndydGRTaTJxZlIwaEh2U2syNmxOVDU0NFVpTjdqMUlEMUpjWk14T0E2dTVWR3luR0RXdkdMWnNhRUxSRHpKbFFmdTFWRXNrMzZTQWlYSUphbHV0MzVuLWJyYW53b215a2liOTVoRF80aU5xWmNTUU1PNFI2UHd1QU1yajFZVHpSWjZ30gHKAUFVX3lxTE11d3I3MnRrY0ZZYnA2S0FOQUhGeXowTDRLdEhERnBNdzdaNGJNd3ZKNTFydklLN1VTQUFiS3R6ZGlvRFVrbE9Cd3J0ZFNpMnFmUjBoSHZTazI2bE5UNTQ0VWlON2oxSUQxSmNaTXhPQTZ1NVZHeW5HRFd2R0xac2FFTFJEekpsUWZ1MVZFc2szNlNBaVhJSmFsdXQzNW4tYnJhbndvbXlraWI5NWhEXzRpTnFaY1NRTU80UjZQd3VBTXJqMVlUelJaNnc?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:13"
        },
        {
          "Headline": "Is AMETEK (AME) Pricing Still Justified After Recent Share Price Pullback? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPYmxQVlFCZVhqWmdhUGs3Y3ZZQjVrSmdOazhNLUlBelI1YW5mbWdHSG5Mbkd0VnJqOEw5X3dHWU5EdzhNRzBtRWRJZ2pvOGNBa295M1Y1enJoQnVHTGNGbnZYdkY4Y2ZIMm4tWnJPM0dVajhNaWs0cXpIbkR2NzhlRXEzdl9YVjg?oc=5",
          "Category": "Stock Performance",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:13"
        },
        {
          "Headline": "Morgan Stanley Forecasts Strong Price Appreciation for AMETEK (NYSE:AME) Stock - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNNnowYjlYYkYzai0wSWJBeTd0U1ZqRlAtUzRFZ3RLMzhtUkg4MS1pLUlIekdRaFlnNHV5TUVjZVE1QUJ6bEYwZWRkX0JtV1JobDQwYl9IU0tNeS1NVFU2cnQxMjFlTEQ5TmtBOWJPSGtBV3hqSzVLNEdyQmFGQUNHSW5fWWZ0NmJlVU5vNkVscUh4QlFka0hGS0tfalhpTmtTNndTQXE1QmFTWnBmT2lwSDlJLTBFbjAtRzNYZEh1WHJOU0hXdXRfLQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:13"
        },
        {
          "Headline": "Morgan Stanley Adjusts AME Price Target as Analyst Ratings Evolve | AME Stock News - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQX0pJREh3cXp2bXNjWjQ5NGs0aDQ4SHdYLXJ3U0tHTjhVSEtqLTdFOVUwRWJ5eXg5emMxSF9pR2MtUGR3ejR5UXhxU0JOQXVFdzEyZWtYcGNIS1c4cmxRVnU0LTVPMGlzZWRjWWlBMkp6OU1PZHFJX3B2dlpMQkQ5eUc4T3VWZHNYY3JPZ3cwR3FDbUtuZ2lLeDQtYVVGWDZ3TnM4VDAwanl5bmFfaV9PcTFST0piRGwtUk4w?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:13"
        },
        {
          "Headline": "Legal & General Group Plc Purchases 46,625 Shares of AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQZjFIUXBvekNDWWhzbkxac0tKVEZQLVBQTE56OERjeVVRVVRYMGxiS1hGUWt2MVlvZFVyZWROS0czZm4zend4a3h6S2RrYVBDRnBzbEVHRHp3dXRCSHZlSW51XzFDSThNV0hJS2RVc0FoYk94TkI4NzljYWpuQTZ4bEJQbi1meXVYNXJQdGtfWVJKVWdMVDMybm1rUU0tdVpWaURuN2FiLUV3bkJualRENWxhZTFYMzdDTkFHR0dVV00xSWs?oc=5",
          "Category": "Investor Activity",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:13"
        },
        {
          "Headline": "BNP Paribas Financial Markets Buys 338,371 Shares of AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQVGlnMFFLejQxLW9YNzA5UmE5Z0lqekpmamJMT2NZR2x0RHpkeTFzamZvME9OMmlNTlJmcjdIc25FMEo0bHFNbHJJN0l5eDBrZWpQcDVVS3V2Vy05S3hxc0pDMEppOG9FYnpjNlZLLWlsN0pwZXlWemNjYUEtQWNKYkpfdW1rZlhMRXRxTG5GM2lucklwN3ZZa05XMWp6ZFY5UUlmYmVZdHMtcWthMW80dk5SdTBndTN3MDNsMTB5eGpQdGU4M1E?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:16"
        },
        {
          "Headline": "Kepler Cheuvreux Suisse SA Takes Position in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQYVRTUXFkb2k4UE9yeGJXWW5EU3RlV0RXcmczdXVaYzNwdDdvR2xWcGdYeE0tbEpwMGtqeVRlYmlyYURaYkhwMC1DVVRnXzY3YVJBeDR0TW9mRk11YUJGdmxWdEtjX3RuTjh2enFTRGtzZjIxVU8yOGFLTURJWTZiZ1pSdjQwdWI1Yk5fUldNYUlwcy1KbG80ZU5PekRRUFFxcVVpVFV5NEhBaG8zSEFDSTlJSkJRcFl3T1NYQw?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:16"
        },
        {
          "Headline": "Swiss National Bank Reduces Stake in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPaGN5MUJqZGZIWmd4YmZrcGtMSlhLTHp6QS1EQllhNUNsOFdfOFdic1U3S3BvQUxiVnVqamVSeFUwZG50ZXdBcHNlZF9OR0hzWXBSUksyUXFfRzBVQUw5SDVlbnBWRjk3V2Z4VjEzcDV2ZHhNVTY3ZFRBVE9Rck5JYmNSTENINi1ZLXJfZ1hoeGJRLVB2cnBFd01GTnlFV0lhdEExd21qZHl4cTFxRjA3b0JR?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:16"
        },
        {
          "Headline": "AMETEK (NYSE:AME) Shares Unloaded Rep. Gilbert Ray Cisneros, Jr. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQaEFUMTJoWnFyZllLT192cHUxdi1sM3hyOWRyWThSN1I2R0ZpczYtYlgzU3Fsd3hrMFhNdE5WQzlQczU4Y0NIQ1pTS1R1RUJNc21FMDdxQ1pnZ0tHTE1YYWgwelhudDh5a2d0NUdLVlhuZk1ITTRRLXVkQkdmWmRNQmhMUUYzZi1mYXdVSEpnM29XcG03TTBGVUg0VEU5WDgtNGJtcjVoZVVVR1c2elZEZlFR?oc=5",
          "Category": "Insider Trading / Political Trading",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:16"
        },
        {
          "Headline": "AMETEK INC/ ($AME) CEO 2025 Pay Revealed - Quiver Quantitative",
          "URL": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOTlZkVWMzenMzTUpvV1RnSzJfTlNNcVZsRWxPRjV5XzczaldCeVpUNnk1SG1taGZnd1JjblVOVXdEX1hRbDZPTXhDZm04MmpuSEd4dFlNd2JPMjE5OTRVMVNGM084bVp4Q3N3NVQxSml3ZTA1TzNvWWMweGR3QW5GUHp6clZuVlVZ?oc=5",
          "Category": "Company Specific / Executive Compensation",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-12 09:32:16"
        },
        {
          "Headline": "AMETEK Stock: Is AME Underperforming the Industrial Sector? - inkl",
          "URL": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOZ0JmdFpDN2RVeHZhSENMZlQzYlFPd0F5bWtpdzRuZUxoNVZxdVNsaTBjSERBZy0yNFR0b1M5RTBkWlAtME9MZzByaFR3NXRQS2Z2aGRYNnBfYWwxajJRcElWZWVOZVF4WVlEUzNFN000QUVqbDh2YXJZdWdhSUFOZHo3X2o5cUFrNXJr?oc=5",
          "Category": "Performance Update",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "AMETEK, Inc. $AME Shares Sold by Capital Group Private Client Services Inc. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNOGZVaEhVMk8zdWFGZHpTeUctcjgzaW9nX0ZFRnRTcTVCcEZNcFp3X3Jfa3NYbFRNZi1ETjZ3dWxRc0NNWF9aWWs4VGZ4ZzIwYjIyUWFSMmtzZnc3WG5DcTE5RS1RemU5d1pQdnBCNkxJc0ZNNFBiNF9aOHd0Unc1aHdwdjItZDVWYW1pQmt1YmZRZktkOHR1WWF1TnluUUtUaVFwaHpqRlFxNGU1Wnlyd29CWER5ODZuWks0a2tQMkZOaEdDZGZVcTM1b0E?oc=5",
          "Category": "Ownership Change",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "AMETEK Stock: Is AME Underperforming the Industrial Sector? - Barchart.com",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNX1hBektNTWVFVzNBbU1Ob1FzOHBBek5aZFlia1BuazZTTmZOYldFSk4tYUJDWlQ2bXdhWWQxM1ZCTEZCc1AxY3Y5RktWcE5VYlh2dlk4cnVWbUxRdWdCLUFUMFd0T0prUzlTUjBFWEpEN1BFQnQyYkJZaWtRZ2E3WkFOS28xU3oxUHp6MWM5MnliMU13N2d4YUxCb2VvUmJydEE?oc=5",
          "Category": "Performance Update",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "Vinva Investment Management Ltd Has $3.47 Million Holdings in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxORi16MDNCN0lqOVFzdXhIaE83dkNTZENid1BqOG52aUZxb0ppSWZYVUR1NEFTNjVWWHNicmRyN3FXQXlLekoxVENmcEM4R1ZSVnp5Qk5CZW9hM0lLV2MwT1NIeWwxamtMYUlXWFBnLXVzR0VKWTJLd3dIMlY1NmRpckt4a1JrQVY3bHl0clhyVGhaUDc1WUxsYU1pZjEtUHk3Z2VxQi1weU9PQjNHRkVtbXMtZkZuZGVrNUFqUy1vS1U0WXRRajBKR2p5R0sxcHY1?oc=5",
          "Category": "Ownership Change",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:51"
        },
        {
          "Headline": "Natixis Advisors LLC Has $109.50 Million Stock Position in AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNMDJ2VDMzb2lMb0MzeElBbEh2WU9Zd2JSQUlJV0lBb24zeXU5dWNVMGRCNlFLV3J4S1hpc0hDSmRodnJzWEVlWXI2Q2NudGQ0cmJjbWNTNThkeUd4X2d1VXBoQWNULUhfNVNnel9nNVd4MHFoOXhlaXdrZ0pBS1EwSWp6ckNJVkNSSUl6ZVl6UWFLa3F6cEJORWtwUWhjRGY4Zm5WUk1CLVZjN3VHNFhLandHcy1DX0c4RzlHR2RlVDN3YXF0Z0l3Z0xkYVU?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.1,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:45"
        },
        {
          "Headline": "Korea Investment CORP Sells 19,713 Shares of AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNWEtZeGY3QktoSTd3RWdSVXhtSmo2MFZfaHVOOFl3aS04VlVkcmdRWmx6ODRZS3pGblBMOW1Vc0FqcnFQTjdkVEhmZy1qb3hVdy1nckNDa0F1REUyR2JMaFdrNkRuaGJjeldBSTljWVdnVGYwRVpqZVJ6ZXZCTzFFZ1VDdUEwdEgxY0NBVGdjMkFYRE1naDhrOENJWUpMZ1hMQWJQLTY5bzZqUThVeUtpZ3ZXYXllZl9KQmRF?oc=5",
          "Category": "Fund Activity",
          "Sentiment": -0.6,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:45"
        },
        {
          "Headline": "Victory Capital Management Inc. Acquires 6,165 Shares of AMETEK, Inc. $AME - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQMFo1Y1N1UndTV21wOFlDNHp3cG8xdVZmNFNvaTE2TlpCbUp4eXlfZ3dqU1Y1b3J2Wlhvb09oWExZQTV0VVItNm91UV9wOFZwNFhlZ0dIcDBxTkJKRjllbVQyWHp1VVBaMUJ6S2VrSFA0OEsxZmp4dmtRR1g0QXd4VDlyNlgtVUNCcE5ZazdYLTM3ZkJZRXNaVngxNEp6cVVtYlRBQmJjSUhhUkxNY0lCcWFPWTMyMEZBTGFhaU5hVGlDbTdueUVXTVNR?oc=5",
          "Category": "Fund Activity",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:45"
        }
      ],
      "Signal": "BULLISH_BREAKOUT"
    },
    {
      "Ticker": "AMT",
      "Price": 184.41,
      "LSTM_Confidence": 0.69,
      "News_Sentiment": 0.6,
      "News_Impact": 0.6,
      "Headline": "American Tower (AMT) Initiated at Bernstein as Firm Highlights Global Tower Portfolio - Yahoo Finance UK",
      "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQUkd1RkJhU21WT0c2cUFHUGk1b2F4ZzQxci1sdVRfdnpnV1k4MTkwTmJickJ0VXBxeFYyYUdsdWxSTi0ydDdFUmJJLW1hM2FKcE90TVQ2SmdXa3EzZ3VTRkYwTTJwWHFCd19LQzhKRGhRckFRbGxvdlpaQ2lMcXNVaWJiSk56d1l3dDZscDh1bTg?oc=5",
      "All_News": [
        {
          "Headline": "Entropy Technologies LP Acquires New Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPYzdubXBHeVJFWV9nUDZBNWpzd3dBRHd5QVBCNFcxRE5JcTI1MmlmQUZ5VXNkdk9iQ2s1TVNZU0tYdU41bnNHbzUzTUtValVSN3hIaXpBMkRZUHRyVHpEQ1cyMm15WHZ2bzlLNHJPdzZteUdGTGF6djk3bDVlUHJkOEVwRjNBTHlpcmxrWkFHZ3pheE8yRFhLS3llZVYzYjl6amx6TGQxXzl2MlY5QmFiTGF2X0RvSjFJdURhb0l3XzZ5YnRLT1o5a0o1Qm5OeWpMblJ1dTJiMA?oc=5",
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
          "Headline": "American Tower Corporation $AMT Shares Bought by Invesco Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNd2kyb0xEeVRkczdTekE1Tk9HakZQN3o5djhZaU5BdnoyUVFYS1o5bGY4eE5uSjJTUVRIYlJBVDhsMVFFOTNiTDVjSzMyemZ5LUJBR01GV2dOcG1OMmdwQVJoRTE2bUdvN3V4VjVBRndibWZ1eXJKa2NqTEZ2dU1PdUM2dVB4TjVvOW1QOVJ2SVc4YXhBLUEyb1VVbWtacGRnQy1fdm10Y2NRMFNoQUE4QkFvcjVtVERZSzF3aA?oc=5",
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
        },
        {
          "Headline": "Akre Capital Management LLC Cuts Position in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPZ3Y2Y3Y1SW50aUp3bkhESlVkcnZocndJNEJYSEpIdVVucC1BWEdZWEVNRjMyekFHSVpOYzBWelFCVVlxNkI3TFJGUE9rQko5Z0ZhTjY3VV9pMlFfUUNaMlowOU9NaDc0eVUtQnkxbjUzeFV4SzgyZWVIZWE2R1ZLTE5hZjVQYUdLTzI2Y1BpZWQtM0czZE5vYmpxSV9SMFlEVURmV0NZaW9wWElGdVMxOWM2eVB0T1l1cVhVRXdVTFQxMmJ2am1VdFowMFc2ZEZXOUE?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:21"
        },
        {
          "Headline": "Arrowstreet Capital Limited Partnership Has $537.73 Million Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxNQUZUVE8yMmdTSWFETXV2MERBeE9XWjYtcm9kYnhDcVNqc2tXOUZTNVNMbWNDS3BIWi0zWGFyMVBNd0JWdWk4OThjek5ULWhSYURURTVzeWd2TUtVbDBKTERZQ3h0czlkbF9FRHN4OV9FNnlXMVJUaWE0VkRtVmcyTlBSc1A4aUIwYXZWa2o3V0lpdE1ITm5YOWxGc2JrYlM3c0JUdEotQzNCRU5uWm9XOVIzYWlUdTAxODJpek5oclVqMDhhZFprUmJaZFFGVDR5dm15R2F5dmNkbk8tRWZEQjZwSEtNckFMTFdZdHI1WDhDWU0?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.2,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:21"
        },
        {
          "Headline": "The Bear Case: How AMT Behaves During Market Shocks - Trefis",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPc19hdGdUd0IzMm8zeGtIZVpjM3ZadWhtYnpOcXNuTzJHc2tNVEI5dndXai13SmMyUUFfbHl0RHhTdUhkdmE4U1RxU3JmcVRYVHA1RVRvOEltNXJjZEpxSHBJSlFsQUNEeUNpcVZwNjFoWGRtMGNlRHJxTFF1TTNWS01QV3NDcmNLMEN1WVpiTHNpakdkUnRRRTlwRFV2RzJIS1dYTHVvdHBCMGlZMU1xWQ?oc=5",
          "Category": "Analyst Report",
          "Sentiment": -0.4,
          "Impact": 0.3,
          "Date": "2026-03-13 09:28:21"
        },
        {
          "Headline": "American Tower (NYSE:AMT) Part of S&P 500 Communications Infrastructure - Kalkine Media",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOVjlpek1Dc0NXNWk0N0p6MjNnZmVzM1V6dU9QWUpCUjM4UlMwZUVKSkJ4eU80RzhxWlZjSlp4aGx0SkUxamN6eER4SlZJU3NVNlhwT3NTc29OUWNLOXJzUXN5WS1pNWc5RzlUNlFwUzA1dVNJa1U5LXZFNXhFS2JYT2V4dmZHZnBTckl3WE9PdFZVbkkyeGx5MmZfNThvWU4zUUNXaXZ5TC1nZ1Q2QkJYVWFhNHB4ZVlEUElkMXplR0puU05jRDNlVmZWay03dw?oc=5",
          "Category": "Company Information",
          "Sentiment": 0.1,
          "Impact": 0.1,
          "Date": "2026-03-13 09:28:21"
        },
        {
          "Headline": "American Tower (AMT) Sees a More Significant Dip Than Broader Market: Some Facts to Know - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BTHdfYk5JSThta2pyT1FTdG5VVVVjVkZaMzk1T2RZR294dlZOU285RXBOU3NCcDlKWXEtcmd0Z3pFTEk3LVBONGxjYVhjWUFmMDEtMDZaSG9ONGdGV2hkNFNPanhmMVA0WWRvUjdvb2xQNmFwd1I3WnJUcTYyTEk?oc=5",
          "Category": "Market Performance",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "American Tower Corporation $AMT Position Lifted by Duff & Phelps Investment Management Co. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNWkVCYW9LWW9iMUVFM2w5SEVJQ0l2cFYxNGZ3VGpNdzI1Qm5pVHBMdVYwbEdBdVJNdlBFYXp6V0FBM2RORGpjYTk2YVV3U3ZjMzZDMldFUFk5MDBKd0c3bFlpRlRFUmc0SlVWa0ZmNWZnSEEzNWNoS1MwMGF2VFFBRDZNbkFpSThDc1hCQkVDandabFlZN3NNU3NkMHhLVW56XzZPYWo4cm15R2dOSzlFMzFVWG1lVnMtclpKZ2ZwZmtmck42WGFlcDdXUEd0WmNydDc5anExSWV2eUpMTjlxYw?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:10"
        },
        {
          "Headline": "(02/01/24) AMT: A High-Yielding Way to Profit from Wireless Sector Growth - moneyshow.com",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNaDZVNHZNRXB0MVlQREJneGt1OERsdlZOc2xfbllDVDByX2xlVU9RYnJtbnZOdUxMdGNRbElENEFhTm5OcElJSlFEbFEyZDlqbWdEbzRpakF4eW05ODJNU2dKeDh5UlFBN2k3elhPLUYxQ01oaDg2RVdjZTF3U1poX0J6N3VDQ1l4WHRtOUoyXzNBd3hheFBnLVpydHpxa0VVbVI4QTRldVJSMk8zWG9pRFhGYUdsODNxNm81SmVvUlM2eDdk?oc=5",
          "Category": "Investment Recommendation",
          "Sentiment": 0.7,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:43"
        },
        {
          "Headline": "Capital International Investors Buys 7,940 Shares of American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQTFAzdlB1LU9BWldaaVFnWVRSQTZJQnhfMVpIdWlMdC1Pc3hfNWxGV1pmV3FfMDE4cEs2TDhjV2tTRG1CLV83UFN4SkdWdlFidE9mOHNtejdJVDhOU0pQc01NMlg2MHpCeTcwWDg4NEkxXzR5WWI3VWhrcExaVGJuOXp6dWFqU0x0cXhwS3NyS0ZQblh2T0lfSTU4YTItNlRrME92Nnk4NjVjRkdaUzBqT2loYjE1TzJzY0RacmY1c1Vtb1VZTHhTd3Etc0NrLXdCYXpyZXRNcWp5dDQ?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.3,
          "Impact": 0.2,
          "Date": "2026-03-11 09:31:43"
        },
        {
          "Headline": "American Tower Corporation (AMT) Announces Director's Decision N - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQbDNma09mMnhHUmxOQ1FPTWJOS1NsZVdrbkhIQTlVbTVDLWQxblFyZ3BWcTdGSEtCaVhfYnU4ZG16aXVtVndEc2E3VFdWVzFWRTREQ1lMaVJPQVFNSjZQU19lOWwxNTI3c2NrcjJKRWNQRjVkazNQY2x3NUJzMFNXM0dhaHdVREhwQS05UnFteGhwVFcycHhXQXJrZ2ZBUDNmSnFhaUwzamY2bVh6TFFKMWlkbDJ4WGhqLWN1MWlycy1NV19R?oc=5",
          "Category": "Corporate Governance",
          "Sentiment": 0.0,
          "Impact": 0.2,
          "Date": "2026-03-11 09:31:43"
        },
        {
          "Headline": "American Tower Corporation $AMT is FourThought Financial Partners LLC's 4th Largest Position - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOS0ZsWEg1UzNZSXV6cHBoVmQ4TUY3WnhWMVptNzg1MGEtS0xMNHc2bUVCVDBmaXJLd25iLW5reFdWNzlUNElpN2tmVHhtaDlybGpDbWV1TjFLWl9xeVlMQ2xkdUVLZDk1TWN6Nm5icTNSaFFrRVJTSFZZMWVsaERvOGdyYS1LeFNrSzFWenFsY1lYOWVCZ3pnYllJZGc2TnhKc2JlMjlTc2JUVFZlSU9BRlVNYVJQckNwMEZMdHczMUdKX1h4RXdXOW4tb3dKU0xybmNLUl83RmZjR0hSenhSLTFtY3pIQQ?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:43"
        },
        {
          "Headline": "Victory Capital Management Inc. Purchases 5,393 Shares of American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxPLXVqSXl5ZFJqVjBxZDZTSHR0ckpxM3pENnBCWmhXZnVJbWp2TWlONEFUZFZWc3JHR2Y5VEVZUy1jWEYwcmJYWWRQVUZZSFdMaWJzaXBoaVRoMDQ4czFqaWJhTjlQeVp5MjdITWZ3WHFJYjhHYThDYVNuYVBMcVgtMXhtMVJNVkNyNEw2Nmp0a013SkhJRzd5clZVVEhyczlJWW9rOVRGV0RzUTBmYTc4Z3IxSDJhRHBrTU5OOElIdTBtMHFSbzNsX2pkNDRpZWdVR19fckx6M3pYQXludkVVMQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:48"
        },
        {
          "Headline": "WINTON GROUP Ltd Raises Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPR05jR2tuS0o2cllqM21TTDNqbVVEMTJ0OUdDS3FUYndQUXhfMllBVEF3Q1BIaVhwR2djVVk1RVdFb3BCYUEwcUV1YzE3YzdqZGh1bVJPZmxPS2tMdDdDRDJjaV8xSHFVVngxTTdoQnM2X3dVUmttR25MN0pOR2NHaFBNZFltNFJxelFuTUNfa3lBTzNLUXQyV0d4Nm8zN3VBT3dzTTU4REhOckZkUVN3NXFOVl96LUlvNzd1ZG9NWldsQmRUb3c?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:48"
        },
        {
          "Headline": "American Tower (AMT) Initiated at Bernstein as Firm Highlights Global Tower Portfolio - Yahoo Finance UK",
          "URL": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQUkd1RkJhU21WT0c2cUFHUGk1b2F4ZzQxci1sdVRfdnpnV1k4MTkwTmJickJ0VXBxeFYyYUdsdWxSTi0ydDdFUmJJLW1hM2FKcE90TVQ2SmdXa3EzZ3VTRkYwTTJwWHFCd19LQzhKRGhRckFRbGxvdlpaQ2lMcXNVaWJiSk56d1l3dDZscDh1bTg?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:48"
        },
        {
          "Headline": "Natixis Advisors LLC Cuts Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPMUZoN1ZrcDZJN3pMbXpoQ1ktMjF1WllIaDAybXZfYk9MczZRYzlKaHZ3VzB2TTFyNzh1VE5ycUg4VDRDbGlVQWhzdG5DY0VKT3F0WnhCZHlpbWtfX1lyR19rLWN5eVZhdzViTlZacTZET0N6VVFtcTBqaGlzTVl1a0ZyTzVBSVF0Ni1uZGRfNGQwM0hQZVVpbS1PY3JVekhqdl9yVFBTenNyX0RuUjRycDBHT3FabEZCaHg3S0p4QnJzWlVQN3BKaA?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": -0.5,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:48"
        },
        {
          "Headline": "Russell Investments Group Ltd. Has $173.47 Million Holdings in American Tower Corporation $AMT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPRWtlRVhIcUVHNEpFVXVTTGdSelM4WHptUXROcGtEV3JVMDBjcE9rcHB5NG1mT1hfempjc0xNY05Mbzg5LXVmV1V4c2EwUzBBODB4ZDAtcUpudUxHSl9UTFNJX0FFNkUzMXlPVTYxdC1vLTBrRW56bEo5RWNUYk1GMm0zb1FkaDlXTjV3cFFuQ3ZmRFdOQ2tSRFlDdGxWOHpxbmE3ODVBU0NBMV83Tm9pUFZ5QUpVY3NCZ0tmZWpucGp4YlFNYTA4OXdwWjBvVk1tZXJuZk9ab1hYRDFmb0hVdTFTMG9JUQ?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-10 09:32:48"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AOS",
      "Price": 66.84,
      "LSTM_Confidence": 0.76,
      "News_Sentiment": 0.5,
      "News_Impact": 0.6,
      "Headline": "Schroder Investment Management Group Increases Stock Position in A. O. Smith Corporation $AOS - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxQMXNoMm1ERDNIaWtLZFI4eEM5RXhKZXhmeEYwX1l1ajE0T3FDVFl0cF9fV0dWYWQ2WjJwWUVNNEEwM0w4WU1LdnFuclQ1bFZVN0JoOEpST081bEJrYmRXNmZIQXc0YTlob0FKbFVoblkzVjVDYXE3ZHNfenY4bzd0bE5FaFFoeXpsVDVrT1VfUi12M2UtcDJfb0VWVkFqMFQ3STcwUjNBUTY1bURpR0JZM1ZqSlVSZV9hSnZoLXJ2NHVzTDZXWFBOd0gzdmhvbU9tbE5sR0xwVkJUbHEtb2ZzZXA1RHBMUQ?oc=5",
      "All_News": [
        {
          "Headline": "Schroder Investment Management Group Increases Stock Position in A. O. Smith Corporation $AOS - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxQMXNoMm1ERDNIaWtLZFI4eEM5RXhKZXhmeEYwX1l1ajE0T3FDVFl0cF9fV0dWYWQ2WjJwWUVNNEEwM0w4WU1LdnFuclQ1bFZVN0JoOEpST081bEJrYmRXNmZIQXc0YTlob0FKbFVoblkzVjVDYXE3ZHNfenY4bzd0bE5FaFFoeXpsVDVrT1VfUi12M2UtcDJfb0VWVkFqMFQ3STcwUjNBUTY1bURpR0JZM1ZqSlVSZV9hSnZoLXJ2NHVzTDZXWFBOd0gzdmhvbU9tbE5sR0xwVkJUbHEtb2ZzZXA1RHBMUQ?oc=5",
          "Category": "Institutional Holding",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-14 09:22:07"
        },
        {
          "Headline": "Natixis Advisors LLC Purchases 97,531 Shares of A. O. Smith Corporation $AOS - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQbGN2NVdnNllBRzZTMEpiSHVBVV9KRG9HN0NGNUFTSHVBUXlILVhoajItdG9VM0ZONHR6VjBkN1FRVGlmakxXQXhVZ25QTzNwMkk0VFVlak8zeFRReWFNM0ZCSHYtZVlvaU9uQmFjelZFZG9mVGx0bXdqbmFYMXBRQ2hKOERhWnhGNzB4NmJqVXlmYlRiN3NERmVYcHNTaW95dk5uMnpFdlY0MjdnblVDSmxjSkJCUm1iT3Z6R1kzeG85SDFfX2NVb0VyQVFXQQ?oc=5",
          "Category": "Investment Activity",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:36"
        },
        {
          "Headline": "A Closer Look At A. O. Smith (AOS) Valuation After Recent Share Price Weakness - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQOGY0V0VTcFpBZ2haME1TWDg1ODB6UklLUnhwSHpQcFcyb2M4bE1OckVEc09NQlAyTWdkSUIyWllJTGR5Q29nUGVzV1hJN2w3VW9NWmt3ODdYUDlIRlF4WGpwdWJob2hNWF9FMWRDcjBvOUNDZTc0cnlwSVFSaEkyQk5CandlT21aVjdTaDFVOFAyRXVxODdoS3lsVkUtSlFTZ0RKQ3JZdlRJQTlpNnRnMjFZMFF4NVpIa0VzRV9IWGJhOXR4NTBoetIBzgFBVV95cUxPelZ4U2ZhdjVYa012RU1zQy1JSEYtdjRFcmlWRm8wZEVXUE85NF9tR0IyYVJmaG4zbTdkZWlxRVh5OXlDSm5XRmp1eU90N054cUlITVBvZnlkRFRYamljTFhFRDVKbWlaLW1SemVGRlF0T2lvMnpWX1QweFhwdE9pVVhfWnpmcFhaelVTTWJUeDR2YjBxaGdnVVhQYkIxald5NVFTOEp0emw5Y3FzOTIweEZxTWFULXB2am5wMkNvNXFVN0hkdGxwYmJ2djZfUQ?oc=5",
          "Category": "Valuation Analysis",
          "Sentiment": -0.2,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:36"
        },
        {
          "Headline": "A. O. Smith (AOS): Buy, Sell, or Hold Post Q4 Earnings? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1BTWMzN212UHNJZ2haWERna0x0ZHgtMlFqNWNlSURkMmwwci1taWRNVWJHSzBHMmc2THJPLVlTTl9yM3ZrRE1FTnRLNm9Yc29JS0gwX2l3NDdhNk1SOE9NNW9tOFdPTjhYVy1XaEdwUXpscHdh?oc=5",
          "Category": "Earnings Analysis",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:01"
        },
        {
          "Headline": "A. O. Smith (AOS): Should You Buy, Sell, or Hold After Q4 Results? - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBFMjNQbEU3eUVwaHRaT3llT1lzbS0wcUFzdFhIYVg0RjU3VmhsME5xd1Yzb1ZvMlN5eXdubUk4MUJldDlqMExFWHhvbU1rc09mdXZxMzB4bE9mUkFnX1g4ZUZqUdIBY0FVX3lxTFBFMjNQbEU3eUVwaHRaT3llT1lzbS0wcUFzdFhIYVg0RjU3VmhsME5xd1Yzb1ZvMlN5eXdubUk4MUJldDlqMExFWHhvbU1rc09mdXZxMzB4bE9mUkFnX1g4ZUZqUQ?oc=5",
          "Category": "Earnings Analysis",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:01"
        },
        {
          "Headline": "Dimensional Fund Advisors LP Purchases 38,694 Shares of A. O. Smith Corporation $AOS - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQWlAyeDcyeEcyT3hRNXJDdE5va0RNSTF5YmktajRvcW83VUVYdWt6T29sSFhEM2tvTWt1RmJiOHhvUTNacnBEZ3p3anBLX2duRnFpMU11TlZNYndNLVJPRGJ2UG5USllyMTN3VklHWUVhRzFmZW9HeWgzelFVUk43SFktdDFKZWI1NzVwUUkzaGZOcHc2dFJuOG9mRV9IQlNOR0wwVWtXaUlCc0duSkxzbGRCOFVHdGs1Znozc0tQbnltcVVfLTFqWVpaam92RzhsYWIwSURMRkM?oc=5",
          "Category": "Shareholder Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:37"
        },
        {
          "Headline": "A. O. Smith Corporation (NYSE:AOS) Given Consensus Rating of \"Hold\" by Analysts - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQaEQ5RXBpX1pzNlJ4Q1p6bVFIQ09vdHYyLVBBOW51ZXNCaEpSdXpxUEFYdEhBQjMwRk55ZGVFU3NWbUMwcXJmUF8wVnQ3RHpRQkFHYUhXWENzZXZwM0hsLV9EdGR5c212OEhJdVpSWGc4Uzk0MC1VVzYySmtzbnJiOVpxbjNrNndqSklqNmVOWmZkMk5seF9xTUZnXzJUSXd0SVlhLWRIQlVkemtCOF9KczJfaThfSWFzVUhPcWJIellVdGI4?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:47"
        }
      ],
      "Signal": "VOLATILITY_WATCH"
    },
    {
      "Ticker": "APA",
      "Price": 34.47,
      "LSTM_Confidence": 0.49,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "APA (NASDAQ:APA) Reaches New 12-Month High on Analyst Upgrade - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOVVpYb3I0bzZNSFJBTVlROWIxLU8xWS01T2I0aHBrcHhtN1BUZmx5Sm95ei0xc2RkVkFUUEFaMVZaR1g5VGRHRHNEOEFQM2dSb0Y4U2liOXd6M1F3c3JXMml2MUlJbGdUbVFsX0Y4N0Z0dS1LMnRBT0VPUW94VzdiZDZ2UW9QQmNoY05rdmdJVEI1ampEa1NiLVpXRkc3YURGajVkY3hWeU5NZGt4djNuQ0pn?oc=5",
      "All_News": [
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
          "Headline": "Zacks Research Has Negative Estimate for APA Q1 Earnings - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPelpIQWd3Q0VjQjBrZzNRWU96X0dXVXROZktKZWZYMWdyUlBRUTFzOEZXY0pPS0xFVzlSeVl0cl94LW1OdUVVTmkwR3Fld2EySC1qYU9aSnUtMkRiZkxRWmRFbTZOQjhWbEkyNW5VNkhyRHo3WkVNTEgtVEpjS0VGR3ZEVDlLZ3hGa3hrODZFbW85cXVMWmlaTWVSdmFMYkFhQzBxMXhkak9OOVVNT0NF?oc=5",
          "Category": "Earnings",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-14 09:21:59"
        },
        {
          "Headline": "Vestcor Inc Acquires 46,440 Shares of APA Corporation $APA - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOclBvLVNXdXJaY1hYQy1TU3FkeGQ0ZnR4VkRXbFJSVkpxaGNrYTNTX0xFbHdnWEgzX2V3OW55NGxCekM5dE5JaVZxQjBwdXhxbGkwLURnWkd2VEdkZzl6MEtJX0gtVEJxWjlSTkZhekE4TXJmU28zZmtmYXpZSXRLVFNBY2otVkRJYnJpRTEzQnpQQ2ZLY2RVY2V2dU1ZLTBSdUV4QjhTeGRSUUZ4dFRpSmZaTDBDaXlv?oc=5",
          "Category": "Share Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:31"
        },
        {
          "Headline": "Zacks Research Issues Pessimistic Estimate for APA Earnings - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOcVZCNmVfZHZKUllqUGhWRURSOWJZS2E2aEZIS3ZURXZHR0p4S0l6dzJuUDRBRUtuRk5SMzVsRFdocVl4TGhpNE5IaGF3bVpjTmhpdWhMSy1Qd1M2RFQxUml4cEFKdHhITWk5NUU3SkZ3bUFRSnI4MTBvVEJJUU9kb2NyM3lUVTlZVEE2MVB0VER0OG9YaWZiemkwRVc3SmgzT3VQT1A2LXhpMmh3ZzNRWExqaw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-13 09:28:31"
        },
        {
          "Headline": "Brokers Set Expectations for APA\u2019s Q2 Earnings (NASDAQ:APA) - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPM2JTc3pnd1F5ZGo3d21iZC1Ya0pSR1gzZlZyaUJPRWs5dHZQUWVMNUZNRGxLN3Zjd3NZdGpsbzE4OVBMcVlHQ3FydE5ySWMyZGxjM2ZjdUVmckFUS3o0b1MtY1g4NGlTcVhTMmttOW9kaUZJdk9hMjd3ODlYQWEwamxWVkd3bW1aNkc5OW9HUEJIbXN2ZDB5VFp5ZW9VM2JyTGc?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.0,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:31"
        },
        {
          "Headline": "KLCM Advisors Inc. Reduces Position in APA Corporation $APA - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPSjhCeGZWSnE5a3ZtMUhXREx4MFBxTXBqNzVGMTkydVgyb3hZcm5ZOEdlTlJzTDlaNlpiYWNIa3U2QlZKWl94V3RxVDc5U3ByRWxfYU5abVN0UFFaVzNTYlFQaXZzZllzV1QxNWNVUnl3eE1hX29DR0s2eXRLYTFRRVlsY2R4YzhVQmtkYm5rZ1o1ZDVJZGpwR0ZhdndsdXJKTWh3c1BtVldwRTQxMFVCN3ZCUWdQeEZqR1E?oc=5",
          "Category": "Share Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:31"
        },
        {
          "Headline": "APA (NASDAQ:APA) Reaches New 12-Month High on Analyst Upgrade - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOVVpYb3I0bzZNSFJBTVlROWIxLU8xWS01T2I0aHBrcHhtN1BUZmx5Sm95ei0xc2RkVkFUUEFaMVZaR1g5VGRHRHNEOEFQM2dSb0Y4U2liOXd6M1F3c3JXMml2MUlJbGdUbVFsX0Y4N0Z0dS1LMnRBT0VPUW94VzdiZDZ2UW9QQmNoY05rdmdJVEI1ampEa1NiLVpXRkc3YURGajVkY3hWeU5NZGt4djNuQ0pn?oc=5",
          "Category": "Price Movement",
          "Sentiment": 0.9,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:31"
        },
        {
          "Headline": "RBC Capital Raises APA Target as Oil Strength and Earnings Momentum Support Shares - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOa0F0d1dTNFFJVG9YSVVQQzRyZ3AzX0N6OG1FWnBfUUNwanRNSHUxTlk3UXFWcWZVdWZJN3BmaGlKckJkVUVMR1lTN1NXU0l5Wk4yOVJ2ZHNQNU5iaDZlanBkcmlkUXkzZ3dsbDdrS3VOWmFzSENFSWw5alI3VWlrTw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-12 09:32:04"
        },
        {
          "Headline": "The Rise of 'Y\u2019all Street': Nasdaq Texas Launches with APA Corporation Leading the Charge in Market Regionalization - FinancialContent",
          "URL": "https://news.google.com/rss/articles/CBMihgJBVV95cUxNb1VFUzJZTWJYa0prdThBVVc2SThkNGdUaUU3WkZ6a2dWVVR4UGdVQlVjb2VSU053UjRHX0hsWjNiR0RsMzY2UnVOMGZJdTlqOERGcUVRc1dEeW1heEZ2ZWZ3TXR0WUpxZjJSVVJOVkVTSjBvQUFvdHhhUmJ1OHI0aVV0RzF0d2JLT0xWZ1pUTmxPMzJnZHkxSHpYLUs2WVROMXNRMXZyd1h3YnpZNmxCWTNRYXBEQ1JjV3Q5UmIwYmhRQ3RlX2lsb2tBa2U1WlgtRkdocE91bXdqOC1SZXVyTk1EaFpMYWhERl85ZDRwMFoweXlMMHctdDAzX0xFb0RBNE9HS0hn?oc=5",
          "Category": "Corporate News",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:04"
        },
        {
          "Headline": "The Goldman Sachs Group Issues Positive Forecast for APA (NASDAQ:APA) Stock Price - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPcXJBeWliczVTY0MxSFZkX0NnZ1FQdGtQX0I2WjdUX3lDY09FcFFrVUg3amdwazRwN09pUW9xM29adjhqOGptRVpwRnZaY2hOVGl0WUJMVmlqRTBzcnpJcl9vZ2tpbGU2eDhhd2hBVTlUbDFDcWVGQlhUbmNIcFl0ZlEtVE5VWDhlRUh4MlQwM2hMUHJpall2NWJXNzdnRTdZOGRGU1NjWlRZaGRrb0lNMGRvZDJ3bFJEYnd4M2w1cWVZbXBaaTYyNkFOM2E?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:04"
        },
        {
          "Headline": "APA Analyst Rating Update: Goldman Sachs Raises Price Target | A - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNaEdiLTVEcGVKQXRHbHh3S095WENWVGU1OXNxOEQ4TzBuVnlUUklzSzFvMlRDSW8tMmlfaV9hcXhmQUlPS1UxQk5XMU9haXRsWXREMzMxNFRpN21wWm5qVnNLcVBwU1ZQend2cHc1Zzhjemt3bnl3Z2JjOXM0eEhQcXlEcjZkVjFrb3FxZFhneWk0cXdLU2ZyQVV6b042Y3ZVZEoxNFZHUFFBaWhTNUFKSDdWRQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:04"
        },
        {
          "Headline": "APA Corporation $APA Shares Sold by First Trust Advisors LP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQVWZHaXlvTlZrdWlDUDBBaU4xNlJBbmR0RVRJS2ZFRnFmSEZRSWszMkpwcVZ4S0pYMG1HS2pCdHdBU2cwNW1vbnlxY3pMX2VlRC1xa2IwaDctQjJiaTBISFRnaWt6Mm9MclplQUl1ZUxacFVZYzl5cFdEaWFlTjUzVTlxT2x4YzdPbTdTLXFMZkJMdmlaQ21PbXJxTHdOQUEyMFdwMlVOYkFzT184cDhWaTY4Tjg0blE0V0JB?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:04"
        },
        {
          "Headline": "Fieldview Capital Management LLC Acquires New Stake in APA Corporation $APA - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNVXJvamQwMVJoS0ZkaTA1eEpLOEpJekl4SFA3Q1EwdFhWQ3d3a1hzLUpsX2hLV29CeFRTWGhza1pralRCdGhqWDJMTVcyYmpfN2VaZDYtdGRZUFJaWWFKV0NsUEc3SWQ5U29QeTFVUW1BRjJrdUZHcGE2VkV4OTVOWVZhZlRxVjIxRmx2ZlAzZkxyajNEdUNiVG9VblJpSDhUMFl5Q1FybVFuZDBJVkQ2MjRXVS1Kd0xEa2FncTEyUG1jS3Y2MFd1c1ZJNnBpNXgx?oc=5",
          "Category": "Institutional Ownership",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:38"
        },
        {
          "Headline": "Volume Summary: Can APA Corporation disrupt its industry - 2026 EndofMonth & Daily Stock Trend Reports - baoquankhu1.vn",
          "URL": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPR1JQOEctSEtGY29WX2dVcG1kSkkyVUxkWXp0VE1SM0pfMzdlSGpjNnB3QU9DbnRmUWVxUURBOG9hZldFZ19veEhYdXRBUG53V0NrRkY0dTVWTVNhcmYxc1FicXlYM2VVblk2NkxuZW5ONzVQeWxobUZHNnlaTG9OOUI2WUxLdzFPdVE?oc=5",
          "Category": "Market Analysis",
          "Sentiment": 0.2,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:38"
        },
        {
          "Headline": "Assessing APA (APA) Valuation After Nasdaq Texas Dual Listing And Recent Share Price Momentum - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNeHpwOUFONkx4MnVRTFRHTml6c1UydUJvT1JBcDJ3Nl93UklOMWVJSUloajhQZ3E0dVRBV1BQX0szRThOXzlTWVlyR0dob1gxdEZPVHl6LW9ya1BOV1JvOW5aWEY4LTZrdGJMWHlqS0h2WDJiZThvZXJvcDA0Z0sxMXNmYkRZLS1RRi12cThlQktpemVYRGtKaEJGRHgwS1hSdXU2Ym80YVNBTmRNQlFCcjgzYzFxVFNxWlHSAb8BQVVfeXFMTWxIbVpOZHJPRjFuaDFyckcxUXIzVkNRZ3JvQ2xTZzJsbkkwVHJJYUpkX0NDX213WjBGOURHUXZKd0NEWjNYdmtmUDVfRWlYYnpfT0xNZ1NBTnV5QTJpakZ0dkRPczJYNkVxcDM4QUFtS183NGMyM0QyYzkzOGdZNUkzN3RfdTkzRWxGMkNyZWpDWFZDT0FtT3k2ZkdzaU16X3ZobVhDb0lINDMtZTFXeXJ5TkFsdDJrcmFqdmNsSDg?oc=5",
          "Category": "Valuation/Corporate Action",
          "Sentiment": 0.2,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:36"
        },
        {
          "Headline": "APA (NASDAQ:APA) Given New $26.00 Price Target at Jefferies Financial Group - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPOU5WZ0tGaWJMWlBuZHU1ZTkzdVpNWXl5aERCS1RQNHl1emxaQXBSOEs3dDVIbFN3bWV4OG5OY1BpYkJKaUlfeW5uWGFSak5McVB4RlNVa2pRNVdDb25vS0tYcGhLREszSkR2dXBQTVczYmJNaGNURXVhLUZReGtwdVhDaHFhd1JGQi1ETHRSaWFacEJVUXFQOTdxcGduYUdxOFFtcXhnSHNUNU8zRlB6ajloaFlSTGo2d0oxV2c2dEN1Zw?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:36"
        },
        {
          "Headline": "APA (NASDAQ:APA) Price Target Raised to $45.00 at Wolfe Research - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNcGt6QUFNTXA4enkyT3lUaHNLb3VLTm9NSnVEQkltaU9lSXIwNkdGMHhoUG83TWRDQ21HbmhUeldqMkE3ZDdXcUhYUlVvN2hlRGtUbV9oUmRiZWxqWW5HazgzUkp5SlJTNUJEalREWk5SMXJVT2QzMlpUOUszRjhya2R3ZnA2VlltRGxDQzR3ZW94R1Axb0xCWVo4WXRwWGo0VXRTdEJRbjFFREE1eWlTOTczUQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:36"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "APD",
      "Price": 287.98,
      "LSTM_Confidence": 0.64,
      "News_Sentiment": 0.9,
      "News_Impact": 1.0,
      "Headline": "Air Products (APD) jumps 4.4% as investors refocus on FY2026 guidance and a Q1 earnings beat - Quiver Quantitative",
      "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOOWRGWjItM2pUZzdnbVBXQjhUWVdncHczSy1JbUZaaG5VWlIwcTVBdFR5MGhYWU1SeWJMSktlY1p0Z2prZjloOEN5V2o3cng4MU9JVEJlZFZIa3g3bmxtQXYyNTJNVEhZQndkU0tQQjlmZVlTd21fV3E2TEtUVE1WUTZacnVuYVI0TURmTy1JOTh3OE5SWk9uSVpFUjNwUzVVc05jNWdJcmpfWXBGLUowSHVzdE9vRXRCLXAzSjFmdXNWODdHanZZZ2NkOA?oc=5",
      "All_News": [
        {
          "Headline": "Russell Investments Group Ltd. Acquires 4,699 Shares of Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNbjBsdU5zTFZ3OHhtYS15X0VnX19BSjUzTHc3UWh3NEItTEtXODAxVF9UaFF5c2pqa1Z6Q3NqeDBDa0F0MWFvMDZQTFQyd2RpdU5RekJ4YkVJYzNNXzR3MWlmSnN5Q2VJX0F2U0VIbjB0ZmhKSnEwckFSQmdFTnpBV0dhR2w5OHpFeTFhUVlYSUFUYVI0T2h6bUZtZXlWZWZZcks1Z3J1enMzblJVT05ZNHVUZXdnVXlRQWNPQjRFLW9SbG1kN1NJLXVmMVd1S01SMXB6R29FSXVCWDRza3ZDWnBfVQ?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.4,
          "Impact": 0.2,
          "Date": "2026-03-13 09:28:16"
        },
        {
          "Headline": "Legal & General Group Plc Purchases 37,079 Shares of Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOaUpBTVBPb2NaUXZtY0I3VG1OY3RIMHhOSDFVQ2dldUNyU2YtWVQ5TmZTY1B3TG4yRVBrRTRFaE5oZFA3MlRpRi1wNUhvX2VwZnllMGJBUFZuR3J0aUZhSDdvWHNSZVV5QV9MaEkwa1pVR3NOcFhOZVVGOTlwWF9zRThPMVRsUDRtUnRGbjRFMlN4U1hGZS04ajhxVDhVWHIxWHQ4aW5nNUozZWlEM3VaZ0R6RXdJank2NVVlaFE4alo2ek55Y2FDWWlNMUVJRUNmN2FKcGpEN3pZSGVFcVE?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:16"
        },
        {
          "Headline": "Air Products and Chemicals Inc (APD) Shares Up 3.25% on Mar 12 - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiwAJBVV95cUxPVDFiYjBuNFlKNmtGTkJHb1E3a2FEWWQxV3NJYzVxby1ta3lNU3QzcUIyczJXSWxoUHhWb0lfXzJ1ZVN3a3FNdlVPcGpjSDgweWhOZHR5VTRTSTFlR3p0aHpJTmNiZDAyc3ZzRU9LSElBeVR2S1ZvRmJJbERoNWdNUElQemctckI4aDZVYnNZTmIyTF9sd2tLSzJrNDZ2eUhJQjc0SVdmY1daRnU5VWVZS2EyX29OeVZQR1J2Y2dYWDRJOGhMUllLLUljR3lIZ29QbFhPWjFnRWtwdUlwa25LQkRvUGdBY1FJR3djbC05RlFyVGZBRzhOdUdmSW9VT2pOMUhwSWQ2N2RvMTBqaXR3NmVtdVZDWnlldXFzd1NoVVV1c2hNdXBOVDk4Z2NPWUtQMlBROWFMWUN0bnVpQUg5eA?oc=5",
          "Category": "Market Movement",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:16"
        },
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Stake Lowered by Bristol John W & Co. Inc. NY - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNanJmM3B4bXBXdTVabGk1ZXBlaXFDWHdfZGZRWTdyVk1mQmtjUzFSVU1LckRreWQwMFR0b3dxNmRjaDRGeHkzRFdoSDBVWTg5ZTEyVHB6Q1pMbUNUNThJSzhhdjczTU9hNlUtNmhSZ1lDY3pwWVIzWDV6eVNFRkQtaGd5cGtGcE1uczFIU1RIOVRpcG9pYUR1TzhWM3lwai1YVjJmUEoyb3hDLWxuckp4bzVmWFQ2OE9GNER2eW9CYllSMldRdzdCTENYRHpZMFFwckFR?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:16"
        },
        {
          "Headline": "Air Products (APD) jumps 4.4% as investors refocus on FY2026 guidance and a Q1 earnings beat - Quiver Quantitative",
          "URL": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOOWRGWjItM2pUZzdnbVBXQjhUWVdncHczSy1JbUZaaG5VWlIwcTVBdFR5MGhYWU1SeWJMSktlY1p0Z2prZjloOEN5V2o3cng4MU9JVEJlZFZIa3g3bmxtQXYyNTJNVEhZQndkU0tQQjlmZVlTd21fV3E2TEtUVE1WUTZacnVuYVI0TURmTy1JOTh3OE5SWk9uSVpFUjNwUzVVc05jNWdJcmpfWXBGLUowSHVzdE9vRXRCLXAzSjFmdXNWODdHanZZZ2NkOA?oc=5",
          "Category": "Earnings",
          "Sentiment": 0.9,
          "Impact": 1.0,
          "Date": "2026-03-13 09:28:16"
        },
        {
          "Headline": "Bank of Montreal Can Purchases 6,146 Shares of Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPSDFsM0hnN0JWQkRZSWxGbVJzSUd5dU5oMWxlWXFkX28yT2RhOTVhQWM4NGx0TklCMXgzWnJKTU5WbkZSa1NqNmNwUUl1M2VvekZOdUxUclltRFBXQy1mbUhkRmxZcFc4ZWlvemM2Y21rZ3dsUFRMS2I0d0JxZWZWbk1QdzdPUGtMMEF4WWw5Y1RmaklxaUhFUW1Ic0YtT1diUVRWZVE3Q0ZzdS1TYU14UXdKSGpZeDRrMjRZb2N2VHZtdTV3aXB0QTIzNUZMZ215dUtVeFY2NWg?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.3,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "Franklin Resources Inc. Purchases 821,524 Shares of Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNT1FrRGFENjd1NEVmb1NRT295M1d6Z1pjZlZBdUNwbm5BUXVCZFFHX0RiVGxOVFp5aXJTZkNkOUFXaDdodDhnZjN0MGcxTHJzT1V4Z005VWMzczVsMFc3VUxzRXZCZkkxalNsNUYwc3NJblJ1MUJCQ29IRGFQNUVBZUZBOGM1Wks1cFVjYk5hNVNaRVAzYWVpd1FhMWJ2WHpDRkt4R3FEVHpfemtPVDdkdDNjbEw3elk0SVBYOXlLT3liRGppVktuckpuZlRrVVpMMVc1TDBZZUhxRGZTcGc?oc=5",
          "Category": "Institutional Trading",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:05"
        },
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Holdings Raised by Capital International Inc. CA - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOX1pFY21ZZ09ucmF5YmJDSTZGdFlJRWRuc2hQNFRJSTB2M3lkVTFmSDVkRlBxZXRVdy1qdFl1SGFZYnE0eGdkYWMxOEdJU2wwUUhBS01mNVhId3U5X3YyTlEydFRaN21SenFoemcydXV5ZGJYRThzMWRuV2NwZVBfWnpObjNvSDJjVTdaYjA5M01EU2R0TzlMR2QtMlRlY3JoTW45Uy1Gc093NWkycnZFSWVkMjkzdUdqOC1ILTZtTmZBbGMxUTdJTTlUVFE2ZlhHTE9UMGw0ekVBYmM?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:54"
        },
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Shares Acquired by Barrow Hanley Mewhinney & Strauss LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQNW55QTlYSnRSWERmSzE5OG04U2hYc3dnMUFBU0dRUHlsS0xRQ1FWN1ZzMEpmVmM4akE4N0ltelV4MHJ0eHUwU25KSm5rd2ppYzlFR25OWDliVUFsYmlDQjZpdi1xNDlFUjZEb3VaZ1dtaHVSWGhaRllSUVJYRVdDejM5LU0weGpwM09vMk9lX1FBMW56OVRKb0IzV29EU0VaUmJpMXd3MmhPdFVsRXFVa21SWmo1STJIVDZFWUl3ekk0VnRGQUpGLUVtSnpZUkUzbXpxeHkxQWRFS3d2MkZSTmduRkw?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:54"
        },
        {
          "Headline": "Air Products and Chemicals, Inc. $APD Shares Acquired by Capital International Investors - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPdFBnbFNkQVlHdlZwZWIycVhUM29yYjMzNmN2dzVtN1FicDNySncxTUxPWXIxM3pkbDdrS1pUTzBOalNrekY4ZDZPMERoNWdXaUNoTW90VnBlRDc0MTFybEhhbmhKNW5VT3FTUTZIVklMemZvUGVnTV9nYklKdkVqa2QwR1pUcmx2aFdEZVJiSVFoMjZQMTlfNUtGNUh4M2g3bDNNNnIzazhSU1g2Ynp3cFFUUVpqejhScUYzTEY4b3RuYzJFUHE2UEhXZ2oyUHExOHJyTm9KYXBCb2pvOVNF?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:54"
        },
        {
          "Headline": "Natixis Advisors LLC Has $52.01 Million Holdings in Air Products and Chemicals, Inc. $APD - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOdDdRYl81NzM0Y204LTFmRHZrTFQ3N0lkQk9SQzlZZmdUS2J1Z2dQcHdLWktwbU0yb1BQWjNRUFh2Q0t5aUlyRkZfd0UwaVdhWEJBZE13T05xbDBnUXVEYVBTRmVhT1JadHBCQzFYeTBPemtIN0V1Mmw4ZFNIdGJhMm95akFEaVVydXhlSTJhdzJjMzRuUlRIaHVXS2N6OEswNDJqLWlhZ05fRmFyNTdVVHVEY2t1UFFzZlZESDZDZTdJY0pKT2pyc2loM0VMenZ3cEg1dFpKRW1sQURzNmc?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-10 09:32:32"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "APO",
      "Price": 104.44,
      "LSTM_Confidence": 0.8,
      "News_Sentiment": -0.7,
      "News_Impact": 0.8,
      "Headline": "Apollo Global Management (APO) Down 18.3% Since Last Earnings Report: Can It Rebound? - Yahoo Finance",
      "URL": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNZzNIbWxtanNkUjdJRmM4UGFfc25vLVJNZTZSajZqWUNjLUtiY0tEY21IMWwtX1VpLVZGbHljSEdnQ29hZkljUnFzd1FvNzhIeFlGRWJzSk1XcVJKZ3F1OThwWmphVWtocnBxeEN1QXFiV2d5bFNHN2hTUGtzajBKck0zZGhndw?oc=5",
      "All_News": [
        {
          "Headline": "Barclays Cuts Apollo Global Management (APO) Price Target to $131 - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPRHpZQUN1aXpvNGRpZ0xSVmJvdTZsMkVyc0pPVFFXUC0wc05EeHVOSVJNT1hURHhGUlpmcEF1UTlfTi1GLTQ2ek80LXJHd2E2WEgyMUVmdmo4N3EzSWhlbG9QNFJRa0xKNXZORTFpbWVWdGZDVS1Ob0NzVlJZLXNHNHRmLUpCTW9JS05VUDJXbmxOcFo0UHVONE4ybjZ0TFFNeThNU0hzRGJZdE40cGRTcXZB0gGyAUFVX3lxTE9EellBQ3Vpem80ZGlnTFJWYm91NmwyRXJzSk9UUVdQLTBzTkR4dU5JUk1PWFREeEZSWmZwQXVROV9OLUYtNDZ6TzQtckd3YTZYSDIxRWZ2ajg3cTNJaGVsb1A0UlFrTEo1dk5FMWltZVZ0ZkNVLU5vQ3NWUlktc0c0dGYtSkJNb0lLTlVQMldubE5wWjRQdU40TjJuNnRMUU15OE1TSHNEYll0TjRwZFNxdkE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:58"
        },
        {
          "Headline": "Silvant Capital Management LLC Sells 29,272 Shares of Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxQNzl1eGhrbl9Od2V3NzdBNVc3d0dlRDB4YVE1U3RYaDFUT1AtZGJWb1l5QTFIWVNFMDkwakJkUlgteE1JV3gxTE84Tkhwc1hFZE1ZZW11aC15eGlCWXNrbFAwQXg5R3NVVmRydmdNWkxuTkNCSTZrbzc4WXhpbnNqZm9mNDlKbDlRZEFDdkpFeEd3X0hPV0VVeVdIbG02UTkzTkxBc2JubGt4WWo0bHdlbkJfQUdxTExWN1piWVZVaER3QXk0djhHUF9KMmREamZUbWhEZ0p0OFBqOVY4Rm9v?oc=5",
          "Category": "Trading Activity",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:27"
        },
        {
          "Headline": "New Annuity Launch by Athene (APO) Aims for Simplified Growth - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPcVZHdnA3eHBhNFFzdWNIdUZBSEh5MUxia2hlU1U4OXNkd0E0QlpxRm5xZWlmckc3X3pXTkp6ZFpMd1hTbVRUUVhUanMzTDdYY3BZS2h6Ql9kSmVjVGZHRjdOM05hektqZlhEMk5hRkpmbnI4NUJzY0JoOV9OY2pfcVdPSnk4QV9sbDg0U3RVT1JXLTRJSFpUTkp5dmlZUmNCSmRjcXFBOEtYb2dpT0l3?oc=5",
          "Category": "Product Launch",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:21"
        },
        {
          "Headline": "Is Apollo Global Management (APO) Offering Value After Its Recent Share Price Slide - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxPQjdxd2c5VzN2c3R1RTQ4dnIxc1A4dkpBc0tIVEpZSWRDay1wd1EwbXNzYU8yd1hPSU1KY1RleGpIdkd1dDgzMWZwcTZTOUdrTWp1SzhDNDFSS3JOYjAxa0FnZ291QkJwWkRUczZxcmFNamtVdllJekVvZUVjQlZCVDI4ZGdSdXA5NkExbWpUak5GNmJjd0lJSS1TWHN4UVZpQjZVX3poOXVoUk16UnhxaGFxMTVtQmNpekoxdF9ZWXZyLWJUMHE0U0RoSUFJY21wZ1lyVHRwZGVTc3pqWl9JYWUtNzM0eWhsMlHSAe8BQVVfeXFMTm1xVGl5dWRyZGdtcGlQOHVOeXBDbEtJVDhXU0tySnR1VzA2MG5xSXRYcTJYUFRFT2JUTWtzb3Q5UW56RjFFZ1Bvam1INVBSLUc4UmpXbEpSd1FhWG9WVTBxYVJCZ1BReXUtbVlES2dZMm90ZUo4aTNWQ1hySVZSVDVjeFpNV2dSbEZrbVpoa3NSMkEzNVRLZ1lWeW9hVF8wdW1jU2ZnWUI2UThPbkJjNDJjTWNMQlBUTlI1ZHdHYkV6QmNZdmdjOUVtY1g1b3ZZQkpFYVl3dDFkSjVSLWZiRUZnSDNOcmV0TzREZTQ2VE0?oc=5",
          "Category": "Market Commentary / Valuation",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-12 09:32:21"
        },
        {
          "Headline": "Vestcor Inc Has $2.38 Million Position in Apollo Global Management Inc. $APO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQWFdvR2pYNDdHRzZtSDNGeHRtQTk3am9BNko0TkZiWUxwYkloUFhwN0xjUnJScldwbFZfSU02ckxiSHNkUTVOczlLd3BpQTFHd3NEZk8xNFRVbjhhRDdnVml6UXBoMHJKcVk4RndwZHZlY1dkanhUU0FfczhiT2RkNXRzX3ZFMC1nbDNidEctY0FDWXp1SVJleEJQZGI3TFpkVjEwbExpSThObDd4bDlTMjZOekJ0cURQSW85X3MyQlQ3a2dHXy1IdzBQNDcyQQ?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.1,
          "Impact": 0.1,
          "Date": "2026-03-12 09:32:21"
        },
        {
          "Headline": "Apollo aims to mark private credit daily, eventually - report (APO:NYSE) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPUVg1RjE1NEw0bDljdmxOWENldGxZMU9fNE9rNzV1V0Nhb2U0WWRyR1ltaE90WUVvaV9SdWVpSVZmZDNXM2QzcjhJYzdmeVc1RlJoYVQwWWRfSzJoRjEzZjNsLVJTY2I1SlhnaFZIeHo0REotYzBEVktmVy1LWTZyaWxNSVNpdWd5SHJOQzJZeWlCWGJZTU5oWkFHdlFlVFE?oc=5",
          "Category": "Corporate Strategy",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:21"
        },
        {
          "Headline": "Apollo Global Management (APO) Down 18.3% Since Last Earnings Report: Can It Rebound? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNZzNIbWxtanNkUjdJRmM4UGFfc25vLVJNZTZSajZqWUNjLUtiY0tEY21IMWwtX1VpLVZGbHljSEdnQ29hZkljUnFzd1FvNzhIeFlGRWJzSk1XcVJKZ3F1OThwWmphVWtocnBxeEN1QXFiV2d5bFNHN2hTUGtzajBKck0zZGhndw?oc=5",
          "Category": "Market Commentary / Performance",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-12 09:32:21"
        },
        {
          "Headline": "Apollo Global Management Inc. $APO Position Cut by Capital World Investors - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPSmZIblJldTZlQkZUYWVxS2JZN2dLS1FKanpYUUNhN1V3V0xOUGFZa3R0cjBfOGlQbmpremJ5b2Z1SnhmR1ZlWGdWNk9tTG02aTE3OGhqeHJjZ1pXR253SUNTUUU1UUphSV92b01JbzJkNWdzNC1tTUNXN0Fuc2p5bTljb2FzRFZTVWVSUFdBdmhKVHdQb0E5T0NQd2JPa09NWE54cmE5RHdJdEpacnJPZkpaSXBKTHVjWjBfTTQyYzlCU2loam9GdS1qMWpidw?oc=5",
          "Category": "Institutional Activity/Holdings",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:58"
        },
        {
          "Headline": "Apollo Global Management Inc. $APO Shares Acquired by Swiss National Bank - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQQVkzWnNVLTJYRUM5OTRDZndvMTVyeVhSSnNYdnh0NGFaRXI5Ynl4bXRXUEVoaHA2NE1FbXNRNDNDNzNRcnByUDBwMHhqQXhfSnAya2xMNFp0cnRGWGJCWWJ4aXhTRlRRTmprUmRraVcyZ1pzRmFNNTBzcUVFUC1TT29NQUx0bHJ6N1ZDUEw5WlcwZTdoMVRyYWg4SGUtUkhCUmhfYXAxbVFCRGo0OWhSejRmV2xwOThsZ1lyZ1hEM1lqU0pBOHRCS2VfV0M?oc=5",
          "Category": "Institutional Activity/Holdings",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:58"
        },
        {
          "Headline": "Apollo Global Management Inc. $APO Shares Purchased by Blair William & Co. IL - Defense World",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQc0tzeHJQZ3c0MXJQLWxjdmhLLVAzaDhFTWIxRnFKWFdwUl95Y0luZTd5elZzc1FnaVJfQTV6OFVtTTZiT1piNWZfSFpkVEhkcXc5dzBVY283QUJyMlNfTDF3UVVRNzB3YlBTQUZjUzJhSU1UZnpET2hqdFE4UVJaTGV3SXBiZklPMnpnaGJQQjFOc0hRemczN1prUzY5d0NiUnRDb0w3c3pYczJ4Qk9zZDBNOUdKanJD?oc=5",
          "Category": "Institutional Activity/Holdings",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:58"
        },
        {
          "Headline": "Apollo Global Management agrees to sell stake in Takkion to Siris (APO:NYSE) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOeDljTFN2Tk1UcFl2RUwxeExCNUdoU1dvNm9aZHU0UmNTSDE4NUotN290TWhGX2l5TU1EZDd6SElsUElud0NxdS1yU19JZGNTNW9ZcEJWOWoxLS1jVkJoLXdxV0J1NVp0ak9LR0Q4QnBIMzJpVFVJbmo0eDZrT0ZRYUhibWlKd3drY0FoM1MyM2toT2xVN01RYUxxdmtuN204cHRCS2FB?oc=5",
          "Category": "M&A",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-10 09:32:27"
        }
      ],
      "Signal": "BEARISH_DUMP"
    },
    {
      "Ticker": "APP",
      "Price": 458.67,
      "LSTM_Confidence": 0.52,
      "News_Sentiment": 0.9,
      "News_Impact": 0.85,
      "Headline": "Is AppLovin Corporation (APP) The Best Performing S&P 500 Stock in the Last 2 Years? - Finviz",
      "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNM1lMOGxPb3NmTTdxYk92TVZKQU9rRnotZS1raEpoSEJXTkpwcGpsN2MzbTRWN2x2LW5pajZqcmpLRUtwTkZibkhXVDNvRzRhNDFzQ1N0SGZqWVJrejkzLWdmLWhlTDJtUm94WEJIcDFZNG1vcjVGNVZaRkxkTnRNUGtkbGw5c0lzSnpua0thTEJ0ZFZGRmtlVWI4bkdKcWVDLS1jUWZRNzU4bXFWaWs3RA?oc=5",
      "All_News": [
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
        },
        {
          "Headline": "Applovin Corp Stock (APP) Moved Down by 3.42% on Mar 11: What Signal Does It Send? - TradingKey",
          "URL": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOVUxhUnBucHY0bHBYSWRYX0hTUXp6aWIwM3BwSFE5MlRORUFOOXNpMU5KSlJvVjJmQzRrT2h1RXV1UU8zQ3VFYjRwWE53N21yd2JGc1lIQlRoQi1QV1ZvcE5PTUt3RU9oc2Z2TXNRcGVsbXlnbktMWUJzUTBWOUwtWFZub3VGRWp4Wnc?oc=5",
          "Category": "Stock Movement",
          "Sentiment": -0.7,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:02"
        },
        {
          "Headline": "Is It Too Late To Consider AppLovin (APP) After A 69% One-Year Share Price Jump? - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPTEpTV01peE1xSm9JcUxISUQyRk42S1VHazV4TWtxMnhpazY5eTlQR0JiQ09tMnEyUXVscjZVNU5HU3VuNUpPeGpXTHdFbVh6NUlIY1ZpX3FNdVNvdklBUHp3ZndIRGNLZEd5QjJwUUVnV21OTFhsLWJTVFhza3hzVXdjd01lR3V2OVlCV2VGUFFqM2JzeC1rczZWYVl3UWpQbk4xbjBMWTZqQm1pSENWOGNVa01BWGhvaXhXaTR6VW1KclnSAcgBQVVfeXFMTlQyc3FMSWFRNXRPT3pmYXhOQkh6eGl6R0VmY1RSVG4wdjJkb3hXbTJzRzBtQl95aXEyX1NCSTQwVURkZVBBZHdwUGRJZU9fZjNBbXNlUlJtVDdTbEJSc3BTWGJwZ2hVZ0l6TU1NVFFNa0VEYjJTUm1UNVY2dWFKU2RJNXBoVFpHaWhEejE0M3YweUY1dHpxblRqai1EeVhKSm5XUFF3cDNtV1JONVo5S2lrV1R6anFYd0s1azdIVEVSaTRseFZlTE4?oc=5",
          "Category": "Stock Performance",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:02"
        },
        {
          "Headline": "AppLovin (APP): 3 Reasons We Love This Stock - StockStory",
          "URL": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNM2cyc1gxQ2MzTC10RU52QVlkWVlxenU5elJzcURUdDd5UFlaVnVHNUhreUZRSkFSZ1pfS0NPaFVWRUhzblJjNHlnSVlTYzBVNWs0QWo2Sk5kZWFlcUhBb3hQcW9kbkROTGFHZjFDZGhud041cnJlQ0ZGczJxdmxPYTlyX2NGWFI1V0dpMENaUEctQi1vZ3g5aDVUU01GM0V6bGFJNQ?oc=5",
          "Category": "Company Analysis",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:52"
        },
        {
          "Headline": "Capital International Investors Acquires 4,657 Shares of AppLovin Corporation $APP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQQ1VyV0tTNFN0bHdXeWVrYWk5bXR4ZGMzaThqc1RvUzVCQS1veHNyY1k5OUp5Z3BjZHU2SnlVa2ctbEtMeXpjY3h4RFZGQlJKN1ZveVdfdzQ1MXoxdExONXhFQ0VkZ0lqSVQ5MGcxVDhob3JzMVFxWUJuYTZRT2c4cDFlRm5LNThHVUpoX0lMQnUwclBldmNiVUYwNk9RUWZVVDJKdEpNUnhzN1N1ZkF5aEhQa2xfa1V4dlJfdHlfcUpnSkRVMTh4MXBzc2IyT1dfSW5iLXc3ZWQ?oc=5",
          "Category": "Ownership Change",
          "Sentiment": 0.5,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:52"
        },
        {
          "Headline": "1,035,293 Shares in AppLovin Corporation $APP Acquired by Capital Research Global Investors - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQRE5SZlhaWkFaSHlUUDVzSVNpMDB5SUQ1NFprRVhia05ubkkwMmNBVUpHREZPbnJRS1BBTHJ5aGVSVnZoMW1yOHhoa1Rna1R6bFZfY1F2Qk9xTzZmMFI0eXM0bkFpSWkzTjZPT1RFU05KQWlDYmhyRUhCOXIxM0VfX3g0Y1l1RFp4cnlxTFlPc0F0QWI1cXNOT3NiR2lsZ21pMXNKSVZodS1DeWtUVW1OelJmSktxZHZMeUNSQjE5Y2VJeFF2X3V4eE9KTFMyQVZhY2tsZjdQWFdjejI5R0V0LUcxRQ?oc=5",
          "Category": "Ownership Change",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-11 09:31:52"
        },
        {
          "Headline": "AppLovin Corporation $APP Shares Acquired by Bank of Montreal Can - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNZkRteUdrR3A0Mk5Zb1h4RzVrUlljc3VZV0NHa0o2VlFEb3RmWmRQQ2s1N1BuQ21CdUtreWtYQWI1c1lCcEJIUUp4b0NHNnM4b09GZTZud1dkYU8xT1I4bmMya0t4VDdqX042UEg1aFpsek40SXEyeVJhNmVTTDR3UVdZN1QxSHhraUcwS21vVEdwT3BONU5EUWpGam9QU2ZYWXlJUE5QeDU1UTJPVUJYTmpOdWJxTDBVMmZkcnplZHZxYW8?oc=5",
          "Category": "Ownership Change",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:52"
        },
        {
          "Headline": "Blue Whale Capital LLP Takes Position in AppLovin Corporation $APP - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOa1FRUmxrcXhRdVVFZHQ0Zl9KV3N3TV9UemlWN1Y5QWh0ZThZRC1oME0zdW1CNnhhRmUwVHpfWEh6OEFYX3JpRzNjN2tvMnY0ZXBMdXNPWTJibWUzY0RfTnFRN3pGTS1JSm9YZENpNjFQeHIwUDFZc2dWSkpGek0tOGphSHE4NmRacWk4cFFHMkJlSUtSTXlXaEVRWXF6OU5ERWVHeW00Qkdub1VHZ25wcGM5WGVCbU1GTVhhV3JXN0R4U0wx?oc=5",
          "Category": "Ownership Change",
          "Sentiment": 0.6,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:52"
        },
        {
          "Headline": "APP Looks Smarter Buy Than Synopsys Stock - Trefis",
          "URL": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPZjVIYXhDTGdSWnh6bkFUU0cyaXlLRDd1TFdpNF91cXY3a1l2YTlKaHZsTmVjRTJ3MDBneU9IMUFNN2FQeUpkTlRnekpkcWVhNmtpM1lVaFBWcGZLbE9xbldqQVlaTmc3Y2Q3R3BROE1BQjdtQkFwMkFTbERHY0FTUkZMdEJNc2NpbTNiQlppcE83aWYzem5oOXF6aTV4Tl9wQjFTMU5oOTc?oc=5",
          "Category": "Stock Recommendation",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:49"
        },
        {
          "Headline": "Is AppLovin Corporation (APP) The Best Performing S&P 500 Stock in the Last 2 Years? - Finviz",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNM1lMOGxPb3NmTTdxYk92TVZKQU9rRnotZS1raEpoSEJXTkpwcGpsN2MzbTRWN2x2LW5pajZqcmpLRUtwTkZibkhXVDNvRzRhNDFzQ1N0SGZqWVJrejkzLWdmLWhlTDJtUm94WEJIcDFZNG1vcjVGNVZaRkxkTnRNUGtkbGw5c0lzSnpua0thTEJ0ZFZGRmtlVWI4bkdKcWVDLS1jUWZRNzU4bXFWaWs3RA?oc=5",
          "Category": "Stock Performance",
          "Sentiment": 0.9,
          "Impact": 0.85,
          "Date": "2026-03-10 09:32:49"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "APTV",
      "Price": 70.5,
      "LSTM_Confidence": 0.7,
      "News_Sentiment": 0.9,
      "News_Impact": 0.8,
      "Headline": "Aptiv's Versigent spin-off will unlock value for shareholders -- UBS (APTV:NYSE) - Seeking Alpha",
      "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOZF9keGF1Q2NCN282OW9IaHZxeTVyYlRkMWhoYWFqNmhIOFZfcGNGbF9hbnU4NEFOTEFwQjB2Q1FjRGFYU19mZlhTY0JreVVObHoxSWVzZDBOd0NmZWdBUWZ5TC1OTVdYYUU0TDZzNUZKdXhzLW5nbUo4TnVjZW5wd3dTWElQbXR0N01IVWg5Y1JCZ3BCYVh4eWNpT0VrVHNzWHI1RnZOdw?oc=5",
      "All_News": [
        {
          "Headline": "Wells Fargo cuts Aptiv (APTV) price target after $1.35B notes tender offer - MSN",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPZ1JJbTNBRkhCeWZVS192U3JpNTA5MV9aajB3R200WF84TS0ydS1nY1R2Ykd6YmJtZ0dHTGs3ajlvMTltNDBCSEN3cHVyaHVOVnYxYjV4ZGZ6NjhHTWYzakhram44cTVsUEtIVFBCYWlodmVEV0I0cW11WVpnZVRkZlYwMnNYU3JHemRGMTloZl84QThNV1J5UHJvYnpWSEFoUTF2Z0hIVzRBeFh2WHhqckt5V1RGS0d5RDZHeDhjaFdRbnRQZFRwVUNrdWhHNzA?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-14 09:21:52"
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
          "Headline": "Aptiv PLC $APTV Shares Bought by Capital World Investors - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPVGJFYjRIU0hFXzZJRFRWYUNIRHN1cHZFVUtibGttMWVaYnJiTm40NDNhVTgwc0gwODc1eWh5U0t2ZEtlYjBrc2VNd3FoaVlZQ0kySTNwSmNDdTExRmZWd2ozUkZya01ZUlg2d1o1YlB3ZnpmVXNOX3I2Ym1waHpkNkVxOGhVOFlaWURjRUtYU3AwSnFvWVFfREV3TUZ3a2RscERsYWFQV0tUSEtUYU81am9jc253NjA?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": 0.5,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:25"
        },
        {
          "Headline": "Aptiv's Versigent spin-off will unlock value for shareholders -- UBS (APTV:NYSE) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOZF9keGF1Q2NCN282OW9IaHZxeTVyYlRkMWhoYWFqNmhIOFZfcGNGbF9hbnU4NEFOTEFwQjB2Q1FjRGFYU19mZlhTY0JreVVObHoxSWVzZDBOd0NmZWdBUWZ5TC1OTVdYYUU0TDZzNUZKdXhzLW5nbUo4TnVjZW5wd3dTWElQbXR0N01IVWg5Y1JCZ3BCYVh4eWNpT0VrVHNzWHI1RnZOdw?oc=5",
          "Category": "Company News",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:25"
        },
        {
          "Headline": "Aptiv (APTV) Upgraded to Buy as Versigent Spin-off Unlocks Value - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPTWFvRThWQ3B0WlVyV0ZPU2liSWE2NERxelFkdmhSSlVNdVZEdlM1RkYxRkhWdGUxQ0JhY1NJTzNZaE1qaGEwNDd5ZzN5U1NOR0Z1OEI4WGNEWl9LQ2hTYU5EbzVobjYzN290ZGgyZW9paXZOMldaQThISF9tbnJXNmxaa1B3b25uODQ0bk1UUWt3YmcyU2JyemN2NHFGZG0tYVE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:25"
        },
        {
          "Headline": "Franklin Resources Inc. Sells 123,795 Shares of Aptiv PLC $APTV - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxONE9pZkxER3RfY3pOc3JUSlRzUVA1TFhVY0tXclVPRXJtTDhzMnlQdTFJRTBsZmFVM19iZjJzRnl0TmxGRWJMZ3hsTEhVV2pnTm1jOU9yektsS1pnMWVIRzc2RDBBZXBPWG53M254b1hybGdFM19YcXJLeW8xR3VVVTZhd3lqMEFwM0hBZ1hwLUhXWlJoQzRqWl91VEpJelhZeUN4QU1uWHUxdFMyUy1tTVlLZ0hGY3h4bExaSERn?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:25"
        },
        {
          "Headline": "Aptiv PLC $APTV Shares Sold by Swiss National Bank - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQUllJVnJBVk5KbW9ST2N1ZnNVSGRUU2RkcVBSbjR0X1NOR3lWa04zdFdOZjRmbkU0eGY1a0FpYWlmLWV0Vm9zZURLTWZtbjNzeFI5cUJ2RkZMWVROdl9IWVkzVTd2RHFhZjE5NTB0M2Zlay14VnA0WWR2d0pCbUdCSVl2LTluN015NEpYREE4VVQ4aHA2RVg2ZkJBMDFPVGtBQThoUlJTUGRJWWppR1B3?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:25"
        },
        {
          "Headline": "Wells Fargo Maintains Aptiv PLC(APTV.US) With Buy Rating, Cuts Target Price to $95 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOamtrZm5NQUZ2SlZwYUtybnZheElnOHNHbTBXaGVhaUVTd09BUGdVWC1mUVdOXzVOMi0waEJ1UGVySUJNaFF2d1dtRkVUM205Qi1Cd0N3UjRGRnk4bFRRUnp3Q0J3Z1ZaekVYN2xuczhtUVlkNUxud21DekxncGhrRUQ2RllkcVo0aTJ1bk5YdjdDRHhVTGxNd3VFaFVzUmNoUUE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.3,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "Aptiv (NYSE:APTV) Given New $95.00 Price Target at Wells Fargo & Company - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQcGdOZzNqR2Zua0IwbDVLeWplempQV0N5SW95ZkhCZDlORXROQmVHb2dvZ3JVaDE2bzgwOEZFUU1CRUNvalR5RDJJdWY5clVEUTRfZlJJY2xwSTd3SzlnNzBBcjgwLXJpcjQ0VmlvU1o0UkpYemJLcDdHMDZDODNXSUNjbEVxWTdPalVJazl5Mm0tM0dNRWNnMEw1ZjhkNFVfYThTaHoxaDNIZlJtUGk3aVU3TW5yOGN0ZGE0?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.0,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "APTV: Wells Fargo Lowers Price Target While Maintaining Overweig - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQaUpDWnBDODlyMVNMOUdYc0ljOThwNjFzY2RKdXNpN1hzNlZxU1BkRmF3Nmc1aW5nRTM2YkdEbm0xZGJmRUZBMUkzemUwVE1zRGo3aGh5Vm5fR0RfTnFVd2xHX2Z4ZTB5WkRTY3ZQdHp4RW9VUzdPYmRNdVBXTjlSYnpVTlI4U1RYYnBPUWYzaklDRjdzV0VmbWtRQ3JsOXM3cjZ2eEM1aGNpQ3VuOGhSeFNjT25kQ0xPU0pkS3RYRXJ3a0hHb3c?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": -0.3,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "J.P. Morgan Maintains Aptiv PLC(APTV.US) With Buy Rating, Maintains Target Price $105 - \u5bcc\u9014\u725b\u725b",
          "URL": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNbk1QNzFKNUYyVVhYRjA0SWhRTklkYkJKcjFMTHpzR2ROaE9ObjVaZVZjOXl0ZnU0YU4tbm93ZGlBTnJydWFxQ2xWVlk3SkN3YWd3bVoteUlpdVFfUHpqUUpManU0MnR0SF9KSE1tMGkzNFktNzJmdXlITzhNQXFaQjBKQ3NVMHFiSmhBeVNIRWxBRF95UVZFcGlpbzI4Nml5eHhOcXZ3?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-11 09:31:45"
        },
        {
          "Headline": "Aptiv PLC $APTV Shares Sold by Barrow Hanley Mewhinney & Strauss LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPbk84dGJLcS1vWThSeWpJRGN3VnJmczJGenpsOTl2aHhJNkJkZENrTUExVTdsV18wT3UwNTZDU2VXQzFlcklGLW55VUxzQXMyTXNLM0lDVUQtbW55RTE3ZWVfZmhrYjBMU3VtUkpVLXg0dER5emwzckVRWUoyN2t1Mlo0M1k2X19pbnV5NzVzX3hKeGtHRlRTcEFycXJ1amNycjVZNWY3SnhRV2xyeTNLcjNoelI3Rjd0Ul81ejNCODZ1SVRw?oc=5",
          "Category": "Institutional Holdings",
          "Sentiment": -0.5,
          "Impact": 0.4,
          "Date": "2026-03-11 09:31:45"
        },
        {
          "Headline": "Aptiv PLC $APTV Shares Bought by Gabelli Funds LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOT1FTSlBKMUR1dWxuX2ZBbTRYR1ZhdnZaMmdpaHVOc25UUmVUTWR4aHFYelpLQ2l4dXc4VDdWSTRyT3lwLUpnbmdOUFFWUzZEcG5SYTQzcVdMNzJfOEMxRkVoM3NCMHdLR1A3d3UyRk5HbldQdHk5TXlvYnZEMzFPeTlXSGdyTVdzekFaMGM3d2NMeExSV245bU80NUhmUXhLX25vOEJTSW9tS1o5Y1VJ?oc=5",
          "Category": "Investment/Ownership",
          "Sentiment": 0.6,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:35"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "AWK",
      "Price": 139.69,
      "LSTM_Confidence": 0.52,
      "News_Sentiment": 0.7,
      "News_Impact": 0.6,
      "Headline": "Is American Water Works Company, Inc. (AWK) Among the Best Water Management Stocks to Buy? - Yahoo Finance",
      "URL": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNOFlUcVJSSjI5SnU1SmEwcjJFcFoySnZxT09FNTBfTFctZnBvTFhLUGVKVHFfYk5DN1A4SFNwU2ctVEZoTDBvMUNiVS1JdDNhUG5xUTI2MjlrUWpqLVJQak9rR0pMLW1HTGVjRi10SHhYRF9iLUxxNFVTUExOeVFtbnBPMUQ?oc=5",
      "All_News": [
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
        },
        {
          "Headline": "American Water Works Company, Inc. $AWK Shares Purchased by Russell Investments Group Ltd. - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxPMHRUenZETlpkZHYwczhYSENKLVJqLS1KdHU5Rmc2UUpOU01EZGJPamxDUExmbWlJZWJZSUU4S2lPbm45blJyc3ZHeDhsU1RsLTJQcDdsaUxLdVdxUldNU1FNeS1oQlRweGFzNnF4YTVGNklWQ2JQQnlkU2dnMGFzMkMyZWVXcUZ5NGJJc2xvRm9UVnpkOFJtVDRsUEJMTFBJYmpfR1FWb3I3cGQ2VWs5UkpKcTdGMnQ5QlVZMnR6OW5kcTh5NWNvSVRJdHdsaFVEMUtnVy1Cd29Vc0JjbHFWMA?oc=5",
          "Category": "Investor Activity",
          "Sentiment": 0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:12"
        },
        {
          "Headline": "Korea Investment CORP Has $4.50 Million Holdings in American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxPU0ZZVDhfLTdxTk90V3FpbzFrU3FGZlRoRFJCel9sZnRadVlHQkZrXzhLNTR5TmptRWpsb3ZnT2NQT0pyenZRZHNBYWt5Y29Yc0lXU1g2WFg5aGktWlphaFRLaTFlZkFXR3UyTVg3WEFjWVhzM0hqalJQMl84TDVEZHlKUXdTWkhwMHpIeXdJQW44WGoyNl9lLTZsZ2tUV2JqNmdvcTA3VTREMnk4VzZZczE2bGVHZEhVbTNvcnktSU9DcE1JZVhzZXlySWRVdXB3aG5qTTluRnNlWk5zWkpMdw?oc=5",
          "Category": "Investor Activity",
          "Sentiment": 0.1,
          "Impact": 0.3,
          "Date": "2026-03-13 09:28:12"
        },
        {
          "Headline": "Is American Water Works Company, Inc. (AWK) Among the Best Water Management Stocks to Buy? - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNOFlUcVJSSjI5SnU1SmEwcjJFcFoySnZxT09FNTBfTFctZnBvTFhLUGVKVHFfYk5DN1A4SFNwU2ctVEZoTDBvMUNiVS1JdDNhUG5xUTI2MjlrUWpqLVJQak9rR0pMLW1HTGVjRi10SHhYRF9iLUxxNFVTUExOeVFtbnBPMUQ?oc=5",
          "Category": "Stock Analysis/Recommendation",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:12"
        },
        {
          "Headline": "Is American Water Works Company, Inc. (AWK) Among the Best Water Management Stocks to Buy? - Yahoo Finance UK",
          "URL": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxObHQtbzR4dEFUaWhyQ3VHR1RnX2lLQ184Q3B5QTBkT1ZIU19FNGdjaFM4LWc3X3RMZ3laamxyRHhBOVlDd2J6c05MdXBSZUI1VFNpLUNzSnZjUmVuSWFueHdkLU4xeUpzQ0dxS0hWZUdPQXNTUzdHdDA4alJKTnA5eWFuU3RuQTBL?oc=5",
          "Category": "Investment Recommendation / Market Position",
          "Sentiment": 0.4,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:12"
        },
        {
          "Headline": "Swiss National Bank Decreases Stake in American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOZGttVEtIWGNTTDB5bHdTbVFIcXFYWml6cnluRlZEcmp5aUNiZ3RXQW5uZXVBcW5BSGhveEpPZ3NSMm5NTjR4ckM2NGNYdnhWWmFrR3Q5cklHQk5EZHo4TENEVXNUTmZqZzBzUWdZRmgzX0tYdEJwU1pTQk41cUViZ1dzcWRXMjFmdWU3Z1k3WHB3cFNBVkhxa25TQzRlVjNOdHJmVjFuLXY3NGlCQVp4MW54ZEJnRzIwSl9Nb09fVWhzOUxoa2VmR0NlanR4Sy1pSUE?oc=5",
          "Category": "Ownership Change",
          "Sentiment": -0.5,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:12"
        },
        {
          "Headline": "Is American Water Works Company, Inc. (AWK) Among the Best Water Management Stocks to Buy? - Insider Monkey",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPZVppR0hYQ1pzQmE3S3RMbmFLVXpQdmdDaENnNktZRGFFZjJiTW51dFBpNjhYZ1RqdVp0R0s1SU9WdDBPVkFBeDRYOS1sdWNIN01yQkwwTm5HZWVOb09jNkpKX2dTNjJpelA1YkdGZlNHQjJfeHNwaTcwRWVMdi02ZUtLSjJkeXBLTC1fbE5WM05PSjc2cTVyMlNjRWI3a00yMDlwVE9sMUVJQ2NNZ1NpSi1LQkV2Rnp2cEsxUWFhTEd6dWFuTElCOUtpM1ZSZjhBWmcw0gHTAUFVX3lxTE9lWmlHSFhDWnNCYTdLdExuYUtVelB2Z0NoQ2c2S1lEYUVmMmJNbnV0UGk2OFhnVGp1WnRHSzVJT1Z0ME9WQUF4NFg5LWx1Y0g3TXJCTDBObkdlZU5vT2M2SkpfZ1M2Mml6UDViR0ZmU0dCMl94c3BpNzBFZUx2LTZlS0tKMmR5cEtMLV9sTlYzTk9KNzZxNXIyU2NFYjdrTTIwOXBUT2wxRUlDY01nU2lKLUtCRXZGenZwSzFRYWFMR3p1YW5MSUI5S2kzVlJmOEFaZzA?oc=5",
          "Category": "Stock Analysis/Recommendation",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:12"
        },
        {
          "Headline": "Assessing American Water Works (AWK) Valuation After Recent Share Price Momentum - simplywall.st",
          "URL": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNSThCbEdCb0xNM0xXS0FieVE1Q0dKSDNQeVpGbFdOYTdCc3FlTDVXdjZYOUFxNGpqOG1YTjV2dnRfN29sSk80NkxUX3RiQXkyMTU0MVc2NUNzTUc2aUJPcGN1QTh2bVZ6dk9idWhzcEFYNm05QU5rb2ZwTFZlb296UDh5NHN0TEs1VkVhVm1lYWtDOHcwVXBfT1dTazJrekx5SjFDN3ZBajNrZ3hfblBQVmh3RWVLVlc4cFVHbmg0VnB6TmducVRBVkc4T1Y2ZEUyWHhF0gHYAUFVX3lxTFBuVnlqWFRVOEpzLUtmOGZYNmwtVFFfRVNNSU5aS2dMbHJSSlN6cU5MakhxdV9wUEVzY1pZYmEyRmJ1em9fT0d3cEpqQlNmMTV5cG51TEhMMmFLOWlRaG5xMGFtZlRUVlNFd2tHenV2TEFuUW13N0xNeHpYaW4tX3JTNG84SkthRmdvSEo3OHE1S0dVYWx3NzYyTXZrU2VpdUpBbGNETnpQN3ZrSGdGUHpveS1hemJqcnJvX3B1VU80cHJyNUNUSHA2RWd2cTJrRjdmSnJ1cVlwOA?oc=5",
          "Category": "Valuation / Performance Analysis",
          "Sentiment": 0.2,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:12"
        },
        {
          "Headline": "Barclays PLC Sells 229,917 Shares of American Water Works Company, Inc. $AWK - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNV2M0eVR5RXo0NVg3bjViTGktbmhoQTltZUY4NHVXU205MWNGY0NBclladmI0b0k3OC0zV0d0aTJMd2pfSnZ4d2ZTekJLcE50a2Q2bWJiR0p5YWVMUHByVy11ejRadDhJUG9paWFuRTg3dkgweTB3ZDA5Ukk1RUlsazRacmltNGFsRUtuVTBUQlJ5dWNuWHZFM1JGN3Y0LTNlSEU0SFlyTllmbzJKdE83aTlhdXZjX3pZdzNBQmVSUTVKeFU5RmJ1LTdJRTJRQQ?oc=5",
          "Category": "Institutional Selling",
          "Sentiment": -0.3,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:28"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "LNT",
      "Price": 72.79,
      "LSTM_Confidence": 0.55,
      "News_Sentiment": 0.9,
      "News_Impact": 0.9,
      "Headline": "Alliant Energy (NASDAQ:LNT) Hits New 12-Month High - Here's What Happened - MarketBeat",
      "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQbkVZRGYwQUJ5Wk41eTIydm1Ec09xb2tVRlNkVEE4YjhGekxsZnhycEZVRE5MWm5lcmFWN0hLd2lMNDRlWGtMRl9zV0xLVEp4VWpKNVE2ZlJoY1B4QmZqSTBKcnVvRGdMMkVqNmhRTndhOGh6c3NGU2F6ZnhWZ1ljMGZJT09vQUxjbnZSVUZDSzEtSHhBc0NVNWl1R0hEM05ZNXRPS3FLVnlWTXVzNnVhd1RRejRjQ2phWXJfMjJB?oc=5",
      "All_News": [
        {
          "Headline": "Swiss National Bank Sells 37,000 Shares of Alliant Energy Corporation $LNT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPTEhQWnNsSnlfOUM3UVlvYlRGZThvZnFMRXZ1ZFFocVl0WUlCUWJ4Y1AzWUtrdkZMa0VOVXlDOGVJazlBTTNGMWZPQ3p6ajVnWHI3WmJvM01xT2lGcWNsSWNUc0pHd01lUkpVcm5JOUFmUmpNV19HcjZfaG9rV1NNNzRIaGI5QXhobDNEVmpXR2RkRWhHNGxQYy1hX0JiTzUwUnZHb3BGR3B4U1J5b1ZVN0hYcFhjNlpNdXhvSVRON00xWHlzM0F0VmQyRF8yQQ?oc=5",
          "Category": "Investment Activity",
          "Sentiment": -0.7,
          "Impact": 0.5,
          "Date": "2026-03-14 09:22:01"
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
        },
        {
          "Headline": "Alliant Energy Corporation $LNT Shares Sold by Natixis Advisors LLC - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOUzU4NXpfWm9sT2VTZUlLUUppcTRMT0dySGl1dUJ5NnFjcFMxZDB0UC1CdkFaU01qWmZyc292ajlNbmU2c0pvWU9VTFpVeENKUUR2OW56ZGIxaWlWaXA0bmJBWk0tcERIaXVuci1VTDVxY1Z4bVVkOFNUSnZ3alBHcklnTjZvbFBsRGswMWFILWw3aEItajBvWDNfR0ZZSnZPd2hBUUhBV3JSRnFNRWRzQTEzNFB4NDNYaUlEeXJhN0stRFFqUkE?oc=5",
          "Category": "Share Activity",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:35"
        },
        {
          "Headline": "LNT Stock Sees New \"Outperform\" Rating by RBC Capital Analyst | - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMi1gJBVV95cUxPdk9SQjNjMTJ0QlhJc2MzeU4zbmpLY0dCY3pOYzJUWUx3QUtJSWJNTGxmYzB6ZkRFdnRLV2xkUmRoQUc1b0tpREVTZXNxdGUwWVBOWWc1WjZTZndsckZhd1F6U0Q2U1F5dWMyTjVURFRwclpXaFdIV1FmREh2VUF2Mi1qaF9FX0JpV0pxQWx4elB1ZnQydklmLWpLamxVajhpaVdKV010TDJuNFJPVU1KLU5YOExUZ1Bpb2l0dktXRmNrRXdsbkVIejBYV0oxc0Q2UHRxcEMwckhUenJrc3JVeHhTM1ctdHcwLTUxZTVWRDdZLXBUUE82enAzbXlLMUh6Ql9KZ0xaOUV6N0NBcWNQbjhPRWhGb2drcFp5aHFHR0JpRWhpT2I5MHl4aHBNSXpELTNKZGpBODRXcjN6amQtSGVSOG0wN2JxU1Y1MWY5ZE1NQVYzZVE?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:08"
        },
        {
          "Headline": "Alliant Energy started at Outperform, citing Iowa's 'unique regulatory construct' (LNT:NASDAQ) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOOWcxQ2hDRnpKLWplbjVxeW8wdWtHQU1YRzVTSmVZal9JaXRGWWRZVm9yUWZrZkVIT1hWc3JQRlB1TnVkdDFYb3pkYW9QYndIcW5PaUoydmFFVkkzVkVaNk5TS05WREpOMThMSnctaGRMaERHS0FiMXU0eXFkWHZkTzZkMVNwZUNwbTlMckVtSVFNcnJxSndFTkJHbnJXM3NqRk9tQVBnc1YxVEJSaDdzU0ppTU1VQQ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.7,
          "Impact": 0.6,
          "Date": "2026-03-12 09:32:08"
        },
        {
          "Headline": "B. Metzler seel. Sohn & Co. AG Sells 38,034 Shares of Alliant Energy Corporation $LNT - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOZVJjLTdBaDVrN0pXTmo4OGt0NGZ0cHJUUHNrbjFhck1xX01SenJsTmhxWFA0c3dWS2toVk9tTFR3emEtZjdlTHByQXI4QjBteXVMWGlHa2hYc2NLdklSWlNhSDdVdHJvWmhIUV9scHFTNGxabGIzRlg5cWI1VlZvTHd2bmlabWlwSVhTalF3cmpRZmFOVkRiVVJBZFJwSW8xZUlVU0RCR3h0T3ZydEhKeHJmbk9UQUg3cHUteVA4NE01RzFvTy1vOENPM2FzeTd5THBfUUtB?oc=5",
          "Category": "Institutional Selling",
          "Sentiment": -0.3,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:29"
        },
        {
          "Headline": "Alliant Energy: Grow Your Income With This Durable Utility (NASDAQ:LNT) - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNanJxZGxwYkZ1OWxFWm5FbnE3VXlQYUNMSGpqRlE2MTMtMUNyQ0x2YkJuOVZTakpGQ2tOVVVMZzNPQUtEOFplbjV1U2duTmFCQksyVlBfTEtoRnktSVZsbnVaemI4Qm1qSFdSbHptWTlmNEVXeE1JLXoyTEtlUk94Vk9zV2dHRmRFa1FfcGZRc25yQXRHQ3NvRnByaHlHOEE?oc=5",
          "Category": "Investment Thesis",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:29"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "MMM",
      "Price": 150.96,
      "LSTM_Confidence": 0.71,
      "News_Sentiment": -0.6,
      "News_Impact": 0.9,
      "Headline": "A Look At 3M (MMM) Valuation After Mixed Earnings, 2026 Outlook And Ongoing Legal Uncertainty - simplywall.st",
      "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPOGhVaVlUZ3RhRVNONDhMMXlYM3k2WFhZSU85QmZialdzRllBT1c1dTlHenY0cDV0YzlJc2tWZTl1bWU4czdvZ1dzY3Z1Szk5aER5cXpZbmVqQzNMblhNZGkzeWtaM2hyNDdHU1pxdHY4Nk9na2p1Qm1hSGJoTkktMHh0eHBpcVBtTGRLdkJrM0ZNbUdMV24ydTZGWWxOWERjWEtSUWxfYmRILWZuT2tsU3E5RWNhY00yNFhjTDMtMGo4SVNvWkHSAcYBQVVfeXFMTzhoVWlZVGd0YUVTTjQ4TDF5WDN5NlhYWUlPOUJmYmpXc0ZZQU9XNXU5R3p2NHA1dGM5SXNrVmU5dW1lOHM3b2dXc2N2dUs5OWhEeXF6WW5lakMzTG5YTWRpM3lrWjNocjQ3R1NacXR2ODZPZ2tqdUJtYUhiaE5JLTB4dHhwaXFQbUxkS3ZCazNGTW1HTFduMnU2RllsTlhEY1hLUlFsX2JkSC1mbk9rbFNxOUVjYWNNMjRYY0wzLTBqOElTb1pB?oc=5",
      "All_News": [
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
        },
        {
          "Headline": "3M Co (MMM) Shares Gap Down to $149 on Mar 12 - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNSVRaUGgzay05TzAtdTdZRU1qRWJzZWtrelViZHVucDdWUWR0TGR0WjViVG80ZzFJajY4cjROdEJRQS0tMm5pVEw5bzhObHJKMWZfTHMyZnRxdUZfZTdacG1XYXhlNUI0OFU3ajZPVTdqT3NxR1M2bnNBQUJZUWZZUjVkWGpPbWFva3BpajljSjdrUGx6QUVJNA?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.7,
          "Impact": 0.8,
          "Date": "2026-03-13 09:28:20"
        },
        {
          "Headline": "General Industrial Machinery Stocks Q4 In Review: 3M (NYSE:MMM) Vs Peers - Yahoo Finance",
          "URL": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQc1NDY1BKUHVZblByOGFnNTU2cFVmRXk1ek1fUHR6bm96MlRycHBza2U0b3lkQTVRT2dJbHZaTGdaQXBjVU5UcURGUUNjVjNvV0FyNXI0LVlVbk1RcF9OWWxrZnN1cmxHMWhtV0YyQU41QTFVZ29BbWhCcmZSS0lJTzRWemZjRUZ6ckJobg?oc=5",
          "Category": "Sector Analysis",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:40"
        },
        {
          "Headline": "General Industrial Machinery Stocks Q4 Analysis: Comparing 3M (NYSE:MMM) With Its Competitors - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE14MHVyOW5mNFlLRG5saVZBTGtOV3F5ZThFUWJfYjJYZUI1a0FEWDBsd2h5Z2lZRVFFNzVXaVVEWXB2Tk1LVWJONm9NLU9VbVBnYjlOTmszR193cTd0SnhhWkNZd9IBY0FVX3lxTE14MHVyOW5mNFlLRG5saVZBTGtOV3F5ZThFUWJfYjJYZUI1a0FEWDBsd2h5Z2lZRVFFNzVXaVVEWXB2Tk1LVWJONm9NLU9VbVBnYjlOTmszR193cTd0SnhhWkNZdw?oc=5",
          "Category": "Sector Analysis",
          "Sentiment": 0.0,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:40"
        },
        {
          "Headline": "3M Co Stock (MMM) Moved Down by 3.12% on Mar 9: A Full Analysis - TradingKey",
          "URL": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQaXZxSHJYbV83amcwLUFDMFRCNW9PLUR6eDZnMWdEV2l2Rnk1elU0YTFWTGQ2TllEWnN1NnctZTkxOFhPbG9rTmg5Y2RaTzRrMTJNYV9KeUNPZzM2ZW1FbllfZXRlNndzRDhJU0c2S0t3MGNTazNpN0dGQmFTSWR0OA?oc=5",
          "Category": "Market Movement",
          "Sentiment": -0.7,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:46"
        }
      ],
      "Signal": "BEARISH_DUMP"
    },
    {
      "Ticker": "MO",
      "Price": 67.89,
      "LSTM_Confidence": 0.64,
      "News_Sentiment": 0.9,
      "News_Impact": 0.8,
      "Headline": "UBS Raises Altria Group (MO) Price Target to $74, Maintains Buy Rating | MO Stock News - GuruFocus",
      "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQN2hGUHcxQ3poaEFrQnlnSG1NSmZWR1lMSTB2cFRKS1VEbE9oM3p1M2hJMXppVGlCTmpYdGpOU2RsaXJXZndodWtnNTdzdlBaYzZqZFdkMzg0NUJCMktsZExseks3Nk1NMUdWakJBZnRoZU55MWtCbjduS2JYWVlpY1VodmhwajJtekk1anJucjdFeUZEZjBCeVlXNndwcUptdUpZdEZraGRxQi1fUHk2elhRekZjSmJvWFRZ?oc=5",
      "All_News": [
        {
          "Headline": "Capital Wealth Planning LLC Purchases New Holdings in Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOeW82WjNHOFFaVHhZU19kT2ZtU0F4dHN6RXZULWVqdFlDLW9IXzgtVklOdkpmd0pJSnhiQ3Q3Y2NQSUVjWEtwYU9xaDFkWmhpVWlBRm9MTkVDMnlTWHExdVAxbFktclBnVGRYSVBReVlfVHRQVnBRT2RtdHI0STV1bjIyWFNFTDg1cHFKeDZlZVVuOUhnYUJMZ3RIRWVuaFFTRjZJNnZZZUhaVVkwUTNhVFF3ZFo1dXVvZWxnWXVFcUlqcU1sZVVNQzJYZlVlWlU?oc=5",
          "Category": "General",
          "Sentiment": 0.3,
          "Impact": 0.3,
          "Date": "2026-03-14 09:21:44"
        },
        {
          "Headline": "Arrowstreet Capital Limited Partnership Cuts Stake in Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPWTlYdXF4c3pHRXR3bUVJM1RFSURsTlM2aGc5TDU1LTVaMGdrRWtlMDhXWFg3QzBGaW1SVGRXTmFBUWg1TERpZHEtdkZrV0RxdDExZ1F5NllLa2tiMlNqMzRQMTdlaXV6Z3ZmaFV2aFVudUwwMUtMejV3aFNOczNSNnUwVFFSWk9RTGNOcmN0UFNNWGZud3hmYTdSYmFVVTZaUk9KOUR4c2FmNUp0SXRlOFdyYy0xdXd1aVF3SDRic1B1N1MyX0Uwbk5kZmxIWlE?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:18"
        },
        {
          "Headline": "BNP Paribas Financial Markets Acquires 299,208 Shares of Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQMS1JVHBMSV9TRjVFNEtEQWI0SjlfYXIxdWlCSzM1dThhcndvOHBNWERzOVJjWS0tWnFtTXV3UTMwc2l6WW9BdUZwZkQ4MEtIMVFQa0F1aGRWeHRheUExSTlvMVc0TGRCSm9RUGZYQ3FrS1U2X1dyQTg3U1FxMjRFSlN2VmlwMS1MQ3M0NFZoak81X2FmRHlNRHlVb01IbThQQlNMbVdrV2JNUVoyT3M2LUlrZGJTaHlvN0M0RmpDTEZSMmJmcDNtazlBcnFteXlfdEE?oc=5",
          "Category": "Institutional Investment / Share Acquisition",
          "Sentiment": 0.7,
          "Impact": 0.7,
          "Date": "2026-03-12 09:32:18"
        },
        {
          "Headline": "Bank of Montreal Can Buys 300,037 Shares of Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNZHdramlwZlVzd2dyXzFXRVpPbzRtbW56elBtajBaa3JOUWFfc0RSODdtOGhKU3NZbnNSRnpUM0MzNVRfWi1fajNCSmpkbllHbWRaVTNCMnkxSXJMVW9NT0tJVFBHcUhQeE9IV1hmZHpINWtRUkltMGh3OHNzSDByRG9wSVN5UDY4clFzczZUS3d3bFVyY0RYMlNyZHlLc1FJSkpFOTJSV1MzVHdrRHhrbEo0emxlNS1tcjg3VldYcXY?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:42"
        },
        {
          "Headline": "Capital Research Global Investors Acquires 47,757 Shares of Altria Group, Inc. $MO - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNM3pEQVltNkhvclZDYUVmZnRYbmw2dWRPY2lsbF8wN0djaEVHYlVwbERnN3hwN1BudTRfcDNPUDB0Q212dlNFWnBwWll4OHFuNzBwT0NnRkV3ZXlWRi1pbUktRE0zSU9XZ2xndEtEck9LLWNySG5PX1hHMzkyOUxIbmRHQ1ZtTEZyQTkyU3llUG8xcjB6Q3AtR1k2SWR0ak5iRzVEVnpjQnNoYVVQWkxLSXRvbXpUOWs0eDRQZXpZMEpob042bzRteUhRV1Y5TDA4OWdBWVFB?oc=5",
          "Category": "Investment Firm Activity",
          "Sentiment": 0.4,
          "Impact": 0.3,
          "Date": "2026-03-11 09:31:42"
        },
        {
          "Headline": "UBS Raises Altria Group (MO) Price Target to $74, Maintains Buy Rating | MO Stock News - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQN2hGUHcxQ3poaEFrQnlnSG1NSmZWR1lMSTB2cFRKS1VEbE9oM3p1M2hJMXppVGlCTmpYdGpOU2RsaXJXZndodWtnNTdzdlBaYzZqZFdkMzg0NUJCMktsZExseks3Nk1NMUdWakJBZnRoZU55MWtCbjduS2JYWVlpY1VodmhwajJtekk1anJucjdFeUZEZjBCeVlXNndwcUptdUpZdEZraGRxQi1fUHk2elhRekZjSmJvWFRZ?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.9,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:30"
        },
        {
          "Headline": "Insider Sale: SVP of $MO Sells 27,908 Shares - Quiver Quantitative",
          "URL": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPVkk2MklCRE9OQ0VRX0dlZXVSMlYtMlpXV09zMVNOVy01M3BOUks0VHFDUDZYSjlLeWF3N1B2NUxCVjBOUFVMamdCQUdIQ2xaNzM1NHMwZXkyby1qd05rSFZSMnlKdlFMUGlJYWczR1VVMk1HZnp1eEVoRThkZi1tMEtLalVneGd2S204?oc=5",
          "Category": "Insider Selling",
          "Sentiment": -0.6,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:30"
        },
        {
          "Headline": "UBS Group Forecasts Strong Price Appreciation for Altria Group (NYSE:MO) Stock - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPTXhWMTFCZXJhaXBpdFdaTHhPaTRDOXJpdTF5RW81RHpla29HYkdCTkoxZVJneXhRbThPdmRRZmJnYy02WWlMSkZEOWNaTi1NdUpjUDVOZDNDbENVbUg1N3dKZFh6Rmd6bFpKVlJSUVo0MkUwcHE3RWRkaHlINGl5bVVBTWtkTzJIZkZhNzN5dmhuaUU3Z2pIdmpodldCal9vS0xkUk56dmQtR204bG5iWnlaNTBuT21XTUI4dUpBcmU2Rk5GR05mQg?oc=5",
          "Category": "Analyst Rating",
          "Sentiment": 0.8,
          "Impact": 0.7,
          "Date": "2026-03-10 09:32:30"
        }
      ],
      "Signal": "WAIT"
    },
    {
      "Ticker": "T",
      "Price": 27.72,
      "LSTM_Confidence": 0.61,
      "News_Sentiment": -0.5,
      "News_Impact": 0.9,
      "Headline": "Exclusive / AT&T CEO pitches Trump amid $23 billion antitrust review - Semafor",
      "URL": "https://news.google.com/rss/articles/CBMingFBVV95cUxQZ3UxYjZQOVJGS0ZXTkdDYWNNQTlSUTFwUTFwZ1l4cFF3YWpwOWVsQTUwcmpqeGNUb3BCdkg2LTh3Y3JHUExEOS1CVU5BTTkwMFlXUmxPT2RTTUxqRm9fNnB3YzhiOE0yb0JyMVhyV2V6ZUh3NzFHOXZEWm1DbzdvRVdaUm13MTJjd0V0LVdTa1UxV0hxa3diOW1aNGk3Zw?oc=5",
      "All_News": [
        {
          "Headline": "AT&T CEO Reportedly Met Trump This Week Amid $23B Echostar Deal Antitrust Review - Mena FN",
          "URL": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQbzdtZHBzS1B6dFlxcnpVWmNSUjNpQzMweExPQzZ1NU1mVG8yaTE3ZU5XNDNqdFVjWjhmNkpwNGJVU0lpV2xkOW51eXhUOGY0NkpTRWRwY2FKdGJnZmVCNFJoZGJCWkx2Y2dXam5qTGRqM01TZGxvQVNaX0tPSXdKSm5uODdtekpSMG1fdENkdGd4b1RWLXJsT0hhaHJ4aDBkdnhaOUVCUjB1eXZh?oc=5",
          "Category": "Regulatory/Legal",
          "Sentiment": -0.2,
          "Impact": 0.6,
          "Date": "2026-03-14 09:21:51"
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
          "Headline": "Exclusive / AT&T CEO pitches Trump amid $23 billion antitrust review - Semafor",
          "URL": "https://news.google.com/rss/articles/CBMingFBVV95cUxQZ3UxYjZQOVJGS0ZXTkdDYWNNQTlSUTFwUTFwZ1l4cFF3YWpwOWVsQTUwcmpqeGNUb3BCdkg2LTh3Y3JHUExEOS1CVU5BTTkwMFlXUmxPT2RTTUxqRm9fNnB3YzhiOE0yb0JyMVhyV2V6ZUh3NzFHOXZEWm1DbzdvRVdaUm13MTJjd0V0LVdTa1UxV0hxa3diOW1aNGk3Zw?oc=5",
          "Category": "Financial",
          "Sentiment": -0.5,
          "Impact": 0.9,
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
          "Headline": "AT&T CEO reportedly met Trump this week amid $23B EchoStar deal antitrust review - MSN",
          "URL": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOODUtNkRBMjZXa1V2RE4xWGdqQmxiS240QzdqLTRBaUd1eEZkSTBKYS1oTlpxaUQzdEZsbnA3VU1ncDRpcEVVMEdGaWZvTlNEemxVWFN1WjBhdi1ac0lxQ1prMGc3eUxtd1BDVTJmV1Z6cDdPVVNWckJ0MHlEeDhja05oMGpQNjFRX244QzN6cEt1WXZ5WGhjWTU1Z0d0WjJVTnVDc05pXzEwUTdFSUViZ1I1c2tUSU5NbkNnY3RNa1V0TDJVWTJWZDdaeDdWWUU?oc=5",
          "Category": "Financial",
          "Sentiment": -0.5,
          "Impact": 0.9,
          "Date": "2026-03-14 09:21:51"
        },
        {
          "Headline": "AT&T unveils $250B plan to expand US fiber and wireless access - MSN",
          "URL": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQTlFBSEFkbXljaTg4aEZFREVsSWU5akhUbE00b1c0dmVERUdXck9nSzlpOFdMLXFDQWxEMzZhaDJ1dUxEOUxNb1FqTzVGRFVBRDdkV0FDSkQ3YmNzMmlpY2VEdzZLZDhnUjRZM05tZWlmYzdpYk9FNTNtc2V0ZTJtXzNOZHc1RzBDaTBNN3YxZU41MmQ5MkdOZGZGR2tGLWloRWNicG1rV0M2OHN0Nk9EMA?oc=5",
          "Category": "Strategic Investment",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-13 09:28:23"
        },
        {
          "Headline": "AT&T Completes CAD-Denominated Long-Term Debt Offering - TipRanks",
          "URL": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOUE95aWdXdU5Qako2djdiLTY1ZVJTcnNnUlJRbWJhWTZTU0s3d09oNlBfVGg3RkYzNDZoaUVjelM1Z0ZQdENsRDFnUFB6Rl9DdzZoUkExZUtIMThyNXk4OTdkOUxrVVdvbVRYcFEyTjIzSi04RFZQeW9GdmFpRGpxenVVZlZEUWhoVmQzWi1DV1ItTjd2Y3dQOEtDS0drRWpuN1pHTzU4NE4?oc=5",
          "Category": "Debt Offering",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:23"
        },
        {
          "Headline": "AT&T (T) Launches New Wireless Plans Amidst Competitive Pricing Environment - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPNlhNN0xGeHY1a1RuaTNvNEZZQjQ5N1VEUWpFTW93cWRpT0c0QVZXZ2E4NXpwVm1SRW5VQURIT2hIRWlGRE9oZjRVQnRnc0l4VmxCT2x3cUNadWhTdWdFZl9DeEl4Z2Q2RTlRVjc1MHhmeHg0NUNUbTROS19YRmJOQUVQYXhad3FCQ0YweHE5aS1ZTW13WmVCZlBDRHlfMks2VGZrQmtTaEtwamZOeThJSE1IbGpQR1hYZFpSaFg5NVk?oc=5",
          "Category": "Product Launch",
          "Sentiment": 0.2,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:23"
        },
        {
          "Headline": "AT&T Inc. (T) Completes Significant Global Notes Offering - GuruFocus",
          "URL": "https://news.google.com/rss/articles/CBMiugJBVV95cUxOaDA2NVF6NldyYjZxR0djTFVxN2pEbFJzOWFiYTB0N045MnkydTNId01hSHFFMmQzZlBvTTRVOFJWbkx3LVdBNmxGY0J1dUxfTUY1Z3FQOU1LRnNtcjFWbVJlY3FpM292Sy1ia2NxQ2xMbV9STlFsejVYSDlHWkZYOHE4NzdHX2NPTHhmVmpPMkd6Z21lOUd4VExGZ1p4dU55VU91SHdBS3I4Q01iNVNnTUh1dmFQWC1tT3ZtbWtPZXV2dlgtUkRnMFZXaWUwMG9WTWFlcjVSTlhleXhmaGdDcjR6WWJEM3ZsVTNIMl9Qd3Fzcmt2Wl9jcDA4UnFCak5vTFZsc3BTRlFBUDVsN094Qms0WjlsNFFHSEx1OVFrdGNvbl9FRmNudGxWTjFsVFVvWEo3b3M2cFh2UQ?oc=5",
          "Category": "Debt Offering",
          "Sentiment": 0.0,
          "Impact": 0.4,
          "Date": "2026-03-13 09:28:23"
        },
        {
          "Headline": "Arrowstreet Capital Limited Partnership Buys 1,760,187 Shares of AT&T Inc. $T - MarketBeat",
          "URL": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNMDV4dHVYMW1QdkJEZ1o0cEN4b1pKQ3ltTWNxR3NtLTNCcjlfYVF0TWpjM2w4cUJ1UUFmZ09vcnM0V3BKT0Z4QXNwXzQ0ZXVqQzNSVzl0THIza09zR2tsZFhDYnIxQXBJOW94ZWRDankzZVVfNmJqRW05WElDNnVReDFfRVZzWFlBU2Q4d0dTN0dzSTFseHg3OEpCSW9tYnhTelowYnpRZHl4bDFzNEs0eGRIUUtxRVBvTVd0WlNfcW5jVkdMNENvcVhhN3ZYZw?oc=5",
          "Category": "Institutional Investment",
          "Sentiment": 0.5,
          "Impact": 0.6,
          "Date": "2026-03-13 09:28:23"
        },
        {
          "Headline": "Ericsson, Corning among potential beneficiaries of AT&T's $250B spending plan: SA analyst - MSN",
          "URL": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNTlpEaTBLVENROWhRT0Y1Rk1XdWlSd0Z0enFfdWJ1TVJLYkFOTmlhb0l5TWJST3ZsZDdTSndrYlZGN2pyR1VDMDFrcnlocTZFMHhnME9SdGJWQmFERWZJaFd1YmtJLUc1bVhOVFA2Y0ZBTzRRWW5nWXZNbTN6UDBNeUktOUlpUWRtMHFpYktZYjhtczEwUUdHSUU0MDFOQnBUaTJueFplNXdTdTc4YUdjWHZaUUhMUjMxaVdWcmZGY3BQUjVCRThVWHZ5eW5LZXV1REhVNGZR?oc=5",
          "Category": "Company Strategy",
          "Sentiment": 0.0,
          "Impact": 0.5,
          "Date": "2026-03-13 09:28:21"
        },
        {
          "Headline": "AT&T: Initiate Sell-the-Rip Strategy at $29.00 Amid Intensifying Profit-Taking Following $250B Capital Expenditure Trigger - Bitget",
          "URL": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFA2RDZDQk9uNmN4cFJsdkNyYVZNZFZDcXFYaURnQnZDN1BsSUZxaFlIUTRkOUdUTW5XTEVLNmZiWlVNTEh5Rkk5UlN1clI4RGpDVElpZmM0QjMta2ZFM05qeE5oUdIBY0FVX3lxTFA2RDZDQk9uNmN4cFJsdkNyYVZNZFZDcXFYaURnQnZDN1BsSUZxaFlIUTRkOUdUTW5XTEVLNmZiWlVNTEh5Rkk5UlN1clI4RGpDVElpZmM0QjMta2ZFM05qeE5oUQ?oc=5",
          "Category": "Analyst Rating / Market Commentary",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "Catalyst announces integration with FirstNet Fusion from AT&T - Urgent Communications",
          "URL": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQQlQzT1hIc0pNYjBCN3FtaFBQWTZUX1BJWVRJdFpZV3FVZVRWQkdTNk83ejJoc3EtMzU1SmlhY3U1TDROMmZwNGZFWGFzUzZ3QURZSE8zaHNEd25ldVVKQXh1dXIxcVlXbzIza0t0azBWb0ZmWEMyMWFyS0d5M2FrQ1FtMm5lbXFmTlMtSjVMYlNnR1BoTlFxeThNZ2xzLUFaZnE4?oc=5",
          "Category": "Partnership / Product Integration",
          "Sentiment": 0.6,
          "Impact": 0.5,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "The Last Word: AT&T on the Famous First Words That Launched an Industry 150 Years Ago - Dallas Innovates",
          "URL": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPal9DWUFQZXFuUFp2S204cm4wR0dLTlU5dUFRaVdid2tBV05tWGhEVWlIaElwdV9QbUFEOENYdFZxUWlobDBTeHBnSXBBdFpLVFBfdGRoLS16Ul9icktUUHFFOTVnc3VsNFJJR3JvSmphWHN2cVVyZThnVkNIQ0YyNm10WVRBSmNyaktudTAxMTBiTGdlTTV6VnhrNUdMdUFMeE4tOTFUWFBlSmFVWW9tSGdR?oc=5",
          "Category": "Company History / Brand Image",
          "Sentiment": 0.1,
          "Impact": 0.1,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "AT&T investing $250B to keep pace with AI. New details on hiring spree - The Journal News | lohud.com",
          "URL": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQSE54UEhnc1FqYzg4aE0wYjRpSzN3ZWdwSUV2clNOVzhUbmZaWDE2dWVYUkhKS2d3ZzhQWkMxbXRHcEpMcFNKUUpyNWI0S0Jic1F6Z09zbTZELUw2SW81cHRFWldlUzJOcjRnUFlMZ1h1b0h1cDIyYkZwcDhOWlZuY0ptRG1kNjFVVDlWdGJWc1JjQkgxZEJuREFwQVV0WTlEM25RM3ZvY2tndnV1RlhmNU9nU3FVWFlHcnBzdFdMVGd0Zw?oc=5",
          "Category": "Strategic Investment / Growth Initiative",
          "Sentiment": 0.8,
          "Impact": 0.9,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "Governor Abbott joins AT&T to deliver laptops to Los Fresnos CISD students - KRGV",
          "URL": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOR1dTSFdHdm9PWGJBMXAwakxBT1hqbEZINUFMeXNkVzF3MGduc29XbXdjdW0zb3VjM3hXZm82TUljUjFmUnB1WHRJM3ZJc3BqdTF6MTdqU2xVMzdabnlkdkh2VXlBWThZcU9SLTJfMUo3ODc5dHRzQ0F4aEVHYWh3LUFhYWN0MUZNcnh3VmIwQ1FnNXdlc2JaT1MxYU5UWHlENW1PVU5R?oc=5",
          "Category": "Corporate Social Responsibility",
          "Sentiment": 0.5,
          "Impact": 0.2,
          "Date": "2026-03-12 09:32:20"
        },
        {
          "Headline": "AT&T unveils $250B investment to expand 5G, fiber, satellite network infrastructure - Fierce Network",
          "URL": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOdFRncWZNVlVZUnZMcS1WbnVta2xyYWNYa3FrTkZlVFR3cFJ5TF9GdWF5ODM1ZGRhdEhCdXU5YUZucWY4NVgtemx4aXdUSHh1SHI3QTBpbkFnN2lLc0kyTnJjbzBGUEpyejFVTXNuMFFHVDRjSlM5MnhGZW5sbzNSSllQWmtxRC01dmN2VVl0VEVHbmhfRTBXcnNKVkhOWHNkRi1qVlhXSlhlajluV0hQa2RNeDlGTUtq?oc=5",
          "Category": "Strategic Investment",
          "Sentiment": 0.7,
          "Impact": 0.9,
          "Date": "2026-03-11 09:31:49"
        },
        {
          "Headline": "NYSE Content Update: AT&T CEO John Stankey to Ring Bell on 150th Anniversary of First Phone Call - Investing News Network",
          "URL": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPaDV2a3VuSE1qbnBYZnN5Vi16cF8zdnVzVXd2ZVFsRkJieUpPQXlsdmQxSVZvSnRFWVlwR2hsMTdIZEJNM3JGQjlFV2F0VnVDMFBzcWl4b2cxeUktQjVvdHozQkV6QlFKbjV5MWUyeWdlRmpDVHdVbHFwNFZNeTl5Tl9CUWM1a1pWM1RMWE1zd3JPaWVkQjZLT1VYMjBQVFFfM1dfUXNxZjM4eUtVblBFQVM2TWQyckFIMGZrblRB?oc=5",
          "Category": "Company Specific",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-11 09:31:49"
        },
        {
          "Headline": "AT&T Announces $250 Billion Commitment to Advance U.S. Connectivity - AT&T Newsroom",
          "URL": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1vVHI2aFpjZC04dTRqODlUUzRTVDBKX1ljQmQtbml4WEd6bWZZOWdZR0oxanVJM0dFejlPZ0hBdmhjVXM0UXB3YjVGWjVKaU5oWmdQMlpTNjhBMDBRUUh5bXRjZGZ3NEFIQ1Y2U3plLWI2VXpTcnlkcVVCZWQxaUU?oc=5",
          "Category": "Strategic Investment",
          "Sentiment": 0.7,
          "Impact": 0.9,
          "Date": "2026-03-11 09:31:49"
        },
        {
          "Headline": "NYSE Content Update: AT&T CEO John Stankey to Ring Bell on 150th Anniversary of First Phone Call - PR Newswire",
          "URL": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQcE5yMG96R3NuUW9CVWRMd1JrNlEtTU90dXR6QXFIVlZBaUxjTjVVVEtOUUNHYkM1a1RsQTVJR1Q4Q1V3WWYxemxqWXhMdDRDZEZyZ1B0R1VEUWh6aGV3V0ZEc3JlTExwTmV5NXRYSEZoR0czRWNtRnN5ZEhaRjhDYmFpWElNcWdIaHR4RVo4R08xVVViRnZzWHlwWWxYMFhlcXFTX1FoRTVWMDRlNzlmdUl1dW84eWNjUnBlR3Y2UUlEa0tpXzZUREFULXlWVnFmNXNTTWNDcEN3bERqWU9oRHRpanI?oc=5",
          "Category": "Company Specific",
          "Sentiment": 0.1,
          "Impact": 0.2,
          "Date": "2026-03-11 09:31:49"
        },
        {
          "Headline": "Emails Show AT&T CEO Raised Crime And Governance Concerns With Dallas Leaders Before HQ Exit - Dallas Express",
          "URL": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNc2lxM0ZMYTkydmp2N1RKb2x0d3ZxdFZveUREV3lkUUZnU1NGOWxuWklaNVJlRXQtOGwweS0yUGZMYTh6WndtWHFidGRQVW9YZ1ZBb284bkU0a19BTkNuSGdndEFkWG00OE5sbUpHV1c2RE41Z1o0cVRCR0twdjYzWlpqVnZWTUxVb3dndUF5aWRHTHFDeE9KaGpscExHckNsR3poU3lhTzNjYVlWMTBsVS1qeXR2VEMwVUhqZEU4Wmg?oc=5",
          "Category": "Governance/Reputation",
          "Sentiment": -0.4,
          "Impact": 0.5,
          "Date": "2026-03-11 09:31:49"
        },
        {
          "Headline": "Ericsson, Corning among potential beneficiaries of AT&T's $250B spending plan: SA analyst - Seeking Alpha",
          "URL": "https://news.google.com/rss/articles/CBMivwFBVV95cUxONkZSRkowY1dicnFRWXc0WFk1NmlQTXlFNVFkTi1sZnpfWFNZRzZyeVhGRTJLUzJtREQ4ZlhtV2liTS1kajhxZzZaTWp0aUlDa2gyX1FhSXdtUHRZUFJKX3VtZW5td0V1aTM0VTBmQ1JCUEZlZUJvNzdPNFFNYVgwbllNQnNYTXlpbWFvQ1R2RFMtLWZESlVDLXlkaVZUVlJxRllYUldodnlCTk51Q0wyOEZLVGI3XzNGNnZmcUQ1Yw?oc=5",
          "Category": "Corporate Strategy",
          "Sentiment": 0.7,
          "Impact": 0.8,
          "Date": "2026-03-11 09:31:43"
        },
        {
          "Headline": "AT&T agrees to $177 million settlement over data breach. When you could see payment - AOL.com",
          "URL": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1mbHppY0MyYkRTWllLbjR0UzJLbEVaalZYNXdYRmxVM3l2dHJITDc3a2g1MkFQNW8wUTRFUmJpMWNYNHRoaUF6UUZodVluUGFUNUR4QjZnOUVzTWg5WGZRRm9YenZnbEFGaVN3VldhdnFoLUh6?oc=5",
          "Category": "Legal / Regulatory",
          "Sentiment": -0.8,
          "Impact": 0.8,
          "Date": "2026-03-10 09:32:47"
        },
        {
          "Headline": "AT&T, Compudopt donate 50 laptops to Door County families affected by digital divide - WBAY",
          "URL": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOX0xBbnM2Z21ZaEZHbjl6N2xGeFVnV1dvX1dacHprNzBFUG5Xc2dYQkhqS2JMT0wtTFFKbnh2SGRKNHZndDhyY0huSGI3djRGcEU4eDRpc2JxNUVRdnJBMUthYnhUZVdoQUlxYmsyUjl5dTY5WFE2Vm15UldTQmUzUkV2VHB3clMwamd5eVRYVzlmcjVMbnp6RUVJMDg0UW94R285dEhuc1Z5SlY2QjJhUi13dEFycVNGN1E?oc=5",
          "Category": "Corporate Social Responsibility",
          "Sentiment": 0.3,
          "Impact": 0.1,
          "Date": "2026-03-10 09:32:47"
        },
        {
          "Headline": "AT&T at 34th Annual Media, Internet & Telecom Conference: Strategic Integration Focus - Investing.com",
          "URL": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPRnpfNVdoeWNUMTB3YW1kdFR1UkVBQUZjZ0FoTjlkV0hfYVNZdGlUem9aYUZPQWZ6MWdRenBJX0lXQ0FLUXZkUnUzZG9valZQSm93MDRKQ1VRYjFidlR5Sl96cWdOd1NsMjQ2ZUVTc1RVQmJqRy1Xd1plQ0lHYTNNU2c4VmZ6OTdsamIwR1hCT2RZQW0ta1cycEMxTDlTaUJhOE95SmtYMUxfbHBBQjk2RXRsQVhDMnNjdWVlNWs1S3JURGdGai03ZzN3SERTRnc5SkVKVEdKbFpldUY4UUE?oc=5",
          "Category": "Corporate Strategy",
          "Sentiment": 0.4,
          "Impact": 0.4,
          "Date": "2026-03-10 09:32:47"
        },
        {
          "Headline": "AT&T CEO questioned \u2018effective\u2019 governance of Dallas months before announcing move - Dallas News",
          "URL": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNSmRQZFVKM0ZyaEhZSWk3cVBKa3o0NnBfWGFxc1ZEVTNIT0ZTWnl0N3VBajFTRU1CQ1pRSVg2cHhJMWNrMXpYTEZocjZCZkhpa19xYjh3ZV9vNlFZYmh6SC1QajZsTkxCMEFWVU1PRENFa194ZzlEWWhEd0NoMTRrd3ZHOWNXdmNxODdVd2h3X25vQkxRZVV5R3VYT2RXSGNMaS0tdzlnTk83ZVJWZHhwWXZacElXUjZxU1phQTQtT3k0VXZNcGc?oc=5",
          "Category": "Corporate Governance",
          "Sentiment": -0.6,
          "Impact": 0.5,
          "Date": "2026-03-10 09:32:47"
        }
      ],
      "Signal": "WAIT"
    }
  ]
};