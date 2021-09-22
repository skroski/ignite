import { Container } from "./styles";

export const TransactionTable = () => {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/07/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ -1.100</td>
                        <td>Casa</td>
                        <td>30/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
};