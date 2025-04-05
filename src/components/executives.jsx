import noImg from '../assets/noImg.png';
import exe1 from '../assets/exe1.png';
import exe2 from '../assets/exe2.png';

function Executive() {
    const executives = [
        {
            img: noImg,
            name: "CHARLES IBANGA",
            title: "Chief Executive Officer & President",
        },
        {
            img: exe1,
            name: "FRANK H. ANONGO",
            title: "Production Manager / Quality Control",
        },
        {
            img: exe2,
            name: "OPEYEMI OBAYAN",
            title: "ED, Defence and Security Services Division",
        },
        {
            img: noImg,
            name: "NSIKAK J. NELSON",
            title: "ED, Technology and Cyber Division",
        },
        {
            img: noImg,
            name: "CHARLES IBANGA",
            title: "Chief Executive Officer & President",
        },
        {
            img: noImg,
            name: "CHARLES IBANGA",
            title: "Chief Executive Officer & President",
        },
        {
            img: noImg,
            name: "CHARLES IBANGA",
            title: "Chief Executive Officer & President",
        },
        {
            img: noImg,
            name: "CHARLES IBANGA",
            title: "Chief Executive Officer & President",
        },
    ]
    return (
        <div className="bg-black text-white px-[9%] py-10">
            <h6 className="text-center text-[20px]">Meet our executives</h6>
            <h2 className="text-[35px] leading-[1.2] !mt-5 font-bold text-center">X-Shield Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                {executives.map((card, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <img src={card.img} alt='' />
                        <p className='font-bold text-[16px] !mt-2'>{card.name}</p>
                        <p className='text-[13px] text-nowrap'>{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Executive