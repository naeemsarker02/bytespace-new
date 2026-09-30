import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CourseBrowser from "@/components/search/CourseBrowser";

export const metadata: Metadata = { title: "Find Your Next Course" };

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main>
        <CourseBrowser />
      </main>
      <Footer />
    </>
  );
}
