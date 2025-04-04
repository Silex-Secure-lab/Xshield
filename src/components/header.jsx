import logo from '../assets/xhield-logo.png';
import phone from '../assets/phone.png';
import { IoMenuSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleNavAbout = () => navigate('/about');
    const handleNavContact = () => navigate('/contact');
    const handleNavServices = () => navigate('/services');
    const handleNavCorporate = () => navigate('/corporate_division');
    const handleNavProduct = () => navigate('/products&_solutions');

    return (
        <div className='bg-white fixed top-0 z-50 h-[99px] flex w-full justify-between items-center'
            style={{ boxShadow: "4px 11px 35px 0px #00000012" }}>

            <img src={logo} alt='' className='pl-[2%]' />

            {/* Navigation Links */}
            <div className='text-[13px] flex justify-center items-center mr-[-40px] text-black gap-9 nodisplay'>

                <a onClick={handleNavAbout} className='cursor-pointer'>ABOUT US</a>
                <a className='cursor-pointer'>DEFENSE SOLUTIONS</a>

                {/* Products Submenu */}
                <div className="relative group cursor-pointer">
                    <a onClick={handleNavProduct} className='cursor-pointer'>PRODUCTS AND SOLUTIONS</a>
                    <div className="absolute top-full left-0 bg-[#8E6C5F] text-white shadow-md hidden group-hover:block z-50">
                        <Link to="/vigilance_towers"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Autonomous Ballistic Vigilance Towers</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/civilian_vehicle"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">Civilian Vehicle Armouring</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/defensive_fighting"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">Defensive Fighting System</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/patrol_truck"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">Up-Armoured Reinforced Patrol Truck</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/bulletproof"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">Lightweight Bulletproof Vest</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/autonomous"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">Autonomous Surveillance Outpost</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/war_horse"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">WarHorse</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/shield_blanket"><p className="hover:font-bold py-2 cursor-pointer text-nowrap  p-3">Foldable Tactical Ballistic Shield Blankets</p></Link>
                    </div>
                </div>

                <a onClick={handleNavCorporate} className='cursor-pointer'>CORPORATE DIVISIONS</a>

                <div className="relative group cursor-pointer">
                    <a onClick={handleNavServices} className='cursor-pointer'>SERVICES</a>
                    <div className="absolute top-full left-0 bg-[#8E6C5F] text-white shadow-md hidden group-hover:block z-50">
                        <Link to="/civilian_vehicle"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Vehicle Armouring Solutions</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/architectural_armour"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Architectural Armouring Solutions</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to=""><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Manufacture of Military Hardware</p></Link>
                        <div className='w-full h-[2px] bg-white' />

                        <div className="relative group/iss cursor-pointer">
                            <p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3 group-hover/iss:underline">Integrated Security Solutions</p>

                            <div className="absolute top-0 left-full ml-2 bg-[#5A3F34] text-white shadow-md hidden group-hover/iss:block z-50 w-60">

                                <p className="hover:underline py-2 px-4 cursor-pointer text-nowrap">Command & Control <br /> <b>Infrastructure</b></p>
                                <div className='w-full h-[2px] bg-white' />
                                <p className="hover:underline py-2 px-4 cursor-pointer text-nowrap">Surveillance and rapid <br /> <b>Response systems</b></p>
                                <div className='w-full h-[2px] bg-white' />
                                <p className="hover:underline py-2 px-4 cursor-pointer text-nowrap">Asset protection and operational support <br /> <b>Systems & services.</b></p>
                            </div>
                        </div>

                        <div className='w-full h-[2px] bg-white' />
                        <p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Specialised Services</p>
                    </div>
                </div>


            </div>

            {/* Contact CTA */}
            <a onClick={handleNavContact}
                className='bg-[#7C5E50] text-white py-[20px] w-[27%] flex justify-center gap-4 paddingMobile nodisplay cursor-pointer'>
                <img src={phone} alt='' className='w-[45px] h-[45px] !mt-[12px]' />
                <div className='flex flex-col items-start'>
                    <p className='text-[13px]'>Contact Sales</p>
                    <p className='text-[26px] font-bold'>(+234 703 303 6373)</p>
                </div>
            </a>

            {/* Mobile Menu Icon */}
            <div className='mobileOnly text-black text-5xl mr-5'>
                <IoMenuSharp />
            </div>
        </div>
    );
}

export default Header;
