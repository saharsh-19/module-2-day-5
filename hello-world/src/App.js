import "./App.css"
import img1 from "./Assets/Images/camp.jpg"
function App(){
  return(
    <div>
      <h1 className="App">Saharsh Bagrodia Resume</h1>
      <p>Profile summary- Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam sed lobortis eleifend maximus interdum condimentum nulla. Rutrum nullam egestas est phasellus sed iaculis sociosqu. Urna mus dolor ridiculus euismod netus tincidunt donec vel. Habitant consectetur fusce suspendisse semper lorem. Viverra nibh consequat placerat elit rhoncus pretium; ornare gravida. Hac nullam convallis est scelerisque vestibulum potenti. Tristique accumsan tempus turpis gravida; aliquam eleifend nostra. Himenaeos accumsan felis ullamcorper mus magnis. Sodales aenean curae imperdiet tellus fermentum. Ullamcorper tempor mus mattis congue posuere molestie pellentesque facilisis.  </p>
      <hr></hr>
      <p>Skills</p>
      <ul>
        <li>java</li>
        <li>aws</li>
        <li>terraform</li>
      </ul>
      <hr></hr><hr></hr>
      <label>enter name</label>
      <input type='text' /><hr></hr>
      <img width='10%' src="https://th.bing.com/th/id/OIP.YDV2wuq6Brfetf0exDI_1gAAAA?rs=1&pid=ImgDetMain" alt="loading" ></img><br></br>
      <img width='100%' src={img1} alt="" />
    </div>
  )
}
export default App