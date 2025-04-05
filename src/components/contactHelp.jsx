
function ContactHelp() {
    return (
        <div className="bg-[#ffffff] text-[#4A4A4B] flex justify-between w-[100%] px-[6%] py-15 mobile-flex-col">
            
            <form className='w-[100%] px-[3%] flex flex-col gap-7 mobile-width-full'>
                <p className='font-normal text-[13px]'>SEND US A MESSAGE</p>
                <p className='font-bold text-[32px] text-[#8E6C5F]'>Contact Us</p>
                <p className='font-normal max-w-[45%] !mb-5 mobile-width-full'>We are happy to answer your questions and provide you with technical specifications and pricing. Please fill out the form below, and one of our sales representatives will be in touch with you shortly.</p>

                <input type='text' placeholder='FullName*' className='border-none outline-0 w-[100%] py-1 text-[13px]'
                style={{
                    borderBottom: "1px solid #8E6C5F "
                }}/>
                <input type='text' placeholder='Company*' className='border-none outline-0 w-[100%] mb-3 py-1 text-[13px]'
                style={{
                    borderBottom: "1px solid #8E6C5F "
                }}/>
                <input type='email' placeholder='Email*' className='border-none outline-0 w-[100%] mb-3 py-1 text-[13px]'
                style={{
                    borderBottom: "1px solid #8E6C5F "
                }}/>
                <input type='number' placeholder='Phone*' className='border-none outline-0 w-[100%] mb-3 py-1 text-[13px]'
                style={{
                    borderBottom: "1px solid #8E6C5F "
                }}/>
                <textarea type='text' placeholder='Message*' className='border-none outline-0 w-[100%] text-[13px] mt-20'
                style={{
                    borderBottom: "1px solid #8E6C5F "
                }}/>
                <button type='submit' className='text-white bg-[#B77B6A] hover:bg-[#7e584e] w-[200px] mt-5 py-2.5 font-medium cursor-pointer'>Submit</button>
            </form>
        </div>
    );
}

export default ContactHelp;
