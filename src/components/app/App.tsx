import React, { Component } from "react"
import { List, ListItemDefault, ListItemSubtitle } from "../list"
import { Button } from "../button"

export class App extends Component {
  private items: Array<ListItemDefault | ListItemSubtitle | JSX.Element> = [
    new ListItemDefault("Foo"),
    new ListItemSubtitle("Bar", "Baz"),
    new ListItemDefault("Qux"),
    <Button />,
    new ListItemDefault("Quux"),
  ]

  render() {
    return (
      <div className="App">
        <main>
          <List listItems={this.items} />
        </main>
      </div>
    )
  }
}
