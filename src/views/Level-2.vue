<template>
  <div class="products">
    <div class="products__inner">
      <h1 class="products__title">Ты сегодня покормил кота?</h1>
      <ul class="products__list">
        <li class="products__item"
            v-for="(item, index) in cards"
            :key="index">
          <Card :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: 'Level-1',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          selected: false,
          disabled: false,
          hovered: false,
          slogan: 'Сказочное заморское яство',
          selectedSlogan: 'Котэ не одобряет?',
          title: 'Нямушка',
          taste: 'с фуа-гра',
          desc: [
            {
              descCount: '10',
              descText: 'порций',
            },
            {
              descText: 'мышь в подарок',
            }
          ],
          weightValue: '0,5',
          weightUnits: 'кг',
          buyText: 'Чего сидишь? Порадуй котэ,',
          buyTextBtn: 'купи.',
          buyTextSelected: 'Печень утки разварная с артишоками.',
          buyTextDisabled: 'Печалька, с фуа-гра закончился.'
        },
        {
          selected: true,
          disabled: false,
          hovered: false,
          slogan: 'Сказочное заморское яство',
          selectedSlogan: 'Котэ не одобряет?',
          title: 'Нямушка',
          taste: 'с рыбой',
          desc: [
            {
              descCount: '40',
              descText: 'порций',
            },
            {
              descCount: '2',
              descText: 'мыши в подарок',
            }
          ],
          weightValue: '2',
          weightUnits: 'кг',
          buyText: 'Чего сидишь? Порадуй котэ,',
          buyTextBtn: 'купи.',
          buyTextSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
          buyTextDisabled: 'Печалька, с рыбой закончился.'
        },
        {
          selected: false,
          disabled: true,
          hovered: false,
          slogan: 'Сказочное заморское яство',
          selectedSlogan: 'Котэ не одобряет?',
          title: 'Нямушка',
          taste: 'с курой',
          desc: [
            {
              descCount: '100',
              descText: 'порций',
            },
            {
              descCount: '5',
              descText: 'мышей в подарок',
            },
            {
              descText: 'заказчик доволен',
            }
          ],
          weightValue: '5',
          weightUnits: 'кг',
          buyText: 'Чего сидишь? Порадуй котэ,',
          buyTextBtn: 'купи.',
          buyTextSelected: 'Филе из цыплят с трюфелями в бульоне.',
          buyTextDisabled: 'Печалька, с курой закончился.'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";
.products {
  min-height: 100vh;
  display: flex;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url("../assets/background.png");
}

.products__inner {
  padding: 80px 0;
  min-height: 100vh;
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.products__title {
  width: 100%;
  font-family: "Exo 2.0 Thin", "Arial", "Helvetica", sans-serif;
  color: $white;
  text-align: center;
  margin: 0 0 23px 0;
  text-shadow: 0 1px 0 #000000;
  font-size: 36px;
  font-weight: 400;
}

.products__list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.products__item {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 576px) {
    margin: 0 20px 40px;
  }
}
</style>
