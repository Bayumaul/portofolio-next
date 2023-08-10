import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://portofolio-bayumaul.vercel.app/"),
  title: "Bayu Maulana Ikhsan | Portfolio",
  description:
    "Bayu Maulana Ikhsan is a laravel developer with 2 years of experience.",
  author: "Bayu Maulana Ikhsan",
  subject: "Bayu Maulana Ikhsan Web Developer",
  copyright: "Bayu Maulana Ikhsan",
  keywords: [
    "Bayu Maulana Ikhsan",
    "Next.js",
    "React",
    "JavaScript",
    "Laravel",
    "Codeigneter",
    "PHP",
    "Web developer",
  ],
  generator: "Next.js",
  applicationName: "Bayu Maulana Ikhsan | Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  creator: "Bayu Maulana Ikhsan",
  publisher: "Bayu Maulana Ikhsan",
  openGraph: {
    images:
      "https://media.licdn.com/dms/image/D5603AQEiLducKGzJdg/profile-displayphoto-shrink_200_200/0/1689780207147?e=1697068800&v=beta&t=SSbejiXasiUBRX72eknFf9gQh0q3brmGIHD3NQM_iQA",
    description:
      "Bayu Maulana Ikhsan is a laravel developer with 2 years of experience.",
    author: "Bayu Maulana Ikhsan",
  },
  basic: {
    title: "Bayu Maulana Ikhsan - Fullstack Engineer",
    type: "website",
    image:
      "https://media.licdn.com/dms/image/D5603AQEiLducKGzJdg/profile-displayphoto-shrink_200_200/0/1689780207147?e=1697068800&v=beta&t=SSbejiXasiUBRX72eknFf9gQh0q3brmGIHD3NQM_iQA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div className="bg-[#fbe2e3] absolute bottom-[-6rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute bottom-[-1rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
