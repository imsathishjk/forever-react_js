import { useState } from "react";

export const Login = () => {
    const [login, setLogin] = useState('Login');
    return (
        <div className="max-w-[450px] m-auto mt-[80px] h-[60vh]">
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-center gap-5">
                    <hr className="h-1 w-5 bg-black" />
                    <h1 className="font-[Prata] text-2xl sm:text3xl md:text-4xl">{login}</h1>
                    <hr className="h-1 w-5 bg-gray-500" />
                </div>
                <div>
                    {login === 'Login' ? "" : <div className="border border-gray-300 py-3 px-2  ">
                        <input type="text" placeholder="Enter your name" className="border-none outline-none w-full " />
                    </div>}
                    <div className="border border-gray-300 py-3 px-2 mt-5  ">
                        <input type="email" placeholder="Enter your e-mail" className="border-none outline-none w-full " />
                    </div>
                    <div className="border border-gray-300 py-3 px-2 mt-5  ">
                        <input type="password" placeholder="Enter your password" className="border-none outline-none w-full " />
                    </div>
                    <div className="flex justify-between mt-5">
                        <p className="text-[14px] sm:text-[16px] font-medium text-gray-500">{login === 'Login' ? `Don't have an account ?` : "Already have an account ?"}</p>
                        {login === 'Login' ? <button className="text-[14px] sm:text-[16px] font-medium" onClick={() => setLogin('Sign Up')}>{login === 'Login' ? 'Sign Up' : "Login"}</button> :
                            <button className="text-[14px] sm:text-[16px] font-medium" onClick={() => setLogin('Login')}>{login === 'Login' ? 'Sign Up' : "Login"}</button>
                        }
                    </div>
                    <div className="mt-5 flex justify-center items-center">
                        <button className="bg-black text-white py-3 px-6 text-[16px] font-medium cursor-pointer transition-all ease-in-out duration-500 border hover:border-black hover:bg-transparent hover:text-black">{login}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};