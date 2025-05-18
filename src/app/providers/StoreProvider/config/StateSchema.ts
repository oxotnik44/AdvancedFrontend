import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSheme } from 'features/AuthByUserName/model/types/loginSheme';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSheme;
}
