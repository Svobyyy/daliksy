import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Landing from "@/components/Landing/Landing";
import Clients from "@/components/Clients/Clients";

export default function Home() {
  return (
    <main>
      <Landing language="en" />
      <References language={language} />
      <Clients language="en" />
      <Categories language="en" />
      <Form language="en" />
      <Footer language="en" />
    </main>
  );
}
