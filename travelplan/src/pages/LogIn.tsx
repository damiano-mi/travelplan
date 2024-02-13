import { Link } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext";

export default function LogIn() {
    const {user, login} = useUserContext();

    function handleSubmit(e : any){
        e.preventDefault()
    }

    function handlePerson(e : any) {
        login({...user,[e.target.name]: e.target.value});
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center my-5" >
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Login</h5>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label" >Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handlePerson}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" />
                                </div>
                                <Link to="/">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
