import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  handleFunction: (selectedOption: string) => void;
  defaultValue: string;
  selectedOption?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  handleFunction,
  defaultValue,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    handleFunction(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button className="border-b border-slate-300" onClick={toggleDropdown}>
        {selectedOption || defaultValue}
        <img
          className={`inline transition-transform ml-7 ${
            isOpen ? "rotate-180" : ""
          }`}
          src="/images/dropdown.svg"
          alt=""
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
