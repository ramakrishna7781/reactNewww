import { useState } from 'react';
import './App.css';

function HeartBackground({ children }) {
  return <div className="heart-background">{children}</div>;
}

function App() {
  const [page, setPage] = useState('first');

  const apologyMessage = (
    <>
      I know you are hurt and angry with me, I completely understand. Chat malli chadavadam valla na mistake ento naku ardam ayyindi. Konni things ki konchem ekkuve irritate ayya, Mari anthala undakunda undalsindi ani ippudu anipistondi and also "asalu nenena ala behave chesindi?" anipinchindi. I should've been more gentle and soft. I promise, next time whenever there's something, I'll think twice before reacting. Please trust me and accept my apologies. Ee sari tappu nade. Nene anthalaga arichi undakudadu. Thappu chesa, Okkasari kshaminchu, inkeppudu ila jaragadu. Naku baga ardam ayyindi, idi ninnu cool cheyyali ani cheppatledu, heartful ga cheptunna.
      <h2 className="love-text">
        I love youuuu <span className="heart">💜💜💜</span>
      </h2>
      I messed it up. Trust me, this won't happen next time. Idanta nene chesa, I am the one at fault this time. Ne tappu em ledu. Eesari thappu motham nade. Please accept my apologies.
    </>
  );

  return (
    <HeartBackground>
      {page === 'first' && (
        <div className="container">
          <h1 className="cutie-text">Hi cutieeeeeeeee!!!😚😚🐀🐀</h1>
          <button
            className="click-button"
            onClick={() => setPage('second')}
          >
            Click here
          </button>
        </div>
      )}
      {page === 'second' && (
        <div className="container">
          <div className="card">
            <p className="apology-text">{apologyMessage}</p>
            <button
              className="accept-button"
              onClick={() => {
                fetch("https://api.sheetbest.com/sheets/53b7095b-e130-4b2d-88f2-fb1d70ee0bae", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ accepted: true, time: new Date().toISOString() }),
                });
                setPage('thankyou');
              }}
            >
              Apology Accepted
            </button>
          </div>
        </div>
      )}
      {page === 'thankyou' && (
        <div className="container">
          <h2 className="thankyou-text">
            Awwwww thank you sooooo much, I am waiting for youuuu.....
          </h2>
          <img
            src="https://i.pinimg.com/564x/4f/4d/f8/4f4df8b0e504e35d01bedb8acd23171b.jpg"
            alt="Cute thank you image"
            className="thankyou-image"
          />
        </div>
      )}
    </HeartBackground>
  );
}

export default App;
