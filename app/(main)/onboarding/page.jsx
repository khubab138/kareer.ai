import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industeries";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-Form";

const OnboardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard");
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
