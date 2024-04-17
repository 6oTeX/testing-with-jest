// CryptoList.tsx

import { useState, useEffect } from "react";
import CoinStyle from "./coinStyle";
import Link from "next/link";

interface CryptoListProps {
  coins: {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
  }[];
  favorites: string[];
  onFavoritesChange: (favorites: string[]) => void;
}

export default function CryptoList({
  favorites,
  onFavoritesChange,
}: CryptoListProps) {
  const [coins, setCoins] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((data) =>
        setCoins(
          data.data.map((coin: any) => ({
            ...coin,
          }))
        )
      );
  }, []);

  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];
    onFavoritesChange(updatedFavorites);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-5/12 bg-zinc-800 p-3 text-white rounded-lg">
      <input
        type="text"
        className="block w-50 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search coins..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredCoins.map((coin: any) => {
        const isFavorite = favorites.includes(coin.id);
        function toLowerCase() {
          throw new Error("Function not implemented.");
        }

        return (
          <div key={coin.id}>
            <CoinStyle
              name={coin.name}
              symbol={coin.symbol}
              price={coin.priceUsd}
              imageUrl={`https://cryptologos.cc/logos/${coin.name.toLowerCase()}-${coin.symbol.toLowerCase()}-logo.png?v=002`}
            />
            <button
              onClick={() => toggleFavorite(coin.id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {isFavorite ? "Unfavorite" : "Favorite"}
            </button>
            <Link href={`/coins/${coin.id}`} as={`/coins/${coin.id}`}>
              <button className="float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                More Info
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

// import { useState, useEffect } from "react";
// import CoinStyle from "./coinStyle";
// import Link from "next/link";

// interface CryptoListProps {
//   favorites: string[];
//   onFavoritesChange: (favorites: string[]) => void;
// }

// export default function CryptoList({
//   favorites,
//   onFavoritesChange,
// }: CryptoListProps) {
//   const [coins, setCoins] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("https://api.coincap.io/v2/assets")
//       .then((res) => res.json())
//       .then((data) =>
//         setCoins(
//           data.data.map((coin: any) => ({
//             ...coin,
//             imageUrl: `https://cryptologos.cc/logos/${coin.name}-${coin.symbol}-logo.png?v=029`,
//           }))
//         )
//       );
//   }, []);

//   const toggleFavorite = (id: string) => {
//     const updatedFavorites = favorites.includes(id)
//       ? favorites.filter((fav) => fav !== id)
//       : [...favorites, id];
//     onFavoritesChange(updatedFavorites);
//   };

//   return (
//     <>
//       {coins.map((coin: any) => {
//         const isFavorite = favorites.includes(coin.id);
//         return (
//           <div
//             key={coin.id}
//             className="flex flex-col w-2/12 bg-zinc-800 p-3 text-white rounded-lg">
//             <CoinStyle
//               name={coin.name}
//               symbol={coin.symbol}
//               price={coin.priceUsd}
//               imageUrl={coin.imageUrl}
//             />
//             <button
//               className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
//               onClick={() => toggleFavorite(coin.id)}>
//               {isFavorite ? "Unfavorite" : "Favorite"}
//             </button>
//             <Link href={`/coins/${coin.id}`} as={`/coins/${coin.id}`}>
//               <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
//                 More Info
//               </button>
//             </Link>
//           </div>
//         );
//       })}
//     </>
//   );
// }
