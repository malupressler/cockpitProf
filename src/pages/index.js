import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import defaultProfileImage from '../../src/defaultProfileImage.jpg'; 
import Disciplinas from './materias'
import CustomModal from './modal';

function App() {
  const [materiais, setMateriais] = useState([]);
  const [redesSociais, setRedesSociais] = useState('');
  const [menu, setMenu] = useState('');
  const [perfilFoto, setPerfilFoto] = useState(defaultProfileImage);
  const [exibirBotaoExclusao, setExibirBotaoExclusao] = useState(false);


  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFotoSelecionada = (event) => {
    const fotoSelecionada = event.target.files[0];
    setPerfilFoto(URL.createObjectURL(fotoSelecionada));
    setExibirBotaoExclusao(true);
  };
  const handleExcluirFoto = () => {
    setPerfilFoto(null);
    setExibirBotaoExclusao(false);
  };
  

  const handleDrop = (event) => {
    event.preventDefault();
    const materialId = event.dataTransfer.getData('materialId');
    const material = document.getElementById(materialId);
    const dropzone = event.target;
    dropzone.appendChild(material);
  };

  const handleDragStart = (event, materialId) => {
    event.dataTransfer.setData('materialId', materialId);
  };

  const handleRedesSociaisChange = (event) => {
    setRedesSociais(event.target.value);
  };

  const handleMenuChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <div className="App">
      <h1>Site do Professor Admin</h1>
      {perfilFoto && (
    <div className="linha-container">
      <div>
      <h3>Foto de Perfil:</h3>
        <input  class="input-group mb-3" type="file" accept="image/*" onChange={handleFotoSelecionada} />
        <img src={perfilFoto} alt="Foto de Perfil" style={{ width: '200px', height: '200px' }} />
        {exibirBotaoExclusao && (
        <button type="button" class="btn btn-danger" onClick={handleExcluirFoto}>X</button>
      )}
        <Disciplinas/>
        <CustomModal/>
      </div>
      <div className="dados-container">
        <p>Nome: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Telefone: (123) 456-7890</p>
      </div>
    </div>
  )}
</div>

  );
}

export default App;