export class ListItemDefault {
  title: string

  constructor(title: string) {
    this.title = title
  }
}

export class ListItemSubtitle {
  subtitle: string
  title: string

  constructor(title: string, subtitle: string) {
    this.subtitle = subtitle
    this.title = title
  }
}
