import React from 'react';

const Header = () => {

    return (

        <>

            <div className='main-container'>

                <div className='border-[1px] border-[#DBD7D7]'> </div>

                <div className='mt-[89px] flex flex-col gap-y-3 sm:flex-row items-center place-items-center justify-between'>

                    <h5 className=' text-[35px] sm:text-[35px] lg:text-[64px] text-[#000] font-[700] font-["Roboto"] leading-normal'>Placeholder Posts</h5>

                    <div className=''>
                        <input className=' w-[290px] sm:w-[350px] md:w-[400px] lg:w-[500px] outline-none rounded-[10px] bg-[#F0F1F5] pt-[24px] pb-[12px] ps-4 placeholder:-ps-4 ' placeholder='Search...' type="search" />
                    </div>
                </div>



            </div>
        </>
    );
};

export default Header;