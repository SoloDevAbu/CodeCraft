"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export const Providers = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
