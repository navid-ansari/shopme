import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { renderComponent } from "../utils/component-renderer";

import ProductDetail from "../../pages/Product-Detail";
import Detail from "../../components/Detail";

// mocks
import mockedproduct from "../mocks/product";

describe("Product detail page", () => {
 let mockedProduct = {};
 beforeAll(() => {});
 beforeEach(() => {
  mockedProduct = mockedproduct();
  /*const renderWithRouter = (ui, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
 
    return render(ui, { wrapper: BrowserRouter });
   };
   renderWithRouter(<Product />);*/
 });
 afterEach(() => {});
 afterAll(() => {});
 test("Check if Product detail page is rendered", () => {
  renderComponent(
   <Router>
    <ProductDetail></ProductDetail>
   </Router>
  );
  expect(screen.getByTestId("detail-page")).not.toBeNull();
  const page = screen.queryAllByTestId("detail-page");
  expect(page).toHaveLength(1);
 });
});
