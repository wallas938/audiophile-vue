<template>
  <div class="cat-nav container">
    <div class="item headphones">
      <p>HEADPHONES</p>
      <div class="to-shop">
        <button @click="navigateTo('headphones')">SHOP</button>
      </div>
    </div>
    <div class="item speakers">
      <p>SPEAKERS</p>
      <div class="to-shop">
        <button @click="navigateTo('speakers')">SHOP</button>
      </div>
    </div>
    <div class="item earphones">
      <p>EARPHONES</p>
      <div class="to-shop">
        <button @click="navigateTo('earphones')">SHOP</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(path) {
      this.$router.push(`/category/${path}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.cat-nav {
  .item {
    background-color: $white;
    border-radius: 0.533333rem;
    height: 11rem;
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.466666rem;

    &:not(:last-child) {
      margin-bottom: 4.533333rem;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: -3.466666rem;
      left: 50%;
      transform: translateX(-50%);
      height: 10rem;
      width: 10rem;
      background-image: url("~@/assets/shared/image-category-thumbnail-headphones.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    p,
    .to-shop {
      z-index: 2;
    }

    p {
      font-weight: bold;
      line-height: 20.49px;
      letter-spacing: 1.07px;
      text-align: center;
      margin-bottom: 1.133333rem;
    }

    .to-shop {
      display: flex;
      justify-content: center;
    }

    .to-shop button {
      font-size: 0.8666666rem;
      font-weight: bold;
      line-height: 17.76px;
      letter-spacing: 1px;
      background-color: transparent;
      color: rgba($color: #000, $alpha: 0.5);
      border: none;
      position: relative;
    }

    .to-shop button:hover {
      color: $orange;
    }

    .to-shop button::after {
      content: "";
      width: 5px;
      height: 10px;
      position: absolute;
      background-color: $orange;
      top: 50%;
      transform: translateY(-50%);
      color: $orange;
      clip-path: polygon(4% 25%, 25% 0, 100% 50%, 25% 100%, 2% 75%, 40% 49%);
      margin-left: 0.888rem;
      cursor: pointer;
    }
  }

  .headphones::before {
    background-image: url("~@/assets/shared/image-category-thumbnail-headphones.png");
  }
  .speakers::before {
    background-image: url("~@/assets/shared/image-category-thumbnail-speakers.png");
  }
  .earphones::before {
    background-image: url("~@/assets/shared/image-category-thumbnail-earphones.png");
  }
}

@media screen and (min-width: $tablet-min) {
  .cat-nav {
    display: flex;
    justify-content: space-between;
    .item {
      width: 14.866666rem;
      flex: 1;
      &:not(:last-child) {
        margin-bottom: unset;
        margin-right: 0.666666rem;
      }
    }
  }
}

@media screen and (min-width: $desktop-min) {
  .cat-nav {
    display: flex;
    justify-content: space-between;
    .item {
      width: 23.333333rem;
      height: 13.6rem;
      &:not(:last-child) {
        margin-right: 2rem;
      }
      p {
        line-height: 24.59px;
        letter-spacing: 1.29px;
        margin-bottom: 1.266666rem; // 19px
        font-size: 1.2rem; // 18px
      }
    }
  }
}

/* .headphones::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: -3.466666rem;
  left: 50%;
  transform: translateX(-50%);
  height: 10rem;
  width: 10rem;
  background-image: url("~@/assets/shared/image-category-thumbnail-headphones.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.headphones::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: -3.466666rem;
  left: 50%;
  transform: translateX(-50%);
  height: 10rem;
  width: 10rem;
  background-image: url("~@/assets/shared/image-category-thumbnail-headphones.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
} */
</style>