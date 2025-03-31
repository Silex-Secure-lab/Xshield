import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';
// import arr from '../assets/arRight.svg';

function MenuServices() {
  const navigate = useNavigate();

  const executives = [
    {
      img: s1,
      title: "Vehicle and Architectural Armouring",
      route: "/architectural_armour",
    },
    {
      img: s2,
      title: "Survey and Intelligence",
      route: "/survey_and_intelligence",
    },
    {
      img: s3,
      title: "Border Security",
      route: "/border_security",
    },
    {
      img: s4,
      title: "Critical Infrastructure Protection",
      route: "/critical_infrastructure_protection",
    },
    {
      img: s5,
      title: "Training and Consultation",
      route: "/training_and_consultation",
    },
    {
      img: s6,
      title: "Cyber Security",
      route: "/cyber_security",
    },
  ];

  return (
    <div className="bg-black text-white px-[18%] py-10">
      <h6 className="text-center text-[#EAB59F] text-[25px] font-semibold">
        Tailored Defense Solutions to Meet Your Needs
      </h6>
      <h2 className="text-[14px] text-center !mt-2">
        We serve as a Force Multiplier in strengthening Nigeria’s Defence Capabilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {executives.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.route)}
            className={`cursor-pointer flex flex-col justify-center items-center p-5 
              ${index % 2 === 0 ? 'bg-[#333333] text-[#F7F7F7]' : 'bg-[#E6E6E6] text-[#333333]'}`}
          >
            <img src={card.img} alt={card.title} />
            <div className="flex justify-between items-center w-full mt-5">
              <p className="text-[14px] font-bold underline">{card.title}</p>
              <FiArrowUpRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuServices;
