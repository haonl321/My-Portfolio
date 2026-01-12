import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao Lacoste",
  description: "Brittany Chiang is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div id="__next">
          <div className="__variable_20b187 group/spotlight relative">
            {/* Animated gradient background */}
            <div className="pointer-events-none fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-blue-500/5"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Spotlight effect */}
            <div
              className="spotlight-effect pointer-events-none fixed inset-0 z-30 transition duration-300"
              style={{
                background: `radial-gradient(
                  600px circle at 0px 0px,
                  rgba(20, 184, 166, 0.15),
                  transparent 80%
                )`,
              }}
            ></div>
            
            <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
              <a
                href="#content"
                className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0 opacity-0 focus-visible:opacity-100"
              >
                Skip to Content
              </a>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
