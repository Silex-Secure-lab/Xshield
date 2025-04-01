import defense from '../assets/defense.png';
import sys1 from '../assets/sys1.png';
import sys2 from '../assets/sys2.png';
import sys3 from '../assets/sys3.png';
import sys4 from '../assets/sys4.png';
import sys5 from '../assets/sys5.png';
import sys6 from '../assets/sys6.png';
import sys7 from '../assets/sys7.png';

function DefenseSystem() {
    const features = [
        {
            img: sys1,
            title: "Military-grade Ballistic steel plate",
        },
        {
            img: sys2,
            title: "Gun ports (fitted on all angles)",
        },
        {
            img: sys3,
            title: "High performance tyres for easy repositioning in the event of a gun fight)",
        },
        {
            img: sys4,
            title: "Bullet-resistant glass (designed to withstand AK47 ammunition)",
        },
        {
            img: sys5,
            title: "Sun shade",
        },
        {
            img: sys6,
            title: "Emergency Strobe lights",
        },
        {
            img: sys7,
            title: "Solar-powered Flood lights",
        },
    ]
    return (
        <div className="bg-[#ffffff] text-[#333333] w-[100%] px-[10%] py-20 mb-10">
            <h2 className='font-bold text-[35px] text-center'>DEFENSIVE FIGHTING SYSTEMS</h2>
            <p className='text-center mt-3'>Mobile Ballistic Shields For Enhanced Personnel Protection At Checkpoints And <br />Across Border Routes</p>
            <div className='flex justify-center items-center'>
                <img src={defense} alt="" />
                <p>The Defensive Fighting System Series also known as Mobile Ballistic Shield is designed to protect against the ever-increasing risk of active shooter and terrorist threats by providing head-to-toe protection on a mobile platform and unparalleled ballistic protection for personnel.

                   <br/><br/> Utilizing advanced lightweight ballistic materials, the Mobile Ballistic Shield Series are independently tested and ballistically certified as a system to provide head-to-toe protection particularly designed to protect against a wide variety of threats including pistol and rifle rounds up through 30-06 AP rounds, blast and fragments.


                </p>
            </div>
            <div className="m-auto">
                <p className="text-[32px] font-medium text-center">Core Features</p>
                <div className="w-[130px] h-[1px] bg-[#333333] m-auto mt-1" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                {features.map((card, index) => (
                    <div key={index} className='text-[#0D0D0D] rounded-[6px] flex justify-betweeen gap-5 items-center p-3'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                        <img src={card.img} alt='' className='w-[60px] h-[60px]' />
                        <p className='text-[13px]'>{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default DefenseSystem