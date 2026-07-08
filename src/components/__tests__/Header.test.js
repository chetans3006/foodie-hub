import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
it("should display the login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButtons = screen.getAllByRole("button", { name: /login/i });

  expect(loginButtons).toHaveLength(2);
});

it("should display the Cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const cartLink = screen.getByRole("link", { name: /cart/i });

  expect(cartLink).toBeInTheDocument();
});
