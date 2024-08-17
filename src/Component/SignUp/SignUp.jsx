import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState("");
    const { createUser, updateUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        // Password validation
        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password must contain at least one uppercase letter.");
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError("Password must contain at least one lowercase letter.");
            return;
        }

        // Create user and update user profile
        createUser(email, password)
            .then((result) => {
                return updateUser(name, photoUrl);
            })
            .then(() => {
                setUser({ displayName: name, photoURL: photoUrl });
                setRegisterError("");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch((error) => {
                if (error.message.includes("email")) {
                    setRegisterError("Email already exists.");
                } else {
                    setRegisterError(error.message || "Registration failed. Please try again.");
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className="min-h-screen bg-base-200">
                <div className="text-center md:p-3 lg:p-10 md:text-3xl lg:text-5xl md:font-semibold lg:font-extrabold">
                    <p>Please Sign up</p>
                </div>
                <div className="hero">
                    <div className="card shrink-0 lg:w-1/3 mx-auto shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    name="photoUrl"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        className="input input-bordered w-full py-2 px-4"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter Your Password"
                                        name="password"
                                        required
                                    />
                                    <span
                                        className="absolute top-4 right-2 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>

                        {registerError && (
                            <p className="text-red-600 text-center">{registerError}</p>
                        )}
                        <div className="text-center pb-5">
                            <p>
                                Already have an account?{" "}
                                <Link className="font-bold text-blue-600" to="/login">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
