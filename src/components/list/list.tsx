import React, { Component } from "react"
import { ListItemDefault, ListItemSubtitle } from "./listItems"

interface ListProps {
  listItems: Array<ListItemDefault | ListItemSubtitle | JSX.Element>
}

export class List extends Component<ListProps, {}> {
  render() {
    const renderedItems = this.renderListItems()

    return <ul>{renderedItems}</ul>
  }

  private renderListItems() {
    const listItems = this.props.listItems

    return listItems.map((item, index) => {
      if (item instanceof ListItemDefault) {
        return <li key={index}>{item.title}</li>
      } else if (item instanceof ListItemSubtitle) {
        return (
          <li key={index}>
            {item.title}: {item.subtitle}
          </li>
        )
      } else {
        return <li key={index}>{item}</li>
      }
    })
  }
}
