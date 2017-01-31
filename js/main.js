// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    currentTitle: '',
    currentContent: '',
    editingItem: null,
    items: [
      {
        title: 'Todo Item Title',
        content: 'My First Todo Item'
      },
      {
        title: 'Second Todo Item Title',
        content: 'My Second Todo Item'
      }
    ]
  },
  computed: {
    editingLabel: function () {
      if (this.editingItem) {
        return 'Edit Item';
      } else {
        return 'Create Item';
      }
    },
    buttonTitle: function () {
      if (this.editingItem) {
        return 'Update';
      } else {
        return 'Create';
      }
    }
  },
  methods: {
    add: function () {
      console.log(this.currentTitle, this.currentContent);
      if (this.editingItem) {
        this.editingItem.title = this.currentTitle;
        this.editingItem.content = this.currentContent;
      } else {
        this.items.push({
          title: this.currentTitle,
          content: this.currentContent
        });
      }
      this.cancel();
    },

    // create a temporary placeholder
    // which can be referenced later
    // to update the item and populate
    // the input fields with the items current values
    edit: function (a) {
      this.editingItem = a
      this.currentTitle = a.title
      this.currentContent = a.content
    },
    done: function (i) {
      this.items.splice(i, 1);
    },
    cancel: function () {
      this.editingItem = null;
      this.currentTitle = '';
      this.currentContent = '';
    }
  }
});