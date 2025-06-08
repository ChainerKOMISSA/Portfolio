"use client"
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiClipboard, FiCheck } from "react-icons/fi";

export default function CodeBlock({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative bg-gray-900 text-white rounded-md p-4 overflow-x-auto">
      <pre className="whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
            <CopyToClipboard text={code} onCopy={handleCopy}>
                <button
                    className="absolute top-2 right-2 text-sm bg-gray-800 hover:bg-gray-700 text-white p-2 rounded transition"
                    aria-label="Copy to clipboard"
                >
                    {copied ? <FiCheck className="text-green-400" /> : <FiClipboard />}
                </button>
            </CopyToClipboard>
        </div>
    );
}