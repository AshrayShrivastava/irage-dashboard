import React from 'react'
import { AiFillCaretUp } from "react-icons/ai";

export default function TableHeader({name, byOrder, setCur}) {

    return (
        <th>
            {name}
            <AiFillCaretUp onClick={()=>{
                setCur(name)
                byOrder(name)}}/>
        </th>
    )
}
