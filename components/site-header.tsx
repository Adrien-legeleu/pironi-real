"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationData = [
  { title: "Accueil", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

// Animated Burger Icon Component
const BurgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col gap-1.5 w-6 h-6 items-center justify-center">
    <span
      className={cn(
        "block h-0.5 w-6 bg-current transition-all duration-300",
        isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
      )}
    />
    <span
      className={cn(
        "block h-0.5 w-6 bg-current transition-all duration-300",
        isOpen ? "opacity-0" : "opacity-100"
      )}
    />
    <span
      className={cn(
        "block h-0.5 w-6 bg-current transition-all duration-300",
        isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
      )}
    />
  </div>
);

export function SiteHeader({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className={cn("bg-background backdrop-blur-sm supports-[backdrop-filter]:bg-background/90 sticky top-0 z-50 h-16 border-b", className)}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-auto aspect-[3/2]">
            <Image src='/pironi/Logo_NoirRouge_CMJN.png' className='rounded-2xl' alt='Logo' width={200} height={200} />
          </div>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="flex-wrap justify-start gap-6">
            {navigationData.map((navItem) => (
              <NavigationMenuItem key={navItem.title}>
                <Link href={navItem.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className="text-muted-foreground hover:text-primary px-3 py-1.5 text-sm font-medium hover:bg-transparent transition-colors"
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="flex items-center gap-4 max-md:hidden">
          <Button
            size="icon"
            className="rounded-2xl w-9 h-9 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg border-none"
            asChild
          >
            <a 
              href="https://wa.me/33659316991?text=Bonjour%20je%20souhaite%20vous%20contacter%20pour%20ce%20service." 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contact WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </Button>
          <Button className="rounded-2xl h-9" asChild>
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-3 md:hidden">
           <Button
            size="icon"
            className="rounded-2xl w-9 h-9 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg border-none"
            asChild
          >
            <a 
              href="https://wa.me/33659316991?text=Bonjour%20je%20souhaite%20vous%20contacter%20pour%20ce%20service." 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contact WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </Button>
          <Button className="rounded-2xl text-xs h-9 px-4" asChild>
            <Link href="/contact">Devis</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <BurgerIcon isOpen={isOpen} />
              
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] rounded-l-3xl sm:w-[400px]">
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-2 mt-8">
                {navigationData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-4 rounded-2xl px-6 py-4 text-lg font-medium transition-all hover:bg-primary/5 hover:text-primary"
                  >
                    {/* Animated indicator */}
                    <span className="absolute left-2 h-8 w-1 bg-primary rounded-full scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
                    <span className="relative">{item.title}</span>
                  </Link>
                ))}
              </nav>

              {/* CTA Button in mobile menu */}
              <div className="absolute bottom-8 left-6 right-6">
                <Button
                  className="w-full rounded-2xl py-6 text-base"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
