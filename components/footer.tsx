'use client'

import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import LogoVector from '@/components/icons/logo-vector'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex flex-col items-center gap-6 py-8 text-center sm:py-16 md:py-24'>
          <h2 className='max-w-5xl text-2xl font-semibold sm:text-3xl lg:text-4xl text-foreground'>
            N'hésitez pas à nous contacter, nos portes sont ouvertes pour vos projets de mobilité !
          </h2>
          <Button size='lg' className='rounded-2xl text-base' asChild>
            <a href='#contact'>Contactez-nous</a>
          </Button>
        </div>

        <div className='flex items-center justify-between gap-4 py-6 max-md:flex-col'>
          <a href='/' className="flex items-center gap-2">
            <div className=' flex h-14 rounded-2xl w-44 items-center justify-center  '>
              <Image src='/pironi/Plaque_NoirRouge_CMJN.png' className='rounded-2xl object-cover h-full w-full ' alt='Logo' width={200} height={200} />
            </div>
           
          </a>
          <div className='flex items-center gap-5 whitespace-nowrap text-muted-foreground'>
            <a href='/' className="hover:text-foreground transition-colors">Accueil</a>
            <a href='/services' className="hover:text-foreground transition-colors">Services</a>
            <a href='/contact' className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className='flex items-center gap-7 text-muted-foreground'>
            <a href='#' className="hover:text-foreground transition-colors">
              <FacebookIcon className='size-5' />
            </a>
            <a href='#' className="hover:text-foreground transition-colors">
              <InstagramIcon className='size-5' />
            </a>
            <a href='#' className="hover:text-foreground transition-colors">
              <TwitterIcon className='size-5' />
            </a>
            <a href='#' className="hover:text-foreground transition-colors">
              <YoutubeIcon className='size-5' />
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6 max-sm:flex-col sm:px-6 text-muted-foreground text-sm'>
        <p className='text-balance max-sm:text-center'>
          {`©${new Date().getFullYear()}`} <a href='#' className="hover:text-foreground">Pironi</a>. Tous droits réservés.
        </p>

        <div className='flex items-center gap-6 text-nowrap'>
          <a href='/politique-confidentialite' className="hover:text-foreground transition-colors">Politique de confidentialité</a>
          <a href='/conditions-generales' className="hover:text-foreground transition-colors">Conditions générales</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
