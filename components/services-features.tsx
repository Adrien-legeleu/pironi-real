"use client"

import { MotionPreset } from '@/components/ui/motion-preset'
import { CheckCircle } from 'lucide-react'

type FeatureItem = {
  title: string
  description: string
}

type PricingRow = {
  model: string
  hourlyPrice: string
  dailyPrice: string
  weeklyPrice: string
}

type FeatureSection = {
  badge: string
  title: string
  description: string
  features: FeatureItem[]
  image: {
    src: string
    darkSrc?: string
    alt: string
  }
  pricing?: PricingRow[]
}

type ServicesFeaturesProps = {
  sections: FeatureSection[]
}

export function ServicesFeatures({ sections }: ServicesFeaturesProps) {
  return (
    <section className='py-8 sm:py-16 lg:py-24 bg-background'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-32'>
          {sections.map((section, sectionIndex) => {
            const isOdd = sectionIndex % 2 === 0
            const contentOrder = isOdd ? 'order-1' : 'order-1 lg:order-2'
            const imageOrder = isOdd ? 'order-2' : 'order-2 lg:order-1'
            const imageDirection = isOdd ? 'right' : 'left'
            const imageJustify = isOdd ? 'lg:justify-end' : 'lg:justify-start'

            return (
              <div key={sectionIndex} className='grid items-start gap-12 lg:grid-cols-2 lg:gap-20'>
                {/* Content */}
                <div className={`space-y-8 ${contentOrder}`}>
                  <div className='space-y-6'>
                    <MotionPreset
                      fade
                      slide
                      transition={{ duration: 0.5 }}
                      className='text-primary text-sm font-semibold uppercase tracking-widest'
                    >
                      {section.badge}
                    </MotionPreset>

                    <MotionPreset
                      component='h2'
                      className='text-3xl font-bold md:text-4xl lg:text-5xl font-serif'
                      fade
                      slide
                      delay={0.2}
                      transition={{ duration: 0.5 }}
                    >
                      {section.title}
                    </MotionPreset>

                    <MotionPreset
                      component='p'
                      className='text-muted-foreground text-lg leading-relaxed'
                      fade
                      slide
                      delay={0.4}
                      transition={{ duration: 0.5 }}
                    >
                      {section.description}
                    </MotionPreset>
                  </div>

                  <div className='space-y-4'>
                    {section.features.map((feature, featureIndex) => (
                      <MotionPreset
                        key={featureIndex}
                        className='flex items-start gap-3'
                        fade
                        slide
                        delay={0.6 + featureIndex * 0.15}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className='text-primary mt-1 size-6 shrink-0' />
                        <p className='text-base leading-relaxed'>
                          <span className='font-semibold text-foreground'>{feature.title}</span>{' '}
                          <span className='text-muted-foreground'>{feature.description}</span>
                        </p>
                      </MotionPreset>
                    ))}
                  </div>

                  {/* Pricing Table */}
                  {section.pricing && section.pricing.length > 0 && (
                    <MotionPreset
                      fade
                      slide
                      delay={1.2}
                      transition={{ duration: 0.5 }}
                      className='mt-8'
                    >
                      <div className='overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl'>
                        <div className='overflow-x-auto'>
                          <table className='w-full'>
                            <thead>
                              <tr className='border-b border-border/50 bg-muted/30'>
                                <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>Modèle</th>
                                <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>Tarif/h</th>
                                <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>Tarif/jour</th>
                                <th className='px-6 py-4 text-left text-sm font-bold text-foreground'>Tarif/semaine</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.pricing.map((row, rowIndex) => (
                                <tr
                                  key={rowIndex}
                                  className='border-b border-border/30 last:border-0 transition-colors hover:bg-muted/20'
                                >
                                  <td className='px-6 py-4 font-semibold text-foreground'>{row.model}</td>
                                  <td className='px-6 py-4 text-muted-foreground font-medium'>{row.hourlyPrice}</td>
                                  <td className='px-6 py-4 text-muted-foreground font-medium'>{row.dailyPrice}</td>
                                  <td className='px-6 py-4 text-muted-foreground font-medium'>{row.weeklyPrice}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </MotionPreset>
                  )}
                </div>

                {/* Image */}
                <MotionPreset
                  fade
                  slide={{ direction: imageDirection, offset: 50 }}
                  delay={0.4}
                  transition={{ duration: 0.8 }}
                  className={`group flex justify-center ${imageJustify} ${imageOrder}`}
                >
                  <div className='relative overflow-hidden rounded-3xl bg-muted p-1 transition-all duration-500 hover:p-0 shadow-2xl'>
                    {section.image.darkSrc ? (
                      <>
                        <img
                          src={section.image.src}
                          alt={section.image.alt}
                          className='h-auto w-full max-w-xl rounded-[1.4rem] object-cover dark:hidden'
                        />
                        <img
                          src={section.image.darkSrc}
                          alt={section.image.alt}
                          className='hidden h-auto w-full max-w-xl rounded-[1.4rem] object-cover dark:block'
                        />
                      </>
                    ) : (
                      <img 
                        src={section.image.src} 
                        alt={section.image.alt} 
                        className='h-auto w-full max-w-xl rounded-[1.4rem] object-cover' 
                      />
                    )}
                  </div>
                </MotionPreset>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
