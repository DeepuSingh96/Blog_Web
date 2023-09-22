
import CustomNavbar from "./CustomNavbar";


const Base=({title="welcome to our website",Children})=>{
    return(
        <div className="containe_fluid">
        <CustomNavbar/>
        {Children}
        </div>
    );
};

export default Base;