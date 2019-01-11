import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
// import Lightbox from 'react-images'
import Header from '../components/Header'




class HomeIndex extends React.Component {

    constructor() {
        super();
    }

    render() {
        const siteTitle = "Danielle x Brandon Wedding";
        const siteDescription = "Danielle and Brandon are getting married and the wanted to let you know the deets about the special day. Please RSVP, check out the menu, and the schedule in the site below.";

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>
                <Header src="eiffel.jpg">
                    <h1>
                        Meet Us
                    </h1>
                </Header>
                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>Ipsum lorem dolor aliquam ante commodo<br />
                            magna sed accumsan arcu neque.</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex