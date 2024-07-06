import React from 'react';

export default function Download({ Label, Link }) {
    return (
        <a 
            className="bg-slate-900 text-white px-4 py-2 rounded-lg ml-4 inline-flex items-center" 
            href={Link} 
            download
        >
            {Label}
            <span className="material-icons ml-2 mb-auto text-lg">
                download
            </span>
        </a>
    );
}
