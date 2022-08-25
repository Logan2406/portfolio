import NavBar from "../Navbar"
import particlesConfig from "../config/particleConfig";

const HomeLayout=({children})=>
{
    return(
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default HomeLayout;