Bootstrap.Forms.Checkbox = Bootstrap.Forms.Field.extend({
  classNames: ['checkbox'],
  
  inputField: Ember.Checkbox.extend({
    attributeBindings: ['name'],
    checkedBinding:   'parentView.checked',
    disabledBinding: 'parentView.disabled',
    classNameBindings: ['parentView.inputClassNames'],
    name: Ember.computed(function() {
      return this.get('parentView.name') || this.get('parentView.label');
    }).property('parentView.name', 'parentView.label')
  })
});
