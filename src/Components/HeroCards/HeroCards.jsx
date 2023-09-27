import './style.css';

function HeroCards() {
  return (
    <div>
        <section className='section-services'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="header-section">
                            <h2 className="title">Exclusive<span> Service</span></h2>
                             <p className="description">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!
                             </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-mg-6 col-lg-4">
                        <div className="single-service">
                            <div className="part-1">
                                <i className="fab fa-500px"></i>
                                    <h3 className="title">Title</h3>
                            </div>
                            <div className="part-2">
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque laborum quasi rem exercitationem dignissimos. Quia aliquam voluptas ad totam quasi maxime ut inventore optio veritatis recusandae eaque, eveniet asperiores.</p>
                                <a href="#">
                                    <i className="fas fa-arrow-circle-right"></i>Read More +
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroCards;