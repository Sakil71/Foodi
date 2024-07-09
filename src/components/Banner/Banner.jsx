import { assets } from "../../assets/assets"
const Banner = () => {
    return (
        <div className=" md:flex lg:flex justify-between items-center mb-20">
            <div className="w-full md:w-[70%] lg:w-[70%]">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-2"><span className="text-[#ec2d01]">Fast, Fresh <br /> & Right </span> <span>To Your Door</span></h1>
                <p className="text-xl opacity-70">Order dishes from favorite restaurants near you.</p>
                
                <form className="mt-10 flex w-full md:w-[80%] lg:w-[80%]">
                    <input type="text" className="outline-none px-4 py-4 border border-[#ec2d01] rounded-l w-full" placeholder="Enter food name" required />
                    <button className="bg-[#ec2d01] text-white text-xs px-2 w-32 rounded-r" type="submit">Find Food</button>
                </form>
            </div>
            <div className="w-[50%] hidden md:block lg:block">
                <img src={assets.foodie_banner} alt="" />
            </div>
        </div>
    )
}

export default Banner