import { SignUp } from "@clerk/nextjs";

const page = () => {
  return <SignUp afterSignInUrl="/onboarding" />;
};

export default page;
