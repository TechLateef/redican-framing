import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function About() {
    return(
        <>
        <h1>About:</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique laboriosam ratione explicabo cum aperiam dolor, fuga assumenda ipsam repudiandae nisi vero, illum autem dolore quo ullam atque sapiente qui!</p>
        <Link to="/contact">Contact</Link>
        <Outlet />
        </>
    )
}