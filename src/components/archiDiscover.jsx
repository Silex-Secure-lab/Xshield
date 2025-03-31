import arch1 from '../assets/arch1.png';
import arch2 from '../assets/arch2.png';
import arch3 from '../assets/arch3.png';
import arch4 from '../assets/arch4.png';
import arch5 from '../assets/arch5.png';
import arch6 from '../assets/arch6.png';

function ArchiDiscover() {

  const executives = [
    {
      img: arch1,
      title: "Integrating ballistic-resistant materials into walls, windows, and doors to prevent bullets from penetrating the structure",
      name: "Ballistic Protection",
    },
    {
      img: arch2,
      title: "Designing multiple and easily accessible emergency exits to facilitate evacuation during crisis situations",
      name: "Emergency Exits",
    },
    {
      img: arch3,
      name: "Perimeter Security",
      title: "Installing barriers, bollards, and other physical obstacles to prevent unauthorized vehicles from approaching the building",
    },
    {
      img: arch4,
      title: "Implementing advanced security systems, including surveillance cameras, access control systems, and intrusion detection systems",
      name: "Electronic Security Systems",
    },
    {
      img: arch5,
      title: "Incorporating secure rooms within the building where occupants can seek refuge during emergencies.",
      name: "Safe Rooms",
    },
    {
      img: arch6,
      title: "Web design is a dynamic and creative discipline that encompasses the process of conceptualizing.",
      name: "Blast Resistance",
    },
  ];

  return (
    <div className="bg-[#EEE9E9] text-[#808080] px-[15%] py-10">
      <h6 className="text-center text-[#333333] text-[25px] font-semibold">
      Discover  What  Makes  Us Unique
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {executives.map((card, index) => (
          <div
            key={index}
            className={`cursor-pointer flex flex-col justify-center p-7 rounded-[10px] text-[#808080]`}
            style={{
              border: "1px solid #D6D6D6"
            }}
          >
          <img src={card.img} alt={card.title} className='w-[70px] h-[70px]'/>
            <p className="text-[18px] text-[#333333] font-medium !mt-2">{card.name}</p>
            <p className="text-[14px] font-normal !mt-2 ">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ArchiDiscover
