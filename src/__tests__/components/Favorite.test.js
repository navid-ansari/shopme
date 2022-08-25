import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { renderComponent } from "../utils/component-renderer";

import Favorite from "../../components/Favorite";

// mocks
import MockedFavorite from "../mocks/favorite";

describe("Favorite component", () => {
 let mockedFavorite = {};
 beforeAll(() => {});
 beforeEach(() => {
  mockedFavorite = MockedFavorite();
 });
 afterEach(() => {});
 afterAll(() => {});

 test("Check if component is rendered", () => {
  renderComponent(
   <Router>
    <Favorite favorite={mockedFavorite} />
   </Router>
  );
  expect(screen.getByTestId("product")).not.toBeNull();
  const product = screen.queryAllByTestId("product");
  expect(product).toHaveLength(1);
 });

 test("Check cart component values", () => {
  renderComponent(
   <Router>
    <Favorite favorite={mockedFavorite} />
   </Router>
  );

  // images
  const productImage = screen.getByTestId("product-image");
  expect(productImage).toHaveAttribute("src", mockedFavorite.image);

  // title
  const productTitle = screen.getByTestId("product-title");
  expect(productTitle).toHaveTextContent(mockedFavorite.title);

  // description
  const descriptionTitle = screen.getByTestId("decription-title");
  expect(descriptionTitle).toHaveTextContent("Description:");
  const descriptionText = screen.getByTestId("decription-text");
  expect(descriptionText).toHaveTextContent(mockedFavorite.description);

  // rating
  const ratingTitle = screen.getByTestId("rating-title");
  expect(ratingTitle).toHaveTextContent("Rating:");

  // review
  const reviewsTitle = screen.getByTestId("reviews-title");
  expect(reviewsTitle).toHaveTextContent("Reviews:");
  const reviewsTCount = screen.getByTestId("reviews-count");
  expect(reviewsTCount).toHaveTextContent(mockedFavorite.rating.count);

  // price
  const priceTitle = screen.getByTestId("price-title");
  expect(priceTitle).toHaveTextContent("Price:");
  const priceValue = screen.getByTestId("price-value");
  expect(priceValue).toHaveTextContent(mockedFavorite.price);
 });
});
