import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store'; // поправьте путь под вашу структуру
import { StateSchema } from 'app/providers/StoreProvider';

interface StoreDecoratorProps {
  children: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreDecorator = ({ children, initialState }: StoreDecoratorProps) => {
  const store = createReduxStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};
