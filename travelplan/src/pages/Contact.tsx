import {useState} from 'react';

export default function ContactForm(){
    const [formStatus, setFormStatus] = useState('Send');

    function handleSubmit(e : any){
        e.preventDefault();
        setFormStatus('Submitting...');

        setTimeout(() => { setFormStatus('Submitted!'); }, 1000);
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Contact us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button type="submit" className="btn btn-primary">{formStatus}</button>
            </form>
        </div>
    );
}
