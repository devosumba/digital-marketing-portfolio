import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Austine Osumba — Digital Marketing & Communications Specialist",
  description:
    "Digital Marketing & Communications Specialist based in Nairobi, Kenya. Specializing in brand strategy, content, paid media, SEO, and community management. Previously at Volkswagen Rwanda and Sheth Naturals.",
  keywords: [
    "Digital Marketing",
    "Communications",
    "Brand Strategy",
    "Content Marketing",
    "Social Media",
    "Meta Ads",
    "SEO",
    "Nairobi",
    "Kenya",
    "John Austine Osumba",
  ],
  authors: [{ name: "John Austine Osumba", url: "https://linkedin.com/in/john-austine-osumba-689327207" }],
  creator: "John Austine Osumba",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "John Austine Osumba — Digital Marketing & Communications",
    description:
      "I build brands people connect with. From globally regulated automotive marketing at Volkswagen Rwanda to fast-moving D2C growth at Sheth Naturals.",
    siteName: "John Austine Osumba Portfolio",
    // PLACEHOLDER: Replace with your actual OG image URL once deployed
    // images: [{ url: "https://yourdomain.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Austine Osumba — Digital Marketing & Communications",
    description:
      "I build brands people connect with — content, campaigns, paid media, and community.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-off-white dark:bg-charcoal text-charcoal dark:text-off-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
