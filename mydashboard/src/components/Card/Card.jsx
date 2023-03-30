import React, { useState } from 'react';
import './Card.css'
import {motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons';
import {Chart} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend, Filler, plugins} from 'chart.js';
ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend, Filler
);
// const options={
//     maintainAspectRatio:false,
//     interaction:{
//         mode: "index",
//         intersect: false,
//         axis: "x",
//     },
//     plugins:{
//         tooltip:{
//             enabled: true,
//         },
//         legend: false,
//     },
//     scales:{
//         y:{
//             grid:{
//                 drawOnChartArea: false,
//                 drawBorder: false,
//             },
//         },
//         x:{
//             grid: {
//                 drawBorder: false,
//                 borderDash: [6],
//                 border: false,
//             }
//         }
//     }
// }
const Card=(props)=>{
    const [expanded,setExpanded]=useState(false);
    return (
        <LayoutGroup>
            {
                expanded?
                    <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
                <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
            }
        </LayoutGroup>
    )
}
//Compact Card
function CompactCard({param,setExpanded}){ 
    const Png=param.png;
    return (
        <AnimatePresence>
        <motion.div className="CompactCard"
        style={
            {
                background:param.color.backGround,
                boxShadow: param.color.boxShadow
            }
        }   
        layoutId='expandableCard'
        onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                ></CircularProgressbar>
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last Week</span>
            </div>
        </motion.div>
        </AnimatePresence>
    )

}
// const createData=()=>{

//     /**
//      * return {
//      *  api call
//      * 
//      * }
//      */
// };

// const fetchDataFromAPI=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(createData());
//         },0)
//     })
// }

//expanded card
function ExpandedCard({param,setExpanded}){
//     const [data,setData]=useState([]);
//     const [loading,setLoading]=useState(true);

//     const getData=useCallback(async ()=>{
//         const results=await fetchDataFromAPI();
//         setData(results);  //results store in data object
//         setLoading(false);
//     },[]);
// // render and show data only once
//     useEffect(()=>{
//         getData();
//     },[getData]);

//     if (loading) return "loading...";
    return(
        <AnimatePresence>
        <motion.div className="ExpandedCard"
        style={{background: param.color.backGround,
                boxShadow: param.color.boxShadow,
        }}
        layoutId='expandableCard'
        >
            <div style={{alignSelf:'flex-end',cursor:'pointer', color: 'white'}}>
                <UilTimes onClick={setExpanded}></UilTimes>
            </div>

            <span>
                {param.title}
            </span>
            <div className="chartContainer">
                <Chart data={param.series} type='line'></Chart>
            </div>
            <span>Last Week</span>
        </motion.div>
        </AnimatePresence>
    )
}
export default Card;