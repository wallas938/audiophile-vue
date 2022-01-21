<template>
  <div class="category-item" :class="{ headphones: category === 'headphones', speakers: category === 'speakers', earphones: category === 'earphones' }">
    <p><slot></slot></p>
    <div class="to-shop">
      <button>SHOP</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      require: true,
    },
  },
  created() {
    /* console.log(require(this.imgSrc)); */
  },
  computed: {
    source() {
      return this.imgSrc;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/_colors.scss";
@import "@/sass/_variables.scss";

.category-item {
  background-color: $grey;
  border-radius: 0.533333rem;
  width: 21.8rem;
  height: 11rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.466666rem;

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
    z-index: 5;
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
    color: rgba($color: #000, $alpha: 0.5);
    border: none;
    position: relative;
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