import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { Providers } from "@/providers/providers";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  //! назва проекту
  title: {
    default: "Immobilien",
    template: "%s | Immobilien", //*шаблон для відображення
  },

  //! опис
  description: "Inspired by immobilien",
  openGraph: {
    title: "Immobilen",
    description: "Inspired by immodilen",
    url: "https://example.com", //* посилання на сайт versel
    siteName: "Immobilien",
    images: [
      {
        url: "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="px-22">
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              <NavBar />
              {children}
            </Providers>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
