/* A react component is a function that returns react elements
React elements are objects that are returned when we run jsx*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
function PageContent() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
ReactDOM.render(<PageContent />, document.getElementById("root"));
