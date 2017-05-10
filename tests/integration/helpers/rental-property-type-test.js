
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-property-type', 'helper:rental-property-type', {
  integration: true
});

// Replace this with your real tests.
test('should return Community', function(assert){
  this.set('value','Condo');
  this.render(hbs`{{rental-property-type value}}`);
  assert.equal(this.$().text().trim(),'Community');
  
  this.set('value','Townhouse');
  this.render(hbs`{{rental-property-type value}}`);
  assert.equal(this.$().text().trim(),'Community');

  this.set('value','Apartment');
  this.render(hbs`{{rental-property-type value}}`);
  assert.equal(this.$().text().trim(),'Community');
  
});

test('should return Standalone',function(assert){
  this.set('value','test');
  this.render(hbs`{{rental-property-type value}}`);
  assert.equal(this.$().text().trim(),'Standalone')
})

