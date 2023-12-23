import {FC} from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import "./home.css";

const Home: FC = () => {
    return (
        <>
            <Navbar/>
            <div className="centered">
                <p>Hello, I'm Sébastien Kerbourc'h.
                    <br/>
                    <br/>
                    I am a engineering student, currently completing a double degree at <a
                        href="https://www.dtu.dk/english/">DTU</a> after two years at <a
                        href="https://www.ensta-paris.fr/">ENSTA Paris</a>.</p>
            </div>

            <Contact/>
        </>
    );
};

export default Home;
