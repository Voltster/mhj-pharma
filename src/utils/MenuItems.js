export const menuItems = [
  { title: "Home" },
  { title: "about" },
  {
    title: "Products",
    submenu: [
      {
        title: "export",
        submenu: [
          { title: "Injections" },
          {
            title: "Oral Solids",
            submenu: [{ title: "Tablets" }, { title: "Capsules" }],
          },
          { title: "Oral Liquids" },
          { title: "Infusions" },
          { title: "OTC" },
        ],
      },
      { title: "Domestic", submenu: [{ title: "Pediatrics" }] },
    ],
  },
  {
    title: "Technology",
    submenu: [
      { title: "Research & Development" },
      { title: "Quality Control" },
    ],
  },
  { title: "Global Presence" },
];
