import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maisie Paw Prints",
    short_name: "Maisie Paw Prints",
    description: "Custom products and paw-some creations.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/images/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
