import { render, screen, act, getByText } from "@testing-library/react";
import CryptoList from "../app/components/cryptoList";

describe("CryptoList component", () => {
  // Mock the fetch function before each test
  beforeEach(() => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve({ data: [] }), // Mock empty response for testing
        }) as Promise<Response> // Cast the return value to Promise<Response>
    );
  });

  // Clean up after each test
  afterEach(() => {
    delete (global as any).fetch;
  });

  it("renders CoinStyle for each coin with correct props", async () => {
    const mockCoins = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        priceUsd: "50000",
      },
    ];

    const { getByText } = render(
      <CryptoList
        favorites={[]}
        onFavoritesChange={() => {}}
        coins={mockCoins}
      />
    );

    // // Log the rendered component for debugging
    // console.log(screen.debug());

    // Check if CoinStyle is rendered for each coin with correct props
    for (const coin of mockCoins) {
      // expect(getByText(coin.name)).toBeInTheDocument();
      // Use findByText for asynchronous querying
      // expect(getByText(coin.symbol)).toBeInTheDocument();
      expect(await screen.findByText(`$${coin.priceUsd}`)).toBeInTheDocument();
      // Assuming CoinStyle uses alt text for logo
      expect(getByText(`${coin.name} Logo`)).toBeInTheDocument();
    }
  });
});
