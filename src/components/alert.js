import React from 'react';


export default function alert(props)
{
        return(
                    <div className={`alert ${props.alert.color}`}>
                        <i className={`fa ${props.alert.symbol}`}></i>
                        <h3>{props.alert.msg}</h3>
                    </div>
            
        )
}
