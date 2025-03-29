import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

function Military() {
    return(
        <div className='mt-10 mb-10'>
                <div className='flex justify-between items-center'>
                    <div className='w-[40%] h-[0.5px] bg-[#8E6C5F] opacity-50 mobile-35'/>
                    <p className='font-semibold text-[14px] text-nowrap'>Military Components</p>
                    <div className='w-[47%] h-[0.5px] bg-[#8E6C5F] opacity-50 mobile-45'  />
                </div>
                <div className='px-[10%] py-10 flex items-center gap-5 mobile-justify mobile-flex-col '>
                    <img src={logo1} alt='' className='w-[110px]' />
                    <img src={logo2} alt='' className='w-[110px]'/>
                    <img src={logo3} alt='' className='w-[110px]'/>
                    <img src={logo4} alt='' className='w-[110px]'/>
                    <img src={logo5} alt='' className='w-[110px]'/>
                </div>
                <div className='w-[100%] h-[0.5px] bg-[#8E6C5F] opacity-50' />
            </div>
    );
}
export default Military
