import React, { Component } from 'react'
import '../style/Signup.css';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" id="grad1">
                    <div className="row justify-content-center mt-0">
                        <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                                <h2><strong>Sign up to Portal</strong></h2>
                                <p><a href="/">Go to Login</a></p>
                                <div className="row">
                                    <div className="col-md-12 mx-0">
                                        <form id="msform">
                                            {/* <ul id="progressbar">
                                                <li className="active" id="account"><strong>Account</strong></li>
                                            </ul> */}
                                            <fieldset>
                                                <div className="form-card">
                                                    <h2 className="fs-title">Fill the Details</h2>
                                                    < br />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="text" name="email" placeholder="Frist name" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" name="pwd" placeholder="Last name" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="email" name="email" placeholder="Email id" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" name="pwd" placeholder="Mobile Number" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="password" name="email" placeholder="Password" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="password" name="pwd" placeholder="Confirm Password" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="email" name="email" placeholder="Email id" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" name="pwd" placeholder="Mobile Number" />
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <br />
                                                <div className='row'>
                                                    <div className="col-md-4 mx-0">
                                                        <p>Forgot Password? <a href="#">Click Here</a></p>
                                                    </div>

                                                    <div className="col-md-4 mx-0">
                                                    </div>
                                                    <div className="col-md-4 mx-0">
                                                        <p>Need Help? <a href="#">Click Here</a></p>
                                                    </div>
                                                </div>
                                                {/* <p>Forgot Password? <a href="#">Click Here</a></p> */}
                                                <input type="button" name="next" className="next action-button" value="Sign up" style={{ background: 'darkcyan' }} />
                                            </fieldset>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
