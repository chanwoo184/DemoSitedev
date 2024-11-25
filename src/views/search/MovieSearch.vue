<!-- @/views/search/MovieSearch.vue-->
<template>
  <div class="dropdown-container">
    
    <div v-for="dropdown in dropdownEntries" :key="dropdown.key" class="custom-select">
      <div class="select-selected" @click="toggleDropdown(dropdown.key)">
        {{ selectedOptions[dropdown.key] }}
      </div>
      <div v-if="activeDropdown === dropdown.key" class="select-items">
        <div v-for="option in dropdown.options" :key="option" @click="selectOption(dropdown.key, option)">
          {{ option }}
        </div>
      </div>
    </div>
    <button class="clear-options" @click="clearOptions">초기화</button>
  </div>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'MovieSearch',
  emits: ['changeOptions'],
  setup(props, { emit }) {
    const dropdowns = {
      originalLanguage: ['장르 (전체)', 'Action', 'Adventure', 'Comedy', 'Crime', 'Family'],
      translationLanguage: ['평점 (전체)', '9~10', '8~9', '7~8', '6~7', '5~6', '4~5', '4점 이하'],
      sorting: ['언어 (전체)', '영어', '한국어'],
    };

    const DEFAULT_OPTIONS = {
      originalLanguage: '장르 (전체)',
      translationLanguage: '평점 (전체)',
      sorting: '언어 (전체)',
    };

    const selectedOptions = ref({ ...DEFAULT_OPTIONS });
    const activeDropdown = ref(null);

    const dropdownEntries = computed(() =>
      Object.entries(dropdowns).map(([key, options]) => ({
        key,
        options,
      }))
    );

    const toggleDropdown = (key) => {
      activeDropdown.value = activeDropdown.value === key ? null : key;
    };

    const selectOption = (key, option) => {
      selectedOptions.value = { ...selectedOptions.value, [key]: option };
      activeDropdown.value = null;
      emit('changeOptions', selectedOptions.value);
    };

    const clearOptions = () => {
      selectedOptions.value = { ...DEFAULT_OPTIONS };
      emit('changeOptions', selectedOptions.value);
    };

    return {
      dropdownEntries,
      selectedOptions,
      activeDropdown,
      toggleDropdown,
      selectOption,
      clearOptions,
    };
  },
});
</script>
  
  <style>
  .dropdown-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background: linear-gradient(45deg, #ff6f61, #ff9068);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-select {
  min-width: 140px;
  position: relative;
  display: inline-block;
  font-family: "Arial", sans-serif;
}

.select-selected {
  background-color: #fff;
  color: #333;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.select-selected:hover {
  background-color: #f4f4f4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.select-items {
  display: block;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 6px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
}

.select-items div {
  color: #333;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.select-items div:hover {
  background-color: #ff6f61;
  color: #fff;
}

.select-selected:after {
  content: "\25BC";
  position: absolute;
  right: 10px;
  top: 14px;
  font-size: 12px;
  color: #999;
}

.select-selected.select-arrow-active:after {
  content: "\25B2";
  color: #ff6f61;
}

.clear-options {
  background-color: #333;
  color: #fff;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.clear-options:hover {
  background-color: #ff6f61;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .dropdown-container {
    flex-direction: column; /* 드롭다운과 버튼을 세로로 정렬 */
    gap: 15px;
    padding: 20px;
  }

  .custom-select {
    min-width: 120px; /* 드롭다운 너비 축소 */
  }

  .select-selected {
    font-size: 14px; /* 글꼴 크기 축소 */
    padding: 10px;
  }

  .select-items div {
    font-size: 14px;
    padding: 10px;
  }

  .clear-options {
    font-size: 14px;
    padding: 10px 12px;
    min-width: 120px;
  }
}

  </style>