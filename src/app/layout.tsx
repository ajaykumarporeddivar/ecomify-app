import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ecomify — Optimize your ecommerce store',
  description: 'Ecomify is a micro-SaaS product designed to help small ecommerce store owners optimize their online stores for maximum conversions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-50 antialiased">
        <div className="fixed top-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center">
          <span>⚡ Demo Mode — Ecomify · Built with NEXUS OS</span>
          <a href="/dashboard" className="text-zinc-100 hover:text-zinc-200">
            Open Dashboard →
          </a>
        </div>
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}