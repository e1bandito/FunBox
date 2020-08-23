<template>
  <div class="level-1">
    <div class="container">
      <ul class="interview">
        <li class="interview__item" v-for="(item, index) in questions" :key="index">
          <div class="interview__question">
            <p class="interview__question-text" v-for="(item, index) in item.question" :key="index">{{ item }}</p>
        <ul class="interview__question-list" v-if="item.list">
          <li class="interview__question-item" v-for="(item, index) in item.list" :key="index">{{ item }}</li>
        </ul>
          </div>
          <div class="interview__answer">
            <p class="interview__answer-text" v-for="(item, index) in item.answer" :key="index">{{ item }}</p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Level-1',
  components: {
  },
  data() {
    return {
      questions: [
        {
          question: ['Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения'],
          list: ['пользователя;', 'менеджера проекта;', 'дизайнера;', 'верстальщика;', 'клиентского программиста;', 'серверного программиста.'],
          answer: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi consequuntur corporis cumque cupiditate debitis, deleniti dolore dolorem ducimus earum facilis id minima officia provident quidem recusandae soluta suscipit. Iste.'],
        },
        {
          question: ['Опишите основные особенности верстки крупных многостраничных сайтов дизайн которых может меняться в процессе реализации и поддержки.', 'Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.'],
          answer: ['ответ 1'],
        },
        {
          question: ['Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.'],
          answer: ['ответ 1'],
        },
        {
          question: ['Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.'],
          answer: ['ответ 1'],
        },
        {
          question: ['Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?'],
          answer: ['ответ 1'],
        },
        {
          question: ['Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?'],
          answer: ['ответ 1'],
        },
        {
          question: ['Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).', 'Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое?', 'Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?'],
          answer: ['ответ 1', 'ответ 1', 'ответ 1'],
        },
        {
          question: ['Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.'],
          answer: ['ответ 1'],
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

.level-1 {
  padding: 60px 0 30px;

  & .container {
    padding: 10px;
  }
}

.interview {
  list-style: none;
  margin: 0;
  padding: 0;
}

.interview__item {
  padding: 10px 10px 10px 30px;
  border-radius: 10px;
  border: 4px solid $blue;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    padding: 20px 20px 20px 50px;
  }
}

.interview__question {
  position: relative;
  border-bottom: 1px solid $blue;
  padding-bottom: 10px;

  &::before {
    position: absolute;
    content: "Q";
    left: -22px;
    top: -4px;
    font-size: 22px;
    color: $red;

    @media (min-width: 768px) {
      font-size: 30px;
      left: -35px;
      top: -7px;
    }
  }
}

.interview__question-list {
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }
}

.interview__question-text {
  margin: 0 0 10px 0;

  &:last-child {
    margin: 0;
  }
}

.interview__answer {
  position: relative;
  padding-top: 10px;

  @media (min-width: 768px) {
    padding-top: 20px;
  }

  &::before {
    position: absolute;
    content: "A";
    left: -22px;
    top: 6px;
    font-size: 22px;
    color: $red;

    @media (min-width: 768px) {
      font-size: 30px;
      left: -35px;
      top: 13px;
    }
  }
}

.interview__answer-text {
  margin: 0 0 10px 0;

  &:last-child {
    margin: 0;
  }
}

</style>
