import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { BrandButton } from '@/components/BrandButton/BrandButton'
import { SiteContainerWide } from '@/components/SiteContainer/SiteContainer'
import { WhatsAppIcon } from '@/components/WhatsAppIcon/WhatsAppIcon'
import { preventionCopy } from '@/data/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'

function PathItem({ path }) {
  return (
    <Link
      href={path.href}
      className="group block border-l-2 border-brand-cyan/80 py-0.5 pl-5 transition-colors hover:border-brand-cyan"
    >
      <h3 className="font-heading text-base font-bold text-white lg:text-[17px] group-hover:text-brand-cyan">
        {path.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-white/65 group-hover:text-white/80">
        {path.line}
      </p>
    </Link>
  )
}

export function PreventionSection() {
  const { title, supportLine, image, paths, ctas } =
    preventionCopy

  return (
    <section id="prevencion" className="relative overflow-hidden bg-brand-dark py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(45,192,209,0.1),transparent_45%)]"
        aria-hidden
      />

      <SiteContainerWide className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
          <div className="lg:pt-2">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.12]">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/75 lg:text-[17px]">
              {supportLine}
            </p>

            <div className="mt-8 grid gap-5 lg:mt-10 lg:gap-6">
              {paths.map((path) => (
                <PathItem key={path.id} path={path} />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10">
              <BrandButton href={getWhatsAppUrl()} external>
                <WhatsAppIcon />
                {ctas.primary.label}
              </BrandButton>
              <Link
                href={ctas.secondary.href}
                className="inline-flex items-center gap-1.5 px-1 text-sm font-bold text-brand-cyan transition-colors hover:text-white"
              >
                {ctas.secondary.label}
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] sm:aspect-[16/10] lg:aspect-[5/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 90vw, 42vw"
                unoptimized
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/10"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </SiteContainerWide>
    </section>
  )
}
