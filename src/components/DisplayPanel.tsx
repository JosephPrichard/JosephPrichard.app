import React from "react";

interface Props {
    title?: string;
    subtitle?: string;
    content?: React.ReactNode;
}

const DisplayPanel = ({ title, subtitle, content }: Props) => {
    return (
        <div>
            <h1>
                { title }
            </h1>
            <h3>
                { subtitle }
            </h3>
            <div>
                { content }
            </div>
        </div>
    )
}

export default DisplayPanel;