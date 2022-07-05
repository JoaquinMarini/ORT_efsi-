import React from 'react';
import principal from "../img/principal.jpeg"
const banner = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <img
                    src={principal}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </div>
            </div>
        </div>
     );
}
 
export default banner;