import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./Store";
import { MemoryRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  );

export default render;
