import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundSection(){return <div className="flex min-h-[40vh] flex-col items-start justify-center gap-4"><p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">404</p><h1 className="text-3xl font-semibold sm:text-4xl">Page not found</h1><p className="max-w-xl text-muted-foreground">The route does not exist in the new project structure.</p><Link to="/"><Button>Return home</Button></Link></div>;}
