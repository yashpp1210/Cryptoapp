//This is the starting point of any application
import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

import App from './App';
import 'antd/dist/antd';

// ReactDOM.render(<App/>,document.getElementById('root'));

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  )