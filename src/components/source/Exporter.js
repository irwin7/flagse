
const Flag = (props) => {
    const {country,url,popu,reg,capital,id} = props;

    return (
        <li id={id} className="hero__item item">
            <div className="item__header">
                <img className="item__img" src={url} />
            </div>
            <div className="item__hero">
                <p className="item__title">{country}</p>
                <ul className="item__list info">
                    <li className="info__item"><span className="info__title">Population: </span>{popu}</li>
                    <li className="info__item"><span className="info__title">Region: </span>{reg}</li>
                    <li className="info__item"><span className="info__title">Capital: </span>{capital}</li>
                </ul>
            </div>
        </li>
    )
}

export default Flag;