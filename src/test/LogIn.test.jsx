import { screen } from "@testing-library/react";
import { beforeEach, expect } from "vitest";
import LogIn from "../pages/auth/LogIn";
import render from "../redux/ReduxRender";

describe("LogIn test", () => {
  beforeEach(() => {
    render(<LogIn></LogIn>);
  });

  test("Should show an image", () => {
    expect(screen.getByAltText("StarWars")).toBeDefined();
  });

  test("Should show an input label Email and an input label password", () => {
    expect(screen.queryByText("Email:")).toBeDefined();
    expect(screen.queryByText("Password:")).toBeDefined();
  });

  test("Should have a link to Sign Up", () => {
    expect(screen.getByTestId("signUpLink")).toBeDefined();
    expect(screen.getByTestId("signUpLink").getAttribute("href")).toBe(
      "/signUp"
    );
  });

  test("Should show a Log In button", () => {
    expect(screen.queryByText("Log In")).toBeDefined();
    expect(screen.queryByText("Log In").tagName).toBe("BUTTON");
  });
});
