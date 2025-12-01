'use client'

// React Imports
import { useRef } from 'react'

import { FileInputIcon, RepeatIcon, UserIcon, CarIcon, MapPinIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import NotificationStack from '@/components/blocks/notification-stack'
import type { NotificationCard } from '@/components/blocks/notification-stack'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Cursor, CursorFollow, CursorProvider } from '@/components/ui/cursor'
import { AnimatedBeam } from '@/components/ui/animated-beam'

import { cn } from '@/lib/utils'

import LogoVector from '@/components/icons/logo-vector'

type AvatarData = {
  src: string
  fallback: string
  name: string
  size: string
}
const notifications: NotificationCard[] = [
  {
    id: '1',
    name: 'Demande enregistrée',
    time: "Aujourd'hui, 11:56",
    amount: '',
    avatar: '',
    fallback: 'DE'
  },
  {
    id: '2',
    name: 'Mise à jour envoyée',
    time: "Aujourd'hui, 10:32",
    amount: '',
    avatar: '',
    fallback: 'MU'
  },
  {
    id: '3',
    name: 'Nouveau message',
    time: "Aujourd'hui, 09:15",
    amount: '',
    avatar: '',
    fallback: 'NM'
  }
]



const avatars: AvatarData[] = [
  {
    src: '',
    fallback: 'CL',
    name: 'Client Satisfait',
    size: 'size-12'
  },
  {
    src: '',
    fallback: 'CH',
    name: 'Chauffeur Pro',
    size: 'size-16'
  },
  {
    src: '',
    fallback: 'SP',
    name: 'Support 24/7',
    size: 'size-20'
  },
  {
    src: '',
    fallback: 'LO',
    name: 'Logistique',
    size: 'size-16'
  },
  {
    src: '',
    fallback: 'PA',
    name: 'Partenaire',
    size: 'size-12'
  }
]

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)
  const span7Ref = useRef<HTMLSpanElement>(null)
  const span8Ref = useRef<HTMLSpanElement>(null)
  const span9Ref = useRef<HTMLSpanElement>(null)

  return (
    <section className='py-8 sm:py-16 lg:py-24 bg-background'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='text-sm font-normal' variant='outline'>
              Nos Services
            </Badge>
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-3xl font-semibold md:text-4xl lg:text-5xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Des solutions de mobilité adaptées à vos besoins
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
          >
            Simplifiez vos déplacements avec nos services premium.
          </MotionPreset>
        </div>

        <div ref={containerRef} className='relative flex w-full flex-col items-center gap-18'>
          <MotionPreset
            fade
            blur
            delay={0.05}
            transition={{ duration: 0.5 }}
            className='bg-primary animate-heartbeat z-1 flex h-14.5 w-fit items-center gap-4 rounded-full px-3.5 text-2xl font-medium text-primary-foreground shadow-2xl [--heartbeat-color:var(--primary)] lg:hidden'
          >
          <div className='bg-primary flex size-7 items-center justify-center rounded-full border-2 border-primary-foreground'>
              <div className='rounded-full bg-white size-4'/>
              </div>
            Pironi
          </MotionPreset>

          <div className='relative flex w-full items-center justify-center max-lg:flex-wrap max-lg:gap-6 lg:justify-between'>
            <div className='flex z-10 relative gap-6 lg:flex-col lg:gap-18'>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div2Ref}
                className='bg-background flex h-11 w-fit items-center gap-2 rounded-2xl border px-2 text-lg shadow-sm'
              >
                <CarIcon className="size-6.5 text-primary" />
                Sans Permis
              </MotionPreset>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div3Ref}
                className='bg-background flex h-11 w-fit items-center gap-2 rounded-2xl border px-2 text-lg shadow-sm'
              >
                <UserIcon className="size-6.5 text-primary" />
                Chauffeur
              </MotionPreset>
            </div>

            <div className='flex flex-col gap-14 max-lg:hidden'>
              <span ref={span1Ref} className='size-0.5' />
              <span ref={span2Ref} className='size-0.5' />
              <span ref={span3Ref} className='size-0.5' />
            </div>

            <MotionPreset
              fade
              blur
              delay={0.05}
              transition={{ duration: 0.5 }}
              ref={div1Ref}
              className='bg-primary relative z-10 animate-heartbeat z-1 flex h-14.5 w-fit items-center gap-4 rounded-full px-3.5 text-2xl font-medium text-primary-foreground shadow-2xl [--heartbeat-color:var(--primary)] max-lg:hidden'
            >
              <div className='bg-primary flex size-7 items-center justify-center rounded-full border-2 border-primary-foreground'>
              <div className='rounded-full bg-white size-4'/>
              </div>
              Pironi
            </MotionPreset>

            <div className='flex flex-col gap-14 max-lg:hidden'>
              <span ref={span4Ref} className='size-0.5' />
              <span ref={span5Ref} className='size-0.5' />
              <span ref={span6Ref} className='size-0.5' />
            </div>
            <div className='flex gap-6 z-10 relative lg:flex-col lg:gap-18'>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div4Ref}
                className='bg-background flex z-10 h-11 w-fit items-center gap-2 rounded-2xl border px-2 text-lg shadow-sm'
              >
                <MapPinIcon className="size-6.5 text-primary" />
                Logistique
              </MotionPreset>

              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div5Ref}
                className='bg-background flex h-11 w-fit items-center gap-2 rounded-2xl border px-2 text-lg shadow-sm'
              >
                <ClockIcon className="size-6.5 text-primary" />
                Support 24/7
              </MotionPreset>
            </div>
          </div>
          <div className='grid gap-5 z-10 relative md:grid-cols-2 lg:grid-cols-3'>
            <MotionPreset
              fade
              blur
              delay={0.1}
              transition={{ duration: 0.9 }}
              className='relative flex flex-col  items-center gap-18'
            >
              <span ref={span7Ref} className='size-0.5 max-lg:hidden' />
              <div ref={div6Ref} className='bg-card overflow-hidden rounded-3xl border'>
                <div className='px-6 pt-6 text-center'>
                  <div className='flex items-center justify-center gap-1.5 text-lg font-medium'>
                    <ShieldCheckIcon className='size-4.5 shrink-0' />
                    Sécurité Maximale
                  </div>
                  <p className='text-muted-foreground mt-1.5'>
                    Vos trajets et livraisons sont assurés avec les plus hauts standards de sécurité.
                  </p>
                </div>
                <div className='relative mt-2.5 sm:pl-6'>
                  <div className='bg-primary/10 flex h-63 w-full items-center justify-center sm:rounded-tl-3xl p-4'>
                     <ShieldCheckIcon className="size-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </MotionPreset>
          <MotionPreset
  fade
  blur
  delay={0.12}
  transition={{ duration: 0.9 }}
  className='relative flex flex-col items-center gap-18'
