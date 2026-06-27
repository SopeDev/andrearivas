export const site = {
  name: 'Dra. Andrea Rivas',
  tagline: 'Oftalmología',
  specialty: 'Oftalmóloga cirujana · Segmento anterior y glaucoma',
}

export const mainNavLinks = [
  { href: '#inicio', label: 'Inicio' },
  { type: 'services', label: 'Servicios' },
  { href: '#acerca', label: 'Acerca de' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]

export const footerNavLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#acerca', label: 'Acerca de' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]

export const footerCityLinks = [
  { href: '#contacto', label: 'Tijuana' },
  { href: '#contacto', label: 'Ensenada' },
  { href: '#contacto', label: 'Monterrey' },
]

export const servicesSection = {
  eyebrow: 'Cómo puedo ayudarte',
  title: 'Servicios Oftalmológicos',
  intro:
    'Atención especializada para adultos y niños con tecnología moderna y diagnóstico preciso.',
}

export const services = [
  {
    id: 'consulta',
    layout: 'featured',
    shortTitle: 'Consulta',
    title: 'Consulta oftalmológica',
    description:
      'Examen completo para adultos y niños. Evaluación, diagnóstico y plan de tratamiento personalizado.',
    href: '/examen-oftalmologico',
    icon: 'clipboard',
    cta: 'Agendar consulta',
    ctaStyle: 'filled',
    imageSrc: '/consulta.webp',
    imageAlt: 'Consulta oftalmológica',
    imageLabel: 'Foto: consulta oftalmológica',
    imageClass: 'bg-gradient-to-br from-[#b8e8ee] via-[#e8f7f9] to-[#d4f0f4]',
  },
  {
    id: 'enfermedades',
    layout: 'horizontal',
    shortTitle: 'Enfermedades',
    title: 'Enfermedades oculares',
    description:
      'Información sobre patologías comunes: ojo seco, catarata, glaucoma, retina y más.',
    href: '/enfermedades',
    icon: 'eye',
    cta: 'Ver padecimientos',
    ctaStyle: 'outline',
    imageSrc: '/eye.webp',
    imageAlt: 'Exploración ocular',
    imageTranslateX: '10%',
    imageLabel: 'Foto: exploración ocular',
    imageClass: 'bg-gradient-to-br from-[#06323d] via-[#0a4a58] to-[#2dc0d1]/40',
  },
  {
    id: 'cirugia',
    layout: 'horizontal',
    shortTitle: 'Cirugía',
    title: 'Cirugía especializada',
    description:
      'Procedimientos de alta especialidad: catarata, glaucoma, refractiva, pterigión y otros.',
    href: '/cirugias',
    icon: 'microscope',
    cta: 'Conocer procedimientos',
    ctaStyle: 'outline',
    imageSrc: '/cirugia.webp',
    imageAlt: 'Cirugía oftalmológica',
    imagePosition: 'center',
    imageFlip: true,
    imageLabel: 'Foto: cirugía / microscopio',
    imageClass: 'bg-gradient-to-br from-[#001f29] via-[#0b3d4a] to-[#1a6b7a]',
  },
]

export const heroCopy = {
  titleLines: [
    'Especialista en visión y',
    'precisión médica con',
    'atención humana',
  ],
  description:
    'Como oftalmóloga cirujana, no solo cuido tus ojos, te cuido a ti. Diagnóstico preciso, tratamiento con propósito y cirugía especializada en una consulta donde siempre te veré como una persona.',
  whatsappCta: 'Agenda tu Cita',
}

export const aboutCopy = {
  label: 'Acerca de',
  title: 'Dra. Andrea Rivas',
  credentials: [
    {
      institution: 'Tecnológico de Monterrey',
      degree: 'Médico Cirujano',
      location: 'Campus Monterrey',
    },
    {
      institution: 'Instituto Panamericano · Universidad Galileo',
      degree: 'Especialidad en Oftalmología',
      location: 'Ciudad de Guatemala',
    },
    {
      institution: 'CODET Vision Institute',
      degree: 'Alta especialidad — Segmento Anterior y Glaucoma',
      location: 'Tijuana, Baja California',
    },
  ],
  summary: [
    { text: '4 años', bold: true },
    { text: ' brindando atención oftalmológica integral, con enfoque en ' },
    { text: 'diagnóstico, prevención y tratamiento quirúrgico', bold: true },
    { text: ' de enfermedades oculares.' },
  ],
}

export const preventionCopy = {
  title: 'Detectar a tiempo hace la diferencia',
  supportLine:
    'Muchas enfermedades oculares no duelen ni molestan al inicio. Elige por dónde empezar:',
  image: {
    src: '/info.webp',
    alt: 'Consulta oftalmológica',
  },
  paths: [
    {
      id: 'rutina',
      title: 'Revisión de rutina',
      line: 'Aunque veas bien, un examen puede detectar cambios a tiempo.',
      href: '/examen-oftalmologico',
    },
    {
      id: 'alertas',
      title: 'Señales de alerta',
      line: 'Visión borrosa, dolor o destellos nuevos merecen valoración pronta.',
      href: '/enfermedades',
    },
    {
      id: 'faq',
      title: 'Resuelve tus dudas',
      line: 'Preguntas frecuentes sobre consulta, estudios y recuperación.',
      href: '/preguntas-frecuentes',
    },
  ],
  ctas: {
    primary: { label: 'Agendar consulta' },
    secondary: { label: 'Explorar enfermedades', href: '/enfermedades' },
  },
}
