import { screen } from "@testing-library/react";
import { beforeEach, expect } from "vitest";
import render from "../redux/ReduxRender";
import Home from "../pages/Home";

describe("StarshipInformation test", () => {
  beforeEach(() => {
    render(<Home></Home>);
  });

  test("Should show a text web description", () => {
    expect(screen.getByTestId("welcomeText")).toBeDefined();
    expect(screen.getByTestId("welcomeText").tagName).toBe("H1");
  });

  test("Should show a button", () => {
    expect(screen.queryByText("Explore more")).toBeDefined();
    expect(screen.queryByText("Explore more").tagName).toBe("A");
  });

  test("The button should redirect to starshipsList", () => {
    expect(screen.queryByText("Explore more").getAttribute("href")).toBe(
      "/starshipsList"
    );
  });
});
