Builder Pattern
========================

## Pattern summary

Googling the Builder Pattern yields various interpretations. This example, tries to 
stay close the original Gang of Four description.

The Builder Pattern applies where the complexity of constructing a product warrants several steps, 
but the client should be sheilded from this process and only be exposed to the finished product. 
This is desirable because it also means that the completed product can be immutable. 
As opposed to exposing a product with setters.

Retrieving and processing the data required for construction so that it can applied to these 
building steps might also require some work. The Builder Pattern prescribes that this part 
can be hidden from the client using a *Director*, but it maybe considered overkill depending on 
 the scenario.
 
## Example notes 

In this example, the client requires a class that will print a list of all a user's files (managed by the system)
as either an HTML list or JSON. However, the backend exposes only endpoints per file type.

The Director performs the steps to call the various APIs and uses the Builder to add each set of files 
as construction steps. Once all the files have been added the director can can call `builder.build` 
which will create the finished product.

## Implementation notes

`HtmlBuilder` and `JsonBuilder` are both subclasses of the abstract `Builder` class. This could be 
implemented more simply by implementing the `build()` method in `Builder` and making it a factory method.
However, this does illustrate how the pattern allows the building steps for each product type to differ 
significantly whereby they require their own specific builder implementations.

Error handling is omitted for brevity.