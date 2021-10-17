"use strict";

const pacientes = [
  { id: 1, nome: "Mario", dataNascimento: "1984-01-11" },
  { id: 2, nome: "Joao", dataNascimento: "1983-01-11" },
  { id: 3, nome: "Jose", dataNascimento: "1959-01-11" },
];

module.exports.listarPacientes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        pacientes,
      },
      null,
      2
    ),
  };
};

module.exports.obterPaciente = async (event) => {
  const { id: paciente_id } = event.pathParameters;
  const paciente = pacientes.find((paciente) => paciente.id == paciente_id);

  if (!paciente) {
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          error: "Paciente não encontrado",
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        paciente,
      },
      null,
      2
    ),
  };
};
