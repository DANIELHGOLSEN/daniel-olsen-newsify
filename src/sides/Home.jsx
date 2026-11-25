import "./Home.scss"
import Sport from '../components/Sport'

export default function Home() {
    const techKey = import.meta.env.TECHAPI
    const foodKey = import.meta.env.FOODAPI
    const movieKey = import.meta.env.MOVIEAPI

    return(
      <>
        <header>
            <img src="" alt="" />
            <h1>Newsify</h1>
        </header>
        <main>
            <input type="search" name="Search news" id="searchBar" />
            <section>
                <Sport />
            </section>
        </main>
      </>
    )

}