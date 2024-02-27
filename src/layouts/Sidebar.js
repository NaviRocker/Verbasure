import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import DisplayAvatarBar from "./DisplayAvatarBar";
const navigation = [
  {
    title: "Home",
    href: "/home",
    icon: "bi bi-house",
  },
  {
    title: "Story-line",
    href: "/readmodule",
    icon: "bi bi-speedometer2",
  },
 
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: "bi bi-patch-check",
  },
  {
    title: "Road Map",
    href: "/roadmap",
    icon: "bi bi-patch-check",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <>
    <div className="">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg ">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link sidebar-text-color py-3"
                    : "nav-link text-secondary sidebar-text-color py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
            
          ))}
        </Nav>
       
      </div>
     
    </div>
     
     </>
  );
};

export default Sidebar;
