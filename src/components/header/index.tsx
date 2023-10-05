"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./menu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageXOffset;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`flex items-center justify-between p-1 px-3 fixed top-0 w-full backdrop-blur transition text-white z-[100] ${
                    scrolled ? "bg-none" : "bg-transparent"
                }`}
            >
                <Link
                    href="/"
                    className="flex items-center font-bold text-xl hover:text-[var(--foreground)] group"
                >
                    <span className="animate-in slide-in-from-left fade-in duration-500 text-white">
                        tiagohll
                    </span>
                </Link>
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </header>
            <Menu state={isOpen} />
        </>
    );
}
