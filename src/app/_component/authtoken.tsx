"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../_hooks/useAuth";
import { useRouter } from "next/navigation";

const AuthToken = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const { isAuthenticated, isLoading } = useAuth(); // 사용자가 인증되었는지 확인하는 사용자 정의 훅 사용

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("TOKEN") || "";
      setToken(token);

      if (!token) {
        router.push("/login");
      }
    }
  }, [router, isAuthenticated]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return token ? children : null;
};

export default AuthToken;
