import useFetchData from "../Hooks/useTanStack";

export default function Tech() {
    const TechKey = import.meta.env.VITA_TECHAPI
    const { data, isPending, error} = useFetchData(TechKey)

    if (isPending) return <p>Finding the news</p>
    if (error) return <p>Something went wrong, please refresh the page and try again.</p>

    return(
        <>
        <details>
            <summary>Tech news</summary>
            <ul>
                {data.results.map((article) => {
                    <li key={article.url}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noreferrer">
                            Read more
                        </a>
                    </li>
                })}
            </ul>
        </details>
        </>
    )
}