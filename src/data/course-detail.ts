import type { CourseDetail, CourseInclude, CourseModule, LessonPreview } from "@/types";
import { assets } from "./assets";
import { courses } from "./courses";
import { creators } from "./creators";

// Every course page (About, Lessons, Reviews) shows the same details in the Figma design,
// so one template is shared and only the title changes per course.
const lessonPreview: LessonPreview[] = [
  { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const includes: CourseInclude[] = [
  { icon: "resources", label: "Learning Resources" },
  { icon: "video", label: "Quality Lesson Videos" },
  { icon: "certificate", label: "Certificate of Completion" },
  { icon: "consultation", label: "Private Consultation" },
];

const description = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

// Copied from the Figma design, including its numbering (there is no Module 3 in the design).
const modules: CourseModule[] = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export function getCourseDetail(slug: string): CourseDetail | undefined {
  const course = courses.find((item) => item.id === slug);
  if (!course) return undefined;

  return {
    slug: course.id,
    title: `${course.title}: A Comprehensive Guide`,
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    author: course.author,
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 172,
    students: 199,
    video: assets.course.video,
    lessonCount: 112,
    hours: 24,
    lessonPreview,
    moreVideos: 99,
    pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    price: course.price,
    priceSuffix: course.priceSuffix,
    includes,
    description,
    sneakPeek: assets.course.sneakPeek,
    keyPoints,
    modules,
    progress: 55,
    creator: creators[0],
  };
}
