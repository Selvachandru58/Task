import { Link } from "react-router-dom";

export default function SignIn() {
    const server =()=>{
        alert("Login sucessfully")
    }
    return (
        <div className='bg-[url("https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg")] bg-center bg-cover flex justify-center items-center h-screen'>
            <div className='w-96 p-6 rounded-md bg-gray-300'>

                <h1 className='text-3xl text-bold text-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-center'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>Login</h1>
                <hr className='mt-2'></hr>
                <div className='mt-4'>
                    <label for="username" className="font-bold">UserName:</label>
                    <input type='text' className='border w-full rounded px-1 py-1 mt-2' placeholder='type email or phone'></input>
                </div>
                <div className='mt-4'>
                    <label for="username" className="font-bold">Password:</label>
                    <input type='password' className='border w-full rounded px-1 py-1 mt-2' placeholder='type password'></input>
                </div>
                <div className='mt-5 text-center'>
                    <button onClick={server} type='submit' className=' bg-white border border-white border-bold px-2 py-2 rounded-md hover:bg-red-400'><a href="https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_3k9hw8g8xg_e&adgrpid=1315017564951826&hvadid=82188862025546&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=143956&hvtargid=kwd-82189528023962:loc-90&hydadcr=14452_2334185"></a><a href="https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_3k9hw8g8xg_e&adgrpid=1315017564951826&hvadid=82188862025546&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=143956&hvtargid=kwd-82189528023962:loc-90&hydadcr=14452_2334185">Sign in</a></button>
                </div>
                <div className="mt-4 text-center">
                    <h1><Link to="signup"className="text-black no-underline hover:underline">create an account</Link></h1>
                </div>
                
                
            </div>
        </div>
    )
}
