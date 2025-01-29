// components/auth/LoginForm.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const LoginForm = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto mt-8">
            <CardHeader>
                <CardTitle>Connexion</CardTitle>
            </CardHeader>
            <CardContent>
                {error && (
                    <Alert className="mb-4">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="Mot de passe"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Se connecter
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};