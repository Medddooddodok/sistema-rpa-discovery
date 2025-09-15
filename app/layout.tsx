/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";

export const metadata = {
	title: "Sistema RPA Discovery | Automatización Inteligente",
	description: "Descubre cómo la automatización robótica de procesos (RPA) puede transformar tu negocio. Soluciones inteligentes para optimizar procesos y aumentar la eficiencia.",
	keywords: "RPA, automatización, procesos, inteligencia artificial, eficiencia, negocio, discovery",
	openGraph: {
		title: "Sistema RPA Discovery",
		description: "Automatización inteligente para tu empresa.",
		url: "https://sistema-rpa-discovery.vercel.app",
		type: "website",
		images: [
			{
				url: "/portada.png",
				width: 1200,
				height: 630,
				alt: "Sistema RPA Discovery",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sistema RPA Discovery",
		description: "Automatización inteligente para tu empresa.",
		image: "/portada.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://sistema-rpa-discovery.vercel.app" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <meta name="theme-color" content="#0A1128" />
				{/* Open Graph & Twitter handled by metadata */}
			</head>
			<body className="bg-black text-white">
				{children}
			</body>
		</html>
	);
}
