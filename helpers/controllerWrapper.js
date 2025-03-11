// const CreateError = require("http-errors");
// this is decorator

const controllerWrapper = (controller) => {
	const func = async (req, res, next) => {
		try {
			await controller(req, res, next);
		} catch (error) {
			// next(CreateError(...error));
			next(error);
		}
	};
	return func;
};

module.exports = controllerWrapper;

// Хелпер Контроллеробгортка, Приймає функцію контроллер,
// тут у нас замикання створення ще однієї функції яка викликає
// контроллер в трай кетч, якщо помилка ерор кидаємо в обробник помилок,
// якщо ні повертаємо функцію funk з контроллемор всередині.
//
// Огортаємо наші контроллери в цей Враппер у раутах експресса.
//
