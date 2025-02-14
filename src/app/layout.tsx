import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Homewerq',
  description: '开源作业分发/追踪系统',
}

const navItems: { icon?: ReactNode; content: string; href: string }[] = [
  {
    icon: <HomeIcon />,
    content: 'Class Name',
    href: '/',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <nav className="h-10 border-b flex flex-row text-sm leading-wtf">
              {navItems.map((val, i) => (
                <Link
                  key={i}
                  className="motion-safe:transition-spacing motion-safe:ease-out motion-safe:duration-300 motion-safe:hover:px-6 flex items-center justify-center px-4 border-r [&>svg]:w-[1rem] [&>svg]:h-[1rem]"
                  href={val.href}
                >
                  {val.icon && val.icon}
                  {val.icon ? (
                    <span className="ml-1">{val.content}</span>
                  ) : (
                    val.content
                  )}
                </Link>
              ))}
            </nav>
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
