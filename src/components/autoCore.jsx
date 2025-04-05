import auto1 from '../assets/auto1.png';
import auto2 from '../assets/autoC2.png';
import auto3 from '../assets/auto3.png';
import auto4 from '../assets/auto4.png';

function AutoCore() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-5 mb-10 mt-5">
            <div className="flex justify-between text-[15px]">
                <div>
                    <p className="text-[32px] font-medium text-[#E5E5E5]">Core Features</p>
                    <div className="w-[130px] h-[1px] bg-white ml-5 mt-1 !mb-20" />
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-[14px] text-[#6C6C81] gap-5">

                        <div className='rounded-[10px] px-8 gap-2 py-5 bg-[#EEE9E9]'
                            style={{
                                border: "1px solid #D6D6D6"
                            }}>
                            <img src={auto1} alt="" className='w-[42px] h-[42px] mb-5' />
                            <p>Equipped with advanced long-range cameras and detection systems, it seamlessly merges surveillance and communication, ensuring rapid response and strategic coordination of critical operations.</p>
                        </div>
                        <div className='rounded-[10px] px-8 gap-2 py-5 bg-[#EEE9E9]'
                            style={{
                                border: "1px solid #D6D6D6"
                            }}>
                            <img src={auto2} alt="" className='w-[42px] h-[42px] mb-5' />
                            <p>The ASO is built with military-grade ballistic steel plates offering protection for officers in the event of a gunfight and is designed to operate 24/7 powered by a renewable energy source.</p>
                        </div>
                        <div className='rounded-[10px] px-8 gap-2 py-5 bg-[#EEE9E9]'
                            style={{
                                border: "1px solid #D6D6D6"
                            }}>
                            <img src={auto3} alt="" className='w-[42px] h-[42px] mb-5' />
                            <p>The ASO can be installed in remote locations with no infrastructure or public power, enabling better monitoring of vast areas with minimal personnel requirements.</p>
                        </div>
                        <div className='rounded-[10px] px-8 gap-2 py-5 bg-[#EEE9E9]'
                            style={{
                                border: "1px solid #D6D6D6"
                            }}>
                            <img src={auto4} alt="" className='w-[42px] h-[42px] mb-5' />
                            <p>The ASO are re-locatable and do not require any civil works to set up.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AutoCore
