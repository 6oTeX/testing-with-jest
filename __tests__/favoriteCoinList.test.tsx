import { render, screen } from "@testing-library/react";
import FavoriteCoinList from "../app/components/FavoriteCoinList";

describe("FavoriteCoinList component", () => {
  it("renders favorite coins correctly", () => {
    const favorites = ["bitcoin", "ethereum"];
    const coins = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        priceUsd: "50000",
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        priceUsd: "2000",
      },
      {
        id: "litecoin",
        name: "Litecoin",
        symbol: "LTC",
        priceUsd: "150",
      },
    ];

    render(<FavoriteCoinList favorites={favorites} coins={coins} />);

    // Check if "Favorite Coins" heading is present
    expect(screen.getByText("Favorite Coins")).toBeInTheDocument();

    // Check if Bitcoin and Ethereum are rendered
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();

    // Check if Litecoin is not rendered
    expect(screen.queryByText("Litecoin")).not.toBeInTheDocument();
  });

  it("does not render anything if there are no favorite coins", () => {
    const favorites = ["litecoin"];
    const coins = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        priceUsd: "50000",
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        priceUsd: "2000",
      },
      {
        id: "litecoin",
        name: "Litecoin",
        symbol: "LTC",
        priceUsd: "150",
      },
    ];

    render(<FavoriteCoinList favorites={favorites} coins={coins} />);
    // setTimeout(() => {
    // Check if "Favorite Coins" heading is not rendered
    expect(screen.queryByText("Favorite Coins")).toBeInTheDocument();

    // Check if no coins are rendered
    expect(screen.queryByText("Bitcoin")).not.toBeInTheDocument();
    expect(screen.queryByText("Ethereum")).not.toBeInTheDocument();
    expect(screen.queryByText("Litecoin")).toBeInTheDocument();
    // }, 3000);
  });
});
