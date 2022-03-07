import { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles/_app.scss";
import "prism-themes/themes/prism-atom-dark.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
