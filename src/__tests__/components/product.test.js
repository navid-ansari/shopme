import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { renderComponent } from "../utils/component-renderer";
import { reRenderComponent } from "../utils/component-renderer";

import Product from "../../components/Product";

// mocks
import MockedProduct from "../mocks/product";

import { Provider } from "react-redux";
import { mockStore } from "../../redux/store";

const mocked = jest.mocked;

describe("Product component", () => {
 let mockedProduct = {};
 beforeAll(() => {});
 beforeEach(() => {
  mockedProduct = MockedProduct();
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
    <Product product={mockedProduct} />
   </Router>
  );
  expect(screen.getByTestId("content")).not.toBeNull();
 });

 test("check product prop", () => {
  let actualProduct = {};

  const mockOnClick = (mockedProduct) => {
   actualProduct = mockedProduct;
  };

  renderComponent(
   <Router>
    <Product product={mockedProduct} toggleCart={mockOnClick} />
   </Router>
  );

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(actualProduct).not.toBeNull();
  expect(actualProduct).not.toBe({});
  expect(actualProduct.title).toBe(mockedProduct.title);
  expect(actualProduct).toEqual(mockedProduct);
 });

 test("check rendered product values", () => {
  renderComponent(
   <Router>
    <Product product={mockedProduct} />
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

  // before click
  const { rerender } = renderComponent(
   <Router>
    <Product
     product={mockedProduct}
     toggleCart={mockOnClick}
     toggleFavorite={mockOnClick}
    />
   </Router>
  );

  const addToCartBtn = screen.getByTestId("add-to-cart-btn");
  expect(addToCartBtn).toHaveTextContent("Add To Cart");

  // after click
  mockedProduct = {
   ...MockedProduct(),
   isAddedToCart: true,
  };
  const component = (
   <Router>
    <Product
     product={mockedProduct}
     toggleCart={mockOnClick}
     toggleFavorite={mockOnClick}
    />
   </Router>
  );

  reRenderComponent({ component, rerender });

  const addToCartBtnClick = screen.getByTestId("add-to-cart-btn");
  fireEvent.click(addToCartBtnClick);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
  expect(addToCartBtnClick).toHaveTextContent("Remove From Cart");
 });

 test("remove from cart button", () => {
  const mockOnClick = jest.fn();

  mockedProduct = MockedProduct({ isAddedToCart: true });
  // before click
  const { rerender } = renderComponent(
   <Router>
    <Product product={mockedProduct} toggleCart={mockOnClick} />
   </Router>
  );

  const removeFromCartBtn = screen.getByTestId("add-to-cart-btn");
  expect(removeFromCartBtn).toHaveTextContent("Remove From Cart");

  // after click
  mockedProduct = {
   ...MockedProduct(),
   isAddedToCart: false,
  };

  const component = (
   <Router>
    <Product
     product={mockedProduct}
     toggleCart={mockOnClick}
     toggleFavorite={mockOnClick}
    />
   </Router>
  );

  reRenderComponent({ component, rerender });

  const removeFromCartBtnClick = screen.getByTestId("add-to-cart-btn");
  fireEvent.click(removeFromCartBtnClick);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
  expect(removeFromCartBtnClick).toHaveTextContent("Add To Cart");
 });

 test.skip("add to favorite button", () => {
  const mockOnClick = jest.fn();

  // before click
  const { rerender } = renderComponent(
   <Router>
    <Product product={mockedProduct} toggleFavorite={mockOnClick} />
   </Router>
  );

  const toggleFavoriteBtn = screen.getByTestId("toggle-favorite");
  /** check heart line icon*/

  // after click
  mockedProduct = {
   ...MockedProduct(),
   isFavorite: true,
  };

  const component = (
   <Router>
    <Product
     product={mockedProduct}
     toggleCart={mockOnClick}
     toggleFavorite={mockOnClick}
    />
   </Router>
  );

  const { container } = reRenderComponent({ component, rerender });
  //console.log(screen.getByRole("i"));
  const toggleFavoriteBtnClick = screen.getByTestId("add-to-cart-btn");
  fireEvent.click(toggleFavoriteBtnClick);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
  /*const heartIcon = screen.getByTestId('favorite-icon').querySelector("#spanid")
  expect(heartIcon).toHaveClass("ri-heart-fill");*/
  //expect(container.getElementsByClassName("ri-heart-fill").length).toBe(1);
  //expect(removeFromCartBtnClick).toHaveTextContent("Add To Cart");

  /*fireEvent.click(toggleFavoriteBtn);
  expect(mockOnClick).toHaveBeenCalledTimes(1);*/
 });

 test("remove from favorite button", () => {
  const mockOnClick = jest.fn();

  mockedProduct = MockedProduct({
   isFavorite: false,
  });
  renderComponent(
   <Router>
    <Product product={mockedProduct} toggleFavorite={mockOnClick} />
   </Router>
  );

  const toggleFavoriteBtn = screen.getByTestId("toggle-favorite");
  fireEvent.click(toggleFavoriteBtn);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
 });
});

/*rerender(
   <Provider store={mockStore}>
    {
     <Router>
      <Product
       product={mockedProduct}
       toggleCart={mockOnClick}
       toggleFavorite={mockOnClick}
      />
     </Router>
    }
   </Provider>
  );*/
