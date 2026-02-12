import { ModeToggle } from "@/components/theme-provider";
import { Grid, Content } from "@/components/page-body"

export default function Page() {
    return (<>
        <ModeToggle mode="button" />
            <Grid>
                <Content />
            </Grid>
    </>);
}