import React, { Component } from "react"
import { List, ListItemDefault, ListItemSubtitle } from "../list"
import { Button } from "../button"

export class App extends Component {
  items: Array<ListItemDefault | ListItemSubtitle | Component> = [
    new ListItemDefault("Foo"),
    new ListItemSubtitle("Bar", "Baz"),
    new ListItemDefault("Qux"),
    new Button({}),
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
