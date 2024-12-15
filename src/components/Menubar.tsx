import React from "react";

const Menubar = () => {
    return (
        <nav className="bg-[#101820] sticky top-0 flex w-full justify-between px-10 items-center h-16 p-6 gap-10 md:h-24">
            <img src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" alt="logo gojek"/>
            <div className="text-white hidden md:flex gap-10 font-bold">
                <a className="hover:underline" href="">Home</a>
                <a className="hover:underline" href="">Partner with us</a>
                <a className="hover:underline" href="">GoCorp</a>
                <a className="hover:underline" href="">Careers</a>
                <a className="hover:underline" href="">Company</a>
                <a className="hover:underline" href="">Products</a>
                <a className="hover:underline" href="">Blog</a>
                <a className="hover:underline" href="">Help</a>
                <a className="hover:underline" href="">EN</a>
            </div>
            <div className="flex flex-col gap-[4px] md:hidden">
                <span className="h-[2.5px] w-[25px] bg-white"></span>
                <span className="h-[2.5px] w-[25px] bg-white"></span>
                <span className="h-[2.5px] w-[25px] bg-white"></span>
            </div>

        </nav>
    )
}

export default Menubar