"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/about")
  }

  return (
    <div className="flex w-full h-screen justify-center items-center gap-5">
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/contact"}
      >
        go to contact
      </Link>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/navbar"}
      >
        go to navbar
      </Link>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/footer"}
      >
        {" "}
        go to footer
      </Link>
      <Button onClick={handleClick}>
        Navigate to about
      </Button>
    </div>
  );
}
