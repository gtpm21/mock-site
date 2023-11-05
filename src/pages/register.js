import { useRouter } from "next/router";

export default function Register() {

    const router = useRouter()
    
    return (
        <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-orange-300 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Register</span>
            <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
                <form action="">
                    <label className="block">Username</label>
                    <input type="Email" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username" required=""/>
                    <label className="block">E-mail</label>
                    <input type="Email" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="E-mail" required=""/>
                    <label className="block">Password</label>
                    <input type="password" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="password" required=""/>
                    <label className="block">Confirm Password</label>
                    <input type="password" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="password" required=""/>
                    <button onClick={()=>router.push('/')} className="w-full mt-5 bg-orange-300 hover:bg-blue-200 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">Create Account</button>
                </form>
            </div>
        </div>
    )
}