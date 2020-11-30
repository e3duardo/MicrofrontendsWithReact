import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
