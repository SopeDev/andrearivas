'use client'

import { ServicesDropdown } from '@/components/SiteHeader/ServicesDropdown'
import { navLinkShadow } from '@/components/SiteHeader/navStyles'
import { mainNavLinks } from '@/data/site'
import { cn } from '@/lib/utils'

const navLinkClass = cn(
  'relative py-1.5 text-xs font-bold tracking-wide text-white/82 uppercase transition-colors hover:text-white',
  navLinkShadow
)

export function SiteNav() {
  return (
    <nav className="hidden items-center lg:flex" aria-label="Principal">
      <ul className="flex items-center gap-6">
        {mainNavLinks.map((item) => {
          if (item.type === 'services') {
            return (
              <li key="services">
                <ServicesDropdown triggerClassName={navLinkClass} />
              </li>
            )
          }

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  navLinkClass,
                  item.href === '#inicio' &&
                    'text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-cyan'
                )}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
