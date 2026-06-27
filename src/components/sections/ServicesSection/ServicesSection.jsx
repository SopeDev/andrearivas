import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ChevronRight } from 'lucide-react'
import { BrandButton } from '@/components/BrandButton/BrandButton'
import { HighlightIcon } from '@/components/HighlightIcon/HighlightIcon'
import { SiteContainerWide } from '@/components/SiteContainer/SiteContainer'
import {
  services,
  servicesSection,
} from '@/data/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

function ServiceTitle({ children, className }) {
  return (
    <div className={className}>
      <h3 className="font-serif text-xl font-semibold text-brand-dark italic lg:text-2xl">
        {children}
      </h3>
      <span className="mt-2 block h-0.5 w-10 rounded-full bg-brand-cyan" aria-hidden />
    </div>
  )
}

function HorizontalServiceCard({ service, className }) {
  const isOutline = service.ctaStyle === 'outline'

  const ctaClassName = isOutline
    ? 'mt-5 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-brand-cyan px-5 py-2.5 text-sm font-bold text-brand-cyan-dark transition-colors hover:bg-brand-cyan-soft'
    : 'mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-brand-cyan-dark hover:underline'

  return (
    <article
      className={cn(
        'relative flex min-h-[220px] cursor-default overflow-hidden rounded-[20px] border border-brand-line bg-white shadow-[0_12px_32px_rgba(0,31,41,0.06)] sm:min-h-[200px] lg:min-h-0 lg:flex-1',
        className
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          '[mask-image:linear-gradient(to_right,transparent_0%,transparent_42%,black_68%)]',
          '[-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_42%,black_68%)]',
          'max-lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_55%,black_88%)]',
          'max-lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_55%,black_88%)]'
        )}
        aria-hidden
      >
        {service.imageSrc ? (
          <Image
            src={service.imageSrc}
            alt=""
            fill
            className={cn(
              'object-cover',
              service.imagePosition === 'center' ? 'object-center' : 'object-right',
              service.imageFlip && '-scale-x-100',
              service.imageTranslateX === '10%' && 'translate-x-[10%]'
            )}
            sizes="(max-width: 1024px) 100vw, 40vw"
            unoptimized
          />
        ) : (
          <>
            <div className={cn('absolute inset-0', service.imageClass)} />
            <span className="absolute right-4 bottom-4 rounded-lg bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
              {service.imageLabel}
            </span>
          </>
        )}
      </div>

      <div className="relative z-10 flex w-full max-w-[58%] flex-col justify-center p-6 sm:max-w-[52%] lg:p-7">
        <HighlightIcon name={service.icon} size="md" className="mb-4" />
        <ServiceTitle>{service.title}</ServiceTitle>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted lg:text-base">
          {service.description}
        </p>

        <Link href={service.href} className={ctaClassName}>
          {service.cta}
          <ChevronRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}

function FeaturedConsultaCard({ service }) {
  return (
    <article className="relative flex h-full min-h-[420px] cursor-default flex-col overflow-hidden rounded-[20px] border border-brand-line bg-white shadow-[0_18px_40px_rgba(0,31,41,0.08)] lg:min-h-0">
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          service.imageSrc && [
            '[mask-image:linear-gradient(to_bottom,black_0%,black_48%,transparent_80%)]',
            '[-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_48%,transparent_80%)]',
          ]
        )}
      >
        {service.imageSrc ? (
          <Image
            src={service.imageSrc}
            alt={service.imageAlt || service.imageLabel}
            fill
            className="object-cover object-[center_75%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <div className={cn('absolute inset-0', service.imageClass)} />
        )}
      </div>
      {!service.imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
      )}

      <div className="relative z-10 mt-auto p-4 lg:p-5 lg:pr-16 xl:pr-24">
        <div className="w-full max-w-[92%] rounded-[16px] border border-brand-line/80 bg-white p-5 shadow-lg sm:max-w-[85%] lg:max-w-[78%]">
          <HighlightIcon name={service.icon} size="md" className="mb-4" />
          <ServiceTitle>{service.title}</ServiceTitle>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted lg:text-base">
            {service.description}
          </p>
          <div className="mt-5">
            <BrandButton href={getWhatsAppUrl()} external className="text-sm">
              <Calendar className="size-4" aria-hidden />
              {service.cta}
              <ChevronRight className="size-4" aria-hidden />
            </BrandButton>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ServicesSection() {
  const consulta = services.find((s) => s.layout === 'featured')
  const enfermedades = services.find((s) => s.id === 'enfermedades')
  const cirugia = services.find((s) => s.id === 'cirugia')

  return (
    <section id="servicios" className="relative pt-20 pb-24 lg:pt-[90px] lg:pb-[110px]">
      <div
        className="pointer-events-none absolute top-8 right-0 size-48 rounded-full bg-brand-cyan/10 blur-3xl lg:top-12 lg:right-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-24 right-24 hidden size-24 rounded-full border border-brand-cyan/20 lg:block"
        aria-hidden
      />

      <SiteContainerWide className="relative">
        <header className="max-w-2xl text-left">
          <p className="text-xs font-bold tracking-[2px] text-brand-cyan-dark uppercase">
            {servicesSection.eyebrow}
          </p>
          <span className="mt-2 block h-0.5 w-12 rounded-full bg-brand-cyan" aria-hidden />
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl lg:text-[44px] lg:leading-[1.1] xl:text-[48px]">
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted lg:text-[17px]">
            {servicesSection.intro}
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-5 overflow-visible lg:mt-12 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-6 xl:gap-8">
          {consulta && (
            <div className="relative z-0 min-h-0">
              <FeaturedConsultaCard service={consulta} />
            </div>
          )}

          <div className="flex min-h-0 flex-col gap-5 lg:gap-6">
            {enfermedades && (
              <HorizontalServiceCard service={enfermedades} />
            )}
            {cirugia && (
              <HorizontalServiceCard
                service={cirugia}
                className="relative z-20 lg:-ml-[14%] xl:-ml-[18%]"
              />
            )}
          </div>
        </div>
      </SiteContainerWide>
    </section>
  )
}
