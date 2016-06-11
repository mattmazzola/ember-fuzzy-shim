import { fuzzyHighlight } from 'dummy/helpers/fuzzy-highlight';
import { module, test } from 'qunit';

module('Unit | Helper | fuzzy highlight');

// Replace this with your real tests.
test('if pre and post tokens are not found term is unmodified', function(assert) {
  assert.equal(fuzzyHighlight(['abc']), 'abc');
});

test('if pre and post tokens are found replace with span tags using class', function (assert) {
  assert.equal(fuzzyHighlight(['a<b>c<d>e']), `a<span class="highlight">b</span>c<span class="highlight">d</span>e`);
});

test('if custom pre and post properties are provided use those for matching', function (assert) {
  assert.equal(fuzzyHighlight(['a[b]c<d>e'], { pre: '[', post: ']' }), `a<span class="highlight">b</span>c<d>e`);
});

test('if custom cssClass is provided use that for span tags', function (assert) {
  assert.equal(fuzzyHighlight(['a[b]c<d>e'], { pre: '[', post: ']', cssClass: "myClass" }), `a<span class="myClass">b</span>c<d>e`);
});
