import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DeleteOutlined, PlusOutlined} from '@ant-design/icons'

const Adddata = () => {
    const [data, setdata] = useState("");
    const [list, setlist] = useState([]);
    function handledata(){
        setlist([...list, data])
        // console.log(list)
        
    }
    function removehandle(){
        setdata(list.pop(0))
    }

    return (
        <>
            <div>
                <TextField  label="Enter Data" variant="outlined" name='data' value={data} onChange={(e)=> setdata(e.target.value)} size='sm'   style={{width: '600px'}}/>
                <Button variant="outlined" style={{width: '200px', height: '55px'}} onClick={handledata} >Submit</Button> 
            </div>
            <div style={{width: '800px', height:'400px', overflow: 'scroll'}}>
                {
                    list!= 0 && list.map((demo, i)=>{
                        return <p key={i} style={{width: '700px', backgroundColor: 'yellow', textAlign: 'start', padding: '20px'}}  >{demo}<DeleteOutlined style={{float: 'right'}} onClick={removehandle}/></p>
                    })
                }
            </div>
        </>
    )
}

export default Adddata
