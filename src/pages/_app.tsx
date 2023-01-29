import "styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "layouts";

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
export default App;
