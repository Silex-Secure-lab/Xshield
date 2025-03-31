import tower from '../assets/tower.png'


function VigilPremier() {
    return (
        <div className="bg-[#ffffff] text-[#333333] w-[100%] px-[6%] py-20 flex justify-between mobile-flex-col">
            <div className='w-[40%]'>
                <img src={tower} alt='' />
            </div>
            <div className='max-w-[49%] mobile-width-full flex flex-col gap-5 mt-5'>
                <p className='font-bold text-[32px] !mb-2 text-center'>AUTONOMOUS BALLISTIC<br/> VIGILANCE TOWERS</p>
                <p className='text-[14px]'>
                    The Autonomous Vigilance Tower is for effective vigilance, monitoring and coordination of human and vehicular movements and activities to forestall any security breach and gather actionable intelligence for ground troops.

                    <br /><br />The Autonomous Ballistic Vigilance Tower is designed to provide a high, safe place from which guards can keep an eye and observe the surrounding area and provide situational awareness and intelligence report to ground units.

                    <br /><br />It would provide an unhindered long-distance view to enable guards  keep an eye on people and activities  in and around strategic locations.
                    Powered by solar panels, the Surveillance Towers would operate day and night gathering data using high-resolution CCTV cameras and will be set-up in remote areas, including border communities, security outposts, airports and oil and gas pipelines and installations.


                </p>
            </div>

        </div>
    );
}

export default VigilPremier;
