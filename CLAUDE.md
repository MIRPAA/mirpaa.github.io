use this convention:

* Use `import module` and not `from module import name`
* you may `from . import module` if the imporing module is in the same namespace
* avoid namesapce inflation, e.g. use `parsers.text.Text()` and not `parsers.text_parser.TextParser()`
