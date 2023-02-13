import { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import axios from 'axios';

let d=new Date()
let prevTime=d.getTime()

function Table({Header, data, setData, refresh, setRefresh}) {

    function byOrder(name){
        axios.get(`getEvents?sort=${name}`)
        .then(data=>{
        setData(data.data)})
    }

    const [cur, setCur] = useState('id')

    useEffect(()=>{
        byOrder(cur)
    },[cur])

    function refreshData(){
        // console.log('here')
        console.log(prevTime)
        let d = new Date()
        let curTime=d.getTime()
        if(curTime-prevTime>5000){
            // console.log(refresh)
            // console.log(cur)
            prevTime=curTime
            if(refresh){
                byOrder(cur)
            }
        }
    }

    return (
        <div className="App">
            <table className="table">
            <tr className='row' key={0}>
                {Header.map(h=>{
                    return <TableHeader name={h.label} byOrder={byOrder} setCur={setCur}/>
                })}
            </tr>
            {data.map((val,key) => {
                return (
                <tr className='row' key={key}>
                    <td className='column'>{val[0]}</td>
                    <td className='column'>{val[1]}</td>
                    <td className='column'>{val[2]}</td>
                    <td className='column'>{val[3]}</td>
                    <td className='column'>{val[4].toFixed(2)}</td>
                    <td className='column'>{val[5].toFixed(2)}</td>
                </tr>
                )
            })}
            </table>
        </div>
    );
}

export default Table;
