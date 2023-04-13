import React from 'react';
import SpecialHead from './SpecialHead';
import style from './Footer.module.css'
const NamadComponent = (props) => {
    return (
        <div className=' basis-6/12 w-1/3'>
            <SpecialHead className={`top-0 text-[#61CE70] text-[22px] py-1 `} title={props.content.title}/>
            <div className={`flex gap-7 pt-8 style justify-around w-full relative ${style.gradientbordertop}`}>
                <div><img src={props.content.src1} className='bg-white rounded-md p-1' alt="" /></div>
                <div><img src={props.content.src2} className='bg-white rounded-md p-1' alt="" /></div>
                <div><img src={props.content.src3} className='bg-white rounded-md p-1' alt="" /></div>
            </div>
        </div>
    );
};

export default NamadComponent;