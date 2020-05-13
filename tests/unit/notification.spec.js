import { shallowMount } from "@vue/test-utils";
import Notification from "@/components/Notification.vue";

describe("Notification", () => {
  // title
  it("Props title", () => {
    const test = "test";
    const wrapper = shallowMount(Notification, {
      propsData: {
        title: test
      }
    });
    const container = wrapper.find(".tdd-notification__title");
    expect(container.text()).toBe(test);
  });
  // message
  it("Props message", () => {
    const test = "这是一段说明文字";
    const wrapper = shallowMount(Notification, {
      propsData: {
        message: test
      }
    });
    const container = wrapper.find(".tdd-notification__message");
    expect(container.text()).toBe(test);
  });
  // showClose
  it("Props showClose", () => {
    const wrapper = shallowMount(Notification);
    const selector = ".tdd-notification__close-button";
    expect(wrapper.contains(selector)).toBe(true);
    wrapper.setProps({
      showClose: false
    });
    expect(wrapper.contains(selector)).toBe(false);
  });
  // onClose
  it("Emit onClose", () => {
    const onClose = jest.fn();
    const selector = ".tdd-notification__close-button";
    const wrapper = shallowMount(Notification, {
      propsData: {
        onClose
      }
    });
    wrapper.find(selector).trigger("click");
    expect(onClose).toBeCalledTimes(1);
  });
});
