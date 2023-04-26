import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Массив со всеми вопросами и вариантами ответов
    questions: [
      {
        questionId: 1,
        title: 'Ваш пол:',
        questionType: 'text',
        answerType: 'text',
        options: [
          {
            id: "first-option",
            text: "Мужчина",
            value: 0,
          },
          {
            id: "second-option",
            text: "Женщина",
            value: 1,
          },
        ]
      },
      {
        questionId: 2,
        title: 'Укажите ваш возраст:',
        questionType: 'text',
        answerType: 'text',
        options: [
          {
            id: "first-option",
            text: "До 18",
            value: 0,
          },
          {
            id: "second-option",
            text: "От 18 до 28",
            value: 1,
          },
          {
            id: "third-option",
            text: "От 29 до 35",
            value: 2,
          },
          {
            id: "fourth-option",
            text: "От 36",
            value: 3,
          },
        ]
      },
      {
        questionId: 3,
        title: 'Выберите лишнее:',
        questionType: 'text',
        answerType: 'text',
        options: [
          {
            id: "first-option",
            text: "Дом",
            value: 0,
          },
          {
            id: "second-option",
            text: "Шалаш",
            value: 1,
          },
          {
            id: "third-option",
            text: "Бунгало",
            value: 2,
          },
          {
            id: "fourth-option",
            text: "Скамейка",
            value: 3,
          },
          {
            id: "fifth-option",
            text: "Хижина",
            value: 4,
          },
        ]
      },
      {
        questionId: 4,
        title: 'Продолжите числовой ряд: 18  20  24  32',
        questionType: 'text',
        answerType: 'text',
        options: [
          {
            id: "first-option",
            text: "62",
            value: 0,
          },
          {
            id: "second-option",
            text: "48",
            value: 1,
          },
          {
            id: "third-option",
            text: "74",
            value: 2,
          },
          {
            id: "fourth-option",
            text: "57",
            value: 3,
          },
          {
            id: "fifth-option",
            text: "60",
            value: 4,
          },
          {
            id: "sixth-option",
            text: "77",
            value: 5,
          },
        ]
      },
      {
        questionId: 5,
        title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
        questionType: 'color',
        answerType: 'color',
        options: [
          {
            id: 1,
            colorCode: "#A8A8A8",
            value: 0,
          },
          {
            id: 2,
            colorCode: "#0000A9",
            value: 1,
          },
          {
            id: 3,
            colorCode: "#00A701",
            value: 2,
          },
          {
            id: 4,
            colorCode: "#F60100",
            value: 3,
          },
          {
            id: 5,
            colorCode: "#FDFF19",
            value: 4,
          },
          {
            id: 6,
            colorCode: "#A95403",
            value: 5,
          },
          {
            id: 7,
            colorCode: "#000000",
            value: 6,
          },
          {
            id: 8,
            colorCode: "#850068",
            value: 7,
          },
          {
            id: 9,
            colorCode: "#46B2AC",
            value: 8,
          },
        ]
      },
      {
        questionId: 6,
        title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
        questionType: 'color',
        answerType: 'color',
        options: [
          {
            id: 1,
            colorCode: "#A8A8A8",
            value: 0,
          },
          {
            id: 2,
            colorCode: "#46B2AC",
            value: 1,
          },
          {
            id: 3,
            colorCode: "#A95403",
            value: 2,
          },
          {
            id: 4,
            colorCode: "#00A701",
            value: 3,
          },
          {
            id: 5,
            colorCode: "#000000",
            value: 4,
          },
          {
            id: 6,
            colorCode: "#F60100",
            value: 5,
          },
          {
            id: 7,
            colorCode: "#850068",
            value: 6,
          },
          {
            id: 8,
            colorCode: "#FDFF19",
            value: 7,
          },
          {
            id: 9,
            colorCode: "#0000A9",
            value: 8,
          },
        ]
      },
      {
        questionId: 7,
        title: 'Какой из городов лишний?',
        questionType: 'text',
        answerType: 'text',
        options: [
          {
            id: "first-option",
            text: "Вашингтон",
            value: 0,
          },
          {
            id: "second-option",
            text: "Лондон",
            value: 1,
          },
          {
            id: "third-option",
            text: "Париж",
            value: 2,
          },
          {
            id: "fourth-option",
            text: "Нью-Йорк",
            value: 3,
          },
          {
            id: "fifth-option",
            text: "Москва",
            value: 4,
          },
          {
            id: "sixth-option",
            text: "Оттава",
            value: 5,
          },
        ]
      },
      {
        questionId: 8,
        title: 'Выберите правильную фигуру из четырёх пронумерованных.',
        questionType: 'image',
        answerType: 'number',
        imageName: 'figures.png',
        options: [
          {
            id: 1,
            text: "1",
            value: 0,
          },
          {
            id: 2,
            text: "2",
            value: 1,
          },
          {
            id: 3,
            text: "3",
            value: 2,
          },
          {
            id: 4,
            text: "4",
            value: 3,
          },
        ]
      },
      {
        questionId: 9,
        title: 'Вам привычнее и важнее:',
        questionType: 'text',
        answerType: 'text',
        options: [
          {
            id: "first-option",
            text: "Наслаждаться каждой минутой проведенного времени",
            value: 0,
          },
          {
            id: "second-option",
            text: "Быть устремленными мыслями в будущее",
            value: 1,
          },
          {
            id: "third-option",
            text: "Учитывать в ежедневной практике прошлый опыт",
            value: 2,
          },
        ]
      },
      {
        questionId: 10,
        title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
        questionType: 'image',
        answerType: 'text',
        imageName: 'pyramid.png',
        options: [
          {
            id: "first-option",
            text: "Оно остроконечное",
            value: 0,
          },
          {
            id: "second-option",
            text: "Оно устойчиво",
            value: 1,
          },
          {
            id: "third-option",
            text: "Оно-находится в состоянии равновесия",
            value: 2,
          },
        ]
      },
      {
        questionId: 11,
        title: 'Вставьте подходящее число',
        questionType: 'image',
        answerType: 'number',
        imageName: 'star.png',
        options: [
          {
            id: 1,
            text: "34",
            value: 0,
          },
          {
            id: 2,
            text: "36",
            value: 1,
          },
          {
            id: 3,
            text: "53",
            value: 2,
          },
          {
            id: 4,
            text: "44",
            value: 3,
          },
          {
            id: 5,
            text: "66",
            value: 4,
          },
          {
            id: 6,
            text: "42",
            value: 5,
          },
        ]
      }
    ],
    // Текущее выбранное значение
    currentAnswerValue: null,
    // данные, полученные с сервера на последней странице
    feedbackData: null,
    // происходит ли загрузка в данный момент
    isLoadingFeedbackData: false,
    // произошла ли ошибка при загрузке данных
    isLoadingFeedbackFalse: false,
  },
  mutations: {
    setCurrentAnswer(state, value) {
      state.currentAnswerValue = value;
    },
    resetCurrentAnswer(state) {
      state.currentAnswerValue = null;
    },
    setFeedbackData(state, data) {
      state.feedbackData = data;
    },
    setIsLoadingFeedbackData(state, value) {
      state.isLoadingFeedbackData = value;
    },
    setIsLoadingFeedbackFalse(state, value) {
      state.isLoadingFeedbackFalse = value;
    }
  },
  actions: {
    // Функция запроса на сервер при нажатии кнопки звонка
    async getCall({commit}) {
      // Сперва присваиваем переменным текущей загрузки и ошибки соответствующие данные 
      commit('setIsLoadingFeedbackData', true);
      commit('setIsLoadingFeedbackFalse', false);
      try {
        // Посылаем запрос на сервер
        const response = axios.get('https://swapi.dev/api/people/1/');
        // Получаем ответ
        const result = await response;
        // Кладем полученные данные в переменную
        commit('setFeedbackData', result.data);
        // Присваиваем переменной загрузки значение false, так как загрузка окончена
        commit('setIsLoadingFeedbackData', false);
      } catch (error) {
        // если произошла ошибка, то присваиваем соответствующей переменной значение true, 
        // а также говорим, что загрузка окончена
        commit('setIsLoadingFeedbackData', false);
        commit('setIsLoadingFeedbackFalse', true);
      }
    }
  },
})
