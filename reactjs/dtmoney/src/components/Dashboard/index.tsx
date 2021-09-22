import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

export const Dashboard = () => {
    return(
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    )
};