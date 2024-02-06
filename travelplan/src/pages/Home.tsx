import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const SOURCE = "https://restcountries.com/v3.1/";

export default function Home() {
    const { data: countries, isLoading, error } = useFetch(SOURCE + "all");
    return (
        <div className="container d-flex justify-content-center">
            <div className="card mb-3 my-3" style={{ width: '70%' }}>
                <img src="https://www.theschoolsignshop.co.uk/wp-content/uploads/2020/11/SSGE0001-WORLD-MAP.jpg" className="card-img-top" alt="world-map" />
                <div className="card-body">
                    <h4 className="card-title">Check a country:</h4>
                    {isLoading && <div className="spinner-border"><span className="visually-hidden">Loading</span></div>}
                    {!isLoading && error && <h3 className="text-center bg-dark my-1 text-white">Error in loading countries</h3>}
                    {!isLoading && (
                        <div className="container">
                            <div className="row">
                                {countries.map(country => (
                                    <div className="col-md-3" key={country.name.common}>
                                        <Link to={"/" + country.name.common}>
                                            <div className="btn btn-light card rounded d-flex align-items-center my-1">
                                                <img style={{ height: 40, width: 50 }} src={country.flags.svg} alt={country.flags.alt} className="border rounded" />
                                                <div className="container text-center">
                                                    <h4>{country.name.common.length <= 12 ? <p>{country.name.common}</p> : <p>{country.cca2}</p>}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}
