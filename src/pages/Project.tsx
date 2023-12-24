import { FC } from "react";

import Topbar from "../components/Generics/Topbar";
import Footer from "../components/Generics/Footer";

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
      <Footer />
    </>
  );
};

export default Projects;
