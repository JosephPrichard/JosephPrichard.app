import React, { useEffect, useState } from "react";

interface Props {
    finalText: string;
}

function getDelay() {
    return 150;
}

const AnimatedTitle = ({ finalText }: Props) => {

    const [text, setText] = useState("");

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const addCharacter = () => {
            setText(prev => {
                return prev.length < finalText.length ? prev + finalText[prev.length] : prev;
            });
            timeout = setTimeout(addCharacter, getDelay());
        };
        timeout = setTimeout(addCharacter, getDelay());
        return () => {
            clearTimeout(timeout);
        }
    }, [finalText]);

    return (
        <div>
            <h1 className="AnimatedTitle">
                { text }
                <span
                    className="AnimatedTitleCursor"
                    style={{
                        // display: text.length < finalText.length ? "inline-block" : "none"
                    }}
                />
            </h1>
        </div>
    );
}

export default AnimatedTitle;