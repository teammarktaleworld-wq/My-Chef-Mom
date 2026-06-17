// import type { Metadata } from "next";
// import { Outfit, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
//   variable: "--font-outfit",
// });
// export const Metadata = {
//   title: "The Chef Mom",
//   description:
//     "Homemade Indian meals delivered in Dubai.",

//   openGraph: {
//     title: "The Chef Mom",
//     description:
//       "Homemade Indian meals delivered in Dubai.",
//     url: "https://my-chef-mom.vercel.app",
//     siteName: "The Chef Mom",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "The Chef Mom",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "The Chef Mom",
//     description:
//       "Homemade Indian meals delivered in Dubai.",
//     images: ["/og-image.jpg"],
//   },
// };
// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

// export const metadata: Metadata = {
//   title: "The Chef Mom",
//   description: "Homemade Indian meals delivered in Dubai",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${outfit.variable} ${geistMono.variable}`}
//     >
//       <body className="min-h-screen bg-slate-50 font-sans antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }








import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "The Chef Mom",
  description:
    "Homemade Indian meals delivered in Dubai.",

  openGraph: {
    title: "The Chef Mom",
    description:
      "Homemade Indian meals delivered in Dubai.",
    url: "https://my-chef-mom.vercel.app",
    siteName: "The Chef Mom",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Chef Mom",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Chef Mom",
    description:
      "Homemade Indian meals delivered in Dubai.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}