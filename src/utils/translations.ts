export type Language = {
  en: string;
  se: string;
};

export const homepage = {
  title: {
    en: "ELEVIATE YOUR TASTE",
    se: "DEN BÄSTA UPPLEVELSEN",
  },
  reservation_button: {
    en: "Make A Reservation",
    se: "Reservera",
  },

  intro: {
    en: "About Us",
    se: "Om oss",
  },

  intro_header: {
    en: "We Leave A Delicious Memory For You",
    se: "Vi lämnar ett härligt minne till dig",
  },

  intro_description_one: {
    en: "Welcome to The Table Himalaya - a culinary journey that transports you to the heart of the Himalayas through a symphony of flavors and a warm, inviting atmosphere. Nestled in the heart of Stockholm, our restaurant is a hidden gem that promises a dining experience like no other.",
    se: "Välkommen till The Table Himalaya - en kulinarisk resa som tar dig till Himalayas hjärta genom en symfoni av smaker och en varm, inbjudande atmosfär. Inbäddat i hjärtat av Stockholm är vår restaurang en dold pärla som utlovar en matupplevelse utan dess like",
  },

  intro_description_two: {
    en: "At The Table Himalaya, we pride ourselves on offering a gastronomic adventure that showcases the diverse and rich culinary traditions of the Himalayan region.",
    se: "På The Table Himalaya är vi stolta över att erbjuda ett gastronomiskt äventyr som visar upp de olika och rika kulinariska traditionerna i Himalaya-regionen",
  },

  dishes: [
    {
      price: 110,
      name: {
        en: "Chicen Tikka Masala",
        se: "Kyckling Tikka Masala",
      },
      description: {
        en: "These dishes are roasted in a clay oven in a masala sauce with yoghurt, cheese, butter and nuts",
        se: "Dessa rätter är rostade i en lerugn i en masalasås med yoghurt, ost, smör och nötter",
      },
      source: "/chicken-tikka.jpg",
    },
    {
      price: 125,
      name: {
        en: "Mixed Chicken Grill",
        se: "Blandad kycklinggrill",
      },
      description: {
        en: "Chicken fillet marinated in tandoori, garlic and green chili, grilled in a clay oven and stir-fried fresh vegetables and sauce.",
        se: "Kycklingfilé marinerad i tandoori, vitlök och grön chili, grillad i lerugn och wokade färska grönsaker och sås",
      },
      source: "/mixed-grill.jpg",
    },
    {
      price: 115,
      name: {
        en: "Dal Pumpkin Paneer",
        se: "Dal Pumpkin Paneer",
      },
      description: {
        en: "Leaf spinach, homemade cheese with blandale lentils and in a huggable sauce.",
        se: "Bladspenat, hemgjord ost med blandale linser och i en krambar sås",
      },
      source: "/chicken-tikka.jpg",
    },
    {
      price: null,
      name: {
        en: "Korai",
        se: "Korai",
      },
      description: {
        en: "These dishes are roasted in a clay oven in a masala sauce with yoghurt, cheese, butter and nuts",
        se: "Dessa rätter rostas i en lerugn i en masalasås med yoghurt, ost, smör och nötter",
      },
      source: "/chicken-korai.jpg",
    },
    {
      price: 120,
      name: {
        en: "OUMPH! KORAI",
        se: "OUMPH! KORAI",
      },
      description: {
        en: "Clay oven grilled soy fillets",
        se: "Lerugnsgrillade sojafiléer",
      },
      source: "/oumph-korai.jpg",
    },
    {
      price: 135,
      name: {
        en: "Lamb Biryani",
        se: "Lamm Biryani",
      },
      description: {
        en: "Indian party risotto made from lamb with a lot of good spices and saffron",
        se: "Indisk festrisotto gjord på lamm med mycket goda kryddor och saffran",
      },
      source: "/lamb-biryani.jpg",
    },
  ],

  menu_title: {
    en: "OUR MENU",
    se: "VÅR MENY",
  },

  menu_description: {
    en: "Our selection of dishes with quality taste",
    se: "Vårt urval av rätter med kvalitetssmak",
  },

  contact_us: {
    en: "Contact US",
    se: "Kontakta oss",
  },

  contact_description_one: {
    en: "You have the option to either make a reservation in advance or simply drop by our cafe without prior booking.",
    se: "Du har möjlighet att antingen boka i förväg eller helt enkelt komma förbi vårt café utan förbokning",
  },

  contact_description_two: {
    en: "At our cafe, you can either secure a table by making a reservation in advance or simply walk in whenever you like",
    se: "På vårt café kan du antingen säkra ett bord genom att boka i förväg eller helt enkelt gå in när du vill",
  },

  phone: {
    en: "Phone Numbers",
    se: "Phone Numbers",
  },

  email: {
    en: "Email",
    se: "email",
  },

  table_reservation_title: {
    en: "Table Reservation",
    se: "Bordsbokning",
  },

  name: {
    en: "Your Name",
    se: "Ditt namn",
  },

  mail: {
    en: "Your Email Address",
    se: "Din e-postadress",
  },

  phone_number: {
    en: "Your Phone Number",
    se: "Ditt telefonnummer",
  },

  guests: {
    en: "Number of Guests",
    se: "Antal gäster",
  },

  date: {
    en: "date",
    se: "datum",
  },

  time: {
    en: "Time",
    se: "Tid",
  },

  message: {
    en: "Message",
    se: "",
  },
};

