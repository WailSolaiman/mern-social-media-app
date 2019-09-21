import React from 'react'
import { css } from '@emotion/core'
import { ScaleLoader } from 'react-spinners'

const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LoadingSpinners = props => {
    return (
        <div className="sweet-loading">
            <ScaleLoader
                css={override}
                sizeUnit={'px'}
                size={60}
                color={'#ff79b0'}
                loading={props.loading}
            />
        </div>
    )
}

export default LoadingSpinners
