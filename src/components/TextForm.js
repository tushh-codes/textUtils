import React, { useState } from 'react';

const TextForm = (props) => {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    const NewText = text.toUpperCase();
    setText(NewText);
  };

  const handleLoClick = () => {
    const NewText = text.toLowerCase();
    setText(NewText);
  };
  const clearText = () => {
    const NewText = '';
    setText(NewText);
  };
  const copyText = () => {
    const textarea = document.createElement('textarea');
    const enteredText = text;

    if (!enteredText) {
      return;
    }

    textarea.value = enteredText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Text copied to clipboard');
  };

  const [text, setText] = useState('Enter The Text....');
  return (
    <div className='container my-5' id='textArea'>
      <h1 className='mb-3'>{props.heading}</h1>
      <div className='mb-3'>
        <button
          type='button'
          className='btn btn-primary my-3'
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type='button'
          className='btn btn-success my-3 mx-2'
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          type='button'
          className='btn btn-warning my-3 mx-2'
          onClick={copyText}
        >
          <i className='fas fa-clipboard'></i>
        </button>
        <button
          type='button'
          className='btn btn-danger my-3 mx-2'
          onClick={clearText}
        >
          <i className='fas fa-trash'></i>
        </button>
        <textarea
          value={text}
          className='form-control'
          id='exampleFormControlTextarea1'
          onChange={handleOnChange}
          rows='12'
        ></textarea>
      </div>
      <div className='container'>
        <h2>Text Summary</h2>
        <h6>
          {text.length} letters and{' '}
          {
            text.split(' ').filter((element) => {
              return element.length !== 0;
            }).length
          }
        </h6>
        <p>
          {0.008 *
            text.split(' ').filter((element) => {
              return element.length !== 0;
            }).length}{' '}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
