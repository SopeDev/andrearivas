export const locations = [
  {
    id: 'tijuana',
    city: 'Tijuana',
    mapTag: 'Tijuana',
    clinics: [
      {
        id: 'risley',
        name: 'Óptica Risley',
        address: 'Plaza Pío Pico, Blvd. Agua Caliente',
        schedule: [
          { label: 'Miércoles', hours: '11:00 am – 5:00 pm' },
          { label: 'Sábado', hours: '10:00 am – 2:00 pm' },
        ],
      },
      {
        id: 'clc',
        name: 'Clínica Láser y Catarata (CLC)',
        address: 'La Mesa, Plaza Paseo Guadalajara',
        schedule: [
          { label: 'Martes', hours: '10:00 am – 2:30 pm' },
          { label: 'Viernes', hours: '10:00 am – 4:30 pm' },
        ],
      },
    ],
  },
  {
    id: 'ensenada',
    city: 'Ensenada',
    mapTag: 'Ensenada',
    clinics: [
      {
        id: 'ophthalmo',
        name: 'Ophthalmo Médica',
        address: 'Dirección — próximamente',
        schedule: [{ label: 'Jueves', hours: '8:00 am – 2:00 pm' }],
      },
    ],
  },
  {
    id: 'monterrey',
    city: 'Monterrey',
    mapTag: 'Monterrey · Obispado',
    clinics: [
      {
        id: 'obispado',
        name: 'Clínica Láser Obispado',
        address: 'Col. Obispado, Monterrey, N.L.',
        scheduleType: 'dates',
        dateRange: '12 – 17 de agosto de 2026',
        schedule: [{ label: 'Horario', hours: '9:00 am – 6:30 pm' }],
      },
    ],
  },
]
