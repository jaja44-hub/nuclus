"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  // The 'status' can be "loading", "authenticated", or "unauthenticated"
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <p>
          Signed in as <strong>{session.user?.name}</strong> (
          {session.user?.email})
        </p>
        {/* The signOut function will hit our /api/auth/signout endpoint */}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <p>Not signed in</p>
      {/* The signIn function will redirect to the NextAuth.js default sign-in page */}
      <button onClick={() => signIn()}>Sign in with Credentials</button>
      {/* To sign in with a specific provider, pass its ID */}
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
