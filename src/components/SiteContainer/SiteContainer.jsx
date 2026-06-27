import { cn } from '@/lib/utils'

/** Full-width chrome (header only) — no max-width cap */
export function SiteShell({ className, children, as: Tag = 'div' }) {
  return (
    <Tag className={cn('mx-auto w-full px-7', className)}>
      {children}
    </Tag>
  )
}

/** Main page content — capped at 1280px on desktop */
export function SiteContainer({ className, children, as: Tag = 'div' }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-7', className)}>
      {children}
    </Tag>
  )
}

/** Wider content band — 1536px cap */
export function SiteContainerWide({ className, children, as: Tag = 'div' }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-screen-2xl px-7', className)}>
      {children}
    </Tag>
  )
}
