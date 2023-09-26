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
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Our Favourites",
        se: "",
        src: "/favourites.svg"

      },
      {
        en: "Thali Dishes",
        se: "",
        src: "/thali.svg"

      },
      {
        en: "Vegetarian/Vegan",
        se: "",
        src: "/veg.svg"

      },
      {
        en: "Clay Oven",
        se: "",
        src: "/clay_oven.svg"

      },
      {
        en: "Mughlai Dishes",
        se: "",
        src: "/mughal.svg"

      },
      {
        en: "Bengali Dishes",
        se: "",
        src: "/bengali.svg"

      },
      {
        en: "Fish and Seafood",
        se: "",
        src: "/fish.svg"

      },
      {
        en: "Accessories and Bread",
        se: "",
        src: "/accessories.svg"

      },
      {
        en: "Desserts/Children's Menu",
        se: "",
        src: "/dessert.svg"

      },

    ]

    return items;
  }
}