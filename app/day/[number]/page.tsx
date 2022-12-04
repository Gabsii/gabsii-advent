import SnowyGallery from "@/ui/components/SnowGallery";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { daysData } from "utils/const";


async function fetchData(day: number) {
  if(Object.keys(daysData).includes((day - 1).toString())) {
    return daysData[day - 1];
  }

  throw new Error("Day not found");
}

export default async function Page({ params }: { params: { number: string } }) {
  const { number } = params;
  const { title, caption, src } = await fetchData(parseInt(number));

  if (new Date(`12-${number}-2022`) > new Date()) {
    return redirect("/");
  }

  return (
    <div className="flex">
      <SnowyGallery showGifts={false}>
      </SnowyGallery>
      <div
        className="bg-black relative opacity-90 p-12 text-white text-4xl items-center justify-center flex flex-col z-10 mx-auto mt-40 w-[80vw]"
      >
        <h2 className="font-bold mb-6">
          { title } - Day {number.length === 1 ? `0${number}` : number}
        </h2>
        <figure>
          <Image src={src} alt={`Day ${number} image - ${caption}`} />
          <figcaption className="text-center text-lg font-extralight font-mono mt-6">
            {caption}
          </figcaption>
        </figure>
        <Link href="/" className="absolute top-5 right-5 text-white font-mono">
          x
        </Link>
      </div>
    </div>
  );
}
