import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { renderComponent } from "../test-utils/component-renderer";

import NotFound from "../../components/NotFound";

describe("Not Found component", () => {
 beforeAll(() => {});
 beforeEach(() => {});
 afterEach(() => {});
 afterAll(() => {});

 test("Check if component is rendered", () => {
  renderComponent(
   <MemoryRouter>
    <NotFound />
   </MemoryRouter>
  );
  expect(screen.getByTestId("notfound-page")).not.toBeNull();
 });

 test("Check if heading is rendered", () => {
  renderComponent(
   <MemoryRouter>
    <NotFound />
   </MemoryRouter>
  );

  const heading = screen.getByTestId("page-notfound");
  expect(heading).not.toBeNull();
  expect(heading).toHaveTextContent("404 - Url Not Found");
 });
});
