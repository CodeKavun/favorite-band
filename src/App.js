import image from "./Rammstein.jpg"
import './App.css';

function App() {
  return (
    <>
    <img src={image}/>
    <h2 className="band-name">Rammstein</h2>
    <div className="band-info">
      <div className="teem">
        <h3>Учасники в групі</h3>
        <p>Till Lindemann - вокал</p>
        <p>Richard Kruspe - соло-гітара, бек-вокал</p>
        <p>Paul Landers - ритм-гітара, бек-вокал</p>
        <p>Oliver Ridel - баз-гітара</p>
        <p>Kristian Lorenc - клавішні</p>
        <p>Kristof Schneider - ударні</p>
      </div>
      <div className="albums">
        <h3>Альбоми</h3>
        <p>1995 - Herzeleid</p>
        <p>1997 - Sehnsucht</p>
        <p>2001 - Mutter</p>
        <p>2004 - Reise, Reise</p>
        <p>2005 - Rosenrot</p>
        <p>2009 - Liebe ist fur alle da</p>
        <p>2019 - Rammstein</p>
      </div>
    </div>
    </>
  );
}

export default App;
