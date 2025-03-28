import ghost from '../assets/ghost.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';


function Ghost() {
    return (
        <>
            <div className="bg-[#000000] text-[#AAAAAA] flex justify-between w-[100%] px-[10%] !mt-20">
                <div className='max-w-[38%]  py-10'>
                    <h6 className='text-[#8E6C5F] text-[17px] font-semibold leading-[1.35]'>Dedicated to Protecting Lives, Securing Critical Assets and Enhancing National Security.</h6>
                    <p className='!mt-2 text-[14px] text-white font-medium !mb-5'>Strategic Partnership with DICON</p>
                    <p>X-shield’s strategic collaboration with the Defence Industries
                        Corporation of Nigeria ensures that our products meet the
                        highest standards of military-grade excellence, aligned with
                        national and global benchmarks.</p>
                    <p className='!mt-5'>Our partnership also enhances Nigeria’s capacity to meet its
                        security requirements independently, reducing reliance on
                        imports and fostering local industry growth. Together, we serve as
                        a force multiplier in strengthening Nigeria’s defence capabilities
                        by locally manufacturing and supplying armoured vehicles,
                        military hardware, and a broad array of security equipment.</p>
                </div>
                <div className='max-w-[52%] mt-[-50px]'>
                    <img src={ghost} alt='' className='ml-[90px]' />
                </div>
            </div>
            <div className='mt-10 mb-10'>
                <div className='flex justify-between items-center'>
                    <div className='w-[40%] h-[0.5px] bg-[#8E6C5F] opacity-50' />
                    <p className='font-semibold text-[14px]'>Military Components</p>
                    <div className='w-[47%] h-[0.5px] bg-[#8E6C5F] opacity-50'  />
                </div>
                <div className='px-[10%] py-10 flex items-center gap-5'>
                    <img src={logo1} alt='' className='w-[110px]' />
                    <img src={logo2} alt='' className='w-[110px]'/>
                    <img src={logo3} alt='' className='w-[110px]'/>
                    <img src={logo4} alt='' className='w-[110px]'/>
                    <img src={logo5} alt='' className='w-[110px]'/>
                </div>
                <div className='w-[100%] h-[0.5px] bg-[#8E6C5F] opacity-50' />
            </div>
        </>
    );
}

export default Ghost;
