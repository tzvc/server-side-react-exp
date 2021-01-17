import * as React from 'react';
import SubTestComponent from './SubTestComponent';

export default class TestComponent extends React.Component {
  render() {
    return (
      <>
        <div>Hello</div>
        <SubTestComponent />
      </>
    );
  }
}
