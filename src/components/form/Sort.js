import './sort.scss';
import Hero from '../hero/Hero';

const Sort = () => {
  return (
    <main>
      <section className='sort'>
        <div className='container'>
          <div className='sort__inner'>
            <form
              className='sort__form'
              action='https://echo.htmlacademy.ru/'
            >
              <input
                className='sort__input'
                id='focus'
                type='text'
                placeholder='Search for a country…'
              />
              <label className='sort__label' for="focus"></label>
              <select className='sort__select'>
                <option selected disabled>Filter by Region</option>
                <option value='1'>Africa</option>
                <option value='1'>America</option>
                <option value='1'>Asia</option>
                <option value='1'>Europe</option>
                <option value='1'>Oceania</option>
              </select>
            </form>
          </div>
        </div>
      </section>
      <Hero/>
    </main>
  );
};

export default Sort;
