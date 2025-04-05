import blanket1 from '../assets/blanket1.png';
import blanket3 from '../assets/blanket3.png';
import blanket4 from '../assets/blanket4.png';
import blanket5 from '../assets/blanket5.png';

function ShieldCore() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-5 mb-10 mt-15">
            <p className="text-[32px] font-medium text-[#E5E5E5] text-center">Core Features</p>
            <div className="w-[130px] h-[1px] bg-white m-auto mt-1 !mb-10" />

            <div className="flex justify-between items-center text-[14px] text-[#E5E5E5] mobile-flex-col text-center">

                <div className='flex flex-col items-center rounded-[10px] md:px-8 gap-2 py-5'>
                    <img src={blanket1} alt="" className='w-[42px] h-[42px] mb-1' />
                    <p>Protection when responding to active situations within secured facility</p>
                </div>
                <div className='flex flex-col items-center rounded-[10px] md:px-8 gap-2 py-5'>
                    <img src={blanket1} alt="" className='w-[42px] h-[42px] mb-1' />
                    <p>Protection during Patrol and special operations</p>
                </div>
            </div>
            <div className='flex flex-col items-center rounded-[10px] md:px-8 gap-2 py-5 w-fit m-auto'>
                <img src={blanket5} alt="" className='w-[42px] h-[42px] mb-1' />
                <p>Rescue missions and ambush situations</p>
            </div>
            <div className="flex justify-between items-center text-[14px] text-[#E5E5E5] mobile-flex-col text-center">

                <div className='flex flex-col items-center rounded-[10px] md:px-8 gap-2 py-5'>
                    <img src={blanket4} alt="" className='w-[42px] h-[42px] mb-1' />
                    <p>Personal and Executive protection</p>
                </div>
                <div className='flex flex-col items-center rounded-[10px] md:px-8 gap-2 py-5'>
                    <img src={blanket5} alt="" className='w-[42px] h-[42px] mb-1' />
                    <p>Up-armour for vehicle doors, windows and windshields</p>
                </div>
            </div>

        </div>
    )
}
export default ShieldCore
