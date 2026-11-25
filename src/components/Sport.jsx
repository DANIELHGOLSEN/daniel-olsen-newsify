import useFetchData from "../Hooks/useTanStack"

export default function Sport() {

    const FashionKey = import.meta.env.VITE_FASHIONAPI
    const { data, isPending, error } = useFetchData(FashionKey)

    if (isPending) return <p>Finding the news.</p>
    if (error) return <p>Something went wrong, please reload the page and try again.</p>

    console.log(data)


    return (
        <>
            <details>
                <summary>Sport</summary>
                <ul>
                    {data.results.map((article) => {
                        console.log(article)
                        return (
                            <li key={article.url}>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noreferrer">
                                    Læs mere
                                </a>

                            </li>
                        )
                    })}
                </ul>
            </details>
        </>
    )

}