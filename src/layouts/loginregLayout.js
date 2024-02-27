import { Outlet } from "react-router-dom";
import { Row, Col } from 'reactstrap'

import backgrounb_image from '../assets/images/bg/sample-background.png'
import { Container } from "reactstrap";
import TopNavigation from "./TopNavigation";
import Logo from "../assets/images/logos/Verbasure.svg";

const LoginRegLayout = () => {
  return (
    <main >

      

        <div className="pageWrapper d-lg-flex">

          {/********Content Area**********/}

          <div className="contentArea p-2">
            {/********header**********/}
            <Row >
              <Col className="col " >
                <img src={Logo} alt=""></img>

              </Col>
              <Col className="col">
                <TopNavigation />
              </Col>
            </Row>


            {/********Middle Content**********/}
            <Container className="p-4 wrapper" fluid>
              <Outlet />
            </Container>
          </div>
        </div>
   
    </main>
  );
};

export default LoginRegLayout;
