import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import { mockStore } from '../../redux/store'

export const renderComponent = component =>
  rtlRender(<Provider store={mockStore}>{component}</Provider>)

export const reRenderComponent = ({ component, rerender }) =>
  rerender(<Provider store={mockStore}>{component}</Provider>)
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
