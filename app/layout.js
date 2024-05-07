import { Poppins, Aboreto } from "next/font/google";

import { getMenu } from "utils/getMenu";
import { MainMenu } from "components/MainMenu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-aboreto",
});

export default async function Layout({ children }) {
  const data = await getMenu();
  console.log({ data });
  return (
    <html lang="ja" className={`${poppins.variable} ${aboreto.variable}`}>
      <body className="font-body">
        <MainMenu
          callToActionLabel={data.callToActionLabel}
          callToActionDestination={data.callToActionDestination}
          items={data.mainMenuItems}
        />
        {children}
      </body>
    </html>
  );
}
