"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24 bg-background">
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

        <Button size="lg" className="rounded-2xl px-8 h-12 text-lg shadow-lg" asChild>
          <Link href="/contact">Demander un devis</Link>
        </Button>
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
