"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Armchair, MapPin, Repeat, User, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Cursor, CursorFollow, CursorProvider } from "@/components/ui/cursor";
import { cn } from "@/lib/utils";

// Types
export type NotificationCard = {
  id: string;
  name: string;
  time: string;
  amount: string;
  avatar: string;
  fallback: string;
};

type AvatarData = {
  src: string;
  fallback: string;
  name: string;
  size: string;
};

// Data
const notifications: NotificationCard[] = [
  {
    id: "1",
    name: "Service Client",
    time: "À l'instant",
    amount: "Confirmé",
    avatar: "",
    fallback: "SC",
  },
  {
    id: "2",
    name: "Chauffeur",
    time: "Il y a 2 min",
    amount: "En route",
    avatar: "",
    fallback: "CH",
  },
  {
    id: "3",
    name: "Réservation",
    time: "Il y a 10 min",
    amount: "Validée",
    avatar: "",
    fallback: "RS",
  },
];

const avatars: AvatarData[] = [
  {
    src: "",
    fallback: "PL",
    name: "Paul",
    size: "h-12 w-12",
  },
  {
    src: "",
    fallback: "MR",
    name: "Marie",
    size: "h-16 w-16",
  },
  {
    src: "",
    fallback: "JD",
    name: "Jean",
    size: "h-20 w-20",
  },
  {
    src: "",
    fallback: "SL",
    name: "Sophie",
    size: "h-16 w-16",
  },
  {
    src: "",
    fallback: "TH",
    name: "Thomas",
    size: "h-12 w-12",
  },
];

