import './hero.scss';
import Card from './Card';
import data from '../../data';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <h2 className='visually-hidden'>Country's</h2>
        <div className='hero__inner'>
          {data.map((el) => {
            return (
              <Card
                img={el.img}
                title={el.name}
                population={el.population}
                capital={el.capital}
                region={el.region}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
