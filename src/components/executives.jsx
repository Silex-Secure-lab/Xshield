import noImg from '../assets/noImg.png';
import exe1 from '../assets/exe1.png';
import exe2 from '../assets/exe2.png';
import charles from '../assets/charles.jpg';
import frank from '../assets/frank.jpg';
import opeyemi from '../assets/opeyemi.jpg';
import nsisak from '../assets/nsisak.jpg';
import tuasinde from '../assets/tuasinde.jpg';

function Executive() {
    const executives = [
        // {
        //     img: noImg,
        //     name: "CHARLES IBANGA",
        //     title: "Chief Executive Officer & President",
        // },

        {
            img: charles,
            name: "CHARLES IBANGA",
            title: "MANAGING DIRECTOR",
        },
        {
            img: frank,
            name: "FRANK HEMEN ANONGO",
            title: "Production Manager",
        },
        {
            img: opeyemi,
            name: "OPEYEMI T. OBAYAN",
            title: "ED, Defence and Security Services Division",
        },
        {
            img: nsisak,
            name: "NSIKAK JOSEPH NELSON",
            title: "ED, Technology and Cyber Division",
        },
        {
            img: tuasinde,
            name: "TUASINDE EBIERE NICOLE",
            title: "CUSTOMER RELATIONS MANAGER",
        },
        // {
        //     img: noImg,
        //     name: "CHARLES IBANGA",
        //     title: "Chief Executive Officer & President",
        // },
        // {
        //     img: noImg,
        //     name: "CHARLES IBANGA",
        //     title: "Chief Executive Officer & President",
        // },
    ]
    return (
        <div className="bg-black text-white px-[9%] py-10">
            <h6 className="text-center text-[20px]">Meet our executives</h6>
            <h2 className="text-[35px] leading-[1.2] !mt-5 font-bold text-center">X-Shield Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                {executives.map((card, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <div className='md:w-[250px] md:h-[250px] overflow-hidden mb-2'>
                            <img src={card.img} alt='' className='w-full' />
                        </div>
                        <p className='font-bold text-[16px] !mt-2'>{card.name}</p>
                        <p className='text-[13px] text-center text-wrap !uppercase'>{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Executive