import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import LayoutWrapper from "@/Components/LayoutWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}