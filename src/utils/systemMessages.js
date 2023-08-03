export const INITIAL_MESSAGE = {
  isOwner: false,
  text: 'Привет! Могу не только улучшить твою речь, но и ответить на любой вопрос. Отправь аудиозапись длительностью не более 10 минут 🦜',
};

export const MICROPHONE_ERROR = {
  isOwner: false,
  text: 'Ошибка доступа к микрофону, предоставь доступ',
  type: 'Error'
};

export const RESPONSE_ERROR = {
  isOwner: false,
  text: 'Что-то пошло не так, попробуй позже',
  type: 'Error'
};