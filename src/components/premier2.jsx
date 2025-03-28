import meva from '../assets/MEVA.png'


function PremierWhite() {
    return (
        <div className="bg-[#eaeaf5] text-black flex justify-between w-[100%] px-[6%] !mt-20 py-20 mobile-flex-col">
            <div className='max-w-[46%] mobile-width-full'>
                <h4 className='text-[#7C5E50] text-[32px] font-medium'>Premier Defence and Security</h4>
                <h4 className='text-[#6C6C81] text-[32px] font-medium !mt-[-10px]'>Solutions Provider</h4>
                <p className='!mt-6 text-[#4D4D54]'>X-Shield prides itself on adhering to stringent international standards for product design, manufacturing, and testing. Our in-house team of technicians, engineers, and security experts collaborate to deliver products that not only meet but exceed client expectations.</p>
                
                <img src={meva} alt='suv' title='MEVA' className='mt-[40px] cursor-pointer' />
            </div>
            <div className='max-w-[46%] mobile-width-full'>
                <h4 className='text-[#7C5E50] text-[32px] font-semibold'>WHY CHOOSE <br /> X-SHIELD??</h4>
                
                <p className='!mt-2 text-[#4D4D54]'>X-Shield prides itself on adhering to stringent international standards for product design, manufacturing, and testing.
                Our in-house team of technicians, engineers, and security experts collaborate to deliver products that not only meet but exceed client expectations.</p>


                <div className='flex flex-col gap-0 items-center mt-4 mb-7'>
                    <div className='bg-[#D6D6ED] p-5 w-[100%]'>
                        <p className='font-bold'>Local Manufacuring:</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>Strengthening Nigeria’s defence independence and fostering economic growth through local manufacturing.</p>
                    </div>
                    <div className='bg-[#ffffff] p-5 w-[100%]'>
                        <p className='font-bold'>Comprehensive Product Range:</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>Tailored solutions to meet diverse and complex security challenges.</p>
                    </div>
                    <div className='bg-[#D6D6ED] p-5 w-[100%]'>
                        <p className='font-bold'>Strategic Expertise:</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>Years of experience in defence and security manufacturing.</p>
                    </div>
                    <div className='bg-[#ffffff] p-5 w-[100%]'>
                        <p className='font-bold'>Innovative Solutions:</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>Cutting-edge technology integrated into all products and services.</p>
                    </div>
                </div>

                <p className='text-[#4D4D54]'>
                Our expertise empowers us to deliver a broad array of specialized products tailored to meet the unique challenges of the Nigerian security landscape.
                Through commitment, expertise, and innovation, X-Shield is driving the future of defence and security in Nigeria and beyond.
                </p>
            </div>
        </div>
    );
}

export default PremierWhite;
