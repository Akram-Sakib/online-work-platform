import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Next13NProgress from "@/components/loadingprogress/Next13NProgress";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online work platform",
  description:
    "Online work platform for freelancers and employers to connect and collaborate physically or remotely.",
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Next13NProgress color="#570DF8" height={5} />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
