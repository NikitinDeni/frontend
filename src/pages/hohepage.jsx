
import NavBar from "../components/navbar";
import MainImg from "../components/imgcont";
import MainInfo from "../components/maininfo";


const HomePage = () => 
{

    return(
    <div className="homepage__wrapper"> 
        <NavBar /> 
        <MainImg/> 
        <MainInfo/>
    </div>
    );
}

export default HomePage;