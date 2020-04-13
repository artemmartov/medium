import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import TopBar from "./pages/Components/TopBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
