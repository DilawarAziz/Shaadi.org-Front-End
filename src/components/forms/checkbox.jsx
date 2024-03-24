import React from 'react';

const Checkbox = ({ title, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 rounded-[2px] text-primary outline-none focus:ring-0"
      />
      <span className="text-gray-800">{title}</span>
    </label>
  );
};

export default Checkbox;
