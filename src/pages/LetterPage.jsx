import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/letter.css";
import "../styles/global.css";
import BirthdayFireworks from "../components/BirthdayFireworks";
import BirthdayGif from "../components/BirthdayGif";

export default function LetterPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const opened = JSON.parse(localStorage.getItem("openedLetters")) || {};
    opened[id] = true;
    localStorage.setItem("openedLetters", JSON.stringify(opened));
  }, [id]);

  useEffect(() => {
  // ✅ auto-close letter after 60 seconds
    const timer = setTimeout(() => {
      const opened = JSON.parse(localStorage.getItem("openedLetters")) || {};
      opened[id] = false;
      localStorage.setItem("openedLetters", JSON.stringify(opened));
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, [id]);


  return (
    <div className="letter-page">

      {/* ================= LETTER 1 ================= */}
      {id === "1" && (
        <div className="letter1-fullscreen">

          <div className="polaroid-scatter">
            <div className="polaroid"><img src="/assets/her.png" alt="" /></div>
            <div className="polaroid"><img src="/assets/her2.png" alt="" /></div>
            <div className="polaroid"><img src="/assets/her3.png" alt="" /></div>
            <div className="polaroid"><img src="/assets/her4.png" alt="" /></div>
            <div className="polaroid"><img src="/assets/her5.png" alt="" /></div>
          </div>

          <BirthdayFireworks />

          <div className="letter1-right">
            <BirthdayGif />
          </div>

          <button className="back-btn" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      )}

      {/* ================= LETTER 2 ================= */}
      {id === "2" && (
        <div
          className="letter2-page"
          style={{
            backgroundImage: "url('/assets/letter2-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="letter2-bg-overlay"></div>
          {/* ✅ this layer controls BACKGROUND opacity only */}
          <div className="letter2-heading">
            <h2 className="letter2-title handwriting">
              {"I MISS US ❤️".split("").map((char, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <p className="letter2-subtitle">
              The pics may be a little blurry, but the happiness and memories are perfectly clear.
            </p>
          </div>

          <div className="letter2-polaroids">
            <div className="polaroid rotate-left"><img src="/assets/photo1.jpg" alt="" /></div>
            <div className="polaroid rotate-right"><img src="/assets/photo2.jpg" alt="" /></div>
            <div className="polaroid rotate-left"><img src="/assets/photo3.jpg" alt="" /></div>
            <div className="polaroid rotate-right"><img src="/assets/photo4.jpg" alt="" /></div>
            <div className="polaroid rotate-left"><img src="/assets/photo5.png" alt="" /></div>

            {/* center hero image */}
            <div className="polaroid hero">
              <img src="/assets/photo6.png" alt="" />
            </div>

            <div className="polaroid rotate-left"><img src="/assets/photo7.png" alt="" /></div>
          </div>

          <button className="back-btn" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      )}

      {/* ================= LETTER 3 ================= */}
      {id === "3" && (
        <div
          className="letter3-page"
          style={{
            backgroundImage: "url('/assets/letter3-bg.png')",
          }}
        >
          {/* background opacity layer */}
          <div className="letter3-bg-overlay"></div>

          {/* letter paper */}
          <div className="letter3-paper">
            <img
              src="/assets/letter3-paper.png"
              alt="Letter paper"
              className="letter3-paper-img"
            />

            {/* text */}
            <div className="letter3-content">
              <p>
                It still amazes me how two people so different ended up choosing each other.
                Somehow, through every hot-and-cold phase, 
                every distance and every year that changed us,
                we kept finding our way back. 
                <br></br>
                We’re studying worlds apart yet you still understand me better than most people around me. 
                And maybe that’s why this friendship feels so rare.
                <br></br>
                Seven years later, it genuinely feels like our own version of seven years in heaven—not in the dreamy, perfect way, 
                but in the real one: messy, honest, stubborn, loyal, and always worth it. 
                From fangirling over Shawn Mendes to being swifties, 
                from our movie nights to meeting again in Raipur after two whole years… 
                it was weird for a second, and then it felt like home again. 
                That day was the happiest I felt in India, and it reminded me just how deeply I’ve missed you.
                <br></br>
                I know you don't like me saying this but THANK YOU for being my constant in ways neither of us expected. 
                Here’s to many more years of choosing each other—again and again. 
                <br></br>
                Happy birthday!
                
              </p>

              <p className="letter3-sign">
                — always 🤍
              </p>
            </div>
          </div>

          <button className="back-btn" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      )}

      {/* ================= LETTER 4 ================= */}
      { id === "4" && (
        <div
          className="letter4-page"
          style={{ backgroundImage: "url('/assets/letter4-bg.jpeg')" }}
        >
          <div className="letter4-overlay"></div>

          {/* 🌻 TOP RIGHT BOUQUET */}
          <img
            src="/assets/sunflower2.png"
            className="letter4-img bouquet-top"
            alt=""
          />

          {/* 🌻 BOTTOM LEFT BOUQUET */}
          <img
            src="/assets/sunflower1.png"
            className="letter4-img bouquet-bottom"
            alt=""
          />
          
          <h1 className="letter4-love handwriting">
            {"I LOVE YOU".split("").map((char, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>


          <button className="back-btn" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      )}

    </div>
  );
}
