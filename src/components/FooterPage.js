import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="default-color" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">Josh Lerman</h5>
                  
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Contacts</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/resume.pdf">Josh Lerman</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        <aside className="info aside ">
                            <div className=" shadow-sm rounded">
                                <h2 className="heading sr-only">Basic Information</h2>
                                <div className="content">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>New York, US
                                        </li>
                                        <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a
                                            href="#">https://github.com/jdl212</a></li>
                                        <li><i className="fas fa-link"></i><span className="sr-only">Website:</span><a
                                            href="https://github.com/jdl212">https://github.com/jdl212</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com">Josh Lerman </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;
