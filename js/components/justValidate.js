export const justValidate = () => {
  const validator = new window.JustValidate(".questions__form", {});

  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введите ваше имя",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальная длина три символа",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Максимальная длина двадцать символов",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите вашу почту",
      },
      {
        rule: "email",
        errorMessage: "Почта введена неверно",
      },
    ])
    .addField("#agree", [
      {
        rule: "required",
        errorMessage: "Согласие обязательно",
      },
    ]);
};
