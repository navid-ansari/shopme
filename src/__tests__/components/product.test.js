import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { renderComponent } from "../utils/component-renderer";

import Product from "../../components/Product";

const product = {
 id: 1,
 title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
 price: 109.95,
 description:
  "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
 category: "men's clothing",
 image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
 rating: { rate: 3.9, count: 120 },
 isFavorite: false,
 isAddedToCart: false,
 toggleCart: jest.fn(),
};

describe("Product component", () => {
 beforeAll(() => {});
 beforeEach(() => {
  /*const renderWithRouter = (ui, { route = "/" } = {}) => {
   window.history.pushState({}, "Test page", route);

   return render(ui, { wrapper: BrowserRouter });
  };
  renderWithRouter(<Product />);*/
 });
 afterEach(() => {});
 afterAll(() => {});
 test("Should render component", () => {
  renderComponent(
   <Router>
    <Product product={product} />
   </Router>
  );
  expect(screen.getByTestId("content")).not.toBeNull();
 });

 test("should have product values", () => {
  renderComponent(
   <Router>
    <Product product={product} />
   </Router>
  );

  // image assertion
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
   "src",
   "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  );

  // product heading
  const heading = screen.getByTestId("product-title");
  expect(heading).toHaveTextContent(
   "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  );

  // product description
  const description = screen.getByTestId("product-description");
  expect(description).toHaveTextContent(
   "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  );

  // price
  const price = screen.getByTestId("product-price");
  expect(price).toHaveTextContent(109.95);

  // add to cart button
  const button = screen.getByTestId("add-to-cart-btn");
  expect(button).toHaveTextContent("Add To Cart");
 });

 test("add to cart button", () => {
  const mockOnClick = jest.fn();

  renderComponent(
   <Router>
    <Product product={product} toggleCart={mockOnClick} />
   </Router>
  );

  // button click and button text
  const addToCartBtn = screen.getByTestId("add-to-cart-btn");
  fireEvent.click(addToCartBtn);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
  expect(addToCartBtn).toHaveTextContent("Add To Cart");
 });
});

test("remove from cart button", () => {
 const mockOnClick = jest.fn();

 const productNew = {
  ...product,
  isAddedToCart: true,
 };
 renderComponent(
  <Router>
   <Product product={productNew} toggleCart={mockOnClick} />
  </Router>
 );

 const addToCartBtn = screen.getByTestId("add-to-cart-btn");
 fireEvent.click(addToCartBtn);
 expect(mockOnClick).toHaveBeenCalledTimes(1);
 expect(addToCartBtn).toHaveTextContent("Remove From Cart");
});

test("check product prop", () => {
 let actualProduct = {};

 const mockOnClick = (product) => {
  actualProduct = product;
 };

 renderComponent(
  <Router>
   <Product product={product} toggleCart={mockOnClick} />
  </Router>
 );

 const button = screen.getByRole("button");
 fireEvent.click(button);
 expect(actualProduct).not.toBeNull();
 expect(actualProduct).not.toBe({});
 expect(actualProduct.title).toBe(product.title);
 expect(actualProduct).toEqual(product);
});
