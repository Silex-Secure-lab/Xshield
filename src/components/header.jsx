import { useState, useEffect } from 'react';
import logo from '../assets/xhield-logo.png';
import phone from '../assets/phone.png';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();

  useEffect(() => {
    // Close menu and reset scroll on route change
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

    const navigate = useNavigate();

    const handleNavAbout = () => navigate('/about');
    // const handleNavHome = () => navigate('/');
    const handleNavContact = () => navigate('/contact');
    const handleNavServices = () => navigate('/services');
    const handleNavCorporate = () => navigate('/corporate_division');
    const handleNavProduct = () => navigate('/products&_solutions');

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => {
            const newState = !prev;
            document.body.style.overflow = newState ? "hidden" : "auto";
            return newState;
        });
    };

    const [openProduct, setOpenProduct] = useState(false);

    const productOpen = () => {
        setOpenProduct(!openProduct);
    }

    const [openService, setOpenService] = useState(false);

    const serviceOpen = () => {
        setOpenService(!openService);
    }

    const [opensubService, setOpensubService] = useState(false);

    const subserviceOpen = () => {
        setOpensubService(!opensubService);
    }

    return (
        <div className='bg-white fixed top-0 z-50 h-[80px] md:h-[99px] flex w-full justify-between items-center'
            style={{ boxShadow: "4px 11px 35px 0px #00000012" }}>

            <Link to='/'><img src={logo} alt='' className='hidden md:block pl-[2%] w-[80px] md:w-auto md:h-auto' /></Link>
            <img src={logo} alt='' className='md:hidden pl-[2%] w-[80px] md:w-auto md:h-auto' onClick={toggleMenu} />

            {/* Navigation Links */}
            <div className='text-[13px] flex justify-center items-center mr-[-40px] text-black gap-9 nodisplay'>

                <a onClick={handleNavAbout} className='cursor-pointer'>ABOUT US</a>
                <a className='cursor-pointer'>DEFENSE SOLUTIONS</a>

                {/* Products Submenu */}
                <div className="relative group cursor-pointer">
                    <a onClick={handleNavProduct} className='cursor-pointer flex items-center gap-2'>PRODUCTS AND SOLUTIONS <IoIosArrowDown/></a>
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
                    <a onClick={handleNavServices} className='cursor-pointer flex items-center gap-2'>SERVICES <IoIosArrowDown/></a>
                    <div className="absolute top-full left-0 bg-[#8E6C5F] text-white shadow-md hidden group-hover:block z-50">
                        <Link to="/civilian_vehicle"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Vehicle Armouring Solutions</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to="/architectural_armour"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Architectural Armouring Solutions</p></Link>
                        <div className='w-full h-[2px] bg-white' />
                        <Link to=""><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Manufacture of Military Hardware</p></Link>
                        <div className='w-full h-[2px] bg-white' />

                        <div className="relative group/iss cursor-pointer">
                            <p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3 group-hover/iss:underline flex items-center gap-2">Integrated Security Solutions <IoIosArrowDown/></p>

                            <div className="absolute top-0 left-full bg-[#5A3F34] text-white shadow-md hidden group-hover/iss:block z-50">

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
                className='bg-[#7C5E50] text-white !w-[80%] md:!w-[27%] !h-full flex items-center justify-center md:gap-4 paddingMobile cursor-pointer'>
                <img src={phone} alt='' className='w-[45px] h-[45px] !mt-[12px]' />
                <div className='flex flex-col items-start'>
                    <p className='text-[13px]'>Contact Sales</p>
                    <p className='text-[16px] md:text-[26px] font-bold'>(+234 703 303 6373)</p>
                </div>
            </a>

            <div
                className={`overflow-y-auto z-[80] fixed top-0 px-[6%] left-0 w-full h-[100vh] bg-[#000000] bg-opacity-80 text-[15px] transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <p onClick={toggleMenu} className='relative top-5 left-[90%] right-0 text-2xl font-extrabold'>X</p>

                <nav className="flex flex-col gap-10 pb-3.5 text-[#ffffff] mobile-flex-menu sm-width"
                    style={{ borderBottom: "1px solid #686868" }}>
                    <a onClick={handleNavAbout} className="block hover:text-[#686868]">About Us</a>
                    <a className="block hover:text-[rgb(104,104,104)]">Defense Solutions</a>
                    <div className="block hover:text-[#686868]"><a onClick={productOpen} className='flex items-center gap-2'>Products and Solutions  {openProduct ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</a>
                        <div className={`${openProduct ? "block" : "hidden"} bg-[#000000] text-white mt-5 ml-3 z-50`}>
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
                    <a onClick={handleNavCorporate} className="block hover:text-[#686868]">Corporate Divisions</a>
                    <div className="block hover:text-[#686868]">
                        <a onClick={serviceOpen} className='flex items-center gap-2'>Services  {openService ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</a>
                        <div className={`${openService ? "block" : "hidden"} bg-[#000000] text-white mt-5 ml-3 z-50`}>
                            <Link to="/civilian_vehicle"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Vehicle Armouring Solutions</p></Link>
                            <div className='w-full h-[2px] bg-white' />
                            <Link to="/architectural_armour"><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Architectural Armouring Solutions</p></Link>
                            <div className='w-full h-[2px] bg-white' />
                            <Link to=""><p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Manufacture of Military Hardware</p></Link>
                            <div className='w-full h-[2px] bg-white' />
                            <div>
                                <p onClick={subserviceOpen} className="hover:font-bold py-2 cursor-pointer text-nowrap p-3 flex items-center gap-2">Integrated Security Solutions  {opensubService ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</p>
                                <div className='w-full h-[2px] bg-white' />
                                <div className={`${opensubService ? "block" : "hidden"} text-white z-50 ml-7`}>

                                    <p className="hover:underline py-2 px-4 cursor-pointer text-nowrap">Command & Control <br /> <b>Infrastructure</b></p>
                                    <div className='w-full h-[2px] bg-white' />
                                    <p className="hover:underline py-2 px-4 cursor-pointer text-nowrap">Surveillance and rapid <br /> <b>Response systems</b></p>
                                    <div className='w-full h-[2px] bg-white' />
                                    <p className="hover:underline py-2 px-4 cursor-pointer text-nowrap">Asset protection and operational support <br /> <b>Systems & services.</b></p>
                                </div>
                            </div>
                            <div className='w-full h-[2px] bg-white' />
                            <p className="hover:font-bold py-2 cursor-pointer text-nowrap p-3">Specialised Services</p>
                            <div className='w-full h-[2px] bg-white' />
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    );
}

export default Header;
