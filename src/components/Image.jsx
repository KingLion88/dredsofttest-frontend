import { useState } from "react";

const Image = ({ url, style }) => {
    // State to track whether the main image has loaded
    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div className="d-flex justify-content-center align-items-center overflow-hidden" style={{ height: 330 }}>
            {/* Placeholder image */}
            {!isLoaded && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' }}>
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="20" fill="none" stroke="#3498db" strokeWidth="4" strokeDasharray="31.415, 31.415" transform="rotate(0 25 25)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                repeatCount="indefinite"
                                dur="1s"
                                values="0 25 25;360 25 25"
                                keyTimes="0;1"
                            />
                        </circle>
                    </svg>
                </div>
            )}

            {/* Main image */}
            <img
                src={url}
                alt={'Loading'}
                style={{ maxHeight: 300, width: "100%", objectFit: "contain" }}
                className={`${style} ${isLoaded ? '' : 'hidden'}`}
                onLoad={() => setIsLoaded(true)} // Set the image as loaded when it finishes loading
            />
        </div>
    );
}

export default Image;