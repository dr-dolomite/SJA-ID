import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Link href="/auth/login">
          <Button>
            Go to Login Page
            <LogInIcon className="inline h-4 w-4" />
          </Button>
        </Link>
      </main>
    </div>
  );
}
