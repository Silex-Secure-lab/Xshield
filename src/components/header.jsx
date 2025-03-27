import logo from '../assets/xhield-logo.png';
import phone from '../assets/phone.png';

function Header() {
    return (
        <div className='bg-white fixed top-0 z-50 h-[110px] flex w-[100%] justify-between items-center'
            style={{ boxShadow: "4px 11px 35px 0px #00000012" }}>
            <img src={logo} alt='' className='ml-[2%]' />
            <div className='text-[13px] flex justify-center items-center mr-[-40px] text-black gap-9'>
                <a>ABOUT US</a>
                <a>DEFENSE SOLUTIONS</a>
                <a>PRODUCTS AND SOLUTIONS</a>
                <a>CORORATE DIVISIONS</a>
                <a>SERVICES</a>
            </div>
            <a href='tel:+234 703 303 6373' rel='noreferrer' target='_blank'
                className='bg-[#7C5E50] text-white py-[26px] w-[370px] flex justify-center gap-4'>
                <img src={phone} alt='' className='w-[45px] h-[45px] !mt-[12px]' />
                <div className='flex flex-col items-start'>
                    <p className='text-[13px]'>Contact Sales</p>
                    <p className='text-[26px] font-bold'>(+234 703 303 6373)</p>
                </div>
            </a>
        </div>
    );
}

export default Header;
