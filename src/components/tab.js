import {Link} from "react-router-dom";

const Tab = (props) => {
    return (
        <div>
            <Link to={props.route}>SPAN</Link>
        </div>
    );
}

export default Tab;