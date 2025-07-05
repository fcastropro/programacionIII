
type Persona = {
  nombre: string;
  apellido: string;
};

const personas: Persona[] = [
  { nombre: 'Fernando', apellido: 'Castro' },
  { nombre: 'Carlos', apellido: 'Pérez' },
  { nombre: 'Lucía', apellido: 'Gómez' },
  { nombre: 'Miguel', apellido: 'Rojas' }
];

export default function ObjetosList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((persona, index) => (
          <tr key={index}>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
