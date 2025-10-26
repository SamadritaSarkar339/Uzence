
import React from "react";
import { ComboboxMulti } from "./components/combobox/Combobox";
const CITIES = ["Kolkata","Bengaluru","Hyderabad","Delhi","Pune","Mumbai"];
export default function App() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Uzence Multi-Select Combobox</h1>
      <ComboboxMulti label="Select City" options={CITIES} allowCreate/>
    </main>
  );
}
