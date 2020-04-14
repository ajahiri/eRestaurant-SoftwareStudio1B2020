import React from 'react';

const HomePage = () => {
    return (
        <div>
            <main role="main" className="inner cover">
                <div className="">

                </div>
                <h1 className="cover-heading">Authentic Italian cuisine.</h1>
                <p className="lead">Located in the heart of Sydney's inner west, Sapori Unici occupies the intriguing
                    space of a former spice market.</p>
                <p className="lead">
                    <a href="https://getbootstrap.com/docs/4.4/examples/cover/#" className="btn btn-lg btn-secondary">Book
                        Now</a>
                </p>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>eRestaurant web app developed for Software Engineering Studio 1B. <a target="_blank" href="https://github.com/ajahiri/SoftwareStudio_1B2020">Github</a>
                    </p>
                </div>
            </footer>
        </div>
    )
};

export default HomePage;