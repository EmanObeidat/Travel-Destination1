import Header from '../Header/Header';
import Tours from '../Tours/tours';
import Footer from '../Footer/footer';
function Home(prop){
    return (
        <div className="container">
        <Header />
        <main>
          {
            prop.data.map((element)=>
              <Tours name={element.name} image={element.image} info={element.info} price={element.price} />
            )
          }
        </main>
        <Footer />
        </div>
      );
}

export default Home;