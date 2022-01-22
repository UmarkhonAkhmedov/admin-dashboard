import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import "./home.css"
import {userData} from "../../dummyData"

function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}

export default Home;

