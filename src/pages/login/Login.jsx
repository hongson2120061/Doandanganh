
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GoLock } from "react-icons/go";

export const LoginPage = () => {
    ////////////////////////////////////////////////////////////////////////////////////
    //Display an error message if the login fails.
    const [alert, setAlert] = useState(null);
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const emailLogin = event.target.emailLogin.value;
        const passwordLogin = event.target.passwordLogin.value;
        if (emailLogin && passwordLogin) {
            setAlert({
                content: "The information is valided",
                severity: "success"
            })
            setTimeout(() => {
                setAlert(null)
            }, 3000)
        }
        else if (!emailLogin && passwordLogin) {
            setAlert({
                content: "Email is not entered",
                severity: "error"
            })
            setTimeout(() => {
                setAlert(null)
            }, 3000)
        }
        else if (emailLogin && !passwordLogin) {
            setAlert({
                content: "Password is not entered",
                severity: "error"
            })
            setTimeout(() => {
                setAlert(null)
            }, 3000)
        }
        else {
            setAlert({
                content: "Email  and Password are not entered",
                severity: "error"
            })
            setTimeout(() => {
                setAlert(null)
            }, 3000)
        }

    }
    // End display an error message if the login fails.
    ////////////////////////////////////////////////////////////////////////////////////
    //Handle input for the email field in the interface
    const [isContentInputEmail, setIsContentInputEmail] = useState(null);
    const handleChangeInputEmailValue = (event) => {
        event.preventDefault();
        const content = event.target.value;
        if (content.length === 0 || content === '') {
            setIsContentInputEmail(null);
        }
        else if (content) {
            setIsContentInputEmail(content);           
        }
    }
    const [isFocusInputEmail, setIsFocusInputEmail] = useState(null);
    const handleOnFocusInputEmail = () => {
        setIsFocusInputEmail(true);
    }
    const handleOnblurInputEmail = () => {
        if (isContentInputEmail === null || isContentInputEmail === '') {
            setIsFocusInputEmail(false);
        }
    }
    const [isMouseInputEmail, setIsMouseInputEmail] = useState(null);
    const handleOnMouseOverInputEmail = () => {
        setIsMouseInputEmail(true);
    }
    const handleOnMouseLeaveInputEmail = () => {
        setIsMouseInputEmail(false);
    }
    ////////End email
    
    ////////////////////////////////////////////////////////////////////////////////////
    ////Password
    //Handle input for the password field in the interface
    const [isContentInputPassword, setIsContentInputPassword] = useState(null);
    const handleChangeInputPasswordValue = (event) => {
        event.preventDefault();
        const content = event.target.value;
        if (content.length === 0 || content === '') {
            setIsContentInputPassword(null);
        }
        else if (content) {
            setIsContentInputPassword(content);           
        }
    }
    const [isFocusInputPassword, setIsFocusInputPassword] = useState(null);
    const handleOnFocusInputPassword = () => {
        setIsFocusInputPassword(true);
    }
    const handleOnblurInputPassword = () => {
        if (isContentInputPassword === null || isContentInputPassword === '') {
            setIsFocusInputPassword(false);
        }
    }
    const [isMouseInputPassword, setIsMouseInputPassword] = useState(null);
    const handleOnMouseOverInputPassword = () => {
        setIsMouseInputPassword(true);
    }
    const handleOnMouseLeaveInputPassword = () => {
        setIsMouseInputPassword(false);
    }
    ////////End Password


    return (
        <>
            <div className="text-center mb-[30px] mt-[100px] " >
                <form
                    className="border border-[2px] border-[#00f] rounded-[20px]   w-[450px] px-[30px] pt-[30px] pb-[50px]  mx-auto  mt-[20px] mb-[20px]  "
                    onSubmit={handleSubmitLogin}
                >
                    <p className="font-[700] text-[32px] mb-[30px] ">
                        LOGIN ACCOUNT
                    </p>

                    {/*                    
                         //Display an error message if the login fails.
                    */}
                    {alert && (
                        <div
                            className={
                                "text-[18px] mb-[20px] rounded-[5px] px-[10px] py-[4px] text-left   fixed top-[5px] right-[0px]  inline-block w-[350px]  "
                                + (alert.severity === "success" ? " bg-[#EDF7ED] " : "bg-[#FDEDED] ")
                            }

                        >
                            {(
                                alert.severity === "success" ?
                                        < SiTicktick
                                            style={{ 
                                                display: "inline-block", 
                                                verticalAlign: 'middle', 
                                                color: "#408944", 
                                                marginRight: "15px" 
                                            }}
                                        />
                                    :
                                        <MdErrorOutline
                                            style={{
                                                display: "inline-block",
                                                verticalAlign: 'middle', 
                                                color: "#D74141",
                                                marginRight: "15px" 
                                            }}
                                        />
                            )}
                            <span style={{ 
                                color: (alert.severity === "success" ? "#18481a" : "#5F2120"),
                                 display: 'inline-block', verticalAlign: 'middle' 

                            }}>
                                {alert.content}
                            </span>
                        </div>
                    )}
                    {/*                    
                         //Display an error message if the login fails.
                    */}

                    {/*                    
                         //Display an input box to enter email address.
                    */}

                    <div className="relative  mb-[20px] "
                        onMouseOver={handleOnMouseOverInputEmail}
                        onMouseLeave={isContentInputEmail != null ? () => { } : handleOnMouseLeaveInputEmail}
                    >
                        <input
                            className = {`  
                                border outline-0  w-full rounded-[7px] 
                                py-[10px] pl-[20px] pr-[30px] 
                                placeholder-transparent  focus:placeholder-slate-400
                                invalid:text-pink-600
                                invalid:border-pink-500
                                focus:border-[#00f]                            
                                shadow-sm bg-[#fff]            
                            `}
                            name='emailLogin'
                            type="email"
                            placeholder="Levana@gmail.com"
                            id="inputEmail"
                            defaultValue={isContentInputEmail}
                            onChange={handleChangeInputEmailValue}
                            onBlur={handleOnblurInputEmail}
                            onFocus={handleOnFocusInputEmail}
                        />
                        <label
                            forhtml="inputEmail"
                            className={`
                                absolute left-[5px] rounded-[10px]
                                transition-all duration-300    
                                bg-white px-[5px] py-[1px] 
                                text-[18px]  font-[500]                               
                                ${(isContentInputEmail | isFocusInputEmail | isMouseInputEmail) ? "top-[-35%] text-[#00f]" : "top-[18%] text-[#aaa]"}                               
                            `}
                            onClick={handleOnFocusInputEmail}
                            onMouseEnter={handleOnFocusInputEmail}
                            onMouseLeave={handleOnblurInputEmail}
                        >
                            Email
                        </label>
                        <AiOutlineUser 
                            className="text-[20px] absolute top-[12px] right-[22px] " 
                        />
                    </div>
                    {/*                    
                         //Display an input box to enter email address.
                    */}

                    <br />                    

                    {/*                    
                         //Display an input box to enter password.
                    */}
                    <div
                        className="relative  mb-[20px] "
                        onMouseOver={handleOnMouseOverInputPassword}
                        onMouseLeave={isContentInputPassword != null ? () => { } : handleOnMouseLeaveInputPassword}
                    >
                        <input
                            className = {`border outline-0  w-full rounded-[7px] 
                                py-[10px] pl-[20px] pr-[30px] 
                                placeholder-transparent  focus:placeholder-slate-400
                                invalid:text-pink-600
                                invalid:border-pink-500
                                focus:border-[#00f]                            
                                shadow-sm bg-[#fff]
                            `}
                            name = "passwordLogin"
                            type = "password"
                            autoComplete = "false"
                            id="inputPassword"
                            defaultValue={isContentInputPassword}
                            onChange={handleChangeInputPasswordValue}
                            onBlur={handleOnblurInputPassword}
                            onFocus={handleOnFocusInputPassword}
                        />
                        <label
                            forhtml="inputPassword"
                            className={`
                                absolute left-[5px] 
                                transition-all duration-300    
                                bg-white px-[5px] py-[1px] 
                                text-[18px]  font-[500]                               
                                ${(isContentInputPassword | isFocusInputPassword | isMouseInputPassword) ? "top-[-35%] text-[#00f]" : "top-[18%] text-[#aaa]"}                                 
                                rounded-[10px]
                            `}
                            onClick={handleOnFocusInputPassword}
                            onMouseEnter={handleOnFocusInputPassword}
                            onMouseLeave={handleOnblurInputPassword}
                        >
                            Password
                        </label>
                        <GoLock className="text-[20px] absolute top-[12px] right-[22px] " />
                    </div>
                    <br />

                    {/*                    
                         //Display an input box to enter password.
                     */}


                    <div className="flex justify-between items-center  "   >
                        <div className="flex items-center"  >
                            <input id="savePassword" type="checkbox" />
                            <label
                                forhtml="savePassword"
                                className="text-[#666] inline-block ml-[10px] "
                            >
                                Remember me
                            </label>
                        </div>
                        <div>
                            <a href="#" className="text-[14px] underline text-[#00f] " >
                                Forget password?
                            </a>
                        </div>
                    </div>
                    <br />
                    <button
                        className="text-[22px] font-[700] bg-[#00f] text-white p-[12px] rounded-[12px] w-full mb-[20px] shadow-lg"
                    >
                        Login
                    </button>
                    <div>
                        <span>
                            Don't have an account?
                        </span>
                        <a href="#" className="text-[#00f] font-[600] inline-block ml-[7px] "  >
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}