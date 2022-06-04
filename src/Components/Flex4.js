import React from 'react'

export default function Flex4(props) {
    return (
        <>
            <div className="homepage4">
                
                <div className="maininfo">
                    <div className="info1">
                        <div className="digit1">{props.id}</div>
                        <div className="content">
                            <h5 className='infohead'>{props.tip1}</h5>
                            <div className="maincontent">
                                <h3>{props.content1}</h3>
                                <h3>{props.content11}</h3>
                            </div>

                        </div>

                    </div>
                    <div className="info2">
                        <div className="digit1">{props.id1}</div>
                        <div className="content">
                            <h5 className='infohead'>{props.tip2}</h5>
                            <div className="maincontent">
                            <h3>{props.content2}</h3>
                                <h3>{props.content22}</h3>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
