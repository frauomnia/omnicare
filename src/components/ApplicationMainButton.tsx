"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type ApplicationMainButtonProps = {
    children: React.ReactNode,
    className?: string,
} & ComponentProps<"button">


export default function ApplicationMainButton(
    {children, className, ...props} : ApplicationMainButtonProps
) {
    const {pending} = useFormStatus();



    return(
        <button
        {...props}
        className={`${className}`}
        type="submit"
        disabled={pending}
        >
        {pending && <span className="loading loading-bars"></span>}
        {children}
            </button>
    )
}