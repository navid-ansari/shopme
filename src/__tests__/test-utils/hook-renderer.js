import React from 'react'
import { Provider } from 'react-redux'

import { mockStore } from '../../redux/store'

/*export const hookRenderer = (hook) => {
 const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
 );
 const wrapper = ({ children }) => (
  <ReduxProvider reduxStore={mockStore}>{children}</ReduxProvider>
 );
};*/
const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

export const hookRenderer = ({ children }) => (
  <ReduxProvider reduxStore={mockStore}>{children}</ReduxProvider>
)