// Components
const NotificationStack = ({ notifications: initialNotifications }: { notifications: NotificationCard[] }) => {
  const [notifications, setNotifications] = useState<NotificationCard[]>(initialNotifications);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          className="bg-background absolute left-1/2 flex w-full -translate-x-1/2 items-center justify-between rounded-md px-6 py-2.5 shadow-sm border"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: (index - 2) * -8,
            scale: 1 - index * 0.05,
            opacity: 1 - index * 0.25,
            zIndex: notifications.length - index,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={notification.avatar} alt={notification.name} />
              <AvatarFallback>{notification.fallback}</AvatarFallback>
            </Avatar>

            <div className="space-y-1 text-left">
              <p className="text-sm font-semibold">{notification.name}</p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
          </div>

          <span className="text-sm font-semibold text-primary">{notification.amount}</span>
        </motion.div>
      ))}
    </div>
  );
};

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);
  const span3Ref = useRef<HTMLSpanElement>(null);
  const span4Ref = useRef<HTMLSpanElement>(null);
  const span5Ref = useRef<HTMLSpanElement>(null);
  const span6Ref = useRef<HTMLSpanElement>(null);
  const span7Ref = useRef<HTMLSpanElement>(null);
  const span8Ref = useRef<HTMLSpanElement>(null);
  const span9Ref = useRef<HTMLSpanElement>(null);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <MotionPreset fade blur slide={{ direction: "up", offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className="text-sm font-normal px-4 py-1" variant="outline">
              Nos Atouts
            </Badge>
          </MotionPreset>
          <MotionPreset
            component="h2"
            className="text-3xl md:text-5xl font-serif font-bold text-foreground"
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            L'expérience Pironi : Excellence et Sérénité
          </MotionPreset>
          <MotionPreset
            component="p"
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
          >
            Une technologie de pointe au service de votre mobilité, pour un confort absolu.
          </MotionPreset>
        </div>

        <div ref={containerRef} className="relative flex w-full flex-col items-center gap-16">
          {/* Mobile Center Logo */}
          <MotionPreset
            fade
            blur
            delay={0.05}
            transition={{ duration: 0.5 }}
            className="bg-primary z-10 flex h-16 w-fit items-center gap-4 rounded-full px-6 text-2xl font-medium text-primary-foreground shadow-2xl lg:hidden"
          >
            Pironi
          </MotionPreset>

          <div className="relative flex w-full items-center justify-center max-lg:flex-wrap max-lg:gap-6 lg:justify-between">
            {/* Left Nodes */}
            <div className="flex gap-6 lg:flex-col lg:gap-16">
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div2Ref}
                className="bg-card flex h-12 w-fit items-center gap-3 rounded-full border px-4 text-lg shadow-sm z-10"
              >
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Sécurité</span>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div3Ref}
                className="bg-card flex h-12 w-fit items-center gap-3 rounded-full border px-4 text-lg shadow-sm z-10"
              >
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">Rapidité</span>
              </MotionPreset>
            </div>

            {/* Connecting Dots Left */}
            <div className="flex flex-col gap-14 max-lg:hidden">
              <span ref={span1Ref} className="size-1 bg-border rounded-full" />
              <span ref={span2Ref} className="size-1 bg-border rounded-full" />
              <span ref={span3Ref} className="size-1 bg-border rounded-full" />
            </div>

            {/* Center Logo Desktop */}
            <MotionPreset
              fade
              blur
              delay={0.05}
              transition={{ duration: 0.5 }}
              ref={div1Ref}
              className="bg-primary z-10 flex h-20 w-fit items-center justify-center rounded-full px-8 text-3xl font-serif font-bold text-primary-foreground shadow-2xl max-lg:hidden"
            >
              Pironi
            </MotionPreset>

            {/* Connecting Dots Right */}
            <div className="flex flex-col gap-14 max-lg:hidden">
              <span ref={span4Ref} className="size-1 bg-border rounded-full" />
              <span ref={span5Ref} className="size-1 bg-border rounded-full" />
              <span ref={span6Ref} className="size-1 bg-border rounded-full" />
            </div>

            {/* Right Nodes */}
            <div className="flex gap-6 lg:flex-col lg:gap-16">
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div4Ref}
                className="bg-card flex h-12 w-fit items-center gap-3 rounded-full border px-4 text-lg shadow-sm z-10"
              >
                <Armchair className="h-5 w-5 text-primary" />
                <span className="font-medium">Confort</span>
              </MotionPreset>

              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div5Ref}
                className="bg-card flex h-12 w-fit items-center gap-3 rounded-full border px-4 text-lg shadow-sm z-10"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Suivi GPS</span>
              </MotionPreset>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {/* Card 1: Transparence */}
            <MotionPreset
              fade
              blur
              delay={0.1}
              transition={{ duration: 0.9 }}
              className="relative flex flex-col items-center gap-8"
            >
              <span ref={span7Ref} className="size-1 bg-border rounded-full max-lg:hidden" />
              <div ref={div6Ref} className="bg-card w-full overflow-hidden rounded-[2rem] border shadow-lg h-full">
                <div className="px-6 pt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Transparence Totale
                  </div>
                  <p className="text-muted-foreground">
                    Tarifs clairs, facturation détaillée et aucun frais caché.
                  </p>
                </div>
                <div className="relative mt-6 px-6 pb-6">
                  <div className="bg-secondary/20 h-48 w-full rounded-xl flex items-center justify-center border border-border/50">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-primary mb-1">129€</div>
                      <div className="text-sm text-muted-foreground">Forfait Journée</div>
                      <div className="mt-4 w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-primary rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionPreset>

            {/* Card 2: Espace Client */}
            <MotionPreset
              fade
              blur
              delay={0.12}
              transition={{ duration: 0.9 }}
              className="relative flex flex-col items-center gap-8"
            >
              <span ref={span8Ref} className="size-1 bg-border rounded-full max-lg:hidden" />
              <div ref={div7Ref} className="bg-card w-full overflow-hidden rounded-[2rem] border shadow-lg h-full">
                <div className="px-6 pt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold mb-2">
                    <User className="h-6 w-6 text-primary" />
                    Espace Client
                  </div>
                  <p className="text-muted-foreground">
                    Suivez vos réservations et vos chauffeurs en temps réel.
                  </p>
                </div>
                <div className="mt-6 px-6 pb-6">
                  <div className="h-48 w-full flex flex-col justify-center bg-secondary/10 rounded-xl p-4 border border-border/50">
                    <NotificationStack notifications={notifications} />
                  </div>
                </div>
              </div>
            </MotionPreset>

            {/* Card 3: Équipe Dédiée */}
            <MotionPreset
              fade
              blur
              delay={0.15}
              transition={{ duration: 0.9 }}
              className="relative flex flex-col items-center gap-8"
            >
              <span ref={span9Ref} className="size-1 bg-border rounded-full max-lg:hidden" />
              <div ref={div8Ref} className="bg-card w-full overflow-hidden rounded-[2rem] border shadow-lg h-full">
                <div className="px-6 pt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-xl font-bold mb-2">
                    <Repeat className="h-6 w-6 text-primary" />
                    Équipe Dédiée
                  </div>
                  <p className="text-muted-foreground">
                    Une équipe disponible 7j/7 pour répondre à vos besoins.
                  </p>
                </div>
                <div className="relative mt-6 px-6 pb-6">
                  <div className="flex h-48 w-full items-center justify-center bg-secondary/20 rounded-xl border border-border/50">
                    <div className="flex items-center justify-center -space-x-4">
                      {avatars.map((item) => (
                        <div key={item.name} className="relative">
                          <Avatar className={cn("ring-2 ring-background", item.size)}>
                            <AvatarImage src={item.src} alt={item.name} />
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {item.fallback}
                            </AvatarFallback>
                          </Avatar>
                          <CursorProvider>
                            <Cursor>
                              <svg
                                className="h-6 w-6 text-primary drop-shadow-md"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                                />
                              </svg>
                            </Cursor>
                            <CursorFollow>
                              <div className="w-fit rounded-lg bg-primary px-2 py-1 text-xs text-nowrap text-primary-foreground shadow-lg">
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

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span2Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span5Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span2Ref}
            toRef={span1Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span1Ref}
            toRef={div2Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span2Ref}
            toRef={span3Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span3Ref}
            toRef={div3Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span5Ref}
            toRef={span4Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span4Ref}
            toRef={div4Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span5Ref}
            toRef={span6Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span6Ref}
            toRef={div5Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span8Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
            startXOffset={5}
            startYOffset={20}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={span7Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            reverse
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={span9Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={div7Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span7Ref}
            toRef={div6Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            reverse
            className="-z-10 max-lg:hidden"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span9Ref}
            toRef={div8Ref}
            gradientStartColor="var(--primary)"
            duration={4.5}
            className="-z-10 max-lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
