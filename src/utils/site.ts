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
  }
}