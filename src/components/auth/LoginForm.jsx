// components/auth/LoginForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Correction du chemin d'importation
// import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Alert, AlertDescription } from "../ui/Alert";
import { useToast } from "../ui/use-toast";

export const LoginForm = () => {
    console.log("Rendu LoginForm");
    const navigate = useNavigate();
    const { login, loading: authLoading } = useAuth(); // Utilisation du loading depuis useAuth
    // const { login } = useAuth();
    const { toast } = useToast();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login(credentials);
            toast({
                title: "Connexion réussie",
                description: "Bienvenue dans votre espace de gestion",
                duration: 3000, // La notification disparaît après 3 secondes
            });
            navigate('/');  // Redirection vers la page principale après connexion
        } catch (err) {
            const errorMessage = err?.message || 'Une erreur est survenue lors de la connexion';
            setError(errorMessage);
            toast({
                variant: "destructive",
                title: "Erreur de connexion",
                description: errorMessage,
                duration: 5000, // Les messages d'erreur restent un peu plus longtemps
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (field) => (e) => {
        setCredentials(prev => ({ ...prev, [field]: e.target.value }));
        // Réinitialiser l'erreur quand l'utilisateur commence à corriger
        if (error) setError('');
    };

    return (
        <Card className="w-full max-w-md mx-auto mt-8">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-center">Connexion</CardTitle>
            </CardHeader>
            <CardContent>
                {error && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={credentials.username}
                            onChange={handleInputChange('username')}
                            required
                            disabled={isLoading}
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Mot de passe"
                            value={credentials.password}
                            onChange={handleInputChange('password')}
                            required
                            disabled={isLoading}
                            className="w-full"
                        />
                    </div>
                    <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};