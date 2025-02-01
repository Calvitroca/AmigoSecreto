# 🎁 Challenge Amigo Secreto

Este es un pequeño proyecto en JavaScript para realizar un sorteo de "Amigo Secreto". Permite agregar nombres a una lista y luego seleccionar aleatoriamente un ganador.

## 🚀 Características

- Agregar nombres a una lista.
- Evitar nombres duplicados.
- Eliminar nombres de la lista.
- Sortear aleatoriamente un amigo secreto.
- Interfaz intuitiva con botones y eventos dinámicos.

## 🛠 Tecnologías utilizadas

- HTML
- CSS
- JavaScript (Vanilla)

## 📌 Instalación y uso

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/tu-usuario/ChallengeAmigoSecreto.git
   ```
2. **Abrir el archivo `index.html`** en un navegador web.
3. **Interacción**  
   - Escribir un nombre en el campo de entrada y presionar el botón **Agregar**.
   - Presionar el botón **Sortear** para elegir un amigo secreto.
   - Para eliminar un nombre, hacer clic en el botón ❌ junto al nombre.

## 💂️ Estructura del proyecto

```
📾 ChallengeAmigoSecreto
 ├ 💜 index.html
 ├ 💜 styles.css
 ├ 💜 app.js
 └ 💜 README.md
```

## 📝 Funcionalidades del código

### `agregarAmigo()`
- Agrega un nombre a la lista si no está vacío y no se repite.
- Actualiza la lista en la interfaz.

### `actualizarLista()`
- Muestra los nombres en una lista y agrega botones de eliminación.

### `eliminarAmigo(index)`
- Elimina un nombre específico de la lista.

### `sortearAmigo()`
- Selecciona aleatoriamente un nombre de la lista y lo muestra en pantalla.

### `actualizarBoton()`
- Cambia el color del botón **Agregar** dependiendo de si hay texto en el input.

## 🎯 Mejoras futuras

- Permitir el sorteo entre todos sin repetición.
- Agregar animaciones o efectos visuales.
- Exportar la lista de sorteos a un archivo.

## 📌 Autor

Desarrollado por **Alonso Gonzalez** 
[GitHub](https://github.com/calvitroca) | [LinkedIn](https://linkedin.com/in/calvitroca)

