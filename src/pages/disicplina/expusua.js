import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const expusua = () => {
  const [arquivos, setArquivos] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setArquivos([...arquivos, file]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fazer o envio dos arquivos para o servidor, se necessário

    // Limpar o formulário após o envio
    setArquivos([]);
  };

  return (
    <>
    <div>
      <h1>Projeto de Interação e Experiência do Usuario</h1>
    <Link href="/"><h4 class="back_home">Voltar para home</h4></Link>
        <div>
          <label htmlFor="arquivo">Arquivo:</label>
          <input
            type="file"
            id="arquivo"
            onChange={handleFileChange}
            accept=".pdf"
            required
          />
        </div>

      {arquivos.length > 0 && (
        <div class="lista-arquivo">
          <h3>Lista de Arquivos:</h3>
          {arquivos.map((arquivo, index) => (
            <div key={index}>
              <embed src={URL.createObjectURL(arquivo)} width="1000" height="800" type="application/pdf" />
            </div>
          ))}
        </div>
      )}
    </div>
      </>
  );
};

export default expusua;
