// import FlightSearchBox from "./components/FlightSearchBox";
import SwitchSearch from './components/SwitchSearch';
import backgroundImage from '../../assets/sunset-beach.jpg';

function Home() {
  return (
    <div style={{position: "static", height: "2000px"}}>
      {/*<FlightSearchBox/>*/}
      <img src={backgroundImage} style={{width: '100%'}} alt="background-home"/>
      <SwitchSearch/>
    </div>
  )
}

export default Home;