import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <SignIn 
    routing="hash"
    redirectUrl="/" 
    afterSignInUrl="/"
  />
);

export default SignInPage; 