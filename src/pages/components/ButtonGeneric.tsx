interface ButtonProps {
    label: string;
}
    
const ButtonGeneric:React.FC<ButtonProps> = ({label}) => {
  
    return <button>{label}</button>
    
  
}
  
export default ButtonGeneric;
  