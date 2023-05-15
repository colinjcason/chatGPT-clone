const App = () => {
  return (
    <div className="app">
      <section className='side-bar'>
        <button>+ New chat</button>
        <ul className='history'>
          <li>chat</li>
        </ul>
        <nav>
          <p>Powered by chatGPT</p>
        </nav>
      </section>
      <section className='main'>
        <h1>chatGPT</h1>
        <ul className="feed">
          <li>response</li>
        </ul>
        <div className="bottom-section">
          <div className='input-container'>
            <input/>
            <div id='submit'>{'\u27A2'}</div>
          </div>
          <p className="info">
          Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 12 Version
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
