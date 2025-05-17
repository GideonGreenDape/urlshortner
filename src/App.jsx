import Header from "./component/header";
import Intro from "./component/intro";
import ShortenURL from "./component/form";

function App() {
  return (
    <main className="bg-joshua h-screen ">
      <Header />
      <div className="mt-[40px] flex flex-row w-screen pl-[60px]  items-start gap-6 ">
        <ShortenURL />
        <Intro />
      </div>
    </main>
  );
}

export default App;
