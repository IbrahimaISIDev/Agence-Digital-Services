//views/LoginView.jsx
import { LoginForm } from '../components/auth/LoginForm';

export const LoginView = () => {
  console.log("Rendu LoginView");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
};
