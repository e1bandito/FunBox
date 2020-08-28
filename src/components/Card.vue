<template>
  <div class="card"
       :class="{ 'card--selected': item.selected, 'card--disabled': item.disabled, 'card--hovered': item.hovered }">
    <div class="card__inner" @click="onSelect" @mouseenter="onLeave">
      <div class="card__body">
        <p class="card__slogan">{{ item.slogan }}</p>
        <p class="card__slogan-selected">{{ item.selectedSlogan }}</p>
        <h2 class="card__title">{{ item.title }}</h2>
        <p class="card__taste">{{ item.taste }}</p>
        <p class="card__desc"
           v-for="(item, index) in item.desc"
           :key="index">
          <span class="card__desc-count"
                v-if="item.descCount"
          >{{ item.descCount }}</span>
          {{ item.descText }}</p>
        <p class="card__weight">
          <span class="card__weight-value">{{ item.weightValue }}</span>
          <span class="card__weight-units">{{ item.weightUnits }}</span>
        </p>
      </div>
    </div>
    <p class="card__buy-text"
       v-if="!item.selected && !item.disabled"
    >{{ item.buyText }}
      <span class="card__buy-button" @click="onSelect">{{ item.buyTextBtn }}</span>
    </p>
    <p class="card__buy-text card__buy-text--selected"
       v-else-if="item.selected"
    >{{ item.buyTextSelected }}</p>
    <p class="card__buy-text card__buy-text--disabled"
       v-else-if="item.disabled"
    >{{ item.buyTextDisabled }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object
  },
  methods: {
    onSelect () {
      if (!this.item.disabled && !this.item.selected) {
        this.item.selected = true;
      } else {
        this.item.selected = false;
        this.item.hovered = false;
      }
    },
    onLeave () {
      this.item.hovered = !this.item.disabled && this.item.selected;
    }
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";
.card {
  width: 320px;
  color: $white;

  &--selected {
    & .card__inner {
      background-image: linear-gradient(135deg, transparent 0%, transparent 5%, $red 5%, $red 100%);

      &:hover {
        background-image: linear-gradient(135deg, transparent 0%, transparent 5%, $light-red 5%, $light-red 100%);

        & .card__weight {
          background-color: $light-red;
        }
      }
    }

    & .card__weight {
      background-color: $red;
    }
  }

  &--disabled {
    & .card__inner {
      color: $gray;
      background-image: linear-gradient(135deg, transparent 0%, transparent 5%, $gray 5%, $gray 100%);
      cursor: not-allowed;

      &:hover {
        background-image: linear-gradient(135deg, transparent 0%, transparent 5%, $gray 5%, $gray 100%);

        & .card__weight {
          background-color: $gray;
        }
      }

      & .card__weight {
        background-color: $gray;
      }

      & .card__slogan,
        .card__desc {
        color: $gray;
      }
    }

    & .card__body {
      background-image: linear-gradient(135deg, transparent 0%, transparent 5%, rgba(#ffffff, 0.5) 5%, rgba(#ffffff, 0.5) 100%), url('../assets/card-bg.png'), linear-gradient(135deg, transparent 0%, transparent 5%, #f2f2f2 5%, #f2f2f2 100%);
      background-position: bottom left, bottom -4px left -4px, bottom left;
    }


  }

  &.card--selected.card--hovered:hover {
    & .card__slogan {
      display: none;

      &-selected {
        display: block;
      }
    }
  }
}

.card__inner {
  position: relative;
  background-image: linear-gradient(135deg, transparent 0%, transparent 5%, $blue 5%, $blue 100%);
  padding: 4px;
  border-radius: 14px;
  cursor: pointer;
  margin-bottom: 15px;
  color: $black;

  &:hover {
    background-image: linear-gradient(135deg, transparent 0%, transparent 5%, $light-blue 5%, $light-blue 100%);

    & .card__weight {
      background-color: $light-blue;
    }
  }
}

.card__body {
  background-image: url('../assets/card-bg.png'), linear-gradient(135deg, transparent 0%, transparent 5%, $light-gray 5%, $light-gray 100%);
  min-height: 472px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: bottom -4px left -4px, bottom left;
  padding: 18px 45px 275px;
}

.card__slogan {
  color: $dark-gray;
  margin: 0 0 10px 0;
}

.card__slogan-selected {
  display: none;
  color: $light-red;
  margin: 0 0 10px 0;
}

.card__title {
  margin: 0 0 3px 0;
  font-size: 48px;
  line-height: 1;
}

.card__taste {
  margin: 0 0 14px 0;
  font-size: 24px;
  font-weight: 700;
}

.card__desc {
  font-size: 14px;
  color: $dark-gray;
  margin: 0;

  &-count {
    font-weight: 700;
  }
}

.card__weight {
  position: absolute;
  right: 14px;
  bottom: 14px;
  margin: 0;
  width: 81px;
  height: 81px;
  border-radius: 100%;
  background-color: $blue;
  display: flex;
  flex-direction: column;
  color: $white;
  text-align: center;
  justify-content: center;
  line-height: 1;

  &-value {
    font-size: 42px;
  }

  &-units {
    font-size: 21px;
  }
}

.card__buy-text {
  font-size: 13px;
  line-height: 16px;
  margin: 0;
  text-align: center;

  &--disabled {
    color: $yellow;
  }
}

.card__buy-button {
  color: $blue;
  border-bottom: 1px dashed $blue;
  cursor: pointer;

  &:hover {
    color: $light-blue;
  }
}
</style>
