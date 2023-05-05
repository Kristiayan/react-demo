import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { saveState } from "./helpers/localstorage.helper.js";
import "./index.css";

store.subscribe(() => {
  saveState(store.getState()["todo"]);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
