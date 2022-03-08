import { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles/_app.scss";
import "prism-themes/themes/prism-a11y-dark.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
