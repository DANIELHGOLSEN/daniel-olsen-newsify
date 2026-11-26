import useFetchData from "../Hooks/useTanStack"

export default function Fashion() {

    const FashionKey = import.meta.env.VITE_FASHIONAPI
    const { data, isPending, error } = useFetchData(FashionKey)

    if (isPending) return <p>Finding the news.</p>
    if (error) return <p>Something went wrong, please refresh the page and try again.</p>

    console.log(data)


    return (
        <>
            <details>
                <summary>Fashion news</summary>
                <ul>
                    {data.results.map((article) => {
                        console.log(article)
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