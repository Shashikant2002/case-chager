import React from 'react';

export default function Alert(props) {
    return (
      props.alert && <div id='alert' className={`alert rounded-0 alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
            {props.alert.msg} : {props.alert.type}
        </div>
    )
}
