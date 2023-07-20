import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer, AuthProvider } from "../components";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bit Tech | Get all the updates about the tech stacks",
  description: "Bit Tech is very popular tech blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
