import "./Home.scss"
import Fashion from '../components/Fashion'
import Food from "../components/Food"
import Tech from "../components/Tech"
import Movies from "../components/Movie"

export default function Home() {
    

    return(
      <>
        <header>
            <img src="" alt="" />
            <h1>Newsify</h1>
        </header>
        <main>
            <input type="search" name="Search for news" id="searchBar" />
            <section>
                <Fashion />
            </section>
            <section>
                <Food />
            </section>
            <section>
                <Movies />
            </section>
            <section>
                <Tech />
            </section>
        </main>
      </>
    )

}