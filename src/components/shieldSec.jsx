import blanket from '../assets/blanket.png';

function ShieldSec() {
    return (
        <div className="bg-[#ffffff] text-[#000000] w-[100%] px-[8%] py-10">
            <h5 className="font-[600] text-[#8E6C5F] leading-[1.2] text-[35px] text-center">Foldable Tactical Ballistic Shield Blanket</h5>
            <p className="text-[#000000] text-center capitalize !mt-5">Mobile ballistic shields for enhanced personnel protection at checkpoints and <br />across border routes</p>
            <div className='flex justify-between items-center text-[14.5px] pb-10 mobile-flex-col'>
                <div className='flex max-w-[50%] gap-5 mobile-width-full'>
                    <img src={blanket} alt="" className='' />
                </div>
                <div className='flex max-w-[50%] gap-5 mobile-width-full'>
                    Security personnel will tell you their most dreaded experience is either an ambush or face-to-face firearms combat. Having the right protective gear gives them the confidence to face criminals

                    <br /><br />The Tactical Ballistic Blanket is designed to offer ballistic protection in a wide variety of tactical operational situations and can be quickly and easily used as a personal shield in active shooter incidences, ambush thrown over windows in vehicles and homes, doors and walls. <br /><br />They are independently tested and ballistically certified as a system to provide head-to-toe protection particularly designed to protect against a wide variety of threats including pistol and rifle rounds up through 30-06 AP rounds, blast and fragments.


                </div>

            </div>
        </div>
    );
}
export default ShieldSec
