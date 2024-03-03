import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../Controllers/Hooks/app-hooks';
import { Link, Outlet } from 'react-router-dom'

const HeroHeader = () => {
    return <> <header className="">
        <div className="hero">
            <h3 className="absolute bottom-8 left-4 flex flex-wrap items-center">Report or Track
                <Link className="px-8 py-4 text-[var(--text-color)] text-fluid-1 rounded-full bg-[var(--prim-color)]" to="/login/choice">Issues</Link>
            </h3>
        </div>
    </header>
    </>
}



export default HeroHeader;
