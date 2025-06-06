import { useState } from 'react';

export default function DosForm() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const suma = Number(a) + Number(b);
    alert(`Suma, ${suma}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Número A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}