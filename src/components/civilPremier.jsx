import { useState } from 'react';
import civil1 from '../assets/civil1.png';
import civil2 from '../assets/civil2.png';
import civil3 from '../assets/civil3.png';
import civil4 from '../assets/civil4.png';
import civilCar from '../assets/civilCar.png';
import core1 from '../assets/core1.png';
import core2 from '../assets/core2.png';
import more1 from '../assets/more1.png';
import more2 from '../assets/more2.png';
import more3 from '../assets/more3.png';
import more4 from '../assets/more4.png';
import more5 from '../assets/more5.png';


function CivilPremier() {
    const [selectedImage, setSelectedImage] = useState(civilCar);

    return (
        <div className="bg-[#ffffff] text-[#333333] w-[100%] px-[6%] py-10">
            <h4 className='text-[35px] font-bold uppercase text-center'>CIVILIAN VEHICLE ARMOURING</h4>
            <p className='text-center max-w-[80%] !m-auto !mt-10'>
                X-shield Solutions specializes in the design and conversion of standard vehicles to bulletproof. Our team of skilled engineers and technicians employ innovative materials and cutting-edge technologies to create armour solutions that provide optimal protection without compromising vehicle performance.

                <br /><br />Whether it’s armoured SUVs, military and security vehicles, or specialized transport – CIT, we tailor our solutions to meet the unique demands of each client, ensuring their safe passage through even the most hazardous environments.
            </p>
            <div className='mt-20 flex justify-between mobile-flex-col'>
            <div className='flex items-center md:flex-col gap-7 max-w-[19%] md:max-w-[15%]'>
                    {[civil1, civil2, civil3, civil4].map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt=''
                            className="cursor-pointer hover:opacity-80 transition" 
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>

                {/* Displayed image */}
                <div className='w-[55%] mobile-width-full'>
                    <img src={selectedImage} alt='' className="w-full h-auto transition-all duration-300" />
                </div>

                <div className='max-w-[23%] mobile-width-full flex flex-col gap-10 mt-[-10px]'>
                    <div>
                        <p className="text-[32px] font-medium text-[#333333] md:text-center">Core Features</p>
                        <div className="w-[130px] h-[1px] bg-[#333333] md:m-auto ml-5 mt-1" />
                    </div>
                    <div
                        className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080]`}
                        style={{
                            border: "1px solid #D6D6D6"
                        }}
                    >
                        <img src={core1} alt="" className='w-[70px] h-[70px]' />
                        <p className="text-[18px] text-[#333333] font-medium !mt-2">Electronics and Communications</p>
                        <p className="text-[14px] font-normal !mt-2 ">Integrating ballistic-resistant materials into walls, windows, and doors to prevent bullets from penetrating the structure</p>
                    </div>
                    <div
                        className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080]`}
                        style={{
                            border: "1px solid #D6D6D6"
                        }}
                    >
                        <img src={core2} alt="" className='w-[70px] h-[70px]' />
                        <p className="text-[18px] text-[#333333] font-medium !mt-2">Explosion Mitigation</p>
                        <p className="text-[14px] font-normal !mt-2 ">Reinforcing the vehicle’s undercarriage and other vulnerable areas to reduce the impact of explosions from improvised explosive devices (IEDs) or landmines</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-10 mt-20'>
                    <div>
                        <p className="text-[32px] font-medium text-[#333333] text-left">More Features</p>
                        <div className="w-[130px] h-[1px] bg-[#333333] ml-10 mt-1" />
                    </div>
                    <div className='flex justify-between items-center mt-10 mobile-flex-col'>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[26%] mobile-width-full`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={more1} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Interior Protection</p>
                            <p className="text-[14px] font-normal !mt-2 ">Armored vehicles often have additional features such as secure compartments for valuables, gun ports for defensive use, and escape hatches.</p>
                        </div>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[26%] mobile-width-full`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={more2} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Ballistic Protection</p>
                            <p className="text-[14px] font-normal !mt-2 ">Adding armor plating to various parts of the vehicle, such as the body, doors, windows, and roof, to protect occupants from bullets and shrapnel</p>
                        </div>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[26%] mobile-width-full`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={more3} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Upgraded Suspension</p>
                            <p className="text-[14px] font-normal !mt-2 ">Enhancing the vehicle’s suspension system to accommodate the additional weight of armor and improve stability and maneuverability.</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-10 w-[80%] m-auto mobile-flex-col mobile-width-full'>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[30%] mobile-width-full`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={more4} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Bulletproof glass</p>
                            <p className="text-[14px] font-normal !mt-2 ">Adding layers of ballistic-resistant glass to windows to prevent penetration by bullets or other projectiles</p>
                        </div>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[30%] mobile-width-full`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={more5} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Runflat Tyres Installation</p>
                            <p className="text-[14px] font-normal !mt-2 ">Installing specialized tires that allow a vehicle to continue moving even after sustaining damage to the tyres</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CivilPremier;
