import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import { cn } from '@/lib/utils'

const SIZES = {
  md: 'size-16',
  lg: 'size-[72px]',
}

const ICON_SIZES = {
  md: 'md',
  lg: 'lg',
}

export function HighlightIcon({ name, className, size = 'md' }) {
  return (
    <div
      className={cn(
        'grid shrink-0 place-items-center rounded-full bg-brand-cyan-soft shadow-[0_4px_14px_rgba(0,31,41,0.06)]',
        SIZES[size],
        className
      )}
    >
      <BrandIcon
        name={name}
        size={ICON_SIZES[size]}
        className="text-brand-dark"
      />
    </div>
  )
}
