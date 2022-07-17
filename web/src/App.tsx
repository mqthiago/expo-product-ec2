import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useFetch from 'react-fetch-hook';

function App() {
  const { data } = useFetch<{description:string;imageUrl?:string;}[]>('http://localhost:3333/product', {
    formatter: (response) => response.json(),
  });
  console.log(data);
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}> Vestuário de camisetas</h2>
      <Slider
        autoplay
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {
          data?.map((product) => (
            <div style={{ display: 'flex !import', justifyContent: 'center', width: '100%' }}>
              <figure>
                <img alt={product.description} style={{ margin: '0 auto', width: '200px' }} src={product.imageUrl} />
                <figcaption style={{ marginTop: '20px', textAlign: 'center' }}>{product.description}</figcaption>
              </figure>

            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default App;
