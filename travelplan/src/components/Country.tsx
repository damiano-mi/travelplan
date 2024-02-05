import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import '../App.css';
const SOURCE = "https://restcountries.com/v3.1/name/";
let coords: Array<number>;
export default function Country() {

    const params = useParams();
    const id = params.id;
    const { data: countries, isLoading, error } = useFetch(SOURCE + id + "?fullText=true");
    return (
        <>
            {isLoading &&
                <div className="position-relative d-flex justify-content-center align-items-center my-3">
                    <div className="spinner-border" role="status"><span className="visually-hidden">Loading</span></div>
                </div>
            }
            {!isLoading && error && <h3 className="text-center bg-dark my-1 text-white">Error in loading the country data</h3>}
            {!isLoading && (
                countries.map(country => (
                    <div className="container d-flex justify-content-center" key={country.name.common}>
                        <div className="card mb-3 my-3 shadow" style={{ width: '50%' }}>
                            <div className="card-body">
                                <p className="card-text"></p>
                                <div className="">
                                    <h2 className="card-title text-center">{country.name.common}</h2>
                                    <img src={country.flags.png} className="card-img-top border border-dark rounded" alt={country.flags.alt} />
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Official name</th>
                                                <td>{country.name.official}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Capital</th>
                                                <td>{country.capital.map(capital => (<p key={capital}>{capital}</p>))}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Continents</th>
                                                <td>{country.continents.map(continent => (<p key={continent}>{continent}</p>))}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Region</th>
                                                <td>{country.subregion ? country.subregion : country.region}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Borders</th>
                                                <td>{country.borders ? country.borders.map(border => (<p key={border}>{border} </p>)) : <p>None</p>}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Population</th>
                                                <td>{country.population}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Area</th>
                                                <td>{country.area} km²</td>
                                            </tr> 
                                            <tr>
                                                <th scope="row">Coords</th>
                                                <td>{coords = country.latlng.map((l) => l)}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Timezones</th>
                                                <td>{country.timezones.length > 1 ?
                                                    country.timezones ? country.timezones.map(timezones => (<p key={timezones}>{timezones}</p>)) : <p>None</p>
                                                    : <p>{country.timezones}</p>
                                                }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Currencies</th>
                                                <td>{Object.keys(country.currencies).map((keyName) => (<p key={keyName}>{keyName}</p>))}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Languages</th>
                                                <td>{Object.keys(country.languages).map((keyName) => (<p key={keyName}>{keyName}</p>))}</td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-center align-items-center">
                                    <iframe 
                                    title="map"
                                    width="425"
                                    height="350" 
                                    src={"https://www.openstreetmap.org/export/embed.html?bbox=-0%2C0%2C0%2C90&layer=mapnik&marker="+coords[0]+"%2C"+coords[1]}
                                    >
                                    </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
