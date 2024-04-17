// FavoriteCoinList.tsx

import React, { useEffect, useState } from "react";
import CoinStyle from "./coinStyle";

interface FavoriteCoinListProps {
  favorites: string[];
  coins: any[];
}

const FavoriteCoinList: React.FC<FavoriteCoinListProps> = ({
  favorites,
  coins,
}) => {
  const [favoriteCoins, setFavoriteCoins] = useState<any[]>([]);

  useEffect(() => {
    const filteredFavoriteCoins = coins.filter((coin) =>
      favorites.includes(coin.id)
    );
    setFavoriteCoins(filteredFavoriteCoins);
  }, [favorites, coins]);

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg font-semibold mb-2">Favorite Coins</h2>
      {favoriteCoins.map((coin) => (
        <div
          key={coin.id}
          className="flex flex-col w-5/12 bg-zinc-800 p-3 text-white rounded-lg">
          <CoinStyle
            name={coin.name}
            symbol={coin.symbol}
            price={coin.priceUsd}
            imageUrl={`https://cryptologos.cc/logos/${coin.name.toLowerCase()}-${coin.symbol.toLowerCase()}-logo.png?v=002`}
          />
        </div>
      ))}
    </div>
  );
};

export default FavoriteCoinList;
