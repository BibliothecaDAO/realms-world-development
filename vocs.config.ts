import { defineConfig } from "vocs";

export default defineConfig({
  title: "Realms World L3 Network",
  iconUrl: "/RealmsWorld.svg",
  logoUrl: "/RealmsWorld.svg",
  topNav: [
    { text: "Dojo", link: "https://dojoengine.org" },
    {
      text: "Realms World",
      link: "https://realms.world",
    },
    {
      text: "0.1.0",
      link: "https://github.com/cartridge-gg/realms-world",
    },
  ],
  font: {
    google: "Poppins",
  },
  sidebar: [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Wallets",
      link: "/browser-wallets",
    },
    {
      text: "Roadmap",
      link: "/roadmap",
    },
  ],
  editLink: {
    pattern:
      "https://github.com/BibliothecaDAO/realms-world-development/blob/main/dojo-book/docs/pages/:path",
    text: "Edit on GitHub",
  },
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  description: "A Multiverse of onchain games",
  sponsors: [
    {
      name: "Built in collaboration with",
      height: 60,
      items: [
        [
          {
            name: "Realms World",
            link: "https://realms.world",
            image: "/RealmsWorld.svg",
          },
          {
            name: "Cartridge",
            link: "https://cartridge.gg/",
            image: "/Cartridge.svg",
          },
        ],
        [
          {
            name: "Starknet",
            link: "https://starknet.io/",
            image: "/Starknet.svg",
          },
        ],
      ],
    },
  ],
});
