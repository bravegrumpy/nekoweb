"use client"


import { Input } from "@/components/ui/input";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export function CurrentPath() {
    const pathName = usePathname();
    const path = decodeURI(pathName);
    const [newPath, setNewPath ] = useState<string>("/");

    function handleChange(e) {
        setNewPath(e.target.value)
    }
    return (<>
        {/*<p>The page {path ?? "The page you are looking for" } does not exist.</p>*/}
        <p>The page you are looking for does not exist.</p>
        <div className="flex flex-col gap-3 my-1 ring p-1">
            <p>Would you like to try a different page?</p>
            <div className="flex flex-row gap-10 justify-between">
            <Input type="text" value={newPath} onChange={handleChange} className=""/>
            <Link href={encodeURI(newPath)} className="bg-secondary text-lg py-1 text-secondary-foreground px-5 w-fit rounded-lg">Navigate</Link>
            </div>
        </div>
    </>);
}