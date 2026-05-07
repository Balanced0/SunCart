"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { FaPenToSquare } from "react-icons/fa6";
import { useEffect } from "react"
import Link from "next/link";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  useEffect(() => {
    if (session === null) {
      router.push("/login");
    }
  }, [session]);
  return (
    <div className="bg-[#E5E0DC30]">
      <div className="container mx-auto px-4 flex justify-center-safe items-center min-h-screen">
        {session ? (
          <div className="card bg-base-100 w-full max-w-2xl shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title font-extrabold text-3xl mb-6">
                My Profile
              </h2>
              <div className="avatar">
              <div className="w-32 rounded-full overflow-hidden">
                <img alt={session.user.name} src={session.user.image} />
              </div>
            </div>
              <p className="font-medium text-xl mb-4">{session.user.name}</p>
              <p className="text-gray-500 mb-4 flex gap-2 items-center">
                <CiMail /> {session.user.email}
              </p>
              <Link href="/update">
                <button className="btn rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-extrabold w-full">
                <FaPenToSquare /> Update Information
              </button>
              </Link>
            </div>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
