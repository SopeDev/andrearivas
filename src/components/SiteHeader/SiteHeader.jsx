'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BrandButton } from '@/components/BrandButton/BrandButton'
import { SiteMobileNav } from '@/components/SiteHeader/SiteMobileNav'
import { SiteNav } from '@/components/SiteHeader/SiteNav'
import { SiteShell } from '@/components/SiteContainer/SiteContainer'
import { WhatsAppIcon } from '@/components/WhatsAppIcon/WhatsAppIcon'
import { heroCopy, site } from '@/data/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

const SCROLL_THRESHOLD = 60

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-30 transition-[background-color] duration-300',
        scrolled ? 'bg-brand-dark/95' : 'bg-transparent'
      )}
    >
      <SiteShell className="flex h-[78px] items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-12 lg:gap-16 xl:gap-20">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/icon.svg"
              alt=""
              width={42}
              height={42}
              className="size-[42px] shrink-0"
              priority
            />
            <span>
              <span className="block font-heading text-[15px] font-bold text-white">
                {site.name}
              </span>
              <span className="mt-0.5 block text-[10px] font-bold tracking-[2.5px] text-white/70 uppercase">
                {site.tagline}
              </span>
            </span>
          </Link>

          <SiteNav />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SiteMobileNav />

          <BrandButton
            href={getWhatsAppUrl()}
            external
            className="shrink-0 px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
          >
            <WhatsAppIcon />
            {heroCopy.whatsappCta}
          </BrandButton>
        </div>
      </SiteShell>
    </header>
  )
}
