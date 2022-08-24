import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

// mocks
import MockedProducts from "../mocks/products";
import useProductActionHook from "../../hooks/useProductActionHook";

//import { mockStore } from "../../redux/store";
import { NotFoundError } from "../../utils/error-handler";

//import { createStore } from "redux";
//import { reducers } from "../../redux/reducers";

import { mockedStore } from "../utils/reset-store";

jest.mock("axios");

let mockedProducts = [];

describe("Product action hook", () => {
 const url = "https://fakestoreapi.com/products";
 beforeAll(() => {});
 beforeEach(() => {
  mockedProducts = MockedProducts();
  jest.clearAllMocks();
  jest.resetAllMocks();
  /*const renderWithRouter = (ui, { route = "/" } = {}) => {
   window.history.pushState({}, "Test page", route);

   return render(ui, { wrapper: BrowserRouter });
  };
  renderWithRouter(<Product />);*/
 });
 afterEach(() => {});
 afterAll(() => {});

 test("fetch products from api: 200", async () => {
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
   <Provider store={mockedStore()}>{children}</Provider>
  );

  const wrapper = ({ children }) => (
   <ReduxProvider reduxStore={mockedStore()}>{children}</ReduxProvider>
  );
  renderHook(
   () => {
    useProductActionHook();
   },
   { wrapper }
  );

  await waitFor(() => expect(axios.get).toHaveBeenCalledWith(url));
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
 });

 test("failed to fetch products from api: 404", async () => {
  /*jest
   .spyOn(axios, "get")
   .mockImplementation(() =>
    Promise.reject(new NotFoundError("failed to fetch product from api"))
   );*/

  axios.get.mockRejectedValue(
   new NotFoundError("failed to fetch product from api")
  );

  const ReduxProvider = ({ children, reduxStore }) => (
   <Provider store={mockedStore()}>{children}</Provider>
  );

  const wrapper = ({ children }) => (
   <ReduxProvider reduxStore={mockedStore()}>{children}</ReduxProvider>
  );

  renderHook(
   () => {
    useProductActionHook();
   },
   { wrapper }
  );

  await waitFor(() => expect(axios.get).toBeCalledWith(url));
  await waitFor(() => expect(axios.get).toBeCalledTimes(1));

  await waitFor(() =>
   expect(axios.get).rejects.toThrow(
    new NotFoundError("failed to fetch product from api")
   )
  );
  await waitFor(() =>
   expect(axios.get).rejects.toThrowError("failed to fetch product from api")
  );
 });

 test("failed to fetch products from api - mockRejectedValue: 404", async () => {
  const mocked = jest.mocked;
  mocked(axios.get).mockRejectedValue(
   new Error("failed to fetch product from api")
  );

  const ReduxProvider = ({ children, reduxStore }) => (
   <Provider store={mockedStore()}>{children}</Provider>
  );

  const wrapper = ({ children }) => (
   <ReduxProvider reduxStore={mockedStore()}>{children}</ReduxProvider>
  );

  renderHook(
   () => {
    useProductActionHook();
   },
   { wrapper }
  );

  await waitFor(() => expect(axios.get).toBeCalledWith(url));
  await waitFor(() => expect(axios.get).toBeCalledTimes(1));
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
