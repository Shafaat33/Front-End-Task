import ReactDOM from "react-dom";
import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import FormContainer from "./js/components/container/FormContainer";
import Navigation from "./js/components/presentational/Navigation" 
import {Provider} from "react-redux";
import {createStore} from "redux";
import Data from "./js/components/container/Data";


const store  = createStore(reducer)


function reducer(state = [], action) {
    switch (action.type) {
      case 'ADD_DATA':{
          const newData =  action.payload;
          const newState = [
              ...state,
              {
                  ...newData
              }
            ]
          return newState;
          
      }

      default:
        return state
    }
  }


const wrapper = document.getElementById("Form");

const Root  = (
    <Router>
        <Navigation/>
    <Switch>
    <Route path="/" exact component={FormContainer}/>
    <Route path="/data" component={Data} />
    </Switch>
    </Router>
)

ReactDOM.render(<Provider store={store}>{Root}</Provider>,wrapper);