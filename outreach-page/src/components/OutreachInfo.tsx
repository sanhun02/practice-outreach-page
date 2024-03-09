function OutreachInfo() {
    const categories = [
        "UPCOMING EVENTS",
        "CLUB CHAPTERS",
        "SPEECHES",
        "POLICY INVOLVEMENT",
    ];
    
    const dates = [
        "March 2, 2024",
        "March 3, 2024",
        "March 4, 2024",
        "March 5, 2024",
        "March 6, 2024",
        "March 7, 2024",
    ];

    return (
        <section
            id="info-container"
            className="flex flex-col space-y-10 py-5 font-semibold text-2xl pl-12"
        >
            <div id={categories[0] + "div"} className="flex flex-col space-y-5 mb-10">
                <div id="sub-title">
                    <p id={categories[0]}>{categories[0]}</p>
                </div>

                <div
                    id="scroll-section"
                    className="flex h-auto font-normal text-sm overflow-x-scroll hide-scroll-bar"
                >
                    <div className="flex flex-nowrap space-x-10">
                        {dates.map((date, ind) => (
                            <div
                                id={"scroll-box" + ind}
                                className="flex flex-col justify-end bg-zinc-300 h-96 w-96 rounded-2xl p-7 hover:cursor-pointer hover:brightness-90 delay-150 transition"
                            >
                                <div id={"scroll-title" + ind} className="font-medium text-xl">
                                    <p>FUNDRAISER</p>
                                </div>

                                <div id={"scroll-text" + ind} className="mt-1 font-light">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Nisi maiores aperiam
                                        tempore?
                                    </p>
                                </div>

                                <div id={"scroll-date" + ind} className="text-zinc-500 mt-3 font-normal">
                                    <p>{date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id={categories[1] + "div"} className="hover:cursor-pointer w-56 hover:underline">
                <p id={categories[1]}>{categories[1]}</p>
            </div>

            <div id={categories[2] + "div"} className="hover:cursor-pointer w-36 hover:underline">
                <p id={categories[2]}>{categories[2]}</p>
            </div>

            <div id={categories[3] + "div"} className="w-64 hover:cursor-pointer hover:underline">
                <p id={categories[3]}>{categories[3]}</p>
            </div>
        </section>
    );
}

export default OutreachInfo;
