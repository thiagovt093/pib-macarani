import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/src/components/ui/card'
import Image from 'next/image'
import { CalendarDays, User, ImageIcon } from 'lucide-react'

interface CardGalleryProps {
  title: string
  description: string
  pastor: string
  date: string
  image: string
  photoCount?: number
}

export function CardGallery({
  title,
  description,
  pastor,
  date,
  image,
  photoCount = 0,
}: CardGalleryProps) {
  return (
    <Card className='overflow-hidden border border-[#FFD700]/20 bg-[#ffffff] text-black rounded-2xl shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300 w-full max-w-sm'>
      {/* Imagem com overlay e badge */}
      <div className='relative h-52 w-full'>
        <Image src={image} alt={title} fill className='object-cover' priority />
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end px-4 pb-3'>
          <CardTitle className='text-base font-semibold text-[#FFD700]'>
            {title}
          </CardTitle>
        </div>

        {/* Badge dourado */}
        {photoCount > 0 && (
          <div className='absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[#FFD700]/90 px-2 py-0.5 text-xs font-semibold text-black shadow-md'>
            <ImageIcon size={14} />
            {photoCount}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <CardContent className='p-5 space-y-3'>
        <p className='text-sm text-gray-300 leading-snug'>{description}</p>

        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <User size={16} className='text-[#FFD700]' />
          <span>{pastor}</span>
        </div>

        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <CalendarDays size={16} className='text-[#FFD700]' />
          <span>{date}</span>
        </div>
      </CardContent>

      {/* Rodapé */}
      <CardFooter className='border-t border-[#FFD700]/10 p-4 flex justify-end'>
        <button className='text-sm font-medium text-[#FFD700] hover:text-white transition'>
          Ver Galeria →
        </button>
      </CardFooter>
    </Card>
  )
}
