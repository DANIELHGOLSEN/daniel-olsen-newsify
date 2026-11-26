// import { useState } from "react"
import useFetchData from "../Hooks/useTanStack"
// import Swiper from "../Hooks/useSwipe.js"

export default function Fashion() {

    const FashionKey = import.meta.env.VITE_FASHIONAPI
    const { data, isPending, error } = useFetchData(FashionKey)

    if (isPending) return <p>Finding the news.</p>
    if (error) return <p>Something went wrong, please refresh the page and try again.</p>

    // const [position, setPosition] = useState(0)

    // const swipeHandlers = Swiper({
    //     onSwipeLeft: () => setPosition(p => Math.max(p - 100, -100 * (antalSlides - 1))),
    //     onSwipeRight: () => setPosition(p => Math.min(p + 100, 0)),
    // })


    return (
        <>
            <details>
                <summary>Fashion news</summary>
                <ul>
                    {data.results.map((article) => {
                        console.log(article)
                        return (
                            <li key={article.url}>
                                {article?.multimedia ? <img src={article.multimedia[0].url}
                                    alt="" /> : <img src="..assets/kittens.jpg" alt="" />}
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noreferrer">
                                    Read more
                                </a>

                            </li>
                        )
                    })}
                </ul>
            </details>
        </>
    )

}