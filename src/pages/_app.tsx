import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <div className={GeistSans.className}>
      <ThemeProvider
        defaultTheme="dark"
        enableSystem
        attribute="class"
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
