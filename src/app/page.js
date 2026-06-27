import { SiteFooter } from '@/components/SiteFooter/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader/SiteHeader'
import { AboutSection } from '@/components/sections/AboutSection/AboutSection'
import { HomeHero } from '@/components/sections/HomeHero/HomeHero'
import { LocationsSection } from '@/components/sections/LocationsSection/LocationsSection'
import { PreventionSection } from '@/components/sections/PreventionSection/PreventionSection'
import { ServicesSection } from '@/components/sections/ServicesSection/ServicesSection'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="-mt-[78px] flex-1">
        <HomeHero />
        <ServicesSection />
        <AboutSection />
        <PreventionSection />
        <LocationsSection />
      </main>
      <SiteFooter />
    </>
  )
}
