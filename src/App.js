import logo from './logo.svg';
import './App.css';
import './style.css';
import pic from './ImageInSrc.jpg'
function App() {
  return (<>
    <div className="App">
   <div style={{border:'solid 1 black',maxWidth:'100vw'}}>

<h1 className="title red">sayed drissi</h1>

<br />

<img src={pic} />

<br />

<img src="./imageInPublic.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
    </>
  );
}

export default App;
