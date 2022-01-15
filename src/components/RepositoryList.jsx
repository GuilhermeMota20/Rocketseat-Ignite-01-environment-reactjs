import { useState, useEffect } from "react"; // useEffect: dispara uma função quando algo acontecer na aplicação
import { RepositoryItem } from "./RepositoryItem";

import '../Styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/GuilhermeMota20/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />    
                })}
            </ul>
        </section>
    );
}