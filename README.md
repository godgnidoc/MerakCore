<h1>Merak</h1>

Merak is by designed to help user describe their solutions using diagram, and generate source code or configuration file from the edited model diagram eventrally. Generated source code and configuration files enhances the consistency through the work flow by reducing artificial procedure.

The term `Model` in Merak stands for a certain data structure describing objects with attributes and relationships between objects, relationship carries attributes also. The term `Meta Model` in Merak stands for a scheme for model, defines the data structures of every objects and relationships, constraints whithin the model. `Model` contains all necessary information only, when focus on certain perspective, those indirect information who can be deduced from the model should be derived, those who are not used should be hidden, that is what the term `View` stands for. `Realtime co-designing` is supported, realtime supporting avoids the cost dealing with conflict when merging two or more offline versions. Snap shot and operation jurnal could be used to keep history in case something got broken that rollback operation should be taken.

Everything in Merak should be extensible by extension configuration or extension program, the following actions could be taken to extend the Merak.

- Add meta model configuration -> New kind of model could be comprehended
- Add model adaptor extension -> Model could be imported from external file format
- Add view provider extension -> View could be constructed for certain kind of model
  - When opening an diagram editor, one view should be chosen to help user focus on one perspective
  - Customized operations could be provided on certain view, these abstract operations should be mapped to basic operation on model.
- Add wizard provider extension -> Wizard could be provided help user construct certain kind of model or part of it
- Add consumer provider extension -> Source code or configuration could be generated from model.
- Add color theme extension -> Provide more choices about the look of user interface
  - Themes should be categorized in `dark`, `light` and `high-contrast` so that those user interfaces who cannot use theme defined colors directly could change its look following the theme category.