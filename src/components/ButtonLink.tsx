import React from "react";

interface Props {
    href: string;
    title: string;
}

const ButtonLink = ({ title, href }: Props) => {
    return (
        <div className="LinkButton">
            <a href={href} target="_blank">
                { title }
            </a>
        </div>
    );
}

export default ButtonLink;