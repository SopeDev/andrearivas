'use client'

import Link from 'next/link'
import { ChevronDownIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { services } from '@/data/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'

export function ServicesDropdown({ triggerClassName }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <DropdownMenu modal={!isDesktop}>
      <DropdownMenuTrigger
        openOnHover={isDesktop}
        delay={0}
        closeDelay={150}
        className={cn(
          triggerClassName,
          'inline-flex items-center gap-1 outline-none focus-visible:text-white'
        )}
      >
        Servicios
        <ChevronDownIcon className="size-3.5 opacity-80" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[200px] border-brand-line">
        {services.map((service) => (
          <DropdownMenuItem key={service.id} className="p-0">
            <Link
              href={service.href}
              className="w-full px-2 py-1.5 text-sm font-semibold text-brand-ink"
            >
              {service.shortTitle || service.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
