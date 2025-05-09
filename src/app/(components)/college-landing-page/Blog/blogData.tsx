import { Blog } from "@/app/[collegeName]/types/blog";


const blogData: Blog[] = [
  {
    id: 1,
    title: "Computer Science & Engineering",
    paragraph:
      "Learn the fundamentals of computing, AI, machine learning, data science, and software development.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Computer"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Electronics & TeleCommunication Engineering",
    paragraph:
      "Dive into the world of embedded systems, communication networks, and microelectronics.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Networks"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Electrical Engineering",
    paragraph:
      "Understand the intricacies of electrical systems, power distribution, and renewable energy technologies.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Power"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Civil Engineering ",
    paragraph:
      "Study the art and science of construction, infrastructure development, and urban planning.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },{
    id:5,
    title: "Mechanical Engineering",
    paragraph:
      "Master the principles of design, manufacturing, thermodynamics, and mechanics.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
