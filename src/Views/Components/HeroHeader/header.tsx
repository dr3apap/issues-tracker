import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HeroHeader = () => {
    return <> <header className="relative">
        <div className="hero">
            <h1 className="absolute top-8 left-4 flex flex-wrap items-center gap-8 text-fluid-1 text-[var(--text-color)]">Report or Track
                <Link className="px-8 py-4 text-[var(--text-color)] text-fluid-1 rounded-full bg-[var(--prim-color)]" to="/user/choice">Issues</Link>
            </h1>
        </div>
    </header>
    </>
}



export default HeroHeader;
