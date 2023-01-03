import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import {IoMdContact,IoMdThumbsUp,IoMdMegaphone    } from "react-icons/io";
import { logoSVG } from "../../assets";
import { ImFilesEmpty } from "react-icons/im";

import {
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout,MdOutlineSchool, MdOutlineOndemandVideo} from "react-icons/md";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const SidebarS = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label, to}) => (
                <SLinkContainer key={label}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "HomePage",
        icon: <AiOutlineHome />,
        to: "home",
        notification: 0,
    },
    {
        label: "Perfil",
        icon: <IoMdContact />,
        to: "infopersonal",
        notification: 0,
    },
    {
        label: "Información Académica",
        icon: <MdOutlineSchool />,
        to: "infoacademica",
        notification: 0,
    },
    {
        label: "Intereses",
        icon: <IoMdThumbsUp />,
        to: "intereses",
        notification: 0,
    },

    {
        label: "Video Presentación",
        icon: <MdOutlineOndemandVideo/>,
        to: "video",
        notification: 0,
    },
    {
        label: "Mis Postulaciones",
        icon: < ImFilesEmpty  />,
        to: "postulaciones",
        notification: 0,
    },

    {
        label: "Vacantes",
        icon: < IoMdMegaphone   />,
        to: "vacantes",
        notification: 0,
},

];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
        to: "configuration",
    },
    {
        label: "Logout",
        icon: <MdLogout />,
        to: "/logout",
    },
];

export default SidebarS;
