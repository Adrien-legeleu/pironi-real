'use client'

import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import Image from 'next/image'

const CTASection = () => {
  return (
    <section className='bg-background py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='relative rounded-3xl border-none bg-primary py-16 shadow-none overflow-visible'>
          <CardContent className='flex items-center gap-16 px-6 max-md:flex-col md:px-12 relative z-10'>
            <MotionPreset
              className='relative w-full max-md:hidden'
              fade
              motionProps={{
                animate: {
                  y: [0, -10, 0],
                  opacity: 1
                },
                transition: {
                  y: {
                    duration: 1.7,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 0.5
                  }
                }
              }}
            >
              <Image
                src='/cars/mercedes.png'
                alt='App Preview'
                width={500}
                height={500}
                className='max-lg:mx-auto max-lg:hidden aspect-[9/16] object-cover max-w-64 max-h-80 rounded-xl lg:absolute lg:-translate-y-1/2 lg:-translate-x-1/3 lg:scale-125 lg:left-1/2 z-20'
              />
              <Image
                src='/cars/mercedes.png'
                alt='App Preview'
                width={500}
                height={500}
                className='max-lg:mx-auto lg:hidden object-cover max-h-80 max-w-64 aspect-[9/16] rounded-xl lg:absolute lg:-translate-y-1/2 lg:-translate-x-1/3 lg:scale-125 lg:left-1/2 z-20'
              />
              <Image
                src='/cars/sanspermis.png'
                alt='App Preview'
                width={500}
                height={500}
                className='max-lg:mx-auto max-lg:hidden aspect-square object-cover max-w-32 max-h-32 rounded-xl lg:absolute   lg:scale-125 lg:-left-10 z-20'
              />
            </MotionPreset>
            
            <div className='space-y-4 xl:justify-self-end justify-self-center max-w-lg md:ml-auto'>
              <MotionPreset
                component='h2'
                className='text-3xl font-semibold text-white md:text-4xl lg:text-5xl'
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                Prêt à transformer votre mobilité ?
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-xl text-white/90'
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Rejoignez Pironi dès aujourd'hui et profitez d'une expérience de location et de transport premium, sans compromis.
              </MotionPreset>

              <MotionPreset
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                <Button asChild size='lg' variant='secondary' className='rounded-2xl text-base has-[>svg]:px-6 bg-white text-[#F61010] hover:bg-white/90'>
                  <a href='#' className='inline-flex items-center gap-2'>
                    Commencer maintenant
                    <ArrowRightIcon className='size-5' />
                  </a>
                </Button>
              </MotionPreset>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
