import { useEffect } from "react";
import pic from "../assets/pic1.jpg";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import file from "../assets/cv.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  /**
   * Handles the download button click event and downloads the resume file.
   */
  const handleDownload = () => {
    saveAs(file, "resume.pdf");
  };

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C] z-20"
    >
      <div className="flex flex-col justify-center items-center w-full h-full z-20">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 z-20">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4 z-20">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA] z-20">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 z-20">
          {/* Profile picture */}
          <div className="flex justify-center items-center z-20" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic}
              alt="mahdi laith"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2 z-20"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center z-20">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-[#00FFCA] z-20">
              Hi there , it&apos;s a pleasure to meet you
            </p>
            {/* Description */}
            <p className="text-sm leading-7 z-20">
              Frontend developer and Competitive Programmer, passionate about
              creating beautiful user experiences. Combining Frontend development
              skills with a keen eye for design. Striving to blend functionality
              with aesthetics, ensuring every pixel serves a purpose. Constantly
              learning and seeking new challenges to deliver innovative
              solutions.
            </p>
            {/* Download resume button */}
            <div className="mt-4 z-20">
              <button
                onClick={handleDownload}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold z-20"
              >
                Download resume{" "}
                <span className="group-hover:translate-y-1 duration-300 z-20">
                  <BsDownload className="ml-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;