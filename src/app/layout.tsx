// Styles
import "./globals.css";

// Components
import Navbar from "@/components/common/Navbar";
import HuddleContextProvider from "@/components/ClientComponents/HuddleContextProvider";

export const metadata = {
  title: "⚡ Dragverse Audio Spaces",
  description: "Communicate with your community live with audio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="min-h-screen relative font-sans">
        <Navbar />
        <HuddleContextProvider>{children}</HuddleContextProvider>
      </body>
    </html>
  );
}