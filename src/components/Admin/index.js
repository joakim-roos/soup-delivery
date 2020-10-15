import React, { useContext } from 'react'
import styled from 'styled-components'

import { AuthUserContext } from '../../context'
import { useAuthorization } from '../Session'
import * as ROLES from '../../constants/roles'

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

const AdminPage = () => {
  useAuthorization(condition)
  return (
    <>

      <h2>Orders</h2>

      <h2>Popular Soups</h2>
      <h2>Popular Extras</h2>

    </>
  )
}

export default AdminPage