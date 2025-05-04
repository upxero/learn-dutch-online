import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Learn Dutch Online Logo">
      <Image 
        src="/images/logo.png" 
        alt="Learn Dutch Online Logo" 
        width={200} 
        height={150} 
        priority
      />
    </Link>
  );
}

