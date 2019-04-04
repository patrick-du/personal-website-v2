import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from '../projects/BorderPic';

const Weatherly = () => {
    return (
        <div className="container-fluid fade-in-bottom-project-1 projectContainer mx-auto px-0">
            <PostTop subtitle="Side Project" title="Weatherly" previous="/projects/huddle" next="/projects/personalwebsite" />
            <p className="s-font">Weatherly is a weekly forecast progressive web app that includes features such as usage offline and push notifications. It fetches data from <a href="https://darksky.net/dev" target="_blank" className="hvr-underline-from-left purple">DarkSky API</a> which provides access to daily forecasts for the coming week.</p>
            <BorderPic imgPath="Weatherly1.png" picDesc="Desktop Version" />
            <p className="s-font">This project was created soon after I finished a JavaScript course to practice HTTP methods and DOM manipulation. Seeing that progressive web apps were on the rise, I decided to implement it into this application.</p>
            <p className="s-font">For those unfamiliar, <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" className="hvr-underline-from-left purple">progressive web apps</a> (PWAs) are a new class of web application that provide native app experiences using a browser. It utilizes modern web features such as push notifications and cache. Additionally, there is a web app install prompt making it easy for users to install the PWA on their mobile or desktop device.</p>
            <p className="s-font">It consists of three main requirements:
                <ul>
                    <li>HTTPS: to be a PWA, the web app must be served over a secure network</li>
                    <li>Web App Manifest: a JSON file that gives info about the web app including the name, icons, orientation, display, etc </li>
                    <li>Registered Service Worker: a JS script with event-driven workers that intercept network requests and cache information asynchronously to load data for offline use  </li>
                </ul>
            </p>
            <BorderPic imgPath="Weatherly2.png" picDesc="Mobile Version: Install Prompt, Loading Data, Native App Feel" />

            <p className="s-font">Despite facing an abundance of issues whether it be with plain JavaScript or registering Service Workers, I am glad that I stuck through with the project as it was a rewarding learning experience.</p>
            <p className="s-font">This app was developed with HTML, CSS, and JavaScript. View the full project on <a href="https://github.com/patrick-du/patrick-du.github.io" target="_blank" className="hvr-underline-from-left purple">Github</a> or <a href="https://patrick-du.github.io" target="_blank" className="hvr-underline-from-left purple">try it yourself</a>.</p>
            <hr />

            <div className="row">
                <div className="col-2">
                    <Link to="/projects/huddle">
                        <i class="fas fa-arrow-left hvr-wobble-horizontal-2" style={{ fontSize: '25px', color: '#2c3e50' }}></i>
                    </Link>
                </div>
                <div className="col"></div>
                <div className="col-2 text-right">
                    <Link to="/projects/personalwebsite">
                        <i class="fas fa-arrow-right hvr-wobble-horizontal-1" style={{ fontSize: '25px', color: '#2c3e50' }}></i>
                    </Link>
                </div>
            </div>

            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>


        </div >

    )

}

const styles = {

}

export default Weatherly;