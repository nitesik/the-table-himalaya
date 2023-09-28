import { useState } from "react";
import { catering } from "@/utils/translations";
import { useRouter } from "next/router";
import { Language } from "@/utils/site";
import Image from "next/image";

export default function Catering() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const t = useRouter().locale as Language;

  return (
    <div className="flex justify-center">
      <div className="w-[350px] md:w-[700px] mb-[100px] lg:w-[1000px] xl:w-[1200px] flex flex-col items-center">
        <div className="my-[50px]">
          <h1 className="text-center text-[32px] md:text-left md:w-full md:text-[45px] font-semibold">
            Catering
          </h1>
          <p className="text-[17px] md:text-left text-center md:text-[23px] mt-5">
            {catering.description[t]}
          </p>
        </div>
        <div className="w-full md:w-[500px] lg:w-[700px] flex  justify-between">
          {catering.category.map((item, index) => (
            <div
              key={index}
              onClick={() => setCategoryIndex(index)}
              className="flex-none w-[20%] md:w-[25%] flex flex-col gap-3 items-center text-center"
            >
              <p className="w-fit bg-primary-blur rounded-xl p-5"><Image src={item.source} alt="image" width={50} height={50} /></p>{" "}
              <p
                className={`text-[20px] font-semibold ${
                  categoryIndex === index ? "text-primary" : "text-black"
                }`}
              >
                {catering.category[index].name[t]}
              </p>
            </div>
          ))}
        </div>
        <h1 className="mt-[35px] md:mt-[50px] text-center text-[32px] text-primary font-bold">
          {catering.category[categoryIndex].description?.[t] ? (
            <p>{catering.category[categoryIndex].description?.[t]}</p>
          ) : (
            <div>
              <h1>{catering.category[categoryIndex].price}</h1>
              <h1>{catering.category[categoryIndex].delivery?.[t]}</h1>
            </div>
          )}
        </h1>

        <div className="mt-[35px] md:mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {catering.category[categoryIndex].items.map((item) => (
            <div key={item.name[t]} className="flex items-start gap-5">
              <Image src={item.source} alt="image" width={138} height={138} className="rounded-xl mt-[10px]" />
              <div>
                <h1 className="text-[23px] text-primary font-semibold">
                  {item.name[t]}
                </h1>
                <p>{item.description?.[t]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
