import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import Element from '../components/Element'

import data from '../data/pte'

const getKey = () => {
  return uuidv4()
}

export default function Home() {
  let { elements: els } = data
  //console.log(els)
  return (
    <pte-main>
      {els.map((el) => {
        let key = 'el' + el.atomic_mass + '∫' + el.xpos + '∆' + el.ypos
        return (
          <pte-element
            key={key}
            data-key={key}
            id={'pte-' + el.number}
            style={{
              gridColumn: `${el.xpos} / ${el.xpos + 1}`,
              gridRow: `${el.ypos} / ${el.ypos + 1}`,
            }}
          >
            <pte-details>
              <h1>{el.symbol}</h1>
            </pte-details>
          </pte-element>
        )
      })}
    </pte-main>
  )
}
