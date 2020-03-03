import React, { useState } from 'react';

const MemberForm = props => {
  // console.log(props)
  const [input, setInput] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.setList([...props.list, input]);
    setInput({ name: '', email: '', role: '' });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="Name">Name</label>
      <input id="Name" name="name" type="text" placeholder="Name" value={input.name} onChange={handleChanges} />

      <label htmlFor="Email">Email</label>
      <input id="Email" name="email" type="text" placeholder="Email" value={input.email} onChange={handleChanges} />

      <label htmlFor="Role">Role</label>
      <input id="Role" name="role" type="text" placeholder="Role" value={input.role} onChange={handleChanges} />

      <button type="submit">Submit</button>
    </form>
  );
};

export { MemberForm };
