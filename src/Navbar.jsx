import { Link } from "react-router-dom"; // import link component

export const Navbar = () => {
  return (
    <div>
      <div className="headtop">
      <Link to="/" className="logo"><h1>LOGO</h1></Link>
      <Link to="/login" className="signUp">SignUp/LogIn</Link>
      </div>
      <div className="Navbar">
        {/* using Link to adress the different pages like defined before in <Routes> */}
        <Link to="/"> Home </Link>
        <Link to="/animels"> Animels </Link>
        <Link to="/calculator"> Calculator </Link>
        <Link to="/storage"> Personal-Storage </Link>
      </div>
    </div>
  );
};
