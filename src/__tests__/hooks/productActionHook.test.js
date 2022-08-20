import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";

// mocks
import MockedProducts from "../models/products";

import useProductActionHook from "../../hooks/productActionHook";

import { renderComponent } from "../utils/component-renderer";
import { hookRenderer } from "../utils/hook-renderer";

import { Provider } from "react-redux";
import { mockStore } from "../../redux/store";
import { NotFoundError } from "../../utils/error-handler";

import { createStore } from "redux";
import { reducers } from "../../redux/reducers";
import { resetStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { resetStoreAction } from "../../redux/actions/resetStoreAction";

// 3
//jest.mock("axios");

// 4

// 1
//jest.mock("axios");

jest.mock("axios");
//jest.mock("../../hooks/productActionHook");

let mockedProducts = [];
describe("Product action hook", () => {
 const url = "https://fakestoreapi.com/products";
 beforeAll(() => {});
 beforeEach(() => {
  mockedProducts = MockedProducts();
  jest.clearAllMocks();
  jest.resetAllMocks();
  resetStore();
  //useDispatch(resetStoreAction());
  //resetStore();
  /*const renderWithRouter = (ui, { route = "/" } = {}) => {
   window.history.pushState({}, "Test page", route);

   return render(ui, { wrapper: BrowserRouter });
  };
  renderWithRouter(<Product />);*/
 });
 afterEach(() => {
  //mockedProducts = [];
  //jest.clearAllMocks();
  //jest.resetAllMocks();
 });
 afterAll(() => {});

 test("fetch products from api: 200", async () => {
  //jest.clearAllMocks();
  const mAxiosResponse = {
   data: mockedProducts,
  };
  //jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
  /*jest
   .spyOn(axios, "get")
   .mockImplementationOnce(() => Promise.resolve(mAxiosResponse));*/

  /*const mocked = jest.mocked;
  mocked(axios.get).mockResolvedValue(mAxiosResponse);*/
  axios.get.mockResolvedValueOnce(mAxiosResponse);

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

  /*await waitFor(() => expect(axios.get).toBeCalledTimes(1));
  const response = await waitFor(() => {
   expect(axios.get).toBeCalledWith(url);
  });*/

  await waitFor(() => expect(axios.get).toHaveBeenCalledWith(url));
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  //await waitFor(() => expect(response.length).toBe(3));
 });

 test.skip("failed to fetch products from api: 404", async () => {
  jest.clearAllMocks();
  /*jest
   .spyOn(axios, "get")
   .mockImplementation(() =>
    Promise.reject(new NotFoundError("failed to fetch product from api"))
   );*/

  axios.get.mockRejectedValueOnce(
   new Error("failed to fetch product from api")
  );

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

  /*await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  await waitFor(() => expect(axios.get).toBeCalledWith(url));
  await waitFor(() =>
   expect(axios.get).rejects.toThrow(
    new NotFoundError("failed to fetch product from api")
   )
  );
  await waitFor(() =>
   expect(axios.get).rejects.toThrowError("failed to fetch product from api")
  );*/
  await waitFor(() => expect(axios.get).toHaveBeenCalledWith(url));
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
 });

 test.skip("failed to fetch products from api - mockRejectedValue: 404", async () => {
  const mocked = jest.mocked;
  mocked(axios.get).mockRejectedValue(
   new NotFoundError("failed to fetch product from api")
  );

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

  //await waitFor(() => expect(axios.get).toBeCalledTimes(1));
  await waitFor(() => expect(axios.get).toBeCalledWith(url));
  await waitFor(() =>
   expect(axios.get).rejects.toThrow(
    new NotFoundError("failed to fetch product from api")
   )
  );
  await waitFor(() =>
   expect(axios.get).rejects.toThrowError("failed to fetch product from api")
  );
 });
});
