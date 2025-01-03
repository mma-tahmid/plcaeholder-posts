import React from 'react';
import { Link } from 'react-router-dom';
import { CiCalendar } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Posts = () => {

    return (

        <>

            <div className='mt-[139px]'>
                <div className='main-container'>

                    <div className='grid grid-cols-2 gap-y-9 justify-between'>

                        <div className='w-[600px] rounded-[10px] bg-[#F7F9F9] overflow-hidden'>

                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden relative  '>
                                <img className='w-[100%] h-[100%] object-cover' src="https://i.ibb.co.com/zHtKCgD/blog-post-1.jpg" alt="blog_img_1" />

                                <div className='absolute top-[19px] right-[22px] flex  items-center gap-x-1 py-2 px-6 rounded-[10px] bg-[#FFFFFF] w-[83px]'>
                                    <MdOutlineRemoveRedEye />

                                    <h6>10</h6>
                                </div>

                            </div>

                            {/* Content */}
                            <div className='pt-[29px] pr-[18px] pl-[44px] pb-[44px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>


                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-[14px] items-center'>
                                        <CiCalendar className='text-black text-2xl font-bold' />

                                        <h6 className='text-[24px] text-[#000] font-["Roboto"] font-[400] leading-normal'>December 24, 2024</h6>
                                    </div>

                                    <button className='py-[8px] px-[20px] bg-white rounded-[10px]'>Design</button>
                                </div>


                                <h4 className='mt-[29px] text-[36px] text-[#000] font-["Roboto"] font-[700] leading-normal'>Example Blog Post 1</h4>


                                <p className='max-w-[450px] mt-2 text-[#000] font-[400] font-["Roboto"] leading-normal '>
                                    Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at....  <Link to='/blog-post1'>
                                        <span className='text-blue-600'> Read More </span> </Link>
                                </p>

                            </div>

                        </div>

                        <div className='w-[600px] rounded-[10px] bg-[#F7F9F9] overflow-hidden'>

                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden relative  '>
                                <img className='w-[100%] h-[100%] object-cover' src="https://i.ibb.co.com/8MfMVPm/blog-post-2.jpg" alt="blog_img_1" />

                                <div className='absolute top-[19px] right-[22px] flex  items-center gap-x-1 py-2 px-6 rounded-[10px] bg-[#FFFFFF] w-[83px]'>
                                    <MdOutlineRemoveRedEye />

                                    <h6>10</h6>
                                </div>

                            </div>

                            {/* Content */}
                            <div className='pt-[29px] pr-[18px] pl-[44px] pb-[44px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>


                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-[14px] items-center'>
                                        <CiCalendar className='text-black text-2xl font-bold' />

                                        <h6 className='text-[24px] text-[#000] font-["Roboto"] font-[400] leading-normal'>December 24, 2024</h6>
                                    </div>

                                    <button className='py-[8px] px-[20px] bg-white rounded-[10px]'>Design</button>
                                </div>


                                <h4 className='mt-[29px] text-[36px] text-[#000] font-["Roboto"] font-[700] leading-normal'>Example Blog Post 1</h4>


                                <p className='max-w-[450px] mt-2 text-[#000] font-[400] font-["Roboto"] leading-normal '>
                                    Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at.... <Link>
                                        <span className='text-blue-600'> Read More </span> </Link>
                                </p>

                            </div>

                        </div>


                        <div className='w-[600px] rounded-[10px] bg-[#F7F9F9] overflow-hidden'>

                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden relative  '>
                                <img className='w-[100%] h-[100%] object-cover' src="https://i.ibb.co.com/fqYYyQk/blog-post-3.jpg" alt="blog_img_1" />

                                <div className='absolute top-[19px] right-[22px] flex  items-center gap-x-1 py-2 px-6 rounded-[10px] bg-[#FFFFFF] w-[83px]'>
                                    <MdOutlineRemoveRedEye />

                                    <h6>10</h6>
                                </div>

                            </div>

                            {/* Content */}
                            <div className='pt-[29px] pr-[18px] pl-[44px] pb-[44px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>


                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-[14px] items-center'>
                                        <CiCalendar className='text-black text-2xl font-bold' />

                                        <h6 className='text-[24px] text-[#000] font-["Roboto"] font-[400] leading-normal'>December 24, 2024</h6>
                                    </div>

                                    <button className='py-[8px] px-[20px] bg-white rounded-[10px]'>Design</button>
                                </div>


                                <h4 className='mt-[29px] text-[36px] text-[#000] font-["Roboto"] font-[700] leading-normal'>Example Blog Post 1</h4>


                                <p className='max-w-[450px] mt-2 text-[#000] font-[400] font-["Roboto"] leading-normal '>
                                    Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at.... <Link>
                                        <span className='text-blue-600'> Read More </span> </Link>
                                </p>

                            </div>

                        </div>


                        <div className='w-[600px] rounded-[10px] bg-[#F7F9F9] overflow-hidden'>

                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden relative  '>
                                <img className='w-[100%] h-[100%] object-cover' src="https://i.ibb.co.com/zNYS34B/blog-post-4.jpg" alt="blog_img_1" />

                                <div className='absolute top-[19px] right-[22px] flex  items-center gap-x-1 py-2 px-6 rounded-[10px] bg-[#FFFFFF] w-[83px]'>
                                    <MdOutlineRemoveRedEye />

                                    <h6>10</h6>
                                </div>

                            </div>

                            {/* Content */}
                            <div className='pt-[29px] pr-[18px] pl-[44px] pb-[44px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>


                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-[14px] items-center'>
                                        <CiCalendar className='text-black text-2xl font-bold' />

                                        <h6 className='text-[24px] text-[#000] font-["Roboto"] font-[400] leading-normal'>December 24, 2024</h6>
                                    </div>

                                    <button className='py-[8px] px-[20px] bg-white rounded-[10px]'>Design</button>
                                </div>


                                <h4 className='mt-[29px] text-[36px] text-[#000] font-["Roboto"] font-[700] leading-normal'>Example Blog Post 1</h4>


                                <p className='max-w-[450px] mt-2 text-[#000] font-[400] font-["Roboto"] leading-normal '>
                                    Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at.... <Link>
                                        <span className='text-blue-600'> Read More </span> </Link>
                                </p>

                            </div>

                        </div>









                    </div>

                </div>

            </div>
        </>
    );
};

export default Posts;