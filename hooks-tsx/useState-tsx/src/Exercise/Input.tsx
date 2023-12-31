import React from "react";

// Criado um tipo chamado InputProps que recebe o tipo utilitário React.ComponentProps que é usado para disponibilizar as propriedades de um elemento HTML, dentro da função genérica é definido o elemento HTML e as propriedades do componente Input.
type InputProps = React.ComponentProps<"input"> & {
  label: string; // Define que a propriedade label é do tipo string.
  setState: React.Dispatch<React.SetStateAction<string>>; // Define que a propriedade setState é do tipo React.Dispatch que recebe como parâmetro uma função que retorna uma string.
};

// Criado um componente chamado Input que recebe as propriedades desestruturadas passadas como parâmetro que são do tipo InputProps. O rest operator(...props) é usado para passar todas as propriedades que não foram desestruturadas para o elemento HTML.
const Input = ({ label, id, setState, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        // O name é responsável por definir o nome do input, para que o input seja associado ao label.
        name={id}
        // O id é responsável por definir o id do input, para que o input seja associado ao label.
        id={id}
        // O type é responsável por definir o tipo do input, no caso é text.
        type="text"
        // O onChange executa a cada alteração do input e recebe como parâmetro desestruturado currentTarget(elemento que disparou o evento, no caso o input) e é executado a função setState atualizando o estado com o valor do input.
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        // O ...props é responsável por passar todas as propriedades que não foram desestruturadas para o elemento HTML.
        {...props}
      />
    </div>
  );
};

export default Input;
