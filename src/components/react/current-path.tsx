import { type ChangeEvent, useState, useEffect, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export function CurrentPath({children}: Props) {
    const [pathName, setPathName] = useState<string>("/");

    let path;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathName(window.location.pathname);
        }
    }, []);
    path = pathName ? decodeURI(pathName) : null;
    const [newPath, setNewPath ] = useState<string>("/");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setNewPath(e.target.value)
    }
    return (<>
        <p>The page {path ?? "you are looking for" } does not exist.</p>
        { children ?? null }
        {/*
        <Accordion defaultValue={["item-1"]}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Would you like to try a different page?</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-row gap-10 justify-between">
                    <Input type="text" value={newPath} onChange={handleChange} />
                    <Link className="bg-secondary text-lg py-1 text-secondary-foreground px-5 w-fit rounded-lg" href={encodeURI(newPath)}>Navigate</Link>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        */}        
        <div className="flex flex-col gap-3 my-1 ring p-1">
            <p>Would you like to try a different page?</p>
            <div className="flex flex-row gap-10 justify-between">
            <input className="input" type="text" value={newPath} onChange={handleChange} />
            <a href={encodeURI(newPath)} className="bg-secondary text-lg py-1 text-secondary-foreground px-5 w-fit rounded-lg">Navigate</a>
            </div>
        </div>
    </>);
}