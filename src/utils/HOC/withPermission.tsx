import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Navigate } from 'react-router-dom'

type Role = 'admin' | 'customer' | undefined

// Redirect substituido por Navigate no react-router-dom v6
const withPermission =
  (roles: Role[], redirect = '') =>
  (Component: FC<any>) =>
  (props: any) => {
    const auth = useSelector((state: RootState) => ({
      profile: state.authentication.profile
    }))

    return roles.includes(auth.profile?.role)
      ? <Component {...props} />
      : redirect
        ? <Navigate to={redirect} />
        : null
  }

export default withPermission