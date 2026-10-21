import type { Metadata, Viewport } from "next";
import { profile } from "@/data/resume";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — Software Engineer`,
  description: "Portfolio of Moch Iqbal Ar Rasyid, Software Engineer with 5+ years of experience in fullstack development, banking applications, APIs and technical leadership.",
  keywords: ["Moch Iqbal Ar Rasyid", "Software Engineer", "Fullstack Developer", "Next.js", "NestJS", "Indonesia"],
  applicationName: "Moch Iqbal Portfolio",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description: "Building dependable digital experiences. Explore my experience, skills, and background.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Moch Iqbal Ar Rasyid — Software Engineer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#090c0e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          url: profile.github,
          sameAs: [profile.github],
          alumniOf: { "@type": "CollegeOrUniversity", name: "Politeknik Negeri Malang" },
        }).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
