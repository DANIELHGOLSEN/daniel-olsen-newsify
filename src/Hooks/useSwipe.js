import { useRef } from "react";
import "./swiper.scss"

export default function Swiper({onSwipeLeft, onSwipeRight, threshold = 50 } = {}) {
    const StartPos = useRef(0)

    function onTouchStart(event) {
        StartPos.current = event.touches[0].clientX
    }

    function onTouchEnd(event) {
        const diff = event.touches[0].clientX - StartPos.current

        if (diff < -threshold) {
            onSwipeLeft?.();
        } else if (diff > threshold) {
            onSwipeRight?.();
        }
    }
    return { onTouchStart, onTouchEnd}
}
