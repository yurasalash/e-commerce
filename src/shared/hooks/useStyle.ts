import {useEffect, useState} from "react";

export function useStyle(prop: string, $ = document.body) {
    const [value, setValue] = useState(getComputedStyle($).getPropertyValue(prop))

    useEffect(() => {
        $.style.setProperty(prop, value)
    }, [value])

    return [value, setValue]
}