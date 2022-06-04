import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className="homemain">
                <div className="card1">
                    <h4 className='digit'>{props.number}</h4>
                    <div className="content">
                        <img className="cardimg" src={props.img} alt="" />
                        <h3 style={{ color: "red", paddingLeft: "20px", paddingTop: "20px" }}>{props.head1} </h3>
                        <h3 style={{ color: "red", paddingLeft: "20px" }}>{props.head2} </h3>
                        <h5 className='text'>{props.content1} </h5>

                    </div>

                </div>

                <div className="card2">
                    <h4 className='digit'>{props.number1}</h4>

                    <div className="content">
                        <img className="cardimg" src={props.img1} alt="" />
                        <h3 style={{ color: "red", paddingLeft: "20px", paddingTop: "20px" }}> {props.head12}</h3>
                        <h3 style={{ color: "red", paddingLeft: "20px" }}>{props.head22} </h3>
                        <h5 className='text'>{props.content1}</h5>

                    </div>

                </div>

            </div>
        </>
    )
}
