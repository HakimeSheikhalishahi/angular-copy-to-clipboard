# AngularCopyToClipboard

<h2 align="center">Angular Copy To Clipboard (Directive/Component/Content projection)</h2>
 
 ![copyToClipboard](https://user-images.githubusercontent.com/51107856/174605200-ced132ae-41bc-4911-b737-498a7c3d3e28.png?raw=true "Angular Copy To Clipboard")
<!-- # Demo

<a href='https://stackblitz.com/edit/angular-13-oonew7?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html'>
stackblitz
</a> -->

# Copy to clipboard by three ways:

- Directive
- Component(Has icon with icon color and icon size)
- Content projection

## Table of contents

- [Install](#install)
- [Quick start](#quick-start)
- [How to use?](#how-to-use)
- [Input](#input)
- [Output](#output)
- [Creator](#creator)
- [Donate](#donate)
- [License](#license)

# Install

```bash
npm i angular-copy-to-clipboard
```

# Quick start

```typescript
import { AngularCopyToClipboardModule } from "angular-copy-to-clipboard";

@NgModule({
  imports: [AngularCopyToClipboardModule],
})
export class AppModule {}
```

# How to use?

- ## As Component

```html
<angular-copy-to-clipboard
  [height]="2"
  [width]="2"
  [color]="'#3456cc'"
  [targetId]="'copy-me'"
  (error)="error()"
  (success)="success()"
></angular-copy-to-clipboard>
```

- ## As Directive

#### You can use it in each HTML tag that you need

```html
<button
  copyToClipboard
  [targetId]="'copy-me'"
  (error)="error()"
  (success)="success()"
>
  Please copy me
</button>
```

- ## As Content projection

```html
<angular-copy-to-clipboard [content]="'copy me'" (copyError)="error()">
  My component or html element
</angular-copy-to-clipboard>
```

## Define functions

```typescript
  public error(): void {
    /** */
  }
  public success(): void {
    /** */
  }
```

# Input

| Name     | Type              | Default  | Required? | Description                                      |
| -------- | ----------------- | -------- | --------- | ------------------------------------------------ |
| targetId | `string` `number` |          | yes       | The Element Id of content that you want to copy. |
| width    | `number`          | `1.3rem` | no        | Icon width when use as component.                |
| height   | `number`          | `1.3rem` | no        | Icon height when use as component.               |
| color    | `string`          | `gray`   | no        | Icon color when use as component.                |

# Output

| Name      | Description                 |
| --------- | --------------------------- |
| (error)   | Define message for error.   |
| (success) | Define message for success. |

# Creator

**Hakime sheikhalishahi**

- http://www.linkedin.com/in/hakime-sheikhalishahi
- h.sheykhalishahi@gmail.com

# Donate

If you like my work and I save your time you can buy me a 🍺 or 🍕

My Wallet address , Tether USD (ARBITRUM) :
`0x04e125a00BCd45A4DD23279DcAfF1eAFd49DbEf6`

# License

MIT
