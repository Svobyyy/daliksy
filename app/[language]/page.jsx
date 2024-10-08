
import Clients from "@/components/Clients/Clients";
import Landing from "@/components/Landing/Landing";
import { notFound } from "next/navigation";

export default function Page({ params: { language } }) {
  if (language !== "en" && language !== "cz") notFound();

  return (
    <main>
      <Landing language={language} />
      <Clients language={language} />
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
