import React, { useState } from "react";

interface loaderProps {
    fullscreen: boolean;
}

Loader.defaultProps = { fullscreen: false }

export default function Loader({fullscreen} : loaderProps) {
    if ( fullscreen ) {
        return (
            <div className="loader fullscreen"><div className="spinner"></div></div>
        );
    } else {
        return (
            <div className="loader"><div className="spinner"></div></div>
        );
    }
}