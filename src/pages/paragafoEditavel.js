import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ParagrafoEditavel() {
  const [textLin, setTextLin] = useState('linkedin.com/in/'); // Estado para armazenar o texto do parágrafo
  const [editingLin, setEditingLin] = useState(false);
  const [textGit, setTextGit] = useState('github.com/');
  const [editingGit, setEditingGit] = useState(false);  // Estado para controlar o modo de edição

  const handleEditClickLin = () => {
    setEditingLin(true); // Altera o estado para permitir a edição
  };

  const handleSaveClickLin = () => {
    setEditingLin(false); // Altera o estado para encerrar a edição
  };

  const handleEditClickGit = () => {
    setEditingGit(true); // Altera o estado para permitir a edição
  };

  const handleSaveClickGit = () => {
    setEditingGit(false); // Altera o estado para encerrar a edição
  };

  const handleChangeLin = (event) => {
    setTextLin(event.target.value); // Atualiza o estado com o texto digitado no input
  };

  const handleChangeGit = (event) => {
    setTextGit(event.target.value); // Atualiza o estado com o texto digitado no input
  };

  return (
    <div>
      {editingLin ? ( // Renderiza o campo de edição se estiver no modo de edição
        <div>
            <label>Linkedin:</label>
            <input type="text" value={textLin} onChange={handleChangeLin} />
            <button type="button" class="btn btn-success" onClick={handleSaveClickLin}>Salvar</button>
        </div>
      ) : ( // Renderiza o parágrafo estático se não estiver no modo de edição
        <div>
            <label>Linkedin:</label>
            <p>{textLin}</p>
            <button type="button" class="btn btn-primary" onClick={handleEditClickLin}>Editar</button>
        </div>
      )}
      {editingGit ? ( // Renderiza o campo de edição se estiver no modo de edição
        <div>
            <label>Github:</label>
            <input type="text" value={textGit} onChange={handleChangeGit} />
            <button type="button" class="btn btn-success" onClick={handleSaveClickGit}>Salvar</button>
        </div>
      ) : ( // Renderiza o parágrafo estático se não estiver no modo de edição
        <div>
            <label>Github:</label>
            <p>{textGit}</p>
            <button type="button" class="btn btn-primary" onClick={handleEditClickGit}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default ParagrafoEditavel;
