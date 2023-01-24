import "./LogIn.css";


export const LogIn = () => {

    return (
      <div className="LogIn-Box">
        <div className="Flex-Box SignUp">
            <h3>SignUp</h3>
            <li>
                <input type="email" name="" id="" placeholder="Email"/>
            </li>
            <li>
                <input type="password" name="" id="" placeholder="Create Password"/>
            </li>
            <li>
                <input type="password" name="" id="" placeholder="Confirm Password"/>
            </li>
            <li>
            <button>SignUp</button>
            </li>
        </div>
        <div className="Flex-Box LogIn">
            <h3>LogIn</h3>
            <li>
                <input type="email" name="" id="" placeholder="Email"/>
            </li>
            <li>
                <input type="password" name="" id="" placeholder="Create Password"/>
            </li>
            <li>
            <button>LogIn</button>
            </li>
        </div>
      </div>
    );
};
