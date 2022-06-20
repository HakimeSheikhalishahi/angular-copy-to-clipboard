# AngularCopyToClipboard

<h2 align="center">Angular Copy To Clipboard (Directive/Component/Content projection)</h2>
 
 ![copyToClipboard](https://user-images.githubusercontent.com/51107856/162959789-21243f3c-e5ad-4bad-abf6-9fe602653c44222.png?raw=true "Angular Copy To Clipboard")
# Demo

<a href='https://stackblitz.com/edit/angular-zavrzb?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html'>
stackblitz
</a>

# Copy to clipboard by three ways:

- Directive
- Component(Has icon with icon color and icon size)
- Content projection

## Table of contents

- [Install](#install)
- [Quick start](#quick-start)
- [Import style and icon](#import-style-and-icon)
- [How to use?](#how-to-use)
- [Input](#input)
- [Output](#output)
- [Field properties and methods](#field-properties-and-methods)
- [Button setting](#button-setting)
- [Validators](#validators)
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
  [height]="50"
  [width]="50"
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

| Name     | Type              | Default | Required? | Description                                      |
| -------- | ----------------- | ------- | --------- | ------------------------------------------------ |
| content  | `string` `number` |         | no        | The content that you want to copy.               |
| targetId | `string` `number` |         | -         | The Element Id of content that you want to copy. |
| width    | `number`          | `25px`  | no        | Icon with when use as component.                 |
| height   | `number`          | `25px`  | no        | Icon height when use as component.               |
| color    | `string`          | `gray`  | no        | Icon color when use as component.               |

# Output

| Name      | Description                |
| --------- | -------------------------- |
| (error)   | Define message for error   |
| (success) | Define message for success |

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
