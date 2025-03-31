import sp1 from '../assets/sp1.png';
import sp2 from '../assets/sp2.png';
import sp3 from '../assets/sp3.png';
import sp4 from '../assets/sp4.png';
import sp5 from '../assets/sp5.png';
import carW from '../assets/carWithShadow.png'


function ServicePremier() {
    return (
        <div className="bg-[#EEECE9] text-[#4A4A4B] w-[100%] px-[8%] !mt-20 py-20">
            <h4 className='text-[#7C5E50] text-[12px] font-medium'>Why Choose Us</h4>
            <h4 className='text-[#7C5E50] text-[23px] font-bold !mt-5'>5 Reasons To Partner With X-Shield</h4>
            <div className='w-[100%] h-[2px] mt-5 bg-[#4A4A4B] opacity-50' />
            <div className="bg-[#EEECE9] text-[#4A4A4B] flex justify-between mt-10 w-[100%] mobile-flex-col">
                <div className='max-w-[46%] mobile-width-full flex flex-col gap-5'>
                    <div className='flex gap-4 max-w-[80%]'>
                        <img src={sp1} alt='' className='w-[45px] h-[44px]' />
                        <div>
                            <p className='text-[#AC938A] font-bold text-[18px] !mb-1'>Expertise</p>
                            <p>Our team comprises seasoned professionals with extensive experience in defense, security, technology, and strategic planning.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 max-w-[80%]'>
                        <img src={sp2} alt='' className='w-[45px] h-[44px]' />
                        <div>
                            <p className='text-[#AC938A] font-bold text-[18px] !mb-1'>Innovation</p>
                            <p>We consistently invest in research and development, staying at the forefront of technological advancements to provide innovative solutions</p>
                        </div>
                    </div>
                    <div className='flex gap-4 max-w-[80%]'>
                        <img src={sp3} alt='' className='w-[45px] h-[44px]' />
                        <div>
                            <p className='text-[#AC938A] font-bold text-[18px] !mb-1'>Customization</p>
                            <p>Our solutions are tailor-made to address specific client requirements, ensuring optimal results and maximum efficiency</p>
                        </div>
                    </div>
                    <div className='flex gap-4 max-w-[80%]'>
                        <img src={sp4} alt='' className='w-[45px] h-[44px]' />
                        <div>
                            <p className='text-[#AC938A] font-bold text-[18px] !mb-1'>Global Reach</p>
                            <p>With a global network, we provide support and solutions to clients worldwide, adapting to diverse regional needs</p>
                        </div>
                    </div>
                    <div className='flex gap-4 max-w-[80%]'>
                        <img src={sp5} alt='' className='w-[45px] h-[44px]' />
                        <div>
                            <p className='text-[#AC938A] font-bold text-[18px] !mb-1'>Proven Track Record</p>
                            <p>X-shield has a history of successful implementations and partnerships with governments, organizations, and industries</p>
                        </div>
                    </div>
                </div>
                <div className='w-[43%]'>
                    <img src={carW} alt='' className='ml-[-100px] mt-10 noMarginL' />
                </div>
            </div>
        </div>
    );
}

export default ServicePremier;
