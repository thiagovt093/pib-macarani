"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu";
import { useIsMobile } from "./hooks/useMobile";

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-5 py-2.5 text-base font-semibold rounded-lg hover:bg-chart-2/70 hover:text-accent-foreground transition-colors"
          >
            <Link href="/">Cultos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-5 py-2.5 text-base font-semibold rounded-lg hover:bg-chart-2/70 hover:text-accent-foreground transition-colors"
          >
            <Link href="/">Campanha de Missões</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-5 py-2.5 text-base font-semibold rounded-lg hover:bg-chart-2/70 hover:text-accent-foreground transition-colors"
          >
            <Link href="/">Eventos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-5 py-2.5 text-base font-semibold rounded-lg hover:bg-chart-2/70 hover:text-accent-foreground transition-colors"
          >
            <Link href="/">Galeria</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-5 py-2.5 text-base font-semibold rounded-lg bg-primary/70 hover:bg-chart-2/70 hover:text-accent-foreground hover:font-bold transition-colors"
          >
            <Link href="/">Contribuições</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
