import React from 'react'
import { Link } from 'react-router-dom';

export default function Button({color,textColor,title,type}) {
    let classColor = color==="white"?"btn-white":color==="black"?"btn-dark":"btn-link";
    let classText = textColor ==="reset"?"text-reset":""
    
    return (
        <Link className={`btn ${classColor} stretched-link ${classText}`} to="/shop">
        {title} <i className="fe fe-arrow-right ml-2" />
      </Link>
    )
}
