'use client'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ReactNode } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ children }: { children: ReactNode }) {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuCheckboxItem
          checked={theme == 'system'}
          onClick={() => setTheme('system')}
        >
          跟随系统
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme == 'light'}
          onClick={() => setTheme('light')}
        >
          亮
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme == 'dark'}
          onClick={() => setTheme('dark')}
        >
          暗
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
