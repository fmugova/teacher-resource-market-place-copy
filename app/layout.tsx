import './globals.css'

export const metadata = {
  title: 'Teacher Resource Market place (Copy)',
  description: 'Modern landing page with hero, features, pricing, and CTA sections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}