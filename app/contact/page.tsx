import { Suspense } from "react";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"/></div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
