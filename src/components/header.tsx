"use client";

import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuContent 
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "@/components/theme-provider";
import Link from "next/link"

import Image from "next/image"

export function Navigation() {
    return (<>
        <NavigationMenu>
            <NavigationMenuList className={"xl:flex xl:flex-row xl:gap-2"}>
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        render={<Link href="/" />}
                        className={navigationMenuTriggerStyle()}
                    >
                            Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Content</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink
                            render={<Link href="/blog" />}
                        >Blog</NavigationMenuLink>
                        <NavigationMenuLink render={<Link href="/mastadon" />}>Mastadon</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink render={<Link href="/contact" />} className={navigationMenuTriggerStyle()}>
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </>);
}

export function Header() {
    return(<>
        <div className="flex flex-row justify-around items-center bg-primary/30 w-full">
            <Link href="/">
            <Image src="/favicon.svg" alt="Logo" width={60} height={60} className="inline bg-indigo-300/40 px-2.5 rounded-lg" />
            </Link>
            <Navigation />
            <ModeToggle />
        </div>
    </>);
}