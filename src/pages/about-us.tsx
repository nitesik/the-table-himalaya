import { icons } from "@/utils/icons";
import { Language } from "@/utils/site";
import { homepage } from "@/utils/translations";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AboutUs() {

  const router = useRouter();

  const t = router.locale as Language;
  
  return (
    <div>
      <div className="flex justify-center py-[50px]">
        <div className="lg:w-[1000px] xl:w-[1200px] flex justify-center gap-10">
          <div className="grid place-content-center max-w-[450px] flex-1">
            <div className="flex flex-col gap-5">
              <h1 className="text-[38px] font-semibold text-primary">
                About Us
              </h1>
              <p>
                You will witness God shaping the divided seas as we bring
                together our own divided forms, ultimately replenishing them by
                the end of this process.
              </p>
              <div className="flex mt-5 justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image src={icons.speed} alt="speed" />
                  <h2>Fast Service</h2>
                </div>
                <hr className="h-full border" />
                <div className="flex flex-col items-center gap-3">
                  <Image src={icons.grape} alt="speed" />
                  <h2>Fresh Food</h2>
                </div>
                <hr className="h-full border" />
                <div className="flex flex-col items-center gap-3">
                  <Image src={icons.headphones} alt="speed" />
                  <h2>Fast Service</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-restaurant bg-cover flex-1 h-[600px] rounded"></div>
        </div>
      </div>

      <div className="flex justify-center py-[100px]">
        <div className="lg:w-[1000px] xl:w-[1200px] flex justify-center gap-10">
          <div className="bg-cover flex items-end h-[400px]">
            <Image src={icons.food_one} width={450} alt="food" className="rounded -translate-y-[75px]" />
            <Image src={icons.food_two} alt="food" height={270} className="rounded -translate-x-[50px]" />
          </div>

          <div className="grid max-w-[450px] flex-1">
            <div className="flex flex-col gap-3">
              <h2 className="text-[23px] font-semibold text-primary">
                About Us
              </h2>
              <h1 className="text-[38px] font-semibold">We speak the language of Foods.</h1>
              <p>
              Welcome to The Table Himalaya, where culinary artistry meets a warm and inviting atmosphere. Nestled in the heart of Stockholm, our restaurant is a gastronomic haven that promises an unforgettable dining experience. From the moment you step through our doors, you&apos;ll be transported into a world of exquisite flavors, impeccable service, and a welcoming ambiance that feels like home. Whether you&apos;re seeking a romantic dinner for two, a memorable celebration with friends and family, or simply a delightful meal to savor, we invite you to join us and indulge in a culinary journey that celebrates the finest in food and hospitality.
              </p>
             
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[75px]">
        <div className="lg:w-[1000px] xl:w-[1200px]">
          <div>
            <h2 className="text-primary text-[29px] font-semibold">Featured Food</h2>
            <h1 className=" text-[45px] font-semibold w-[13ch]">Fresh taste and great price</h1>
          </div>
          <div className="flex mt-[50px] justify-between">
            {homepage.dishes.slice(3, 6).map(item => <div key={item.name.en} className="w-[350px] h-[500px] bg-cover bg-no-repeat bg-center flex items-end" style={{backgroundImage: `url(${item.source})`}}>
              <div className="bg-primary py-3 px-5 text-white w-full grid gap-1">
                <div className="flex justify-between">
                  <h1 className="text-[25px] font-bold">{item.name[t]}</h1>
                  {item.price && <p className="text-[25px] font-semibold">{item.price}kr</p>}
                </div>
                <p className="text-sm">{item.description[t]}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
