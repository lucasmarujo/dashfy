import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
      <SignUp
        routing="hash" // Opcional: remova se não desejar usar routing baseado em hash
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-opacity-90 text-white",
            card: "bg-transparent",
            headerTitle: "Criar sua Conta",
            headerSubtitle: "text-body dark:text-bodydark",
            socialButtonsBlockButton: "border border-stroke dark:border-strokedark",
            formFieldInput:
              "w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white",
            footerActionLink: "Já possui uma conta? Entre-aqui",
            formLabelPassword: "Senha",
          },
        }}
        redirectUrl="/auth/signin"
        afterSignUpUrl="/auth/signin"
      />
    </div>
  </div>
);

export default SignUpPage; 