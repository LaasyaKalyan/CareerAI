import { ClerkProvider } from "@clerk/nextjs";

const AuthLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <div className="flex justify-center pt-40">{children}</div>
    </ClerkProvider>
  );
};

export default AuthLayout;
