// import Link from 'next/link'
import Navbar from './components/navbar'

export default function Portfolio() {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Portfolio</h1>
                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <div className="portfolio-wrapper">
                            <div className="portfolio-item">
                                <img src="/assets/img/sepatu.jpg" className="portfolio-image" />

                                <h4 className="portfolio-name">Portfolio Name</h4>
                                <div className="portfolio-category">Web Dev</div>
                            </div>
                            <div className="portfolio-item">
                                <img src="/assets/img/citcat.jpg" className="portfolio-image" />

                                <h4 className="portfolio-name">Portfolio Name</h4>
                                <div className="portfolio-category">Mobile Dev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}