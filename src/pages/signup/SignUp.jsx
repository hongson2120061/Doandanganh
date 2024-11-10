import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { GoMail } from "react-icons/go";

export const SignUpPage = () => {
    ////////////////////////////////////////////////////////////////////////////////////
    //Display an error message if the login fails.
    const [alert, setAlert] = useState(null);
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const emailLogin = event.target.emailLogin.value;
        const passwordLogin = event.target.passwordLogin.value;
        const confirmPasswordLogin = event.target.confirmPasswordLogin.value;
        if (emailLogin && passwordLogin && confirmPasswordLogin) {
            if (passwordLogin === confirmPasswordLogin) {
                setAlert({
                    content: "The information is valided",
                    severity: "success"
                })
            }
            else {
                setAlert({
                    content: "The password and confirmation password do not match",
                    severity: "error"
                })
            }
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


    ////////////////////////////////////////////////////////////////////////////////////
    ////Confirm Password
    //Handle input for the password field in the interface
    const [isContentInputConfirmPassword, setIsContentInputConfirmPassword] = useState(null);
    const handleChangeInputConfirmPasswordValue = (event) => {
        event.preventDefault();
        const content = event.target.value;
        if (content.length === 0 || content === '') {
            setIsContentInputConfirmPassword(null);
        }
        else if (content) {
            setIsContentInputConfirmPassword(content);
        }
    }
    const [isFocusInputConfirmPassword, setIsFocusInputConfirmPassword] = useState(null);
    const handleOnFocusInputConfirmPassword = () => {
        setIsFocusInputConfirmPassword(true);
    }
    const handleOnblurInputConfirmPassword = () => {
        if (isContentInputConfirmPassword === null || isContentInputConfirmPassword === '') {
            setIsFocusInputConfirmPassword(false);
        }
    }
    const [isMouseInputConfirmPassword, setIsMouseInputConfirmPassword] = useState(null);
    const handleOnMouseOverInputConfirmPassword = () => {
        setIsMouseInputConfirmPassword(true);
    }
    const handleOnMouseLeaveInputConfirmPassword = () => {
        setIsMouseInputConfirmPassword(false);
    }
    ////////End Confirm Password


    return (
        <>
            <div className="text-center mb-[30px] mt-[100px] " >
                <form
                    className="border border-[2px] border-[#00f] rounded-[20px]   w-[450px] px-[30px] pt-[30px] pb-[20px]  mx-auto  mt-[20px] mb-[20px]  "
                    onSubmit={handleSubmitLogin}
                >
                    <p className="font-[700] text-[32px] mb-[30px] ">
                        REGISTER ACCOUNT
                    </p>

                    {/*                    
                         //Display an error message if the login fails.
                    */}
                    {alert && (
                        <div
                            className={
                                "text-[18px] mb-[20px] rounded-[5px] px-[10px] py-[4px] text-left   fixed top-[5px] right-[0px]  inline-block w-[500px] "
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
                            className={`  
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
                            required
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
                        <GoMail
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
                            className={`
                                border outline-0  w-full rounded-[7px] 
                                py-[10px] pl-[20px] pr-[30px] 
                                placeholder-transparent  focus:placeholder-slate-400
                                invalid:text-pink-600
                                invalid:border-pink-500
                                focus:border-[#00f]                            
                                shadow-sm bg-[#fff]
                            
                            `}
                            name='passwordLogin'
                            type="password"
                            id="inputPassword"
                            autoComplete = "false"
                            defaultValue={isContentInputPassword}
                            onChange={handleChangeInputPasswordValue}
                            onBlur={handleOnblurInputPassword}
                            onFocus={handleOnFocusInputPassword}
                            required
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
                    {/*                    
                         //Display an input box to enter password.
                    */}
                    <br />
                    {/*                    
                         //Display an input box to enter  Confirm password.
                    */}
                    <div
                        className="relative  mb-[20px] "
                        onMouseOver={handleOnMouseOverInputConfirmPassword}
                        onMouseLeave={isContentInputConfirmPassword != null ? () => { } : handleOnMouseLeaveInputConfirmPassword}
                    >
                        <input
                            className={`
                                border outline-0  w-full rounded-[7px] 
                                py-[10px] pl-[20px] pr-[30px] 
                                placeholder-transparent  focus:placeholder-slate-400
                                invalid:text-pink-600
                                invalid:border-pink-500
                                focus:border-[#00f]                            
                                shadow-sm bg-[#fff]
                            
                            `}
                            name='confirmPasswordLogin'
                            type="password"
                            id="inputConfirmPassword"
                            autoComplete = "false"
                            defaultValue={isContentInputConfirmPassword}
                            onChange={handleChangeInputConfirmPasswordValue}
                            onBlur={handleOnblurInputConfirmPassword}
                            onFocus={handleOnFocusInputConfirmPassword}
                            required
                        />
                        <label
                            forhtml="inputConfirmPassword"
                            className={`
                                absolute left-[5px] 
                                transition-all duration-300    
                                bg-white px-[5px] py-[1px] 
                                text-[18px]  font-[500]                               
                                ${(isContentInputConfirmPassword | isFocusInputConfirmPassword | isMouseInputConfirmPassword) ? "top-[-35%] text-[#00f]" : "top-[18%] text-[#aaa]"}                                 
                                rounded-[10px]
                            `}
                            onClick={handleOnFocusInputConfirmPassword}
                            onMouseEnter={handleOnFocusInputConfirmPassword}
                            onMouseLeave={handleOnblurInputConfirmPassword}
                        >
                            Confirm password

                        </label>
                        <GoLock className="text-[20px] absolute top-[12px] right-[22px] " />
                    </div>
                    <br />
                    {/*                    
                         //Display an input box to enter  Confirm password.
                    */}

                    <button
                        className="text-[22px] font-[700] bg-[#00f] text-white p-[12px] rounded-[12px] w-full mb-[20px] shadow-lg"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    );
}