import React from 'react'

export default function Announcer({ message }) {
    return (
        <div>
            <div role="region" aria-live="polite" className="visually-hidden">
                {message}
            </div>
        </div>
    )
}
