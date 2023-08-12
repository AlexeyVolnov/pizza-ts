import ContentLoader from "react-content-loader"
import {FC} from "react";

interface IPizzaSkeletonProps{
  countSkeleton:number
}

const PizzaSkeleton:FC<IPizzaSkeletonProps> = ({countSkeleton}) => {
    const array = Array.from({length:countSkeleton},()=>'')
  return(
   <div className={'grid grid-cols-4 gap-5 items-center justify-items-center max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'}>
     {array.map((_,index)=><ContentLoader key={index}
        className={"pizza-block"}
        speed={2}
        width={240}
        height={390}
        viewBox="0 0 280 466"
        backgroundColor="#f5f2f0"
        foregroundColor="#f7f7f7"
     >
       <circle cx="140" cy="140" r="140"/>
       <rect x="0" y="290" rx="6" ry="6" width="280" height="31"/>
       <rect x="1" y="336" rx="3" ry="3" width="280" height="75"/>
       <rect x="5" y="420" rx="6" ry="6" width="116" height="40"/>
       <rect x="150" y="420" rx="4" ry="4" width="129" height="40"/>
     </ContentLoader>)}
   </div>
)}

export default PizzaSkeleton