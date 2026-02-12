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
        <div className="w-full flex flex-row bg-primary/30 justify-around items-center">
            <Link href="/">
            <Image src="/favicon.svg" alt="Logo" width={"60"} height={"60"} className="bg-indigo-300/40 rounded-lg inline px-[10px]" />
            </Link>
            <Navigation />
            <ModeToggle />
        </div>
    </>);
}