import great1 from '../assets/great1.png';
import great2 from '../assets/great2.png';
import great3 from '../assets/great3.png';
import great4 from '../assets/great4.png';
import great5 from '../assets/great5.png';

function CorporateGreat() {
    const corporate = [
        {
            title: "Expertise",
            content: "Our team comprises seasoned professionals with extensive experience in defense, security, technology, and strategic planning.",
        },
        {
            title: "Innovation",
            content: "We consistently invest in research and development, staying at the forefront of technological advancements to provide innovative solutions",
        },
        {
            title: "Customization",
            content: "Our solutions are tailor-made to address specific client requirements, ensuring optimal results and maximum efficiency.",
        },
        {
            title: "Global reach",
            content: "Our solutions are tailor-made to address specific client requirements, ensuring optimal results and maximum efficiency.",
        },
        {
            title: "Proven track record",
            content: "X-shield has a history of successful implementations and partnerships with governments, organizations, and industries.",
        }
    ]

 return (
    <div className="bg-[#000000] text-white w-[100%] px-[6%] !mt-5 py-5">
        <h4 className='text-[#E5E5E5] text-[26px] font-bold text-center'>Great Product Starts With Responsibility</h4>
        <p className='!mt-2 text-center text-[#E5E5E5] capitalize'>X-shield Solutions, we are driven by a profound sense of responsibility to protect <br /> and secure</p>
        <div className='flex justify-between items-center mt-10 mobile-flex-col'>
            <div className='flex flex-col gap-4 justify-center w-[30%] mobile-width-full'>
                <img src={great1} alt='' className='w-[35px] h-[40px]'/>
                <p className='text-[#E5E5E5] text-[16px] font-medium'>Expertise</p>
                <p className='text-[#808080] text-[13.5px]'>Our team comprises seasoned professionals with extensive experience in defense, security, technology, and strategic planning.</p>
            </div>
            <div className='flex flex-col gap-4 justify-center w-[30%] mobile-width-full'>
                <img src={great2} alt='' className='w-[35px] h-[40px]'/>
                <p className='text-[#E5E5E5] text-[16px] font-medium'>Innovation</p>
                <p className='text-[#808080] text-[13.5px]'>We consistently invest in research and development, staying at the forefront of technological advancements to provide innovative solutions</p>
            </div>
            <div className='flex flex-col gap-4 justify-center w-[30%] mobile-width-full'>
                <img src={great3} alt='' className='w-[35px] h-[40px]'/>
                <p className='text-[#E5E5E5] text-[16px] font-medium'>Customization</p>
                <p className='text-[#808080] text-[13.5px]'>Our solutions are tailor-made to address specific client requirements, ensuring optimal results and maximum efficiency.</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-10 w-[65%] m-auto mobile-flex-col mobile-width-full'>
            <div className='flex flex-col gap-4 justify-center w-[35%] mobile-width-full'>
                <img src={great4} alt='' className='w-[35px] h-[40px]'/>
                <p className='text-[#E5E5E5] text-[16px] font-medium'>Expertise</p>
                <p className='text-[#808080] text-[13.5px]'>Our team comprises seasoned professionals with extensive experience in defense, security, technology, and strategic planning.</p>
            </div>
            <div className='flex flex-col gap-4 justify-center w-[35%] mobile-width-full'>
                <img src={great5} alt='' className='w-[35px] h-[40px]'/>
                <p className='text-[#E5E5E5] text-[16px] font-medium'>Innovation</p>
                <p className='text-[#808080] text-[13.5px]'>We consistently invest in research and development, staying at the forefront of technological advancements to provide innovative solutions</p>
            </div>
        </div>
    </div>
    );    
} 

export default CorporateGreat;
