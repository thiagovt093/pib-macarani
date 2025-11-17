import { InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import { Separator } from '@/src/components/ui/separator'

import Logo from '@/public/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='#'>
          <div className='flex items-center gap-3'>
            <Image src={Logo} alt="Logo" className="gap-3" width={200} height={200} />
          </div>
        </a>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          <a href='#'>A Igreja</a>
          <a href='#'>Agenda</a>
          <a href='#'>Contribuições</a>
          <a href='#'>Nossa Missão</a>
        </div>

        <div className='flex items-center gap-4'>
          <a href='#'>
            <InstagramLogoIcon size={32} weight='bold' color="#dd2a7b"/>
          </a>
          <a href='#'>
            <YoutubeLogoIcon size={32} weight='fill' color="#e62d2d"/>
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} <a href='#'>Shadcn/studio</a>, Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}