import React from "react";

const Content = () => {
    return (
        <div className="h-full w-full top-0 left-0">
            <section>
                <div className="bg-[url(https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg)] bg-[] bg-center flex w-full h-[720] aspect-[2] flex-col md:bg-cover md:h-auto md:justify-center text-white justify-end">
                    <h1 className="text-white text-3xl md:text-5xl font-bold p-10 sm:p-16 md:p-96 w-full md:w-2/4">3 countries. 20+ products. 1 leading on-demand platform.</h1>    
                </div>
            </section>

            <section>
                <div className="bg-[#101820] text-white text-center space-y-2 pt-5 pb-28 h-full md:pb-20 md:pt-16 md:space-y-6">
                    <h1 className="text-3xl p-4 md:text-5xl font-bold">We're Gojek, the drivers of change</h1>
                    <button className="bg-[#00880D] text-white rounded-full font-semibold text-center w-40 h-11">Explore Careers</button>
                </div>
            </section>


            <section>
                <div className="bg-white h-[280px] justify-items-center">
                <div className="bg-[#101820] w-full h-24 pb-20"> </div>
                <div className="bg-white w-full h-24 rounded-t-full pb-20 -mt-24"> </div>
                        <div className="flex items-top flex-col gap-10  mt-[-160px] pb-10 md:flex-row">
                            <div className="text-black space-y-5 text-center justify-items-center w-96 pr-2 pl-2 md:w-96">
                                <img src="/pic1.svg" alt="image1" width={140} />
                                <h3 className="text-xl font-bold">Fortune's favorite</h3>
                                <p>Southeast Asia's only company to make it to Fortune's 'Change the World' list twice.</p>
                            </div>
                            <div className="text-black space-y-5 text-center justify-items-center w-96">
                                <img src="/pic2.svg" alt="image1" width={140} />
                                <h3 className="text-xl font-bold">$7.1 b contribution</h3>
                                <p>Value added to the Indonesian economy in 2019.</p>
                            </div>  
                            <div className="text-black space-y-5 text-center justify-items-center w-96">
                                <img src="/pic3.svg" alt="image1" width={140} />
                                <h3 className="text-xl font-bold">Tonne times greener</h3>
                                <p>Saved 11.3 tonnes of plastic in cutlery since October 2020.</p>
                            </div>  
                            <div className="text-black space-y-5 text-center justify-items-center w-96">
                                <img src="/pic4.svg" alt="image1" width={140} />
                                <h3 className="text-xl font-bold">Digitising merchants</h3>
                                <p>Resulted in 80% growth in number of GoFood merchants during pandemic.</p>
                            </div>  
                        </div> 
                </div>
            </section>

            <section>
                <div className="bg-white text-black text-center space-y-6 pt-[1100px] pb-10 md:pt-10">
                    <h1 className="text-3xl font-bold md:text-5xl">We scale like a dream</h1>
                    <button className="bg-[#00880D] text-white rounded-full font-semibold text-center w-40 h-11">Scale with us</button>
                </div>
            </section>

            <section>
                <div className="justify-items-center">
                    <div className="bg-white w-full gap-10"></div>
                    <div className="flex flex-col md:flex-row gap-10 pb-32 pr-4 pl-4">
                        <div className="text-black text-left">
                            <img src="/pic5.png" alt="image1" width={370} className="-mb-44"/>
                            <div className=" bg-[#7CCC6C] shadow-2xl shadow-[#7CCC6C] rounded-[40px] w-full h-[367px] pt-56 pr-10 pl-10 pb-10 items-center space-y-3">
                                <br />
                                <h3 className="text-3xl font-extrabold">190 million+</h3>
                                <p>app downloads since 2015</p>      
                            </div>
                        </div>
                        <div className="text-black text-left">
                            <img src="/pic6.png" alt="image2" width={370} className="-mb-44"/>
                            <div className=" bg-[#D48BC8] shadow-2xl shadow-[#D48BC8] rounded-[40px] w-full h-[367px] pt-56 pr-10 pl-10 pb-10 items-center space-y-3">
                                <br />
                                <h3 className="text-3xl font-extrabold">2 million+</h3>
                                <p>driver partners</p>      
                            </div>
                        </div>
                        <div className="text-black text-left">
                            <img src="/pic7.png" alt="image3" width={370} className="-mb-44"/>
                            <div className=" bg-[#FFAE62] shadow-2xl shadow-[#FFAE62] rounded-[40px] w-full h-[367px] pt-56 pr-10 pl-10 pb-10 items-center space-y-3">
                                <br />
                                <h3 className="text-3xl font-extrabold">900,000+</h3>
                                <p>GoFood merchants</p>      
                            </div>
                        </div>
                        <div className="text-black text-left">
                            <img src="/pic8.png" alt="image4" width={370} className="-mb-44"/>
                            <div className=" bg-[#4AC9E3] shadow-2xl shadow-[#4AC9E3] rounded-[40px] w-full h-[367px] pt-56 pr-10 pl-10 pb-10 items-center space-y-3">
                                <br />
                                <h3 className="text-3xl font-extrabold">2.448x</h3>
                                <p>jump in downloads from 2015 to 2020</p>      
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>




    )
}

export default Content;