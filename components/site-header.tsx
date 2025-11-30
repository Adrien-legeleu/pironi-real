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
        <Button className="rounded-2xl max-md:hidden" asChild>
          <Link href="/contact">Demander un devis</Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="flex gap-4 md:hidden">
          <Button className="rounded-2xl text-xs px-4" asChild>
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
