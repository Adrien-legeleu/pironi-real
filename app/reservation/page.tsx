"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Calendar, CreditCard, ShieldCheck, Clock, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"; // Assuming path based on hero.tsx
import { MotionPreset } from "@/components/ui/motion-preset"; 
// Wait, I didn't verify if Accordion exists in ui folder. I saw list_dir output:
// "dropdown-menu.tsx", "navigation-menu.tsx", "sheet.tsx", "tabs.tsx", "sonner.tsx"... 
// I DON'T SEE ACCORDION. I will implement a custom simple accordion or just a toggle list to avoid creating new complex UI components if not present.
// Actually, I can just build a simple FAQ list with motion.

const CAL_URL = "https://cal.com/adrien-legeleux/pironi-reservation"; // Placeholder as requested, user to update.

export default function ReservationPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  // Smooth scroll to booking
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mobile Slider Logic
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
        if (sliderRef.current) {
            const width = sliderRef.current.offsetWidth;
            const scrollPos = sliderRef.current.scrollLeft;
            const currentIndex = Math.round(scrollPos / width);
            const nextIndex = (currentIndex + 1) % 3; // 3 items
            
            sliderRef.current.scrollTo({
                left: nextIndex * width,
                behavior: 'smooth'
            });
            setActiveSlide(nextIndex);
        }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]); // Dependency on isPaused

  const handleScroll = () => {
      if (sliderRef.current) {
          const width = sliderRef.current.offsetWidth;
          const scrollPos = sliderRef.current.scrollLeft;
          const index = Math.round(scrollPos / width);
          setActiveSlide(index);
      }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center min-h-[85vh] overflow-hidden pt-20 px-4 text-center">
        <BackgroundRippleEffect />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
            <MotionPreset fade blur slide={{ direction: "down", offset: 20 }}>
                <div className="bg-secondary/30 backdrop-blur-sm inline-flex items-center gap-2.5 rounded-full border px-4 py-2 mb-4">
                    <div className="bg-primary rounded-full w-2 h-2 animate-pulse"/>
                    <span className="text-muted-foreground text-sm font-medium">Réservation en ligne 24/7</span>
                </div>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: "up", offset: 30 }} delay={0.1}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                    Réservez votre Citroen Ami <br/>
                    <span className="text-primary relative inline-block">
                        en quelques minutes
                         <svg
                            width="100%"
                            height="12"
                            viewBox="0 0 223 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -bottom-2 left-0 w-full"
                            preserveAspectRatio="none"
                        >
                        <path
                            d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        </svg>
                    </span>
                </h1>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: "up", offset: 30 }} delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Paiement sécurisé via Stripe, gestion des horaires en temps réel, confirmation immédiate. La mobilité Pironi à portée de clic.
                </p>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: "up", offset: 30 }} delay={0.3}>
                 <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 text-sm font-medium text-foreground/80">
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Horaires en temps réel</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span>Paiement sécurisé (Stripe)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>Confirmation instantanée</span>
                    </div>
                </div>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: "up", offset: 40 }} delay={0.4} className="mt-8">
                <Button size="lg" className="rounded-2xl px-8 h-12 text-lg shadow-lg relative z-20" onClick={scrollToBooking}>
                    Réserver maintenant
                </Button>
            </MotionPreset>
        </div>

        {/* Hero Image / Decor */}
      </section>

      {/* HOW IT WORKS SPIT STICKY */}
      <section className="py-24 bg-secondary/10 relative">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            {/* DESKTOP LAYOUT (Sticky + Grid) */}
            <div className="hidden lg:flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* STICKY LEFT */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                         <MotionPreset fade slide={{ direction: "right", offset: 20 }}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Comment ça marche ?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Une expérience fluide et sans stress. Votre Pironi vous attend en 3 étapes simples.
                            </p>
                            <div className="hidden lg:block relative h-64 w-64 rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                                {/* Decorative Abstract or Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary/50 opacity-20"/>
                                <Image 
                                    src="/cars/sanspermis.png"
                                    alt="Process"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                         </MotionPreset>
                    </div>
                </div>

                {/* SCROLLABLE RIGHT */}
                <div className="lg:w-2/3 flex flex-col gap-32 pb-24">
                     {[
                      { icon: Calendar, title: "1. Choisissez vos dates", desc: "Sélectionnez le créneau qui vous convient le mieux." },
                      { icon: CreditCard, title: "2. Réglez en ligne", desc: "Paiement sécurisé pour valider votre réservation." },
                      { icon: Check, title: "3. Recevez la confirmation", desc: "Vous recevez instantanément votre confirmation par email." }
                  ].map((item, idx) => (
                         <MotionPreset key={idx} fade blur>
                            <div className="group relative min-h-[200px] flex flex-col justify-center gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                  <item.icon className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </MotionPreset>
                    ))}
                </div>
            </div>

            {/* MOBILE LAYOUT (Slider) */}
            <div className="lg:hidden flex flex-col gap-8">
                <div className="text-center">
                    <MotionPreset fade slide={{ direction: "up", offset: 20 }}>
                        <h2 className="text-3xl font-bold  text-primary">Comment ça marche ?</h2>
                    </MotionPreset>
                </div>

                <div className="relative">
                    <div 
                        ref={sliderRef}
                        onScroll={handleScroll}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex overflow-x-auto snap-x snap-mandatory py-4 -mx-4 px-4 scrollbar-hide touch-pan-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {[
                        { icon: Calendar, title: "1. Choisissez", desc: "Vos dates en quelques clics." },
                        { icon: CreditCard, title: "2. Réglez", desc: "Paiement 100% sécurisé." },
                        { icon: Check, title: "3. Confirmez", desc: "Confirmation immédiate par mail." }
                        ].map((item, idx) => (
                            <div key={idx} className="snap-center shrink-0 w-full flex justify-center px-4">
                                <div className="w-full bg-background rounded-[2rem] p-8 border border-border/50 text-center flex flex-col items-center justify-center gap-4 shadow-sm min-h-[250px]">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DOTS INDICATORS */}
                    <div className="flex justify-center gap-2 mt-2">
                        {[0, 1, 2].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if(sliderRef.current) {
                                        sliderRef.current.scrollTo({
                                            left: idx * sliderRef.current.offsetWidth,
                                            behavior: 'smooth'
                                        });
                                        setActiveSlide(idx);
                                    }
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-primary w-6' : 'bg-primary/20'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 px-4 bg-background scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <MotionPreset fade>
              <div className="bg-background rounded-[2.5rem] shadow-xl border overflow-hidden relative min-h-[600px] md:min-h-[700px]">
                  {/* Loading State */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-secondary/10 z-0 ${iframeLoaded ? 'hidden' : 'flex'}`}>
                      <div className="flex flex-col items-center gap-4">
                          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"/>
                          <p className="text-muted-foreground font-medium">Chargement du calendrier...</p>
                      </div>
                  </div>

                  <iframe
                    src={CAL_URL}
                    className="w-full h-full min-h-[700px] md:min-h-[800px] border-0 relative z-10"
                    onLoad={() => setIframeLoaded(true)}
                    loading="lazy"
                    title="Réserver une Pironi Ami"
                  />
                  
                  {/* Fallback button in case iframe is strictly blocked or issues */}
                  <div className="absolute bottom-4 right-4 z-20">
                     <Button variant="outline" size="sm" className="rounded-xl text-xs bg-background/80 backdrop-blur" asChild>
                         <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="w-3 h-3"/>
                            Ouvrir dans un nouvel onglet
                         </a>
                     </Button>
                  </div>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                  Powered by Cal.com - La réservation s'effectue sur une plateforme sécurisée.
              </p>
            </MotionPreset>
          </div>
      </section>

      {/* INFOS & FAQ */}
      <section className="py-24 bg-secondary/10">
          <div className="container mx-auto max-w-4xl px-4">
              <div className="grid md:grid-cols-2 gap-12">
                  {/* INFOS */}
                  <div>
                      <h3 className="text-2xl font-bold mb-6">Infos utiles</h3>
                      <div className="space-y-6">
                           <div className="flex gap-4">
                               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                   <map name="map-pin" className="w-5 h-5" />
                                   {/* Re-using a generic icon if map-pin fails, but I imported MapPin ? No I didn't. Let's use generic div or add import */}
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                               </div>
                               <div>
                                   <h4 className="font-semibold">Lieu de récupération</h4>
                                   <p className="text-muted-foreground text-sm">Le véhicule sera mis à votre disposition à l'agence Pironi (Île-de-France) ou livré selon votre option.</p>
                               </div>
                           </div>
                           <div className="flex gap-4">
                               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>
                               </div>
                               <div>
                                   <h4 className="font-semibold">Documents requis</h4>
                                   <p className="text-muted-foreground text-sm">Une pièce d'identité valide et une carte bancaire pour la caution sont nécessaires.</p>
                               </div>
                           </div>
                           
                           <div className="mt-8 p-6 bg-background rounded-2xl border">
                               <h4 className="font-semibold mb-2 flex items-center gap-2">
                                   <HelpCircle className="w-4 h-4 text-primary"/>
                                   Besoin d'aide ?
                               </h4>
                               <p className="text-sm text-muted-foreground mb-4">
                                   Notre équipe est disponible pour répondre à vos questions avant de réserver.
                               </p>
                               <Button variant="secondary" className="w-full rounded-xl" asChild>
                                   <Link href="/contact">Contactez-nous</Link>
                               </Button>
                           </div>
                      </div>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Questions fréquentes</h3>
                    <div className="space-y-4">
                        {[
                            { q: "Puis-je modifier ou annuler ?", a: "Oui, vous pouvez modifier votre réservation jusqu'à 24h à l'avance sans frais via le lien dans votre email de confirmation." },
                            { q: "Quels moyens de paiement ?", a: "Nous acceptons les cartes Visa, Mastercard et American Express via notre partenaire sécurisé Stripe." },
                            { q: "Que se passe-t-il après la réservation ?", a: "Vous recevrez un email de confirmation immédiat avec tous les détails (lieu, code d'accès, contact)." },
                            { q: "Puis-je réserver plusieurs jours ?", a: "Absolument. Sélectionnez votre date de début, et vous pourrez ajuster la durée ou réserver plusieurs créneaux si nécessaire." }
                        ].map((faq, i) => (
                           <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded-2xl bg-background overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-secondary/5 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground"/> : <ChevronDown className="w-4 h-4 text-muted-foreground"/>}
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="overflow-hidden"
            >
                <div className="p-4 pt-0 text-sm text-muted-foreground leading-relaxed">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
}
