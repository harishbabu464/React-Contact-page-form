import './App.css';
export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyGUqeQAKpq8ctfpb0CQKZJGGE6odAjhE989Hnam3gBA-Vedr_0VADBCdv7BAs6jehmfA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="App">
      <h1 className="title">Contact Page Form</h1>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <input placeholder="Name" name="Name" type="text" />
        <input placeholder="Email" name="Email" type="email" />
        <input placeholder="Phone" name="Phone" type="tel" />
        <input placeholder="Message" name="Message" type="message" />
        <input className="button" type="submit" />
      </form>
    </div>
  );
}