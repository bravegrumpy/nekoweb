import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function NotFound() {
    return (<>
            <div className="xl:col-span-full h-50"><p></p></div>
            <Card className="w-fit mx-auto lg:col-span-1 xl:col-span-1 xl:col-start-3">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-center text-2xl">Page not found</h2>
                    </CardTitle>
                    <CardDescription>
                        <h3>Error 404</h3>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>The page you are looking for does not exist.</p>
                    <p>Check the URL and try again</p>
            </CardContent>
            <CardFooter>
                <Link href={"/"} className="bg-primary text-lg py-1 text-primary-foreground px-5 w-fit mx-auto rounded-lg">Go Home</Link>
            </CardFooter>
        </Card>
    </>);
}