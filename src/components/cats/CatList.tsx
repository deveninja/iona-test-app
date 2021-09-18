import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const CatList: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    console.log(props.match.params)
    return (
        <div>
            <h1>List</h1>
        </div>
    )
}

export default CatList
