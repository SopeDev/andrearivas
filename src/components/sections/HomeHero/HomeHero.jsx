import Image from 'next/image'
import { BrandButton } from '@/components/BrandButton/BrandButton'
import { SiteContainerWide } from '@/components/SiteContainer/SiteContainer'
import { WhatsAppIcon } from '@/components/WhatsAppIcon/WhatsAppIcon'
import { heroCopy } from '@/data/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function HomeHero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-dark pt-[calc(78px+3rem)] pb-16 lg:pt-[calc(78px+4rem)] lg:pb-24 xl:pt-[calc(78px+5rem)] xl:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(45,192,209,0.2),transparent_50%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block xl:w-[44%]">
        <div
          className="relative h-full w-full"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <Image
            src="/andrea.webp"
            alt="Dra. Andrea Rivas"
            fill
            className="object-cover object-[center_0%]"
            sizes="45vw"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark from-0% via-brand-dark/50 via-14% to-transparent to-28%" />
        </div>
      </div>

      <SiteContainerWide className="relative z-10">
        <div className="grid items-center gap-8 lg:min-h-[580px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10 xl:min-h-[640px] xl:gap-14">
          <div className="flex flex-col justify-center text-center lg:max-w-2xl lg:text-left">
            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[48px] lg:leading-[1.1] xl:text-[52px]">
              {heroCopy.titleLines.map((line, index) => (
                <span
                  key={line}
                  className={`block ${index === 1 ? 'text-brand-cyan' : 'text-white'}`}
                >
                  {line}
                </span>
              ))}
            </h1>
            <span
              className="mx-auto mt-5 block h-0.5 w-12 rounded-full bg-brand-cyan lg:mx-0"
              aria-hidden
            />
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 lg:mx-0 lg:max-w-none lg:text-[17px]">
              {heroCopy.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <BrandButton href={getWhatsAppUrl()} external>
                <WhatsAppIcon />
                {heroCopy.whatsappCta}
              </BrandButton>
              <BrandButton href="#servicios" variant="outlineLight">
                Ver servicios
              </BrandButton>
            </div>
          </div>

          <div className="relative -mx-7 min-h-[400px] sm:min-h-[460px] lg:hidden">
            <Image
              src="/andrea.webp"
              alt=""
              fill
              className="object-cover object-[center_0%]"
              sizes="100vw"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/25 to-transparent" />
          </div>
        </div>
      </SiteContainerWide>
    </section>
  )
}
