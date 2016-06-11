import Ember from 'ember';

function regexEscape(s){
  return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function fuzzyHighlight([term], {pre = '<', post = '>', cssClass = 'highlight'} = {}) {
  const termWithClasses = term
    .replace(new RegExp(`${regexEscape(pre)}(.?)${regexEscape(post)}`, 'g'), `<span class="${cssClass}">$1</span>`);

  return Ember.String.htmlSafe(termWithClasses);
}

export default Ember.Helper.helper(fuzzyHighlight);
