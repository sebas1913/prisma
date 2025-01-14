import { Suspense } from "react"; //Ayuda a esperar los resultados de las promesas

interface User {
  id: number;
  name: string;
  email: string;
}

// Función para obtener los usuarios
async function fetchUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3000/api/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

// Componente principal
export default function Home() {
  return (
    <div>
      <h1>Usuarios</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
}

// Componente para mostrar la lista de usuarios
async function UserList() {
  const users = await fetchUsers();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
