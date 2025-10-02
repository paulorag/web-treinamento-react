"use client";

interface User {
    id: number;
    nome: string;
}

interface UserItemProps {
    user: User;
    onDelete: (id: number) => void;
}

export function UserItem({ user, onDelete }: UserItemProps) {
    return (
        <li className="flex justify-between items-center text-gray-400 p-2 border-b border-gray-700">
            <span>
                {user.nome}(ID: {user.id})
            </span>
            <button
                onClick={() => onDelete(user.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
            >
                Deletar
            </button>
        </li>
    );
}
