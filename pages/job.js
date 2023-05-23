// import { useSession, signIn, signOut } from "next-auth/client";

// export default function Job() {
//   const [session, loading] = useSession();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return (
//       <div>
//         <p>You are not signed in.</p>
//         <button onClick={() => signIn()}>Sign in</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <p>Welcome, {session.user.name}</p>
//       <button onClick={() => signOut()}>Sign out</button>
//     </div>
//   );
// }
