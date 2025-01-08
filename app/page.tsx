
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession();

  return(
    <div>
      {JSON.stringify(session)}
    </div>
  );
}

// export function RealHome(){
//   const session = useSession();
//   {session.status === 'authenticated'&& <button onClick={()=>signOut()}>SIgn Out</button>}
//   {session.status === 'unauthenticated'&& <button onClick={()=>signIn()}>SIgn In</button>}
// }
