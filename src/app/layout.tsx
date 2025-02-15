import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { HomeIcon, SunIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

const NavItem = (props: {
  icon?: ReactNode
  content?: string
  href: string
}) => (
  <Link
    className="motion-safe:transition-spacing motion-safe:ease-out motion-safe:duration-300 motion-safe:hover:px-6 flex items-center justify-center px-4 border-r [&>svg]:w-[1rem] [&>svg]:h-[1rem]"
    href={props.href}
  >
    {props.icon ? (
      <>
        {props.icon}
        {props.content && <span className="ml-1">{props.content}</span>}
      </>
    ) : (
      props.content
    )}
  </Link>
)

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
              <NavItem
                content={process.env.SITE_NAME || 'Homewerq'}
                icon={<HomeIcon />}
                href="/"
              />
              <NavItem content="登录" icon={<UserIcon />} href="/signin" />
              <ThemeToggle>
                <NavItem icon={<SunIcon />} href="#" />
              </ThemeToggle>
            </nav>
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
