function NavBar() {
    return (
        <nav
            id="navbar-container"
            className="px-5 py-6 flex justify-between fixed w-full items-center bg-black text-white z-0"
        >
            <div
                id="logo"
                className="font-semibold hover:cursor-pointer text-lg"
            >
                <h1>NO EMPTY SEATS</h1>
            </div>

            <div id="nav-menu">
                <ul
                    id="nav-list"
                    className="flex justify-center items-center space-x-8 text-sm"
                >
                    <li
                        id="collab"
                        className="hover:cursor-pointer hover:underline"
                    >
                        COLLABORATIONS
                    </li>

                    <li
                        id="outreach"
                        className="hover:cursor-pointer hover:underline"
                    >
                        OUTREACH
                    </li>

                    <li
                        id="stories"
                        className="hover:cursor-pointer hover:underline"
                    >
                        SHARED STORIES
                    </li>

                    <li
                        id="contact"
                        className="flex justify-center items-center hover:cursor-pointer border border-white hover:bg-black hover:text-white delay-150 transition bg-white text-black h-8 w-24 rounded-full"
                    >
                        CONTACT
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
