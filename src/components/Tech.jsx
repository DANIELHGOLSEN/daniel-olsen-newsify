import useFetchData from "../Hooks/useTanStack";
import Swiper from "../Hooks/useSwipe"

export default function Tech() {
    const TechKey = import.meta.env.VITE_TECHAPI
    const { data, isPending, error } = useFetchData(TechKey)

    if (isPending) return <p>Finding the news</p>
    if (error) return <p>Something went wrong, please refresh the page and try again.</p>

    return (
        <>
            <details>
                <summary>Tech news</summary>
                <ul>
                    {data.results.map((article) => {
                        return (
                            <li key={article.url} >
                                {article?.multimedia ? <img src={article.multimedia[0].url} alt="" /> : <img src="..assets/kittens.jpg" alt="" />}
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