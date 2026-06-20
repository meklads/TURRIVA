import { Suspense } from "react";
import LoginForm from "./login-form";
import { isGoogleAuthConfigured } from "@/shared/lib/env";

export default function LoginPage() {
  const googleAuthEnabled = isGoogleAuthConfigured();

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-gray-400">
          ...
        </div>
      }
    >
      <LoginForm googleAuthEnabled={googleAuthEnabled} />
    </Suspense>
  );
}
