// import { getProviders, getSession, signIn } from "next-auth/client";

// export default function Callback({ providers }) {
//   const signInWithProvider = (providerId) => {
//     signIn(providerId);
//   };

//   return (
//     <div>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.id}>
//           <button onClick={() => signInWithProvider(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   const providers = await getProviders();
//   const session = await getSession({ req });

//   if (session && res && session.accessToken) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     res.end();
//     return { props: {} };
//   }

//   return {
//     props: { providers },
//   };
// }
