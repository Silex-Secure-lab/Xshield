import check from '../assets/check.png'


function AboutPremier() {
    return (
        <div className="bg-[#000000] text-white flex justify-between w-[100%] px-[6%] !mt-0 py-10 mobile-flex-col">
            <div className='max-w-[46%] mobile-width-full'>
                <h4 className='text-[#7C5E50] text-[30px] text-nowrap font-semibold'>Why Choose X-Shield?</h4>
                <p className='!mt-5 text-[#ffffff]'>X-Shield prides itself on adhering to stringent international standards for product design, manufacturing, and testing. Our in-house team of technicians, engineers, and security experts collaborate to deliver products that not only meet but exceed client expectations.</p>

                <div className='flex justify-center gap-5 items-center font-light mt-5'>
                    <div>
                        <div className='flex text-[15px] gap-1'>
                            <img src={check} alt='' className='w-[18px] h-[18px] items-start mt-[3px]' />
                            <p>Local Manufacturing:<br /> Strengthening Nigeria’s defence independence and fostering economic growth through local manufacturing.</p>
                        </div>
                        <div className='flex text-[15px] gap-1 mt-10'>
                            <img src={check} alt='' className='w-[18px] h-[18px] items-start mt-[3px]' />
                            <p>Strategic Expertise: Years of experience in defence and security manufacturing.</p>
                        </div>
                    </div>
                    <div className='w-[1px] h-[400px] md:h-[250px] bg-[#ffffff] opacity-50'/>
                    <div>
                        <div className='flex text-[15px] gap-1'>
                            <img src={check} alt='' className='w-[18px] h-[18px] items-start mt-[3px]' />
                            <p>Local Manufacturing:<br /> Strengthening Nigeria’s defence independence and fostering economic growth through local manufacturing.</p>
                        </div>
                        <div className='flex text-[15px] gap-1 mt-10'>
                            <img src={check} alt='' className='w-[18px] h-[18px] items-start mt-[3px]' />
                            <p>Strategic Expertise: Years of experience in defence and security manufacturing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className='bg-[#303030] w-[37%] px-[50px] py-[70px] flex flex-col gap-7 mobile-width-full'>
                <p className='font-semibold text-[28px]'>Get in touch</p>

                <input type='text' placeholder='Name' className='border-none outline-0 w-[70%]'
                style={{
                    borderBottom: "1px solid #ffffff "
                }}/>
                <input type='email' placeholder='Email' className='border-none outline-0 w-[70%] mb-3'
                style={{
                    borderBottom: "1px solid #ffffff "
                }}/>
                <p>Content</p>
                <textarea className='border-none outline-0 w-[70%]'
                style={{
                    borderBottom: "1px solid #ffffff "
                }}/>
                <div className='flex items-center gap-3'>
                    <input type='checkbox' />
                    <p>I would like to receive the newsletter</p>
                </div>
                <button type='submit' className='bg-[#B77B6A] hover:bg-[#7e584e] w-[100px] py-2 font-medium cursor-pointer'>Submit</button>
            </form>
        </div>
    );
}

export default AboutPremier;
