/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {resistationSchema} from "@/schemas";
import {useFormik} from "formik";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import toast from "react-hot-toast";
import {FcGoogle} from "react-icons/fc";

const RegisterPage = () => {
    const {token} = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (token) {
            router.push("/");
        }
    }, [token]);
    const initialResisterValues = {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialResisterValues,
            validationSchema: resistationSchema,
            onSubmit: async (values, action) => {
                const {username, email, password, confirm_password} = values;
                try {
                    const response = await fetch(
                        `http://127.0.0.1:8000/sign-up`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                username,
                                email,
                                password,
                                confirm_password,
                            }),
                        }
                    );
                    const data = await response.json();
                    if (data.success) {
                        toast.success("Account created successfully.");
                        action.resetForm();
                        router.push("/authtentication/login");
                    } else {
                        toast.error(
                            data?.username ||
                                data?.email ||
                                "Something went wrong"
                        );
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        });
    return (
        <div className="container">
            <div className="flex justify-center items-center mt-8">
                <div className="shadow bg-blue-gray-50 md:w-[500px] md:p-8 p-4 rounded-md">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            <span>Sign Up</span>
                        </h2>
                        <p className="desc mt-2">
                            Get Started with us. Fill in all the Details
                            required.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <label className="block text-base mb-1">
                                Username
                            </label>
                            <input
                                className=" border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="username"
                                type="username"
                                name="username"
                                placeholder="Enter username..."
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.username && touched.username && (
                                <p className="text-red-500">
                                    {errors.username}
                                </p>
                            )}
                        </div>
                        <div className="mt-2">
                            <label className="block text-base mb-1">
                                Email Address
                            </label>
                            <input
                                className=" border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="email"
                                type="email"
                                placeholder="Enter email..."
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && (
                                <p className="text-red-500"> {errors.email}</p>
                            )}
                        </div>

                        <div className="mt-2">
                            <label className="block text-base mb-1">
                                Password
                            </label>
                            <input
                                className=" border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password..."
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && (
                                <p className="text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="mt-2">
                            <label className="block text-base mb-1">
                                Confirm Password
                            </label>
                            <input
                                className=" border border-gray-500 rounded w-full py-2.5 px-3  focus:outline-none focus:shadow-outline focus:border-gray-700 placeholder:text-gray-700"
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
                                placeholder="Enter confirm password..."
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.confirm_password &&
                                touched.confirm_password && (
                                    <p className="text-red-500">
                                        {errors.confirm_password}
                                    </p>
                                )}
                        </div>
                        <div className="mt-2">
                            <button className="btn-primary py-3 font-semibold  w-full">
                                Sign Up
                            </button>

                            <div className=" mt-2 flex justify-center">
                                <div className=" border-gray-700">
                                    -----------------
                                </div>
                                <h2 className="text-lg -mt-1"> or </h2>
                                <div className=" border-gray-700">
                                    -----------------
                                </div>
                            </div>
                            <div className="mt-2">
                                <button className="btn-secondary inline-flex justify-center items-center py-3 font-semibold  w-full">
                                    <FcGoogle className="mr-2" size={22} />{" "}
                                    Continue with google
                                </button>
                            </div>
                            <div className="mt-2">
                                <div className="desc">
                                    Already have an account?
                                    <Link
                                        href={"/authtentication/login"}
                                        className="hover:underline">
                                        {" "}
                                        <span> Login from Here</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;