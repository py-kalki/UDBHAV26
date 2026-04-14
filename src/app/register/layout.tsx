import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Round 2 Registration",
  description:
    "Register your shortlisted team for UDBHAV'26 Round 2. 50 teams compete in a 24-hour hackathon at Sage University, Indore.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
