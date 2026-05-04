interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export const Input = ({ label,name, ...props }: InputProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                type="text" 
                id={name} 
                name={name} 
                {...props}
            />
        </div>
    )
}