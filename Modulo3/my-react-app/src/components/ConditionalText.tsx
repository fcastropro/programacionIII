export default function ConditionalText() {
  const isLoggedIn = false;

  return (
    <p>
      {isLoggedIn ? 'Bienvenido de nuevo' : 'Por favor inicia sesión'}
    </p>
  );
}