import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Wallet</h1>
                                <p className="lead">
                                    
                        </p>
                                <hr />
                                <div>
                                lost wallet
                                </div>
                                
                                <a href="https://www.google.com/maps?q=maps&sxsrf=ALeKk016g2Q-dVcZSLxq6kjLaGc4J3U0GA:1616310444957&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyCggAELEDEIMBEEMyAggAMgIIADICCAAyAggAMgIIADoHCAAQsAMQQzoECCMQJzoECC4QJzoICAAQxwEQowI6AgguOgcILhAnEJMCOgQILhBDOggILhCxAxCDAVCNHViGIGCuIWgBcAJ4AIABdogB7gOSAQM0LjGYAQCgAQGqAQdnd3Mtd2l6yAEKwAEB&uact=5&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjnx_3R6cDvAhUYK80KHQTUDnoQ_AUoAXoECAgQAw" className="btn btn-lg btn-primary mr-2">
                                   Tracker
                        </a>
                                <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" className="btn btn-lg btn-secondary mr-2">
                                    Login
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome