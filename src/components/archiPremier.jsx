import archiPic from '../assets/archiPic.png'


function ArchiPremier() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-10">
            <h4 className='text-[35px] leading-[1.2] font-bold uppercase text-center'>Architectural Armouring</h4>
            <p className='text-[15px] !mt-5 text-center md:max-w-[75%] !m-auto'>Architectural armouring involves reinforcing buildings and structures to withstand various forms of attacks or natural disasters. These can include.</p>
            <div className="bg-[#000000] text-[#E5E5E5] flex justify-between mt-10 w-[100%] mobile-flex-col">
                <div className='max-w-[46%] mobile-width-full flex flex-col gap-5 mt-5'>
                        Securing the built environment against potential threats is an imperative task, and FortiGuard Defenses is at the forefront of architectural armor innovation. Our expertise extends to fortifying structures against various threats, including ballistic attacks, explosions, and forced entry.

                        <br /><br />We seamlessly integrate armour solutions into the architectural design, ensuring a harmonious blend of security and aesthetics. From government buildings to critical infrastructure, our architectural armouring solutions are a testament to both form and function.

                        <br /><br />Both vehicle and architectural armouring require specialized engineering and design expertise to ensure that the added protection does not compromise the vehicle’s performance or the structural integrity of the building.The level of armouring varies based on the specific threat environment and the desired level of protection.

                </div>
                <div className='w-[43%] mobile-width-full'>
                    <img src={archiPic} alt='' />
                </div>
            </div>
        </div>
    );
}

export default ArchiPremier;
