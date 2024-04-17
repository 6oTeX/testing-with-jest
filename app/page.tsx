// Home.tsx
"use client";
import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import CryptoList from "./components/cryptoList";
import FavoriteCoinList from "./components/FavoriteCoinList";
import TopCoinsChart from "./components/TopCoinsChart";

export default function Home() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [coins, setCoins] = useState<any[]>([]); // Define coins state

  // Function to update favorites
  const handleFavoritesChange = (newFavorites: string[]) => {
    setFavorites(newFavorites);
  };

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((data) =>
        setCoins(
          data.data.map((coin: any) => ({
            ...coin,
            imageUrl: `https://cryptologos.cc/logos/${coin.name}-${coin.symbol}-logo.png?v=029`,
          }))
        )
      );
  }, []); // Fetch coins data on component mount

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="w-5/12">
            <CryptoList
              favorites={favorites}
              onFavoritesChange={handleFavoritesChange}
              coins={[]}
            />
          </div>
          <div className="w-5/12">
            <FavoriteCoinList favorites={favorites} coins={coins} />
          </div>
          <div className="w-2/12 h-1">
            <TopCoinsChart coins={coins} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
