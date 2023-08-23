
import { Link } from "react-router-dom";
import mainimg from "../static/octopus1.png";

const MainInfo = () => 
{

    function HandleClick(way)
    {
            if (way === 'it')
            {
                const element = document.querySelector(".scroll__card__header__it");
                console.log(element);
                window.scroll({ 
                    left: 0, 
                    top: element.offsetTop - 50, 
                    behavior: 'smooth' });
            }
            if (way === 'lang')
            {
                const element = document.querySelector(".scroll__card__header__lang");
                console.log(element);
                window.scroll({ 
                    left: 0, 
                    top: element.offsetTop - 50, 
                    behavior: 'smooth' });
            }
            if (way === 'math')
            {
                const element = document.querySelector(".scroll__card__header__math");
                console.log(element);
                window.scroll({ 
                    left: 0, 
                    top: element.offsetTop - 50, 
                    behavior: 'smooth' });
            }
            if (way === 'phys')
            {
                const element = document.querySelector(".scroll__card__header__phys");
                console.log(element);
                window.scroll({ 
                    left: 0, 
                    top: element.offsetTop - 50, 
                    behavior: 'smooth' });
            }
    }

    return(
    <div> 
        <div className = "img__wrapper"> 
            <img src = {mainimg} className="img__container"/>
            <Link onClick = {() => HandleClick("it")}  className = "img__button__1"> IT </Link>
            <Link onClick = {() => HandleClick("math")}  className = "img__button__2"> Math </Link>
            <Link onClick = {() => HandleClick("phys")}  className = "img__button__3"> Phys </Link>
            <Link onClick = {() => HandleClick("lang")}  className = "img__button__4"> Lang </Link>
        </div>
        <div className="maininfo__wrapper"> 
            <div className = "maininfo__header__wrapper"> 
                <p className="maininfo__header"> Allterra - комьюнити опытных в своих областях ребят, которые готовы помочь тебе с:</p>
                <p className="maininfo__header"> дз </p>
                <p className="maininfo__header"> написанием работ  </p>
                <p className="maininfo__header"> изучением предметов </p>
                <p className="maininfo__header"> подготовкой к экзамену </p>
            </div>
            <div className = "scroll__wrapper"> 

                <div className = "scroll__card__wrapper"> 
                    <p className = "scroll__card__header__it"> Айти отделение </p>
                    <p className = "scroll__card__text"> 
                        В нашем IT отделе есть специалисты по:
                    </p>
                        <ul className="scroll__card__list"> 
                            <li className="scroll__list__item"> Python </li>
                            <li className="scroll__list__item"> C++ </li>
                            <li className="scroll__list__item"> Html / CSS </li>
                            <li className="scroll__list__item"> JavaScript </li>
                        </ul>
                </div>

                <div className = "scroll__card__wrapper"> 
                    <p className = "scroll__card__header__math"> Математическое отделение </p>
                    <p className = "scroll__card__text"> 
                        В нашем математический отделе есть специалисты по:
                    </p>
                        <ul className="scroll__card__list"> 
                            <li className="scroll__list__item"> Базовой математике </li>
                            <li className="scroll__list__item"> Математическому анализу </li>
                            <li className="scroll__list__item"> Высшей математике </li>
                            <li className="scroll__list__item"> Геометрии </li>
                        </ul>
                </div>

                <div className = "scroll__card__wrapper"> 
                    <p className = "scroll__card__header__phys"> Физическое отделение </p>
                    <p className = "scroll__card__text"> 
                        В нашем математический отделе есть специалисты по:
                    </p>
                        <ul className="scroll__card__list"> 
                            <li className="scroll__list__item"> Механике </li>
                            <li className="scroll__list__item"> Динамике </li>
                            <li className="scroll__list__item"> Оптике </li>
                            <li className="scroll__list__item"> Ядерной Физике </li>
                        </ul>
                </div>


                <div className = "scroll__card__wrapper"> 
                    <p className = "scroll__card__header__lang"> Лингвистическое отделение </p>
                    <p className = "scroll__card__text"> 
                        В нашем лингвистическом отделе есть специалисты по:
                    </p>
                        <ul className="scroll__card__list"> 
                            <li className="scroll__list__item"> Английскому </li>
                            <li className="scroll__list__item"> Немецкому </li>
                            <li className="scroll__list__item"> Китайскому </li>
                        </ul>
                </div>


            </div>
        </div>
    </div>
    );

}


export default MainInfo; 