import React from 'react';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./components/Login";

function AppContent() {
    const { currentUser } = useAuth();
    // If no user, show Login. If user exists, show Dashboard.
    return currentUser ? <Dashboard /> : <Login />;
}

export default function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}
