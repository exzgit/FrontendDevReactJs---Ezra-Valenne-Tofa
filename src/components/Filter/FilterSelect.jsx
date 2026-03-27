import React from "react";

function FilterSelect({ options, value, onChange, placeholder }) {
  return (
    <select
      className="px-3 border-b outline-none ring-none text-sm"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">{placeholder || "Pilih"}</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

export default FilterSelect;
