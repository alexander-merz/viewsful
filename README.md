# viewsful
A collection of customizable standard web components built on top of Lit

## Installation

You can start using `viewsful` web components simply by putting the following `script` into the `head` of your `html`:
```html
<script src="https://unpkg.com/viewsful/dist"></script>
```
or install the `viewsful` npm package
```
npm i viewsful
```

## Framework Integration

### Angular
After the installation of the npm package add the following line at the start of `app.module.ts`:
```ts
import 'viewsful';
```
and let Angular know you are using web components with `CUSTOM_ELEMENTS_SCHEMA`:
```ts
@NgModule({
  // ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```
