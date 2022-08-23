import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import {
 MemoryRouter as Router,
 BrowserRouter,
 Routes,
 Route,
 useParams,
} from "react-router-dom";

import { mockStore } from "../../redux/store";

export const renderComponent = (component) =>
 rtlRender(<Provider store={mockStore}>{component}</Provider>);

/*export const renderComponent = (
 component,
 {
  route = "/",
  history = createMemoryHistory({ initialEntries: [route] }),
  ...options
 } = {}
) => ({
 ...rtlRender(
  <Provider store={mockStore}>
   <Router history={history}>{component}</Router>
  </Provider>,
  options
 ),
 history,
});*/
