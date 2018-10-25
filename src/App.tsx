import * as React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import {SimpleContainer} from "./Simple/Simple.container";
import {SimpleWithRenderProps} from "./SimpleWithRenderProps/SimpleWithRenderProps";
import {store} from "./store";
import {WithAsyncValidateContainer} from "./WithAsyncValidate/WithAsyncValidate.container";


class App extends React.Component {
  public render() {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">None</Link>
              </li>
              <li>
                <Link to="/simple">Simple</Link>
              </li>
              <li>
                <Link to="/simpleWithRenderProps">SimpleWithRenderProps</Link>
              </li>
              <li>
                <Link to="/withAsyncValidate">WithAsyncValidate</Link>
              </li>
            </ul>
            <hr/>
            <div style={{
              margin: '100px auto',
              width: '80%',
            }}>

              <Route path="/simple" component={SimpleContainer}/>
              <Route path="/simpleWithRenderProps" component={SimpleWithRenderProps}/>
              <Route path="/withAsyncValidate" component={WithAsyncValidateContainer}/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
