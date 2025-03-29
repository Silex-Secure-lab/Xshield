import aboutPrem from '../assets/heroPrem.png';


function HeroPremierWhite() {
    return (
        <div className="bg-[#eaeaf5] text-black flex justify-between w-[100%] px-[6%] py-20 mobile-flex-col">
            <div className='max-w-[46%] text-[#4A4A4B] mobile-width-full'>
                <h4 className='text-[#7C5E50] text-[32px] font-medium'>Premier Defence and Security</h4>
                <h4 className='text-[#7C5E50] text-[32px] font-medium !mt-[-10px]'>Solutions Provider</h4>
                <p className='!mt-6 text-[#4D4D54]'>X-Shield Solutions Company Limited is a Defence and Security Solutions Company and a strategic Joint Venture Partner of the Defence Industries Corporation of Nigeria (DICON), with a mission to address the increasing demand for top-tier security and military solutions such as armoured vehicles (Civilian and Tactical), military hardware, and advanced security equipment. X-Shield is dedicated to protecting lives and securing assets. As a strategic
                    player in the Military Industrial Complex in Nigeria, we are at the forefront of advanced vehicle armouring and the manufacturing of cutting-edge military hardware. Recognized as a pioneering Nigerian defence manufacturing company, X-Shield leverages cutting-edge technology, rigorous quality standards, and a dedicated workforce to deliver products that enhance security and
                    operational capabilities for Military, Governmental and Private entities.</p>

                <img src={aboutPrem} alt='suv' title='MEVA' className='mt-[100px] cursor-pointer' />
                <p>We serve as a Force Multiplier in strengthening<br />
                    Nigeria’s Defence Capabilities</p>
                <p className='!mt-5 text-[28px] font-medium text-[#000000]'>Core Expertise</p>
            </div>
            <div className='max-w-[46%] mobile-width-full'>
                <h4 className='text-[#8E6C5F] text-[28px] leading-[1.3] font-medium'>Mission <br /> Statement</h4>

                <p className='!mt-2 text-[#4D4D54]'>To deliver state-of-the-art defence and security solutions that enable our clients to counter evolving threats, protect critical assets, and uphold the highest standards of safety.</p>
                <h4 className='text-[#8E6C5F] text-[28px] leading-[1.3] font-medium !mt-5'>Vision <br /> Statement</h4>

                <p className='!mt-2 text-[#4D4D54]'>To lead the industry in developing groundbreaking solutions that anticipate and address emerging challenges, setting the standard for excellence in defence and security.</p>


                <div className='flex flex-col !gap-0 mt-[110px] mb-7'>
                    <h2 className='font-bold text-[#7C5E50] text-[28px] text-left !mb-2'>Core Values - RICE</h2>
                    <div className=' p-5 w-[100%] py-2'>
                        <p className='font-bold'>Responsibility</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>We operate with a profound sense of duty to protect and secure people, cities, infrastructure and security forces.</p>
                    </div>
                    <div className=' p-5 w-[100%] py-2'>
                        <p className='font-bold'>Innovation</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>We are committed to advancing technology and continuously improving our solutions to meet the dynamic needs of our clients.</p>
                    </div>
                    <div className=' p-5 w-[100%] py-2'>
                        <p className='font-bold'>Collaboration</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>We believe in forming strategic partnerships with stakeholders and also working closely with our clients to develop customized solutions that effectively address their specific challenges.</p>
                    </div>
                    <div className=' p-5 w-[100%] py-2'>
                        <p className='font-bold'>Excellence</p>
                        <p className='!mt-1 text-[14px] text-[#3D3D3D]'>We strive for excellence in every aspect of our business, from product design to production down to customer service</p>
                    </div>
                </div>

                <div className='bg-black text-white p-5'>
                    <p className='text-[32px] font-extrabold'>Our Goal</p>
                    <p className='text-[#ffffff] !mt-5'>
                    Our ambitious goal is to boost local production capacity for various types of armoured and ballistic systems and platforms that can be rapidly assembled, deployed with minimal training, and prove effective in protecting individuals and security personnel in the high-risk scenarios.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroPremierWhite;
