Bootstrap.Forms.UneditableInput = Bootstrap.Forms.Field.extend({

  inputField: Ember.View.extend({
    tagName:            'span',
    classNames:         ['uneditable-input', 'form-control-static'],
    attributeBindings:  ['name'],
    template: Ember.Handlebars.compile('{{view.value}}'),

    valueBinding:       'parentView.value',
    classNameBindings:  ['parentView.inputClassNames'],
    name: Ember.computed(function() {
      return this.get('parentView.name') || this.get('parentView.label');
    }).property('parentView.name', 'parentView.label')
  })
});
