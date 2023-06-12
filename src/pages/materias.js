import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

const CustomDropdown = () => {
  return (
    <div>
    <h5>Escolha a disciplina:</h5>
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Disciplina
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="disicplina/ia">Inteligencia Artificial I</Dropdown.Item>
        <Dropdown.Item href="disicplina/proeng3">Processo de engenharia III</Dropdown.Item>
        <Dropdown.Item href="disicplina/expusua">Projeto de Interação e Exp Usuario</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default CustomDropdown;
