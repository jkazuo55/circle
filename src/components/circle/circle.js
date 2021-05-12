import React,{useState,useEffect} from "react";
import './circle.css';

function Circle() {
    const width=500;
    const height=500;
    const cx=300;
    const cy=300;
    const [r,onChange]=useState(50);


    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(r / 4)}px`;
      }
    });

  return (
    <div>
        <svg width={width} height={height} >
            <circle
                stroke="red" 
                fill="gray"
                fillOpacity="0.1"
                cx={cx}
                cy={cy}
                r={r}
            ></circle>
        </svg>

        <div className="slider-parent">
            {console.log("holamundo")}
            {console.log(r)}
            <input type="range" min={1} max={100} value={r}
                onChange={({ target: { value: radius } }) => {
                            onChange(radius);
                            console.log(radius);
                        }}
            />
            <div className="buble"> 
                {r}
            </div>
        </div>
  
    </div>
  );
}

export default Circle;
