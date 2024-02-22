import { reactive } from 'vue';
export default function useFilters(emit, config) {
  let filters = reactive(config);

  return function (event) {
    const inputId = event.target.id;
    const isActive = event.target.checked;
    const updatedFilters = {
      ...filters,
      [inputId]: isActive,
    };
    filters = updatedFilters;
    emit('change-filter', updatedFilters);
  };
}
