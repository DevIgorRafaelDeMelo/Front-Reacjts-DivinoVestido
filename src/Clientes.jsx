import React from "react";

const ClientesList = ({ clientes }) => {
    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-yellow-600 mb-4">
                Lista de Clientes
            </h2>

            <ul className="divide-y divide-gray-200">
                {clientes.map((cliente) => (
                    <li
                        key={cliente.id}
                        className="py-3 flex justify-between items-center hover:bg-yellow-50 transition rounded-md px-2"
                    >
                        <div>
                            <p className="text-gray-800 font-semibold">
                                {cliente.nome.charAt(0).toUpperCase() +
                                    cliente.nome.slice(1).toLowerCase()}
                            </p>
                            <p className="text-sm text-gray-600">{cliente.evento}</p>
                        </div>

                        <div className="text-right">
                            <a
                                href={`https://wa.me/55${cliente.telefone.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-600 font-medium hover:underline"
                            >
                                {cliente.telefone}
                            </a>
                            <p className="text-sm text-gray-500">
                                Pessoas: {cliente.pessoas}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientesList;
