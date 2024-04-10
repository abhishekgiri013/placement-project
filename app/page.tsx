import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  const session =await getServerSession(authOptions)
  return (
      <div className=" p-10">
        <h1>Hello from index page ,this is a public route</h1>
        {session ? (
                    <div>
                      <h1>you are logged in</h1>
                       <LogoutButton/>
                    </div>
        ) : ( 
              <div>
                <h1>Please log in to see something</h1>
                <Button asChild>
                  <Link href="/auth">Login </Link>
                </Button>
              </div>
        )}
      </div>
  );
}
