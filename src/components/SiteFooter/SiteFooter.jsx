import Image from 'next/image'
import Link from 'next/link'
import { SiteShell } from '@/components/SiteContainer/SiteContainer'
import { footerCityLinks, footerNavLinks, site } from '@/data/site'
import { whatsappBaseUrl } from '@/lib/whatsapp'

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-[#cfe2e7]">
      <SiteShell className="py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
          <div>
            <Image
              src="/icon.svg"
              alt=""
              width={40}
              height={40}
              className="mb-3.5 size-10"
            />
            <p className="max-w-[250px] text-[13.5px] leading-relaxed text-[#9fc0c7]">
              Cuidado oftalmológico integral en Tijuana, Ensenada y Monterrey.
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 text-xs font-bold tracking-wider text-white uppercase">
              Navegación
            </h4>
            <ul className="grid gap-2">
              {footerNavLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-[#a9c8cf] transition-colors hover:text-brand-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 text-xs font-bold tracking-wider text-white uppercase">
              Contacto
            </h4>
            <ul className="grid gap-2">
              {footerCityLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-[#a9c8cf] transition-colors hover:text-brand-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 text-xs font-bold tracking-wider text-white uppercase">
              Idioma
            </h4>
            <div
              className="inline-flex overflow-hidden rounded-full border border-[#1c4754]"
              role="group"
              aria-label="Idioma"
            >
              <span className="bg-brand-cyan px-4 py-1.5 text-xs font-bold text-white">
                ES
              </span>
              <span className="px-4 py-1.5 text-xs font-bold text-[#9fc0c7]">
                EN
              </span>
            </div>
            <ul className="mt-4 grid gap-2">
              <li>
                <a
                  href={whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] font-semibold text-[#a9c8cf] transition-colors hover:text-brand-cyan"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#143842] pt-6 text-xs text-[#79a3ad]">
          <span>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </span>
          <Link href="#" className="hover:text-brand-cyan">
            Aviso de privacidad
          </Link>
        </div>
      </SiteShell>
    </footer>
  )
}
