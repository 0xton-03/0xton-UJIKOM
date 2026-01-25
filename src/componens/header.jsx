"use client"
const Header = (props)=>{

   

    return(
        <div className="bg-sky-900 px-2 py-5 flex justify-between font-bold">
            {/* Header {props.nameWeb} */}
            <h1 className="text-3xl italic font-mono  text-white font-extrabold  ">
                🆁🄸🆉🄷🅾🄿
            </h1>
                <nav className="flex gap-4">
                    <a className="rounded-2xl font-extrabold px-8 text-white py-2 w-fit justify-between shadow-xl bg-black" href="">HOME</a>
                    <a className="rounded-2xl font-extrabold px-8 text-white py-2 w-fit justify-between shadow-xl bg-black" href="">SHOP</a>
                    <a className="rounded-2xl font-extrabold px-8 text-white py-2 w-fit justify-between shadow-xl bg-black" href="">ABOUT</a>
                </nav>
        </div>
    )
}


export default Header