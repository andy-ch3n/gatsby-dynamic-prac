import { RouteComponentProps } from "@reach/router"
import React, { useEffect, useState } from "react"

interface Props
  extends RouteComponentProps<{
    results: string
  }> {}

export const RandomPerson: React.FC<Props> = ({results}) => {
  const [person, setPerson] = useState()

  useEffect( () => {
     fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => setPerson(x))
  }, [results])

  return (
    <div>
      {" "}
      <pre>{JSON.stringify(person, null, 2)}</pre> Hello
    </div>
  )
}
