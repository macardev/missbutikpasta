import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { cities } from "@/lib/city-data";

const data = cities.find((c) => c.slug === "tuzla-butik-pasta")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
  alternates: {
    canonical: `https://www.missbutikpasta.com/${data.slug}`,
  },
};

export default function Page() {
  return <CityPage data={data} />;
}
