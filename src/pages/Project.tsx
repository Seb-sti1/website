import { FC } from "react";

import Contact from "../components/Contact";
import Topbar from "../components/Generics/Topbar";

const Projects: FC = () => {
  return (
    <>
      <Topbar />
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
