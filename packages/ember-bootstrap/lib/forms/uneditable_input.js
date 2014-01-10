Bootstrap.Forms.UneditableInput = Bootstrap.Forms.Field.extend({

  inputField: Ember.View.extend({
    tagName:            'span',
    classNames:         ['uneditable-input'],
    attributeBindings:  ['name'],
    template: Ember.Handlebars.compile('{{view.value}}'),

    valueBinding:       'parentView.value',
    classNames:         ['form-control-static'],
    classNameBindings:  ['parentView.inputClassNames'],
    name: Ember.computed(function() {
      return this.get('parentView.name') || this.get('parentView.label');
    }).property('parentView.name', 'parentView.label')
  })
});
