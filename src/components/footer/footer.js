import React, { Component } from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './footer.scss';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

class Footer extends Component {

    facebook = () => {
        window.location = 'https://facebook.com/';
    }
    linkedin = () => {
        window.location = 'https://linkedin.com/';
    }
    twitter = () => {
        window.location = 'https://twitter.com/laravel00';
    }
    github = () => {
        window.location = 'https://github.com/dammy001';
    }

    componentDidMount(){
        new WOW.WOW().init();
    }

    render() {
        return <div className="footer">
                <div className="wow slideInUp footer-items" data-wow-offset="70" data-wow-delay="1s">
                    <h5>Say Hello</h5>
                    <div className="row">
                        <div className="col-4">
                            <ul>
                                <li>damilareanjorin1@gmail.com</li>
                                <li>t.me/damilare</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li><Link to='/work' className="link">Work</Link></li>
                                <li><a className="link" href={`https://gitconnected.com/dammy001/resume`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Resume</a>
                                </li>
                                <li><Link to='/blog' className="link">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-5">
                                <p>&copy; Damilare Anjorin 2020</p>
                            </div>
                            <div className="col-7">
                                <div className="btn-group">
                                    <button type="button" onClick={this.facebook} className="btn btn-primary facebook"><i className="fa fa-facebook"></i></button>
                                    <button type="button" onClick={this.linkedin} className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i></button>
                                    <button type="button" onClick={this.twitter} className="btn btn-primary twitter"><i className="fa fa-twitter"></i></button>
                                    <button type="button" onClick={this.github} className="btn btn-primary github"><i className="fa fa-github"></i></button>
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                </div>
            
        </div>
    }
}

export default Footer