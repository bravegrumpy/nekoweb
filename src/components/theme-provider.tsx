"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

export function ThemeProvider(
    {
        children,
        ...props
    }: React.ComponentProps<typeof NextThemesProvider>){
        return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

import { MoonIcon as Moon, SunIcon as Sun } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

interface ModeToggleProps {
    mode?: "button" | "select";
}
export function ModeToggle({ mode = "button" }: ModeToggleProps) {
    const { theme, setTheme } = useTheme();
    function toggleTheme () {
        switch (theme) {
            case "light":
                setTheme("dark");
                break;
            case "dark":
                setTheme("light");
                break;
            case "system":
                setTheme("dark");
                break;
        }
    }
    switch(mode) {
        case "button":
            return (<>
                <Button onClick={() => {toggleTheme()}} variant={"outline"} size={"icon"}>
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </>);
        case "select":
            return (<>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant={"outline"} size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle Theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>);
    }
}