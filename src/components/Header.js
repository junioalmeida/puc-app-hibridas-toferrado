import { React } from "react";

const Header = (props) => {
    return (
        <header className='headerBar'>
            <div className='appName'>To Ferrado</div>
            <div className='badge warning'>
                <span id="state">{props.sizePendingTasks}</span>
            </div>
        </header>
    );
}

export default Header;