const WHATSAPP_NUMBER = '528120029859'

const DEFAULT_MESSAGES = {
  es: 'Hola, me gustaría agendar una cita con la Dra. Andrea Rivas.',
  en: 'Hello, I would like to schedule an appointment with Dr. Andrea Rivas.',
}

const CLINIC_MESSAGES = {
  risley: 'Hola, quiero agendar en Óptica Risley (Tijuana).',
  clc: 'Hola, quiero agendar en Clínica Láser y Catarata, Tijuana.',
  ophthalmo: 'Hola, quiero agendar en Ophthalmo Médica (Ensenada).',
  obispado: 'Hola, quiero agendar en Clínica Láser Obispado (Monterrey).',
}

export function getWhatsAppUrl({ locale = 'es', clinic } = {}) {
  const params = new URLSearchParams()
  let text = DEFAULT_MESSAGES[locale] || DEFAULT_MESSAGES.es

  if (clinic && CLINIC_MESSAGES[clinic]) {
    text = CLINIC_MESSAGES[clinic]
  }

  params.set('text', text)
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`
}

export const whatsappBaseUrl = `https://wa.me/${WHATSAPP_NUMBER}`
