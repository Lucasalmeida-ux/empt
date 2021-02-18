import Link from 'next/link'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'

export default function Header() {
    const [toogleMenu, setToogleMenu] = useState(false);
    function openMenu(e) {
        e.preventDefault();
        setToogleMenu(!toogleMenu);
        console.log('toogleMenu', toogleMenu)
    }
    return (
        <header className="flex justify-between bg-white p-2 shadow-md">
            <div className="inline-block p-1 md:p-2">
                <a className="pr-3 md:hidden ">
                    <FaBars onClick={openMenu} className="text-gray-300 text-lg inline-block" />
                </a>
                <Link href="/"><a><img src="/logo.png" className="w-25 h-7 md:w-25 md:h-8 inline-block" alt="BETBOL logo" /></a></Link>

            </div>
            <div>
                <nav className={(toogleMenu ? 'block' : 'hidden') + ' bg-white md:bg-transparent divide-y-2 md:divide-none z-10 fixed md:static top-10 left-0 md:inline-block md:p-3'}>
                    <item className="w-screen bg-white block md:inline">
                        <Link href="/solutions/comercio">
                            <a className="transition-colors text-gray-400 hover:text-blue-400 mr-5 uppercase text-sm md:font-bold px-4">Soluções para comercio</a>
                        </Link>
                    </item>
                    <item className="w-screen bg-white block md:inline">
                        <Link href="/solutions/distribuidor">
                            <a className="transition-colors text-gray-400 hover:text-blue-400 mr-5 uppercase text-sm md:font-bold px-4">Soluções para distribuidoras</a>
                        </Link>
                    </item>
                    <item className="w-screen bg-white block md:inline">
                        <Link href="/contact">
                            <a className="transition-colors text-gray-400 hover:text-white uppercase mr-5 md:py-2 px-4 md:font-semibold rounded-md md:bg-gray-100 hover:bg-blue-400">Orçamento</a>
                        </Link>
                    </item>
                </nav>
            </div>
        </header>
    )
}