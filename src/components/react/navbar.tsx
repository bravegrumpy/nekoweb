import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/react/ui/navigation-menu"
import * as React from "react";

export function NavBar():React.ReactNode {
    return (<>
        <NavigationMenu>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Content</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul>
                            <li>
                                <NavigationMenuLink href="/content">Content</NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/ocean">Ocean</NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/about">About</NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>           
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </>);
}