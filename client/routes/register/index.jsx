import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm, { FormContext } from 'react-hook-form';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import * as R from 'ramda';
import UserCardForm from '#/components/form/UserCardForm';
import UserCardFormField from '#/components/form/UserCardFormField';
import DecoratedContainer from '#/components/decorated-container';
import Card from '#/components/card';
import FancyLink from '#/components/fancy-link';
import fallImage from '#/assets/images/undraw_fall.svg';
import successImage from '#/assets/images/undraw_order_confirmed.svg';
import { UserContext } from '#/Provider';
import useEffectOnce from '#/hooks/useEffectOnce';
import { handleRequestValidationError } from '#/../utils';

function Register() {
  const [registered, setRegistered] = React.useState(false);
  const form = useForm();
  const history = useHistory();
  const [user] = React.useContext(UserContext);

  useEffectOnce(() => {
    if (user) {
      history.replace('/');
    }
  });

  const onSubmit = React.useCallback(
    data =>
      axios
        .post('/api/users', data)
        .then(() => setRegistered(true))
        .catch(handleRequestValidationError(form)),
    [form],
  );

  if (registered) {
    return (
      <DecoratedContainer>
        <Card className="flex flex-col items-center">
          <h1 className="text-4xl font-light mb-4">You&apos;re In!</h1>
          <img alt="Woman jumping" src={successImage} style={{ width: 400 }} />
          <div className="text-2xl mt-8">
            <FancyLink to="/login">Login and start chatting!</FancyLink>
          </div>
        </Card>
      </DecoratedContainer>
    );
  }

  return (
    <DecoratedContainer>
      <FormContext {...form}>
        <UserCardForm
          header="Create an account"
          image={fallImage}
          alt="Woman holding leaves"
          buttonText="Register"
          underButton={<FancyLink to="/login">Already registered?</FancyLink>}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <UserCardFormField
            label="Email"
            name="email"
            type="email"
            register={form.register({
              required: 'Email is required',
              validate: R.o(R.or(R.__, 'Not a valid Email'), isEmail),
            })}
          />
          <UserCardFormField
            label="Username"
            name="username"
            type="text"
            register={form.register({ required: 'Username is required' })}
          />
          <UserCardFormField
            label="Password"
            name="password"
            type="password"
            register={form.register({
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Must have at least 8 characters',
              },
            })}
          />
        </UserCardForm>
      </FormContext>
    </DecoratedContainer>
  );
}

export default Register;
