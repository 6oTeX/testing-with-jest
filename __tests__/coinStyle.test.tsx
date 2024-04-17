// coinStyle.test.tsx

import React from "react";
import { findByText, render } from "@testing-library/react";
import CoinStyle from "../app/components/coinStyle";

describe("CoinStyle component", () => {
  it("renders the component with props correctly", () => {
    const coinId = "BTC";
    const symbol = "BTC";
    const name = "Bitcoin";
    const price = 50000; // Number value

    const { getByText } = render(
      <CoinStyle coinId={coinId} symbol={symbol} name={name} price={price} />
    );

    expect(getByText("BTC")).toBeInTheDocument();
    expect(getByText("Bitcoin")).toBeInTheDocument();
    expect(getByText("$50000")).toBeInTheDocument(); // Might need adjustment based on component logic
  });
});
