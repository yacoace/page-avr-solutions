import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Accordion = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion ${show && "active"} ${className}`}>
      <button className="accordion-header" onClick={() => setShow(!show)}>

        <span className="accordion-icon">{show ? <FaMinus /> : <FaPlus />}</span>

        {title}
      </button>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
