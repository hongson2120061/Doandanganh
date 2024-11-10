import{Link,NavLink} from "react-router-dom"
import { GiStrawberry } from "react-icons/gi";
export const Header=()=>{
    return (
        <>
            <header className ="header">
                <h2 className ="inner-logo">
                    <Link to ="/" className= "flex">
                        <span>
                            <GiStrawberry 
                                style={{                                
                                    color: "#9999e5"                        
                                }}
                            />
                        </span>                       
                        <span className = "text-[20px] text-[#3333ff] ">XFARM</span>
                    </Link>
                </h2>
                <ul className ="inner-menu">
                    <li>
                        <NavLink to="/">
                        Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">
                        Đăng ký</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                        Đăng nhập</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}