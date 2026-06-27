import Link from 'next/link'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full border-2 px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2'

const variants = {
  whatsapp:
    'border-transparent bg-brand-cyan-dark text-white shadow-[0_8px_20px_rgba(0,31,41,0.18)] hover:bg-[#158a98]',
  ghost:
    'border-brand-cyan bg-transparent text-brand-cyan-dark hover:bg-brand-cyan-soft',
  outlineLight:
    'border-white/40 bg-transparent text-white hover:bg-white/10',
}

export function BrandButton({
  variant = 'whatsapp',
  className,
  href,
  external,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <Link href={href} className={classes} {...linkProps} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
