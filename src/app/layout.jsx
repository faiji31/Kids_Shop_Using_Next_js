import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";



const poppins = Poppins({
  weight:["100","200","300","400","500","600","800"]
})

export const fontBangla = localFont({
  src: "../../public/fonts/mayaboti-normal.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
})

// src/app/layout.jsx

export const metadata = {
  metadataBase: new URL("https://kids-shop-3l3xn7x6a-faijis-projects.vercel.app"),

  title: {
    default: "Kids Learning Toys Bangladesh | Educational Toys for Smart Kids",
    template: "%s | Kids Learning Toys",
  },

  description:
    "Discover the best educational toys for children in Bangladesh. Shop Montessori toys, wooden learning boards, alphabet puzzles, number games, and brain development toys for kids of all ages.",

  keywords: [
    "Kids Learning Toys",
    "Educational Toys Bangladesh",
    "Montessori Toys",
    "Wooden Learning Toys",
    "Alphabet Puzzle",
    "Number Learning Board",
    "Brain Development Toys",
    "Children Educational Toys",
    "Preschool Learning Toys",
    "Bangladesh Toy Shop",
  ],

  authors: [
    {
      name: "Faiji Akbar Liam",
      url: "https://kids-learning-toys.vercel.app",
    },
  ],

  creator: "Faiji Akbar Liam",
  publisher: "Kids Learning Toys",

  category: "E-commerce",

  applicationName: "Kids Learning Toys",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kids Learning Toys Bangladesh | Educational Toys for Smart Kids",
    description:
      "Buy premium educational toys, Montessori learning boards, and preschool development toys for children in Bangladesh.",
    url: "https://kids-learning-toys.vercel.app",
    siteName: "Kids Learning Toys",
    images: [
      {
        url: "https://i.ibb.co/qFmZpC8d/logo.png", // Replace with your actual logo URL
        width: 1200,
        height: 630,
        alt: "Kids Learning Toys Logo",
      },
      {
        url: "https://i.ibb.co/GfLRTym4/home-page-preview.png", // Replace with actual hosted image URL
        width: 1200,
        height: 630,
        alt: "Kids Learning Toys Home Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kids Learning Toys Bangladesh",
    description:
      "Educational and Montessori toys for kids. Fast delivery all over Bangladesh.",
    images: [
      "https://i.ibb.co/GfLRTym4/home-page-preview.png", // Replace with actual image URL
    ],
    creator: "@KidsLearningToys",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-site-verification-code",
  },

  other: {
    "theme-color": "#f97316",
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} antialiased`}
    >
      <body >

        <header className="py-4 md:w-11/12 mx-auto">
           <Navbar></Navbar>
        </header>

        <main  className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
               {children}
        </main>
      

        <footer>
         <Footer></Footer>
        </footer>


      </body>
    </html>
  );
}

