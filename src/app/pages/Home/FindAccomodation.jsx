import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import {LuTableProperties} from "react-icons/lu";
import {IoLocation} from "react-icons/io5";
import {CgCalendarDates} from "react-icons/cg";
import {MdQueryStats} from "react-icons/md";

const FindAccomodation = () => {
    return (
        <div className="container ">
            <div className="md:grid md:grid-cols-2 gap-10 mt-20">
                <div className="flex flex-col justify-center">
                    <h2 className="heading">
                        <span>How to find accommodation?</span>
                    </h2>
                    <p className="desc pt-3">
                        A simple and effortless way to find and book the best
                        stay for your staff.
                    </p>
                    <div>
                        <Link href="" className="btn-secondary mt-6 group">
                            Get a Quote{" "}
                            <FaArrowRight className="ml-2 group-hover:ml-4 duration-300 " />
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 text-center mt-8 md:mt-0 text-white">
                    <div className="bg-gradient-to-r  to-primary from-blue-800  flex flex-col justify-center items-center rounded-xl px-4 py-8 ">
                        <IoLocation size={38} />
                        <h2 className="md:text-xl text-lg mt-2">
                            Search by location
                        </h2>
                    </div>
                    <div className="bg-gradient-to-r  to-primary from-blue-800  flex flex-col justify-center items-center rounded-xl px-4 py-8">
                        <CgCalendarDates size={38} />
                        <h2 className="md:text-xl text-lg mt-2">
                            Filter by dates
                        </h2>
                    </div>
                    <div className="bg-gradient-to-r  to-primary from-blue-800  flex flex-col justify-center items-center rounded-xl px-4 py-8">
                        <LuTableProperties size={38} />
                        <h2 className="md:text-xl text-lg mt-2">
                            Find properties
                        </h2>
                    </div>
                    <div className="bg-gradient-to-r  to-primary from-blue-800  flex flex-col justify-center items-center rounded-xl px-4 py-8">
                        <MdQueryStats size={38} />
                        <h2 className="md:text-xl text-lg mt-2">
                            Send enquiry
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindAccomodation;
