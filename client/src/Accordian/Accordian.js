import React, { useState } from "react";
import data from "../assets/data.js";
import "./Accordian.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enablemultiselection, setEnablemultiselection] = useState(false);
  const [multipleid, setMultipleid] = useState([]);

  const HandleSingleSelection = (getcurrid)=>{
    setSelected(getcurrid);
  }
  const Handlemultiselection = (getcurrid)=>{
    let cpymultipleid = [...multipleid];
    const currindx = cpymultipleid.indexOf(getcurrid);
    console.log(currindx);
    if(currindx === -1){
        cpymultipleid.push(getcurrid);
    }else{
        cpymultipleid.splice(currindx,1);
    }
    setMultipleid(cpymultipleid);
  }
  console.log(selected);

  return (
    <div className="wrapper">
        <button className="btn" onClick={()=>setEnablemultiselection(!enablemultiselection)}>Multi-Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="items">
              <div className="title" onClick={enablemultiselection ? ()=>Handlemultiselection(dataitem.id) : ()=>HandleSingleSelection(dataitem.id)}>
                <h3>{dataitem.question}</h3>
                <h3>+</h3>
              </div>
              {
                selected === dataitem.id || multipleid.indexOf(dataitem.id) !== -1 ?
                <div className="answer">
                    {dataitem.answer}
                </div>
                 :null
              }
            </div>
          ))
        ) : (
          <div>No element are found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
