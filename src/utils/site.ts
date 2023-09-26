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
        src: "/appetizer.svg"

      },
      {
        en: "Thali Dishes",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Vegetarian/Vegan",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Clay Oven",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Mughlai Dishes",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Bengali Dishes",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Fish and Seafood",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Accessories and Bread",
        se: "",
        src: "/appetizer.svg"

      },
      {
        en: "Desserts/Children's Menu",
        se: "",
        src: "/appetizer.svg"

      },

    ]

    return items;
  }
}