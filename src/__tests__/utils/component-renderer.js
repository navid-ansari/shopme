import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { mockStore } from "../../redux/store";

export const renderComponent = (component) =>
 rtlRender(<Provider store={mockStore}>{component}</Provider>);
