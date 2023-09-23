import { icons } from "@/utils/icons";
import { type Language, siteSetting } from "@/utils/site";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const t = router.locale as Language;

  return (
    <nav className="w-full bg-[#ffffff] bg-cover flex justify-center sticky top-0 shadow-md shadow-primary">
      <div className="z-50 w-[400px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] py-5 flex items-center justify-between">
        <Image src={icons.logo} alt="logo" className="w-[75px] lg:w-[100px]" onClick={() => router.push("/")} />
        <div className="hidden md:flex text-md lg:text-lg gap-7 font-semibold text-primary">
          {siteSetting.getHeaderLinks().map(item => <Link locale={router.locale} key={item.en} href={item.href} className={`${router.asPath === item.href ? "border-b-2 border-primary" : ""}`}>{item[t]}</Link>)}
        </div>
        <Image src={menuOpen ? icons.close : icons.menu} onClick={() => setMenuOpen(prev => !prev)} alt="menu" width={20} className="md:hidden cursor-pointer" />
      </div>
      {menuOpen && <div className="z-30 md:hidden fixed h-screen w-screen bg-white top-0 left-0 grid place-content-center">
          <div className="flex flex-col items-center gap-7 font-semibold text-primary text-[25px]">
            {siteSetting.getHeaderLinks().map(item => <Link key={item.en} href={item.href} onClick={() => setMenuOpen(false)} className={`${router.asPath === item.href ? "border-b-2 border-primary" : ""}`}>{item[t]}</Link>)}
          </div>
        </div>}
    </nav>
  )
}