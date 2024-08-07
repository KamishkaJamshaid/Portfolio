import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Rotatebox = () => {

const circleRef = useRef(null);

useEffect(() => {
    const element = circleRef.current;
    gsap.to(element, { rotation: "+=360", duration: 30 });

  },
);
    return(
            <>
            <div ref={circleRef} className=' h-28 w-28 text-white rounded-lg items-center bg-purple-800'>Kamishka</div>
            </>
    ); 
};

export default Rotatebox;