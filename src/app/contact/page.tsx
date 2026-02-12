export default function Page() {
    return (<>
        <h1 className="text-2xl font-serif bg-primary text-primary-foreground lg:col-span-full xl:col-span-3 xl:col-start-2 text-center border-2 border-solid border-border">Contact Page</h1>
        <div className="border-2 border-solid border-border lg:col-span-3 p-2 xl:col-span-1 xl:col-start-3">
            <p>There are quite a few new input types that just work in native HTML. I'm going to have to explore this!</p>
        </div>
        <form className="border-border border-solid border-2 lg:col-span-3 xl:col-span-1 xl:col-start-3">
            <div>
                <h3 className="text-2xl font-serif text-center m-4 bg-primary text-primary-foreground">Form!</h3>
            </div>
            <fieldset className="flex flex-col gap-5">
                <label className="flex flex-row flex-wrap max-w-[65vw] md:max-w-full lg:max-w-full gap-5 justify-between bg-muted text-muted-foreground">Name:
                    <input defaultValue="John Doe" name="name" id="name" type="text" />
                </label>
                <label className="flex flex-row flex-wrap max-w-[65vw] md:max-w-full lg:max-w-full gap-5 justify-between bg-muted text-muted-foreground">
                    Age:
                    <input placeholder="12" type="number" />
                </label>
                <label className="flex flex-row flex-wrap max-w-[65vw] md:max-w-full lg:max-w-full gap-5 justify-between bg-muted text-muted-foreground">
                    Agree?
                    <input type="checkbox" />
                </label>
                <label className="flex flex-row flex-wrap max-w-[65vw] md:max-w-full lg:max-w-full gap-5 justify-between bg-muted text-muted-foreground">
                    Color:
                    <input type="color" />
                </label>
                <label className="flex flex-row flex-wrap max-w-[65vw] md:max-w-full lg:max-w-full gap-5 justify-between bg-muted text-muted-foreground">
                    Date:
                    <input type="date" />
                </label>
                <label className="flex flex-row flex-wrap max-w-[65vw] md:max-w-full lg:max-w-full gap-5 justify-between bg-muted text-muted-foreground">
                    Datetime:
                    <input type="datetime-local" />
                </label>
            </fieldset>
        </form>
    </>);
}