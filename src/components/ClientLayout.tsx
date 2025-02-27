"use client";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-50 bg-noise" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ClientLayout; 