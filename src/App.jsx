import './App.css';
import './styles.scss';
import Contairner from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <Contairner/>
    </div>
  );
}

// Test de programación - Nutrialus
// El objetivo del test de programación es conectarse con un servicio REST para obtener un paciente, se requiere mostrar su información.

// Para obtener los datos de un paciente debes conectarte con el servicio https://0q27loouph.execute-api.us-east-1.amazonaws.com/ (cada vez que llames al servicio este responderá algo distinto).

// Los datos que retorna tienen la siguiente estructura:


// {
//     "name":  String,
//     "email": String,
//     "phone": String,
//     "image": String
// }
// Debes desarrollar una APP sencilla en React que sea capáz de mostrar la información proveniente del servicio entregado anteriormente.

// El proyecto lo debes publicar en tu cuenta de Github, Gitlab, etc. y enviarnos el link al mail: hola@nutrial.us con el asunto “Test programación + <tu_nombre>”. Importante mencionar como ejecutar el proyecto.

// Bonus

// Crear un botón que cada vez que se presione actualice los datos.
// Mostrar buen manejo de estilos usando Flexbox (que se vea bonito).
// Desarrollar la APP en React Native usando Expo.

export default App;