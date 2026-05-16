import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextValue {
  csrfToken: string | null;
  setCsrfToken: (token: string) => void;
  clearAuth: () => void;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [csrfToken, setCsrfTokenState] = useState<string | null>(null);

  const setCsrfToken = (token: string) => setCsrfTokenState(token);

  const clearAuth = () => setCsrfTokenState(null);

  const logout = () => {
    clearAuth();
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider
      value={{
        csrfToken,
        setCsrfToken,
        clearAuth,
        isAuthenticated: csrfToken !== null,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
