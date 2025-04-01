import service from '../assets/service.png';

function ServiceHero() {
  return (
    <div className='bg-white w-[100%] max-h-[100vh] mt-[90px] relative'>
        <img src={service} alt='' className='w-full'/>
        <div className='absolute m-auto top-[35vh] flex flex-col justify-center items-center w-[100%]'>
          <p className='text-[#E5E5E5] text-[45px] font-medium text-center'>Our Services</p>
          <p className='text-[#E5E5E5] font-medium text-center !mt-5'>The sole objective is to collaborate with our clients to deliver the best solutions for their goals.Our leadership, staff,<br /> 
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
