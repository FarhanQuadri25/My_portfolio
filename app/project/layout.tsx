import Contact from "@/components/contact/Contact";

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
