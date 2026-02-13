import { Content, CustomCard } from "@/components/page-body"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Page() {
    return (<>
                <Content />
                <CustomCard 
                    title={<h2 className="text-xl">Project Stack</h2>}
                    description={<p>Technologies used in this project</p>}
                    content={<>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Next.js 16</strong> - React framework with App Router</li>
                            <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
                            <li><strong>Tailwind CSS</strong> - Utility-first styling</li>
                            <li><strong>shadcn/ui</strong> - Component library</li>
                            <li><strong>React 19</strong> - Latest React with hooks</li>
                        </ul>
                    </>}
                    action={<Button>View on GitHub</Button>}
                />
                <div>
                    <h3 className="text-2xl font-serif bg-accent text-accent-foreground">FAQs</h3>
                    <Accordion defaultValue={["item-1"]}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Who am I</AccordionTrigger>
                            <AccordionContent>
                                <p>Naturally, I am the person behind BraveGrumpy. I think you knew that.</p>
                                <p>More specifically, I would like to get a job in web app coding one day. I don't know that I will be able to.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger>What even is this?</AccordionTrigger>
                            <AccordionContent>
                                <p>This website currently exists exclusively as a place to "scratch" ideas so to speak.</p>
                                <p>If you want to see what I actually have to <em>say</em> go visit <Link href="https://mertherfanfic.neocities.org">my neocities fanfiction website</Link>.  Only do so if you are willing to read some rauncy stuff 😉.</p>
                                <p>Over there, I post my fanfiction WIP. It also has a blog page that I use occasionally.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger>Who asked you anyway?</AccordionTrigger>
                            <AccordionContent>
                                <p className="font-serif">Good point.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
    </>);
}