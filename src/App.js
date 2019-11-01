import React from 'react';
import './App.css';

function App() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let name = params.get('name');

  return (
    <div className="main">
      <div className="item">
        <h1>hello, {name}</h1>
        <span role="img" aria-label="Raised Hand">✋</span>

        <ul className="animatedWorlds">
						<li>🌎</li>
						<li>🌎</li>
						<li>🌎</li>
						<li>🌎</li>
						<li>🌎</li>
						<li>🌎</li>
						<li>🌎</li>
					</ul>
      </div>
    </div>
  );
}

export default App;
