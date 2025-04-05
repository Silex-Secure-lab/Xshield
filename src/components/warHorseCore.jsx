import bulb from '../assets/bulb.png';
import bulb2 from '../assets/bulb2.png';
import bulb21 from '../assets/bulb21.png';
import bulb22 from '../assets/bulb22.png';
import bulb23 from '../assets/bulb23.png';
import bulb3 from '../assets/bulb3.png';
import bulbb1 from '../assets/bulbb1.png';
import bulbb2 from '../assets/bulbb2.png';
import core from '../assets/coreImg.png';

function WarHorseCore() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-5 mb-10">
            <div className="flex justify-between text-[15px] mobile-flex-col">
                <div>
                    <p className="text-[32px] font-medium text-[#E5E5E5] !mb-5">Core Features</p>
                    <div className='flex items-center rounded-[6px] p-3 mt-10 gap-3 py-6'
                        style={{
                            border: "1px solid #D6D6D6"
                        }}>
                        <img src={bulb} alt="" className='w-[42px] h-[40px]' />
                        <p>Headlight with infrared <br />light</p>
                    </div>
                    <div className='flex items-center rounded-[6px] p-3 mt-10 gap-3 py-6'
                        style={{
                            border: "1px solid #D6D6D6"
                        }}>
                        <img src={bulb2} alt="" className='w-[42px] h-[40px]' />
                        <p>Brackets for holding the <br />rider’s personal weapon.</p>
                    </div>
                    <div className='flex items-center rounded-[6px] p-3 mt-10 gap-3 py-6'
                        style={{
                            border: "1px solid #D6D6D6"
                        }}>
                        <img src={bulb3} alt="" className='w-[42px] h-[40px]' />
                        <p>Upgraded suspension</p>
                    </div>
                </div>
                <div>
                    <img src={core} alt="" />
                </div>
                <div>
                    <div className='flex items-center rounded-[6px] p-3 md:mt-20 gap-3 py-6'
                        style={{
                            border: "1px solid #D6D6D6"
                        }}>
                        <img src={bulb21} alt="" className='w-[42px] h-[40px]' />
                        <p>Off-road tyres</p>
                    </div>
                    <div className='flex items-center rounded-[6px] p-3 mt-10 gap-3 py-6'
                        style={{
                            border: "1px solid #D6D6D6"
                        }}>
                        <img src={bulb22} alt="" className='w-[42px] h-[40px]' />
                        <p>On-board mobile device <br /> charger.</p>
                    </div>
                    <div className='flex items-center rounded-[6px] p-3 mt-10 gap-3 py-6'
                        style={{
                            border: "1px solid #D6D6D6"
                        }}>
                        <img src={bulb23} alt="" className='w-[42px] h-[40px]' />
                        <p>Emergency first aid kit</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mobile-flex-col mt-10 md:mt-0'>
                <div className='flex items-center rounded-[6px] p-3 mt-4 gap-3 py-6'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bulbb1} alt="" className='w-[42px] h-[40px]' />
                    <p>Enlarged bullet resistant front shield to help keep riders <br /> shielded against gunshots in the event of a gun attack.</p>
                </div>
                <div className='flex items-center rounded-[6px] p-3 mt-4 gap-3 py-6'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bulbb2} alt="" className='w-[42px] h-[40px]' />
                    <p>Enlarged bullet resistant front shield to help keep riders <br /> shielded against gunshots in the event of a gun attack.</p>
                </div>
            </div>
        </div>
    )
}
export default WarHorseCore
