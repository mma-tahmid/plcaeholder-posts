import React from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Navbar from '../Components/Navbar';
import { CiCalendar } from 'react-icons/ci';

import { CiStar } from "react-icons/ci";

const BlogPost1 = () => {

    return (

        <>

            <Navbar />

            <div className='main-container '>
                <div className='border-[1px] border-[#DBD7D7]'> </div>
            </div>

            <div className='mt-[91px]'>
                <div className='main-container '>

                    <div className='flex justify-between '>
                        <div className='w-[590px] overflow-hidden'>
                            <img className='w-[100%] h-[100%] object-cover' src="https://i.ibb.co.com/zHtKCgD/blog-post-1.jpg" alt="blog_img_1" />

                        </div>

                        <div className='w-[600px]'>

                            <div className='flex justify-between items-center'>
                                <div className='flex gap-x-[14px] items-center'>
                                    <h6 className='text-[36px] text-[#000] font-["Roboto"] font-[700] leading-normal'>Example Blog Post 1</h6>
                                </div>

                                <button className='py-[8px] px-[20px] bg-[#E4E2E2] rounded-[10px]'>Design</button>
                            </div>


                            <div className='mt-2 flex gap-x-[14px] items-center'>
                                <CiCalendar className='text-black text-2xl font-bold' />

                                <h6 className='text-[20px] text-[#000] font-["Roboto"] font-[400] leading-normal'>December 24, 2024</h6>
                            </div>


                            <p className=' mt-2 max-w-[570px]'>
                                Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at
                            </p>

                        </div>

                    </div>


                    <div className='mt-[104px]'>
                        <div className='text-[24px] font-[600] font-["Inter"] text-[#1E1E1E]'>Latest reviews</div>
                    </div>

                    <div className='mt-[48px] flex items-center justify-between flex-wrap'>

                        <div className='w-[380px] px-[24px] pt-[24px] pb-[24px]  border-2 border-[#E4E2E2] rounded-[10px]  '>


                            <div className='flex gap-x-3 cursor-pointer'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>

                            <h4 className='mt-[15px] font-[600] text-[24px] font-["Inter"] text-[#1E1E1E]'>Review title</h4>
                            <h6 className='mt-1 font-[400] text-[16px] font-["Inter"] text-[#1E1E1E]'>Review body</h6>


                            <div className='mt-[15px] flex gap-x-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-[50%]'>
                                    <img className='object-cover' src="https://i.ibb.co.com/PDTfchT/profile-pic.jpg" alt="profile_pic" />
                                </div>

                                <div>
                                    <h3 className='text-[16px] font-[600] font-["Inter"] text-[#1E1E1E]'>Reviewer name</h3>
                                    <h6 className='text-[16px] font-[400] font-["Inter"] text-[#B3B3B3]'>Date</h6>
                                </div>
                            </div>

                        </div>

                        <div className='w-[380px] px-[24px] pt-[24px] pb-[24px]  border-2 border-[#E4E2E2] rounded-[10px]  '>


                            <div className='flex gap-x-3 cursor-pointer'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>

                            <h4 className='mt-[15px] font-[600] text-[24px] font-["Inter"] text-[#1E1E1E]'>Review title</h4>
                            <h6 className='mt-1 font-[400] text-[16px] font-["Inter"] text-[#1E1E1E]'>Review body</h6>


                            <div className='mt-[15px] flex gap-x-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-[50%]'>
                                    <img className='object-cover' src="https://i.ibb.co.com/PDTfchT/profile-pic.jpg" alt="profile_pic" />
                                </div>

                                <div>
                                    <h3 className='text-[16px] font-[600] font-["Inter"] text-[#1E1E1E]'>Reviewer name</h3>
                                    <h6 className='text-[16px] font-[400] font-["Inter"] text-[#B3B3B3]'>Date</h6>
                                </div>
                            </div>

                        </div>

                        <div className='w-[380px] px-[24px] pt-[24px] pb-[24px]  border-2 border-[#E4E2E2] rounded-[10px]  '>


                            <div className='flex gap-x-3 cursor-pointer'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>

                            <h4 className='mt-[15px] font-[600] text-[24px] font-["Inter"] text-[#1E1E1E]'>Review title</h4>
                            <h6 className='mt-1 font-[400] text-[16px] font-["Inter"] text-[#1E1E1E]'>Review body</h6>


                            <div className='mt-[15px] flex gap-x-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-[50%]'>
                                    <img className='object-cover' src="https://i.ibb.co.com/PDTfchT/profile-pic.jpg" alt="profile_pic" />
                                </div>

                                <div>
                                    <h3 className='text-[16px] font-[600] font-["Inter"] text-[#1E1E1E]'>Reviewer name</h3>
                                    <h6 className='text-[16px] font-[400] font-["Inter"] text-[#B3B3B3]'>Date</h6>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className='mt-[140px] mb-[50px]'>
                        <div>
                            <h1>Follow the latest trends</h1>
                            <h6>With our daily newsletter</h6>

                            <form action="">

                                <input className='w-[250px]' type="text" />

                                <button type="submit"> Submit </button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
};

export default BlogPost1;