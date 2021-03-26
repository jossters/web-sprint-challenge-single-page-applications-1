import React from 'react'

export default function Confirmation({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='confirmation container'>
      <h2>Hi{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>
      <p>Special Instruction: {details.civil}</p>

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