>
  <span ref={span8Ref} className='size-0.5 max-lg:hidden' />
  <div ref={div7Ref} className='bg-card overflow-hidden rounded-3xl border'>
    <div className='px-6 pt-6 text-center'>
      <div className='flex items-center justify-center gap-1.5 text-lg font-medium'>
        <UserIcon className='size-4.5 shrink-0' />
        Suivi & Informations
      </div>
      <p className='text-muted-foreground mt-1.5'>
        Nous vous tenons informé de l’avancement de vos demandes, avec des mises à jour simples à chaque étape.
      </p>
    </div>

    <div className='mt-2.5 z-10 relative sm:pl-6'>
      <div className='flex h-63 w-full flex-col justify-center bg-sky-600/10 px-4 sm:rounded-tl-3xl dark:bg-sky-400/40'>
        <NotificationStack notifications={notifications} />
      </div>
    </div>
  </div>
</MotionPreset>

            <MotionPreset
              fade
              blur
              delay={0.15}
              transition={{ duration: 0.9 }}
              className='relative flex flex-col items-center gap-18'
            >
              <span ref={span9Ref} className='size-0.5 max-lg:hidden' />
              <div ref={div8Ref} className='bg-card overflow-hidden rounded-3xl border'>
                <div className='px-6 pt-6 text-center'>
                  <div className='flex items-center justify-center gap-1.5 text-lg font-medium'>
                    <FileInputIcon className='size-4.5 shrink-0' />
                    Collaboration Efficace
                  </div>
                  <p className='text-muted-foreground mt-1.5'>
                    Une équipe dédiée pour répondre à tous vos besoins logistiques.
                  </p>
                </div>
                <div className='relative mt-2.5 sm:pl-6'>
                  <div className='flex h-63 w-full items-center justify-center bg-green-600/10 sm:rounded-tl-3xl dark:bg-green-400/40'>
                    <div className='flex min-h-20 flex-1 items-center justify-center -space-x-4'>
                      {avatars.map(item => (
                        <div key={item.name}>
                          <Avatar className={cn('ring-ring/30 ring-2  ', item.size)}>
                            <AvatarImage src={item.src} alt={item.name} />
                            <AvatarFallback>{item.fallback}</AvatarFallback>
                          </Avatar>
                          <CursorProvider>
                            <Cursor>
                              <svg
                                className='size-6 text-primary'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 40 40'
                              >
                                <path
                                  fill='currentColor'
                                  d='M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z'
                                />
                              </svg>
                            </Cursor>
                            <CursorFollow>
                              <div className='w-fit rounded-lg bg-primary px-2 py-1 text-sm text-nowrap text-white shadow-lg dark:bg-primary'>
                                {item.name}
                              </div>
                            </CursorFollow>
                          </CursorProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionPreset>
          </div>
          {/* Top */}

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span2Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            pathWidth={2}
            pathOpacity={0.5}
            className='z-0 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span5Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span2Ref}
            toRef={span1Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span1Ref}
            toRef={div2Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span2Ref}
            toRef={span3Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span3Ref}
            toRef={div3Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span5Ref}
            toRef={span4Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span4Ref}
            toRef={div4Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span5Ref}
            toRef={span6Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span6Ref}
            toRef={div5Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />

          {/* Bottom Beam */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span8Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
            startXOffset={5}
            startYOffset={20}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={span7Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            reverse
            className='z-0 max-lg:hidden'
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={span9Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={div7Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span7Ref}
            toRef={div6Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            reverse
            className='z-0 max-lg:hidden'
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span9Ref}
            toRef={div8Ref}
            gradientStartColor='var(--primary)'
            duration={4.5}
            className='z-0 max-lg:hidden'
          />
        </div>
      </div>
    </section>
  )
}

export default Features