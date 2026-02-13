"use client"
import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface GridProps {
    children?: React.ReactNode
}

interface CustomCardProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    content?: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
}
export function Grid({ children }:GridProps) {
    return (<>
        <div className="xl:w-11/12 w-2/3 mx-auto flex flex-col lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 mt-5 gap-5">
            { children ?? <Content />}
        </div>
    </>);
}

export function CustomCard({ 
    title = <h1>Hello</h1>, 
    description = <p>A simple card. This is my attempting to view my components properly.</p>,
    content,
    action = <Button>Press Me!</Button>,
    className 
}: CustomCardProps) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardDescription>
                {description}
            </CardDescription>
            <CardContent>
                {content ?? (<>
                    <p>This is a card. I don't know why, but I have one now.</p>
                    <p>I am just vibing here. I need to figure out how to get this styled properly.</p>
                </>)}
            </CardContent>
            <CardFooter>
                <CardAction onClick={() => alert("clicked")}>
                    {action}
                </CardAction>
            </CardFooter>
        </Card>
    );
}

export function Content({ children }:{ children?: React.ReactNode }) {
    return (<>
        <CustomCard 
            className="w-full"
            content={children}
        />
    </>);
}