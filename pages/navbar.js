import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link href="/">
                        <a className="logo">Muhammad Soleh</a>
                    </Link>

                    <ul className="nav-links">
                        <li><Link href="/"><a className="nav-item">Home</a></Link></li>
                        <li><Link href="/components/about"><a className="nav-item">About</a></Link></li>
                        <li><Link href="/components/portfolio"><a className="nav-item">Portfolio</a></Link></li>
                        <li><Link href="/components/contact"><a className="nav-item">Contact</a></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}