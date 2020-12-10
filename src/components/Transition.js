import React, {useState} from 'react'
import {useTransition, animated} from 'react-spring'
export default function Transition() {
const [items, setitems] = useState([
    {name: "HTML/CSS", id: 1},
    {name: "JS, ES6", id: 2},
    {name: "React developer", id: 3},
])
const transitions = useTransition(items, item => item.id, {
from: { marginLeft: -500 },
enter: { marginLeft: 0 },
})
    return transitions.map(({ item, props, id }) =>
<animated.h4 key={id} style={props}>{item.name}</animated.h4>
    )
}
