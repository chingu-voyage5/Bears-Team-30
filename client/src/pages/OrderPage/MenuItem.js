import React from 'react'

const MenuItem = props => {
  const { data, category } = props
  const itemDisplay = data.allMenuItems
    .filter(item => item.category === category)
    .map(item => {
      return (
        <tr key={item._id}>
          {category === 'soup' ? (
            <td>{item.name}</td>
          ) : (
            <td>
              {category.charAt(0).toUpperCase() + category.substr(1)}{' '}
              {item.name}
            </td>
          )}
          <td>{item.price}</td>
          <td>
            <input type='number' name='qty' min='0' defaultValue='0' />
          </td>
        </tr>
      )
    })

  return <React.Fragment>{itemDisplay}</React.Fragment>
}

export default MenuItem
