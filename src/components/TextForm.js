import React, { useState } from 'react';


function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea class="form-control" id="my-box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1">Convert to Upper</button>
<button className="btn btn-primary mx-1">Convert to lower</button>

    </div>
  )
}

export default TextForm
