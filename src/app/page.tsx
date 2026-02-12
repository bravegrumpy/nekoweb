import { Grid, Content } from "@/components/page-body"

export default function Page() {
    return (<>
            <Grid>
                <Content />
                <div className="bg-accent text-accent-foreground rounded-lg">
                    <p>Hello</p>
                </div>
            </Grid>
    </>);
}