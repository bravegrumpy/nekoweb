"use client"
import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button"


interface GridProps {
    children?: React.ReactNode
}
export function Grid({ children }:GridProps) {
    return (<>
        <div className="w-11/12 mx-auto grid grid-cols-5 mt-5 gap-5">
            { children ?? <Content />}
        </div>
    </>);
}

export function Content({ children }:{ children?: React.ReactNode }) {
    return (<>
    <Card className="w-full">
        <CardHeader>
            <CardTitle>
                <h1>Hello</h1>
            </CardTitle>
        </CardHeader>
        <CardDescription>
            <p>A simple card. This is my attempting to view my components properly.</p>
        </CardDescription>
        <CardContent>
            { children ?? (<>
                <p>This is a card. I don't know why, but I have one now.</p>
                <p>I am just vibing here. I need to figure out how to get this styled properly.</p>
            </>) }
        </CardContent>
        <CardFooter>
            <CardAction onClick={() => alert("clicked")}>
                <Button>Press Me!</Button>
            </CardAction>
        </CardFooter>
    </Card> 
    </>);
}