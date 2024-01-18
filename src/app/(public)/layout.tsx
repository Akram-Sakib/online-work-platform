import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
// import LocalStorageProvider from "@/lib/LocalStorageProviders";
import React from "react";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
