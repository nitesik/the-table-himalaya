export type SiteSetting = typeof siteSetting;
export type Language = "en" | "se";

export const siteSetting = {
  getHeaderLinks: () => {
    const items = [
      {
        en: "Home",
        se: "Hem",
        href: "/"
      },
      {
        en: "Menu",
        se: "Meny",
        href: "/menu"
      },
      {
        en: "Drinks",
        se: "Drycker",
        href: "/drinks"
      },
      {
        en: "Catering",
        se: "Catering",
        href: "/catering"
      },
      {
        en: "About Us",
        se: " Om oss",
        href: "/about-us"
      },
    ]

    return items;
  },

  getMenuHeader: () => {
    const items = [
      {
        en: "Appetizers",
        se: "Förrätter",
        src: "/appetizer.svg"

      },
      {
        en: "Our Favourites",
        se: "Våra Favoriter",
        src: "/favourites.svg"

      },
      {
        en: "Thali Dishes",
        se: "Thali Rätter",
        src: "/thali.svg"

      },
      {
        en: "Vegetarian/Vegan",
        se: "Vegetariska/Veganska",
        src: "/veg.svg"

      },
      {
        en: "Clay Oven",
        se: "Lerugn",
        src: "/clay_oven.svg"

      },
      {
        en: "Mughlai Dishes",
        se: "Mughlai Rätter",
        src: "/mughal.svg"

      },
      {
        en: "Bengali Dishes",
        se: "Bengali Rätter",
        src: "/bengali.svg"

      },
      {
        en: "Fish and Seafood",
        se: "Fisk Och Skaldjur",
        src: "/fish.svg"

      },
      {
        en: "Accessories and Bread",
        se: "Tillbehor Och Brod",
        src: "/accessories.svg"

      },
      {
        en: "Desserts/Children's Menu",
        se: "Efterrätter/Barnmeny",
        src: "/dessert.svg"

      },

    ]

    return items;
  }
}