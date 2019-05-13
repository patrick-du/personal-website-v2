import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Resume.pdf'
import Logo from '../../assets/logo.png'
import Fade from 'react-reveal/Fade';

class MNav extends Component {

    toggleActive() {
        document.querySelector('.icon').classList.toggle('active');
        document.querySelector('.mobileNavExpand').classList.toggle('active');
        document.getElementById('mobile').classList.toggle('active');
    }

    removeActive() {
        document.querySelector('.icon').classList.remove('active');
        document.querySelector('.mobileNavExpand').classList.remove('active');
        document.getElementById('mobile').classList.remove('active');
    }

    render() {

        return (



            // </nav>
            <React.Fragment>
                {/* https://www.youtube.com/watch?v=lHZdY5kscLo */}
                <nav className="py-1 navbar-light p-font" id="mobile">
                    <div className="navContainer mx-auto">
                        <div className="col">
                            <div className="row">
                                <div className="col px-0">
                                    {/*<Link to="/">
                                        <a class="navbar-brand pt-2 hvr-grow" href="#" onClick={this.removeActive}>
                                            <img src={Logo} width="45" height="45" alt="" />
                                        </a>
                                    </Link0
                                    */}

                                    {/* 
                                        <div className="navbar-brand mr-auto pt-3" style={{ color: ' #2b2b2b', fontWeight: '700' }}><p>Patrick.</p></div>

                                    */}
                                </div>
                                <div className="col px-0">

                                    <div className="icon hvr-grow float-right align-middle" onClick={this.toggleActive}>
                                        <div className="hamburger float-right" />

                                    </div>
                                </div>
                            </div>
                            <div className="mobileNavExpand text-center">
                                <Fade big>
                                    <hr />
                                    <div className="my-5">
                                        <Link to="/" onClick={this.toggleActive} className="linkdec">
                                            <div className="mobileNavLink hvr-underline-from-center-nav s-font">HOME</div>
                                        </Link>
                                        <Link to="/about" onClick={this.toggleActive} className="linkdec">
                                            <div className="mobileNavLink hvr-underline-from-center-nav s-font">ABOUT</div>
                                        </Link>
                                        <Link to="/work" onClick={this.toggleActive} className="linkdec" >
                                            <div className="mobileNavLink hvr-underline-from-center-nav s-font">WORK</div>
                                        </Link>
                                        <Link to="/photography" onClick={this.toggleActive} className="linkdec" >
                                            <div className="mobileNavLink hvr-underline-from-center-nav s-font">PHOTOGRAPHY</div>
                                        </Link>
                                        {/*<a href={Resume} target="_blank" onClick={this.toggleActive} className="linkdec">
                                            <div className="mobileNavLink hvr-underline-from-center-nav s-font">RESUME</div>
                                        </a> */}
                                        
                                    </div>
                                    <hr />
                                    <div className="row mx-0 mt-5" style={{ fontSize: 35 }}>
                                        <div className="col ml-0">
                                            <a href={Resume} target="_blank" onClick={this.toggleActive} className="linkdec">
                                            <i class="far fa-file icon0"></i>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="mailto:patrickduu@gmail.com"><i class="far fa-envelope icon1" /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/patrick-du" target="_blank" onClick={this.toggleActive}><i class="fab fa-github mx-auto icon2" /></a>
                                        </div>
                                        <div className="col pr-0">
                                            <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank"><i class="fab fa-linkedin-in icon3" /></a>

                                        </div>

                                    </div>
                                </Fade>
                            </div>
                        </div>

                    </div>
                </nav>
                <br />
                <br />
                <br />
            </React.Fragment >

        );
    }
}

export default MNav;
