import "@/styles/globals.css";

export const metadata = {
  title: "Event Horizon AAA",
  description: "Black Hole Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}