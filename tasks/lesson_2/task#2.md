# Add side-effect. Create custom hook
1. Додати хук useEffect, який зберігатиме актуальне значення searchTerm в localStorage. Звідти значення має братись по замовчуванню, коли ми відкриваємо сторінку.
2. Створити кастомний хук useSemiPersistentState, який прийматиме в себе 2 параметри: 
- key (ключ, по якому ми записуватимемо значення у localStorage. наприклад 'search')
- initialValue (початкове значення стейту)
Замінити ним наші useState та useEffect для searchTerm.