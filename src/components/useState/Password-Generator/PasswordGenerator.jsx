import { useState, useCallback, useEffect, useRef } from 'react';
import './PasswordGenerator.css';

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setcharAllowed] = useState(false);
    const [password, setPassword] = useState();

    /* use Ref Hook this is used to take the reference */
    const passwordRef = useRef(null)

    /* Use of useCallback hook. This hook is used to cache the
       method and this is mostly used to optimize the performance 
       of the method depending on the dependency array which is passed to it */
    const passwordGeneratorFunction = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:'";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])

    /* Use Effect Hook is used run, when there is any change detected 
       in its dependency array
    */
    useEffect(() => {
        passwordGeneratorFunction()
    }, [length, numberAllowed, charAllowed, passwordGeneratorFunction])

    return (
        <>
            <h3>Password Generator Component making use of | useState | useRef | useCallback | useEffect</h3>
            <div className='w-full max-w-md mx-auto rounded-lg px-4 my-12 py-4 text-orange-500 bg-gray-700'>
                <div className=' rounded-lg px- my-3 text-orange-500 bg-white py-3 px-4 my-2 mx-2'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='passoword'
                        readOnly
                        ref={passwordRef}
                    />
                    <button className='outline-none text-blue-500 bg-black-700'
                    onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input type="range" min={6} max={100} value={length} className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }} />
                        <label >Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox"
                            defaultChecked={numberAllowed}
                            id='numberInput'
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }} />
                        <label >Number Allowed</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type="checkbox"
                            defaultChecked={charAllowed}
                            id='numberInput'
                            onChange={() => {
                                setcharAllowed((prev) => !prev);
                            }} />
                        <label >Characters Allowed</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator