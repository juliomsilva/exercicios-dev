import "../Home/Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
export default function Home() {
  return (
    <div>
      <div id="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
