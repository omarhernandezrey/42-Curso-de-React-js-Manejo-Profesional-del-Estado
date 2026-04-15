# 🚀 React State Management Professional Course - Platzi

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-Vercel-black?style=for-the-badge&logo=vercel)](https://42-curso-de-react-js-manejo-profesi.vercel.app/)

Esta guía documenta mi aprendizaje en el curso de **Manejo Profesional del Estado en React**. Cada sección incluye una explicación teórica, el código clave y el acceso al commit específico en GitHub.

---

## 📚 Índice de Conceptos

### 1. ¿Cómo manejas el estado?
**Commit:** [`b2540a4`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/b2540a4) | **Demo:** [Vercel](https://42-curso-de-react-js-manejo-profesi.vercel.app/)

**Explicación:** El manejo del estado es el corazón de las aplicaciones interactivas en React. Dependiendo de la complejidad (simple, compuesto, global), elegimos diferentes herramientas (`useState`, `useReducer`, Context API, Redux, etc.).

---

### 2. Proyecto: Códigos de Seguridad
**Commit:** [`ec576cf`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/ec576cf)

**Explicación:** Creamos una interfaz base para validar un código de seguridad ("paradise"), comparando la implementación en componentes de clase (`ClassState`) y funcionales (`UseState`).

---

### 3. Estados simples: React.Component vs useState
**Commit:** [`8cc923b`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/8cc923b)

**Explicación:** Comparamos cómo se define el estado inicial y cómo se actualiza en ambos tipos de componentes.

```javascript
// Funcional
const [error, setError] = React.useState(false);

// Clase
this.state = { error: false };
this.setState({ error: true });
```

---

### 4. Efectos con useEffect
**Commit:** [`068229a`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/068229a)

**Explicación:** Los efectos nos permiten manejar procesos asíncronos o efectos secundarios fuera del renderizado principal, como llamadas a APIs.

```javascript
React.useEffect(() => {
  if (loading) {
    setTimeout(() => setLoading(false), 3000);
  }
}, [loading]);
```

---

### 5. Métodos del ciclo de vida en React.Component
**Commit:** [`c28ef3c`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/c28ef3c)

**Explicación:** En clases usamos `componentDidUpdate` para reaccionar a cambios en el estado, equivalente a la dependencia en `useEffect`.

---

### 6. Estados independientes con useState
**Commit:** [`2c9f4dc`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/2c9f4dc)

**Explicación:** Definimos múltiples variables de estado para cada necesidad: `value`, `error`, `loading`. Esto hace que el código sea atómico.

---

### 7. ¿Dónde actualizar el estado?
**Commit:** [`8839557`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/8839557)

**Explicación:** Aprendemos que el estado debe actualizarse justo después de que la lógica de negocio (como una validación de API) se complete.

---

### 8. Estados compuestos con React.Component
**Commit:** [`0387344`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/0387344)

**Explicación:** En clases, `setState` hace un merge automático de las propiedades, permitiendo manejar un objeto complejo de estado fácilmente.

---

### 9. Estados compuestos con useState
**Commit:** [`ba958ed`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/ba958ed)

**Explicación:** A diferencia de las clases, en hooks debemos usar el spread operator (`...state`) para no perder el resto de las propiedades al actualizar una sola.

```javascript
const [state, setState] = React.useState({ value: '', error: false });
setState({ ...state, loading: true });
```

---

### 10. Estados imperativos vs Declarativos
**Commit:** [`8e84e8c`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/8e84e8c)

**Explicación:** Analizamos la diferencia entre decirle a React *cómo* cambiar cada paso (imperativo) frente a describir el *estado final* deseado (declarativo).

---

### 11. Estados semideclarativos con useState
**Commit:** [`cec7215`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/cec7215)

**Explicación:** Refactorizamos el código usando funciones "helper" (`onConfirm`, `onError`) para que el `JSX` sea más limpio y fácil de leer.

---

### 12. ¿Qué es un Reducer?
**Commit:** [`519daec`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/519daec)

**Explicación:** Un Reducer es una función pura que recibe el estado actual y una acción, devolviendo un nuevo estado. Es la base de arquitecturas escalables.

---

### 13. 3 formas de crear un Reducer
**Commit:** [`cf0140b`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/cf0140b)

**Explicación:** Comparamos implementaciones con `if`, `switch` y el patrón de **Objetos (Dictionary Pattern)**, siendo este último el más escalable.

---

### 14. Estados declarativos con useReducer
**Commit:** [`83e68f6`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/83e68f6)

**Explicación:** Implementamos `useReducer` para centralizar todas las transiciones de estado en un solo lugar, evitando errores de consistencia.

---

### 15. Action Creators y ActionTypes
**Commit:** [`860470e`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/860470e)

**Explicación:** Usamos constantes para los nombres de las acciones y funciones que retornan el objeto de acción, reduciendo bugs por typos.

```javascript
const actionTypes = { confirm: 'CONFIRM' };
const onConfirm = () => ({ type: actionTypes.confirm });
```

---

### 16. Estados Derivados
**Commit:** [`bd8a2cf`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/bd8a2cf)

**Explicación:** Aprendemos a no guardar en el estado valores que pueden calcularse a partir de otros (ej: `const isDeleted = state.deleted && state.confirmed`).

---

### 17. Migración: useState a useReducer (useLocalStorage)
**Commit:** [`5b7e0aa`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/5b7e0aa)

**Explicación:** Refactorizamos un Hook personalizado complejo (`useLocalStorage`) para que use `useReducer`, facilitando su mantenimiento y testeo.

---

### 18. Filosofía: Imponer visión vs Trabajo en equipo
**Commit:** [`b737613`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/b737613)

**Explicación:** La tecnología es un medio, no el fin. Es vital elegir patrones que el equipo entienda y pueda mantener, priorizando la legibilidad sobre la "magia" técnica.

---

### 19. Conclusión y Futuro
**Commit:** [`2f062ce`](https://github.com/omarhernandezrey/42-Curso-de-React-js-Manejo-Profesional-del-Estado/commit/2f062ce)

**Explicación:** Dominar el estado profesionalmente nos permite construir aplicaciones robustas, predecibles y fáciles de escalar.

---

Hecho con ❤️ por [Omar Hernández](https://github.com/omarhernandezrey)
