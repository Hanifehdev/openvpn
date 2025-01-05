import '@/app/globals.css';
export const metadata = {
  title: 'OpenVPN',
  description: 'OpenVPN Install',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/fav.svg" sizes="any" />
      </head>
      <body className="bodyLayout">
        <div className="container mx-auto px-4 md:px-0">{children}</div>
      </body>
    </html>
  );
}
