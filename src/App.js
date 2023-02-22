import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Progress from "./Progress";
import Form from "./Form";
import React from "react";

function App() {
  return (
    <div className="parent">
      <Header />
      <div className="page_body">
        <div className="progress">
          <Progress />
        </div>
      </div>

      <div className="form_body">
        <div className="form1">
          <Form />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
