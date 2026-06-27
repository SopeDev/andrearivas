'use client'

import { BrandButton } from '@/components/BrandButton/BrandButton'
import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import { SiteContainer } from '@/components/SiteContainer/SiteContainer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { locations } from '@/data/locations'
import { getWhatsAppUrl } from '@/lib/whatsapp'

function MapPlaceholder({ mapTag }) {
  return (
    <div className="relative min-h-[240px] overflow-hidden rounded-[20px] border border-brand-line bg-gradient-to-br from-[#d6eef1] to-[#eff9fa] lg:min-h-[320px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,192,209,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,192,209,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />
      <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md">
        <BrandIcon name="pin" size="lg" />
      </div>
      <span className="absolute bottom-4 left-4 rounded-[10px] bg-white px-3 py-2 text-xs font-bold text-brand-dark shadow-md">
        {mapTag}
      </span>
    </div>
  )
}

function ClinicCard({ clinic, city }) {
  const isDateRange = clinic.scheduleType === 'dates'

  return (
    <article className="rounded-[18px] border border-brand-line bg-white p-5 shadow-sm">
      <h3 className="font-heading text-lg font-bold text-brand-dark">
        {clinic.name}
      </h3>

      {isDateRange && (
        <p className="mt-2 inline-flex rounded-full bg-brand-cyan-soft px-3 py-1 text-xs font-bold text-brand-cyan-dark">
          Próximas fechas: {clinic.dateRange}
        </p>
      )}

      <p className="mt-3 flex items-start gap-2.5 text-sm text-brand-ink">
        <BrandIcon name="pin" size="sm" className="mt-0.5 shrink-0" />
        <span>{clinic.address}</span>
      </p>

      <ul className="mt-3 grid gap-2">
        {clinic.schedule.map((slot) => (
          <li
            key={`${slot.label}-${slot.hours}`}
            className="flex items-start gap-2.5 text-sm text-brand-ink"
          >
            <BrandIcon name="calendar" size="sm" className="mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold text-brand-dark">{slot.label}:</span>{' '}
              <span className="text-brand-muted">{slot.hours}</span>
            </span>
          </li>
        ))}
      </ul>

      <BrandButton
        href={getWhatsAppUrl({ clinic: clinic.id })}
        external
        className="mt-4 w-full sm:w-fit"
      >
        Agenda en {city}
      </BrandButton>
    </article>
  )
}

function LocationPanel({ location }) {
  return (
    <div className="grid gap-7 text-left lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <MapPlaceholder mapTag={location.mapTag} />

      <div className="grid gap-4">
        <p className="font-serif text-lg font-semibold text-brand-dark italic">
          {location.city}
        </p>
        {location.clinics.map((clinic) => (
          <ClinicCard key={clinic.id} clinic={clinic} city={location.city} />
        ))}
      </div>
    </div>
  )
}

export function LocationsSection() {
  return (
    <section id="contacto" className="bg-[#f5fbfc] py-20 text-center lg:py-[90px]">
      <SiteContainer>
        <div className="mx-auto mb-8 max-w-[620px]">
          <p className="text-xs font-bold tracking-[2px] text-brand-cyan-dark uppercase">
            ¿Dónde atenderte?
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-brand-dark lg:text-[34px]">
            Contacto
          </h2>
          <p className="mt-3 text-sm text-brand-muted">
            Tijuana, Ensenada y Monterrey. Horarios sujetos a confirmación.
          </p>
        </div>

        <Tabs defaultValue={locations[0].id} className="w-full">
          <TabsList className="mx-auto mb-8 h-auto gap-1.5 rounded-full bg-[#f1f7f8] p-1.5">
            {locations.map((location) => (
              <TabsTrigger
                key={location.id}
                value={location.id}
                className="rounded-full px-6 py-2.5 text-sm font-bold data-active:bg-brand-cyan data-active:text-white data-active:shadow-[0_8px_18px_rgba(45,192,209,0.35)]"
              >
                {location.city}
              </TabsTrigger>
            ))}
          </TabsList>

          {locations.map((location) => (
            <TabsContent key={location.id} value={location.id}>
              <LocationPanel location={location} />
            </TabsContent>
          ))}
        </Tabs>
      </SiteContainer>
    </section>
  )
}
