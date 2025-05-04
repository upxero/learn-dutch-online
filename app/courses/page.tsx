export const metadata = {
  title: "Learn Dutch Online - Practical affordable Dutch",
  description: "The best place to learn Dutch, at your own pace and in your own time ",
};

import HeroCourses from "@/components/hero-courses";
import CourseSummary from "@/components/course-summary";
import DutchForAfrikaans from "@/components/dutch-afrikaans";
import DutchTuitionIntro from "@/components/dutch-tuition";
import BackToTopButton from "@/components/back-to-top";

export default function Courses() {
  return (
    <>
      <HeroCourses />
      <div id="course">
        <CourseSummary />
      </div>
      <DutchForAfrikaans />
      <DutchTuitionIntro />
      <BackToTopButton />
    </>
  );
}