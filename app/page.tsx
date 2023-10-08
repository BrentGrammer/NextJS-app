import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
// import images as an object
import myImage from "@/public/images/pic.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src={myImage} alt="my image" />
      <div className="relative h-1/2">
        <Image
          src="https://bit.ly/react-cover"
          alt="my react cover image"
          fill // when using fill parent needs position of relative, absolute or fixed
          // style={{ objectFit: 'contain'}}
          className="object-cover" // use tailwind instead
          sizes="100vw"
          // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75} // 75 works for most cases, background images could be 100 for highest quality
          priority // boolean - whether should load above the fold. Images are lazy loaded by default. use if you have images that need to be visible on first load
        />
      </div>
    </main>
  );
}
