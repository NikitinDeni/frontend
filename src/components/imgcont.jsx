import mainimg from "../static/octopus1.png";


const MainImg = () => 
{
    return(
        <div className = "img__wrapper"> 
            <img src = {mainimg} className="img__container"/>
            <button className="img__button__1"> IT </button>
            <button className="img__button__2"> Lang </button>
            <button className="img__button__3"> Math </button>  
            <button className="img__button__4"> Phys </button>  
        </div>
    );
}

export default MainImg;