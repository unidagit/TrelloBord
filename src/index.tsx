import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
    {/* ThemeProvider 안에 theme이라는 스타일 함께 적용 */}
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </>
  // </React.StrictMode>
);
