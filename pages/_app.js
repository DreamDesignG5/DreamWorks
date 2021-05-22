import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Navbar children={<Component {...pageProps} />} />;
}

export default MyApp;
