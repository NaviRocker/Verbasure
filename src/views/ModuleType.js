import React from "react";
import { Row } from 'reactstrap';
import grammer from "../assets/images/buttons/grammer.png"
import listen from "../assets/images/buttons/listen.png"
import read from "../assets/images/buttons/read.png"
import video from "../assets/images/buttons/video-play-128.png"
import { Link, useLocation } from "react-router-dom";




export default function ModuleTypes() {

    let location = useLocation();
    return (
        <>

            <div className="container py-5  d-flex justify-content-center" >
                <h1 ><strong className="p-3 mb-3 bg-primary text-white rounded-pill">SELECT THE MODULE YOU WANTED TO LEARN</strong></h1>

            </div>
            <div>

                <Row>

                    <div class="row p-5">
                        <div class="row">
                            <div class="col d-flex justify-content-center" >

                                <Link
                                   
                                    to={"/readmodule"}
                                    className={
                                        location.pathname === "/starter"? "text-primary nav-link py-3" : "nav-link text-secondary py-3"  }>
                                    <img className='w-5 p-5 bg-primary rounded-5' src={read} alt=''></img>

                                </Link>
                            </div>
                            <div class="col d-flex justify-content-center">
                            <Link
                                    to={"/listenmodule"}
                                    className={
                                        location.pathname === "/listenmodule"? "text-primary nav-link py-3" : "nav-link text-secondary py-3"  }>
                                    <img className='w-5 p-5 bg-primary rounded-5' src={listen} alt=''></img>


                                </Link>
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex justify-content-center" >
                                <h1><strong>Read</strong></h1>

                            </div>
                            <div class="col d-flex justify-content-center">
                                <h1><strong>Listen</strong></h1>
                            </div>
                        </div>

                    </div>

                    <div class="row p-5">
                        <div class="row">
                            <div class="col d-flex justify-content-center" >
                            <Link
                                    to={"/videomodule"}
                                    className={
                                        location.pathname === "/videomodule"? "text-primary nav-link py-3" : "nav-link text-secondary py-3"  }>
                                    <img className='w-5 p-5 bg-primary rounded-5' src={video} alt=''></img>


                                </Link>

                            </div>
                            <div class="col d-flex justify-content-center">
                            <Link
                                    to={"/videomodule"}
                                    className={
                                        location.pathname === "/videomodule"? "text-primary nav-link py-3" : "nav-link text-secondary py-3"  }>
                                    <img className='w-5 p-5 bg-primary rounded-5' src={grammer} alt=''></img>


                                </Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex justify-content-center" >
                                <h1><strong>Video</strong></h1>

                            </div>
                            <div class="col d-flex justify-content-center">
                                <h1><strong>Grammer</strong></h1>
                            </div>
                        </div>
                    </div>
                </Row>

            </div>

        </>
    )

}