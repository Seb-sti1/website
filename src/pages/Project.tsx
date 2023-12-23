import { FC } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const Projects: FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <p>
          There will be all my projects here. I'm currently working to make it
          as clear and beautifull as possible !
        </p>
      </div>
      <Contact />
    </>
  );
};

export default Projects;
