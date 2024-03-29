import AdminContent from "@/components/ui/AdminContent";
import Sidebar from "@/components/ui/Sidebar";
import LocalStorageProvider from "@/lib/LocalStorageProviders";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Sidebar />
      <AdminContent>
        <h3 className="text-black">{children}</h3>
      </AdminContent>
    </>
  );
};

export default AdminLayout;
