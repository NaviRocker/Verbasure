import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../components/Header"
import { Container } from "reactstrap";
import ShowPoints from "../views/ShowPoints";
import background from '../assets/images/bg/sample-background2.svg'
const FullLayout = () => {
  return (
    <main >





      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow bg-light-primary" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header/>
          
          {/********Middle Content**********/}
          <Container className=" contentArea" fluid >
          <Outlet />

          </Container>
        </div>

      </div>
    </main>
  );
};

export default FullLayout;
