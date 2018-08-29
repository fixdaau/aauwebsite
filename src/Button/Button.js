import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
    render() {
        const { text, filled, redirectUrl } = this.props;

        let className = 'button';

        if (filled) {
            className += ' button-filled'
        }

        return (
            <a href={redirectUrl}>
                <button className={className}>{text}</button>
            </a>
        );
    }
}

Button.propTypes = {

};

export default Button;