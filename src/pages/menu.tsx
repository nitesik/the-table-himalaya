import { Language, siteSetting } from "@/utils/site";
import { menu } from "@/utils/translations";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Menu() {

  const t = useRouter().locale as Language;

  return (
    <div>
      <Head>
        <title>The Table Himalaya - Menu</title>
      </Head>
      <div className="flex mt-1 w-full overflow-x-auto menu-scroll sticky bg-white top-0">
        {siteSetting.getMenuHeader().map(item => <div onClick={() => document.getElementById(item.en)?.scrollIntoView({behavior: "smooth", block: "center"})} className="w-[125px] md:w-[200px]  text-slate-800 font-semibold scroll text-center flex flex-shrink-0 justify-center border border-y-slate-200" key={item.en}>
          <div className="py-[10px] md:py-[20px] flex flex-col items-center gap-3 w-full border-white border-b-[10px] hover:border-primary">
            <Image className="stroke-gray-100" src={item.src} alt="menu" width={32} height={32} />
            <h1 className="font-bold text-xs md:text-sm text-primary">{item.en}</h1>
          </div>
        </div>)}
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.appetizer.source})`}} />
          <div className="flex items-center gap-5" id={menu.appetizer.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.appetizer.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.appetizer.items.map(item => <div className="w-[300px] mt-5" key={item.name[t]}>
              <div className="flex font-bold text-primary justify-between text-[23px]"><h2>{item.name[t]}</h2> <p>{item.price}kr</p></div>
              <p className="text-sm mt-3">{item.description[t]}</p>
            </div>)}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.favourites.source})`}} />
          <div className="flex items-center gap-5" id={menu.favourites.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.favourites.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-2 gap-7">
            {menu.favourites.items.map(item => <div className="mt-5" key={item.name[t]}>
              <h2 className="text-[32px] text-primary font-bold">{item.name[t]} {item.price && item.price+" kr"}</h2>
              <p className="text-[18px] text-primary mt-3 font-semibold">{item.description?.[t]}</p>
              <div>{item.sub?.map(sub => <div key={sub.name[t]} className="grid gap-3 ml-3 mt-5">
                <div className="flex gap-5"><div className="flex items-center gap-1"><>•</><h1>{sub.name[t]}</h1></div><p>{sub.price} kr</p></div>
                
                <h2>{sub.description && sub.description[t]}</h2>
              </div>)}</div>
            </div>)}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.thali.source})`}} />
          <div className="flex items-center gap-5" id={menu.thali.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.thali.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.thali.items.map(item => <div className="w-[300px] mt-5" key={item.name[t]}>
              <div className="flex font-bold text-primary justify-between text-[23px]"><h2>{item.name[t]}</h2> <p>{item.price}kr</p></div>
              <p className="text-sm mt-3">{item.description[t]}</p>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.veg.source})`}} />
          <div className="flex items-center gap-5" id={menu.veg.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.veg.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.veg.items.map(item => <div className="w-[300px] mt-5" key={item.name[t]}>
              <div className="flex font-bold text-primary justify-between text-[23px]"><h2>{item.name[t]}</h2> <p>{item.price}kr</p></div>
              <p className="text-sm mt-3">{item.description[t]}</p>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-[50px] mb-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="flex items-center gap-5" id={menu.vegan.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.vegan.name[t]}</h1></div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.vegan.items.map(item => <div className="w-[300px] mt-5" key={item.name[t]}>
              <div className="flex font-bold text-primary justify-between text-[23px]"><h2>{item.name[t]}</h2> <p>{item.price}kr</p></div>
              <p className="text-sm mt-3">{item.description[t]}</p>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.clay_oven.source})`}} />
          <div className="flex items-center gap-5" id={menu.clay_oven.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.clay_oven.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-1 gap-7">
            {menu.clay_oven.items.map(item => <div className="mt-5" key={item.name[t]}>
              <h2 className="text-[32px] text-primary font-bold">{item.name[t]}</h2>
              <p className="text-[18px] text-primary mt-3 font-semibold">{item.description?.[t]}</p>
              <div className="flex flex-wrap items-start gap-5 mt-5">{item.sub?.map(sub => <div key={sub.name[t]} className="flex flex-col flex-grow w-[300px] gap-3 ml-3 mt-5">
                <div className="flex items-center gap-5 text-primary font-semibold"><div className="flex items-center gap-1 "><>•</><h1>{sub.name[t]} </h1></div><p>{sub.price} kr</p></div>
                
                <h2>{sub.description && sub.description[t]}</h2>
              </div>)}</div>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.mughlai_dishes.source})`}} />
          <div className="flex items-center gap-5" id={menu.mughlai_dishes.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.mughlai_dishes.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-1 gap-7">
            {menu.mughlai_dishes.items.map(item => <div className="mt-5" key={item.name[t]}>
              <h2 className="text-[32px] text-primary font-bold">{item.name[t]}</h2>
              <p className="text-[18px] text-primary mt-3 font-semibold">{item.description?.[t]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-2 lg:gap-5 mt-5">{item.sub?.map(sub => <div key={sub.name[t]} className="flex flex-col flex-grow w-[300px] gap-3 ml-3 mt-5">
                <div className="flex items-center gap-5 text-primary font-semibold"><div className="flex items-center gap-1 "><>•</><h1>{sub.name[t]} </h1></div><p>{sub.price} kr</p></div>
                
                <h2>{sub.description && sub.description[t]}</h2>
              </div>)}</div>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.bengali_ratter.source})`}} />
          <div className="flex items-center gap-5" id={menu.bengali_ratter.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.bengali_ratter.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-1 gap-7">
            {menu.bengali_ratter.items.map(item => <div className="mt-5" key={item.name[t]}>
              <h2 className="text-[32px] text-primary font-bold">{item.name[t]}</h2>
              <p className="text-[18px] text-primary mt-3 font-semibold">{item.description?.[t]}</p>
              <div className="grid grid-cols-3 items-start gap-5 mt-1">{item.sub?.map(sub => <div key={sub.name[t]} className="flex flex-col flex-grow w-[300px] gap-3 ml-3 mt-5">
                <div className="flex items-center gap-5 text-primary font-semibold"><div className="flex items-center gap-1 "><>•</><h1>{sub.name[t]} </h1></div><p>{sub.price} kr</p></div>                
              </div>)}</div>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.fish_and_seafood.source})`}} />
          <div className="flex items-center gap-5" id={menu.fish_and_seafood.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.fish_and_seafood.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.fish_and_seafood.items.map(item => <div className="w-[300px] mt-5" key={item.name[t]}>
              <div className="flex font-bold text-primary justify-between text-[23px]"><h2>{item.name[t]}</h2> <p>{item.price}kr</p></div>
              <p className="text-sm mt-3">{item.description[t]}</p>
            </div>)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.accessories.source})`}} />
          <div className="flex items-center gap-5" id={menu.accessories.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.accessories.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-3">
            {menu.accessories.items.map(item => <div className="w-[300px] mt-5" key={item.name[t]}>
              <div className="flex font-medium text-black justify-between text-[18px]"><h2>{item.name[t]}</h2> <p>{item.price}kr</p></div>
            </div>)}
          </div>
        </div>
      </div>
       
      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="w-full h-[200px] bg-cover bg-center rounded-lg mb-5 bg-black" style={{backgroundImage: `url(${menu.desserts_and_children.source})`}} />
          <div className="flex items-center gap-5" id={menu.desserts_and_children.name.en}><h1 className="text-[40px] font-bold text-primary">{menu.desserts_and_children.name[t]}</h1><hr className="flex-1 border-[1px] border-primary" /></div>
          <div className="w-full grid lg:grid-cols-1 gap-7">
            {menu.desserts_and_children.items.map(item => <div className="mt-5" key={item.name[t]}>
              <h2 className="text-[32px] text-primary font-bold">{item.name[t]}</h2>
              <p className="text-[18px] text-primary mt-3 font-semibold">{item.description?.[t]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-2 lg:gap-5 mt-5">{item.sub?.map(sub => <div key={sub.name[t]} className="flex flex-col flex-grow w-[300px] gap-3 ml-3 mt-5">
                <div className="flex items-center gap-5 text-primary font-semibold"><div className="flex items-center gap-1 "><>•</><h1>{sub.name[t]} </h1></div><p>{sub.price} kr</p></div>
                
                <h2>{sub.description && sub.description[t]}</h2>
              </div>)}</div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}