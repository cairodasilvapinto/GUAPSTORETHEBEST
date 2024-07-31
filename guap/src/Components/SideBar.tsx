import { useState, useEffect } from 'react';
import React from 'react';
import { TiArrowLeftThick } from "react-icons/ti";
import { GiClothes } from "react-icons/gi";
import Logo from "../Assets/LogoSide.png";
import { BsSearch, BsChevronDown, BsCart2} from "react-icons/bs";
import { CgAdidas } from "react-icons/cg";
import { SiNike } from "react-icons/si";
import { MdShoppingCart } from "react-icons/md";
import { ChevronDown, ChevronLeft } from 'react-feather';

interface SidebarProps {
    // Adicione as propriedades necessárias aqui
}

const Sidebar: React.FC<SidebarProps> = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState<number | null>(null); // Estado para controlar o submenu aberto
    const [brandIcon, setBrandIcon] = useState(true); // Estado para controlar o ícone de BRANDS

    useEffect(() => {
        const interval = setInterval(() => {
            setBrandIcon(prevBrandIcon => !prevBrandIcon);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const Menus = [
        {
            title: "PRODUCTS",
            
            submenu: true,
            submenuItems: [
                {
                    title: "T-SHIRTS",
                },
                {
                    title: "SNEAKERS",
                },
                {
                    title: "PANTS",
                },
                {
                    title: "SHORTS",
                },
                {
                    title: "KITS",
                },
            ],
        },
        {
            title: "BRANDS",
            icon: brandIcon ? <CgAdidas /> : <SiNike />, // Use o estado para exibir o ícone intercalado
            submenu: true,
            submenuItems: [
                {
                    title: "ADIDAS",
                },
                {
                    title: "NIKE",
                },
                {
                    title: "TRAPSTAR",
                },
                {
                    title: "STUSSY",
                },
                {
                    title: "MINUS",
                },
            ],
        },
        {
            title: "CART",
            icon: <MdShoppingCart />,
        },
    ];
    const [activeMenu, setActiveMenu] = useState("");

    const handleMenuClick = (title: string) => {
        if (activeMenu === title) {
            setActiveMenu("");
        } else {
            setActiveMenu(title);
        }
    };

    const handleSubmenuClick = (index: number) => {
        if (submenuOpen === index) {
            setSubmenuOpen(null);
        } else {
            setSubmenuOpen(index);
        }
    };

    return (
        <div className="flex">
            <div className={`text-white bg-preto-claro h-screen p-5 pt-8 
            ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <ChevronLeft className={`bg-cinza text-white 
                text-3xl rounded-full absolute -right-3 top-9 
                border border-preto-claro cursor-pointer 
                ${!open && "rotate-180"}`} onClick={() => setOpen (!open)} 
                />
                    <div className="inline-flex">
                        <img src={Logo} alt="Logoside" className={
                        `cursor-pointer block float mr-2 duration-500 ${
                            open && "rotate-[360deg]"
                            }`} style={{ width: "50px", height: "", objectFit: "scale-down"}} />
                        <h1 className={`origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`} >
                        On The Scene
                        </h1>
                    </div>

                    <div className={`flex items-center rounded-md 
                    bg-cinza mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                        <BsSearch className={`text-white text-lg block 
                        float-left cursor-pointer ${open && "mr-2"}`} style={{ fontFamily: "sans-serif" }} />

                        <input type={"search"} placeholder="Search" 
                        className={`bg-cinza w-full text-white focus:outline-none
                        ${!open && "hidden"}`} style={{ fontFamily: "sans-serif" }}
                        />
                    </div>
                    
                    <ul className="pt-2 duration-300">
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={`text-white text-sm flex
                            items-center gap-x-4 cursor-pointer p-2
                            hover:bg-cinza rounded-md mt-2 duration-300`}>
                            <span className={`text-2xl block float-left duration-300 ${open && "visible"}`}>
                                {menu.icon ? menu.icon : <GiClothes />}  
                            </span>
                            <span className={`text-base font-medium flex-1 
                            duration-300 ${!open && "hidden duration-300"}`} onClick={() => handleMenuClick(menu.title)}>
                            {menu.title}
                            </span>
                            {menu.submenu && open && (
                                <ChevronDown className={`${submenuOpen === index && 
                                    "rotate-180"}`} onClick={() => handleSubmenuClick(index)} />
                            )}
                            </li>

                        {menu.submenu && submenuOpen === index && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItems, index) => (
                                    <li key={index} className={`text-white text-sm flex
                                    items-center gap-x-4 cursor-pointer p-2 px-5
                                    hover:bg-cinza rounded-md duration-300`}>
                                    {submenuItems.title}
                                </li>
                                ))}
                            </ul>
                            )}
                        </>
                    ))}
                    </ul>
                </div>
        </div>
    );
};

export default Sidebar;
