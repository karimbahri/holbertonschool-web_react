import React from 'react'

export default function NotificationItem({type, html, value}) {
    if (type) return <li data-priority={type}>{value}</li>
    return <li data-priority={type} dangerouslySetInnerHTML={html}></li>
}
