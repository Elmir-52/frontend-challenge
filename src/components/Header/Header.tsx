import { Link, useLocation } from "react-router";
import './Header.scss';

export default function Header() {
    const location = useLocation();

    function setActiveLink(pathName: string) {
        if (pathName === location.pathname) {
            return `header__link header__link_active`
        }
        return 'header__link';
    }

    return(
        <header className="header">
            <nav className="header__nav">
                <Link className={setActiveLink('/')} to='/' >Все котики</Link>
                <Link className={setActiveLink('/favorites')} to='/favorites' >Любимые котики</Link>
            </nav>
        </header>
    )
}