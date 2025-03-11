const { sendEmail, controllerWrapper } = require("../helpers");

const sendEmailController = async (req, res) => {
	// console.log(req.body);
	const { type, name, phone, comment } = req.body;
	const { area, basement, overlap, roof, stage, total, wall } = req.body;
	const { count, deep, diametr, hard_drill, high_arm, holiday, m400, m500, material, no_water, under_two_metres, winter } =
		req.body;

	if (type === "consult") {
		const Email = {
			to: "mgbeton12@gmail.com",
			// to: 'alis.romantsova@gmail.com',
			subject: `Консультація MG-GROUP `,
			html: `
            <h2>Консультація MG-GROUP</h2>
            <hr>
            <p>Імʼя:</p><h3>${name}</h3>

            <p>Номер телефону:</p><h3>${phone}</h3>

            <p>Комментар:</p><h3>${comment}</h3>
            `,
		};
		await sendEmail(Email);

		res.status(201).json({
			message: "mail send captcha",
			status: 201,
		});
		return;
	}

	if (type === "build") {
		const Email = {
			to: "mgbeton12@gmail.com",
			// to: 'alis.romantsova@gmail.com',
			subject: `Замовлення на будівництво MG-GROUP `,
			html: `
            <h2>Замовлення на будівництво MG-GROUP</h2>
            <hr>
            <p>Імʼя:</p><h3>${name}</h3>

            <p>Номер телефону:</p><h3>${phone}</h3>

            <p>Фундамент:</p><h3>${basement}</h3>

            <p>Стіни:</p><h3>${wall}</h3>

            <p>Перекриття:</p><h3>${overlap}</h3>

            <p>Покрівля:</p><h3>${roof}</h3>

            <p>Кількість поверхів:</p><h3>${stage}</h3>

            <p>Площа, кв.м.:</p><h3>${area}</h3>
            <hr>
            <p>Загальна сума:</p><h3>${total}</h3>

            `,
			// html: `test 123`
		};
		await sendEmail(Email);

		res.status(201).json({
			message: "mail send captcha",
			status: 201,
		});
		return;
	}

	if (type === "drill") {
		const Email = {
			to: "mgbeton12@gmail.com",
			// to: 'alis.romantsova@gmail.com',
			subject: `Замовлення на буріння MG-GROUP`,
			html: `
            <h2>Замовлення на буріння MG-GROUP</h2>
            <hr>
            <p>Імʼя:</p><h3>${name}</h3>

            <p>Номер телефону:</p><h3>${phone}</h3>

            <p>Матеріал:</p><h3>${material}</h3>

            <p>Глибина,мм:</p><h3>${deep}</h3>

            <p>Діаметр,мм:</p><h3>${diametr}</h3>

            <p>Кількість, шт:</p><h3>${count}</h3>

            <hr>

            <p>Додаткові умови:</p>
            
            ${under_two_metres === true ? "<p>Буріння вище 2 метрів</p>" : ""}
            ${high_arm === true ? "<p>Висока армованість</p>" : ""}
            ${m500 === true ? "<p>Буріння в бетоні М500</p>" : ""}
            ${m400 === true ? "<p>Буріння в бетоні М400</p>" : ""}
            ${winter === true ? "<p>Роботи в зимових умовах</p>" : ""}
            ${hard_drill === true ? "<p>Буріння у важкодоступних, небезпечних місцях</p>" : ""}
            ${no_water === true ? "<p>Відсутність води на об’єкті</p>" : ""}
            ${holiday === true ? "<p>Буріння в нічний час або вихідні, святкові дні</p>" : ""}

            <hr>

            <p>Загальна сума:</p><h3>${total}</h3>
            `,

			// html: `test 123`
		};
		await sendEmail(Email);

		res.status(201).json({
			message: "mail send captcha",
			status: 201,
		});
	}
};

module.exports = controllerWrapper(sendEmailController);
