import Link from 'next/link'
import {withRouter} from 'next/router'

function Navbar({router}) {

    let navs = [
        {text:'Home', href:'/'},
        {text:'About', href:'/about'},
        {text:'Portfolio', href:'/portfolio'},
        {text:'Contact', href:'/contact'}
    ]

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link href="/">
                        <a className="logo">Muhammad Soleh</a>
                    </Link>

                    <ul className="nav-links">
                        {
                            navs.map((el, index) => {
                                return(
                                    <li key={index}><Link href={el.href}><a className={`nav-item ${router.pathname == el.href ? 'active' : ''}`}>{el.text}</a></Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default withRouter (Navbar);