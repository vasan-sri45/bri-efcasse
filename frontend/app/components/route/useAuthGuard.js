"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function useAuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, hydrated } = useSelector((s) => s.auth);

  useEffect(() => {
    if (!hydrated) return;

    // not logged in
    if (!user) {
      if (pathname !== "/") router.replace("/");
    }

    // logged in but in login page
    if (user && pathname === "/") {
      router.replace("/serviced");
    }

  }, [user, hydrated, pathname, router]);
}
