import check2 from '../assets/check3.png';
import arrow from '../assets/arRight.svg';

function UpAmoured() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-20">
            <h5 className="font-bold text-[35px] leading-[1.25] text-center">Up-Armoured Reinforced Patrol Trucks</h5>
            <p className='text-center !mt-5'>An Impenetrable shield offering protection  to troops against Ambush Scenarios</p>

            <div className='flex justify-between mt-10 text-[13.2px] mobile-flex-col'>
                <div className='flex max-w-[47%] mobile-width-full gap-5'>
                    <img src={check2} alt="" className='w-[30px] h-[30px]' />
                    <p>Ambushes have long been a challenge in patrol and reconnaissance operations, jeopardizing the safety of personnel and the success of critical missions. They have the potential to cause significant harm, and collateral damage, disrupt operations, and undermine the morale of even the most battle-hardened troops.

                        <br /> <br />According to statistics; “No fewer than 596 persons among them 337 soldiers, 29 police officers, and Joint Task Force have been killed in ambush attacks by various terrorist groups since 2019” – SBM Intelligence, a geopolitical intelligence platform – The Sun News Paper, 19th Nov. 2021
                        <br /> <br /> With increasing ambushes, we are at the point where the deployment of armoured vehicles has become essential for battle. Protecting troops in transit in the event of an ambush has, therefore, become a necessary and urgent intervention.
                    </p>
                </div>
                <div className='w-[2px] h-[330px] bg-[#E5E5E5] nodisplay' />
                <div className='w-[45%] pr-0 md:pr-10 mobile-width-full mt-10 md:mt-0'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center max-w-[75%]'>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>The Status Quo: Use of Soft-Skin Truck</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p className='text-nowrap'>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-2 items-center max-w-[75%] '>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>The Solution: “D-FENCE”- An Impenetrable shield Offering Protection in the Event of an Ambush</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p className='text-nowrap'>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-2 items-center max-w-[75%]'>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>Indispensable Assets for any Tactical Mission:From Counter-Terrorism Operations to Border Security and Emmergency Response</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p className='text-nowrap'>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-2 items-center max-w-[75%]'>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>A Cutting-Edge Advancement in Vehicular Armour</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p className='text-nowrap'>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-2 items-center max-w-[75%]'>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>Exceptional Maneuverability</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p className='text-nowrap'>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />
                </div>
            </div>
        </div>
    );
}
export default UpAmoured