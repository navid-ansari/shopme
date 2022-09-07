import axios from 'axios'
import {
  InputError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
  BadResponseError
} from './error-handler'

export const get = async ({ url }) => {
  try {
    return await axios.get(url)
  } catch (error) {
    throwError({ status: error.response.status })
  }
}

export const post = async ({ url, payload }) => {
  try {
    return await axios.post(url, payload)
  } catch (error) {
    throwError({ status: error.response.status })
  }
}

export const put = async ({ url, payload }) => {
  try {
    return await axios.put(url, payload)
  } catch (error) {
    throwError({ status: error.response.status })
  }
}

export const throwError = ({ status }) => {
  if (status === 400) {
    throw new InputError('Bad client request')
  } else if (status === 401) {
    throw new AuthenticationError('Unauthorized request')
  } else if (status === 403) {
    throw new ForbiddenError('Forbidden request')
  } else if (status === 404) {
    throw new NotFoundError('Invalid client request url')
  } else if (status === 500) {
    throw new InternalServerError('Internal server error')
  } else if (status === 502) {
    throw new BadResponseError('Invalid response from gateway server')
  }
}
