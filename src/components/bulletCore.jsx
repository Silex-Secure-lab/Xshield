import bull1 from '../assets/bull1.png';
import bull2 from '../assets/bull2.png';
import bull3 from '../assets/bull3.png';
import bull4 from '../assets/bull4.png';
import bull5 from '../assets/bull5.png';
import bull6 from '../assets/bull6.png';
import bull7 from '../assets/bull7.png';
import bull8 from '../assets/bull8.png';

function BulletCore() {
    return (
        <div className="bg-[#000000] text-[#E5E5E5] w-[100%] px-[8%] py-5 mb-10">
            <p className="text-[32px] font-medium text-[#E5E5E5] !mb-10">Core Features</p>
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-[15px] gap-5">

                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull1} alt="" className='w-[42px] h-[40px]' />
                    <p>Dimensions: 25 x30 cm w shooters cut</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull2} alt="" className='w-[42px] h-[40px]' />
                    <p>NIJ Level IV STAND ALONE</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull3} alt="" className='w-[42px] h-[40px]' />
                    <p>Shooters cut for increased</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull4} alt="" className='w-[42px] h-[40px]' />
                    <p>Curved for close comfort</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull5} alt="" className='w-[42px] h-[40px]' />
                    <p>Constructed with high performance steel plates</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull6} alt="" className='w-[42px] h-[40px]' />
                    <p>Weight 2.73 kg</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull7} alt="" className='w-[42px] h-[40px]' />
                    <p>Thickness 4mm (excluding polyester casing)</p>
                </div>
                <div className='flex items-center rounded-[10px] px-8 gap-2 py-9'
                    style={{
                        border: "1px solid #D6D6D6"
                    }}>
                    <img src={bull8} alt="" className='w-[42px] h-[40px]' />
                    <p>Durable and water resistant polyester casing.</p>
                </div>
            </div>
        </div>
    )
}
export default BulletCore
