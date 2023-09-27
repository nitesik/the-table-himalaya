import { icons } from "@/utils/icons";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {

  const router = useRouter();

  return (
    <div className="flex justify-center bg-primary text-white text-lg font-semibold">
      <div className="md:w-[700px] lg:w-[1000px] xl:w-[1200px] py-[40px] flex flex-col gap-5 md:flex-row justify-between items-center">
        <Image onClick={() => router.push("/")} src={icons.logo} width={100} alt="logo" className="bg-white rounded-2xl cursor-pointer" />
        <div>
          <p>© Copyright The Table Himalaya</p>
        </div>
      </div>
    </div>
  )
}
