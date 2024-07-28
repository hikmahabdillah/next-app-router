import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Particle",
  description: "Create Next App",
  authors: [{ name: 'Aldrin', url: 'https://nextjs.org' }],
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript'],
  applicationName: 'Next App Router',
  icons: {
    icon: './img/icon.png'
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
