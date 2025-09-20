import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/Redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Home Link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const contact = screen.getByText("Contact");
  //   fireEvent.click(contact);
  //   const clickMe = screen.getByRole("button", { name: "Click ME" });
  expect(contact).toBeInTheDocument();
});
