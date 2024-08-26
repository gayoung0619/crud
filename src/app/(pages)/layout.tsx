"use client";
import React, { useEffect, useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import AuthToken from "../_component/authtoken";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthToken />
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="content">{children}</div>
      </QueryClientProvider>
    </>
  );
}
