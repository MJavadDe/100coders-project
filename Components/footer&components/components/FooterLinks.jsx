import React, { useEffect, useState } from 'react';
import SpecialHead from './SpecialHead';
import style from './Footer.module.css'
import Link from 'next/link';
const FooterLinks = (props) => {
    return (
        <div className='flex flex-col gap-2 w-2/5 md:w-1/5' >
            <SpecialHead className={`${style.gradientborderbottom} `} title={props.content.title}/>
            <p>
                <Link href={"/"} className={props.content.style}>{props.content.headOne}</Link>
            </p>
            <p>
                <Link href={"/"} className={props.content.style}>{props.content.headTwo}</Link>
            </p>
            <p>
                <Link href={"/"} className={props.content.style} >{props.content.headThree}</Link>
            </p>
        </div>
    );
};

export default FooterLinks;