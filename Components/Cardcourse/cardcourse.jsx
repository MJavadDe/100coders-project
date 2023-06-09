import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Image from "next/image";
import PriceFormat from "@/utilitie/priceFormat";
import Link from "next/link";
// import Axs from ""

function Cardcourse({ data }) {
  const [image , setImage] = useState(data.images[0] ? data.images[0].src : "/images/placeholder-image.webp" )
  
  return (
    <>
      <Link href={`/courses/${data.id}`}>
        <div
          dir="rtl"
          className="font-vazir flex flex-col gap-2 shadow-md h-full justify-between rounded-md overflow-hidden"
        >
          <div className="w-full h-[225px] relative">
          <Image
            src={image}
            layout={'fill'}
            objectFit={'cover'}
            alt="course"
            onError={()=>setSrc('/images/placeholder-image.webp')}
          />
          </div>
          
          <div className="px-4">
            <p>{data.name}</p>
          </div>
          <div className="px-3">
            <PersonIcon className="text-gray" />
            <span className="text-gray px-1">{data.teacher.name}</span>
          </div>
          <div className=" bg-gray w-[90%] h-[1px] self-center"></div>
          <div className="flex justify-between w-[95%] self-center my-3">
            <div className="flex gap-1">
              <AccessAlarmIcon className="text-gray" />
              <span className="text-gray">{data.durationCourse}</span>
            </div>
            <span className="text-green-700">
              <PriceFormat price={data.price}></PriceFormat>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cardcourse;
