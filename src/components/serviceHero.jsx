import service from '../assets/service.png';

function ServiceHero() {
  return (
    <div className='bg-white w-[100%] mt-[80px] relative'>
        <img src={service} alt='' className=''/>
        <div className='absolute m-auto top-[0px] md:top-[180px] flex flex-col justify-center items-center w-[100%]'>
          <p className='text-[#E5E5E5] text-[26px] md:text-[45px] font-medium text-center'>Our Services</p>
          <p className='text-[#E5E5E5] font-medium text-center md:!mt-5 md:max-w-[60%]'>The sole objective is to collaborate with our clients to deliver the best solutions for their goals.Our leadership, staff, 
          and experience are what set us apart—you’ll always be a priority working with us.</p>
          <button className='text-[#E5E5E5] font-medium text-center !mt-5 bg-transparent rounded-2xl uppercase px-8 py-1.5'
          style={{
            border: "2px solid #E5E5E5"
          }}>Get in Touch</button>
        </div>
    </div>
  );
}
export default ServiceHero
