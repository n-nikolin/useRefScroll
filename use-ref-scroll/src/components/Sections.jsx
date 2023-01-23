import React from 'react'
import Section from './Section';
import Forwarded from './Forwarded';

const Sections = ({sections, sectionRefs, singleRef}) => {
  return (
    <ul>
    {sections.map((i) => {
      return <Section i={i} key={i} ref={sectionRefs} />;
    })}
    <Forwarded ref={singleRef} />
  </ul>
  )
}

export default Sections