import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';
// import arr from '../assets/arRight.svg';

function ProductSec() {
  const navigate = useNavigate();

  const executives = [
    {
      title: "Defensive Fighting Systems (Mobile Ballistic Shields)",
      content: "These formidable shields, strategically positioned at checkpoints, border communities, critical installations, and high-value sites nationwide – educational institutions, provide a robust defense against varied threats, granting our personnel a shield of invincibility.",
    },
    {
      title: "Up-Armousred Patrol Trucks (Ballistic plating of all soft-skin Truck",
      content: "Fortified with ballistic plating, we equip soft-skin patrol trucks to ensure troop safety of officers during special operations, patrols, and reconnaissance missions, even in the face of unexpected ambushes or active shooter scenarios.",
    },
    {
      title: "Autonomous Surveillance Outposts and Towers (Ballistic Surveillance Booths)",
      content: "These advanced Surveillance Outposts, equipped with state-of-the-art surveillance and communication systems, bolster operational coordination, surveillance, monitoring and enable rapid response, safeguarding strategic locations and vulnerable communities in the event of an attack.",
    },
    {
      title: "Tactical Foldable Ballistic blanket",
      content: "A crucial addition to tactical operations, these blankets provide swift protection for personnel during active shooter or ambush situations, underscoring our unwavering commitment to their safety.",
    },
    {
      title: "Modified-combat- ready motorcycles",
      content: "Designed for agility and rapid response, these motorcycles empower our personnel in navigating challenging terrains and swiftly reaching distress zones, ensuring the security of remote border communities",
    },
    {
      title: "Lightweight ballistic vests (BR-IV)",
      content: " Personnel’s personal safeguard on active duty, these vests offer unwavering protection against threats, allowing them to perform their duties with confidence and resilience even in dangerous situations.",
    },
   
  ];

  return (
    <div className="bg-white text-[#4A4A4B] px-[12%] py-10">
      <h6 className="text-center text-[#7C5E50] text-[25px] font-semibold">
        Product and Solutions
      </h6>
      <h2 className="text-[14px] text-center !mt-2">
      Our Custom-designed, need-specific armoured systems and solutions enhance protection of <br />security personnel against a range of battlefield threats.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {executives.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.route)}
            className={`cursor-pointer flex flex-col justify-center p-5`}
          >
            
            <p className="text-[15px] font-bold underline">{card.title}</p>
            <p className="text-[13.5px] font-normal !mt-5">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSec;
