<template>
  <footer>
    <div class="logo">
      <img src="@/assets/shared/logo.svg" alt="audiophile" />
    </div>
    <ul class="footer-nav">
      <li><router-link to="/home">HOME</router-link></li>
      <li>
        <router-link to="/category/headphones">HEADPHONES</router-link>
      </li>
      <li>
        <router-link to="/category/speakers">SPEAKERS</router-link>
      </li>
      <li>
        <router-link to="/category/earphones">EARPHONES</router-link>
      </li>
    </ul>
    <p class="footer-txt">
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </p>
    <p class="copyright">Copyright 2021. All Rights Reserved</p>
    <div class="social">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
          fill="#FFF"
          fill-rule="nonzero"
        />
      </svg>
      <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
          fill="#FFF"
          fill-rule="nonzero"
        />
      </svg>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          fill="#FFF"
          fill-rule="nonzero"
        />
      </svg>
      <!-- <img src="@/assets/shared/icon-facebook.svg" alt="facebook" />
      <img src="@/assets/shared/icon-twitter.svg" alt="twitter" />
      <img src="@/assets/shared/icon-instagram.svg" alt="instagram" /> -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

footer {
  color: rgba($color: #fff, $alpha: 0.5);
  background-color: #000;
  padding: 3.466666rem 1.6rem 2.533333rem 1.6rem;
  position: relative;
  &::after {
    content: "";
    height: 0.266666rem;
    width: 6.933333rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: $orange;
  }
  .logo,
  .footer-nav,
  .footer-txt,
  .copyright {
    margin-bottom: 3.2rem;
  }

  .logo,
  .footer-nav > li,
  .social > svg {
    cursor: pointer;
  }

  .logo {
    text-align: center;
  }

  .logo > img {
    width: 9.533333rem;
    height: 1.666666rem;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > li {
      color: #fff;
      font-weight: bold;
      font-size: 0.866666rem;
      line-height: 25px;
      letter-spacing: 2px;
    }
    & > li:not(:last-child) {
      margin-bottom: 1.066666rem;
    }

    & > li:hover {
      color: $orange;
    }
  }

  .footer-txt,
  .copyright {
    text-align: center;
  }

  .footer-txt {
    font-weight: 500;
    line-height: 25px;
  }

  .copyright {
    line-height: 25px;
    font-weight: bold;
  }

  .social {
    display: flex;
    justify-content: center;
  }

  .social > svg {
    width: 1.6rem;
  }

  .social > svg:hover {
    & > path {
      fill: $orange;
    }
  }

  .social > svg:not(:last-child) {
    margin-right: 1.066666rem;
  }
}

@media screen and (min-width: $tablet-min) {
  footer {
    padding: 4rem 2.666666rem 3.066666rem 2.6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "logo logo"
      "footer-nav footer-nav"
      "footer-txt footer-txt"
      "copyright social";
    &::after {
      left: 2.6rem;
      transform: unset;
    }
    .logo,
    .footer-nav,
    .footer-txt,
    .copyright {
      margin-bottom: unset;
    }

    .logo {
      grid-area: logo;
      text-align: left;
      align-self: center;
    }

    .footer-nav {
      padding-top: 2.133333rem;
      grid-area: footer-nav;
      flex-direction: row;
      justify-content: flex-start;

      & > li:not(:last-child) {
        margin-right: 2.266666rem;
        margin-bottom: unset;
      }
    }

    .footer-txt,
    .copyright {
      text-align: left;
    }

    .footer-txt {
      padding-top: 2.133333rem;
      grid-area: footer-txt;
      font-weight: 500;
      line-height: 25px;
    }

    .copyright,
    .social {
      padding-top: 5.333333rem;
      align-self: flex-end;
    }

    .copyright {
      grid-area: copyright;
      line-height: 25px;
      font-weight: bold;
    }

    .social {
      grid-area: social;
      display: flex;
      justify-content: flex-end;
    }
  }
}

@media screen and (min-width: $desktop-min) {
  footer {
    padding: 5rem 11rem 3.2rem 11rem;
    grid-template-columns: minmax(auto, 36rem) 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "logo footer-nav"
      "footer-txt social"
      "copyright copyright";

    &::after {
      left: 11rem;
    }

    .footer-nav {
      flex-direction: row;
      justify-content: flex-end;
      padding: 0;
      & > li:not(:last-child) {
        margin-right: 2.266666rem;
        margin-bottom: unset;
      }
    }

    .footer-txt {
      padding-top: 2.4rem;
    }

    .copyright {
      line-height: 25px;
      font-weight: bold;
      padding-top: 3.733333rem;
    }

    .social {
      display: flex;
    }
  }
}
</style>