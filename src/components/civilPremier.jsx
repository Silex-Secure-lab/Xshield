import civil1 from '../assets/civil1.png';
import civil2 from '../assets/civil2.png';
import civil3 from '../assets/civil3.png';
import civil4 from '../assets/civil4.png';
import civilCar from '../assets/civilCar.png';
import core1 from '../assets/core1.png';
import core2 from '../assets/core2.png';


function CivilPremier() {
    return (
        <div className="bg-[#ffffff] text-[#333333] w-[100%] px-[6%] !mt-20 py-20">
            <h4 className='text-[35px] font-bold uppercase text-center'>CIVILIAN VEHICLE ARMOURING</h4>
            <p className='text-center max-w-[80%] !m-auto !mt-10'>
                X-shield Solutions specializes in the design and conversion of standard vehicles to bulletproof. Our team of skilled engineers and technicians employ innovative materials and cutting-edge technologies to create armour solutions that provide optimal protection without compromising vehicle performance.

                <br /><br />Whether it’s armoured SUVs, military and security vehicles, or specialized transport – CIT, we tailor our solutions to meet the unique demands of each client, ensuring their safe passage through even the most hazardous environments.
            </p>
            <div className='mt-20 flex justify-between mobile-flex-col'>
                <div className='flex flex-col gap-7 max-w-[15%]'>
                    <img src={civil1} alt='' />
                    <img src={civil2} alt='' />
                    <img src={civil3} alt='' />
                    <img src={civil4} alt='' />
                </div>
                <div className='max-w-[55%]'>
                    <img src={civilCar} alt='' />
                </div>
                <div className='max-w-[23%] flex flex-col gap-10 mt-[-10px]'>
                    <div>
                        <p className="text-[32px] font-medium text-[#333333] text-center">Core Features</p>
                        <div className="w-[130px] h-[1px] bg-[#333333] m-auto mt-1" />
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
                    <div className='flex justify-between items-center mt-10'>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[20%]`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={core1} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Electronics and Communications</p>
                            <p className="text-[14px] font-normal !mt-2 ">Integrating ballistic-resistant materials into walls, windows, and doors to prevent bullets from penetrating the structure</p>
                        </div>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[20%]`}
                            style={{
                                border: "1px solid #D6D6D6"
                            }}
                        >
                            <img src={core2} alt="" className='w-[70px] h-[70px]' />
                            <p className="text-[18px] text-[#333333] font-medium !mt-2">Explosion Mitigation</p>
                            <p className="text-[14px] font-normal !mt-2 ">Reinforcing the vehicle’s undercarriage and other vulnerable areas to reduce the impact of explosions from improvised explosive devices (IEDs) or landmines</p>
                        </div>
                        <div
                            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080] w-[20%]`}
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
            </div>
        </div>
    );
}

export default CivilPremier;
