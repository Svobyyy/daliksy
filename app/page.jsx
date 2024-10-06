import Categories from "./components/Categories/Categories";
import Landing from "./components/Landing/Landing";
import Reference from "./components/Reference/Reference";
import Form from "./components/Form/Form";
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Landing language="en" />
      <Reference language="en" />
      <Categories language="en" />
      <Form language="en" />
      <Footer language="en" />
    </main>
  );
}
