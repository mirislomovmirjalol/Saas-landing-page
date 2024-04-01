import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="container mx-auto">
            <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center">
                <div className="flex justify-center">
                    <div
                        className="flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border">
                        <Badge className="font-semibold">New</Badge>
                        <h5>Announce your new feature here</h5>
                        <Link href="/" className="flex flex-row items-center">
                            View all features
                            <ArrowRightIcon className="w-6 h-6 ml-2"/>
                        </Link>
                    </div>
                </div>
                <h1 className="md:text-7xl my-4 font-extrabold text-4xl md:leading-tight">Create perfect projects with
                    this landing
                    page!</h1>
                <p className="mx-auto my-4 text-sm w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
                    This is a landing page template that you can use to create a beautiful website. It is designed to be
                    easy to use and customize. You can use this template to create a landing page for your app, product,
                    or service. It is built with Next.js, Tailwind CSS, and TypeScript.
                </p>
                <div className="flex flex-row justify-center items-center space-x-4 my-8">
                    <Button>
                        Get Started
                    </Button>
                    <Button variant="secondary">
                        Learn More
                    </Button>
                </div>

                <div
                    className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
                    <div
                        className="absolute top-10 left-24 w-56 h-56 bg-violet-400 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl">
                    </div>
                    <div
                        className="absolute bottom-2/4 right-1/4 w-56 h-56 bg-sky-400 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000 filter blur-3xl"></div>
                    <div
                        className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000 filter blur-3xl"></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <Image className="w-full" src="/dashboard-ui.png" alt="Dashboard ui design" priority width={1200}
                       height={800}/>
            </div>

        </main>
    );
}
