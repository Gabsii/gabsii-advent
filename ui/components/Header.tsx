import Link from "next/link";

export default function Header() {
  return (
    <div className="space-y-6">
      <div className="space-y-8 text-white my-8">
        <Link href="/">
          <h1 className="text-3xl lg:text-6xl font-bold text-center font-christmas">Gabsi's Advent Calendar</h1>
        </Link>
      </div>
    </div>
  );
}
