/**
 * @description A wrapper for getting the value from a form input (input, select, textarea...)
 * @param      {React.BaseSyntheticEvent} event - Event from the change event listener
 * @returns    {String} Value of a form element
 */

export const parseNativeEventValue = (
  event: React.BaseSyntheticEvent
): string | React.BaseSyntheticEvent => {
  if (!event || !event.target) {
    return event;
  }
  const { target } = event;
  if (target.type === "checkbox") {
    return target.checked;
  }

  let { value, options, multiple } = target;
  if (options) {
    value = [...options]
      .filter((option) => option.selected)
      .map((option) => option.value);

    if (!multiple) {
      let [first] = value;
      value = first;
    }
  }

  return value;
};
