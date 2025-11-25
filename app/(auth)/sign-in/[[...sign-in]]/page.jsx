import { SignIn } from "@clerk/nextjs";

const page = () => {
  return <SignIn afterSignInUrl="/onboarding" />;
};

export default page;
