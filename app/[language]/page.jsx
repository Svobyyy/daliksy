import data from "@/data.json";
import { notFound } from "next/navigation";
import Landing from "../components/Landing/Landing";
export default function Page({ params: { language } }) {
  if (language !== "en" && language !== "cz") {
    console.log("halo???");
    notFound();
  }

  return (
    <main>
      <Landing language={language} />
    </main>
  );
}

export async function generateStaticParams() {
  const languages = ["en", "cz"];

  const params = languages.map((language) => ({
    language,
  }));

  return params;
}
