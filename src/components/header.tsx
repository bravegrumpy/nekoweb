"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/theme-provider";
import Link from "next/link"

import Image from "next/image"

export function Navigation() {
    return (<>
        <NavigationMenu>
            <NavigationMenuList>
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
            </NavigationMenuList>
        </NavigationMenu>
    </>);
}

export function Header() {
    return(<>
        <div className="w-full flex flex-row bg-primary/30 justify-around items-center">
            <Image src="/favicon.svg" alt="Logo" width={"50"} height={"50"} className="bg-indigo-300/40 rounded-lg inline px-1" />
            <Navigation />
            <ModeToggle />
        </div>
    </>);
}