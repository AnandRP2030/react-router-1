import style from "./myStyle.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerAbout}>
          <p>
            About Us We are a team of product designers, dedicated to creating
            hardware that unlocks technology for people and businesses. Proper
            solutions are used by leading global brands including Apple,
            Everlane, JD Sports, Scotch & Soda, Sociolla and many more.
          </p>
        </div>
        <div className={style.footerIcons}>
          <h4> Connect us: </h4>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className={style.footerNewsLetter}>
            <h5>Newsletter</h5>
            <p> Subscribe to receive updates, access to exclusive deals, and more.</p>
            <input type="text" placeholder="Enter your email address"/>
            <button> Subscribe </button>
      </div>
      <div className={style.footerBanner}>
        <p> Copyright © 2023 Apple Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
