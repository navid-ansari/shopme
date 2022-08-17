import { render as rtlRender, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import { mockStore } from "../../redux/store";

import Header from "../../components/Header";

import { MemoryRouter as Router } from "react-router-dom";

// helper function
/*const renderComponent = (component) =>
 rtlRender(<Provider store={mockStore}>{component}</Provider>);*/

import { renderComponent } from "../utils/component-renderer";

describe("Header component", () => {
 test("Render brand name in header", () => {
  renderComponent(
   <Router>
    <Header />
   </Router>
  );
  expect(screen.getByText("Shop Me")).toBeInTheDocument();
 });

 test("background color should be #eb3b65", () => {
  renderComponent(
   <Router>
    <Header />
   </Router>
  );
  expect(screen.getByTestId("header")).toHaveStyle(
   `background-color: #eb3b65)`
  );
 });
});
