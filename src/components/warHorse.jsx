import check2 from '../assets/check3.png';
import arrow from '../assets/arRight.svg';

function WarHorseSec() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-20">
            <h5 className="font-bold text-[35px] text-center">Warhorse</h5>
            <p className='text-center'>The “Warhorse:” Revolutionizing Troops Mobility for Enhanced Defensive and Offensive Operations.Menace on Wheels</p>

            <div className='flex justify-between mt-10 text-[13.2px]'>
                <div className='flex max-w-[47%] gap-5'>
                    <img src={check2} alt="" className='w-[30px] h-[30px]' />
                    <p> <b>Menace on Wheels</b>

                        <br /> <br />The Emergence of “Mobility of Terror” Across Nigeria Motorcycle-riding armed bandits and terrorists are wreaking havoc across villages and communities in Nigeria especially within the Northern region becoming a menace, not just to civilians but also to Nigerian security forces.

                        <br /> <br />The phrase “Mobility of Terror” encapsulates their audacious activities, facilitated by their primary mode of transportation –Motorcycles. Renowned for their maneuverability, they serve as the vehicle of choice for these enemies of the Nigerian state, enabling them to execute their heinous acts with alarming efficiency.
                        <br /> <br />“In a groundbreaking effort, X-shield is repurposing commercial motorcycles, transforming them into battle-ready machines for use by security personnel in the fight against banditry and terrorism.”

                    </p>
                </div>
                <div className='w-[2px] h-[330px] bg-[#E5E5E5] nodisplay' />
                <div className='w-[45%] pr-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center max-w-[75%]'>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>Swift Mobility is Key to Empowering Troops for Rapid Response</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-2 items-center max-w-[75%]'>
                            <img src={check2} alt="" className='w-[30px] h-[30px]' />
                            <p>The “Warhorse:” Answering the Call for Swift Response</p>
                        </div>
                        <div className='text-[13px] flex items-center gap-1 cursor-pointer'>
                            <p>Read More</p>
                            <img src={arrow} alt="" className='w-[18px] h-[18px]' />
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#E5E5E5] mt-2' />

                </div>
            </div>
        </div>
    );
}
export default WarHorseSec
