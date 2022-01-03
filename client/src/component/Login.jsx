import React, { Component } from 'react'
import '../style/Signup.css';

export default class Login extends Component {


    render() {
        return (
            <>
                <div className="container-fluid" id="grad1">
                    <div className="row justify-content-center mt-0">
                        <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                                <h2><strong>Log in to Portal</strong></h2>
                                <p>Are you new? <a href="/signup">Signup Here</a></p>
                                <div className="row">
                                    <div className="col-md-12 mx-0">
                                        <form id="msform">
                                            {/* <ul id="progressbar">
                                                <li className="active" id="account"><strong>Account</strong></li>
                                            </ul> */}
                                            <fieldset>
                                                <div className="form-card">
                                                    <h2 className="fs-title">Login</h2>
                                                    < br />
                                                    <input type="email" name="email" placeholder="Email Id" />
                                                    <input type="password" name="pwd" placeholder="Password" />

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
                                                <input type="button" name="next" className="next action-button" value="Log in" style={{ background: 'darkcyan' }} />
                                            </fieldset>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



