import React from "react";

const Navbar = ({ sections, sectionRefs, singleRef }) => {
    const handleClick = (id) => {
      sectionRefs.current[id].scrollIntoView();
    };
    
    const handleForwarded = () => {
      singleRef.current.scrollIntoView();
      console.log(singleRef);
    };
  
  return (
    <nav>
      {sections.map((index, i) => {
        return (
          <a key={index} onClick={() => handleClick(i)}>
            {index}
          </a>
        );
      })}
      <a onClick={handleForwarded}>forwarded to ref</a>
    </nav>
  );
};

export default Navbar;
