import React from 'react';

const MembersList = props => {
  console.log(props);
  return (
    <>
      <div className="memberList">
        <div className="intro">
          <strong>My awesome programming team is composed of</strong>
        </div>
        <br />

        {props.list.map(member => {
          //console.log(member.id)
          return (
            <div className="memberNames">
              <ul>{`${member.name}, who is a ${member.role} and can be reached at ${member.email} `}</ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { MembersList };
