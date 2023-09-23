export type SiteSetting = typeof siteSetting;
export type Language = "en" | "se";

export const siteSetting = {
  getHeaderLinks: () => {
    const items = [
      {
        en: "Home",
        se: "",
        href: "/"
      },
      {
        en: "Menu",
        se: "",
        href: "/menu"
      },
      {
        en: "Drinks",
        se: "",
        href: "/drinks"
      },
      {
        en: "Catering",
        se: "",
        href: "/catering"
      },
      {
        en: "About Us",
        se: "",
        href: "/about-us"
      },
    ]

    return items;
  }
}