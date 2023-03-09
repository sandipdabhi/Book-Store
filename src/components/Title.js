import React from 'react'

const Title = props => {
    console.log(props)
    return <h1>Hello {props.name }</h1>
}

export default Title