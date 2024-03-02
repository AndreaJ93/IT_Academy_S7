import { screen } from "@testing-library/react";
import { beforeEach, expect } from "vitest";
import Header from "../components/Header";
import render from "../redux/ReduxRender";

describe("Header test", () => {
  beforeEach(() => {
    render(<Header></Header>);
  });

  test("Should show an image", () => {
    expect(screen.getByAltText("StarWars")).toBeDefined();
  });

  test("Should show two links(Home and StarShips", () => {
    expect(screen.getByTestId("homeLink")).toBeDefined();
    expect(screen.getByTestId("starshipsLink")).toBeDefined();
  });

  test("Should not show LOG OUT at the start", () => {
    expect(screen.queryByText("LOG OUT")).toBeNull();
  });
});
