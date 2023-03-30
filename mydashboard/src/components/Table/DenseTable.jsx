import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const API="http://localhost:8080/api/data";
function DenseTable() {
    const [users,setUsers]=React.useState([]);
    const fetchData=async (url)=>{
        try{
               const response=await fetch(url);
               const data=await response.json();
               if(data.length>0){ setUsers(data);}
               console.log(users); 
        }catch(e){
            console.error(e);
        }
    }
    React.useEffect(()=>{
        fetchData(API);
    },[])
   //, added varchar(255), published varchar(255),city varchar(255), country varchar(255),relevance varchar(255), pestle varchar(255),source varchar(255),title varchar(255), likelihood varchar(255));

  return (
    <div className="Table">
    <h3>Data Accumulated</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>  
            <TableCell className='head'>End Year</TableCell>
            <TableCell className='head' align="right">Citylng</TableCell>
            <TableCell className='head' align="right">Citylat&nbsp;</TableCell>
            <TableCell className='head' align="right">intensity&nbsp;</TableCell>
            <TableCell className='head' align="right">sector&nbsp;</TableCell>
            <TableCell className='head' align="right">topic&nbsp;</TableCell>
            <TableCell className='head' align="right">insight&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.end_year}
              </TableCell>
              <TableCell align="right">{row.citylng}</TableCell>
              <TableCell align="right">{row.citylat}</TableCell>
              <TableCell align="right">{row.intensity}</TableCell>
              <TableCell align="right">{row.sector}</TableCell>
              <TableCell align="right">{row.topic}</TableCell>
              <TableCell align="right">{row.insight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default DenseTable;