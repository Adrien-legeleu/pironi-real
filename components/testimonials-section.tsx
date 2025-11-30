"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { MotionPreset } from "@/components/ui/motion-preset";

const reviews = [
  {
    name: "Sophie Martin",
    username: "@sophie_m",
    body: "Un service exceptionnel ! La voiture était impeccable et le chauffeur très professionnel. Je recommande vivement Pironi pour tous vos déplacements.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Thomas Dubois",
    username: "@thomas_d",
    body: "J'ai loué une voiture sans permis pour la semaine, tout s'est passé à merveille. Le processus est simple et rapide. Merci à l'équipe !",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Marie Leroy",
    username: "@marie_l",
    body: "La logistique pour notre événement était parfaite. Pironi a su gérer tous les imprévus avec un calme olympien. Une vraie tranquillité d'esprit.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Lucas Bernard",
    username: "@lucas_b",
    body: "Support client au top, disponible 24/7 comme promis. Ils m'ont aidé à résoudre un problème en pleine nuit. Service 5 étoiles.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Camille Petit",
    username: "@camille_p",
    body: "Des véhicules de luxe magnifiques. J'ai fait sensation à mon mariage grâce à Pironi. Une expérience inoubliable.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Nicolas Moreau",
    username: "@nico_m",
    body: "Efficacité et discrétion. C'est exactement ce que je recherchais pour mes déplacements professionnels. Je ne passerai plus que par eux.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Léa Garcia",
    username: "@lea_g",
    body: "Une application fluide, une réservation en quelques clics et un service irréprochable. Pironi a tout compris aux besoins modernes.",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Hugo Roux",
    username: "@hugo_r",
    body: "Je suis impressionné par la qualité de la flotte. Les voitures sont neuves et très bien entretenues. Un plaisir à conduire.",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Manon David",
    username: "@manon_d",
    body: "Le service de chauffeur est ponctuel et courtois. C'est un vrai confort de se laisser conduire en toute sécurité.",
    img: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Alexandre Bertrand",
    username: "@alex_b",
    body: "Pironi a révolutionné ma façon de gérer la logistique de mon entreprise. Un partenaire de confiance sur le long terme.",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full sm:w-72 w-44 cursor-pointer overflow-hidden rounded-3xl border p-4 sm:p-6",
        // light styles
        "border-primary/[.09] bg-primary/[.03] hover:bg-primary/[.05]",
        // dark styles
      
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full object-cover max-sm:w-8 max-sm:h-8 " width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm sm:text-base font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-[11px] sm:text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-[10px] sm:text-sm leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
       <div className="container mx-auto px-4 mb-8 text-center">
          <MotionPreset
            component='h2'
            className='text-4xl md:text-5xl font-bold text-foreground mb-4'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Ils nous font confiance
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-lg text-muted-foreground'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            Découvrez les retours de nos clients satisfaits
          </MotionPreset>
        </div>

      <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4  overflow-hidden [perspective:900px]">
        <div
          className="flex flex-row items-center sm:gap-4"
          style={{
            transform:
              "translateX(-20px) translateY(0px) translateZ(-50px) rotateX(10deg) rotateY(-5deg) rotateZ(5deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:15s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:15s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:15s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:15s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  );
}

