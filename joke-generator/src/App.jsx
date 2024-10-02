import Heading from "./components/Heading";
import Joke from "./components/Joke";

function App() {
  return (
    <main className="h-screen bg-black text-white">
      <section className="flex flex-col items-center gap-12">
        <Heading title={"Random Joke Generator"}/>
        <Joke />
      </section>
    </main>
  );
}

export default App;
