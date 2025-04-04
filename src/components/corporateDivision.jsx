

function CorporateDivision() {
    const divisions = [
        {
            title: "DEFENSE AND SECURITY DIVISION",
            content: "The Defence and Security Division is a specialized unit that focuses on providing a comprehensive range of products, services, and expertise to address the complex challenges faced by military, law enforcement, government agencies, and other security-oriented clients. This division plays a critical role in developing, delivering, and supporting cutting-edge solutions that enhance national security, protect critical assets, and ensure the safety of citizens and security personnel.",
            bottom: "The Key responsibilities and features of the Defence and Security Division include;"
        },
        {
            title: "ARCHITECTURAL SOLUTION DIVISION",
            content: "The Architectural Armouring Solutions Division is a specialized segment focused on providing fortified and resilient architectural solutions to enhance the security and protection of buildings, structures, and critical infrastructure. This division combines advanced engineering, materials science, and security expertise to design, develop, and implement cutting-edge armor and protective systems for a wide range of environments.",
            bottom: "Key features and functions of the Architectural Armouring Solutions division may include;"
        },
        {
            title: "MOBILITY DIVISION`",
            content: "The Mobility Division is a specialized segment focused on designing, developing, and delivering a wide range of mobile and transport solutions for military, law enforcement, commercial and security applications.This division is responsible for creating innovative technologies and products that enhance the mobility, agility, and effectiveness of our clients, personnel, equipment, and operations in various challenging and dynamic environments.",
            bottom: "Key Responsibilities and Areas of Focus include:"
        },
        {
            title: "ENGINEERING AND TECHNOLOGY DIVISION",
            content: "The Engineering and Technology Division is a crucial and dynamic segment responsible for designing, developing, and implementing advanced technologies and engineering solutions to address the complex challenges and requirements of modern defense and security environments. This division plays a pivotal role in ensuring the company’s products and services are at the forefront of technological innovation, enabling military and security forces to operate effectively and efficiently in diverse and often high-stakes scenarios.",
            bottom: "Key features and functions of the Architectural Armouring Solutions division may include..."
        }
    ]

 return (
    <div className="bg-[#ffffff] text-black w-[100%] px-[6%] py-20 mobile-flex-col">
        <h4 className='text-[#7C5E50] text-[32px] font-bold text-center'>Corporate Divisions</h4>
        <p className='!mt-2 text-center text-[#333333] capitalize'>X-Shield Solutions operates through four core divisions, each dedicated to delivering specialized<br /> solutions tailored to the evolving needs of our clients.</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
            {divisions.map((card, index) => (
                <div key={index} className='flex flex-col gap-6 justify-center'>
                    <p className='font-semibold text-[#7C5E50] text-[16px] !mt-2'>{card.title}</p>
                    <p className='text-[13px] max-w-[80%]'>{card.content}</p>
                    <p className='text-[13px] max-w-[80%]'>{card.bottom}</p>
                    <button className="flex items-center gap-5 text-[#7C5E50] text-[15px] font-semibold">
                        <p>{"View More >"}</p>
                    </button>
                </div>
            ))}
        </div>
    </div>
    );    
} 

export default CorporateDivision;
