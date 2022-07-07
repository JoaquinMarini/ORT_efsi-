import React from 'react';
import principal from "../img/principal.jpeg"
const banner = () => {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <img
                        src={principal}
                        className="banner"
                        alt="React Bootstrap logo"
                    />
                    </div>
                </div>
            </div>
            <br></br>
        </>
     );
}
 
export default banner;