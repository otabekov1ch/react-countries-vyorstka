
function Ul() {
    return (

        <ul className="site-hero__list">
            
        </ul>

    )
}
export default Ul

export function Li(count){
    return (
        <li className="site-hero__item country">
                <header className="country__header">
                    <img className="country__flag" src={count.imgSrc} alt="flag" width={264} height={160} />
                </header>
                <div className="country__body">
                    <h3 className="country__heading">
                        <a className="country__heading-link" href="country-single.html">{count.title}</a>
                    </h3>
                    <p className="country__population country__txt">
                        Population: <span className="country__population-count country__info">{count.pop}</span>
                    </p>
                    <p className="country__region country__txt">
                        Region: <span className="country__region-place country__info">{count.reg}</span>
                    </p>
                    <p className="country__capital country__txt">
                        Capital: <span className="country__capital-name country__info">{count.cap}</span>
                    </p>
                </div>
            </li>
    )
}