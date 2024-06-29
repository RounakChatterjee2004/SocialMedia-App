import Topbar from "../../components/topbar/topbaropbar";
import Sidebar from "../../components/sidebar/sidebaridebar";
import Feed from "../../components/feed/feed";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
