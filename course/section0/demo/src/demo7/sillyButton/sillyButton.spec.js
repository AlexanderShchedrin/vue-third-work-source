// AppButton.spec.js
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

// Указываем название блока тестов
describe("AppButton", () => {
	// Тестируем корректность отображения типа кнопки
	it("Should display label", () => {
		// Создаём компонент
		const wrapper = mount(Button, {
			props: {
				label: "submit",
			},
		});

		// Проверяем, что кнопка отображает правильный лейбл
		expect(wrapper.text()).toBe("submit");
	});

	// Тестируем корректность отправки события
	it("Emits click event", () => {
		// Создаём компонент
		const wrapper = mount(Button, {
			props: {
				label: "submit",
			},
			shallow: true,
		});

		// Эмулируем нажатие кнопки
		wrapper.get('button').trigger("click");

		// Проверяем, что событие было отправлено — toBeTruthy проверяет, что значение не falsy-значение (false, null, undefined, ...)
		expect(wrapper.emitted().click).toBeTruthy();
	});
});
