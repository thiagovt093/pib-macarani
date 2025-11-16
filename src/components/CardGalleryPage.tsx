import { CardGallery } from './CardGallery'

export default function GalleryPage() {
  const cards = [
    {
      title: 'Culto de Domingo - 03/11/2024',
      description:
        'Culto dominical com pregação sobre fé e esperança. Uma manhã abençoada com adoração e comunhão.',
      pastor: 'Pastor João Silva',
      date: '03/11/2024',
      image: '/bg.png',
      photoCount: 3,
    },
    {
      title: 'Louvor e Adoração - Outubro 2024',
      description:
        'Momentos especiais de louvor com o ministério de música. Noite de adoração e celebração.',
      pastor: 'Maria Santos',
      date: '27/10/2024',
      image: '/bg.png',
      photoCount: 3,
    },
    {
      title: 'Evento Especial - Aniversário da Igreja',
      description:
        'Celebração dos 25 anos da PIB Macarani. Um dia histórico de gratidão e comunhão.',
      pastor: 'Carlos Oliveira',
      date: '15/10/2024',
      image: '/bg.png',
      photoCount: 4,
    },
  ]

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-8'>
      {cards.map((card, i) => (
        <CardGallery key={i} {...card} />
      ))}
    </section>
  )
}
