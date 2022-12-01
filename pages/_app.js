import { GlobalStyle } from "../styles";
import { Dosis } from "@next/font/google";

const coffeeFont = Dosis({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={coffeeFont.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
