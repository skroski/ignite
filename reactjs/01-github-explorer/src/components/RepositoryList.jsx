import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Formulários no React Aula 01',
    link: 'https://github.com/unform/unform'
}

const repositoryName = 'unform2';

export const RepositoryList = () => {
    return(
        <section className="repository-list">
            <h1>Listagem de Repositórios</h1>
            <ul>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}; 