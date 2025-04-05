import record from '../assets/record.svg';
import locate from '../assets/locate.svg';
import locate2 from '../assets/locate2.svg';
import operate from '../assets/operate.svg';
import military from '../assets/military.svg';

function CoreFeatures() {
    return (
        <div className="bg-[#000000] text-[#ffffff] w-[100%] px-[6%] py-20 mb-10">
            <div className="m-auto">
                <p className="text-[32px] font-medium text-[#E5E5E5] text-center">Core Features</p>
                <div className="w-[130px] h-[1px] bg-white m-auto mt-1" />
            </div>
            <div className='flex justify-between items-center text-center mobile-flex-col px-[15%] md:px-0'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={record} alt='' className='w-[35px] h-[35px]'/>
                    <p className='opacity-70 text-[14px]'>Equipped with advanced long-range Cameras, Communications and <br /> Artificial Intelligence systems</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={locate} alt='' className='w-[35px] h-[35px]'/>
                    <p className='opacity-70 text-[14px]'>Purpose-built for deployment in remote areas, border <br/> communities, airports and oil and gas pipelines and <br/> installations</p>
                </div>
            </div>
            <div className='flex justify-between items-center text-center mt-10 mobile-flex-col px-[15%] md:px-0'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={locate2} alt='' className='w-[35px] h-[35px]'/>
                    <p className='opacity-70 text-[14px]'>Re-locatable and do not require any civil works to<br/> set up</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={operate} alt='' className='w-[35px] h-[35px]'/>
                    <p className='opacity-70 text-[14px]'>Operates 24/7 with renewable energy source</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={military} alt='' className='w-[35px] h-[35px]'/>
                    <p className='opacity-70 text-[14px]'>Military-grade ballistic steel plates offering <br /> protection for personnel in the event of a gun <br /> fight</p>
                </div>
            </div>
        </div>
    );
}
export default CoreFeatures