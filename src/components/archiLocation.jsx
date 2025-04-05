import email from '../assets/email.png';
import location from '../assets/location.png';
import contact from '../assets/contact.png';
import { BsArrowRight } from "react-icons/bs";

function ArchiLocation() {
  return (
    <div className="bg-[#000000] text-[#333333] px-[6%] py-10 mb-24">
      <p className="text-[#8E6C5F] font-semibold text-[13px] text-center">Location</p>
      <p className="text-[#E5E5E5] font-semibold text-[32px] text-center opacity-80">We're Here for You</p>
      <div className="mt-10 bg-white flex justify-between text-center items-center rounded-2xl px-20 py-12 mobile-flex-col">
        <div className='flex flex-col justify-center items-center'>
          <img src={email} alt='' />
          <p className='!mt-3 font-medium text-[17px]'>Email Us</p>
          <p className='font-normal text-[13px]'>enquiry@diconxshield.com</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={location} alt='' />
          <p className='!mt-3 font-medium text-[17px]'>Address</p>
          <p className='font-normal text-[13px]'>28, Katampe Road, Jahi District, Abuja-FCT,<br /> Nigeria</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={contact} alt='' />
          <p className='!mt-3 font-medium text-[17px]'>Contact Details</p>
          <p className='font-normal text-[13px]'>+234 708 888 6394</p>
        </div>
      </div>
      <button className='text-[13px] flex gap-2 items-center justify-center rounded-[4px] m-auto mt-10 font-medium text-center text-white bg-[#8E6C5F] px-3 py-2.5 '>
        <p>Get a quote</p>
        <BsArrowRight />
      </button>
    </div>
  );
}
export default ArchiLocation
