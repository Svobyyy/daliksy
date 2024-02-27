import Categories from "./components/Categories/Categories";
import Landing from "./components/Landing/Landing";
import Reference from "./components/Reference/Reference";

export default function Home() {
  return (
    <main>
      <Landing />
      <Reference/>
      <Categories/>
    </main>
  );
}
