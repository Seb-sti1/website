import {FC} from "react";
import "./error.css";

const ServiceUnavailable: FC = () => {
    return (
        <div id="error">
            <p>
                An error has occurred. . .
                <br/>
                The resource could not be found.
            </p>
        </div>
    );
};

export default ServiceUnavailable;
