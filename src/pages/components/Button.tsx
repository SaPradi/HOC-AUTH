interface ButtonProps {
  label: string;
  loading: boolean;
  login: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, loading, login }) => {
  return (
    <button onClick={login} disabled={loading}>
      {loading ? 'Cargando...' : label}
    </button>
  );
};

export default Button;
