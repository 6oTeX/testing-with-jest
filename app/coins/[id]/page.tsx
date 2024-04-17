"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import CoinStyle from "../cryptoList";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
}

export default function CoinPage({ params }: any) {
  const [coinData, setCoinData] = useState<CoinData | null>(null);

  useEffect(() => {
    // Fetch coin data based on the ID
    fetch(`https://api.coincap.io/v2/assets/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCoinData(data.data));
  }, [params.id]);

  return (
    <div>
      {coinData ? (
        <div className="flex flex-col w-2/12 bg-zinc-800 p-3 text-white rounded-lg">
          <div className="flex flex-row w-full p-1">
            <div className="w-1/5">
              <img
                className="w-10 h-10"
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-base font-semibold">{coinData.symbol}</h1>
              </div>
              <div>
                <h1 className="text-xs text-stone-300">{coinData.name}</h1>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <h1 className="text-base font-semibold">${coinData.priceUsd}</h1>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
