import React from 'react'


export default function ArticleLanding(props) {

    const { svgAricle, imgAricle, textAricle } = props;

    return (
        <div className='nombreclase'>
            <img src={svgAricle} />
            <img src={imgAricle} />
            <p>
                {textAricle}
            </p>

        </div>
    )
}
