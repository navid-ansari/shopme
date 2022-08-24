import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { renderComponent } from "../utils/component-renderer";

import Star from "../../components/Star";

// mocks
import mockedproduct from "../mocks/product";

describe("Star component", () => {
 let mockedProduct = {};
 beforeAll(() => {});
 beforeEach(() => {
  mockedProduct = mockedproduct();
 });
 afterEach(() => {});
 afterAll(() => {});

 test("Check if Star component is rendered", () => {
  renderComponent(
   <Router>
    <Star />
   </Router>
  );
  expect(screen.getByTestId("star")).not.toBeNull();
 });

 test("Check if Star icon is rendered", () => {
  renderComponent(
   <Router>
    <Star />
   </Router>
  );
  expect(screen.getByTestId("ri-star-fill")).not.toBeNull();
  const star = screen.queryAllByTestId("ri-star-fill");
  expect(star).toHaveLength(1);
 });
});
