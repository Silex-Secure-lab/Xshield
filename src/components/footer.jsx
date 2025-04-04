import footerLogo from '../assets/footerLogo.png';


function Footer() {
    return (
        <div className="bg-[#000000] text-[12px] text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex-wrap w-[100%] px-[6%] mt-20 pb-10">
            <img src={footerLogo} alt='logo' className='' />
            <div className='flex flex-col gap-0.5 pl-10 mobilemt10'>
                <h6 className='text-[15px] font-normal !mb-3'>PRODUCTS</h6>
                <p className='cursor-pointer hover:underline'>Defense Solutions</p>
                <p className='cursor-pointer hover:underline'>Secure Transportation</p>
                <p className='cursor-pointer hover:underline'>Uplifting Solutions</p>
                <p className='cursor-pointer hover:underline'>Fleet Management</p>
                <p className='cursor-pointer hover:underline'>Electric Vehicles</p>
            </div>
            <div className='flex flex-col gap-0.5 pl-10 mobileMT10'>
                <h6 className='text-[15px] font-normal !mb-3'>CORPORATE</h6>
                <p className='cursor-pointer hover:underline'>About Us</p>
                <p className='cursor-pointer hover:underline'>Services</p>
                <p className='cursor-pointer hover:underline'>Capabilities</p>
                <p className='cursor-pointer hover:underline'>Military Component</p>
                <p className='cursor-pointer hover:underline'>News</p>
            </div>
            <div className='flex flex-col gap-0.5 pl-10 mobileMT10'>
                <h6 className='text-[15px] font-normal !mb-3'>RESOURCES</h6>
                <p className='cursor-pointer hover:underline'>Contact Us</p>
                <p className='cursor-pointer hover:underline'>Request Quote</p>
                <p className='cursor-pointer hover:underline'>Careers</p>
                <p className='cursor-pointer hover:underline'>Compliance</p>
                <p className='cursor-pointer hover:underline'>Faq</p>
            </div>
            <div className='flex flex-col gap-0.5 pl-10 mobileMT10'>
                <h6 className='text-[15px] font-normal !mb-3'>CONTACT US</h6>
                <p className='cursor-pointer hover:underline'>Email:  business@xshield.ng</p>
                <p className='cursor-pointer hover:underline'>Phone: (+234) 703 303 6373</p>
                <p className='cursor-pointer hover:underline'>Address: 28 Katampe Rd, Kado, <br />Jahi 900108, <br/>Abuja Nigeria. </p>
            </div>
        </div>
    );
}

export default Footer;
