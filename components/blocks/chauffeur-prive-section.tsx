'use client'

import { Check } from 'lucide-react'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { ImageSlider } from '@/components/ui/image-slider'

type PricingRow = {
  duration: string
  distance: string
  price: string
}

type VehicleData = {
  name: string
  image: string | string[]
  features: string[]
  pricing: {
    mariage: PricingRow[]
    clip: PricingRow[]
    journee: PricingRow[]
  }
}

const vehiclesData: VehicleData[] = [
  {
    name: 'Rolls-Royce Phantom',
    image: ['/cars/rollsroyce.png', '/cars/rollsroyce2.png', '/cars/rollsroyce3.png', '/cars/rollsroyce4.png', '/cars/rollsroyce5.png'],
    features: [
      'Portes « suicide » emblématiques avec parapluies intégrés',
      'Sellerie en cuir haut de gamme',
      'Système audio premium Rolls-Royce',
      'Jusqu\'à 3 passagers à l\'arrière',
      '👨‍✈️ Location exclusivement avec chauffeur',
      '🚨 Pas de caution',
    ],
    pricing: {
      mariage: [
        { duration: '4h', distance: '40km', price: '900€' },
        { duration: '6h', distance: '100km', price: '1 300€' },
        { duration: '8h', distance: '180km', price: '1 800€' },
      ],
      clip: [
        { duration: '1h', distance: '-', price: '350€' },
        { duration: '2h', distance: '-', price: '600€' },
        { duration: '3h', distance: '-', price: '850€' },
        { duration: '4h', distance: '-', price: '1 000€' },
      ],
      journee: [
        { duration: '1 jour', distance: '-', price: '1 500€' },
        { duration: '2 jours', distance: '-', price: '2 500€' },
      ],
    },
  },
  {
    name: 'Mercedes Classe S',
    image: ['/cars/mercedes.png', '/cars/mercedes2.png', '/cars/mercedes3.png', '/cars/mercedes4.png'],
    features: [
      'Location avec ou sans chauffeur',
      'Pour évènement, studio, mariage, occasion',
      'Pack chauffeur (siège arrière s\'allongeant)',
      'Sièges arrière chauffant/ventilé/réglable',
      'Sellerie en cuir haut de gamme',
      'Système audio premium Burmester',
    ],
    pricing: {
      mariage: [
        { duration: '4h', distance: '40km', price: '500€' },
        { duration: '6h', distance: '100km', price: '700€' },
        { duration: '8h', distance: '180km', price: '850€' },
      ],
      clip: [
        { duration: '1h', distance: '-', price: '200€' },
        { duration: '2h', distance: '-', price: '300€' },
        { duration: '4h', distance: '-', price: '400€' },
      ],
      journee: [
        { duration: '1 jour', distance: '-', price: '700€' },
        { duration: '2 jours', distance: '-', price: '1 200€' },
      ],
    },
  },
]

export default function ChauffeurPriveSection() {
  return (
    <section id="chauffeur-prive" className='py-8 sm:py-16 lg:py-24 bg-background scroll-mt-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <span className='text-primary text-sm font-medium uppercase'>PREMIUM</span>
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
            Chauffeur Privé
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl max-w-3xl mx-auto'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
          >
            L'élégance et la discrétion pour vos déplacements. Profitez d'un service haut de gamme pour vos
            événements ou trajets professionnels.
          </MotionPreset>
        </div>

        {/* Tabs for Vehicles */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'up', offset: 50 }}
          delay={0.7}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue='rolls-royce' className='w-full'>
            <TabsList className='grid w-full max-w-md mx-auto grid-cols-2 mb-12'>
              <TabsTrigger value='rolls-royce'>Rolls-Royce</TabsTrigger>
              <TabsTrigger value='mercedes'>Mercedes Maybach</TabsTrigger>
            </TabsList>

            {vehiclesData.map((vehicle, vehicleIndex) => (
              <TabsContent
                key={vehicleIndex}
                value={vehicleIndex === 0 ? 'rolls-royce' : 'mercedes'}
                className='mt-0'
              >
                <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
                  {/* Image - Sticky on desktop */}
                  <div className='bg-muted aspect-[4/3] rounded-3xl p-6 order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start'>
                    {Array.isArray(vehicle.image) ? (
                      <ImageSlider
                        images={vehicle.image}
                        alt={vehicle.name}
                        className="w-full"
                      />
                    ) : (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={600}
                        height={400}
                        className='h-auto w-full rounded-lg object-cover'
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className='space-y-6 order-1 lg:order-2'>
                    <div>
                      <h3 className='text-4xl font-bold text-foreground mb-6'>{vehicle.name}</h3>

                      {/* Features */}
                      <div className='space-y-3 mb-8'>
                        {vehicle.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className='flex items-start gap-3'>
                            <Check className='text-primary mt-0.5 size-5 shrink-0' />
                            <p className='text-base text-muted-foreground'>{feature}</p>
                          </div>
                        ))}
                      </div>

                      <p className='text-sm text-muted-foreground italic mb-6'>
                        🚗 Nos tarifs incluent le chauffeur pour les prestations avec chauffeur.
                        <br />
                        Les kilomètres sont calculés à partir de l'avenue Foch 75016
                      </p>
                    </div>

                    {/* Pricing Tables */}
                    <div className='space-y-6'>
                      {/* Mariage */}
                      <div className='bg-muted rounded-2xl p-6 border'>
                        <h4 className='text-2xl font-semibold text-foreground mb-4'>
                          Tarif de location pour mariage
                        </h4>
                        <div className='space-y-3'>
                          {vehicle.pricing.mariage.map((row, index) => (
                            <div
                              key={index}
                              className={`flex justify-between items-center pb-3 ${
                                index < vehicle.pricing.mariage.length - 1 ? 'border-b border-border' : ''
                              }`}
                            >
                              <div>
                                <div className='font-medium text-sm text-foreground'>{row.duration}</div>
                                {row.distance !== '-' && (
                                  <div className='text-xs text-muted-foreground'>{row.distance}</div>
                                )}
                              </div>
                              <div className='font-bold text-primary'>{row.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Clip */}
                      <div className='bg-muted rounded-2xl p-6 border'>
                        <h4 className='text-2xl font-semibold text-foreground mb-4'>
                          Tarif de location pour prestation clip
                        </h4>
                        <div className='space-y-3'>
                          {vehicle.pricing.clip.map((row, index) => (
                            <div
                              key={index}
                              className={`flex justify-between items-center pb-3 ${
                                index < vehicle.pricing.clip.length - 1 ? 'border-b border-border' : ''
                              }`}
                            >
                              <div className='font-medium text-sm text-foreground'>{row.duration}</div>
                              <div className='font-bold text-primary'>{row.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Journée */}
                      <div className='bg-muted rounded-2xl p-6 border'>
                        <h4 className='text-2xl font-semibold text-foreground mb-4'>
                          Location à la journée
                        </h4>
                        <div className='space-y-3'>
                          {vehicle.pricing.journee.map((row, index) => (
                            <div
                              key={index}
                              className={`flex justify-between items-center pb-3 ${
                                index < vehicle.pricing.journee.length - 1 ? 'border-b border-border' : ''
                              }`}
                            >
                              <div className='font-medium text-sm text-foreground'>{row.duration}</div>
                              <div className='font-bold text-primary'>{row.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </MotionPreset>
      </div>
    </section>
  )
}
