import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import TestComponent from './components/TestComponent.js';

export default function renderCmp(): string {
  const cmpStr = ReactDOMServer.renderToString(<TestComponent />);
  return cmpStr;
}
