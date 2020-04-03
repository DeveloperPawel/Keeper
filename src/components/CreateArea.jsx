import React from "react";

function CreateArea(props) {
  const [text, setText] = React.useState({
    title: "",
    note: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setText(prevVal => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleChange}
          name="note"
          placeholder="Take a note..."
          rows="3"
          value={text.note}
        />
        <button
          onClick={() => {
            props.createNote(text.title, text.note);
            setText({
              title: "",
              note: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
