import React, { useState } from 'react'
import axios from 'axios';

export default function SearchBar({Header, setData, setRefresh}) {
    const [para, setPara]=useState("id")
    const [endDis, setEndDis]=useState(true)
    const [start, setStart]=useState("")
    const [end, setEnd]=useState("")
    const [denySearch, setDenySearch]=useState(true)

    const handleSearch=()=>{
        setRefresh(false)
        axios.get(`search?para=${para}&start=${start}&end=${end}`)
        .then(data=>{setData(data.data)})
    }

    const handleStart=(e)=>{
        setStart(e.target.value)
        if(!endDis){
            setEnd(e.target.value+'z')
            setDenySearch(true)
            if(e.target.value!==""){
                setDenySearch(false)
            }
        }
    }
    const handleEnd=(e)=>{
        setEnd(e.target.value)
        setDenySearch(true)
        if(e.target.value!==""){
            setDenySearch(false)
        }
    }
    
    const selectDropdown=(e)=>{
        setDenySearch(true)
        setStart("")
        setEnd("")
        let sel = e.target.value
        if(sel==='id' || sel==='metric1' || sel==='metric2'){
            setEndDis(true)
        }else{
            setEndDis(false)
        }
        setPara(sel)
    }
    return (
        <div>
            <label for="para">Choose Field to search:</label>
            
            <select name="para" id="para" onChange={(e)=>{selectDropdown(e)}}>
                {Header.map(h=>{
                    return <option value={h.label} key={h.key}>{h.label}</option>
                })}
            </select>
            
            <input type="text" value={start} placeholder='From' onChange={(e)=>{handleStart(e)}}></input>
            
            {endDis&&<input type="text" value={end} placeholder='To' onChange={(e)=>{handleEnd(e)}}></input>}
            
            <input type="submit" value="Search" disabled={denySearch} onClick={()=>{handleSearch()}}/>
        </div>
    );
};