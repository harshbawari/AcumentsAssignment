import { createStore } from 'redux';
import { balance } from '../shared/BankBalance';

export const ConfigureStore = () => {
    const store = createStore(
        balance
    );

    return store;
}