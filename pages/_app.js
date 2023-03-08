import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Nav from "./../components/Nav";

const MyApp = function App({ Component, pageProps }) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
