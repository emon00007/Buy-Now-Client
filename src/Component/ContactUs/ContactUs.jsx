import { Helmet } from "react-helmet";
import 'animate.css';


const ContactUs = () => {
    return (
        <div >
              <Helmet><title>contact</title></Helmet>
            <section id="ContactUs" className="p-6 animate__animated animate__backInLeft text-white">
                <form noValidate="" className="container bg-black w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow bg-green-500 text-white">Send</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default ContactUs;