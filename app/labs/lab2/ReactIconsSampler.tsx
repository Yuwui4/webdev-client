import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { FcVlc } from "react-icons/fc";
import { FiGithub } from "react-icons/fi"
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <FcVlc className="text-4xl" />
        <FiGithub className="text-4xl text-red-500" />
        <MdOutlineSchool className="text-4xl text-blue-600" />
        <HiOutlineSparkles className="text-4xl text-purple-600" />
      </div>
    </div>
  );
}