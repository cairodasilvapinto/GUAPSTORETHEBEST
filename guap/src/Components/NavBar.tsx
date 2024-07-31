import React, { useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaTshirt } from "react-icons/fa";
import { PiSneakerFill } from "react-icons/pi";
import { GiShorts } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { GiCardboardBoxClosed } from "react-icons/gi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Defina o valor de largura para o modo "mobile" aqui
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifique a largura inicial da janela

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuOptions = [
    {
      text: "T-SHIRTS",
      icon: <FaTshirt />,
    },
    {
      text: "SNEAKERS",
      icon: <PiSneakerFill />,
    },
    {
      text: "PANTS",
      icon: <PiPantsFill />,
    },
    {
      text: "SHORTS",
      icon: <GiShorts />,
    },
    {
      text: "KITS",
      icon: <GiCardboardBoxClosed />,
    },
  ];

  return (
    <nav className="bg-balck">
      
      <div className="flex justify-center items-center text-white p-2">
        <div className="flex gap-4">
          <a href="" className="hover:text-gray-300">
            T-SHIRTS
          </a>
          <a href="" className="hover:text-gray-300">
            SNEAKERS
          </a>
          <a href="" className="hover:text-gray-300">
            PANTS
          </a>
          <a href="" className="hover:text-gray-300">
            SHORTS
          </a>
          <a href="" className="hover:text-gray-300">
            KITS
          </a>
          <a href="" className="hover:text-gray-300">
            <BsCart2 className="navbar-cart-icon" />
          </a>
        </div>
        {isMobile && (
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
        )}
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    </nav>
  );
};


export default Navbar;
