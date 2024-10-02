import Heading from "./components/Heading";
import Input from "./components/Input";

function App() {
  return (
    <main className="h-screen bg-black text-white">
      <Heading title={"Password Validator"} />
      <Input type={"password"}/>
    </main>
  );
}

export default App;
