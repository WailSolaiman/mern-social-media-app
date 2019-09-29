import React from 'react'

const Footer = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: '#3f51b5',
            }}
        >
            <p
                style={{
                    textAlign: 'center',
                    margin: '1rem .5rem',
                    color: 'white',
                }}
            >
                MERN Social Media - Created by Wail Solaiman. &copy; 2019
            </p>
        </div>
    )
}

export default Footer
