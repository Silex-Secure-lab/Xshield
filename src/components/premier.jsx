import suv from '../assets/suv-car 2.png';
import drone from '../assets/drone 2.png';
import bike from '../assets/bike 2.png';
import lexus from '../assets/lexus.png';
import wall from '../assets/wall.png';
import shield from '../assets/mars-armor.png';
import surveil from '../assets/surveillance.png';

function Premier() {
    return (
        <div className="flex justify-between pl-[10%] mt-[20px] mobile-flex-col padding-No">
            <div className='max-w-[43%] pt-20 mobile-width-full'>
                <h4 className='text-[#f5f5f5] text-[32px] font-medium'>Premier Defence and Security</h4>
                <h4 className='text-[#6C6C81] text-[32px] font-medium !mt-[-10px]'>Solutions Provider</h4>
                <p className='!mt-6'>X-Shield Solutions Company Limited is a Defence and Security Solutions Company and a strategic Joint Venture Partner of the Defence Industries Corporation of Nigeria (DICON), with a mission to address the increasing demand for top-tier security and military solutions such as armoured vehicles (Civilian and Tactical), military hardware, and advanced security equipment. X-Shield is dedicated to protecting lives and securing assets. As a strategic
                    player in the Military Industrial Complex in Nigeria, we are at the forefront of advanced vehicle armouring and the manufacturing of cutting-edge military hardware. Recognized as a pioneering Nigerian defence manufacturing company, X-Shield leverages cutting-edge technology, rigorous quality standards, and a dedicated workforce to deliver products that enhance security and
                    operational capabilities for Military, Governmental and Private entities.</p>
                <h4 className='text-[#E6C5B6] text-[20px] font-medium !mt-6'>PRODUCTS AND SOLUTIONS </h4>
                <p className='!mt-2'>Delivering a broad array of specialized products and solutions tailored
                    to meet unique security challenges.</p>
                <div className='flex gap-12 items-center mt-[-30px] mobile-flex-col marginTop-no justity'>
                    <img src={suv} alt='suv' title='SUV' className='cursor-pointer' />
                    <img src={drone} alt='drone' title='Drone' className='w-[90px] h-[90px] cursor-pointer' />
                    <img src={bike} alt='bike' title='Military Bike' className='cursor-pointer' />
                </div>
            </div>
            <div className='bg-white max-w-[47%] ml-[-50px] pl-[60px] mobile-width-full ml-Noml paddingLeft-min'>
                <div className='py-[30px] flex gap-10'>
                    <div className='bg-[#363643] max-w-[90px] flex flex-col h-fit items-center gap-7 p-5 pb-10'>
                        <p className='font-extrabold text-5xl'>01</p>
                        <p className='rotate-90 text-[14px] font-semibold leading-tight'>VEHICLE AMOURING SOLUTIONS</p>
                    </div>
                    <div className='text-black'>
                        <ul className="list-disc max-w-[300px]">
                            <li>
                                Armoured SUVs, Sedans, and Specialized, Tactical and Cash-in-Transit vehicles.
                            </li>
                            <li className='mt-[20px]'>
                                Advanced ballistic protection and customisation of all kinds  of vehicles.
                            </li>
                        </ul>
                        <img src={lexus} alt='lexus' className='mt-[-40px] ml-yesml' />
                    </div>


                </div>
                <div className='w-[90%] h-[1px] bg-[#0E0808] mt-[-50px]' />



                <div className='py-[60px] flex items-center paddingY-less mobile-flex-col'>
                    <img src={wall} alt='lexus' className='w-[60%] h-full ml-[-50px] mobile-width-full noMarginL' />
                    <div className=' flex flex-col justify-end items-center gap-5 w-[45%] mobile-width-full'>
                        <div className='bg-[#7C5E50] min-w-[100%] flex h-fit items-center gap-4 p-5'>
                            <p className='font-extrabold text-5xl'>02</p>
                            <p className='text-[12px] font-semibold leading-[1.25]'>AGRICULTURAL <br /> AMOURING <br /> SOLUTIONS</p>
                        </div>
                        <div className='text-black min-w-[100%]'>
                            <ul className="list-disc">
                                <li>
                                    Fortifying structures with ballistic-resistant doors, walls,and windows to guard against external threats.
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
                <div className='w-[90%] h-[1px] bg-[#0E0808] mt-[10px]' />

                <div className='py-[20px] flex items-end pb-[40px] mobile-flex-col'> 
                    <div className=' flex flex-col justify-end items-center gap-5 w-[36%] mobile-width-full'>
                        <div className='text-[#1C1A1A] min-w-[100%] flex h-fit items-center gap-4 p-5'>
                            <p className='font-extrabold text-5xl'>03</p>
                            <p className='text-[14px] font-semibold leading-[1.25]'>Manufacturer <br /> of Military <br /> Hardware</p>
                        </div>
                        <div className='text-black text-[13.5px] min-w-[100%] ml-[-10px] noMarginL'>
                            <ul className="list-disc">
                                <li>
                                Unmanned Vehicles (UAVs, UGVs and UWVs).
                                </li>
                                <li>
                                Ballistic Shields, Protective gear, and Tactical equipment
                                </li>
                                <li>
                                Armoured Surveillance, Command and Control Centers.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img src={shield} alt='lexus' className='w-[45%] h-full ml-[-20px] mobile-width-full noMarginL' />
                    <img src={surveil} alt='lexus' className='w-[45%] h-full ml-[-110px] mb-[-30px] mobile-width-full noMarginL' />

                </div>
            </div>
        </div>
    );
}

export default Premier;
