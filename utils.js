import { validationResult } from 'express-validator';
import * as R from 'ramda';
// https://tailwindcss.com/docs/configuration/#referencing-in-javascript
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config';

export const { theme } = resolveConfig(tailwindConfig);

/*
  console.log, but it returns the value that was passed in. This
  function is useful for inspecting the value in a promise chain, or
  when composing functions.

  usage:
    Promise.resolve(5)
      .then(inspect) // prints 5
      .then(five => doSomething(five))
      .then(inspect) // prints return value of doSomething
*/
export function inspect(x) {
  console.log(x); // eslint-disable-line no-console
  return x;
}

/*
  check if an object has a value for every key passed in.

  usage:
    hasProps(['foo', 'bar'], { foo: 10, bar: 20 }) === true
    hasProps(['foo', 'bar'], { bar: 20, baz: 30 }) === false
*/
export const hasProps = R.curry((props, obj) =>
  R.compose(R.all(R.identity), R.values, R.pickAll(props))(obj),
);

// middleware for express validation
// any validation errors are sent to client
export function handleValidation(req, res, next) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).json({ errors: errors.mapped() });
  }
}

/*
  set error messages for a form. error.response.data object must be in
  the following format:

    {
      errors: {
        username: {
          msg: 'error message',
        },
        password: {
          msg: 'another message',
        },
      },
    }

  form: the useForm hook from react-hook-form
  error: the error object from a rejected axios request

  usage:
    axios.get('/api/foo')
      .catch(handleRequestValidationError(form))
*/
export const handleRequestValidationError = R.curry((form, error) => {
  const paramErrors = error.response.data.errors;

  if (!paramErrors) {
    throw error;
  }

  R.forEachObjIndexed((value, key) => {
    form.setError(key, 'paramError', value && value.msg);
  }, paramErrors);
});
