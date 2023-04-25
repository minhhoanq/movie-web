import React from "react";
import PropTypes from 'prop-types'

const Button = () => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onclick() : null}
        >
            {props.children}
        </button>
    )
}

const OutlineButton = () => {
    return (
        <button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onclick() : null}
        >
            {props.children}
        </button>
    )
}

Button.protoTypes = {
    onclick: PropTypes.func
}

export default Button;