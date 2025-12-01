

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24 bg-background">
        <BackgroundRippleEffect /> 
     <div className="mx-auto relative z-10 flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-secondary/30 backdrop-blur-sm flex items-center gap-2.5 rounded-full border px-3 py-2">
         <div className="bg-primary rounded-full p-1"/>
          <span className="text-muted-foreground text-sm font-medium">Disponible 24/7 en Île-de-France</span>
        </div> 
        <h1 className="text-5xl leading-[1.1]  font-bold text-foreground sm:text-6xl lg:text-7xl">
          Pironi, Mobilité
          <br />
          <span className="relative text-primary">
            d'Excellence
            <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden"
            >
              <path
                d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          sur mesure.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Location sans permis, transport logistique et chauffeur privé.
          <br />
          Une même exigence de sérieux, de confort et de flexibilité.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-2xl px-8 h-12 text-lg shadow-lg" asChild>
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <Button
            size="icon"
            className="rounded-2xl w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg border-none"
            asChild
          >
            <a 
              href="https://wa.me/33659316991?text=Bonjour%20je%20souhaite%20vous%20contacter%20pour%20ce%20service." 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contact WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex flex-row items-end justify-between gap-4 w-[105%] -translate-x-[2.5%] lg:min-h-[400px] md:min-h-[300px] min-h-[200px]  mt-auto">
        <Image
          src="/cars/logistique.webp"
          alt="Pironi Services - Mercedes et Ami"
   width={600}
   height={600}
          className="object-cover lg:w-[200px] lg:h-[300px] sm:w-[150px] sm:h-[200px] w-[100px] h-[150px] rounded-t-3xl rounded-b-[1rem] object-center"
          priority
        />
        <Image
          src="/cars/rollsroyce.png"
          alt="Pironi Services - Mercedes et Ami"
   width={600}
   height={600}
          className="object-cover lg:w-[400px] lg:h-[400px] sm:w-[250px] sm:h-[250px] w-[170px] h-[250px] rounded-t-3xl rounded-b-[1rem] object-center"
          priority
        />
        <Image
          src="/cars/mercedes.png"
          alt="Pironi Services - Mercedes et Ami"
   width={600}
   height={600}
                   className="object-cover lg:w-[350px] lg:h-[500px] sm:w-[250px] sm:h-[350px] w-[150px] h-[200px] rounded-t-3xl rounded-b-[1rem] object-center"

          priority
        />
        <Image
          src="/cars/sanspermis.png"
          alt="Pironi Services - Mercedes et Ami"
   width={600}
   height={600}
                   className="object-cover lg:w-[250px] lg:h-[300px] sm:w-[250px] sm:h-[250px] w-[150px] h-[100px] rounded-t-3xl rounded-b-[1rem] object-center"

          priority
        />
        
        <Image
          src="/cars/rollsroyce2.png"
          alt="Pironi Services - Mercedes et Ami"
   width={600}
   height={600}
                   className="object-cover lg:w-[400px] lg:h-[450px] sm:w-[250px] sm:h-[350px] w-[150px] h-[250px] rounded-t-3xl rounded-b-[1rem] object-center"

          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

    </section>
  );
}
