import React from 'react';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./components/Login";
import TestHarness from "./components/TestHarness";

function AppContent() {
    const { currentUser } = useAuth();
    // If no user, show Login. If user exists, show Dashboard.
    return currentUser ? <Dashboard /> : <Login />;
}

export default function App() {
    // Simple path-based routing for the test harness
    if (window.location.pathname === '/test') {
        return <TestHarness />;
    }

    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}
