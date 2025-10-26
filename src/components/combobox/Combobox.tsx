
import React,{useState}from"react";
import { ComboboxMultiProps } from "./types";
import { unique } from "./utils";
export function ComboboxMulti({label,options,allowCreate=false}:ComboboxMultiProps){
  const [value,setValue]=useState<string[]>([]);
  const [query,setQuery]=useState("");
  const filtered=options.filter(o=>o.toLowerCase().includes(query.toLowerCase()));
  function addOption(opt:string){ if(!value.includes(opt)) setValue(unique([...value,opt])); setQuery(""); }
  return(<div className="w-full max-w-md">
    <label className="block font-semibold mb-1">{label}</label>
    <div className="border rounded p-2 flex flex-wrap gap-2">
      {value.map(v=><span key={v} className="bg-blue-100 px-2 py-1 rounded">{v}</span>)}
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Type..." className="flex-1 outline-none"/>
    </div>
    <ul className="border mt-1 rounded max-h-40 overflow-auto">
      {filtered.map(o=><li key={o} onClick={()=>addOption(o)} className="px-2 py-1 hover:bg-blue-50 cursor-pointer">{o}</li>)}
      {allowCreate && query && !options.includes(query)&&(
        <li onClick={()=>addOption(query)} className="px-2 py-1 italic text-blue-600 cursor-pointer">Create "{query}"</li>
      )}
    </ul>
  </div>);
}
