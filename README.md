# Ember-fuzzy-shim
Ember addon which adds fuzzy shim exposing fuzzy as module and also provides fuzzy-highlight helper

## Usage
```
import fuzzy from 'fuzzy';
```

`{{fuzzy-highlight}}` helper used to stylize the characters matched from the search term

Basic Usage:
```
// name = 'a<b>c';
{{fuzzy-highlight name}}
// => 'a<span class="highlight">b</span>c'
```

Customized Usage:
```
// name = 'a[b]c<d>e';
{{fuzzy-highlight name pre="[" post="]" cssClass="xyz"}}
// => 'a<span class="xyz">b</span>c<d>e'
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
