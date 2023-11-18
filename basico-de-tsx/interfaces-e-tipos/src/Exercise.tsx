import React from "react";
import ButtonIncrement from "./ButtonIncrement";

const Exercise = () => {
  const [total, setTotal] = React.useState(0); // Criado estado chamado total e a função que altera o estado chamada setTotal. O estado começa com o valor 0.

  return (
    <div>
      <p>Total: {total}</p>
      {/* Chama o componente ButtonIncrement e o estado na propriedade total e a função que altera o estado na propriedade setTotal */}
      <ButtonIncrement total={total} setTotal={setTotal} />
    </div>
  );
};

export default Exercise;
