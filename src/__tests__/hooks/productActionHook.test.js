import { renderHook, waitFor } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import { MemoryRouter as Router } from "react-router-dom";

// mocks
import MockedProducts from "../models/products";

import useProductActionHook from "../../hooks/productActionHook";

import Product from "../../components/Product";

import { renderComponent } from "../utils/component-renderer";
import { useSelector, useDispatch } from "react-redux";

import { Provider } from "react-redux";
import { mockStore } from "../../redux/store";

// 1
//jest.mock("axios");

// 3
//jest.mock("axios");

// 4
import MockAdapter from "axios-mock-adapter";

let mockedProducts = [];
describe("Product action hook", () => {
 beforeAll(() => {});
 beforeEach(() => {
  mockedProducts = MockedProducts();
  /*const renderWithRouter = (ui, { route = "/" } = {}) => {
   window.history.pushState({}, "Test page", route);

   return render(ui, { wrapper: BrowserRouter });
  };
  renderWithRouter(<Product />);*/
 });
 afterEach(() => {});
 afterAll(() => {});

 test("fetch products from api", async () => {
  const mAxiosResponse = {
   data: mockedProducts,
  };
  await jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);

  const ReduxProvider = ({ children, reduxStore }) => (
   <Provider store={reduxStore}>{children}</Provider>
  );

  const wrapper = ({ children }) => (
   <ReduxProvider reduxStore={mockStore}>{children}</ReduxProvider>
  );
  renderHook(
   () => {
    useProductActionHook();
   },
   { wrapper }
  );

  await waitFor(() =>
   expect(axios.get).toBeCalledWith("https://fakestoreapi.com/products")
  );
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
 });
});
