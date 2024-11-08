import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <SignUp 
    routing="hash"
    redirectUrl="/auth/signin" 
  />
);

export default SignUpPage; 