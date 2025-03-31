import rr from '../assets/RR.png';
import { BsArrowRight } from "react-icons/bs";
import line from '../assets/line.svg';
import mid from '../assets/mid.png';

function ServiceHeroBottom() {
  return (
    <div className='bg-white max-h-[100vh] mb-[100px] relative'>
      <img src={rr} alt='' className='w-[100%] h-[556px]'/>
      <img src={mid} alt='' className='absolute top-0 left-[22%]'/>
      <div className='absolute m-auto top-[20px] right-[10%] px-[40px] h-[80%] flex flex-col justify-center  w-[30%] bg-transparent'
        style={{
          backdropFilter: "blur(4px)"
        }}>
        <p className='text-[#E5E5E5] font-medium text-left !mt-5'>Dedicated to Protecting Lives, Securing Critical Assets and Enhancing National Security. At X-shield Solutions, we are driven by a profound sense of responsibility to protect and secure.</p>
        <div className='flex items-center gap-10 !mt-5'>
          <img src={line} alt='' className='w-[10px]'/>
          <button className='text-[13px] flex gap-2 items-center text-[#000000] font-medium text-center bg-white uppercase px-3 py-2 w-[40%]'>
            <BsArrowRight />
            <p>Get a quote</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ServiceHeroBottom
