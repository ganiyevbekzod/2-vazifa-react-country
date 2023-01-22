import "./header.scss";

const Header = () => {
  return (
    <header className='site-header'>
      <div className='container'>
        <div className='site-header__inner'>
          <a className="logo" href='./index.html'>Where in the world?</a>
          <button
            className='mode-btn'
            type='button'
          >
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
