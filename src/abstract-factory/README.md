Abstract Factory Pattern
====================================

## Example notes

This example is a bit contrived, yet it should be at least tangible.

Imagine you need to create web forms for a company whose interfaces run on several channels. In this is example, there
is a "kiosk" channel and an "online" channel. The appearance and behavior of the form controls will be different across
channels, yet you only want to assemble the form once.

This fits into the Abstract Factory Pattern, because there is a matrix of products (form controls) and environments (channels):

| Channel/Product | Text Input | Password Input | Checkbox input  |
|-----------------|:----------:|:--------------:|:---------------:|
| Online          | ✓          | ✓              | ✓               |
| Kiosk           | ✓          | ✓              | ✓               |

The matrix could be expanded with more controls and channels.

One advantage of this approach is that there is a clear framework for adding a new channel and the consumer code will
need very little, if any, updating to accommodate the new channel.

A disadvantage could be argued that to add a new control, a new concrete implementation must be created for every channel.

## Notes on the implementation

To illustrate the pattern clearly all the form controls and their interfaces are in the `products` directory. To avoid
noise all the products simply implement one `SingleValueInput` interface. This is also a nice example of Typescript
generics, using a generic type to define the form controls value type.

The factory function exposed by `factory.ts` would ideally be a static method of the `InputControlFactory` in
`factories/input-control-factory.ts`, but this creates a circular module dependency which cannot be
bundled into a single file either by Webpack or Browserify. This is unfortunate; its difficult to name both modules.