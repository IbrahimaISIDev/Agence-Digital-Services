import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();  // Vérifie si l'utilisateur est connecté
    console.log("ProtectedRoute - user:", user);

    if (!user) {
        console.log("Redirection vers login");
        return <Navigate to="/login" replace />;
    }

    return children;
};
