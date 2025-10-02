"use client";

import { useState, useEffect } from "react";
import { UserItem } from "./UserItem";

interface User {
    id: number;
    nome: string;
}

export function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    const handleDelete = (id: number) => {
        fetch(`http://localhost:3001/users/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                setUsers(users.filter((user) => user.id !== id));
            }
        });
    };

    return (
        <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">
                Lista de Usuários da API
            </h2>
            <ul>
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}
