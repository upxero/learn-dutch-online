export const metadata = {
  title: "Learn Dutch Online - Practical affordable Dutch",
  description: "The best place to learn Dutch, at your own pace and in your own time ",
};

import GroupSummary from "@/components/group-summary";
import DutchTuitionIntro from "@/components/dutch-tuition";
import HeroGroup from "@/components/hero-group";
import BackToTopButton from "@/components/back-to-top";

export default function GroupCourses() {
  return (
    <>
      <HeroGroup />
      <div id="course">
        <GroupSummary />
      </div>
      <DutchTuitionIntro />
      <BackToTopButton />
    </>
  );
}