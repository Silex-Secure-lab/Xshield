import logo from '../assets/xhield-logo.png';
import phone from '../assets/phone.png';
import { IoMenuSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
 
    const handleNavAbout = () => {
        navigate('/about');
    }
    const handleNavContact = () => {
        navigate('/contact');
    }
    const handleNavServices = () => {
        navigate('/services');
    }
    const handleNavCorporate = () => {
        navigate('/corporate_division');
    }

    return (
        <div className='bg-white fixed top-0 z-50 h-[99px] flex w-[100%] justify-between items-center'
            style={{ boxShadow: "4px 11px 35px 0px #00000012" }}>
            <img src={logo} alt='' className='pl-[2%]' />
            <div className='text-[13px] flex justify-center items-center mr-[-40px] text-black gap-9 nodisplay'>
                <a onClick={handleNavAbout}>ABOUT US</a>
                <a>DEFENSE SOLUTIONS</a>
                <a>PRODUCTS AND SOLUTIONS</a>
                <a onClick={handleNavCorporate}>CORORATE DIVISIONS</a>
                <a onClick={handleNavServices}>SERVICES</a>
            </div>
            <a onClick={handleNavContact}
                className='bg-[#7C5E50] text-white py-[20px] w-[27%] flex justify-center gap-4 paddingMobile nodisplay'>
                <img src={phone} alt='' className='w-[45px] h-[45px] !mt-[12px]' />
                <div className='flex flex-col items-start'>
                    <p className='text-[13px]'>Contact Sales</p>
                    <p className='text-[26px] font-bold'>(+234 703 303 6373)</p>
                </div>
            </a>
            <div className='mobileOnly text-black text-5xl mr-5'>
                <IoMenuSharp />
            </div>
        </div>
    );
}

export default Header;
