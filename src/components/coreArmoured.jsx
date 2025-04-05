import check3 from '../assets/check3.png';

function    CoreAmoured() {
    return (
        <div className="bg-[#000000] text-[#808080] w-[100%] px-[8%] py-20 mb-10">
            <div className="m-auto">
                <p className="text-[32px] font-medium text-[#E5E5E5]">Core Features</p>
                <div className="w-[130px] h-[1px] bg-white ml-[40px] mt-1" />
            </div>
            <div className='flex justify-between px-0 md:px-[6%] mt-10 mobile-flex-col'>
                <div className='bg-[#EEE9E9] rounded-[10px] p-7 flex flex-col gap-2 max-w-[48.5%] mobile-width-full'>
                    <img src={check3} alt="" className='w-[50px] h-[50px]'/>
                    <h5 className='font-medium text-[#0D0D0D] text-[17.5px] !mt-3'>Comprehensive Overview</h5>
                    <p>Users can access a comprehensive overview of the services offered within each category.</p>
                </div>
                <div className='bg-[#EEE9E9] rounded-[10px] p-7 flex flex-col gap-2 max-w-[48.5%] mobile-width-full'>
                    <img src={check3} alt="" className='w-[50px] h-[50px]'/>
                    <h5 className='font-medium text-[#0D0D0D] text-[17.5px] !mt-3'>Comprehensive Overview</h5>
                    <p>Users can access a comprehensive overview of the services offered within each category.</p>
                </div>
            </div>
            <div className='w-full h-[2px] bg-[#808080] mt-24 -mb-20' />
        </div>
    );
}
export default CoreAmoured