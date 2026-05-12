"use client";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export const SocialButtons = () => {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleSignIn = () => {
    console.log("Social sign-in clicked", { callbackUrl });
    alert("Social sign-in is not configured. This is a placeholder button.");
  };

  return (
    <div className="flex gap-3 mt-4">
      <button
        onClick={handleSignIn}
        className="btn btn-outline btn-error flex-1"
      >
        <FaGoogle className="text-lg" />
        Google
      </button>
    </div>
  );
};