/**
 * API Configuration
 * 
 * Centralized configuration for API endpoints.
 * Uses environment variables with sensible defaults for local development.
 */

// Helper to get env var with fallback, explicitly checking for undefined/empty
const getEnvVar = (key: string, defaultValue: string): string => {
  const value = (import.meta.env as Record<string, string | undefined>)[key];
  return (value && typeof value === 'string' && value.trim() !== '') ? value : defaultValue;
};

export const API_BASE_URL = getEnvVar('VITE_API_BASE_URL', 'http://localhost:8000');
export const AUTH_SERVER_URL = getEnvVar('VITE_AUTH_SERVER_URL', 'http://localhost:8080');

