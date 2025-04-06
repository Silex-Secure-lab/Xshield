import ghost from '../assets/ghost.png';



function Ghost() {
    return (
        <>
            <div className="bg-[#000000] text-[#AAAAAA] flex justify-between w-[100%] px-[10%] mt-0 md:!mt-20 mobile-flex-col">
                <div className='max-w-[38%] py-10 mobile-width-full'>
                    <h6 className='text-[#8E6C5F] text-[17px] font-semibold leading-[1.25]'>Dedicated to Protecting Lives, Securing Critical Assets and Enhancing National Security.</h6>
                    <p className='!mt-2 text-[14px] text-white font-medium !mb-5'>Strategic Partnership with DICON</p>
                    <p>X-shield’s strategic collaboration with the Defence Industries
                        Corporation of Nigeria ensures that our products meet the
                        highest standards of military-grade excellence, aligned with
                        national and global benchmarks.</p>
                    <p className='!mt-5'>Our partnership also enhances Nigeria’s capacity to meet its
                        security requirements independently, reducing reliance on
                        imports and fostering local industry growth. Together, we serve as
                        a force multiplier in strengthening Nigeria’s defence capabilities
                        by locally manufacturing and supplying armoured vehicles,
                        military hardware, and a broad array of security equipment.</p>
                </div>
                <div className='max-w-[52%] mt-[-50px] mobile-width-full'>
                    <img src={ghost} alt='' className='md:ml-[90px] ml-5' />
                </div>
            </div>
            
        </>
    );
}

export default Ghost;
