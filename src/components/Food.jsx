import useFetchData from "../Hooks/useTanStack";

export default function Food() {

    const FoodKey = import.meta.env.VITE_FOODAPI
    const { data, isPending, error } = useFetchData(FoodKey)

    if (isPending) return <p>Finding the news.</p>
    if (error) return <p>Something went wrong, please refresh the page and try again.</p>

    return (
        <>
            <details>
                <summary>Food news</summary>
                <ul>
                    {data.results.map((article) => {
                        return (
                            <li key={article.url}>
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