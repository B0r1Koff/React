import React, { useEffect } from 'react';

let printLetters = (start, end) => {
  if(start.charCodeAt(0) <= end.charCodeAt(0)) {
    console.log(start);
    const nextLetter = String.fromCharCode(start.charCodeAt(0) + 1);
    setTimeout(() => printLetters(nextLetter, end), 1000);
  }
}

let App = () => {
  useEffect(() => {
    printLetters("A", "F");
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
