import FirstBlock from "../components/HomePage/FirstBlock";
import SecondBlock from "../components/HomePage/SecondBlock";
import ThirdBlock from "../components/HomePage/ThirdBlock";
export default function Home() {
  return (
    <div className={"flex flex-col bg-red-500"}>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      
    </div>
  );
}
