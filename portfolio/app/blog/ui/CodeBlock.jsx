"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiClipboard, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Tu peux changer le thème ici

export default function CodeBlock({ code, language = "javascript" }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative text-sm rounded-md overflow-hidden">
            <CopyToClipboard text={code} onCopy={handleCopy}>
                <button
                    className="absolute top-2 right-2 z-10 text-xs bg-gray-800 hover:bg-gray-700 text-white p-2 rounded transition"
                    aria-label="Copy to clipboard"
                >
                    {copied ? <FiCheck className="text-green-400" /> : <FiClipboard />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={dracula}
                customStyle={{
                    padding: "1.5rem 1rem 1rem", // top right/left bottom
                    borderRadius: "0.5rem",
                    backgroundColor: "#282a36",
                    margin: 0,
                }}
                wrapLines={true}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}