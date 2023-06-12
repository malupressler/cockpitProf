import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CustomModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [materia, setMateria] = useState('');
  const [arquivo, setArquivo] = useState(null);
  const [nomeArquivo, setNomeArquivo] = useState('');

  const handleMateriaChange = (e) => {
    setMateria(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setArquivo(file);
  };

  const handleNomeArquivoChange = (e) => {
    setNomeArquivo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salvar o arquivo com o nome especificado
    if (arquivo && nomeArquivo) {
      const formData = new FormData();
      formData.append('materia', materia);
      formData.append('arquivo', arquivo, nomeArquivo);

      // Aqui você pode enviar o formData para o servidor para salvar o arquivo

      // Limpar o formulário após o envio
      setMateria('');
      setArquivo(null);
      setNomeArquivo('');
    }
  };

  return (
    <>
    <h5>Adicione a disicplina que deseja, arquivos relacionados a aula: </h5>
      <Button variant="primary" onClick={handleShow}>
        Adicione arquivo 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar um novo arquivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="materia">Matéria:</label>
          <select
            id="materia"
            value={materia}
            onChange={handleMateriaChange}
            required
          >
            <option class="dropdown-item" value="">Selecione uma matéria</option>
            <option class="dropdown-item" value="ia">Inteligencia Artificial I</option>
            <option class="dropdown-item" value="proeng3">Processo de engenharia III</option>
            <option class="dropdown-item" value="expusua">Projeto de Interação e Exp Usuario</option>
          </select>
        </div>
        <div>
          <label htmlFor="arquivo">Arquivo:</label>
          <input
            type="file"
            id="arquivo"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nomeArquivo">Nome do Arquivo:</label>
          <input
            type="text"
            id="nomeArquivo"
            value={nomeArquivo}
            onChange={handleNomeArquivoChange}
            required
          />
        </div>
        <Button type="submit" variant="primary" onClick={handleClose}>
            Salvar
          </Button>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
