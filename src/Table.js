import React from "react";

export const Table = ({lists}) => {
  return (
    <div>
      <ul>
        
        {lists.map((item, i) => {
          return <li>{ item}</li>
             })}
      </ul>
    </div>
  );
};
