import "./globals.css";

export const metadata = {
  title: "CXDL Accessibility Testing Sandbox",
  description: "A testing sandbox for external tests of the CXDL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
