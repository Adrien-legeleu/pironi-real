'use client'

import { Check } from 'lucide-react'
import { MotionPreset } from '@/components/ui/motion-preset'
import { ImageSlider } from '@/components/ui/image-slider'

type FeatureItem = {
  title: string
  description: string
}

type PricingRow = {
  period: string
  subtitle: string
  price: string
}

type ServiceSection = {
  badge: string
  title: string
  description: string
  features: FeatureItem[]
  pricing?: PricingRow[]
  image: {
    src: string | string[]
    darkSrc?: string
    alt: string
  }
}

type FeaturesServiceSectionProps = {
  sections: ServiceSection[]
}

const FeaturesServiceSection = ({ sections }: FeaturesServiceSectionProps) => {
  return (
    <section className='py-8 sm:py-16 w-screen lg:py-24 bg-background'>
      <div className='sm:mx-auto max-w-7xl px-4 w-screen sm:px-6 lg:px-8'>
        <div className='space-y-24'>
          {sections.map((section, sectionIndex) => {
            const isOdd = sectionIndex % 2 === 0
            const contentOrder = isOdd ? 'order-1' : 'order-1 lg:order-2'
            const imageOrder = isOdd ? 'order-2' : 'order-2 lg:order-1'
            const imageDirection = isOdd ? 'right' : 'left'
            const imageJustify = isOdd ? 'lg:justify-end' : 'lg:justify-start'

            // Generate ID from title (for anchor navigation)
            const sectionId = section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/é/g, 'e')

            return (
              <div key={sectionIndex} id={sectionId} className='grid gap-12 lg:grid-cols-2 lg:gap-16 sm:scroll-mt-24'>
                {/* Content */}
                <div className={`space-y-6 ${contentOrder}`}>
                  <div className='space-y-4'>
                    <MotionPreset
                      fade
                      slide
                      transition={{ duration: 0.5 }}
                      className='text-primary text-sm font-medium uppercase'
                    >
                      {section.badge}
                    </MotionPreset>

                    <MotionPreset
                      component='h2'
                      className='text-3xl font-semibold md:text-4xl lg:text-5xl'
                      fade
                      slide
                      delay={0.3}
                      transition={{ duration: 0.5 }}
                    >
                      {section.title}
                    </MotionPreset>

                    <MotionPreset
                      component='p'
                      className='text-muted-foreground text-xl'
                      fade
                      slide
                      delay={0.6}
                      transition={{ duration: 0.5 }}
                    >
                      {section.description}
                    </MotionPreset>
                  </div>

                  {/* Pricing Table (if present) */}
                  {section.pricing && (
                    <MotionPreset
                      fade
                      slide
                      delay={0.8}
                      transition={{ duration: 0.5 }}
                      className='bg-muted rounded-2xl p-6 border'
                    >
                      <h4 className='font-semibold text-2xl text-foreground mb-4 flex items-center gap-2'>
                        Tarifs indicatifs
                      </h4>
                      <div className='space-y-3'>
                        {section.pricing.map((pricing, pricingIndex) => (
                          <div
                            key={pricingIndex}
                            className={`flex justify-between items-center pb-3 ${
                              pricingIndex < section.pricing!.length - 1
                                ? 'border-b border-border'
                                : ''
                            }`}
                          >
                            <div>
                              <div className='font-medium text-sm text-foreground'>
                                {pricing.period}
                              </div>
                              <div className='text-xs text-muted-foreground'>
                                {pricing.subtitle}
                              </div>
                            </div>
                            <div className='text-right'>
                              <div className='font-bold text-primary'>{pricing.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </MotionPreset>
                  )}

                  {/* Features List */}
                  <div className='space-y-3.5'>
                    {section.features.map((feature, featureIndex) => (
                      <MotionPreset
                        key={featureIndex}
                        className='flex items-start gap-3'
                        fade
                        slide
                        delay={0.9 + featureIndex * 0.2}
                        transition={{ duration: 0.5 }}
                      >
                        <Check className='text-primary mt-0.5 size-6 shrink-0' />
                        <p className='text-lg'>
                          <span className='font-medium'>{feature.title}</span>{' '}
                          <span className='text-muted-foreground'>{feature.description}</span>
                        </p>
                      </MotionPreset>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <MotionPreset
                  fade
                  slide={{ direction: 'up', offset: 50 }}
                  delay={0.6}
                  transition={{ duration: 0.8 }}
                  className={`bg-muted group flex max-sm:w-full justify-center sm:aspect-[4/3] rounded-3xl p-6 transition-all duration-400 hover:p-0 ${imageJustify} ${imageOrder} lg:sticky lg:top-24 lg:self-start`}
                >
                  {Array.isArray(section.image.src) ? (
                    <ImageSlider
                      images={section.image.src}
                      alt={section.image.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : section.image.darkSrc ? (
                    <>
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className='h-full w-full object-cover rounded-lg dark:hidden'
                      />
                      <img
                        src={section.image.darkSrc}
                        alt={section.image.alt}
                        className='hidden h-full w-full object-cover rounded-lg dark:block'
                      />
                    </>
                  ) : (
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className='h-full w-full rounded-lg'
                    />
                  )}
                </MotionPreset>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesServiceSection
