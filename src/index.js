import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootContainer from "./components/_containers/RootContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./components/_reducers/rootReducer";
import registerServiceWorker from "./registerServiceWorker";
// redux store
const store = createStore(rootReducer);
// react-intl translation config

ReactDOM.render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
