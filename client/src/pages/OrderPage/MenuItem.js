import React from 'react'

const MenuItem = props => {
  const { menuItems, category, menuItemChange } = props
  const itemDisplay = menuItems
    .filter(item => item.category === category)
    .map(item => {
      return (
        <tr key={item.foodId}>
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
            <input
              type='number'
              name={`qty-${item.foodId}`}
              min='0'
              value={item.qty}
              onChange={menuItemChange}
            />
          </td>
        </tr>
      )
    })

  return <React.Fragment>{itemDisplay}</React.Fragment>
}

export default MenuItem
