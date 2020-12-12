import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOAT } from '../../queries'

import { List } from 'antd'

import Boat from '../listItems/Boat'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Boat = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_BOAT)
  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`
  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.boat.map(({ id, make }) => (
        <List.Item key={id}>
          <Boat key={id} id={id} make={make} />
        </List.Item>
      ))}
    </List>
  )
}

export default Boat
