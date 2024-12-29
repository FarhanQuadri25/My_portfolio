import Contact from "@/components/contact/Contact";
import Nav from "@/components/nav/Nav";
import { ArrowSide } from "@/svg/ArrowSide";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function LayoutPage({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <Contact />
    </div>
  );
}
