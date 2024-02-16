import React from 'react'
import { Link } from 'react-router-dom'

const HeroHeader = () => {
    return <header className="">
        <div className="hero">
            <h3 className="absolute bottom-8 left-4 flex flex-wrap items-center"><span className="px-8 py-4 text-[var(--text-color)] text-fluid-1">Report or Track Issues</span> <Link to="/user/newuser" className="px-8 py-4 rounded-full bg-[var(--prim-color)] text-fluid-1 text-[var(--text-color)]">Create Account</Link>
                <Link to="/user/login" className="text-fluid-1 text-[var(--text-color)] font-bold px-4">Login</Link>
            </h3>
        </div>
    </header>
}

export default HeroHeader;
