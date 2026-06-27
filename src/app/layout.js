import {
  Hanken_Grotesk,
  Montserrat,
  Source_Serif_4,
} from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-heading-family',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const montserrat = Montserrat({
  variable: '--font-sans-family',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const sourceSerif = Source_Serif_4({
  variable: '--font-serif-family',
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
})

export const metadata = {
  title: 'Dra. Andrea Rivas | Oftalmología',
  description:
    'Oftalmóloga cirujana especializada en segmento anterior y glaucoma. Atención en Tijuana, Ensenada y Monterrey.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${hankenGrotesk.variable} ${montserrat.variable} ${sourceSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
