// App.spec.js
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import AppComponent from './TestView.vue';
import { useCounterStore } from '@/store';

describe("Counter test", () => {
	let counterStore, wrapper;

	// Выполняем перед каждым тестом
	beforeEach(() => {
		// Создаем экземпляр Pinia
		const pinia = createTestingPinia({
			createSpy: vi.fn,
			stubActions: false,
		});
		// Создаем экземпляр компонента
		wrapper = mount(AppComponent, {
			global: {
				plugins: [pinia] // добавляем Pinia в компонент
			}
		});
		// Инициализируем хранилище
		counterStore = useCounterStore();
	});

	it("Should increment count", () => {
		wrapper.find("button").trigger("click");

		expect(wrapper.find("p").text()).toBe("1");
	});
});
