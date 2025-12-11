import { useEffect } from "react";
import "../styles/celebration.css"; // we move CSS into a file

export default function CelebrationScene() {

    useEffect(() => {
        const candles = document.querySelector(".candles");
        const flame1 = document.querySelector(".flame");
        const flame2 = document.querySelector(".flame2");
        const flame3 = document.querySelector(".flame3");
        const text = document.querySelector(".text");

        if (!candles) return;

        candles.addEventListener("click", () => {
            flame1.style.opacity = 0;
            flame2.style.opacity = 0;
            flame3.style.opacity = 0;
            text.style.top = "-90px";
            text.style.opacity = 1;
        });
    }, []);

    return (
        <div id="birthday-cake">
            <div className="cake">
                <div className="middle"></div>
                <div className="chocs"></div>
                <div className="top"></div>
            </div>
            <div className="candles">
                <div className="flame"></div>
                <div className="flame2"></div>
                <div className="flame3"></div>
                <div className="text">Happy Birthday!</div>
                <div className="shadows"></div>
            </div>
            <p className="text2">*click on the flame to blow candles</p>
        </div>
    );
}
