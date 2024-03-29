import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { tech } from '../data/dB';

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <div className="z-20">
    <div
      name="skill"
      className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300  py-32 z-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white z-20">
        <div className='z-20'>
          <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA] z-20">
            Skills
          </p>
          <p className="py-6 z-20">
            I have used and worked with the following technologies in my
            projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center z-20">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md transform hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="fade-up" data-aos-duration={id+'00'} data-aos-easing="linear"
            >
              <img
                src={src}
                alt=""
                className="mx-auto"
                style={{ width: "4rem", height: "4rem" }}
              />
              <p className="mt-1">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skill;