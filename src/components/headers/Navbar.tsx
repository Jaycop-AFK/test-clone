import {  useState,useRef} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/navbar.css'

type Props = {}

const Navbar = (props: Props) => {

    const pages = ['Home', 'Berita Muslim', 'Baitul','M Style','Muallaf','Love','Halal','Clip VIdeo',"Portfolio"];

    const navRef = useRef<HTMLElement | null>(null);

    const [activePage, setActivePage] = useState(pages[0]);

	const showNavbar = () => {
        if (navRef.current) {
          navRef.current.classList.toggle("responsive_nav");
        }
      };

  return (
    <div>
        <header>
            <img style={{width: 65}} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/themes/berita/assets/images/logo.png" alt="" />
                    <nav ref={navRef}>
                    {pages.map((page, index) => (
                        <a key={index} href={`/#${page}`}>
                            
                            {page}
                            
                        </a>
                    ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
    </button>
</header>
</div>
  )
}

export default Navbar