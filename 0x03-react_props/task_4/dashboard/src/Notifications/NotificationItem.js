import React from 'react'
import PropTypes from 'prop-types';

NotificationItem.protoType = {
    html: protoType.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}
export default function NotificationItem({type, html, value}) {
    if (html) return <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    return <li data-priority={type}>{value}</li>
}
