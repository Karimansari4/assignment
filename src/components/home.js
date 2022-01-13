import { Fragment } from "react";
import '../css/home.css';
import idly from '../image/shutterstock-1154073754.png';
import lunch from '../image/shutterstock-1130181932.png';
import snacks from '../image/shutterstock-351721442.png';
import dinner from '../image/shutterstock-476864884.png';
import drinks from '../image/shutterstock-305270834.png';
import night from '../image/shutterstock-1304064250.png';


function Home() {
    return(
        <Fragment>
            <div className="banner">
                <div className="user">
                    <div className="login">
                        <a href="#" className="login-a">Login</a>
                    </div>
                    <div className="create">
                        <button type="button" className="create-button">Create an account</button>
                    </div>
                </div>
                <div className="logo-inputs">
                    <div className="logo">
                        e!
                    </div>
                    <div className="title">Find the best restaurants, cafes, and bars</div>
                    <div className="inputs">
                        <input type="search" placeholder="Please type a location" className="input-1" />
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search "
                            viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input type="search" placeholder="Search for restaurants" className="input-2" />
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="head">Quick Searches</h1>
                {/* ../image/shutterstock-1154073754@3x.png */}
                <p className="quick-title">Discover restaurants by type of meal</p>
                <div className="card">
                    <div className="card-items">
                        <div className="card-img">
                            <img src={idly} alt="img" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h2 className="card-head">Breakfast</h2>
                            <p className="card-title">Start your day with exclusive breakfast options </p>
                        </div>
                    </div>
                    <div className="card-items mr-10 sec-mr-10">
                        <div className="card-img">
                            <img src={lunch} alt="img" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h2 className="card-head">Lunch</h2>
                            <p className="card-title">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                    <div className="card-items mr-10">
                        <div className="card-img">
                            <img src={snacks} alt="img" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h2 className="card-head">Snacks</h2>
                            <p className="card-title">Start your day with exclusive breakfast options </p>
                        </div>
                    </div>
                    <div className="card-items sec-mr-10">
                        <div className="card-img">
                            <img src={dinner} alt="img" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h2 className="card-head">Dinner</h2>
                            <p className="card-title">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                    <div className="card-items mr-10">
                        <div className="card-img">
                            <img src={drinks} alt="img" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h2 className="card-head">Drinks</h2>
                            <p className="card-title">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                    <div className="card-items mr-10 sec-mr-10">
                        <div className="card-img">
                            <img src={night} alt="img" className="card-image" />
                        </div>
                        <div className="card-text">
                            <h2 className="card-head">Night Life</h2>
                            <p className="card-title">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="empty">

            </div>
        </Fragment>
    );
}

export default Home;