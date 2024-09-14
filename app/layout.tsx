import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  //metadataBase: new URL(""),
  title: {
    default: "Idalangi",
    template: `%s | Built website product.`,
  },
  openGraph: {
    description: "Built website product.",
    images: [""],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idalangi",
    description: "Built website product.",
    siteId: "",
    creator: "@auxinnepaul",
    creatorId: "",
    images: [""],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "green", "rose", "violet", "orange"]}
        >
          {children}
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
