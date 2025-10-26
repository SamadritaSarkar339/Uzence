
import React from "react";
import { ComboboxMulti } from "./components/combobox/Combobox";

const CITIES = [
  "Kolkata",
  "Bengaluru",
  "Hyderabad",
  "Delhi",
  "Pune",
  "Mumbai",
  "Chennai",
  "Ahmedabad",
  "Jaipur",
  "Kochi"
];

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="glass-card max-w-2xl w-full p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
          ✨ Advanced Multi-Select Combobox
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Built with React + TypeScript + Tailwind. Accessible, animated, and responsive.
        </p>
        <ComboboxMulti
          id="city-combobox"
          label="Select Your Preferred Cities"
          options={CITIES}
          placeholder="Search or add a city..."
          allowCreate
        />
        <footer className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          © 2025 Uzence Design Studio • Enhanced UI Edition
        </footer>
      </div>
    </main>
  );
}
