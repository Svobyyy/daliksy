import Categories from "./components/Categories/Categories";
import Landing from "./components/Landing/Landing";
import Reference from "./components/Reference/Reference";
import Form from "./components/Form/Form"

export default function Home() {
  return (
    <main>
      <Landing />
      <Reference/>
      <Categories/>
      <Form/>
    </main>
  );
}
