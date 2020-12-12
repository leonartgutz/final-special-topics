import React, { useState } from 'react'
import { Card, List } from 'antd'

import { EditOutlined } from '@ant-design/icons'
import UpdatePerson from '../forms/UpdatePerson'
import RemovePerson from '../buttons/RemovePerson'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Person = props => {
  const [id] = useState(props.id)
  const [make, setMake] = useState(props.make)
  const [model, setModel] = useState(props.model)
  const [year, setYear] = useState(props.year)
  const [price, setPrice] = useState(props.price)
  const [owner, setOwner] = useState(props.owner)
  const styles = getStyles()


  return (
    <List.Item key={id}>
      <Card
          actions={[]}
          style={styles.card}
        >
          {make}
      </Card>
    </List.Item>
  )
}

export default Person
