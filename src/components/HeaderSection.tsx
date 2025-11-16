'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='relative w-full h-[90vh]'>
      {/* Imagem de fundo */}
      <div className='absolute inset-0'>
        <Image
          src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
          alt='Evento'
          fill
          priority
          className='object-cover object-center'
        />
        {/* Overlay escuro */}
        <div className='absolute inset-0 bg-black/60' />
      </div>

      {/* Conteúdo sobre a imagem */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Unidos por um Propósito
        </h1>
        <p className='text-lg md:text-2xl max-w-2xl'>
          Louvor, comunhão e transformação em cada nação 🌍
        </p>
      </div>
    </section>
  )
}
