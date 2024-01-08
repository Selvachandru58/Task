import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <div className='bg-[url("https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg")] bg-center bg-cover flex justify-center items-center h-screen'>
            <div className='w-96 p-6 rounded-md bg-gray-300'>

                <h1 className='text-3xl text-bold text-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-center'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>Login</h1>
                <hr className='mt-2'></hr>
                <div className='mt-4'>
                    <label for="username">UserName:</label>
                    <input type='text' className='border w-full px-1 py-1' placeholder='type email or phone'></input>
                </div>

                <div className='mt-4'>
                    <label for="username">Create password</label>
                    <input type='password' className='border w-full px-1 py-1' placeholder='type password'></input>
                </div>

                <div className='mt-4'>
                    <label for="username">Confrim password</label>
                    <input type='password' className='border w-full px-1 py-1' placeholder='type password'></input>
                </div>

                <div className='text-center mt-5'>
                    <Link to="/" className=' bg-white border border-white border-bold px-2 py-2 rounded-md hover:bg-red-400'>Sign up</Link>
                </div>

            </div>
        </div>
        </>
    )
}