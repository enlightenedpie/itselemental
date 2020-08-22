import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import Element from '../components/Element'

import data from '../data/pte'

const getKey = () => {
  return uuidv4()
}

export default function Home() {
  let { elements: els } = data
  console.log(els)
  return (
    <main>
      {els.map((el) => {
        return (
          <div
            key={getKey()}
            className="el"
            id={'el' + el.number}
            style={{
              gridColumn: `${el.xpos} / ${el.xpos + 1}`,
              gridRow: `${el.ypos} / ${el.ypos + 1}`,
            }}
          ></div>
        )
      })}
    </main>
  )
}
