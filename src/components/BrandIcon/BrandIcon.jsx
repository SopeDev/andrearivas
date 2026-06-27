import {
  Calendar,
  ClipboardList,
  Eye,
  MapPin,
  Microscope,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ICONS = {
  eye: Eye,
  microscope: Microscope,
  clipboard: ClipboardList,
  pin: MapPin,
  calendar: Calendar,
}

const SIZES = {
  sm: 'size-[18px]',
  md: 'size-6',
  lg: 'size-10',
}

export function BrandIcon({ name, className, size = 'md' }) {
  const Icon = ICONS[name]
  if (!Icon) return null

  return (
    <Icon
      className={cn('shrink-0 text-brand-cyan-dark', SIZES[size], className)}
      aria-hidden
      strokeWidth={1.75}
    />
  )
}
