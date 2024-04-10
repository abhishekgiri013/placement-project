import { Card, CardHeader, CardTitle, CardDescription,CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import SigninWithGithub from "../components/SigninWithGithub";
import SignInForm from "../components/SignInForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";


export default async function AuthRoute() {
    const session = await  getServerSession(authOptions);
    if(session) {
        return redirect("/");
    }
    return (
        <div className=" w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>please sign in</CardTitle>
                    <CardDescription>To access private page you have to authenticate</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        
                            <SignInForm/>
                           <SigninWithGithub/>  
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}