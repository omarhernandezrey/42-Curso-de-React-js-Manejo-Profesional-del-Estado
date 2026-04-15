# Filosofía: Imponer tu visión vs. Trabajar en equipo

En el manejo del estado (y en el desarrollo de software en general), es crucial encontrar un equilibrio entre la visión técnica personal y las necesidades del equipo.

## Puntos clave:

1. **Consistencia:** Es mejor tener un patrón "menos elegante" que todo el equipo use de forma consistente, a tener 5 patrones "perfectos" diferentes en cada archivo.
2. **Documentación:** Al introducir patrones avanzados como Reducers o Action Creators, es vital documentar el "por qué" para que los nuevos integrantes puedan entender la lógica.
3. **Legibilidad sobre Astucia:** No uses patrones complejos solo para demostrar conocimiento. Si un simple `useState` resuelve el problema de forma legible, úsalo. Si el estado se vuelve complejo, migra a `useReducer`.
4. **Acuerdos de Equipo:** Las decisiones sobre si usar Redux, Context API, o Hooks puros deben ser consensuadas basándose en el tamaño y necesidades del proyecto.
