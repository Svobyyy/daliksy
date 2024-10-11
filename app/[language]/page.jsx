import Categories from "@/components/Categories/Categories";
import Clients from "@/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Landing from "@/components/Landing/Landing";
import References from "@/components/References/References";
import { notFound } from "next/navigation";

export default function Page({ params: { language } }) {
  if (language !== "en" && language !== "cz") notFound();

  return (
    <main>
      <Landing language={language} />
      <References language={language} />
      <Clients language={language} />
      <Categories language={language} />
      <Form language={language} />
      <Footer language={language} />
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
