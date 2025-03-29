import footerLogo from '../assets/footerLogo.png';


function Footer() {
    return (
        <div className="bg-[#000000] text-[14px] text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex-wrap w-[100%] px-[6%] mt-20 pb-10">
            <img src={footerLogo} alt='logo' />
            <div className='flex flex-col gap-0.5 pl-10'>
                <h6 className='text-[17px] font-normal !mb-3'>PRODUCTS</h6>
                <p className='cursor-pointer hover:underline'>Defense Solutions</p>
                <p className='cursor-pointer hover:underline'>Secure Transportation</p>
                <p className='cursor-pointer hover:underline'>Uplifting Solutions</p>
                <p className='cursor-pointer hover:underline'>Fleet Management</p>
                <p className='cursor-pointer hover:underline'>Electric Vehicles</p>
            </div>
            <div className='flex flex-col gap-0.5 pl-10'>
                <h6 className='text-[17px] font-normal !mb-3'>CORPORATE</h6>
                <p className='cursor-pointer hover:underline'>Defense Solutions</p>
                <p className='cursor-pointer hover:underline'>Secure Transportation</p>
                <p className='cursor-pointer hover:underline'>Uplifting Solutions</p>
                <p className='cursor-pointer hover:underline'>Fleet Management</p>
                <p className='cursor-pointer hover:underline'>Electric Vehicles</p>
            </div>
            <div className='flex flex-col gap-0.5 pl-10'>
                <h6 className='text-[17px] font-normal !mb-3'>RESOURCES</h6>
                <p className='cursor-pointer hover:underline'>Defense Solutions</p>
                <p className='cursor-pointer hover:underline'>Secure Transportation</p>
                <p className='cursor-pointer hover:underline'>Uplifting Solutions</p>
                <p className='cursor-pointer hover:underline'>Fleet Management</p>
                <p className='cursor-pointer hover:underline'>Electric Vehicles</p>
            </div>
            <div className='flex flex-col gap-0.5 pl-10'>
                <h6 className='text-[17px] font-normal !mb-3'>CONTACT US</h6>
                <p className='cursor-pointer hover:underline'>Defense Solutions</p>
                <p className='cursor-pointer hover:underline'>Secure Transportation</p>
                <p className='cursor-pointer hover:underline'>Uplifting Solutions</p>
                <p className='cursor-pointer hover:underline'>Fleet Management</p>
                <p className='cursor-pointer hover:underline'>Electric Vehicles</p>
            </div>
        </div>
    );
}

export default Footer;
