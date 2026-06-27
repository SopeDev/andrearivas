'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react'
import { mainNavLinks, services } from '@/data/site'
import { navLinkShadow } from '@/components/SiteHeader/navStyles'
import { cn } from '@/lib/utils'

const mobileLinkClass = cn(
  'block py-3 text-sm font-bold tracking-wide text-white/90 uppercase transition-colors hover:text-white',
  navLinkShadow
)

export function SiteMobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <XIcon className="size-5" aria-hidden />
        ) : (
          <MenuIcon className="size-5" aria-hidden />
        )}
      </button>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-[78px] z-40 border-t border-white/10 bg-brand-dark px-7 py-4"
          aria-label="Principal"
        >
          <ul className="flex flex-col">
            {mainNavLinks.map((item) => {
              if (item.type === 'services') {
                return (
                  <li key="services" className="border-b border-white/10">
                    <button
                      type="button"
                      className={cn(
                        mobileLinkClass,
                        'flex w-full items-center justify-between text-left'
                      )}
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((open) => !open)}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={cn(
                          'size-4 opacity-80 transition-transform',
                          servicesOpen && 'rotate-180'
                        )}
                        aria-hidden
                      />
                    </button>
                    {servicesOpen && (
                      <ul className="mb-3 space-y-1 pl-3">
                        {services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              className={cn(
                                'block py-2 text-sm font-semibold text-white/75 hover:text-white',
                                navLinkShadow
                              )}
                              onClick={closeMenu}
                            >
                              {service.shortTitle || service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }

              return (
                <li key={item.href} className="border-b border-white/10">
                  <a href={item.href} className={mobileLinkClass} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}