export const menu = {
  appetizer: {
    name: {
      en: "Appetizers",
      se: "Förrätter",
    },
    source: "/appetizer-banner.jpg",
    items: [
      {
        name: {
          en: "Vegetarian Platter",
          se: "Vegetarian Platter",
        },
        description: {
          en: "Combination starters including: samosa, onion bhaji, piazu and paneer tikka",
          se: "Kombination av förrätter inklusive: samosa, lök bhaji , piazu och paneer tikka",
        },
        price: 150,
      },
      {
        name: {
          en: "Papadam",
          se: "Papadam",
        },
        description: {
          en: "Crispy lentil flour bread with mango chutney.",
          se: "Krispigt linsmjölsbröd med mango chutney.",
        },
        price: 35,
      },
      {
        name: {
          en: "Paneer Tikka",
          se: "Paneer Tikka",
        },
        description: {
          en: "Soft, juicy pieces of homemade cheese marinated in tandoori masala and then grilled in Tandoori ung.",
          se: "Mjuka, saftiga bitar av hemlagad ost marinerad i tandoori masala och sedan grillad in Tandoori ung.",
        },
        price: 79,
      },
      {
        name: {
          en: "Chole Puri",
          se: "Chole Puri",
        },
        description: {
          en: "Spicy chickpeas and fried bread, ginger, garlic, coriander and green chilli.",
          se: "Kryddiga kikärtor och stekt bröd, ingefära, vitlök, koriander och grön chili.",
        },
        price: 65,
      },
      {
        name: {
          en: "Samosa chaat",
          se: "Samosa chaat",
        },
        description: {
          en: "Homemade veg samosa flattened on a plate, topped with chickpeas, raita, cucumber, tomato, onion, coriander tamarind and mint chutney",
          se: "Hemlagad veg samosa tillplattade på en tallrik, toppad med kikärtor, raita, gurka, tommat, lök, koriander tamarind och mynta chutney",
        },
        price: 79,
      },
      {
        name: {
          en: "Chili prawns",
          se: "Chili prawns",
        },
        description: {
          en: "Grillade tigerräkor smaksatta med chili och koriander serveras på en mixsallad av rödlök, ingefära, tomat.",
          se: "Grilled tiger prawns flavored with chilli and coriander are served on a mixed salad of red onion, ginger and tomato.",
        },
        price: 99,
      },
      {
        name: {
          en: "Onion Bhaji",
          se: "Lök Bhaji",
        },
        description: {
          en: "Grillade tigerräkor smaksatta med chili och koriander serveras på en mixsallad av rödlök, ingefära, tomat.",
          se: "Grilled tiger prawns flavored with chilli and coriander are served on a mixed salad of red onion, ginger and tomato.",
        },
        price: 99,
      },
    ],
  },

  favourites: {
    source: "/favourite-banner.jpg",
    name: {
      en: "Our Favourites",
      se: "Våra Favoriter",
    },
    items: [
      {
        name: {
          en: "Tikka Masala",
          se: "Tikka Masala",
        },
        description: {
          en: "These dishes are roasted in our clay oven in a masala sauce with yogurt, cream, butter and nuts.",
          se: "Dessa rätter är rostade i vår lerugn i en masalasås med yoghurt, grädde, smör och nötter.",
        },
        sub: [
          {
            name: {
              en: "Chicken Masala/Chicen",
              se: "Kyckling Masala/Kyckling",
            },
            price: 169,
          },
          {
            name: {
              en: "Lamb Fillet Masala",
              se: "Lammytterfilé Masala",
            },
            price: 199,
          },
          {
            name: {
              en: "Tiger Prawns/Scampi Prawns Sek",
              se: "Tigerräkor/Scampi prawns",
            },
            price: 199,
          },
          {
            name: {
              en: "Veg Masala",
              se: "Veg Masala",
            },
            price: 169,
          },
        ],
      },
      {
        name: {
          en: "Mango Chicken Masala",
          se: "Mango Kyckling Masala",
        },
        description: {
          en: "These dishes are roasted in our clay oven in a masala sauce with yogurt, mango, cream, butter and nuts.",
          se: "Dessa rätter är rostade i vår lerugn i en masalasås med yoghurt, mango, grädde, smör och nötter.",
        },
        price: 179,
      },
      {
        name: {
          en: "Vindaloo",
          se: "Vindaloo",
        },
        description: {
          en: "A very strong dish from South India. Marinated with Cumin Clubs own spice mix.",
          se: "En mycket stark rätt från södra Indien. Marinad med Cumin Clubs egna kryddblandning.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 179,
            description: {
              en: null,
              se: null
            }
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 189,
          },
          {
            name: {
              en: "Småräkor",
              se: "Shrimps",
            },
            price: 169,
          },
          {
            name: {
              en: "Tiger Prawns",
              se: "Tigerräkor Prawns",
            },
            price: 199,
          },
          {
            name: {
              en: "Veg Vindaloo",
              se: "Veg Vindaloo Sek",
            },
            price: 169,
          },
          {
            name: {
              en: "OUMPH! Soy fillet Vegan New",
              se: "OUMPH! Sojafilé Vegon Ny",
            },
            price: 179,
            veg: true,
          },
        ],
      },

      {
        name: {
          en: "Tawa",
          se: "Tawa",
        },
        description: {
          en: "Cooked in a single pan with fresh spices including thyme, garlic and ginger.",
          se: "Tillagad i en enda panna med färska kryddor, bland annat timjan, vitlök och ingefära.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 179,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamb",
            },
            price: 189,
          },
          {
            name: {
              en: "Tiger/Scampi Prawns",
              se: "Tigerräkor/Scampi Prawns",
            },
            price: 199,
          },
          {
            name: {
              en: "Mixed Tawa",
              se: "Mixed Tawa",
            },
            price: 199,
          },
          {
            name: {
              en: "Paneer Tikka Tawa",
              se: "Paneer Tikka Tawa",
            },
            price: 179,
          },
          {
            name: {
              en: "OUMPH! Soy Fillet Vegan",
              se: "OUMPH! Sojafilé Vegan",
            },
            price: 179,
          },
        ],
      },
      {
        name: {
          en: "Ayurveda",
          se: "Ayurveda",
        },
        description: {
          en: "Ayurveda is a classical Indian life philosophy and healing art. At The Table Himalaya, we serve our ayurvedic dishes in a sauce of curry leaves, onion, mustard seeds, coconut, red chili and tamarind.",
          se: "Ayurveda är en klassisk indisk livsfilosofi och läkekonst. På The Table Himalaya serverar vi våra ayurveda-rätter i en sås på curryblad, lök, senapsfrön, kokos, röd chili och tamarin.",
        },
        sub: [
          {
            name: {
              en: "Paneer Tikki Tawa",
              se: "Paneer Tikki Tawa",
            },
            price: 179,
          },
         
          
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 179,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 189,
          },
          {
            name: {
              en: "Veg Ayurveda",
              se: "Veg Ayurveda",
            },
            price: 169,
          },
          {
            name: {
              en: "OUMPH! Soy Fillet Vegan",
              se: "OUMPH! Sojafilé Vegan",
            },
            price: 179,
          },
        ],
      },
      {
        name: {
          en: "Garlic Tikka Masala",
          se: "Garlic Tikka Masala",
        },
        description: {
          en: "Garlic Marinated and grilled chicken fillet with butter, cream and nuts in yogurt sauce.",
          se: "Vitlöks Marinerad och grillad kycklingfilé med smör, grädde och nötter i yoghurtsås.",
        },
        sub: [
          {
            name: {
              en: "Chicken Masala",
              se: "Kyckling Masala",
            },
            price: 169,
          },
          {
            name: {
              en: "Fillet of Lamb Masala",
              se: "Lammytterfilé Masala",
            },
            price: 199,
          },
          {
            name: {
              en: "Tiger/Scampi Prawns",
              se: "Tigerräkor/Scampi Prawns",
            },
            price: 199,
          },
          {
            name: {
              en: "Mixed Masala",
              se: "Mixed Masala",
            },
            description: {
              en: "Grilled chicken, lamb fillet and tiger prawns with butter, cream and nuts in yoghurt sauce.",
              se: "Grillad Kyckling, lammfilé och Tigerräkor med smör, grädde och nötter i yoghurtsås.",
            },
            price: 220,
          },
        ],
      },
      {
        name: {
          en: "Korai",
          se: "Korai",
        },
        description: {
          en: "Fresh paprika, onion, chili and coriander in a well-seasoned tomato sauce.",
          se: "Färsk paprika, lök, chili och koriander i välkryddad tomatsås.",
        },
        sub: [
          {
            name: {
              en: "Mixed Korai",
              se: "Mixed Korai",
            },
            price: 220,
          },
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },
          {
            name: {
              en: "Lamb Fillet",
              se: "Lammytterfilé",
            },
            price: 199,
          },
          {
            name: {
              en: "Tigerräkor/Scampi Prawns",
              se: "Tiger/Scampi Prawns",
            },
            price: 209,
          },
          {
            name: {
              en: "Veg",
              se: "Veg",
            },
            price: 169,
          },
        ],
      },
      {
        name: {
          en: "Madras Stew",
          se: "Madrasgryta",
        },
        description: {
          en: "South Indian stew with oriental spices.",
          se: "Sydindisk gryta med orientaliska kryddor.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 179,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 189,
          },
          {
            name: {
              en: "Small Shrimps",
              se: "Små Räkor/Shrimps",
            },
            price: 179,
          },
          {
            name: {
              en: "Tiger/Scampi Prawns",
              se: "Tigerräkor/Scampi Prawns",
            },
            price: 209,
          },
          {
            name: {
              en: "Veg Madras",
              se: "Veg Madras",
            },
            price: 169,
          },
          {
            name: {
              en: "OUMPH! Sojafilé Vegan Ny",
              se: "OUMPH! Soy Fillet Vegan New",
            },
            price: 179,
          },
        ],
      },
      {
        name: {
          en: "Paal",
          se: "Paal",
        },
        description: {
          en: "Curry dish with fresh habanero fruits, ginger and naga chili.",
          se: "Curryrätt med färska habanero frukter, ingefära samt naga chili.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 179,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 189,
          },

          {
            name: {
              en: "Tiger/Scampi Prawns",
              se: "Tigerräkor/Scampi Prawns",
            },
            price: 209,
          },
        ],
      },
      {
        name: {
          en: "The Table Himalayan Spinach",
          se: "The Table Himalaya Spenat",
        },
        description: {
          en: "Cooked with leaf spinach and coriander in tomato sauce.",
          se: "Tillagas med bladspenat och koriander i tomatsås.",
        },
      },
      {
        name: {
          en: "Daal Gost",
          se: "Daal Gost",
        },
        description: {
          en: "Cooked with mixed lentils and coriander in tomato sauce.",
          se: "Tillagas med blandade linser och koriander i tomatsås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 179,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 189,
          },

          {
            name: {
              en: "Chicken Adrak",
              se: "Chicken Adrak",
            },
            description: {
              en: "North Indian chicken stew with curry and distinct flavor of ginger.",
              se: "Nordindisk kycklinggryta med curry och distinkt smak av ingefära.",
            },
            price: 179,
          },
        ],
      },
    ],
  },
  thali: {
    source: "/thali-banner.jpeg",
    name: {
      en: "Thali Dishes",
      se: "Thali Rätter"
    },
    items: [
      {
        name: {
          en: "Vegan Thali",
          se: "Vegan Thali"
        },
        description: {
          en: "Vegan pakora, spinach vadji, dall, oumph(chaap), rice, salad and chapati bread.",
          se: "Vegansk pakora, spenat vadji, dall, oumph(chaap), ris, sallad och chapatibröd."
        },
        price: 199
      },
      {
        name: {
          en: "Ayurveda Thali",
          se: "Ayurveda Thali"
        },
        description: {
          en: "Three vegetarian dishes: okra palak paneer, mix-veg and dill, served with rice, naan and dahi vada.",
          se: "Tre vegetariska rätter: okra palak paneer, mix-veg och dill, serveras ris, naan och dahi vada."
        },
        price: 199
      },
      {
        name: {
          en: "Lamb Thali",
          se: "Lamm Thali"
        },

        description: {
          en: "Grilled lamb fillet, lamb sambal masala and steaks on lamb, served with rice, dahi vada and naan.",
          se: "Grillad lammytterfilé, lamm sambal-masala och biffar på lamm, serveras med ris, dahi vada och naan."
        },
        price: 225
      },
      {
        name: {
          en: "Chicken Thali",
          se: "Kyckling Thali"
        },

        description: {
          en: "Grilled chicken fillet, Chicken Tikka Masala and Chicken Basanti, served with rice, raita and garlic naan.",
          se: "Grillad kycklingfilé, kyckling Tikka Masala och kyckling Basanti, serveras med ris, raita och vitlöksnaan."
        },
        price: 189
      },
    ]
  },
  veg: {
    source: "/vegetarian-banner.jpg",
    name: {
      en: "Vegetarian/Vegan",
      se: "Vegetariska/Veganska"
    },
    items: [
      {
        name: {
          en: "Palak Paneer",
          se: "Palak Paneer"
        },
        description: {
          en: "Homemade cream cheese prepared with leaf spinach.",
          se: "Hemlagad färskost tillagad med bladspenat."
        },
        price: 179
      },
      {
        name: {
          en: "Paneer Tikka Masala",
          se: "Paneer Tikka Masala"
        },
        description: {
          en: "Homemade cheese with lentils and fresh coriander in a creamy sauce.",
          se: "Hemgjord ost med linser och färsk koriander i gräddig sås."
        },
        price: 169
      },
      {
        name: {
          en: "Okra Palak Paneer",
          se: "Okra Palak Paneer"
        },
        description: {
          en: "Green okra, leaf spinach with homemade cheese and creamy sauce.",
          se: "Grön okra, bladspenat med hemlagad ost och krämigt god sås.",
        },
        price: 169
      },
      {
        name: {
          en: "Matar Paneer",
          se: "Matar Paneer"
        },
        description: {
          en: "Green peas with homemade Indian cheese and fresh coriander in tomato and curry sauce.",
          se: "Gröna ärtor med hemgjord indisk ost och färsk korinder i tomat-och curry sås.",
        },
        price: 169
      },
      {
        name: {
          en: "Four in one (Aloo, saag, gobi, dal)",
          se: "Fyra i ett (aloo, saag, gobi, dal)"
        },
        description: {
          en: "Fried spinach with potatoes, cauliflower and yellow lentils.",
          se: "Stekt spenat med potatis, blomkål och gula linser.",
        },
        price: 169
      },
      {
        name: {
          en: "Shahi aloo",
          se: "Shahi aloo"
        },
        description: {
          en: "Eggplant and potatoes cooked with onions and oriental herbs.",
          se: "Aubergine och potatis tillagad med lök och orientaliska örter.",
        },
        price: 169
      },
      {
        name: {
          en: "Bengali sabzi",
          se: "Bengali sabzi"
        },
        description: {
          en: "Fried pumpkin, green papaya and eggplant with fresh ginger, garlic and coriander, marinated in cumin. Served with a traditional Bengali sauce",
          se: "Stekt pumpa, grön papaya och aubergine med färsk ingefära, vitlök och koriander, marinerad i kummin. Serveras med en traditionell bengalisk sås",
        },
        price: 169
      },
    ]
  },
  vegan: {
    name: {
      en: 'Vegan',
      se: "Vegan"
    },
    items: [
      {
        name: {
          en: "Saag Vendi Vadji",
          se: "Saag Vendi Vadji"
        },
        description: {
          en: "Fried spinach and okra with green chilli, onion, coriander and ginger in tomato sauce.",
          se: "Stekt spenat och okra med grön chili, lök, koriander och ingefära i tomatsås."
        },
        price: 175
      },
      {
        name: {
          en: "Vegan Kofte",
          se: "Vegan Kofte"
        },
        description: {
          en: "Vegetable balls cooked in sauce. Gluten free.",
          se: "Grönsaksbullar tillagade i sås. Glutenfri."
        },
        price: 159
      },
      
    ]
  },
  clay_oven: {
    source: "/clay-oven-banner.jpeg",
    name: {
      en: "Clay Oven",
      se: "Lerugn"
    },
    items: [
      {
        name: {
          en: "Tandoori Grill Sizzler",
          se: "Tandoori Grill Sizlar"
        },
        description: {
          en: "These dishes are grilled in our clay oven and served with stir-fried, fresh vegetables and tandoori sauce.",
          se: "Dessa rätter grillas i vår lerugn och serveras med wokade, färska grönsaker och tandoorisås."
        },
        sub: [
          {
            name: {
              en: "Chicken Grill",
              se: "Kyckling Grill"
            },
            price: 189
          },
          {
            name: {
              en: "Grill Fillet of Lamb",
              se: "Lammytterfile Grill"
            },
            price: 199
          },
          {
            name: {
              en: "Garlic Chicken Grill",
              se: "Vitlökskyckling Grill"
            },
            description: {
              en: "Chicken fillet marinated in garlic, ginger, kazu nuts, cream and fennel grilled in a clay oven and stir-fried fresh vegetables and sauce.",
              se: "Kycklingfilé marinerad i vitlök, ingefära, kazu nötter, grädde och fänkål grillad i lerugn och wokade färska grönsaker och sås."
            },
            price: 189
          },
          {
            name: {
              en: "Chili Chicken Grill",
              se: "Chili Kyckling Grill"
            },
            description: {
              en: "Chicken fillet marinated in garlic and ginger with pickled chili and fresh green chili grilled in a clay oven and stir-fried fresh vegetables and sauce.",
              se: "Kycklingfilé marinerad i vitlök och ingefära med inlagd chili och färsk grön chili grillad i lerugn och wokade färska grönsaker och sås."
            },
            price: 189
          },
          {
            name: {
              en: "Mixed Chicken Grill",
              se: "Blandad Kyckling Grill"
            },
            description: {
              en: "Chicken fillet marinated in tandoori, garlic and green chili, grilled in a clay oven and stir-fried fresh vegetables and sauce.",
              se: "Kycklingfilé marinerad i tandoori, vitlök och grön chili, grillad i lerugn och wokade färska grönsaker och sås."
            },
            price: 189
          },
          {
            name: {
              en: "Mughlai Shami Kabab Sizzler",
              se: "Mughlai Shami Kabab Sizlar"
            },
            description: {
              en: "Lamb with finely chopped onion, chilli, garlic, coriander and ginger, served with stir-fried vegetables and tandoori sauce.",
              se: "Lamm med finhackad lök, chili, vitlök, koriander och ingefära, serveras med wokade grönsaker och tandoorisås."
            },
            price: 189
          },
          {
            name: {
              en: "The Table Himalaya Mixed Grill",
              se: "The Table Himalaya Mixed Grill"
            },
            description: {
              en: "Grilled chicken, lamb fillet and stir-fried tiger prawns, fresh vegetables and tandoori sauce.",
              se: "Grillad kyckling, lammytterfilé och tigerräkor wokade, färska grönsaker och tandoorisås."
            },
            price: 220
          },
        ]
      },
    ]
  },
  mughlai_dishes: {
    source: "/mughlai-banner.jpg",
    name: {
      en: "Mughlai Dishes",
      se: "Mughlai Rätter"
    },
    items: [
      {
        name: {
          en: "Biryani",
          se: "Biryani"
        },
        description: {
          en: "Indian feast risotto with nutmeg, cloves, cardamom, coriander and ginger and saffron. Served with sauce and salad.",
          se: "Indisk fest-risotto med muskot, kryddnejlika, kardemumma, koriander och ingefära och saffran. Serveras med sås och sallad."
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling"
            },
            price: 189
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm"
            },
            price: 199
          },
          {
            name: {
              en: "Tiger/Scampi Prawns",
              se: "Tigerräkor/Scampi Prawns"
            },
            price: 209
          },
          {
            name: {
              en: "Fish",
              se: "Fisk"
            },
            price: 169
          },
          {
            name: {
              en: "Veg",
              se: "Veg"
            },
            price: 179
          },
        ],

      },
      {
        name: {
          en: "Korma",
          se: "Korma"
        },
        description: {
          en: "Prepared with crème fraîche, raisins, spices and cashew nuts in a mild sauce.",
          se: "Tillagas med crème fraîche, russin, kryddor och cashewnötter i en mild sås."
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling"
            },
            price: 189
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm"
            },
            price: 199
          },
          {
            name: {
              en: "Tiger/Scampi Prawns",
              se: "Tigerräkor/Scampi Prawns"
            },
            price: 209
          },
          {
            name: {
              en: "Veg Korma",
              se: "Veg Korma"
            },
            price: 175
          },
          {
            name: {
              en: "Mughlai Paneer Kofta",
              se: "Mughlai Paneer Kofta"
            },
            description: {
              en: "Homemade Indian cheese with crème fraîche, raisins, spices and cashew nuts in a mild sauce.",
              se: "Hemlagad indisk ost med crème fraîche, russin, kryddor och cashewnötter i en mild sås."
            },
            price: 189
          },
        ]
      }
      
    ]
  },
  bengali_ratter: {
    source: "/bengali-banner.jpg",
    name: {
      en: "Bengali Dishes",
      se: "Bengali Rätter"
    },
    items: [
      {
        name: {
          en: "Kala Bhuna Mangso",
          se: "Kala Bhuna Mangso",
        },
        description: {
          en: "Very traditional Bengali dish; slow cooked with oriental spices from Chittagong, Bangladesh's second largest city Traditional bengali dish, slow cooked with oriental spices, has its origins in Chittagong(Bangladesh)",
          se: "Mycket traditionell bengalisk rätt; långkok med orientaliska kryddor från Chittagong, Bangladesh näst största stad Traditional bengali dish, slow cooked with oriental spices, has its origins in Chittagong(Bangladesh)"
        },
        sub: [
          {
            name: {
              en: "Lamb",
              se: "Lamm"
            },
            price: 199
          }
        ]
      }
    ]
  },

  fish_and_seafood: {
    source: "/fish-banner.jpg",
    name: {
      en: "Fish and Seafood",
      se: "Fisk Och Skaldjur",
    },
    items: [
      {
        name: {
          en: "Seafood Curry",
          se: "Skaldjurscurry"
        },
        description: {
          en: "Traditionally Goan spiced tiger prawns, scampi, green clams, prawns, mussels, squid and crabsticks, cooked in fish sauce.",
          se: "Traditionellt Goankryddade tigerräkor, scampi, grön-musslor, räkor, musslor, bläckfisk och crabsticks, tillagad i fisksås."
        },
        price: 189
      },
      {
        name: {
          en: "Shrimp Palak",
          se: "Shrimp Palak"
        },
        description: {
          en: "Pumpkin and small prawns with leaf spinach and fresh coriander in tomato sauce.",
          se: "Pumpa och små räkor med bladspenat och färsk koriander i tomatsås."
        },
        price: 189
      },
      {
        name: {
          en: "Salmon Tikka Masala",
          se: "Lax Tikka Masala"
        },
        description: {
          en: "Salmon fillet cooked in tomato and onion sauce.",
          se: "Laxfilé tillagad i tomat och löksås."
        },
        price: 189
      },
    ]
  },

  accessories: {
    source: "/accessories-banner.jpg",
    name: {
      en: "Accessories and Bread",
      se: "TILLBEHOR OCH BROD"
    },
    items: [
      {
        name: {
          en: "Regular Naan",
          se: "regelbunden Naan"
        },
        price: 25
      },
      {
        name: {
          en: "Garlic Naan",
          se: "Garlic Naan"
        },
        description: {
          en: "Naan with garlic and coriander.",
          se: "Naan med vitlök och koriander."
        },
        price: 35
      },
      {
        name: {
          en: "Masala Naan",
          se: "Masala Naan"
        },
        description: {
          en: "Naan with garlic and coriander.",
          se: "Naan med vitlök och koriander."
        },
        price: 25
      },
      {
        name: {
          en: "Paneer Naan",
          se: "Paneer Naan"
        },
        description: {
          en: "Homemade cheese baked in naan",
          se: "Hemlagad ost inbakad i naan"
        },
        price: 35
      },
      {
        name: {
          en: "Potato Kulcha",
          se: "Potato Kulcha"
        },
        description: {
          en: "Potatoes baked in naan",
          se: "Potatis inbakad i naan"
        },
        price: 29
      },
      {
        name: {
          en: "Peshwari naan",
          se: "Peshwari naan"
        },
        description: {
          en: "Dates, cheese, coconut and almonds baked in naan",
          se: "Dadlar, ost, kokos, och mandel inbakade i naan"
        },
        price: 35
      },
      {
        name: {
          en: "Chapati",
          se: "Chapati"
        },
        description: {
          en: "Typical Indian bread baked on Indian wheat flour",
          se: "Typiskt indiskt bröd bakat på indiskt vetemjöl"
        },
        price: 35
      },
    ]
  },

  desserts_and_children: {
    source: "/dessert-banner.jpg",
    name: {
      en: "Desserts/Children's Menu",
      se: "EFTERRÄTTER/BARNMENY"
    },
    items: [
      {
        name: {
          en: "Children's Menu",
          se: "BARNMENY"
        },
        description: {
          en: "NOTE : All dishes are available with a vegetarian option. Served with rice and salad.",
          se: "NOTERA : Alla rätter finns med vegetariskt alternativ. Serveras med ris och sallad."
        },
        sub: [
          {
            name: {
              en: "Chicken Tikka Grill",
              se: "Kyckling Tikka Grill"
            },
            description: {
              en: "",
              se: ""
            },
            price: 99
          },
          {
            name: {
              en: "Chicken Korma",
              se: "Kyckling Korma"
            },
            price: 99
          },
          {
            name: {
              en: "Chicken Masala",
              se: "Kyckling Masala"
            },
            price: 99
          },
        ]
      },
      {
        name: {
          en: "Desserts",
          se: "Efterrätter"
        },
        sub: [
          {
            name: {
              en: "Kesar Pista Kulfi",
              se: "Kesar Pista Kulfi"
            },
            description: {
              en: "Traditional Indian ice cream flavored with roasted cashew nuts and saffron",
              se: "Traditionell indisk glass smaksatt med rostade cashewnötter och saffron"
            },
            price: 69
          },
          {
            name: {
              en: "Mango Lassi",
              se: "Mango Lassi"
            },
            description: {
              en: "Indian milkshake made with mango, yoghurt and sugar.",
              se: "Indisk milkshake gjörd på mango, yoghurt, och socker"
            },
            price: 49
          },
          {
            name: {
              en: "Ice Cream Sorbet",
              se: "Ice Cream Sorbet"
            },
            description: {
              en: "Mango and lime flavored ice cream",
              se: "Glass med smak av mango och lime"
            },
            price: 69
          },
          {
            name: {
              en: "Mango Juice",
              se: "Mango Juice"
            },
            price: 39
          },
          {
            name: {
              en: "Gulab Jamun",
              se: "Gulab Jamun"
            },
            price: 69
          },
        ]
      }
    ]
  }
  
};
