import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const testimonials = [
  {
    name: 'Adv.Annasaheb D. Chavan',
    designation: 'Chairperson, Board of Trustees',
    thought:
      'Our institution is committed to excellence in education, ensuring that each student is equipped with the knowledge and skills to thrive in the global landscape.',
    photo: '/images/trustee/1.jpg',
  },
  {
    name: 'Dr.Yashwant A.Chavan',
    designation: 'Chairperson, Board of Trustees',
    thought:
      'We strive to foster a nurturing environment where innovation, creativity, and leadership are encouraged in all aspects of learning and development.',
    photo: '/images/trustee/2.jpg',
  },
  {
    name: 'Dr.Sanjay A.Chavan',
    designation: 'Chairperson, Board of Trustees',
    thought:
      'Our primary focus is to create an inclusive community where students are supported in every step of their academic and personal journey, empowering them to succeed.',
    photo: '/images/trustee/3.jpg',
  },
];


const AboutSectionOne = () => {
  const List = (props:any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {props.text}
    </p>
  );

  return (
    <>
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 mx-32">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Shaping Tomorrow's Leaders"
                paragraph="At SGMCOE, we are dedicated to the holistic development of our students, nurturing not only academic excellence but also essential life skills. Through a blend of innovative programs, mentorship, and hands-on experiences, we empower students to lead, innovate, and excel in their chosen fields. Our focus on personal growth, leadership training, and career readiness ensures every graduate is prepared to thrive in a dynamic and competitive world."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Empowerment" />
                    <List text="Innovation" />
                    <List text="Leadership" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Future-Ready" />
                    <List text="Curriculum" />
                    <List text="Development" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/studentGroup.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0"
                />
                {/* <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 dark:bg-slate-900 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white text-gray-800 mb-12">
          We Are Committed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
            >
              <div className="flex justify-center">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-blue-500 text-sm font-medium">
                  {testimonial.designation}
                </p>
                <p className="text-gray-600 mt-4 italic">
                  {testimonial.thought}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSectionOne;