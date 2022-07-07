import React from 'react';
import Card from "./card";

const gallery = () => {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <Card></Card>
                    <br></br>
                    </div>
                    <div className="col-md-6">
                    <Card></Card>
                    <br></br>
                    </div>
                    <div className="col-md-3">
                    <Card></Card>
                    <br></br>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3">
                    <Card></Card>
                    <br></br>
                    </div>
                    <div className="col-md-6">
                    <Card></Card>
                    <br></br>
                    </div>
                    <div className="col-md-3">
                    <Card></Card>
                    <br></br>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default gallery;