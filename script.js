 
 async function getvalues() {
        try {
          const response = await fetch(
            "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
          );
          const data = await response.json();

          const usdRate = data.USDBRL;
          const eurRate = data.EURBRL;
          const btcRate = data.BTCBRL;
          const gbpRate = data.GBPBRL;

          const usdChangeElement = document.getElementById("usd-change");
          const eurChangeElement = document.getElementById("eur-change");
          const btcChangeElement = document.getElementById("btc-change");
          const gbpChangeElement = document.getElementById("gbp-change");
          

          document.getElementById("usd-price").textContent = parseFloat(
            usdRate.bid
          ).toFixed(2);
          document.getElementById("eur-price").textContent = parseFloat(
            eurRate.bid
          ).toFixed(2);
          document.getElementById("btc-price").textContent = parseFloat(
            btcRate.bid
          ).toFixed(2);
          document.getElementById("gbp-price").textContent = parseFloat(
            gbpRate.bid
          ).toFixed(2);


          usdChangeElement.textContent = `${parseFloat(
            usdRate.pctChange
          ).toFixed(2)}% ${usdRate.pctChange > 0 ? "↑" : "↓"}`;

          eurChangeElement.textContent = `${parseFloat(
            eurRate.pctChange
          ).toFixed(2)}% ${eurRate.pctChange > 0 ? "↑" : "↓"}`;

          btcChangeElement.textContent = `${parseFloat(
            btcRate.pctChange
          ).toFixed(2)}% ${btcRate.pctChange > 0 ? "↑" : "↓"}`;
          
          gbpChangeElement.textContent = `${parseFloat(
            gbpRate.pctChange
          ).toFixed(2)}% ${gbpRate.pctChange > 0 ? "↑" : "↓"}`;

          if (eurRate.pctChange > 0) {
            eurChangeElement.style.color = "green";
          } else {
            eurChangeElement.style.color = "red";
          }

          if (usdRate.pctChange > 0) {
            usdChangeElement.style.color = "green";
          } else {
            usdChangeElement.style.color = "red";
          }

          if (btcRate.pctChange > 0) {
            btcChangeElement.style.color = "green";
          } else {
            btcChangeElement.style.color = "red";
          }

          if (gbpRate.pctChange > 0) {
            gbpChangeElement.style.color = "green";
          } else {
            gbpChangeElement.style.color = "red";
          }
        } catch (error) {}
      }
      getvalues();