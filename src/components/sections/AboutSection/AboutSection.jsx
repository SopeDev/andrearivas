import Image from 'next/image'
import { aboutCopy } from '@/data/site'

export function AboutSection() {
  return (
    <section id="acerca" className="overflow-hidden bg-[#f5fbfc]">
      <div className="lg:grid lg:min-h-[920px] lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-0">
          <Image
            src="/andrea_2.webp"
            alt="Dra. Andrea Rivas"
            fill
            className="object-cover object-[center_60%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/15 to-transparent"
            aria-hidden
          />
        </div>

        <div className="flex flex-col px-7 py-16 lg:justify-center lg:px-14 lg:py-[90px] xl:px-20">
          <div>
            <p className="font-serif text-lg font-semibold text-brand-dark italic">
              {aboutCopy.label}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-brand-dark lg:text-[34px]">
              {aboutCopy.title}
            </h2>

            <div className="mt-8 grid gap-6">
              {aboutCopy.credentials.map((item) => (
                <div
                  key={item.institution}
                  className="border-l-2 border-brand-cyan/80 py-0.5 pl-5"
                >
                  <p className="font-heading text-lg font-normal leading-snug text-brand-cyan-dark">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-[15px] font-bold leading-relaxed text-brand-ink">
                    {item.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-brand-muted">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-xl text-[15.5px] leading-relaxed text-brand-muted lg:mt-12">
            {aboutCopy.summary.map((part) =>
              part.bold ? (
                <strong key={part.text} className="font-bold text-brand-ink">
                  {part.text}
                </strong>
              ) : (
                <span key={part.text}>{part.text}</span>
              )
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
