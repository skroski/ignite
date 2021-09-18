import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";


export const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/skroski/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Listagem de Repositórios</h1>
            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}
            </ul>
        </section>
    )
};